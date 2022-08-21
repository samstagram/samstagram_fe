import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "redux/modules/postsSlice";
import commentsSlice from "redux/modules/commentsSlice";
import usersSlice from "redux/modules/usersSlice";

const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    comments: commentsSlice.reducer,
    users: usersSlice.reducer,
  },
});

export default store;
