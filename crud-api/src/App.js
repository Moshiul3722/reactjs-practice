import React, {useState, useEffect} from 'react'

const URL = "https://rest-api-without-db.herokuapp.com/users/";
const App = () => {
 
 const [users, setUsers]=useState(null);

 useEffect(()=>{
  fetch(URL).then((res)=>{
    if(!res.ok){
      
    }
  })
 },[])
 
  return (
    <div></div>
  )
}

export default App