const { createStore } = require("redux");
// CONSTACE VALUES
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const ADD_USER = "ADD_USER";

//state
const counterState = {
  count: 0,
  users: ["osama", "hasan"],
};

//reducer
function counterReducer(state = counterState, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };
    case INCREMENT_BY_VALUE:
      return { ...state, count: state.count + action.payload };
    case ADD_USER:
      return {
        ...state,
        count: state.users.length + 1,
        users: [...state.users, action.payload],
      };
    default:
      state;
  }
}

//action
function increament() {
  return { type: INCREMENT };
}
function decreament() {
  return { type: DECREMENT };
}
function resetState() {
  return { type: RESET };
}
function incByValue(value) {
  return { type: INCREMENT_BY_VALUE, payload: value };
}
function addUser(name) {
  return { type: ADD_USER, payload: name };
}

// store
const store = createStore(counterReducer);
store.subscribe(() => {
  console.log(store.getState());
});
//dispatch
store.dispatch(addUser("rabbi"));
store.dispatch(addUser("juba"));
