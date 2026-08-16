'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { TrendingUp, CheckCircle2 } from 'lucide-react';

export default function ParentProgressPage() {
  return (
    <DashboardLayout role="PARENT">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 font-display">Child Subject Progress</h1>
          <p className="text-xs text-slate-500">Track subject-wise completion and mastery scores for Aarav Kumar.</p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span>Mathematics (Class 10)</span>
                <span className="text-brand-600">88% Mastery</span>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-brand-600 rounded-full w-[88%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span>Science (Class 10)</span>
                <span className="text-emerald-600">92% Mastery</span>
              </div>
              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-600 rounded-full w-[92%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
