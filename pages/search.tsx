import React, { ChangeEvent, useState } from 'react';
import Header from '../components/lp/Header';
import Image from 'next/image';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');

  const searchBook = async () => {
    if (!searchInput) return null;
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchInput}`
    );
    if (!res) return null;
    const bookJson = await res.json();
    if (!bookJson.items) return null;
    const bookData = await bookJson.items.map((data: any) => {
      const item = data.volumeInfo;
      const book: any = {
        bid: data.id,
        title: item.title,
        imageUrl: item.imageLinks
          ? item.imageLinks.smallThumbnail
          : '/images/book-no-image.jpg',
      };
      console.log(book);
      return book;
    });
  };
  return (
    <div className="bg-green-400">
      <Header />
      <div className="container">
        <form className="ml-4 flex items-center text-center pt-4">
          <input
            type="text"
            value={searchInput}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setSearchInput(event.target.value);
            }}
            className="w-64 h-10 whitespace-nowrap p-2 border border-white rounded-l-md shadow-sm text-sm font-medium focus:outline-none"
            placeholder="本のタイトルを入力"
            maxLength={50}
            autoComplete="on"
          />
          <a
            href="#"
            onClick={searchBook}
            className="inline-flex h-10 px-2 py-2 border border-white rounded-r-md shadow-sm text-sm font-medium text-white"
            aria-label="検索"
          >
            <Image
              src="/images/search.svg"
              width={30}
              height={20}
              alt=""
              className="w-5 h-10 rounded-md"
            />
          </a>
        </form>
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

export default Search;
