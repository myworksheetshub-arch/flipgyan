'use client';

import React, { useState, useEffect } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { api } from '@/lib/api';
import { useAuth } from '@/lib/auth-context';
import { Achievement } from '@/types';
import { Award, Zap, Flame, Shield, CheckCircle2, Lock, Sparkles } from 'lucide-react';

export default function StudentAchievementsPage() {
  const { user } = useAuth();
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await api.getAchievements(user?.id);
        setAchievements(data);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [user]);

  const unlockedCount = achievements.filter((a) => a.isUnlocked).length;

  return (
    <DashboardLayout role="STUDENT">
      <div className="space-y-8">
        {/* Header with XP & Badge count */}
        <div className="bg-linear-to-r from-amber-500 via-brand-600 to-indigo-600 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold backdrop-blur-xs">
              <Award className="w-3.5 h-3.5" />
              <span>FlipGyan Honors & Badges</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-display">
              Achievements & Rewards
            </h1>
            <p className="text-xs sm:text-sm text-amber-100 max-w-md">
              Unlock badges by solving quizzes, maintaining study streaks, and mastering CBSE chapters!
            </p>
          </div>

          <div className="flex items-center gap-3 relative z-10">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center min-w-[110px]">
              <span className="text-3xl font-black font-display">{unlockedCount} / {achievements.length}</span>
              <p className="text-[11px] font-bold text-amber-200 uppercase tracking-wider mt-0.5">Badges Unlocked</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center min-w-[110px]">
              <span className="text-3xl font-black font-display text-amber-300">+{user?.totalXp || 1850}</span>
              <p className="text-[11px] font-bold text-amber-200 uppercase tracking-wider mt-0.5">Total XP</p>
            </div>
          </div>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className={`p-6 rounded-3xl border transition-all flex flex-col justify-between space-y-4 ${
                ach.isUnlocked
                  ? 'bg-white border-amber-200 shadow-md ring-1 ring-amber-100'
                  : 'bg-slate-50/80 border-slate-200 opacity-60'
              }`}
            >
              <div className="flex items-start justify-between">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm ${
                    ach.isUnlocked ? 'bg-amber-100 border border-amber-200' : 'bg-slate-200 text-slate-400'
                  }`}
                >
                  {ach.icon === 'Flame' ? '🔥' : ach.icon === 'Zap' ? '⚡' : ach.icon === 'Award' ? '🏆' : ach.icon === 'Sigma' ? '📐' : '🎯'}
                </div>

                <span
                  className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                    ach.isUnlocked
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1'
                      : 'bg-slate-200 text-slate-600 flex items-center gap-1'
                  }`}
                >
                  {ach.isUnlocked ? (
                    <>
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>Unlocked</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-3 h-3 text-slate-500" />
                      <span>Locked</span>
                    </>
                  )}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900 font-display">{ach.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{ach.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-700">
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> +{ach.xpReward} XP
                </span>
                <span className="text-[11px] text-slate-400 uppercase">{ach.badgeType}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
