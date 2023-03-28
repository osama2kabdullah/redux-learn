import { createSlice } from "@reduxjs/toolkit";

const imitialBooks = [
  { id: 1, title: "Love Bangladesh", author: "Osama Abdullah" },
  { id: 2, title: "Love India", author: "Shushanto Pal" },
];

const booksSlice = createSlice({
  name: "books",
  initialState: imitialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.push(action.payload);
    },
    deleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload);
    },
    editBook: (state, action) => {
      for (let i = 0; i < state.length; i++) {
        const book = state[i];
        if (book.id === action.payload.id) {
          state[i] = action.payload;
          break; // stop looping once the book has been modified
        }
      }
    },
  },
});

export const { showBooks, addBook, deleteBook, editBook } = booksSlice.actions;
export default booksSlice.reducer;
