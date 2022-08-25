import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "shared/api";
import { getCookie } from "shared/cookie";

const initialState = {
  posts: [],
  post: {},
  page: 1,
  keyword: "",
  hasMore: false,
  isLoading: true,
  error: null,
};

export const __getPosts = createAsyncThunk(
  "getPosts",
  async (payload, thunkAPI) => {
    const page = payload === 0 ? payload + 1 : payload;
    try {
      const response = await axios({
        method: "get",
        url: `${BASE_URL}/api/articles?page=${page}&size=10`,
        headers: {
          "Content-Type": "application/json",
          Authorization: getCookie("mycookie"),
        },
      });
      return thunkAPI.fulfillWithValue({ data: response.data, page: payload });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postPosts = createAsyncThunk(
  "postPosts",
  async (payload, thunkAPI) => {
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
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
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
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getHashtagPost = createAsyncThunk(
  "getHashtagPost",
  async (payload, thunkAPI) => {
    try {
      const response = await axios({
        method: "get",
        url: `${BASE_URL}/api/articles/search?hashtag=${payload}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: getCookie("mycookie"),
        },
      });
      return thunkAPI.fulfillWithValue({
        data: response.data,
        keyword: payload,
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __patchLikePosts = createAsyncThunk(
  "patchLikePosts",
  async (payload, thunkAPI) => {
    try {
      const response = await axios({
        method: "patch",
        url: `${BASE_URL}/api/articles`,
        headers: {
          "Content-Type": "application/json",
          Authorization: getCookie("mycookie"),
        },
        data: payload,
      });
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
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
      state.keyword = "";
      state.posts =
        payload.page === 0 ? payload.data : [...state.posts, ...payload.data];
      state.hasMore = payload.data.length > 0;
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
      state.keyword = "";
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
      state.keyword = "";
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
    [__getHashtagPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__getHashtagPost.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.posts = payload.data.filter((val, index, arr) => {
        const jsonArr = arr.map((val) => JSON.stringify(val));
        return jsonArr.indexOf(JSON.stringify(val)) === index;
      });
      state.keyword = payload.keyword;
    },
    [__getHashtagPost.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [__patchLikePosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__patchLikePosts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.keyword = "";
    },
    [__patchLikePosts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default postsSlice;
