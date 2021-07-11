import React, { useState } from 'react';
import Header from '../../components/lp/Header';
import Image from 'next/image';
import { HeartIcon as HeartSolid } from '@heroicons/react/solid';
import { HeartIcon as HeartOutline } from '@heroicons/react/outline';
import Link from 'next/link';

const library = ({ data }) => {
  return (
    <div className="bg-blue-50">
      <Header />
      <div className="container">
        <h1 className="py-8 text-center font-bold text-2xl">マイライブラリ</h1>

        <div className="bg-white border rounded-md p-1 pb-2 mb-2 relative">
          <div className="flex relative h-32 w-80">
            <div className="m-2 w-20 relative">
              <Image
                src={data[0].imgUrl}
                alt=""
                width={128}
                height={185}
              ></Image>
            </div>

            <p className="mt-2 h-32 w-60 line-clamp-3">{data[0].title}</p>
          </div>
          <p className="p-1 text-gray-500 mb-4">{data[0].comments}</p>
          <div className="flex items-center justify-between px-2 pt-1 border-t">
            <div>
              登録日:<span>{data[0].createdAt}</span>
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
                src={data[1].imgUrl}
                alt=""
                width={128}
                height={185}
              ></Image>
            </div>

            <p className="mt-2 h-32 w-60 line-clamp-3">{data[1].title}</p>
          </div>
          <p className="p-1 text-gray-500 mb-4 text-center">
            {data[1].comments}
          </p>
          <div className="flex items-center justify-between px-2 pt-1 border-t">
            <div>
              登録日:<span>{data[1].createdAt}</span>
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
                src={data[2].imgUrl}
                alt=""
                width={128}
                height={185}
              ></Image>
            </div>

            <p className="mt-2 h-32 w-60 line-clamp-3">{data[2].title}</p>
          </div>
          <p className="p-1 text-gray-500 mb-4">{data[2].comments}</p>
          <div className="flex items-center justify-between px-2 pt-1 border-t">
            <div>
              登録日:<span>{data[2].createdAt}</span>
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

export async function getStaticPaths() {
  // id としてとりうる値のリストを返す
  const res = await fetch('http://localhost:3001/users');
  const repos = await res.json();
  const paths = repos.map((repo) => `/users/${repo.id}`);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // params.id を使用して、ライブラリに表示するデータを取得する
  const uid = params.id;
  const res = await fetch(`http://localhost:3001/users/${uid}`);
  const json = await res.json();
  const data = json.books;
  return {
    props: { data },
  };
}
