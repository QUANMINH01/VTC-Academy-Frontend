import { useState } from "react";
const Ex4 = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Nhập và nhấn Enter để lưu vào danh sách</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Nhập text và nhấn Enter..."
        className="p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-full"
      />
      <ul>
        {items.map((item, index) => (
          <li key={index} className="text-lg">
            {index + 1}. {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ex4;
