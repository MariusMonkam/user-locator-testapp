import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./features/slices/userSlice";
const store = configureStore({
  reducer: usersSlice
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
