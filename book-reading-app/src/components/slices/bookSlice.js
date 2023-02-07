import { createSlice } from "@reduxjs/toolkit";
import { fetchBooks } from "../thunks";

const initialState = {
  books: [],
  fevorite: [],
  reading: [],
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload.data.items;
    });
  },
});

export const { addToFevorites } = bookSlice.actions;

export default bookSlice.reducer;
