import React, { useState } from 'react'
import Component2 from './Component2';

const Component1 = () => {
    const [user, setUser]=useState({
        id:101,
        name: "Gazi Moshiul"
    });
  return (
    <div>
        <h1>Component-01</h1>
        <Component2 user={user}/>
    </div>
  )
}

export default Component1

// Structure:
// Component1 - (child)-> component2 - (child)-> component3 - (child)-> component4