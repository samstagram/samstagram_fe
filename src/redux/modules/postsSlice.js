import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

export const __getPosts = createAsyncThunk(
  "getPosts",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/posts");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postPosts = createAsyncThunk(
  "postPosts",
  async (payload, thunkAPI) => {
    const data = await axios.post("http://localhost:3001/posts", payload);
    return data.data;
  }
);

export const __deletePosts = createAsyncThunk(
  "deletePosts",
  async (payload, thunkAPI) => {
    await axios.delete(`http://localhost:3001/posts/${payload}`);
    return payload;
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
      state.posts = payload;
    },
    [__postPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__postPosts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.posts = [...state.posts, payload];
    },
    [__postPosts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.posts = payload;
    },
    [__deletePosts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__deletePosts.fulfilled]: (state, action) => {
      state.posts = state.posts.filter((item) => item.id !== action.payload);
    },
    [__deletePosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postsSlice;
