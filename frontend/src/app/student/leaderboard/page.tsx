'use client';

import React, { useState, useEffect } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { api } from '@/lib/api';
import { useAuth } from '@/lib/auth-context';
import { Flame, Zap, Trophy, Medal, Crown } from 'lucide-react';

export default function StudentLeaderboardPage() {
  const { user } = useAuth();
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await api.getLeaderboard();
        setLeaderboard(data);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <DashboardLayout role="STUDENT">
      <div className="space-y-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 via-orange-600 to-rose-600 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold">
              <Trophy className="w-3.5 h-3.5" />
              <span>Weekly Academic Rankings</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-display">Student Hall of Fame</h1>
            <p className="text-xs sm:text-sm text-amber-100 max-w-md">
              Compete with students across India. Solve quizzes, maintain streaks, and climb to the top!
            </p>
          </div>

          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner">
            🏆
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="divide-y divide-slate-100">
            {leaderboard.map((st, idx) => {
              const isCurrentUser = st.id === user?.id || st.name === user?.name;
              return (
                <div
                  key={st.id || idx}
                  className={`p-4 sm:p-5 flex items-center justify-between transition-colors ${
                    isCurrentUser ? 'bg-brand-50/70 border-l-4 border-l-brand-600' : 'hover:bg-slate-50/80'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Rank Badge */}
                    <div
                      className={`w-9 h-9 rounded-2xl flex items-center justify-center font-extrabold text-sm ${
                        idx === 0
                          ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/30'
                          : idx === 1
                          ? 'bg-slate-300 text-slate-900 shadow-sm'
                          : idx === 2
                          ? 'bg-amber-700 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-600 font-bold'
                      }`}
                    >
                      {idx === 0 ? '👑' : idx + 1}
                    </div>

                    <img
                      src={st.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100'}
                      alt={st.name}
                      className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    />

                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">{st.name}</h4>
                        {isCurrentUser && (
                          <span className="px-2 py-0.5 rounded-md bg-brand-600 text-white text-[10px] font-extrabold uppercase">
                            You
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500">
                        {st.classGrade?.name || 'Class 10'} • {st.school || 'CBSE Board'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 sm:gap-8">
                    <div className="hidden sm:flex items-center gap-1 text-xs font-bold text-amber-600">
                      <Flame className="w-4 h-4 fill-amber-500" />
                      <span>{st.streakDays || 12}d Streak</span>
                    </div>

                    <div className="text-right">
                      <span className="text-sm sm:text-base font-extrabold text-slate-900 font-display flex items-center gap-1 justify-end">
                        <Zap className="w-4 h-4 text-sky-500 fill-sky-500" />
                        {st.totalXp} XP
                      </span>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Level {st.level || 1}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
