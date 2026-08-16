'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Award, CheckCircle2 } from 'lucide-react';

export default function ParentResultsPage() {
  return (
    <DashboardLayout role="PARENT">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 font-display">Child Test Results</h1>
          <p className="text-xs text-slate-500">Historical performance breakdown of Aarav's tests.</p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs divide-y divide-slate-100 text-xs">
          <div className="py-3 flex items-center justify-between">
            <div>
              <p className="font-bold text-slate-900">Class 10 Real Numbers Mastery Quiz</p>
              <p className="text-slate-400">Completed on Aug 12, 2026</p>
            </div>
            <span className="font-extrabold text-emerald-600 text-sm">4/5 (80%)</span>
          </div>

          <div className="py-3 flex items-center justify-between">
            <div>
              <p className="font-bold text-slate-900">CBSE Practice Worksheet — Real Numbers Standard</p>
              <p className="text-slate-400">Completed on Aug 11, 2026</p>
            </div>
            <span className="font-extrabold text-emerald-600 text-sm">22/25 (88%)</span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
