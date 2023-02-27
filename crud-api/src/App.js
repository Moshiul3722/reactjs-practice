import React, { useState, useEffect } from 'react'

import './App.css'

const URL = "https://jsonplaceholder.typicode.com/posts";
const App = () => {

  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)

  const getAllUsers = () => {
    fetch(URL).then((res) => {
      if (!res.ok) {
        throw Error("Could not fetch")
      }
      return res.json()
    }).then((data) => {
      setUsers(data);
      console.log(data)
    }).catch((err) => {
      setError(err.message);
    }).finally(() => {
      setIsLoading(false);
    })
  }

  useEffect(() => {
    getAllUsers();
  }, [])

  return (
    <div>
      <h1 className='app-heading'>User Management App</h1>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}

      <div className="wrapper">
      {users && users.map((user) => {
        const { id, title, body } = user;
        return (
          <article key={id} className="card">
            <div className='card-item'>
              <h3>{title}</h3>
              <p>{body}</p>
              <button className='btnStyle'>Edit</button>
              <button className='btnStyle'>Delete</button>
            </div>
          </article>
        )
      })}
      </div>
    </div>
  )
}

export default App