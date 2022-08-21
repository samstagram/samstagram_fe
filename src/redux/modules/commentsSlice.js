import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const __getComments = createAsyncThunk(
  "getComments",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/comments");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postComments = createAsyncThunk(
  "postComments",
  async (payload, thunkAPI) => {
    const data = await axios.post("http://localhost:3001/comments", payload);
    return data.data;
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
      state.comments = payload;
    },
    [__getComments.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.comments = payload;
    },
    [__postComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__postComments.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.comments = [...state.comments, payload];
    },
    [__postComments.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.comments = payload;
    },
  },
});

export default commentsSlice;
