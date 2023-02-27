import React, { useState, useEffect } from 'react'

import './App.css'
import UserForm from './components/UserForm';

const URL = "https://jsonplaceholder.typicode.com/posts";
const App = () => {

  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)

  // update
  const [selectedUser, setSelectedUser] = useState({
    username: '',
    email: ''
  });

  const [updateFlag, setUpdateFlag] = useState(false)
  const [selectedUserId, setSelectedUserId] = useState("")

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


  // delete user
  const handleDelete = (id) => {
    // alert(id)
    fetch(URL + `/${id}`, {
      method: 'DELETE'
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not Delete")
        }
        getAllUsers();
      })
      .catch((err) => {
        setError(err.message);
      })
  }

  const addUser = (user) => {
    // console.log(data);
    fetch(URL, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then((res) => {
        if (res.status === 201) {
          getAllUsers();
        } else {
          throw Error("Could not Created")

        }
      })
      .catch((err) => {
        setError(err.message);
      })
  }


  const handleEdit = (id) => {
    setSelectedUserId(id);
    setUpdateFlag(true);
    // alert(id)
    const fileterData = users.filter((user) => user.id === id);
    // console.log(fileterData)
    setSelectedUser({
      username: fileterData[0].username,
      email: fileterData[0].email
    })
  }

  const handleUpdate = (user) => {
    // console.log(user);
    fetch(URL+`/${selectedUserId}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("failed to updated")
        }
        getAllUsers();
      })
      .catch((err) => {
        setError(err.message);
      })
      
  }

  return (
    <div>
      <h1 className='app-heading'>User Management App</h1>

      {updateFlag ? <UserForm btnText="Update User" selectedUser={selectedUser} handleUpdate={handleUpdate} /> : <UserForm btnText="Add User" handleSubmitData={addUser} />}

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
                <button className='btnStyle' onClick={() => { handleEdit(id) }}>Edit</button>
                <button className='btnStyle' onClick={() => { handleDelete(id) }}>Delete</button>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default App