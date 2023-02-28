import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const UserForm = ({ btnText, handleSubmitData, selectedUser }) => {
    const [user, setUser] = useState({
        username: '',
        email: ''
    });

    const handleChange = (event) => {
        const selectedField = event.target.name;
        const selectedValue = event.target.value;

        setUser(prevState => {
            return { ...prevState, [selectedField]: selectedValue }
        })

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSubmitData(user);
        setUser({
            username: '',
            email: ''
        })
    }
    const { username, email } = user;

useEffect(() => {
 setUser({
    username: selectedUser.username,
    email: selectedUser.email
 })
}, [selectedUser])


    return (
        <form onSubmit={handleSubmit}>
            <div className="field-group">
                <label htmlFor="username" className="username">User name :</label>
                <input type="text" name="username" id="username" value={username} onChange={handleChange} required />
            </div>
            <div className="field-group">
                <label htmlFor="email" className="email">Email :</label>
                <input type="email" name="email" id="email" value={email} onChange={handleChange} required />
            </div>
            <button type="submit" className='btnStyle'>{btnText}</button>
        </form>
    )
}

UserForm.defaultProps = {
    selectedUser:{
        username:'',
        email:''
    }
}

export default UserForm