import React, { useEffect, useState } from 'react';
import Header from '../components/lp/Header';
import { BookCard } from '../components/library/BookCard';
import firebase from 'firebase/app';
import { useUser } from '../context/userContext';
import { Toaster } from 'react-hot-toast';

const Library = () => {
  const { user } = useUser();
  const [libraryBooks, setLibraryBooks] = useState(null);
  const getLibrary = () => {
    user &&
      firebase
        .firestore()
        .collection(`users/${user.uid}/books`)
        .get()
        .then((items) => {
          const res = items.docs.map((doc) => {
            return { bid: doc.id, ...doc.data() };
          });
          setLibraryBooks(res);
        })
        .catch(() => {
          console.log('error!');
        });
  };

  useEffect(() => {
    getLibrary();
  }, [user]);

  return (
    <div className="bg-blue-50 pb-40">
      <Header />
      <div className="container">
        <h1 className="py-8 text-center font-bold text-2xl">マイライブラリ</h1>
        {user ? (
          libraryBooks ? (
            libraryBooks.length === 0 ? (
              <div className="text-center text-gray-500 pt-8 pb-80">
                <p>ライブラリに本はありません</p>
                <p>本を検索してライブラリに登録して下さい</p>
              </div>
            ) : (
              libraryBooks.map((book, idx) => (
                <BookCard data={book} key={idx}></BookCard>
              ))
            )
          ) : (
            <div className="text-center text-gray-500">
              <p>読み込み中</p>
            </div>
          )
        ) : (
          <div className="text-center text-gray-500 pt-4 pb-80">
            <p>ログインして下さい</p>
          </div>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default Library;
