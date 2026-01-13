import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Question {
  id: string;
  text: string;
  type: "boolean" | "input" | "checkbox";
  options?: string[];
}

interface Quiz {
  id: string;
  title: string;
  questions: Question[];
}

interface QuizState {
  quizzes: Quiz[];
}

const initialState: QuizState = {
  quizzes: [],
};

export const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        setQuizzes: (state, action: PayloadAction<Quiz[]>) => {
        state.quizzes = action.payload;
        },
        addQuiz: (state, action: PayloadAction<Quiz>) => {
        state.quizzes.push(action.payload);
        },
        deleteQuiz: (state, action: PayloadAction<string>) => {
        state.quizzes = state.quizzes.filter(q => q.id !== action.payload);
        },
    },
});

export const { setQuizzes, addQuiz, deleteQuiz } = quizSlice.actions;
export default quizSlice.reducer;
