import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, FAKE_TOKEN } from "shared/api";

const initialState = {
  userlist: [],
  isLoading: true,
  error: null,
};

export const __getUserList = createAsyncThunk(
  "getUserList",
  async (payload, thunkAPI) => {
    try {
      const response = await axios({
        method: "get",
        url: `${BASE_URL}/api/members`,
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

export const __postUserList = createAsyncThunk(
  "postUserList",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const response = await axios({
        method: "post",
        url: `${BASE_URL}/api/members/${payload}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${FAKE_TOKEN}`,
        },
        data: payload,
      });
      console.log(response);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const userListSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [__getUserList.pending]: (state) => {
      state.isLoading = true;
    },
    [__getUserList.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.userlist = payload;
    },
    [__getUserList.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [__postUserList.pending]: (state) => {
      state.isLoading = true;
    },
    [__postUserList.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.userlist = state.userlist.filter(
        (user) => user.memberId !== payload
      );
    },
    [__postUserList.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default userListSlice;
