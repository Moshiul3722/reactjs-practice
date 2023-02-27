import React, { useRef } from 'react'

const UseRefHook = () => {

  const userNameRef = useRef();
  const userPasswordRef = useRef();

  const handleSubmit=(event)=>{
    event.preventDefault();
    // console.log("Submited");
    const userName = userNameRef.current.value;
    const userPassword = userPasswordRef.current.value;

    userNameRef.current.style.color="#6ee7b7";
    // console.log(userName, userPassword);
  }

  return (
    <div>
      <h1>User Form</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <label htmlFor="userName">UserName:</label>
          <input type="text" id='userName' ref={userNameRef} />
        </div>
        <div className='form-field'>
          <label htmlFor="password">Password:</label>
          <input type="password" id='password' ref={userPasswordRef}/>
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default UseRefHook