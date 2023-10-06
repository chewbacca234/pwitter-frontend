import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  username: null,
  firstname: null,
  picture: null,
  likedList: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => state = action.payload,
    logout: (state) => {
      state = initialState;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
