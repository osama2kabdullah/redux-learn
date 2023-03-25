import { createStore } from "redux";
import counterReducer from "./components/counterReducers";

const store = createStore(counterReducer);

export default store;