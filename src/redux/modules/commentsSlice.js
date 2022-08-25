import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "shared/api";
import { getCookie } from "shared/cookie";

const initialState = {
  articlesId: null,
  commentsList: [],
  isLoading: false,
  error: null,
};

export const __getComments = createAsyncThunk(
  "getComments",
  async (payload, thunkAPI) => {
    try {
      const response = await axios({
        method: "get",
        url: `${BASE_URL}/api/comments/${payload}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: getCookie("mycookie"),
        },
      });
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postComments = createAsyncThunk(
  "postComments",
  async (payload, thunkAPI) => {
    try {
      const response = await axios({
        method: "post",
        url: `${BASE_URL}/api/comments/${payload.articlesId}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: getCookie("mycookie"),
        },
        data: { content: payload.content },
      });
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const commentsSlice = createSlice({
  name: "commentsSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [__getComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__getComments.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.commentsList = payload.commentsList;
    },
    [__getComments.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [__postComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__postComments.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.commentsList.unshift(payload);
    },
    [__postComments.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.comments = payload;
    },
  },
});

export default commentsSlice;
