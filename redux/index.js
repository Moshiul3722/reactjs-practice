// defining constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

// state
const initialCounterState = {
    count: 0,
}

const initialUsersState = {
    users: [
        { name: 'Moshiul' }
    ]
}

// action - OBJECT - TYPE (অবশ্যই থাকতে হবে), PAYLOAD (কোন ডাটা পাঠানোর জন্য ব্যবহার করাহয়)

// INCREMENT COUNTER
// DECREMENT COUNTER

const incrementCounter = () => {
    return {
        type: INCREMENT,
    }
}
const decrementCounter = () => {
    return {
        type: DECREMENT,
    }
}
const addUser = () => {
    return {
        type: ADD_USER,
        payload:{
            name:"Kazi Madu"
        }
    }
}


// 1. state
// 2. dispatch action
// 3. reducer (work based on action type)
// 4. 