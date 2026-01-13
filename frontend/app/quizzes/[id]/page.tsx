'use client';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { getQuizById } from '@/store/slices/operations';
import s from './QuizPage.module.css';

export default function QuizDetailPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const quiz = useAppSelector(state => state.quiz.currentQuiz);

  const quizId: string | null = !id || Array.isArray(id) ? null : id;

  useEffect(() => {
    if (!quizId) return;
    dispatch(getQuizById(quizId));
  }, [quizId, dispatch]);

  if (!quiz) return <p className={s.wrapper}>Loading...</p>;

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>{quiz.title}</h1>
      {quiz.questions.map(q => (
        <div key={q.id} className={s.question}>
          <p>{q.text}</p>
          <span className={s.type}>{q.type}</span>
        </div>
      ))}
    </div>
  );
}
