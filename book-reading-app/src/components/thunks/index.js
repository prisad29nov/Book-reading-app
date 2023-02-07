import { createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

export const fetchBooks = createAsyncThunk(
    'todo/fetchBooks',
    async (payload) => {
      
        const data=await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${payload}`);
        return data;
      
    }
  )