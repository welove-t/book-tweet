import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import Header from '../components/lp/Header';
import Image from 'next/image';
import BookSearchCard from '../components/search/BookSearchCard';
import { Toaster } from 'react-hot-toast';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  //検索結果の保管ステート
  const [bookList, setBookList] = useState([]);

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
      return book;
    });
    setBookList(bookData);
  };

  //検索欄でエンター押下時
  const onKeyDownSeach = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      searchBook();
    }
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
            onKeyDown={(event) => onKeyDownSeach(event)}
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
          {bookList &&
            bookList.map((book, idx) => (
              <BookSearchCard
                bid={book.bid}
                imgUrl={book.imageUrl}
                title={book.title}
                key={idx}
              />
            ))}
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Search;
