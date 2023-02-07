import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  fevorite: [],
};

export const fevoriteSlice = createSlice({
  name: "fevorite",
  initialState,
  reducers: {
    addToFevorites: (state, action) => {
      if (state.fevorite.length > 0) {
        state.fevorite.map((book) => {
          if (book.id != action.payload.id) {
            state.fevorite.push(action.payload);
          }
        });
      } else {
        state.fevorite.push(action.payload);
      }
    },
    removeFromFevorites: (state, action) => {
      let id = action.payload;
      state.fevorite = state.fevorite.filter((book) => {
        return book.id !== id;
      });
    },
  },
});

export const { addToFevorites, removeFromFevorites } = fevoriteSlice.actions;

export default fevoriteSlice.reducer;
