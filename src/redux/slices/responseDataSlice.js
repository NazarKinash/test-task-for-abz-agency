import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const responseDataSlice = createSlice({
  name: "responseData",
  initialState: {},
  reducers: {
    updateResponseData: (state, action) => action.payload,
  },
});

export const { updateResponseData } = responseDataSlice.actions;
export const responseData = (state) => state.responseData;
export const totalPagesSelector = createSelector(responseData, (data) => data.totalPages);

export default responseDataSlice.reducer;
