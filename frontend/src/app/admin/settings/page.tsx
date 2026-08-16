'use client';

import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Settings, Shield, Lock } from 'lucide-react';

export default function AdminSettingsPage() {
  return (
    <DashboardLayout role="ADMIN">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 font-display">System Settings & Security</h1>
          <p className="text-xs text-slate-500">Configure global platform constants, JWT secrets, and security policies.</p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
          <h3 className="text-base font-bold text-slate-900 font-display flex items-center gap-2">
            <Shield className="w-4 h-4 text-rose-600" />
            Security & Authentication
          </h3>
          <p className="text-xs text-slate-500">RBAC Role Enforcement: ACTIVE</p>
          <p className="text-xs text-slate-500">JWT Token Expiration: 7 Days</p>
        </div>
      </div>
    </DashboardLayout>
  );
}
