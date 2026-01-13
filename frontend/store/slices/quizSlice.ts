import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getQuizById, getQuizzes } from "./operations";

interface Question {
  id: string;
  text: string;
  type: "boolean" | "input" | "checkbox";
  options?: string[];
}

export interface Quiz {
  id: string;
  title: string;
  questions: Question[];
}

interface QuizState {
    quizzes: Quiz[];
    currentQuiz: Quiz | null;
    isLoading: boolean;
    isError: boolean;
}

const initialState: QuizState = {
    quizzes: [],
    currentQuiz: null,
    isLoading: false,
    isError: false,
};

export const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            // ALL QUIZZES
            .addCase(getQuizzes.pending, state => {
                state.isLoading = true;
            })
            .addCase(getQuizzes.fulfilled, (state, action) => {
                state.quizzes = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(getQuizzes.rejected, state => {
                state.isLoading = false;
                state.isError = true;
            })

            .addCase(getQuizById.pending, state => {
                state.isLoading = true;
            })
            .addCase(getQuizById.fulfilled, (state, action) => {
                state.currentQuiz = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(getQuizById.rejected, state => {
                state.isLoading = false;
                state.isError = true;
            });
    }
})

export default quizSlice.reducer;
