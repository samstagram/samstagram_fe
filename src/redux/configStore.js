import { configureStore } from '@reduxjs/toolkit';
import postsSlice from 'redux/modules/postsSlice';
import commentsSlice from 'redux/modules/commentsSlice';
import usersSlice from 'redux/modules/usersSlice';

const store = configureStore({
  reducer: {
    postsSlice: postsSlice.reducer,
    comments: commentsSlice.reducer,
    usersSlice: usersSlice.reducer,
  },
});

export default store;
