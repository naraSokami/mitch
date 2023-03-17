const { createSlice } = require("@reduxjs/toolkit")

const aos = createSlice({
  name: 'posts',
  initialState: {
    controller: 'test',
  },
  reducers: {
    
  },
})


// selsectors //
export const selectAos = state => state
export const selectConstroller = state => state.aos.controller


// exports //
export const { createPost } = aos.actions
export default aos.reducer