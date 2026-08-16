'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { useAuth } from '@/lib/auth-context';
import { api } from '@/lib/api';
import { Quiz } from '@/types';
import {
  HelpCircle,
  Clock,
  Zap,
  ArrowRight,
  Lock,
  Crown,
  Sparkles,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';

import { PaymentModal } from '@/components/payment/PaymentModal';

export default function StudentQuizzesPage() {
  const { user, isPro } = useAuth();
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);
  const [showProModal, setShowProModal] = useState<boolean>(false);
  const [lockedQuizTitle, setLockedQuizTitle] = useState<string>('');
  const [showCheckoutModal, setShowCheckoutModal] = useState<boolean>(false);

  const isProStudent = isPro || user?.role === 'TEACHER' || user?.role === 'ADMIN' || (user as any)?.role === 'PRO_STUDENT' || (user as any)?.subscriptionTier === 'PRO_STUDENT';

  useEffect(() => {
    async function load() {
      try {
        let studentClassNum = '10';
        const cg = (user as any)?.classGrade;
        if (cg && typeof cg === 'object' && typeof cg.number === 'number') {
          studentClassNum = String(cg.number);
        } else if (cg && typeof cg === 'object' && typeof cg.name === 'string') {
          const match = cg.name.match(/\d+/);
          if (match) studentClassNum = match[0];
        } else if (typeof cg === 'string') {
          const match = cg.match(/\d+/);
          if (match) studentClassNum = match[0];
        }

        const data = await api.getQuizzes({ classId: studentClassNum });

        // Strictly filter to ensure student sees ONLY their enrolled class quizzes
        const filteredData = data.filter((qz) => {
          const qzClassNum = String(qz.subject?.classGrade?.number || '');
          return !qzClassNum || qzClassNum === studentClassNum;
        });

        setQuizzes(filteredData);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [user]);

  // Group & Flag Quizzes: 1 Quiz per Subject per Chapter is Free, index > 0 requires PRO Student
  const chapterQuizTracker: Record<string, number> = {};
  const processedQuizzes = quizzes.map((qz) => {
    const chapterKey = `${qz.subjectId || qz.subject?.id || 'gen'}_${qz.chapterId || qz.chapter?.id || 'gen'}`;
    const count = (chapterQuizTracker[chapterKey] || 0) + 1;
    chapterQuizTracker[chapterKey] = count;

    const isLocked = !isProStudent && count > 1;

    return {
      ...qz,
      chapterQuizNumber: count,
      isLocked,
    };
  });

  // Starter students see ONLY free quizzes, while PRO students see ALL quizzes
  const freeQuizzes = processedQuizzes.filter((qz) => qz.chapterQuizNumber === 1);
  const proQuizzesCount = Math.max(0, processedQuizzes.length - freeQuizzes.length);
  const displayQuizzes = isProStudent ? processedQuizzes : freeQuizzes;

  const handleQuizClick = (qz: any, e: React.MouseEvent) => {
    if (qz.isLocked) {
      e.preventDefault();
      setLockedQuizTitle(qz.title);
      setShowProModal(true);
    }
  };

  return (
    <DashboardLayout role="STUDENT">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 font-display">Interactive Chapter Quizzes</h1>
            <p className="text-xs text-slate-500">Take timed tests and level up your mastery with instant XP rewards.</p>
          </div>

          {!isProStudent && (
            <Link
              href="/pricing"
              className="px-4 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold text-xs rounded-xl shadow-md transition flex items-center gap-2 shrink-0 hover:scale-105 transform"
            >
              <Crown className="w-4 h-4 fill-slate-950 text-slate-950" />
              <span>Upgrade to PRO for More Quizzes 👑</span>
            </Link>
          )}
        </div>

        {/* Free Starter Plan vs PRO Banner */}
        {!isProStudent && (
          <div className="p-4 bg-gradient-to-r from-amber-500/10 via-amber-50 to-sky-50 border border-amber-300/80 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs shadow-xs">
            <div className="flex items-center gap-3 text-slate-900 font-bold">
              <div className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shrink-0">
                <Lock className="w-4 h-4 text-slate-950" />
              </div>
              <div>
                <p className="font-extrabold text-slate-900">
                  Starter Plan: Showing {freeQuizzes.length} Free Practice Quizzes
                </p>
                <p className="text-slate-600 font-normal">
                  There are <strong>{proQuizzesCount} additional PRO quizzes</strong> available in the PRO Version for your class!
                </p>
              </div>
            </div>
            <Link
              href="/pricing"
              className="px-3.5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-xs transition shrink-0 self-start sm:self-auto flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
              <span>Unlock {proQuizzesCount} PRO Quizzes 👑</span>
            </Link>
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-52 bg-slate-100 rounded-3xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayQuizzes.map((qz) => (
              <div
                key={qz.id}
                className={`bg-white rounded-3xl border p-6 transition flex flex-col justify-between space-y-4 ${
                  qz.isLocked ? 'border-slate-200 bg-slate-50/60 opacity-90' : 'border-slate-200 hover:shadow-md'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-md bg-sky-50 text-sky-700 text-xs font-bold">
                      {qz.subject?.name || 'Science'}
                    </span>

                    {qz.isLocked ? (
                      <span className="flex items-center gap-1 font-extrabold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md text-[11px] border border-amber-200">
                        <Lock className="w-3 h-3 text-amber-600" /> PRO Only
                      </span>
                    ) : (
                      <span className="text-[11px] font-extrabold text-amber-600 flex items-center gap-1">
                        <Zap className="w-3 h-3 fill-amber-500" /> +50 XP
                      </span>
                    )}
                  </div>

                  <h3 className="text-sm font-bold text-slate-900">{qz.title}</h3>
                  <p className="text-xs text-slate-500 line-clamp-2">{qz.description}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">{qz.durationMinutes}m • {qz.totalMarks} Marks</span>

                  {qz.isLocked ? (
                    <button
                      onClick={(e) => handleQuizClick(qz, e)}
                      className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-xl transition flex items-center gap-1 shadow-xs"
                    >
                      <Lock className="w-3.5 h-3.5 text-slate-950" />
                      <span>Unlock PRO</span>
                    </button>
                  ) : (
                    <Link
                      href={`/quizzes/${qz.id}`}
                      className="px-3.5 py-1.5 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl transition flex items-center gap-1 shadow-xs"
                    >
                      <span>Start Test</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

            {/* PRO Quizzes Showcase Card for Starter Students */}
            {!isProStudent && proQuizzesCount > 0 && (
              <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-brand-950 text-white rounded-3xl p-8 shadow-xl border border-amber-500/30 text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 font-extrabold text-xs border border-amber-500/30">
                  <Crown className="w-4 h-4 fill-amber-300" />
                  <span>{proQuizzesCount} Additional PRO Quizzes Locked</span>
                </div>
                <h3 className="text-2xl font-extrabold font-display">
                  Upgrade to PRO Version to Unlock {proQuizzesCount} More Quizzes!
                </h3>
                <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
                  You are currently viewing <strong>{freeQuizzes.length} Free Practice Quizzes</strong> for your class. Upgrade to <strong>PRO Student</strong> to instantly unlock all <strong>{proQuizzesCount} HOTS, Rapid-Fire Speed Tests & Olympiad Challenge Quizzes</strong>!
                </p>
                <div className="pt-2">
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold text-sm rounded-2xl shadow-lg transition transform hover:scale-105"
                  >
                    <Sparkles className="w-4 h-4 fill-slate-950" />
                    <span>Unlock {proQuizzesCount} PRO Quizzes 👑</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}

        {/* PRO Upgrade Modal */}
        {showProModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100 space-y-6 text-center animate-in fade-in zoom-in-95">
              <div className="w-14 h-14 bg-gradient-to-tr from-amber-500 to-amber-300 text-slate-950 rounded-3xl mx-auto flex items-center justify-center shadow-lg shadow-amber-500/30">
                <Crown className="w-7 h-7 fill-slate-950" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-slate-900 font-display">Unlock PRO Student Access</h3>
                <p className="text-xs text-indigo-600 font-bold">{lockedQuizTitle}</p>
                <p className="text-xs text-slate-500 leading-relaxed pt-1">
                  Free accounts include <strong>1 free practice quiz per chapter</strong>. Upgrade to <strong>PRO Student</strong> to unlock all chapter quizzes, step-by-step Bloom solutions, and rank badges!
                </p>
              </div>

              <div className="bg-amber-50/80 p-4 rounded-2xl border border-amber-200/80 text-left space-y-2 text-xs">
                <div className="flex items-center gap-2 font-bold text-amber-900">
                  <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>PRO Student Subscription Plan (₹299/mo)</span>
                </div>
                <ul className="space-y-1.5 text-[11px] text-amber-950 font-semibold">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-600" /> Unlimited Chapter Quizzes & Practice Tests
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-600" /> Complete CBSE + NEP 2020 Solution Rubrics
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-600" /> Real-time XP Boosts & Leaderboard Badges
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-end gap-2.5 pt-2">
                <button
                  onClick={() => setShowProModal(false)}
                  className="w-full sm:w-1/3 py-2.5 text-slate-600 font-bold text-xs hover:bg-slate-100 rounded-xl"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setShowProModal(false);
                    setShowCheckoutModal(true);
                  }}
                  className="w-full sm:w-2/3 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-md transition flex items-center justify-center gap-1.5"
                >
                  <Crown className="w-4 h-4 fill-slate-950 shrink-0" />
                  <span>Pay & Upgrade to PRO</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Render Payment Checkout Modal */}
        {showCheckoutModal && (
          <PaymentModal
            isOpen={showCheckoutModal}
            onClose={() => setShowCheckoutModal(false)}
            planId="PRO_STUDENT"
            planName="Pro Student Pass"
            price={249}
            billingCycle="ANNUAL"
            onSuccess={() => {
              setShowCheckoutModal(false);
            }}
          />
        )}
      </div>
    </DashboardLayout>
  );
}
