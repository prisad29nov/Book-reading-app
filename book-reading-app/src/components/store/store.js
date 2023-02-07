import { configureStore } from '@reduxjs/toolkit'
import bookSlice from '../slices/bookSlice'
import fevoriteSlice from '../slices/fevoriteSlice'
import readingSlice from '../slices/readingSlice'

export const store = configureStore({
  reducer: {
    bookSlice: bookSlice,
    fevoriteSlice:fevoriteSlice,
    readingSlice:readingSlice
  },
})