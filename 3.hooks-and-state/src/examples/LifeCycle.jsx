import { useEffect, useState } from "react";

const LifeCycle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Component Updated");
  }, [count]);

  return (
    <>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
};

export default LifeCycle;