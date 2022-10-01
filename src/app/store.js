import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from '../features/counter/counterSlice'

import postsReducer from '../features/posts/postsSlice'
import usersReduce from '../features/users/usersSlice'

export const store = configureStore({
    // reducer: {
    //     counter: counterReducer,
    // }
    reducer: {
        posts: postsReducer,
        users: usersReduce
    }
})