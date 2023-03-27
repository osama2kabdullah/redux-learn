import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState: { posts: [], error: null, isLoading: false },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, state=>{
        state.isLoading = true
    });
    builder.addCase(fetchPosts.fulfilled, (state, action)=>{
        state.isLoading = false;
        state.posts = action.payload;
        state.error = null;
    });
    builder.addCase(fetchPosts.rejected, (state, action)=>{
        state.isLoading = false;
        state.posts = [];
        state.error = action.error;
    });
  },
});

export default postsSlice.reducer;