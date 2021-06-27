import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="bg-blue-400">
      <header className="container h-16 flex items-center">
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
    </div>
  );
};

export default Header;
