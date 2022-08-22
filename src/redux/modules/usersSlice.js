import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, FAKE_TOKEN } from "shared/api";

const initialState = {
  user: {},
  isLoading: true,
  error: null,
};

export const __getUsers = createAsyncThunk(
  "getUsers",
  async (payload, thunkAPI) => {
    try {
      const response = await axios({
        method: "get",
        url: `${BASE_URL}/api/profiles`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${FAKE_TOKEN}`,
        },
      });
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postUsers = createAsyncThunk(
  "postUsers",
  async (payload, thunkAPI) => {}
);

export const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [__getUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [__getUsers.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
    },
    [__getUsers.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
    [__postUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [__postUsers.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
    },
    [__postUsers.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

export const usersAction = usersSlice.actions;
export default usersSlice;
