const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;

//constance values
const URL = "https://jsonplaceholder.typicode.com/users";
const GET_DATA_REQ = "GET_DATA_REQ";
const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
const GET_DATA_FAIL = "GET_DATA_FAIL";

// states
const initState = {
  data: [],
  isLoading: false,
  error: null,
};

//actions
function getData() {
  return { type: GET_DATA_REQ };
}

function getDataSuccess(data) {
  return { type: GET_DATA_SUCCESS, payload: data };
}

function getDataError(error) {
  return { type: GET_DATA_FAIL, payload: error };
}

//reducers
function getDataReducer(state = initState, action) {
  switch (action.type) {
    case GET_DATA_REQ:
      return { ...state, isLoading: true };
    case GET_DATA_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case GET_DATA_FAIL:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
}

//async action data
function fetchData() {
  return (dispatch) => {
    dispatch(getData());
    axios
      .get(URL)
      .then((res) => {
        const users = res.data.map((user) => user.name);
        dispatch(getDataSuccess(users));
      })
      .catch((err) => {
        dispatch(getDataError(err.message));
      });
  };
}

//store create
const store = createStore(getDataReducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchData());
