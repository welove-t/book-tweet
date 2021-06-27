import React from 'react';

const Features = () => {
  return (
    <div className="container pt-8">
      <p className="text-3xl font-semibold">印象に残った本の一節</p>
      <p className="text-3xl font-semibold">広めてみませんか？</p>
      <p className="pt-4">
        ブックツイートではあなたの心に響いたフレーズを本の画像と一緒にツイートできる、
        シンプルなサービスです
      </p>
      <div className="py-20 flex justify-center">
        <p>本の画像</p>
        <p>+</p>
        <p>本のフレーズ</p>
      </div>
    </div>
  );
};

export default Features;
