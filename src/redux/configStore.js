import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "redux/modules/postsSlice";
import commentsSlice from "redux/modules/commentsSlice";
import usersSlice from "redux/modules/usersSlice";
import userListSlice from "./modules/userListSlice";

const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    comments: commentsSlice.reducer,
    users: usersSlice.reducer,
    userlist: userListSlice.reducer,
  },
});

export default store;
