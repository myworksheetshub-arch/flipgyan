'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { api } from '@/lib/api';
import { Check, Sparkles, Zap, ShieldCheck, HelpCircle, ArrowRight } from 'lucide-react';

import { PaymentModal } from '@/components/payment/PaymentModal';

export default function PricingPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [billingCycle, setBillingCycle] = useState<'MONTHLY' | 'ANNUAL'>('ANNUAL');
  const [activePaymentPlan, setActivePaymentPlan] = useState<{ id: string; name: string; price: number } | null>(null);

  const handleSubscribe = (planId: string) => {
    if (!user) {
      router.push('/login');
      return;
    }

    if (planId === 'FREE') {
      router.push('/student/dashboard');
      return;
    }

    const selectedPlan = plans.find((p) => p.id === planId);
    if (selectedPlan) {
      setActivePaymentPlan({
        id: selectedPlan.id,
        name: selectedPlan.name,
        price: selectedPlan.price,
      });
    }
  };

  const plans = [
    {
      id: 'FREE',
      name: 'Starter',
      price: 0,
      period: 'Forever Free',
      description: 'Essential revision notes and basic practice questions for self-study.',
      features: [
        'Access to basic CBSE Class 5–10 Study Notes',
        '5 Interactive Practice Quizzes / month',
        'Standard Mind Maps Visualizer',
        'Public Worksheets view',
        'Student Dashboard analytics',
      ],
      popular: false,
      buttonText: 'Get Started Free',
    },
    {
      id: 'PRO_STUDENT',
      name: 'Pro Student',
      price: billingCycle === 'ANNUAL' ? 249 : 499,
      period: billingCycle === 'ANNUAL' ? 'per month (₹2,999 billed annually)' : 'per month',
      description: 'Complete academic prep with unlimited tests, deep analytics & board question papers.',
      features: [
        'Unlimited Interactive Chapter Quizzes & Rapid Fire',
        'Full access to all Mind Maps & Deep Dive Notes',
        'Unlimited CBSE Worksheets with Step-by-Step Solutions',
        'CBSE Question Paper Generator & Model Exam Papers',
        'Bloom Taxonomy & Competency Diagnostics',
        'Gamification Streak Shields, Leaderboards & Badges',
        'Ad-Free Uninterrupted Learning Experience',
      ],
      popular: true,
      buttonText: 'Upgrade to Pro Student',
    },
    {
      id: 'PRO_TEACHER',
      name: 'Educator & School',
      price: billingCycle === 'ANNUAL' ? 999 : 1499,
      period: billingCycle === 'ANNUAL' ? 'per month (₹11,999 billed annually)' : 'per month',
      description: 'For educators and institutions to generate papers and manage cohorts.',
      features: [
        'All Pro Student features included',
        'Custom CBSE Question Paper Builder with Blueprint Weightage',
        '1-Click Printable PDF Exam Papers & Marking Keys',
        'Create & Assign Homework / Worksheets to Class Cohorts',
        'Real-Time Student Performance Monitoring & Weak Topic Alerts',
        'Dedicated Institutional Support',
      ],
      popular: false,
      buttonText: 'Subscribe as Educator',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-14">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Simple, Transparent Pricing</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-display">
          Invest in High-Performance Learning
        </h1>
        <p className="text-xs sm:text-base text-slate-600">
          Choose the plan that best fits your educational goals. Upgrade, downgrade, or cancel anytime.
        </p>

        {/* Billing Cycle Toggle */}
        <div className="inline-flex items-center p-1 bg-slate-100 rounded-2xl border border-slate-200 mt-4">
          <button
            onClick={() => setBillingCycle('MONTHLY')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              billingCycle === 'MONTHLY' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setBillingCycle('ANNUAL')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              billingCycle === 'ANNUAL' ? 'bg-brand-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>Annual Billing</span>
            <span className="px-1.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black uppercase">
              Save 40%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {plans.map((p) => (
          <div
            key={p.id}
            className={`rounded-3xl p-8 flex flex-col justify-between space-y-8 relative transition-all ${
              p.popular
                ? 'bg-slate-900 text-white shadow-2xl ring-2 ring-brand-500 scale-105'
                : 'bg-white text-slate-900 border border-slate-200 shadow-sm'
            }`}
          >
            {p.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 bg-gradient-to-r from-brand-500 to-indigo-500 text-white text-[11px] font-extrabold uppercase tracking-wider rounded-full shadow-md">
                Most Popular for CBSE
              </div>
            )}

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-extrabold font-display">{p.name}</h3>
                <p className={`text-xs mt-1 ${p.popular ? 'text-slate-300' : 'text-slate-500'}`}>{p.description}</p>
              </div>

              <div className="pt-2">
                <span className="text-4xl sm:text-5xl font-black font-display">
                  ₹{p.price}
                </span>
                <span className={`text-xs ml-2 font-medium ${p.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                  {p.period}
                </span>
              </div>

              <div className={`pt-4 border-t ${p.popular ? 'border-slate-800' : 'border-slate-100'} space-y-3`}>
                <p className={`text-xs font-bold uppercase tracking-wider ${p.popular ? 'text-brand-400' : 'text-slate-400'}`}>
                  What's included:
                </p>
                <ul className="space-y-2.5 text-xs font-medium">
                  {p.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${p.popular ? 'text-brand-400' : 'text-emerald-600'}`} />
                      <span className={p.popular ? 'text-slate-200' : 'text-slate-700'}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              onClick={() => handleSubscribe(p.id)}
              className={`w-full py-3.5 rounded-2xl text-xs sm:text-sm font-extrabold transition shadow-md ${
                p.popular
                  ? 'bg-brand-500 hover:bg-brand-400 text-white shadow-brand-500/25'
                  : 'bg-slate-900 hover:bg-slate-800 text-white'
              }`}
            >
              {p.buttonText}
            </button>
          </div>
        ))}
      </div>

      {/* Render Payment Checkout Modal */}
      {activePaymentPlan && (
        <PaymentModal
          isOpen={!!activePaymentPlan}
          onClose={() => setActivePaymentPlan(null)}
          planId={activePaymentPlan.id}
          planName={activePaymentPlan.name}
          price={activePaymentPlan.price}
          billingCycle={billingCycle}
          onSuccess={() => {
            setActivePaymentPlan(null);
            router.push('/student/dashboard');
          }}
        />
      )}
    </div>
  );
}
