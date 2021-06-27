import React from 'react';

const Step = () => {
  return (
    <div className="bg-blue-400 py-10">
      <div className="container">
        <h2 className="text-center text-white text-3xl mb-2">STEP</h2>
        <div className="flex flex-col items-center px-1 py-8 mt-4 border bg-white border-white rounded-md ">
          <div className=" bg-gray-400 h-32 w-32 rounded-full"></div>
          <p className="text-2xl text-blue-400 font-semibold pt-4">
            1. ライブラリへ登録
          </p>
          <p className="text-blue-400 font-medium pt-4">
            あなたが読んだ本を検索→ライブラリに登録して下さい。※現在最大20件まで登録できます。
          </p>
        </div>
        <div className="flex flex-col items-center px-1 py-8 mt-4 border bg-white border-white rounded-md ">
          <div className=" bg-gray-400 h-32 w-32 rounded-full"></div>
          <p className="text-2xl text-blue-400 font-semibold pt-4">
            2.お気に入りの一節を入力
          </p>
          <p className="text-blue-400 font-medium pt-4">
            その本であなたが心に響いたフレーズを入力して下さい。
          </p>
        </div>
        <div className="flex flex-col items-center px-1 py-8 mt-4 border bg-white border-white rounded-md ">
          <div className=" bg-gray-400 h-32 w-32 rounded-full"></div>
          <p className="text-2xl text-blue-400 font-semibold pt-4">
            3.簡単ツイート！
          </p>
          <p className="text-blue-400 font-medium pt-4">
            最後に、「Tweet」ボタンを押して下さい。本の画像とフレーズが一枚の画像となって、ツイートされます。
          </p>
        </div>
        <p className="text-center text-3xl text-white mt-8">完成！</p>
      </div>
    </div>
  );
};

export default Step;
