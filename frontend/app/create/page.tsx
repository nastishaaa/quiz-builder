'use client';
import { useState } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { createQuiz } from '@/store/slices/operations';
import { useRouter } from 'next/navigation';
import s from './CreatePage.module.css';

export default function CreatePage() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState<any[]>([]);

  const addQuestion = (type: string) => {
    setQuestions(q => [...q, { text: '', type, options: [] }]);
  };

  const updateQuestionText = (index: number, text: string) => {
    const updated = [...questions];
    updated[index].text = text;
    setQuestions(updated);
  };

  const submit = async () => {
    await dispatch(createQuiz({ title, questions }));
    router.push('/quizzes');
  };

  return (
    <div className={s.wrapper}>
      <input
        className={s.titleInput}
        placeholder="Quiz title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      {questions.map((q, i) => (
        <div key={i} className={s.questionCard}>
          <input
            className={s.smallInput}
            placeholder="Question text"
            value={q.text}
            onChange={e => updateQuestionText(i, e.target.value)}
          />
        </div>
      ))}

      <div className={s.buttons}>
        <button className={s.typeBtn} onClick={() => addQuestion('boolean')}>+ Boolean</button>
        <button className={s.typeBtn} onClick={() => addQuestion('input')}>+ Input</button>
        <button className={s.typeBtn} onClick={() => addQuestion('checkbox')}>+ Checkbox</button>
      </div>

      <button className={s.submitBtn} onClick={submit}>Create Quiz</button>
    </div>
  );
}
