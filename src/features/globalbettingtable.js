import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { globalBetting } from "../services/api-services";

export const globalbettingdata = createAsyncThunk(
  "globalbetting/globalbettingdata",
  async (dispatch, getState) => {
    return await axios.request(globalBetting).then((res) => res.data);
  }
);

export const globalbettingSlice = createSlice({
  name: "globalbetting",
  initialState: {
    value: [],
    status: null,
  },
  extraReducers: {
    [globalbettingdata.pending]: (state, action) => {
      state.status = "loading";
    },
    [globalbettingdata.fulfilled]: (state, action) => {
      state.status = "success";
      state.value = action.payload;
    },
    [globalbettingdata.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export default globalbettingSlice.reducer;