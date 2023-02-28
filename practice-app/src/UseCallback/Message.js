import React, {memo} from 'react'

const Message = () => {

    console.log("Message Rendering")
  return (
    <div>
        <h3>Send 0 message</h3>
    </div>
  )
}


// const Message = memo(()=>{
// console.log("Message rendering");
// return <p>Send 0 message</p>
// });

export default memo(Message);