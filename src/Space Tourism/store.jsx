import { configureStore } from '@reduxjs/toolkit'
import sidebarModal from './features/Users/userSlice'

export const store = configureStore({
  reducer: {
    sidebar: sidebarModal,
  },
})
