import React from 'react';
import Header from '../../components/lp/Header';
import { BookCard } from '../../components/library/BookCard';

const library = ({ books }) => {
  return (
    <div className="bg-blue-50">
      <Header />
      <div className="container">
        <h1 className="py-8 text-center font-bold text-2xl">マイライブラリ</h1>
        {books &&
          books.map((book) => <BookCard data={book} key={book.bid}></BookCard>)}
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
  const books = json.books;
  return {
    props: { books },
  };
}
