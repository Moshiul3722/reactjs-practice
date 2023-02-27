import React, { Component, createRef } from 'react'


// ref can directly access on dom element
// advice: do not manipulate DOM directly if not necessary. It make the overall process slow. Which take the performance issue

export default class RefInClass extends Component {
    constructor(props) {
        super(props)

        // create ref for userName
        this.userNameRef = createRef();

        this.state = {

        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.userNameRef.current.value);

        this.userNameRef.current.style.background = "#0284c7";
    }
    render() {
        return (
            <div>
                <h1>User Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-field'>
                        <label htmlFor="userName">UserName:</label>
                        <input type="text" id='userName' ref={this.userNameRef}/>
                    </div>
                    <div className='form-field'>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id='password' />
                    </div>
                    <button type='submit'>Register</button>
                </form>
            </div>
        )
    }
}
