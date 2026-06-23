import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count Value: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment +1
      </button>

      <br />
      <br />

      <button onClick={() => setCount(count - 1)}>
        Decrement -1
      </button>

      <br />
      <br />

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </>
  );
};

export default Counter;