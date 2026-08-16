'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { api } from '@/lib/api';
import { useAuth } from '@/lib/auth-context';
import {
  Users,
  Shield,
  BookOpen,
  FileSpreadsheet,
  HelpCircle,
  CreditCard,
  TrendingUp,
  Layers,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export default function AdminDashboardPage() {
  const { user } = useAuth();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await api.getAdminDashboard();
        setData(res);
      } catch (err) {
        console.error('Admin dashboard error:', err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const usersCount = data?.users || { total: 5, students: 1, teachers: 1, parents: 1 };
  const currCount = data?.curriculum || { classes: 6, subjects: 6, chapters: 15, questions: 10, notes: 2, worksheets: 1, quizzes: 2 };
  const finCount = data?.financials || { activeSubscriptions: 1, totalRevenue: 1499 };

  return (
    <DashboardLayout role="ADMIN">
      <div className="space-y-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold border border-rose-500/30">
              <Shield className="w-3.5 h-3.5" />
              <span>Platform Administrative Control</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-display">
              FlipGyan Super Admin Panel
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Monitor total registered users, platform curriculum assets, and subscription revenue.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center min-w-[120px]">
              <span className="text-2xl font-black text-rose-400 font-display">₹{finCount.totalRevenue}</span>
              <p className="text-[11px] font-bold text-rose-200 uppercase tracking-wider mt-0.5">Total Revenue</p>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span>Total Users</span>
              <Users className="w-4 h-4 text-indigo-600" />
            </div>
            <p className="text-2xl font-extrabold text-slate-900 font-display">{usersCount.total}</p>
            <span className="text-[11px] text-slate-400">Students: {usersCount.students} | Teachers: {usersCount.teachers}</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span>Curriculum Classes</span>
              <BookOpen className="w-4 h-4 text-brand-600" />
            </div>
            <p className="text-2xl font-extrabold text-slate-900 font-display">{currCount.classes}</p>
            <span className="text-[11px] text-slate-400">{currCount.subjects} Subjects Enrolled</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span>Question Bank</span>
              <Layers className="w-4 h-4 text-emerald-600" />
            </div>
            <p className="text-2xl font-extrabold text-slate-900 font-display">{currCount.questions}</p>
            <span className="text-[11px] text-slate-400">{currCount.quizzes} Active Quizzes</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
              <span>Active Subscriptions</span>
              <CreditCard className="w-4 h-4 text-rose-600" />
            </div>
            <p className="text-2xl font-extrabold text-slate-900 font-display">{finCount.activeSubscriptions}</p>
            <span className="text-[11px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-md inline-block">
              100% Renewal Rate
            </span>
          </div>
        </div>

        {/* Quick Management Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/admin/users"
            className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-brand-500 hover:shadow-lg transition space-y-2 group"
          >
            <div className="w-10 h-10 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-600 transition font-display">
              User Roles & Permissions
            </h3>
            <p className="text-xs text-slate-500">Manage students, teachers, parents, and content editors.</p>
          </Link>

          <Link
            href="/admin/classes"
            className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition space-y-2 group"
          >
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-600 transition font-display">
              Classes & Curriculum Manager
            </h3>
            <p className="text-xs text-slate-500">Add or update CBSE classes, subjects, and chapter syllabi.</p>
          </Link>

          <Link
            href="/admin/subscriptions"
            className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-rose-500 hover:shadow-lg transition space-y-2 group"
          >
            <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <CreditCard className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-rose-600 transition font-display">
              Subscriptions & Payments
            </h3>
            <p className="text-xs text-slate-500">View active subscription plans, payment history, and revenue metrics.</p>
          </Link>
        </div>

        {/* Recent Registered Users */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
          <h3 className="text-base font-bold text-slate-900 font-display">Recently Registered Accounts</h3>

          <div className="divide-y divide-slate-100 text-xs">
            {data?.recentUsers?.map((u: any) => (
              <div key={u.id} className="py-3 flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900">{u.name}</p>
                  <p className="text-slate-400">{u.email}</p>
                </div>
                <span className="px-2.5 py-1 bg-slate-100 text-slate-700 font-bold rounded-lg uppercase text-[10px]">
                  {u.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
