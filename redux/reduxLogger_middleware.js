const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");


// product constant
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

// product Reducer
// Define PRODUCT state

const initialProductState = {
  products: ["sugar", "salt"],
  numberOfProducts: 2,
};

// create Product Action
const getProducts = () => {
  return {
    type: GET_PRODUCTS,

  };
};

const addProducts = (product) => {
  return {
    type: ADD_PRODUCTS,
    payload: product,
  };
};

// product Reducer

const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCTS:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
    return state;
  }
};

// store

const store = createStore(productReducer, applyMiddleware(logger));
store.subscribe(()=>{
    console.log(store.getState());
});


store.dispatch(getProducts());
store.dispatch(addProducts("mango"));


