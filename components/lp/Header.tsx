import React, { useEffect } from 'react';
import Link from 'next/link';
import { useUser } from '../../context/userContext';
import firebase from 'firebase/app';

const Header = () => {
  const login = () => {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
  };
  const { user, loadingUser } = useUser();

  return (
    <div className="bg-blue-400">
      <header className="container h-16 flex items-center">
        <Link href="/">
          <a className="font-bold text-2xl text-white">LOGO</a>
        </Link>
        <span className="flex-1"></span>
        <Link href="/library">
          <a
            className="text-white border border-white rounded-md py-2 px-4"
            onClick={login}
          >
            ログイン
          </a>
        </Link>
        {loadingUser && <p>ローディング</p>}
        {user && <p>{user.displayName}がログイン中</p>}
      </header>
    </div>
  );
};

export default Header;
