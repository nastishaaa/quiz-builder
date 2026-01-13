🚀 Quiz Builder

Full-stack платформа для створення, публікації та проходження квізів.
Побудована на Next.js + Express + Prisma.

📁 Структура проєкту
quiz-builder/
├── backend/ # Express / NestJS API
│ ├── src/
│ └── prisma/ # Prisma schema & migrations
├── frontend/ # Next.js client
│ ├── pages/
│ ├── components/
│ └── services/
└── README.md

🛠️ Встановлення

Склонуй репозиторій:

git clone https://github.com/your-username/quiz-builder.git
cd quiz-builder

🔌 Backend setup

Перейди в backend:

cd backend
npm install

Створи .env:

PORT=5000
DATABASE_URL="your_database_url"

(для Prisma)

npx prisma migrate dev

Запуск:

npm run build
npm run start

🌐 Frontend setup

В новому терміналі:

cd frontend
npm install

Створи .env.local:

NEXT_PUBLIC_API_URL=http://localhost:5000

Запуск:

npm run build
npm run start

Frontend відкриється на:

http://localhost:3000

🔄 Паралельний запуск

Відкрий два термінали:

Terminal Команди
#1 cd backend && npm run build && npm run start
#2 cd frontend && npm run build && npm run start

✨ Основні можливості

🧠 Створення квізів

📝 Додавання запитань та відповідей

🧩 Tech Stack
Frontend Next.js, React
Backend Express / NodeJS
Database Prisma + PostgreSQL
