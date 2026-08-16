'use client';

import React, { useState, useEffect } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { api } from '@/lib/api';
import { TrendingUp, Award, Zap, BarChart2, CheckCircle2 } from 'lucide-react';

export default function StudentProgressPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await api.getStudentDashboard();
        setData(res);
      } catch (err) {}
    }
    load();
  }, []);

  const stats = data?.stats || {
    overallAccuracy: 88,
    avgQuizScore: 84.5,
    totalQuizzes: 4,
    totalWorksheets: 3,
    totalQuestionsSolved: 48,
  };

  const subjectProgress = [
    { name: 'Mathematics', score: 88, completed: '8/10 Chapters', color: 'bg-brand-600' },
    { name: 'Science', score: 92, completed: '7/8 Chapters', color: 'bg-emerald-600' },
    { name: 'English Language', score: 85, completed: '6/7 Chapters', color: 'bg-purple-600' },
    { name: 'Social Science', score: 78, completed: '5/8 Chapters', color: 'bg-amber-600' },
  ];

  return (
    <DashboardLayout role="STUDENT">
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 font-display">Academic Mastery & Progress</h1>
          <p className="text-xs text-slate-500">Holistic analytics on curriculum completion and subject proficiencies.</p>
        </div>

        {/* Subject Progress Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subjectProgress.map((sub) => (
            <div key={sub.name} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900 font-display">{sub.name}</h3>
                <span className="text-xs font-bold text-slate-500">{sub.completed}</span>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-500">Mastery Level</span>
                  <span className="text-slate-900 font-bold">{sub.score}%</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full ${sub.color} rounded-full`} style={{ width: `${sub.score}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
