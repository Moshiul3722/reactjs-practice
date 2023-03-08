const {createStore} = require("redux");

// defining constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

// 01. state
const initialCounterState = {
  count: 0,
};

const initialUsersState = {
  users: [{ name: "Moshiul" }],
};

// 02. action - OBJECT - TYPE (অবশ্যই থাকতে হবে), PAYLOAD (কোন ডাটা পাঠানোর জন্য ব্যবহার করা হয়)

// INCREMENT COUNTER
// DECREMENT COUNTER

const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};
const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};
const addUser = () => {
  return {
    type: ADD_USER,
    payload: {
      name: "Kazi Madu",
    },
  };
};

// 03. create reducer for counter

// const counterReducer = (state={count:0}, action)=>{
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      // increment related staff goes here
      return {
        ...state, // if state contain multiple object
        count: state.count + 1,
      };

    case DECREMENT:
      // decrement related staff goes here
      return {
        ...state, // if state contain multiple object
        count: state.count - 1,
      };

    default:
      return state;
  }
};


// 04. store - getState(), dispatch(), subscribe()

// create store
const store = createStore(counterReducer);
store.subscribe(()=>{
    console.log(store.getState());
})

// dispatch action
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())


// 1. state
// 2. dispatch action
// 3. reducer (work based on action type)
// 4. store
