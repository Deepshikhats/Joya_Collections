import { createSlice } from "@reduxjs/toolkit";
export interface authSlice {
  otp: number;
}
const initialState: authSlice = {
  otp: 0,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setOtp: (state, { payload }) => {
      state.otp = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOtp } = authSlice.actions;

export default authSlice.reducer;
