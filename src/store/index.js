import { configureStore } from '@reduxjs/toolkit'
import scrollMagicReducer from './scrollMagic'

const store = configureStore({
  reducer: {
    // scrollMagic: scrollMagicReducer
  },
})

export default store