import { createSlice } from "@reduxjs/toolkit";

const PaymentSettingSlice = createSlice({
  name: "PaymentSetting",
  initialState: {
    payment: "",
  },
  reducers: {
    PaymentType: (state, action) => {
      state.payment = action.payload;
    },
  },
});

export default PaymentSettingSlice.reducer;
export const { PaymentType } = PaymentSettingSlice.actions;
