const { createSlice } = require("@reduxjs/toolkit")

const scrollMagic = createSlice({
  name: 'posts',
  initialState: {
    controller: new ScrollMagic.Controller(),
  },
  reducers: {

  },
})


// selsectors //
export const selectScrollMagic = state => state
export const selectConstroller = state => state.scrollMagic.controller


// exports //
export const { createPost } = scrollMagic.actions
export default scrollMagic.reducer