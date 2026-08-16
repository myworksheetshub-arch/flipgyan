'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { api } from '@/lib/api';
import { Quiz } from '@/types';
import { QuizRunner } from '@/components/quiz/QuizRunner';
import { ChevronLeft } from 'lucide-react';

export default function QuizDetailPage() {
  const { id } = useParams() as { id: string };
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadQuiz() {
      try {
        const data = await api.getQuiz(id);
        setQuiz(data);
      } catch (err) {
        console.error('Failed to load quiz:', err);
      } finally {
        setLoading(false);
      }
    }
    loadQuiz();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <div className="w-12 h-12 border-4 border-brand-600 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-xs text-slate-500 font-medium">Initializing quiz runner and questions...</p>
      </div>
    );
  }

  if (!quiz) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-800">Quiz Not Found</h2>
        <Link href="/quizzes" className="inline-flex items-center gap-2 text-xs font-bold text-brand-600">
          <ChevronLeft className="w-4 h-4" /> Back to Quizzes
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <Link
        href="/quizzes"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-brand-600 transition"
      >
        <ChevronLeft className="w-4 h-4" />
        <span>All Quizzes</span>
      </Link>

      <QuizRunner quiz={quiz} />
    </div>
  );
}
