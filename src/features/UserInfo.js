import { createSlice } from "@reduxjs/toolkit";

const UserInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    info: [],
  },
  reducers: {
    getUserInfo: (state, { payload }) => {
      state.info = payload;
    },
  },
});

export default UserInfoSlice.reducer;
export const { getUserInfo } = UserInfoSlice.actions;
export const userInfo = (state) => state.userInfo.info;
