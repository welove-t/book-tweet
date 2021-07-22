import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import Header from '../../components/lp/Header';
import Image from 'next/image';
import { useRouter } from 'next/router';
import firebase from 'firebase/app';
import { useUser } from '../../context/userContext';
import toast, { Toaster } from 'react-hot-toast';

const BookDetail = () => {
  const router = useRouter();
  const { user } = useUser();
  const bookId = router.query.id;

  // 本詳細データのステイト;
  const [bookData, setBookData] = useState({
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
  // 本詳細データの取得

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
    <div>
      <Header />
      <div className="container">
        <div className="text-center pt-4">
          {bookData.imgUrl ? (
            <Image
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

          <div className="py-2 text-right">
            <a
              onClick={addTweetComment}
              className="px-4 py-2 bg-blue-400 text-white rounded-md"
            >
              保存
            </a>
          </div>
          <div className="text-center py-4">
            <button className="text-xl font-bold px-4 py-2 bg-blue-400 text-white rounded-md">
              ツイートする
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default BookDetail;
