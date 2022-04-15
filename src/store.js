import { configureStore } from "@reduxjs/toolkit";
import bettingSlice from "./features/betting";
import globalbettingSlice from "./features/globalbettingtable";
import loginSlice from "./features/login-auth";
import AgentSlice from "./features/agent";
import UserInfoSlice from "./features/UserInfo";
import PaymentSettingSlice from "./features/PaymentSetting";
import RenderSlice from "./features/render";
import CountrySlice from "./features/country";

const store = configureStore({
  reducer: {
    betting: bettingSlice,
    globalbetting: globalbettingSlice,
    auth: loginSlice,
    agent: AgentSlice,
    userInfo: UserInfoSlice,
    PaymentSetting: PaymentSettingSlice,
    render: RenderSlice,
    country: CountrySlice,
  },
});
export default store;
