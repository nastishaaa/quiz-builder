import type { Request, Response, NextFunction } from "express";
import prisma from "../prisma.js";
import createHttpError from "http-errors";
import { CreateQuizInput, QuizResponse } from "../types/index.js";

export async function getAllQuizes() {
    try {
        const data = await prisma.quiz.findMany({
            include: { questions: true },
        });

        if (!data) throw createHttpError(404, 'Quizes not found!');

        return {
            quizes: data
        };

    } catch (error) {
        throw createHttpError(500, 'Something went wrong!');
    }
}

export async function getQuizById(id: number) {
    try {
        const data = await prisma.quiz.findUnique({
            where: { id: Number(id) },
            include: { questions: true }
        });

        if(!data) throw createHttpError(404, 'Quize not found!');

        return data;

    } catch (error) {
        throw createHttpError(500, 'Something went wrong!');
    }
}

export async function createQuize(payload: CreateQuizInput): Promise<QuizResponse> {
    try {
        const data = await prisma.quiz.create({
            data: {
                title: payload.title,
                questions: {
                    create: payload.questions,
                },
            },
            include: { questions: true },
        });
        return data
    } catch (error) {
        throw createHttpError(500, 'Something went wrong!');
    }
}

export async function deleteQuize(id: number) {
    try {
        await prisma.question.deleteMany({
            where: { quizId: Number(id) }
        });

        const data = await prisma.quiz.delete({
            where: { id: Number(id) }
        });

        return data;
    } catch (error: any) {
        console.error("DELETE FAILED:", error);
        throw createHttpError(500, 'Failed to delete quiz');
    }
}