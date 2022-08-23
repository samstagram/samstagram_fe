import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "shared/api";
import { getCookie } from "shared/cookie";

const initialState = {
  posts: [],
  post: {},
  isLoading: true,
  error: null,
};

export const __getPosts = createAsyncThunk(
  "getPosts",
  async (payload, thunkAPI) => {
    try {
      const response = await axios({
        method: "get",
        url: `${BASE_URL}/api/articles?page=1&size=10`,
        headers: {
          "Content-Type": "application/json",
          Authorization: getCookie("mycookie"),
        },
      });
      console.log(response.data);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postPosts = createAsyncThunk(
  "postPosts",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const response = await axios({
        method: "post",
        url: `${BASE_URL}/api/articles`,
        headers: {
          "Content-Type": "multipart/form-data",
          responseType: "blob",
          Authorization: getCookie("mycookie"),
        },
        data: payload,
      });
      console.log(response.data);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deletePosts = createAsyncThunk(
  "deletePosts",
  async (payload, thunkAPI) => {
    try {
      await axios({
        method: "delete",
        url: `${BASE_URL}/api/articles/${payload}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: getCookie("mycookie"),
        },
      });
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getPost = createAsyncThunk(
  "getPost",
  async (payload, thunkAPI) => {
    try {
      const response = await axios({
        method: "get",
        url: `${BASE_URL}/api/articles/${payload}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: getCookie("mycookie"),
        },
      });
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postsSlice = createSlice({
  name: "postsSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [__getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPosts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.posts = payload;
    },
    [__getPosts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [__postPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__postPosts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.posts.unshift(payload);
    },
    [__postPosts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [__deletePosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__deletePosts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.posts = state.posts.filter((item) => item.articlesId !== payload);
    },
    [__deletePosts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [__getPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPost.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.post = payload;
    },
    [__getPost.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default postsSlice;
