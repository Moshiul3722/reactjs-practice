import React, { useState } from 'react'
import User from './User';

const Users = () => {
    const [userName, setUserName]=useState("Moshiul");
    const [userId, setUserId]=useState(3722);

    // passing object to user
    const [user, setUser]=useState({
        id:3487,
        name:"Ariful Islam",
        age:45,
        address:"47-Banagram Road"
    });
  return (
    <>
    <User userName={userName} userId={userId}/>
    <User user={user}/>
    </>
  )
}

export default Users