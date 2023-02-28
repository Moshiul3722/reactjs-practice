import React, {memo} from 'react'

const Message = ({numberOfMessage}) => {

    console.log("Message Rendering")
  return (
    <div>
        <h3>Send {numberOfMessage} message</h3>
    </div>
  )
}


// const Message = memo(()=>{
// console.log("Message rendering");
// return <p>Send 0 message</p>
// });

export default memo(Message);