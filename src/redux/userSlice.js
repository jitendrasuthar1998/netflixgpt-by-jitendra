import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  userInfo: null, // for user object
  userToken: null, // for storing the JWT
  error: null,
  loggedIn: false,
  success: false, // for monitoring the registration process.
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log("user credentials == ", action.payload);
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      console.log("remove user called", state.userInfo);
      state.userInfo = null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
