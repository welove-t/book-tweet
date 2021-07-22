import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeartIcon as HeartSolid } from '@heroicons/react/solid';
import { useRouter } from 'next/router';

export const BookCard = ({ data }) => {
  useEffect(() => {
    console.log(data);
  });
  const router = useRouter();
  //本詳細画面へ
  const toBookDetail = () => {
    router.push({
      pathname: `/library/${data.bid}`,
      query: { title: data.title, imgUrl: data.imgUrl },
    });
  };
  return (
    <div className="bg-white border rounded-md p-1 pb-2 mb-2 relative">
      <div className="flex relative h-32 w-80">
        <div className="m-2 w-20 relative">
          <Image src={data.imgUrl} alt="" width={128} height={185}></Image>
        </div>

        <p className="mt-2 h-32 w-60 line-clamp-3">{data.title}</p>
      </div>
      <p className="p-1 text-gray-500 mb-4">{data.comments}</p>
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
            query: { title: data.title, imgUrl: data.imgUrl },
          }}
        >
          <a className="bg-blue-400 text-white rounded-md py-2 px-4">詳細へ</a>
        </Link>

        {/* <a
          className="bg-blue-400 text-white rounded-md py-2 px-4"
          onClick={toBookDetail}
        >
          詳細へ
        </a> */}
      </div>
    </div>
  );
};
