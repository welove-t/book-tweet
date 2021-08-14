import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useState,
  Fragment,
} from 'react';
import Header from '../../components/lp/Header';
import Image from 'next/image';
import { useRouter } from 'next/router';
import firebase from 'firebase/app';
import { useUser } from '../../context/userContext';
import toast, { Toaster } from 'react-hot-toast';
import { Dialog, Transition } from '@headlessui/react';
import CreateImage from '../../components/bookId/CreateImage';

type books = {
  title: string;
  imgUrl: string;
  comment: string;
};

const BookDetail = () => {
  const router = useRouter();
  const { user } = useUser();
  const bookId = router.query.id;
  // 本削除時のダイアログ表示ステイト
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  // 本詳細データのステイト;
  const [bookData, setBookData] = useState<books>({
    title: '',
    imgUrl: '',
    comment: '',
  });

  // 本のデータ取得
  const getBookData = useCallback(async () => {
    user &&
      bookId &&
      (await firebase
        .firestore()
        .doc(`users/${user.uid}/books/${bookId}`)
        .get()
        .then((doc) => {
          setBookData({
            ...bookData,
            title: doc.data().title,
            imgUrl: doc.data().imgUrl,
            comment: doc.data().comment,
          });

          return doc.data();
        }));
  }, []);
  useEffect(() => {
    getBookData();
  }, []);

  // 本の削除
  const deleteBook = () => {
    user &&
      firebase
        .firestore()
        .doc(`users/${user.uid}/books/${bookId}`)
        .delete()
        .then(() => {
          toast.success('削除しました');
          router.push('/library');
        })
        .catch(() => {
          console.log('error!!!');
        });
  };

  // Tweetコメント追加
  const addTweetComment = () => {
    if (bookData.comment === '') return;
    user &&
      firebase
        .firestore()
        .doc(`users/${user.uid}/books/${router.query.id}`)
        .update({
          comment: bookData.comment,
        })
        .then(() => {
          toast.success('保存しました');
        })
        .catch(() => {
          console.log('error！');
        });
  };
  return (
    <div className="bg-blue-100">
      <Header />
      <div className="container">
        <div className="text-center pt-4">
          {bookData.imgUrl ? (
            <Image
              id="bookImage_canvas"
              src={bookData.imgUrl}
              alt=""
              width={128}
              height={185}
              loading="lazy"
            ></Image>
          ) : (
            <div className="animate-pulse border border-blue-300 bg-blue-50 shadow rounded-md p-4 w-40 h-52 mx-auto"></div>
          )}

          <h1 className="font-bold text-lg pt-2">{bookData.title}</h1>
        </div>

        <form className="pt-4 text-center">
          <textarea
            name=""
            id=""
            value={bookData.comment}
            cols={40}
            rows={5}
            placeholder="ツイートしたい一節を入力"
            className="border border-blue-400 rounded-md px-2 py-3 resize-none focus:outline-none focus:ring-1"
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
              setBookData({ ...bookData, comment: event.target.value });
            }}
          ></textarea>

          <div className="py-2 text-center">
            <a
              onClick={addTweetComment}
              className="px-4 py-2 bg-blue-400 text-white rounded-md"
            >
              画像を生成する
            </a>
          </div>
          <div className="text-center py-4">
            <button className="text-xl font-bold px-4 py-2 bg-blue-400 text-white rounded-md">
              ツイートする
            </button>
          </div>
          <div className="text-right py-4">
            <a
              className="opacity-50 underline hover:opacity-30 cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              ライブラリから削除する
            </a>
          </div>
        </form>
        <CreateImage data={bookData} />
      </div>
      <Toaster />
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  この本をライブラリから削除しても宜しいですか？
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    実行するとツイート文も削除されます。
                  </p>
                </div>

                <div className="mt-8 text-right space-x-2">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                    onClick={closeModal}
                  >
                    キャンセル
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                    onClick={deleteBook}
                  >
                    削除する
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default BookDetail;
