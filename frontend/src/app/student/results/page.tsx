'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { api } from '@/lib/api';
import { TrendingUp, Award, Clock, CheckCircle2, RotateCcw, ArrowRight } from 'lucide-react';
import { formatDate } from '@/lib/utils';

export default function StudentResultsPage() {
  const [quizAttempts, setQuizAttempts] = useState<any[]>([]);
  const [wsAttempts, setWsAttempts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [qa, wa] = await Promise.all([
          api.getMyQuizAttempts().catch(() => []),
          api.getMyWorksheetAttempts().catch(() => []),
        ]);
        setQuizAttempts(qa);
        setWsAttempts(wa);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <DashboardLayout role="STUDENT">
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 font-display">Test Results & Performance Analytics</h1>
          <p className="text-xs text-slate-500">Track your historical score trends, accuracies, and test submissions.</p>
        </div>

        {/* Quiz Attempts */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
          <h2 className="text-base font-bold text-slate-900 font-display flex items-center gap-2">
            <Award className="w-4 h-4 text-brand-600" />
            Interactive Quiz Attempts ({quizAttempts.length})
          </h2>

          {quizAttempts.length === 0 ? (
            <p className="text-xs text-slate-400 py-6 text-center">No quiz attempts yet. Take a quiz to view your score breakdown!</p>
          ) : (
            <div className="divide-y divide-slate-100 text-xs">
              {quizAttempts.map((attempt) => (
                <div key={attempt.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-brand-600 uppercase tracking-wider">
                      {attempt.quiz?.subject?.name} • {formatDate(attempt.completedAt)}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900">{attempt.quiz?.title}</h4>
                    <div className="flex items-center gap-3 text-slate-500 text-[11px]">
                      <span>Correct: {attempt.correctCount}</span>
                      <span>•</span>
                      <span>Wrong: {attempt.incorrectCount}</span>
                      <span>•</span>
                      <span>Skipped: {attempt.skippedCount}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <span className="text-lg font-black text-slate-900 font-display">
                        {attempt.score}/{attempt.maxScore}
                      </span>
                      <p className="text-[11px] font-bold text-emerald-600">{attempt.percentage}%</p>
                    </div>

                    <Link
                      href={`/quizzes/${attempt.quizId}`}
                      className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl transition flex items-center gap-1"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Retake</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Worksheet Attempts */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
          <h2 className="text-base font-bold text-slate-900 font-display flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Submitted Practice Worksheets ({wsAttempts.length})
          </h2>

          {wsAttempts.length === 0 ? (
            <p className="text-xs text-slate-400 py-6 text-center">No worksheets submitted yet.</p>
          ) : (
            <div className="divide-y divide-slate-100 text-xs">
              {wsAttempts.map((attempt) => (
                <div key={attempt.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">
                      {attempt.worksheet?.subject?.name} • {formatDate(attempt.submittedAt)}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900">{attempt.worksheet?.title}</h4>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <span className="text-lg font-black text-slate-900 font-display">
                        {attempt.score}/{attempt.totalMarks}
                      </span>
                      <p className="text-[11px] font-bold text-emerald-600">{attempt.percentage}%</p>
                    </div>

                    <Link
                      href={`/worksheets/${attempt.worksheetId}`}
                      className="px-3.5 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold rounded-xl transition"
                    >
                      View Solutions
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
