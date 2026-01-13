import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getQuizzes, getQuizById, createQuiz, deleteQuiz } from "./operations";

export interface Question {
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
  errorMessage?: string;
}

const initialState: QuizState = {
  quizzes: [],
  currentQuiz: null,
  isLoading: false,
  isError: false,
  errorMessage: undefined,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
  extraReducers: builder => {
    // ----- GET ALL -----
    builder.addCase(getQuizzes.pending, state => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = undefined;
    });
    builder.addCase(getQuizzes.fulfilled, (state, action: PayloadAction<Quiz[]>) => {
      state.quizzes = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getQuizzes.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });

    // ----- GET BY ID -----
    builder.addCase(getQuizById.pending, state => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = undefined;
      state.currentQuiz = null;
    });
    builder.addCase(getQuizById.fulfilled, (state, action: PayloadAction<Quiz>) => {
      state.currentQuiz = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getQuizById.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });

    // ----- CREATE -----
    builder.addCase(createQuiz.pending, state => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = undefined;
    });
    builder.addCase(createQuiz.fulfilled, (state, action: PayloadAction<Quiz>) => {
      state.quizzes.push(action.payload);
      state.isLoading = false;
    });
    builder.addCase(createQuiz.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });

    // ----- DELETE -----
    builder.addCase(deleteQuiz.pending, state => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = undefined;
    });
    builder.addCase(deleteQuiz.fulfilled, (state, action: PayloadAction<string>) => {
      state.quizzes = state.quizzes.filter(q => q.id !== action.payload);
      state.isLoading = false;
    });
    builder.addCase(deleteQuiz.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
  }
});

export default quizSlice.reducer;
