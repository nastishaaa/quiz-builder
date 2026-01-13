import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import router from './routes/index.js';
import cookieParser from 'cookie-parser';
import { notFoundHandler } from './middlewares/notFountHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';
dotenv.config();
const PORT = Number(process.env.PORT) || 5000;
export default function SetupServer() {
    const app = express(); // Створюємо додаток всередині функції
    // 1. CORS має йти ПЕРШИМ, до всіх роутів
    app.use(cors({
        origin: 'http://localhost:3000',
        credentials: true,
        optionsSuccessStatus: 200
    }));
    app.use(express.json());
    app.use(cookieParser());
    app.use('/', router);
    app.use(notFoundHandler);
    app.use(errorHandler);
    app.listen(PORT, () => console.log(`🚀 Server is running on PORT ${PORT}`));
}
