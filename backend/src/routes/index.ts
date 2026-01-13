import { Router } from "express";
import { deleteQuizeController, getAllQuizesController, getQuizByIdController, postQuizeController } from "../controllers/index.js";

const router = Router();

router.get('/quizzes', getAllQuizesController);
router.get('/quizzes/:id', getQuizByIdController);

router.post('/quizzes', postQuizeController);

router.delete('/quizzes/:id', deleteQuizeController);

export default router;