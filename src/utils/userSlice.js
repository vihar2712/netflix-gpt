import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    info: null,
    loading: false,
  },
  reducers: {
    startSigning: (state) => {
      state.loading = true;
    },
    stopSigning: (state) => {
      state.loading = false;
    },
    addUser: (state, action) => {
      state.info = action.payload;
    },
    removeUser: (state) => {
      state.info = null;
    },
  },
});

export const { addUser, removeUser, startSigning, stopSigning } =
  userSlice.actions;

export default userSlice.reducer;
