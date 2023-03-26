import axios from "axios";
import { TODO_FAIL, TODO_REQ, TODO_SUCCESS } from "./todosConstance";

const TODO_URL = "https://jsonplaceholder.typicode.com/todos";

export function getAllTodos() {
  return async function disptachFunc(dispatch) {
    try {
      dispatch({ type: TODO_REQ });
      const res = await axios.get(TODO_URL);
      dispatch({ type: TODO_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({ type: TODO_FAIL, payload: err.message });
    }
  };
}
