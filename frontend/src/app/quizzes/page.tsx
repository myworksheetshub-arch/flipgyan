'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { api } from '@/lib/api';
import { Quiz, Subject, Chapter } from '@/types';
import {
  HelpCircle,
  Clock,
  Zap,
  Search,
  ArrowRight,
  Sparkles,
  Filter,
  BookOpen,
  UserCheck,
  Lock,
  Crown,
  ShieldCheck,
  X,
  CheckCircle,
} from 'lucide-react';

import { PaymentModal } from '@/components/payment/PaymentModal';

export default function QuizzesListPage() {
  const { user, refreshUser, isPro } = useAuth();
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [classes, setClasses] = useState<any[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);

  const [selectedClass, setSelectedClass] = useState<string>('');
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [selectedChapter, setSelectedChapter] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [showProModal, setShowProModal] = useState<boolean>(false);
  const [lockedQuizTitle, setLockedQuizTitle] = useState<string>('');
  const [showCheckoutModal, setShowCheckoutModal] = useState<boolean>(false);

  const isStudent = user?.role === 'STUDENT' || (user as any)?.role === 'PRO_STUDENT';
  const isProStudent = isPro || user?.role === 'TEACHER' || user?.role === 'ADMIN' || (user as any)?.role === 'PRO_STUDENT' || (user as any)?.subscriptionTier === 'PRO_STUDENT';

  // Helper to extract exact enrolled class number
  const getStudentClassNumber = (userObj: any, classesList?: any[]): string => {
    if (!userObj) return '10';
    const cg = userObj.classGrade;
    if (cg && typeof cg === 'object' && typeof cg.number === 'number') {
      return String(cg.number);
    }
    if (cg && typeof cg === 'object' && typeof cg.name === 'string') {
      const match = cg.name.match(/\d+/);
      if (match) return match[0];
    }
    if (typeof cg === 'string') {
      const match = cg.match(/\d+/);
      if (match) return match[0];
    }
    if (userObj.classGradeId && classesList && Array.isArray(classesList)) {
      const matched = classesList.find(
        (c) => c.id === userObj.classGradeId || String(c.number) === String(userObj.classGradeId)
      );
      if (matched && matched.number) return String(matched.number);
    }
    return '10';
  };

  // Automatically lock students strictly to their enrolled class
  useEffect(() => {
    if (user && isStudent) {
      const studentClassNum = getStudentClassNumber(user, classes);
      setSelectedClass(studentClassNum);
    }
  }, [user, isStudent, classes]);

  // Initial load of classes
  useEffect(() => {
    async function loadClasses() {
      try {
        const clsData = await api.getClasses();
        setClasses(clsData);
      } catch (err) {
        console.error('Failed to load classes:', err);
      }
    }
    loadClasses();
  }, []);

  // When selectedClass changes, reload subjects
  useEffect(() => {
    async function loadSubjects() {
      try {
        const subData = await api.getSubjects(selectedClass || undefined);
        setSubjects(subData);
        setSelectedSubject('');
        setSelectedChapter('');
      } catch (err) {
        console.error('Failed to load subjects:', err);
      }
    }
    loadSubjects();
  }, [selectedClass]);

  // When selectedSubject changes, reload chapters
  useEffect(() => {
    async function loadChapters() {
      if (!selectedSubject) {
        setChapters([]);
        setSelectedChapter('');
        return;
      }
      try {
        const chData = await api.getChapters(selectedSubject);
        setChapters(chData);
        setSelectedChapter('');
      } catch (err) {
        console.error('Failed to load chapters:', err);
      }
    }
    loadChapters();
  }, [selectedSubject]);

  // Load Quizzes filtered by Class, Subject, Chapter, and Search
  useEffect(() => {
    async function loadQuizzes() {
      setLoading(true);
      try {
        let qzData = await api.getQuizzes({
          classId: selectedClass || undefined,
          subjectId: selectedSubject || undefined,
          chapterId: selectedChapter || undefined,
          search: search || undefined,
        });

        // Strictly enforce student's enrolled class filter
        if (isStudent && selectedClass) {
          qzData = qzData.filter((qz) => {
            const qzClassNum = String(qz.subject?.classGrade?.number || '');
            return !qzClassNum || qzClassNum === selectedClass;
          });
        }

        setQuizzes(qzData);
      } catch (err) {
        console.error('Failed to load quizzes:', err);
      } finally {
        setLoading(false);
      }
    }
    loadQuizzes();
  }, [selectedClass, selectedSubject, selectedChapter, search, isStudent]);

  const handleResetFilters = () => {
    if (!isStudent) {
      setSelectedClass('');
    }
    setSelectedSubject('');
    setSelectedChapter('');
    setSearch('');
  };

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Interactive Gamified Tests</span>
          </div>
          {isProStudent ? (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-extrabold shadow-xs">
              <Crown className="w-3.5 h-3.5 fill-slate-950" /> PRO Student Pass Unlocked
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-200">
              <Sparkles className="w-3 h-3 text-amber-600" /> Starter Plan ({freeQuizzes.length} Free Quizzes Unlocked)
            </span>
          )}
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 font-display">Chapter Quizzes & Rapid Fire</h1>
        <p className="text-xs sm:text-sm text-slate-500">
          {isStudent
            ? `Displaying practice quizzes for your enrolled class (Class ${selectedClass || '10'}).`
            : 'Filter by Class Standard, Subject, and Chapter to take targeted practice tests with instant Bloom taxonomy analytics and XP rewards.'}
        </p>
      </div>

      {/* Starter Student PRO Quizzes Counter Banner */}
      {!isProStudent && (
        <div className="p-5 bg-gradient-to-r from-amber-500/10 via-amber-50 to-sky-50 border border-amber-300/80 rounded-3xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs shadow-sm">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shrink-0 mt-0.5 shadow-xs">
              <Crown className="w-5 h-5 fill-slate-950 text-slate-950" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-200 text-amber-950 text-[11px] font-extrabold">
                  {freeQuizzes.length} Free Quizzes
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-900 text-amber-400 text-[11px] font-extrabold">
                  👑 {proQuizzesCount} Extra PRO Quizzes
                </span>
              </div>
              <p className="font-extrabold text-slate-900 text-sm">
                Starter Plan: Showing {freeQuizzes.length} Free Quizzes for Class {selectedClass || '10'}
              </p>
              <p className="text-slate-600 leading-relaxed">
                There are <strong>{proQuizzesCount} additional PRO quizzes</strong> (HOTS, Rapid-Fire & Olympiad Challenge) available in the PRO Version for Class {selectedClass || '10'}!
              </p>
            </div>
          </div>
          <Link
            href="/pricing"
            className="px-5 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold text-xs rounded-2xl shadow-md transition flex items-center gap-2 shrink-0 self-start sm:self-auto hover:scale-105 transform"
          >
            <Sparkles className="w-4 h-4 fill-slate-950" />
            <span>Unlock {proQuizzesCount} PRO Quizzes 👑</span>
          </Link>
        </div>
      )}

      {/* Student Class Badge Banner */}
      {isStudent && (
        <div className="p-4 bg-sky-50/90 border border-sky-200 rounded-2xl flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-sky-900 font-bold">
            <UserCheck className="w-4 h-4 text-sky-600 shrink-0" />
            <span>
              Quizzes automatically locked to <strong>Class {selectedClass || '10'}</strong> (Your Enrolled Class)
            </span>
          </div>
          <span className="px-3 py-1 bg-sky-600 text-white rounded-xl text-[11px] font-extrabold shadow-xs">
            Student Account
          </span>
        </div>
      )}

      {/* Filter Bar */}
      <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs space-y-4">
        <div className="flex items-center justify-between text-xs font-bold text-slate-800 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-brand-600" />
            <span>Filter Quizzes by Subject & Chapter</span>
          </div>

          {(selectedSubject || selectedChapter || search) && (
            <button
              onClick={handleResetFilters}
              className="text-xs font-bold text-brand-600 hover:text-brand-700 underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          {/* Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search quiz titles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-brand-500"
            />
          </div>

          {/* Class Selector: Disabled for Students, Editable for Teachers & Admins */}
          {isStudent ? (
            <div className="p-2 bg-slate-100 border border-slate-200 rounded-xl font-bold text-slate-700 flex items-center justify-between cursor-not-allowed opacity-90">
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-[10px] text-slate-400 uppercase font-extrabold">Class:</span>
                <span className="text-brand-700 font-extrabold">Class {selectedClass || '7'}</span>
              </div>
              <Lock className="w-3.5 h-3.5 text-slate-400" />
            </div>
          ) : (
            <div>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl outline-none font-semibold text-slate-700 focus:bg-white focus:border-brand-500"
              >
                <option value="">All Classes (Class 5 - 10)</option>
                {classes.map((c) => (
                  <option key={c.id} value={c.number}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Subject Selector */}
          <div>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl outline-none font-semibold text-slate-700 focus:bg-white focus:border-brand-500"
            >
              <option value="">All Subjects</option>
              {Array.from(new Map(subjects.map((s) => [s.name, s])).values()).map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          {/* Chapter Selector */}
          <div>
            <select
              value={selectedChapter}
              onChange={(e) => setSelectedChapter(e.target.value)}
              disabled={!selectedSubject && chapters.length === 0}
              className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl outline-none font-semibold text-slate-700 focus:bg-white focus:border-brand-500 disabled:opacity-50"
            >
              <option value="">
                {!selectedSubject ? 'Select a Subject first' : 'All Chapters'}
              </option>
              {chapters.map((ch) => (
                <option key={ch.id} value={ch.id}>
                  Ch {ch.chapterNumber}: {ch.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Grid of Quizzes */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-60 bg-slate-100 rounded-3xl animate-pulse" />
          ))}
        </div>
      ) : displayQuizzes.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
          <HelpCircle className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">No free quizzes found for Class {selectedClass || '10'}</h3>
          <p className="text-xs text-slate-500">Try choosing a different subject or chapter filter.</p>
          <button
            onClick={handleResetFilters}
            className="px-4 py-2 bg-brand-600 text-white font-bold text-xs rounded-xl shadow-xs"
          >
            Clear Subject Filters
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayQuizzes.map((qz) => (
              <div
                key={qz.id}
                className={`bg-white rounded-3xl border p-6 transition-all flex flex-col justify-between space-y-4 group relative ${
                  qz.isLocked
                    ? 'border-slate-200 bg-slate-50/60 opacity-90'
                    : 'border-slate-200 hover:shadow-lg hover:border-brand-300'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-1 rounded-lg bg-sky-50 text-sky-700 font-bold">
                      {qz.subject?.classGrade?.name || 'Class 10'} • {qz.subject?.name || 'Math'}
                    </span>

                    {qz.isLocked ? (
                      <span className="flex items-center gap-1 font-extrabold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md text-[11px] border border-amber-200">
                        <Lock className="w-3 h-3 text-amber-600" /> PRO Only (Quiz #{qz.chapterQuizNumber})
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md text-[11px] border border-emerald-100">
                        <CheckCircle className="w-3 h-3 text-emerald-600" /> Free Quiz #{qz.chapterQuizNumber}
                      </span>
                    )}
                  </div>

                {qz.chapter && (
                  <div className="flex items-center gap-1.5 text-xs text-indigo-600 font-bold">
                    <BookOpen className="w-3.5 h-3.5 shrink-0" />
                    <span className="line-clamp-1">Ch {qz.chapter.chapterNumber}: {qz.chapter.title}</span>
                  </div>
                )}

                <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors font-display line-clamp-2">
                  {qz.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{qz.description}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3 text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {qz.durationMinutes}m
                  </span>
                  <span className="font-bold text-slate-700">{qz.totalMarks} Marks</span>
                </div>

                {qz.isLocked ? (
                  <button
                    onClick={(e) => handleQuizClick(qz, e)}
                    className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold rounded-xl transition flex items-center gap-1.5 shadow-xs"
                  >
                    <Lock className="w-3.5 h-3.5 text-slate-950" />
                    <span>Unlock PRO</span>
                  </button>
                ) : (
                  <Link
                    href={`/quizzes/${qz.id}`}
                    className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl transition flex items-center gap-1.5 shadow-xs shadow-brand-500/20"
                  >
                    <span>Start Quiz</span>
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
              You are currently viewing <strong>{freeQuizzes.length} Free Practice Quizzes</strong> for Class {selectedClass || '10'}. Upgrade to <strong>PRO Student</strong> to instantly unlock all <strong>{proQuizzesCount} HOTS, Rapid-Fire Speed Tests & Olympiad Challenge Quizzes</strong>!
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
  );
}
