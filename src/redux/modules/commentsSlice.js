import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {};

export const __getComments = createAsyncThunk(
  'getUsers',
  async (payload, thunkAPI) => {}
);

export const __postComments = createAsyncThunk(
  'postUsers',
  async (payload, thunkAPI) => {}
);

export const commentsSlice = createSlice({
  name: 'commentsSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [__getComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__getComments.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
    },
    [__getComments.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
    [__postComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__postComments.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
    },
    [__postComments.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

export default commentsSlice;
