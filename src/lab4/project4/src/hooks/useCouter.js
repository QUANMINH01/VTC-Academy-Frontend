import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    if (count < 10) setCount(count + 1);
  };

  const decrement = () => {
    if (count > -10) setCount(count - 1);
  };

  return { count, setCount, increment, decrement };
}

export default useCounter;
