// Quiz тип
export type Quiz = {
    id: number;
    title: string;
    createdAt: Date;
    questions: Question[];
};

// Question тип
export type Question = {
    id: number;
    text: string;
    quizId: number;
    quiz: Quiz;
};

// Вхідні дані для створення квізу
export type CreateQuestionInput = {
    text: string;
};

export type CreateQuizInput = {
    title: string;
    questions: CreateQuestionInput[];
};

// Вихідні дані для API (без циклічності)
export type QuizResponse = {
    id: number;
    title: string;
    createdAt: Date;
    questions: {
        id: number;
        text: string;
        quizId: number;
    }[];
};
