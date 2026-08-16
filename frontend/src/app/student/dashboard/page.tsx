'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { api } from '@/lib/api';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import {
  Zap,
  Flame,
  Award,
  BookOpen,
  FileSpreadsheet,
  HelpCircle,
  TrendingUp,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ChevronRight,
} from 'lucide-react';

export default function StudentDashboardPage() {
  const { user } = useAuth();
  const [dashboardData, setDashboardData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const data = await api.getStudentDashboard();
        setDashboardData(data);
      } catch (err) {
        console.error('Failed to load student dashboard:', err);
      } finally {
        setLoading(false);
      }
    }
    loadDashboard();
  }, []);

  const stats = dashboardData?.stats || {
    totalQuizzes: 4,
    totalWorksheets: 3,
    totalQuestionsSolved: 48,
    avgQuizScore: 84.5,
    overallAccuracy: 88.0,
    achievementsCount: 3,
  };

  const studentUser = dashboardData?.user || user;

  return (
    <DashboardLayout role="STUDENT">
      <div className="space-y-8">
        {/* 1. Welcome Banner with Gamification Pill */}
        <div className="bg-gradient-to-r from-brand-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold border border-brand-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                {typeof studentUser?.classGrade === 'object'
                  ? (studentUser?.classGrade as any)?.name
                  : studentUser?.classGrade || 'Class 10'}{' '}
                Learner
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-display">
              Welcome back, {studentUser?.name || 'Aarav'}!
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
              You are on a <strong className="text-amber-400">{studentUser?.streakDays || 12}-day study streak</strong>. Keep solving quizzes to level up!
            </p>
          </div>

          <div className="flex items-center gap-3 relative z-10">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 text-center min-w-[100px]">
              <div className="flex items-center justify-center gap-1 text-amber-400">
                <Flame className="w-5 h-5 fill-amber-400 animate-pulse" />
                <span className="text-2xl font-extrabold text-white">{studentUser?.streakDays || 12}</span>
              </div>
              <p className="text-[11px] font-bold text-amber-300 uppercase tracking-wider mt-0.5">Day Streak</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 text-center min-w-[100px]">
              <div className="flex items-center justify-center gap-1 text-sky-400">
                <Zap className="w-5 h-5 fill-sky-400" />
                <span className="text-2xl font-extrabold text-white">{studentUser?.totalXp || 1850}</span>
              </div>
              <p className="text-[11px] font-bold text-sky-300 uppercase tracking-wider mt-0.5">Level {studentUser?.level || 7} XP</p>
            </div>
          </div>
        </div>

        {/* 2. Key Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span>Overall Accuracy</span>
              <TrendingUp className="w-4 h-4 text-emerald-600" />
            </div>
            <p className="text-2xl font-extrabold text-slate-900 font-display">{stats.overallAccuracy}%</p>
            <span className="text-[11px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-md inline-block">
              +4% this week
            </span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span>Quizzes Solved</span>
              <HelpCircle className="w-4 h-4 text-sky-600" />
            </div>
            <p className="text-2xl font-extrabold text-slate-900 font-display">{stats.totalQuizzes}</p>
            <span className="text-[11px] text-slate-500 font-medium">Avg Score: {stats.avgQuizScore}%</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span>Worksheets Completed</span>
              <FileSpreadsheet className="w-4 h-4 text-brand-600" />
            </div>
            <p className="text-2xl font-extrabold text-slate-900 font-display">{stats.totalWorksheets}</p>
            <span className="text-[11px] text-brand-600 font-bold bg-brand-50 px-2 py-0.5 rounded-md inline-block">
              All Graded
            </span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span>Questions Solved</span>
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
            </div>
            <p className="text-2xl font-extrabold text-slate-900 font-display">{stats.totalQuestionsSolved}</p>
            <span className="text-[11px] text-slate-500 font-medium">Across all chapters</span>
          </div>
        </div>

        {/* 3. Recommended Practice & Weak Topic Alert */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900 font-display flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-brand-600" />
                Continue Learning & Recommended Chapters
              </h3>
              <Link href="/student/notes" className="text-xs font-bold text-brand-600 hover:text-brand-700">
                View All
              </Link>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-400 transition flex items-center justify-between group">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-brand-600 uppercase tracking-wider">Mathematics • Ch 1</span>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-brand-600 transition">
                    Real Numbers: Proofs of Irrationality & HCF
                  </h4>
                  <p className="text-xs text-slate-500">Mind Map & Solved Examples Available</p>
                </div>
                <Link
                  href="/study-notes"
                  className="px-3.5 py-1.5 bg-brand-600 text-white font-bold text-xs rounded-xl shadow-xs"
                >
                  Resume
                </Link>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-400 transition flex items-center justify-between group">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Science • Ch 1</span>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition">
                    Chemical Reactions & Types of Decomposition
                  </h4>
                  <p className="text-xs text-slate-500">Practice Quiz Ready (15 Mins)</p>
                </div>
                <Link
                  href="/quizzes"
                  className="px-3.5 py-1.5 bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-xs"
                >
                  Start Test
                </Link>
              </div>
            </div>
          </div>

          {/* Weak Topic Alert & Streak Badge */}
          <div className="space-y-6">
            <div className="bg-amber-50/80 rounded-3xl border border-amber-200 p-6 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-xs">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Focus Recommendation</span>
              </div>
              <h4 className="text-sm font-bold text-amber-950 font-display">
                Balancing Redox Equations
              </h4>
              <p className="text-xs text-amber-800 leading-relaxed">
                Your last quiz showed a 60% accuracy on Oxidation-Reduction reactions. Try the dedicated practice worksheet.
              </p>
              <Link
                href="/worksheets"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 hover:underline"
              >
                <span>Practice Weak Topics</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-4 h-4 text-indigo-600" />
                <span>Earned Badges</span>
              </h4>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 font-bold" title="7-Day Warrior">
                  🔥
                </div>
                <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 font-bold" title="First Quiz Master">
                  🎯
                </div>
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold" title="Centurion">
                  ⚡
                </div>
                <Link href="/student/achievements" className="text-xs font-bold text-brand-600 ml-auto hover:underline">
                  View All (5)
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Recent Quizzes & Activity Log */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 font-display flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-500" />
              Recent Learning Activities
            </h3>
            <Link href="/student/results" className="text-xs font-bold text-brand-600 hover:text-brand-700">
              View Detailed Analytics
            </Link>
          </div>

          <div className="divide-y divide-slate-100 text-xs">
            <div className="py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  Q
                </div>
                <div>
                  <p className="font-bold text-slate-800">Class 10 Real Numbers Mastery Quiz</p>
                  <p className="text-slate-400 text-[11px]">Completed with score 4/5 (80%)</p>
                </div>
              </div>
              <span className="font-bold text-amber-600">+80 XP</span>
            </div>

            <div className="py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  W
                </div>
                <div>
                  <p className="font-bold text-slate-800">CBSE Practice Worksheet — Real Numbers Standard</p>
                  <p className="text-slate-400 text-[11px]">Submitted score 22/25 (88%)</p>
                </div>
              </div>
              <span className="font-bold text-amber-600">+150 XP</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
