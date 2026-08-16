'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { TrendingUp, BarChart2, Users, CreditCard } from 'lucide-react';

export default function AdminAnalyticsPage() {
  return (
    <DashboardLayout role="ADMIN">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 font-display">System Analytics & Growth</h1>
          <p className="text-xs text-slate-500">Platform telemetry, DAU/MAU metrics, and quiz completion trends.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              Daily Active Students
            </h3>
            <div className="h-40 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center text-xs text-slate-400 font-medium">
              Daily active user telemetry chart
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-brand-600" />
              Monthly Recurring Revenue (MRR)
            </h3>
            <div className="h-40 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center text-xs text-slate-400 font-medium">
              Financial subscription growth chart
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
