import React, { useState } from 'react'
import Component2 from './Component2';
import { UserContext } from './UserContext';


const Component1 = () => {
    const [user, setUser]=useState({
        id:101,
        name: "Gazi Moshiul"
    });
  return (
    <UserContext.Provider value={user}>
        <h1>Component-01</h1>
        <Component2/>
    </UserContext.Provider>
  )
}

export default Component1

// global state create using useContext hook

// Structure:
// Component1 - (child)-> component2 - (child)-> component3 - (child)-> component4
// object এর মাধ্যমে multiple item pass করতে হবে

// const [text, setText] = useState("");
// যেমন: <UserContext.Provider value={{user,text}}>
// child এ তা distructure করে নিতে হবে
// যেমন: const {user, text} = useContent(UserContext);