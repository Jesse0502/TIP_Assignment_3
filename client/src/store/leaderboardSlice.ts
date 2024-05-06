import { createSlice } from "@reduxjs/toolkit";

interface LeaderboardState {
  leaderboard: [{ username: string; totalPoints: number }] | [];
  userCurrentPosition: number;
}

const initialState: LeaderboardState = {
  leaderboard: [],
  userCurrentPosition: 0,
};

const leaderboardSlice = createSlice({
  name: "leaderboard",
  initialState,
  reducers: {
    setLeaderboard(state, payload) {
      const setLeaderboard = payload.payload.leaderboard.sort(
        (a, b) => b.totalPoints - a.totalPoints
      );
      state.leaderboard = setLeaderboard;
      state.userCurrentPosition =
        setLeaderboard.findIndex(
          (i) => i.username === payload.payload.currentUser.username
        ) + 1;
    },
  },
});

export const { setLeaderboard } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
