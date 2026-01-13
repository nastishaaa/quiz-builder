import { RootState } from "..";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getQuizzes = createAsyncThunk(
    'quizzes/getQuizzes',
    async (_, thunkAPI) => {
        try {
            const res = await axios.get('https://trainschedule-app-server.onrender.com/trains');

            return res.data.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const getQuizById = createAsyncThunk(
    'quizzes/getQuizById',
    async (id, thunkAPI) => {
        try {
            const res = await axios.get(`https://trainschedule-app-server.onrender.com/trains/${id}`);

            return res.data.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const createQuiz = createAsyncThunk(
    'quizzes/createQuiz',
    async (quizData, thunkAPI) => {
        try {
            const { data } = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/quizzes`,
                quizData,
                { withCredentials: true }
            );
            return data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(
                e.response?.data?.message || 'Failed to create quiz'
            );
        }
    }
);

export const deleteQuiz = createAsyncThunk(
    'quizzes/deleteQuiz',
    async (quizId, thunkAPI) => {
        try {
            await axios.delete(
                `${process.env.NEXT_PUBLIC_API_URL}/quizzes/${quizId}`,
                { withCredentials: true }
            );
            return quizId;
        } catch (e: any) {
            return thunkAPI.rejectWithValue(
                e.response?.data?.message || 'Failed to delete quiz'
            );
        }
    }
);