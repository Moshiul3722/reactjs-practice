import React, {memo} from 'react'

const Message = ({numberOfMessage, onHandleIncrement}) => {

    console.log("Message Rendering")
  return (
    <div>
        <h3>Send {numberOfMessage} message</h3>
        <button onClick={onHandleIncrement}>Increment Message Number</button>
    </div>
  )
}




export default memo(Message);