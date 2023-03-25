const {createStore, applyMiddleware} = require('redux');
const { default: logger } = require('redux-logger');

//constance values
const ADD_TO_CART = "ADD_TO_CART";
const GET_CART = "GET_CART";

//cart state
const initCartState = {
  cart: ["choclate", "milk"],
  count: 2,
};

//reducer
function cartReducer(state = initCartState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, count: state.cart.length + 1, cart: [...state.cart, action.payload] };
    case GET_CART:
      return state;

    default:
      return state;
  }
};

//actions
function addToCart(item) {
  return {
    type: ADD_TO_CART,
    payload: item
  }
}

// store
const cart_store = createStore(cartReducer, applyMiddleware(logger));

cart_store.subscribe(() => {
  console.log(cart_store.getState());
});

// action dispatch
cart_store.dispatch(addToCart('mashala'))