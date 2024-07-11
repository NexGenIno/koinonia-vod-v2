import { configureStore } from '@reduxjs/toolkit'
import { videosSlice } from './slices/videos/videosSlice'

export const store = configureStore({
  reducer: {
    videos: videosSlice.reducer
  },
})