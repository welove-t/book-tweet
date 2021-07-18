import React from 'react';
import Image from 'next/image';
import 'firebase/firestore';
import firebase from 'firebase/app';
import { useUser } from '../../context/userContext';
import { format } from 'date-fns';

const BookSearchCard = ({ bid, title, imgUrl }) => {
  const { user } = useUser();
  const addBook = () => {
    const createdAt = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    user &&
      firebase.firestore().doc(`users/${user.uid}/books/${bid}`).set({
        title: title,
        imgUrl: imgUrl,
        createdAt: createdAt,
        comment: '',
      });
  };
  return (
    <div className="bg-white h-64 w-36 rounded-md p-1 text-center">
      <figure className="h-36 grid justify-center align-center">
        <Image src={imgUrl} alt="" width={100} height={160}></Image>
      </figure>
      <p className="p-2 h-14 font-semibold text-sm mb-2 line-clamp-3 leading-4">
        {title}
      </p>
      <button
        onClick={addBook}
        className="bg-blue-400 text-white text-sm shadow rounded-full px-4 py-2 focus:outline-none hover:shadow-md"
      >
        ライブラリ登録
      </button>
    </div>
  );
};

export default BookSearchCard;
