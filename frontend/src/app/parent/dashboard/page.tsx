'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { api } from '@/lib/api';
import { useAuth } from '@/lib/auth-context';
import { HeartHandshake, Flame, Zap, Award, TrendingUp, CheckCircle2, AlertTriangle, BookOpen } from 'lucide-react';

export default function ParentDashboardPage() {
  const { user } = useAuth();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await api.getParentDashboard();
        setData(res);
      } catch (err) {
        console.error('Parent dashboard error:', err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const child = data?.children?.[0] || {
    name: 'Aarav Kumar',
    classGrade: 'Class 10',
    school: 'Delhi Public School, R.K. Puram',
    streakDays: 12,
    totalXp: 1850,
    level: 7,
    avgScore: 84.5,
    totalQuizzes: 4,
    totalWorksheets: 3,
  };

  return (
    <DashboardLayout role="PARENT">
      <div className="space-y-8">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-emerald-900 via-slate-900 to-teal-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Parent Overview Portal</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-display">
              Welcome, {user?.name || 'Anand Kumar'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Monitoring academic progress for <strong className="text-emerald-300">{child.name}</strong> ({typeof child.classGrade === 'object' ? (child.classGrade as any)?.name : child.classGrade}).
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center min-w-[110px]">
              <span className="text-2xl font-black font-display text-emerald-400">{child.avgScore}%</span>
              <p className="text-[11px] font-bold text-emerald-200 uppercase tracking-wider mt-0.5">Average Score</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center min-w-[110px]">
              <div className="flex items-center justify-center gap-1 text-amber-400">
                <Flame className="w-4 h-4 fill-amber-400" />
                <span className="text-2xl font-black font-display text-white">{child.streakDays}d</span>
              </div>
              <p className="text-[11px] font-bold text-amber-200 uppercase tracking-wider mt-0.5">Study Streak</p>
            </div>
          </div>
        </div>

        {/* Child Profile Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src={child.avatar || 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100'}
              alt={child.name}
              className="w-14 h-14 rounded-2xl object-cover border border-slate-200"
            />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-slate-900 font-display">{child.name}</h3>
                <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-extrabold rounded-md">
                  Active Student
                </span>
              </div>
              <p className="text-xs text-slate-500">{typeof child.classGrade === 'object' ? (child.classGrade as any)?.name : child.classGrade} • {child.school}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-bold">
            <div className="text-right">
              <span className="text-slate-900 text-sm block">{child.totalXp} XP</span>
              <span className="text-slate-400 font-medium">Level {child.level}</span>
            </div>
          </div>
        </div>

        {/* Subject Strengths & Weaknesses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Strongest Subject Areas</span>
            </div>
            <div className="space-y-3 text-xs font-medium">
              <div className="p-3 bg-emerald-50/60 border border-emerald-100 rounded-xl flex justify-between items-center">
                <span>Science — Chemical Reactions & Equations</span>
                <span className="font-bold text-emerald-700">92% Accuracy</span>
              </div>
              <div className="p-3 bg-emerald-50/60 border border-emerald-100 rounded-xl flex justify-between items-center">
                <span>Mathematics — Real Numbers & Proofs</span>
                <span className="font-bold text-emerald-700">88% Accuracy</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <span>Areas Needing Practice</span>
            </div>
            <div className="space-y-3 text-xs font-medium">
              <div className="p-3 bg-amber-50/60 border border-amber-100 rounded-xl flex justify-between items-center">
                <span>Social Science — Nationalism in India</span>
                <span className="font-bold text-amber-800">72% Accuracy</span>
              </div>
              <div className="p-3 bg-amber-50/60 border border-amber-100 rounded-xl flex justify-between items-center">
                <span>Chemistry — Redox Balancing</span>
                <span className="font-bold text-amber-800">75% Accuracy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
