'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { api } from '@/lib/api';
import { QuestionPaper } from '@/types';
import { QuestionPaperView } from '@/components/paper/QuestionPaperView';
import { ChevronLeft } from 'lucide-react';

export default function QuestionPaperDetailPage() {
  const { id } = useParams() as { id: string };
  const [paper, setPaper] = useState<QuestionPaper | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPaper() {
      try {
        const data = await api.getQuestionPaper(id);
        setPaper(data);
      } catch (err) {
        console.error('Failed to load paper:', err);
      } finally {
        setLoading(false);
      }
    }
    loadPaper();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <div className="w-12 h-12 border-4 border-slate-900 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-xs text-slate-500 font-medium">Generating CBSE Examination Blueprint and Sections...</p>
      </div>
    );
  }

  if (!paper) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-800">Question Paper Not Found</h2>
        <Link href="/question-papers" className="inline-flex items-center gap-2 text-xs font-bold text-brand-600">
          <ChevronLeft className="w-4 h-4" /> Back to Question Papers
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <div className="no-print">
        <Link
          href="/question-papers"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-brand-600 transition"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>All Question Papers</span>
        </Link>
      </div>

      <QuestionPaperView paper={paper} />
    </div>
  );
}
