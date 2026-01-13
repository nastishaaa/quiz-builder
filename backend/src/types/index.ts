export type Question = {
    id: number;
    text: string;
    type: string;
    options: string[];
    quizId: number;
};

export type Quiz = {
    id: number;
    title: string;
    createdAt: Date;
    questions: {
        id: number;
        text: string;
        type: string;
        options: string[];
        quizId: number;
    }[];
};

export type CreateQuestionInput = {
    text: string;
    type: string;     
    options: string[];
};

export type CreateQuizInput = {
    title: string;
    questions: CreateQuestionInput[];
};

export type QuizResponse = {
    status: number;
    message: string;
    data: Quiz; 
};