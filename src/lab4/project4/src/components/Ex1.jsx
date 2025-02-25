import { Button } from "antd";

const Ex1 = () => {
  const handleClick = () => {
    alert("You pressed the button!");
  };

  return (
    <div>
      <Button onClick={handleClick} type="primary">
        Click Me!
      </Button>
    </div>
  );
};

export default Ex1;
