import { createSlice } from "@reduxjs/toolkit";
const CountrySlice = createSlice({
  name: "country",
  initialState: {
    data: "",
  },
  reducers: {
    addCountry: (state, { payload }) => {
      state.data = payload.data;
    },
  },
});
export const { addCountry } = CountrySlice.actions;
export default CountrySlice.reducer;
