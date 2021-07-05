import React from 'react';
import Header from '../components/lp/Header';
import Image from 'next/image';

const search = () => {
  return (
    <div className="bg-green-400">
      <Header />
      <div className="container">
        <h1 className="pt-4 text-center font-bold text-xl">検索結果</h1>
        <p className="text-center">(最大10件)</p>

        <div className="grid grid-cols-2 gap-1 py-8 mx-auto place-items-center">
          <div className="bg-white h-64 w-36 rounded-md p-1 text-center">
            <figure className="h-36 grid justify-center align-center">
              <Image
                src="http://books.google.com/books/content?id=JHD1DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
                alt=""
                width={100}
                height={160}
              ></Image>
            </figure>
            <p className="p-2 h-14 font-semibold text-sm mb-2 line-clamp-3 leading-4">
              ９割捨てて10倍伝わる「要約力」　最短・最速のコミュニケーションで成果は最大化する
            </p>
            <button className="bg-blue-400 text-white text-sm shadow rounded-full px-4 py-2 focus:outline-none hover:shadow-md">
              ライブラリ登録
            </button>
          </div>
          <div className="bg-white h-64 w-36 rounded-md p-1 text-center">
            <figure className="h-36 grid justify-center align-center">
              <Image
                src="http://books.google.com/books/content?id=wVm0DAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
                alt=""
                width={100}
                height={160}
              ></Image>
            </figure>
            <p className="p-2 h-14 font-semibold text-sm mb-2 line-clamp-3 leading-4">
              罪と罰（上）
            </p>
            <button className="bg-blue-400 text-white text-sm shadow rounded-full px-4 py-2 focus:outline-none hover:shadow-md">
              ライブラリ登録
            </button>
          </div>
          <div className="bg-white h-64 w-36 rounded-md p-1 text-center">
            <figure className="h-36 grid justify-center align-center">
              <Image
                src="http://books.google.com/books/content?id=6WKqDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
                alt=""
                width={100}
                height={160}
              ></Image>
            </figure>
            <p className="p-2 h-14 font-semibold text-sm mb-2 line-clamp-3 leading-4">
              働き方の哲学 360度の視点で仕事を考える
            </p>
            <button className="bg-blue-400 text-white text-sm shadow rounded-full px-4 py-2 focus:outline-none hover:shadow-md">
              ライブラリ登録
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default search;
