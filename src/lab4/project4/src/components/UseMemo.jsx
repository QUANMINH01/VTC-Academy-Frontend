import { useMemo, useState } from "react";

const UseMemo = () => {
  const [isHovered, setIsHovered] = useState(false);

  const boxStyle = useMemo(() => {
    return {
      width: "200px",
      height: "200px",
      backgroundColor: isHovered ? "#ff4d4f" : "#1890ff",
      transition: "background-color 0.3s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontWeight: "bold",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "20px",
    };
  }, [isHovered]);

  return (
    <div>
      <h1 className="text-xl font-bold">Exercise 2: UseMemo</h1>
      <div
        style={boxStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Hover me!
      </div>
    </div>
  );
};

export default UseMemo;
