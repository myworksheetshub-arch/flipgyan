'use client';

import React, { useState, useEffect } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { api } from '@/lib/api';
import { Users, Search, Award, Flame, Zap, CheckCircle2 } from 'lucide-react';

export default function TeacherStudentsPage() {
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await api.getUsers('STUDENT');
        setStudents(res);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <DashboardLayout role="TEACHER">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 font-display">Student Roster & Cohorts</h1>
          <p className="text-xs text-slate-500">Monitor active student enrollments, streaks, and assignment completion.</p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="divide-y divide-slate-100">
            {students.map((st) => (
              <div key={st.id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={st.avatar || 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100'}
                    alt={st.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{st.name}</h4>
                    <p className="text-xs text-slate-500">{st.email} • {st.school || 'DPS R.K. Puram'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-xs">
                  <div className="flex items-center gap-1 font-bold text-amber-600">
                    <Flame className="w-4 h-4 fill-amber-500" />
                    <span>{st.streakDays || 12}d Streak</span>
                  </div>
                  <div className="text-right">
                    <span className="font-extrabold text-slate-900 font-display block text-sm">{st.totalXp || 1850} XP</span>
                    <span className="text-[10px] font-bold text-sky-600">Level {st.level || 7}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
