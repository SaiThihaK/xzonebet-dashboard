import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { betting } from "../services/api-services";

export const bettingData = createAsyncThunk(
  "betting/bettingData",
  async (dispatch, getState) => {
    return await axios.request(betting).then((res) => res.data);
  }
);

const bettingSlice = createSlice({
  name: "betting",
  initialState: {
    data: [],
    status: null,
  },
  extraReducers: {
    [bettingData.pending]: (state, action) => {
      state.status = "loading";
    },
    [bettingData.fulfilled]: (state, action) => {
      state.status = "success";
      state.data = action.payload;
    },
    [bettingData.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export default bettingSlice.reducer;
