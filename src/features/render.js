import { createSlice } from "@reduxjs/toolkit";

const RenderSlice = createSlice({
  name: "render",
  initialState: {
    render: false,
  },
  reducers: {
    getRender: (state, { payload }) => {
      state.render = payload;
    },
  },
});
export default RenderSlice.reducer;
export const { getRender } = RenderSlice.actions;
export const selectedRender = ({ render }) => render.render;
