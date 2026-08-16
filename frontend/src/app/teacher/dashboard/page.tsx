'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { useAuth } from '@/lib/auth-context';
import { api } from '@/lib/api';
import {
  Users,
  FileSpreadsheet,
  HelpCircle,
  FileText,
  TrendingUp,
  Plus,
  Sparkles,
  Layers,
  Clock,
  ArrowRight,
  GraduationCap,
} from 'lucide-react';

export default function TeacherDashboardPage() {
  const { user } = useAuth();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await api.getTeacherDashboard();
        setData(res);
      } catch (err) {
        console.error('Failed to load teacher dashboard:', err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const metrics = data?.metrics || {
    totalStudents: 34,
    totalQuestions: 250,
    totalWorksheets: 18,
    totalQuizzes: 12,
    activeAssignments: 4,
    classAverageScore: 82.4,
  };

  return (
    <DashboardLayout role="TEACHER">
      <div className="space-y-8">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-indigo-900 via-slate-900 to-brand-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-500/30">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Educator Portal • Delhi Public School</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-display">
              Welcome, {user?.name || 'Priya Sharma'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Manage class cohorts, author CBSE question banks, and generate customized board exam papers.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <Link
              href="/teacher/question-papers"
              className="px-4 py-2.5 bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs rounded-xl shadow-xs transition flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Generate CBSE Paper</span>
            </Link>
            <Link
              href="/teacher/questions"
              className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/20 transition flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Question</span>
            </Link>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span>Active Students</span>
              <Users className="w-4 h-4 text-indigo-600" />
            </div>
            <p className="text-2xl font-extrabold text-slate-900 font-display">{metrics.totalStudents}</p>
            <span className="text-[11px] text-slate-400">Class 10 & Class 9</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span>Class Avg Score</span>
              <TrendingUp className="w-4 h-4 text-emerald-600" />
            </div>
            <p className="text-2xl font-extrabold text-slate-900 font-display">{metrics.classAverageScore}%</p>
            <span className="text-[11px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-md inline-block">
              Top 10% CBSE Bench
            </span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span>Question Bank</span>
              <Layers className="w-4 h-4 text-brand-600" />
            </div>
            <p className="text-2xl font-extrabold text-slate-900 font-display">{metrics.totalQuestions}</p>
            <span className="text-[11px] text-slate-400">MCQs, Blooms & Cases</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span>Assignments</span>
              <FileSpreadsheet className="w-4 h-4 text-amber-600" />
            </div>
            <p className="text-2xl font-extrabold text-slate-900 font-display">{metrics.activeAssignments}</p>
            <span className="text-[11px] text-slate-400">Pending submissions: 2</span>
          </div>
        </div>

        {/* Quick Authoring Tools */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/teacher/worksheets"
            className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition space-y-3 group"
          >
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-600 transition font-display">
              Worksheets Manager
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Create chapter homework worksheets, assign to classrooms, and track student completion.
            </p>
            <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
              Create Worksheet <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/teacher/quizzes"
            className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-sky-500 hover:shadow-lg transition space-y-3 group"
          >
            <div className="w-10 h-10 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition font-display">
              Quiz Engine Authoring
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Create timed MCQ tests with custom marks, negative marking rules, and explanations.
            </p>
            <span className="text-xs font-bold text-sky-600 flex items-center gap-1">
              Create Quiz <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/teacher/question-papers"
            className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-brand-500 hover:shadow-lg transition space-y-3 group"
          >
            <div className="w-10 h-10 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-600 transition font-display">
              CBSE Question Paper Generator
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Build complete board examination papers with blueprint weighting and printable export.
            </p>
            <span className="text-xs font-bold text-brand-600 flex items-center gap-1">
              Generate Exam Paper <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
}
