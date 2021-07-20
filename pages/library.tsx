import React, { useEffect, useState } from 'react';
import Header from '../components/lp/Header';
import { BookCard } from '../components/library/BookCard';
import firebase from 'firebase/app';
import { useUser } from '../context/userContext';

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
            console.log(doc.data);
            return doc.data();
          });
          console.log(res);
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
    <div className="bg-blue-50 pb-4">
      <Header />
      <div className="container">
        <h1 className="py-8 text-center font-bold text-2xl">マイライブラリ</h1>
        {libraryBooks &&
          libraryBooks.map((book, idx) => (
            <BookCard data={book} key={idx}></BookCard>
          ))}
      </div>
    </div>
  );
};

export default Library;
