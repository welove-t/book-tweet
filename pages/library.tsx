import React from 'react';
import Header from '../components/lp/Header';
import Image from 'next/image';
import { HeartIcon as HeartSolid } from '@heroicons/react/solid';
import { HeartIcon as HeartOutline } from '@heroicons/react/outline';
import Link from 'next/link';

const library = () => {
  return (
    <div className="bg-blue-50">
      <Header />
      <div className="container">
        <h1 className="py-8 text-center font-bold text-2xl">マイライブラリ</h1>

        <div className="bg-white border rounded-md p-1 pb-2 mb-2 relative">
          <div className="flex relative h-32 w-80">
            <div className="m-2 w-20 relative">
              <Image
                src="http://books.google.com/books/content?id=JHD1DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
                alt=""
                width={128}
                height={185}
              ></Image>
            </div>

            <p className="mt-2 h-32 w-60 line-clamp-3">
              ９割捨てて10倍伝わる「要約力」　最短・最速のコミュニケーションで成果は最大化する
            </p>
          </div>
          <p className="p-1 text-gray-500 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            sit similique repellendus quaerat dolorem eos, exercitationem quam
            totam distinctio tempora possimus laborum alias adipisci beatae.
            Doloremque eaque illo ipsum facere!
          </p>
          <div className="flex items-center justify-between px-2 pt-1 border-t">
            <div>
              登録日:<span>2021/12/31</span>
            </div>
            <div className="flex items-center">
              <HeartSolid width={20} height={20} className="text-red-500" />
              <span className="ml-1">3</span>
            </div>
            <Link href="/books/id">
              <a className="bg-blue-400 text-white rounded-md py-2 px-4">
                詳細へ
              </a>
            </Link>
          </div>
        </div>
        {/* 2冊目 */}
        <div className="bg-white border rounded-md p-1 pb-2 mb-1 relative">
          <div className="flex relative h-32 w-80">
            <div className="m-2 w-20 relative">
              <Image
                src="http://books.google.com/books/content?id=wVm0DAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
                alt=""
                width={128}
                height={185}
              ></Image>
            </div>

            <p className="mt-2 h-32 w-60 line-clamp-3">罪と罰（上）</p>
          </div>
          <p className="p-1 text-gray-500 mb-4 text-center">
            まだ登録されていません。
          </p>
          <div className="flex items-center justify-between px-2 pt-1 border-t">
            <div>
              登録日:<span>2021/12/31</span>
            </div>
            <div className="flex items-center">
              <HeartOutline width={20} height={20} className="text-red-500" />
              <span className="ml-1">0</span>
            </div>

            <a className="bg-blue-400 text-white rounded-md py-2 px-4">
              詳細へ
            </a>
          </div>
        </div>
        {/* 3冊目 */}
        <div className="bg-white border rounded-md p-1 pb-2 mb-2 relative">
          <div className="flex relative h-32 w-80">
            <div className="m-2 w-20 relative">
              <Image
                src="http://books.google.com/books/content?id=6WKqDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
                alt=""
                width={128}
                height={185}
              ></Image>
            </div>

            <p className="mt-2 h-32 w-60 line-clamp-3">
              働き方の哲学 360度の視点で仕事を考える
            </p>
          </div>
          <p className="p-1 text-gray-500 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            sit similique repellendus quaerat dolorem eos, exercitationem quam
            totam distinctio tempora possimus laborum alias adipisci beatae.
            Doloremque eaque illo ipsum facere!
          </p>
          <div className="flex items-center justify-between px-2 pt-1 border-t">
            <div>
              登録日:<span>2021/12/31</span>
            </div>
            <div className="flex items-center">
              <HeartSolid width={20} height={20} className="text-red-500" />
              <span className="ml-1">3</span>
            </div>

            <a className="bg-blue-400 text-white rounded-md py-2 px-4">
              詳細へ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default library;
