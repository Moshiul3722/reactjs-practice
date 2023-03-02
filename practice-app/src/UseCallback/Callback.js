import React, { useCallback, useState } from 'react'
import Message from './Message';

const Callback = () => {

const [count, setCount] = useState(0);
const [toggle, setToggle] = useState(false);

console.log("app rendering")

const onHandleIncrement=useCallback(()=>{
  setCount((count)=>count+1);
},[count]);
  return (
    <div>
      {toggle ? 'On':'Off'}
      <button onClick={()=>{setToggle(!toggle)}}>Toggle</button>
        <h1>Count : {count}</h1>
        <button onClick={()=>{setCount((count)=> count+1)}}>Increment</button>
        <Message numberOfMessage={count} onHandleIncrement={onHandleIncrement}/>
    </div>
  )
}

export default Callback