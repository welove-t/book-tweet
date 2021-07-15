import React, { useState } from 'react';
import Header from '../../components/lp/Header';
import Image from 'next/image';

const Id = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="text-center pt-4">
          <Image
            src="http://books.google.com/books/content?id=JHD1DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
            alt=""
            width={128}
            height={185}
          ></Image>
          <h1 className="font-bold text-lg pt-2">
            ９割捨てて10倍伝わる「要約力」　最短・最速のコミュニケーションで成果は最大化する
          </h1>
        </div>

        <form className="pt-4 text-center">
          <textarea
            name=""
            id=""
            cols={40}
            rows={5}
            placeholder="ツイートしたい一節を入力"
            className="border border-blue-400 rounded-md px-2 py-3 resize-none focus:outline-none focus:ring-1"
          ></textarea>

          <div className="py-2 text-right">
            <button className="px-4 py-2 bg-blue-400 text-white rounded-md">
              保存
            </button>
          </div>
          <div className="text-center py-4">
            <button className="text-xl font-bold px-4 py-2 bg-blue-400 text-white rounded-md">
              ツイートする
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Id;
