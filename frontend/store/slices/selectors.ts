import { RootState } from '../index';

export const selectAllQuizzes = (state: RootState)  => state.quiz.quizzes;
export const selectCurrentQuiz = (state: RootState) => state.quiz.currentQuiz;
export const selectQuizById = (state: RootState, id: string) =>
    state.quiz.quizzes.find(q => q.id === id);
