import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeartIcon as HeartSolid } from '@heroicons/react/solid';

export const BookCard = ({ data }) => {
  return (
    <div className="bg-white border rounded-md p-1 pb-2 mb-2 relative">
      <div className="flex relative h-32 w-80">
        <div className="m-2 w-20 relative">
          <Image src={data.imgUrl} alt="" width={128} height={185}></Image>
        </div>

        <p className="mt-2 h-32 w-60 line-clamp-3">{data.title}</p>
      </div>
      <p className="p-2 text-gray-500 mb-4">{data.comment}</p>
      <div className="flex items-center justify-between px-2 pt-1 border-t">
        <div>
          登録日:<span>{data.createdAt.substr(0, 10)}</span>
        </div>
        <div className="flex items-center">
          <HeartSolid width={20} height={20} className="text-red-500" />
          <span className="ml-1">3</span>
        </div>
        <Link
          href={{
            pathname: `/library/${data.bid}`,
          }}
        >
          <a className="bg-blue-400 text-white rounded-md py-2 px-4">詳細へ</a>
        </Link>
      </div>
    </div>
  );
};
