import React, { useEffect, useState } from 'react';
import { loadImage } from 'canvas';
import TweetImage from './TweetImage';

const CreateImage = ({ data }) => {
  // canvas用
  const [bgColor, setBgColor] = useState<string>('#888888');
  const [foColor, setFoColor] = useState<string>('#000000');
  const [png, setPng] = useState<string | null>(null);
  const width = 350;
  const height = 190;

  useEffect(() => {
    const canvasElem = document.createElement('canvas');
    // const bookImage = loadImage(bookData.imgUrl);
    canvasElem.width = width;
    canvasElem.height = height;

    const ctx = canvasElem && canvasElem.getContext('2d');

    if (!canvasElem || !ctx) return;

    // draw

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);
    ctx.font = '30px Hiragino Maru Gothic Pro';
    ctx.fillStyle = foColor;
    ctx.fillText(data.comment, width / 6, height / 2);
    const img = new Image();
    // img.src = data.imgUrl;
    img.src = '/images/book_img_320.png';
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      setPng(canvasElem.toDataURL());
    };
  }, [bgColor, foColor, data]);
  return (
    <div>
      <h3>画像生成</h3>
      <h4>背景色</h4>
      {['#f00', '#0f0', '#00f'].map((color) => (
        <button
          key={color}
          style={{ background: color }}
          onClick={() => setBgColor(color)}
        >
          {color}
        </button>
      ))}
      <h4>文字色</h4>
      {['#f00', '#0f0', '#00f'].map((color) => (
        <button key={color} style={{ color }} onClick={() => setFoColor(color)}>
          {color}
        </button>
      ))}
      <h4>生成</h4>
      {png && (
        // <div className="bg-white rounded-lg w-80 text-center mx-auto space-x-2">
        //   <Image
        //     id="bookImage_canvas"
        //     src={data.imgUrl}
        //     alt=""
        //     width={120}
        //     height={180}
        //     loading="lazy"
        //   ></Image>
        // </div>
        <div className="text-center">
          <TweetImage png={png} width={width} height={height} />
        </div>
      )}
    </div>
  );
};

export default CreateImage;
