import { Input } from "antd";
import { useState } from "react";
const Ex2 = () => {
  const [content, setContent] = useState();

  const handleChange = (e) => {
    setContent(e.target.value);
  };
  return (
    <div>
      <p className="my-4">Nhập text vào ô input</p>
      <div className="w-52">
        <Input
          placeholder="Nhập dữ liệu vào ô này ..."
          className="w-20"
          onChange={handleChange}
        />
      </div>
      <p className="mt-4">Giá trị hiện tại: {content}</p>
    </div>
  );
};

export default Ex2;
