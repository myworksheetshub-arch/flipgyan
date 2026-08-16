'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { api } from '@/lib/api';
import { CreditCard, CheckCircle2, Crown, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function AdminSubscriptionsPage() {
  const [plans, setPlans] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await api.getSubscriptionPlans();
        setPlans(res);
      } catch (err) {
        console.error('Failed to load plans:', err);
      }
    }
    load();
  }, []);

  return (
    <DashboardLayout role="ADMIN">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 font-display">Subscription Plans & Entitlements</h1>
            <p className="text-xs text-slate-500">Manage pricing tiers, PRO Student permissions, and admin access controls.</p>
          </div>

          <Link
            href="/admin/users"
            className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl shadow-xs transition flex items-center gap-2 shrink-0 self-start sm:self-auto"
          >
            <Crown className="w-4 h-4 fill-slate-950" />
            <span>Grant PRO Access to Students →</span>
          </Link>
        </div>

        {/* PRO Access Callout */}
        <div className="p-6 bg-gradient-to-r from-slate-900 via-slate-800 to-amber-950 rounded-3xl text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Admin PRO Management Console</span>
            </div>
            <h2 className="text-xl font-black font-display">Grant Student PRO Access in 1-Click</h2>
            <p className="text-xs text-slate-300">
              As an Admin, you can manually convert any registered free student to <strong>PRO Student</strong> status directly from the Admin User Management panel. This instantly unlocks all 1,587 quizzes, mind maps, and CBSE worksheets.
            </p>
          </div>
          <Link
            href="/admin/users"
            className="px-5 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-2xl shadow-lg transition flex items-center gap-2 shrink-0"
          >
            <span>Open User PRO Directory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Pricing Tiers Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.id} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 bg-slate-100 text-slate-800 text-xs font-extrabold rounded-md uppercase">
                    {p.id}
                  </span>
                  {p.highlight && (
                    <span className="px-2.5 py-0.5 bg-amber-500 text-slate-950 text-[10px] font-black rounded-full">
                      POPULAR
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-display">{p.name}</h3>
                <p className="text-3xl font-black text-slate-900 font-display">
                  ₹{p.price} <span className="text-xs font-normal text-slate-500">/{p.billing || 'mo'}</span>
                </p>
                <p className="text-xs text-slate-500">{p.description}</p>
                <ul className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                  {p.features?.map((f: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
