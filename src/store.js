import { configureStore } from "@reduxjs/toolkit";
import bettingSlice from "./features/betting";
import globalbettingSlice from "./features/globalbettingtable";
import loginSlice from "./features/login-auth";
import AgentSlice from "./features/agent";

const store = configureStore({
  reducer: {
    betting: bettingSlice,
    globalbetting: globalbettingSlice,
    auth: loginSlice,
    agent: AgentSlice,
  },
});
export default store;
