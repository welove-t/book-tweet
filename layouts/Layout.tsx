import React from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div className="bg-blue-400">
      <header className="container h-12 flex space-x-4 items-center">
        <Link href="/">
          <a className="font-bold text-2xl text-white">LOGO</a>
        </Link>
        <span className="flex-1"></span>
        <Link href="/">
          <a className="text-white border border-white rounded-md py-2 px-4">
            ログイン
          </a>
        </Link>
      </header>
      {children}
    </div>
  );
};

export default Layout;
