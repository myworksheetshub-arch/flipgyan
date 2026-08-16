'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Users, Award, Flame, Zap } from 'lucide-react';

export default function ParentChildrenPage() {
  return (
    <DashboardLayout role="PARENT">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 font-display">Enrolled Children</h1>
          <p className="text-xs text-slate-500">Child accounts linked to your parent dashboard.</p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100"
              alt="Aarav Kumar"
              className="w-14 h-14 rounded-2xl object-cover"
            />
            <div>
              <h3 className="text-base font-bold text-slate-900 font-display">Aarav Kumar</h3>
              <p className="text-xs text-slate-500">Class 10 CBSE • Delhi Public School, R.K. Puram</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
