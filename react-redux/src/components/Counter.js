import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const hanleIncrement = () => {
    setCount((count) => {
     count= count + 1;
    });
  };

  return (
    <div>
      <h2>Counter App</h2>
      <h3>Count : {count}</h3>
      <button onClick={hanleIncrement}>Increment</button>
    </div>
  );
}

export default Counter;
