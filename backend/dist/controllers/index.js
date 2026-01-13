import { getAllQuizes, getQuizById, createQuize, deleteQuize } from '../services/index.js';
import createHttpError from 'http-errors';
export async function getAllQuizesController(req, res) {
    try {
        const result = await getAllQuizes();
        res.status(200).json({
            status: 200,
            message: "Quizes fetched successfully",
            data: result
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            message: 'Something went wrong!',
        });
    }
}
export async function getQuizByIdController(req, res) {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            throw createHttpError(400, 'Invalid quiz id');
        }
        const result = await getQuizById(id);
        res.status(200).json({
            status: 200,
            message: "Quiz fetched successfully",
            data: result
        });
    }
    catch (error) {
        res.status(404).json({
            status: 404,
            message: error.message || 'Quiz not found',
        });
    }
}
export async function postQuizeController(req, res) {
    try {
        const payload = req.body;
        const quiz = await createQuize(payload);
        res.status(201).json({
            status: 201,
            message: "Quiz created successfully",
            data: quiz
        });
    }
    catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Something went wrong!',
        });
    }
}
export async function deleteQuizeController(req, res) {
    try {
        await deleteQuize(+req.params.id);
        res.status(204).send();
    }
    catch (err) {
        console.error("FULL ERROR:", err);
        res.status(err.status || 500).json({ status: err.status || 500, message: err.message });
    }
}
