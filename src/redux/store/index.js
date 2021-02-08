import usersList from "../slices/usersSlice";
import responseData from "../slices/responseDataSlice";
import registerInfo from "../slices/registerInfoSlice";
import thunk from "redux-thunk";

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

const rootReducer = { usersList, responseData, registerInfo };

const globalState = configureStore({
  reducer: rootReducer,
  middleware: [thunk, ...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== "production",
});

export default globalState;
