import React from 'react'

export const UserContext = React.createContext();

// create context
// wrapping this context with parent component
// context provide 2 things: 01. provider & 02. consumer
// here we are not using consumer we use useContext hook
// using provider we provide - state & data

// step-1: create context
// step-2: wrape childs with context provider

    // here has one attribute. which is vaule

    {/* <UserContext.Provider value={{ user }}>
    <h1>Component-01</h1>
    <Component2 user={user}/>
    </UserContext.Provider> */}

// step-3: state access useContext hook