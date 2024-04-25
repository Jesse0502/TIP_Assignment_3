import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  fullname: string;
  username: string;
  age: number;
}

const initialState: UserState = {
  fullname: "",
  username: "",
  age: 0,
};

const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    login(state, payload) {
      state.fullname = payload.payload.fullname;
      state.username = payload.payload.username;
      state.age = payload.payload.age;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
