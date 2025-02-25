import { useState } from "react";
const Ex5 = () => {
  const [count, setCount] = useState(0);

  // Hàm để tăng giá trị
  const increase = () => {
    setCount(count + 1);
  };

  // Hàm để giảm giá trị
  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex items-center space-x-4">
        <button
          onClick={decrease}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          -Giảm
        </button>

        <h1 className="text-2xl mb-4 flex-grow text-center"> {count} </h1>

        <button
          onClick={increase}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          +Tăng
        </button>
      </div>
    </div>
  );
};

export default Ex5;
