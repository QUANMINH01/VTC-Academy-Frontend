import { Button } from "antd";
import useCounter from "../hooks/useCouter";

console.log(useCounter);

const Counter = () => {
  const { count, setCount, increment, decrement } = useCounter();

  return (
    <div className="mx-8 w-96">
      <h1 className="text-xl font-bold">Exercise 1: Counter</h1>
      <p className="mb-8">Sử dụng các button để tăng/giảm giá trị count</p>
      <div className="flex flex-wrap gap-2.5">
        <Button type="primary" onClick={decrement}>
          - Giảm
        </Button>
        <p className="text-xl">{count}</p>
        <Button type="primary" onClick={increment}>
          + Tăng
        </Button>

        <Button danger onClick={() => setCount(0)}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Counter;
