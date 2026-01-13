import prisma from "../prisma.js";
import createHttpError from "http-errors";
export async function getAllQuizes() {
    try {
        const data = await prisma.quiz.findMany({
            include: { questions: true },
        });
        if (!data)
            throw createHttpError(404, 'Quizes not found!');
        return {
            quizes: data
        };
    }
    catch (error) {
        throw createHttpError(500, 'Something went wrong!');
    }
}
export async function getQuizById(id) {
    try {
        const data = await prisma.quiz.findUnique({
            where: { id: Number(id) },
            include: { questions: true }
        });
        if (!data)
            throw createHttpError(404, 'Quize not found!');
        return data;
    }
    catch (error) {
        throw createHttpError(500, 'Something went wrong!');
    }
}
export async function createQuize(payload) {
    try {
        const data = await prisma.quiz.create({
            data: {
                title: payload.title,
                questions: {
                    create: payload.questions.map(q => ({
                        text: q.text,
                        type: q.type,
                        options: q.options || [],
                    })),
                },
            },
            include: { questions: true },
        });
        return data;
    }
    catch (error) {
        console.error("Prisma Error:", error);
        throw createHttpError(500, 'Something went wrong!');
    }
}
export async function deleteQuize(id) {
    try {
        await prisma.question.deleteMany({
            where: { quizId: Number(id) }
        });
        const data = await prisma.quiz.delete({
            where: { id: Number(id) }
        });
        return data;
    }
    catch (error) {
        console.error("DELETE FAILED:", error);
        throw createHttpError(500, 'Failed to delete quiz');
    }
}
