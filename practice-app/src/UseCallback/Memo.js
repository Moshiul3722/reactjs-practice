import React, { useState } from 'react'
import Message from './Message';

const Memo = () => {

const [count, setCount] = useState(0);

console.log("app rendering")

  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={()=>{setCount((count)=> count+1)}}>Increment</button>
        <Message/>
    </div>
  )
}

export default Memo