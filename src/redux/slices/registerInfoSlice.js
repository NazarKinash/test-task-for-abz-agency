import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const registerInfoSlice = createSlice({
  name: "registerInfo",
  initialState: {},
  reducers: {
    setRegisterInfo: (state, action) => (action.payload ? action.payload : {}),
  },
});

export const { setRegisterInfo } = registerInfoSlice.actions;
export const registerInfo = (state) => state.registerInfo;
export const registerSuccessSelector = createSelector(registerInfo, (data) => data.success);
export const messageSelector = createSelector(registerInfo, (data) => data.message);
export default registerInfoSlice.reducer;
