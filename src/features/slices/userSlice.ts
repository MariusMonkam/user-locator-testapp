import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../common/interfaces/user.interface";
import axios from "axios";
import { JSON_API } from "../../common/services/api";

interface UserState {
  loading: boolean;
  error: null | string;
  data: null | IUser[];
}

const initialState = {
  loading: false,
  error: null,
  data: null
} as UserState;

//Action
export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (data, thunkApi) => {
    try {
      const response = await axios.get<IUser[]>(JSON_API);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getUser = createAsyncThunk(
  "users/getUsers",
  async (data, thunkApi) => {
    try {
      const response = await axios.get<IUser>(JSON_API);
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

//Slice
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getUsers.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});
export default usersSlice.reducer;
