import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading]= useState(false);

  useEffect(()=>{
    console.log("useEffect");
  },[count])

  return (
    <div>
      {console.log("rendering")}
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setIsLoading(!isLoading);
        }}
      >
        +
      </button>
    </div>
  );
};

export default UseEffect;
