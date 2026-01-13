'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getQuizzes, deleteQuiz } from '@/store/slices/operations';
import s from './QuizzesPage.module.css';

export default function QuizListPage() {
  const dispatch = useAppDispatch();
  const quizzes = useAppSelector(state => state.quiz.quizzes);

    useEffect(() => {
        dispatch(getQuizzes());
        console.log(quizzes);
    }, []);

  const handleDelete = (id: string) => {
    dispatch(deleteQuiz(id));
  };

  return (
    <div className={s.wrapper}>
      {Array.isArray(quizzes) && quizzes?.map(q => (
        <div key={q.id} className={s.card}>
          <Link href={`/quizzes/${q.id}`}>
            <div>
              <p className={s.title}>{q.title}</p>
              <span className={s.count}>{q.questions.length} questions</span>
            </div>
          </Link>
          <span className={s.delete} onClick={() => handleDelete(q.id)}>🗑</span>
        </div>
      ))}
    </div>
  );
}
