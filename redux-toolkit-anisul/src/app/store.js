import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counter/counterSlice";
import postReucer from "../feature/posts/postSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postReucer
    }
})