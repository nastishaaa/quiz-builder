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
