import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  fullname: string;
  username: string;
  age: number;
  totalPoints: Number;
}

const initialState: UserState = {
  fullname: "",
  username: "",
  age: 0,
  totalPoints: 0,
};

const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    login(state, payload) {
      state.fullname = payload.payload.fullname;
      state.username = payload.payload.username;
      state.age = payload.payload.age;
      localStorage.setItem("username", payload.payload.username);
    },

    setUserInfo(state, payload) {
      state.fullname = payload.payload.fullname;
      state.username = payload.payload.username;
      state.age = payload.payload.age;
      state.totalPoints = payload.payload.totalPoints;
    },
  },
});

export const { login, setUserInfo } = userSlice.actions;
export default userSlice.reducer;
