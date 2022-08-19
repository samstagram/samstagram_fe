import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {};

export const __getPosts = createAsyncThunk(
  'getPosts',
  async (payload, thunkAPI) => {}
);

export const __postPosts = createAsyncThunk(
  'postPosts',
  async (payload, thunkAPI) => {}
);

export const postsSlice = createSlice({
  name: 'postsSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [__getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPosts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
    },
    [__getPosts.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
    [__postPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__postPosts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
    },
    [__postPosts.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

export default postsSlice;
