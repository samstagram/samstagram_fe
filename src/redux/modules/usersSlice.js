import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  username: "",
  useremail: "",
  userprofile: "",
  followingCnt: 0,
  followersCnt: 0,
  jwt: "",
};

export const __getUsers = createAsyncThunk(
  "getUsers",
  async (payload, thunkAPI) => {}
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

export default usersSlice;
