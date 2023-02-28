import React, { useState } from 'react'
import Message from './Message';

const Memo = () => {

const [count, setCount] = useState(0);
const [toggle, setToggle]=useState(false);

console.log("app rendering")

  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={()=>{setCount((count)=> count+1)}}>Increment</button>
        <Message numberOfMessage={count}/>
    </div>
  )
}

export default Memo