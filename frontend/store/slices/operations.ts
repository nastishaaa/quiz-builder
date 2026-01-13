import { RootState } from "..";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Question, Quiz } from "./quizSlice";

interface CreateQuizPayload {
  title: string;
  questions: Question[];
}

export const getQuizzes = createAsyncThunk(
    'quizzes/getQuizzes',
    async (_, thunkAPI) => {
        try {
            const res = await axios.get('http://localhost:5000/quizzes');

            return res.data.data.quizes;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const getQuizById = createAsyncThunk<Quiz, string>(
  'quizzes/getQuizById',
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`http://localhost:5000/quizzes/${id}`);
      return res.data.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createQuiz = createAsyncThunk(
    'quizzes/createQuiz',
    async (quizData: CreateQuizPayload, thunkAPI) => {
        try {
            const { data } = await axios.post(
                `http://localhost:5000/quizzes`,
                quizData,
                { withCredentials: true }
            );
            return data.data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(
                e.response?.data?.message || 'Failed to create quiz'
            );
        }
    }
);
export const deleteQuiz = createAsyncThunk<string, string>(
  'quizzes/deleteQuiz',
  async (quizId, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:5000/quizzes/${quizId}`);
      return quizId;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(
        e.response?.data?.message || 'Failed to delete quiz'
      );
    }
  }
);
