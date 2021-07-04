import React from 'react';
import Header from '../components/lp/Header';

const settings = () => {
  return (
    <div className="">
      <Header />
      <div className="container">
        <h1 className="pt-4 text-center font-bold text-xl">ユーザー設定</h1>

        <div className="py-8 flex flex-col items-center space-y-8">
          <div className="w-32 h-32 bg-gray-400 rounded-full"></div>
          <div>
            <p className="font-semibold">ツイッターの名前です</p>
            <p>@abcabc</p>
          </div>
          <p className="text-gray-600">
            このサイトではプロフィールの変更はできません。Twitterのアカウント情報がそのまま反映されます。(ログイン時に反映されます。)
          </p>
        </div>
        <div className="text-right py-4">
          <a className="opacity-50 underline hover:opacity-30 cursor-pointer">
            アカウントを削除
          </a>
        </div>
      </div>
    </div>
  );
};

export default settings;
