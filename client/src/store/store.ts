import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import quizReducer from "./quizSlice";
import leaderboardReducer from "./leaderboardSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    quiz: quizReducer,
    leaderboard: leaderboardReducer,
  }, // Add reducers here
});
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
