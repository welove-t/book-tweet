import React, { useEffect } from 'react';
import Link from 'next/link';
import { useUser } from '../../context/userContext';
import firebase from 'firebase/app';
import Image from 'next/image';
import MenuBar from '../all/MenuBar';
import { Toaster } from 'react-hot-toast';

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

        {loadingUser ? (
          <div className="animate-pulse">
            <div className="h-12 w-12 rounded-full bg-gray-300"></div>
          </div>
        ) : user ? (
          <MenuBar />
        ) : (
          <a
            className="text-white border border-white rounded-md py-2 px-4"
            onClick={login}
          >
            ログイン
          </a>
        )}
      </header>
      <Toaster />
    </div>
  );
};

export default Header;
