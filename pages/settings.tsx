import Image from 'next/image';
import React from 'react';
import Header from '../components/lp/Header';
import { useUser } from '../context/userContext';

const Settings = () => {
  const { user } = useUser();
  return (
    <div className="">
      <Header />
      <div className="container">
        <h1 className="pt-4 text-center font-bold text-xl">ユーザー設定</h1>

        <div className="pt-8 flex flex-col items-center space-y-4">
          {user && (
            <>
              <div className="">
                <Image
                  src={user.photoURL}
                  alt=""
                  width={100}
                  height={100}
                  className="rounded-full h-full w-full"
                ></Image>
              </div>
              <div>
                <p className="font-semibold">{user.displayName}</p>
              </div>
            </>
          )}

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

export default Settings;
