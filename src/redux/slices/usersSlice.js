import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "usersList",
  initialState: [],
  reducers: {
    showMoreUsers: (state, action) =>
      [...state, ...action.payload].sort((a, b) => b.registration_timestamp - a.registration_timestamp),
    refreshUserList: (state, action) =>
      [...action.payload].sort((a, b) => b.registration_timestamp - a.registration_timestamp),
  },
});

export const { refreshUserList, showMoreUsers } = usersSlice.actions;
export const usersList = (state) => state.usersList;
export default usersSlice.reducer;
