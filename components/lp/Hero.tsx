import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="container">
      <p className="text-white font-bold">
        心に響いた珠玉の一文をツイートしよう
      </p>
      <Image
        src="/images/book_img_320.png"
        alt=""
        width={320}
        height={247}
      ></Image>
    </div>
  );
};

export default Hero;
