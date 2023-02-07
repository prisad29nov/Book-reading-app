import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  reading: []
};

export const readingSlice = createSlice({
  name: "reading",
  initialState,
  reducers: {
    addToReading:(state,action) => {
        state.reading.push(action.payload)
      },
      removeFromReading:(state,action)=>{
        let id=action.payload
        state.reading=state.reading.filter((book)=>{
             return book.id !== id
        })
    }
  },
});

export const { addToReading,removeFromReading } = readingSlice.actions;

export default readingSlice.reducer;