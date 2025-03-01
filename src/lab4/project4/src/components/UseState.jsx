import { Input } from "antd";
import { Button } from "antd";
import { useState } from "react";

const UseState = () => {
  const [content, setContent] = useState();

  const handleChange = (e) => {
    setContent(e.target.value);
  };
  const handleClick = () => {
    alert(content);
  };
  return (
    <div>
      <h1 className="text-xl font-bold">Exercise 2: UseState</h1>
      <p className="my-4">Nhập text vào ô input</p>
      <div className="w-150 flex space-x-4">
        <Input
          placeholder="Nhập dữ liệu vào ô này ..."
          className="w-64 mr-4"
          onChange={handleChange}
        />
        <Button type="primary" onClick={handleClick}>
          Hiển thị
        </Button>
      </div>
    </div>
  );
};

export default UseState;
