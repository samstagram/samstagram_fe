import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "shared/api";
import { getCookie, setCookie } from "shared/cookie";

const initialState = {
  user: {},
  isLogin: false,
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
          Authorization: getCookie("mycookie"),
        },
      });
      !getCookie("myprofile") &&
        setCookie("myprofile", response.data.userprofile);
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
  reducers: {
    getUser: (state, action) => {
      action.payload = {
        userprofile: getCookie("userprofile"),
        isLogin: getCookie("mycookie") ? true : false,
      };
    },
  },
  extraReducers: {
    [__getUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [__getUsers.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
      state.isLogin = getCookie("mycookie") ? true : false;
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
