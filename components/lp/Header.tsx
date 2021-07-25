import React, { useEffect } from 'react';
import Link from 'next/link';
import { useUser } from '../../context/userContext';
import firebase from 'firebase/app';
import Image from 'next/image';

const Header = () => {
  const login = () => {
    firebase.auth().signInWithPopup(new firebase.auth.TwitterAuthProvider());
  };
  const { user, loadingUser } = useUser();

  return (
    <div className="bg-blue-400">
      <header className="container h-16 flex items-center">
        <Link href="/">
          <a className="font-bold text-2xl text-white">LOGO</a>
        </Link>
        <span className="flex-1"></span>

        {/* <Link href="/library">
          <a
            className="text-white border border-white rounded-md py-2 px-4"
            onClick={login}
          >
            ログイン
          </a>
        </Link> */}

        {loadingUser ? (
          <div className="animate-pulse">
            <div className="h-12 w-12 rounded-full bg-gray-300"></div>
          </div>
        ) : user ? (
          <Image
            src={user.photoURL}
            alt=""
            width={48}
            height={48}
            className="rounded-full h-full w-full"
          ></Image>
        ) : (
          <a
            className="text-white border border-white rounded-md py-2 px-4"
            onClick={login}
          >
            ログイン
          </a>
        )}
      </header>
    </div>
  );
};

export default Header;
