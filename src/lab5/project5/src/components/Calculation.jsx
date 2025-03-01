import { Input } from "antd";
import { useMemo, useState } from "react";

const SumCalculationTab = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (inputValue.trim() !== "") {
        setItems([...items, inputValue]);

        setInputValue("");
      }
    }
  };

  const sum = useMemo(() => {
    return items.reduce((total, num) => {
      return total + Number(num);
    }, 0);
  }, [items]);

  return (
    <div>
      <h1 className="text-xl font-bold">Exercise 5: SumCalculation</h1>
      <p className="my-4">Nhập số và nhấn Enter</p>
      <div className="w-100">
        <Input
          placeholder="Nhập số vào ô và nhấn Enter ..."
          className="w-20"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      <ul className="border border-gray-200 rounded-md w-70 mt-6">
        {items.map((item, index) => (
          <li key={index} className="px-4 py-2 border-b last:border-b-0">
            Số {item}
          </li>
        ))}
      </ul>
      <div>
        <p className="mt-4 text-xl font-bold"> {sum} </p>
      </div>
    </div>
  );
};

export default SumCalculationTab;
