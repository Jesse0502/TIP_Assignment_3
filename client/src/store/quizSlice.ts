import { createSlice } from "@reduxjs/toolkit";

interface QuizState {
  quizzesTaken:
    | [
        {
          _id: string;
          taken_by: string;
          quiz_name: string;
          attempted: boolean;
          completed: boolean;
          score: number;
        }
      ]
    | [];
}

const initialState: QuizState = {
  quizzesTaken: [],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuizzes(state, payload) {
      state.quizzesTaken = payload.payload;
    },
  },
});

export const { setQuizzes } = quizSlice.actions;
export default quizSlice.reducer;
