import Image from 'next/image';
import React from 'react';

const BookSearchCard = ({ bid, title, imgUrl }) => {
  return (
    <div className="bg-white h-64 w-36 rounded-md p-1 text-center">
      <figure className="h-36 grid justify-center align-center">
        <Image src={imgUrl} alt="" width={100} height={160}></Image>
      </figure>
      <p className="p-2 h-14 font-semibold text-sm mb-2 line-clamp-3 leading-4">
        {title}
      </p>
      <button className="bg-blue-400 text-white text-sm shadow rounded-full px-4 py-2 focus:outline-none hover:shadow-md">
        ライブラリ登録
      </button>
    </div>
  );
};

export default BookSearchCard;
