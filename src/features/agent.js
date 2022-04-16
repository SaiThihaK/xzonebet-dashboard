import { createSlice } from "@reduxjs/toolkit";
const AgentSlice = createSlice({
  name: "agent",
  initialState: {
    status: [],
  },
  reducers: {
    getStatus: (state, { payload }) => {
      state = payload;
    },
  },
});

export default AgentSlice.reducer;
export const { getStatus } = AgentSlice.actions;
export const Status = (state) => state.status;
