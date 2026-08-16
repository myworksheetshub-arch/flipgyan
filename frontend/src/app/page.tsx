'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';
import { useAuth } from '@/lib/auth-context';
import {
  Zap,
  BookOpen,
  FileSpreadsheet,
  HelpCircle,
  FileText,
  Search,
  CheckCircle2,
  Sparkles,
  Award,
  ArrowRight,
  TrendingUp,
  Flame,
  Brain,
  ShieldCheck,
  Star,
  Users,
  ChevronRight,
  Lightbulb,
} from 'lucide-react';

export default function HomePage() {
  const router = useRouter();
  const { user } = useAuth();
  const [classes, setClasses] = useState<any[]>([]);
  const [notes, setNotes] = useState<any[]>([]);
  const [worksheets, setWorksheets] = useState<any[]>([]);
  const [quizzes, setQuizzes] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadHomeData() {
      try {
        const [cls, nts, ws, qz] = await Promise.all([
          api.getClasses().catch(() => []),
          api.getStudyNotes().catch(() => []),
          api.getWorksheets().catch(() => []),
          api.getQuizzes().catch(() => []),
        ]);
        setClasses(cls);
        setNotes(nts);
        setWorksheets(ws);
        setQuizzes(qz);
      } finally {
        setLoading(false);
      }
    }
    loadHomeData();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 pb-16 overflow-hidden bg-radial from-brand-50/70 via-white to-slate-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 fill-brand-500 text-brand-500" />
            <span>CBSE Curriculum 2026-27 Aligned • Classes 5 to 10</span>
          </div>

          {/* Headlines */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight font-display leading-[1.08]">
              Learn Smarter. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-sky-500 to-indigo-600">
                Practice Better.
              </span>{' '}
              Achieve More.
            </h1>
            <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Interactive study notes, visual mind maps, practice worksheets, quizzes, and board question papers designed for effective learning.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            <Link
              href={user ? '/student/dashboard' : '/study-notes'}
              className="px-6 sm:px-8 py-3.5 bg-brand-600 hover:bg-brand-700 text-white text-sm sm:text-base font-extrabold rounded-2xl shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Start Learning</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
            <Link
              href="/worksheets"
              className="px-6 sm:px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-800 text-sm sm:text-base font-bold rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all flex items-center gap-2"
            >
              <FileSpreadsheet className="w-4 h-4 text-brand-600" />
              <span>Explore Worksheets</span>
            </Link>
            <Link
              href="/quizzes"
              className="px-6 sm:px-8 py-3.5 bg-sky-50 hover:bg-sky-100 text-sky-800 text-sm sm:text-base font-bold rounded-2xl border border-sky-200 transition-all flex items-center gap-2"
            >
              <HelpCircle className="w-4 h-4 text-sky-600" />
              <span>Take a Quiz</span>
            </Link>
          </div>

          {/* Hero Global Search Box */}
          <div className="max-w-2xl mx-auto pt-4">
            <form onSubmit={handleSearch} className="relative shadow-xl shadow-slate-200/50 rounded-2xl bg-white p-2 border border-slate-200 flex items-center">
              <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
              <input
                type="text"
                placeholder="Search real numbers, chemical reactions, algebra, grammar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 text-sm text-slate-800 outline-none bg-transparent"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold rounded-xl shrink-0 transition"
              >
                Search
              </button>
            </form>
          </div>

          {/* Quick Learning Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-slate-200/80">
            <div className="p-3">
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">10,000+</p>
              <p className="text-xs text-slate-500 font-medium">Curated CBSE Questions</p>
            </div>
            <div className="p-3">
              <p className="text-2xl sm:text-3xl font-extrabold text-brand-600 font-display">500+</p>
              <p className="text-xs text-slate-500 font-medium">Visual Mind Maps</p>
            </div>
            <div className="p-3">
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">100%</p>
              <p className="text-xs text-slate-500 font-medium">NCERT Aligned</p>
            </div>
            <div className="p-3">
              <p className="text-2xl sm:text-3xl font-extrabold text-amber-600 font-display">4.9/5</p>
              <p className="text-xs text-slate-500 font-medium">Teacher & Student Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CLASSES CATALOG */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-extrabold text-brand-600 uppercase tracking-wider">Targeted Learning</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">Select Your Class</h2>
          </div>
          <Link href="/classes" className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1">
            View All Classes <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {classes.map((cls) => (
            <Link
              key={cls.id}
              href={`/classes/${cls.id}`}
              className="group bg-white p-5 rounded-2xl border border-slate-200 hover:border-brand-500 hover:shadow-md transition-all text-center space-y-2"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-50 group-hover:bg-brand-600 group-hover:text-white text-brand-600 flex items-center justify-center mx-auto text-lg font-black transition-colors font-display">
                {cls.number}
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-brand-600 transition-colors">{cls.name}</h3>
              <p className="text-[11px] text-slate-500">{cls._count?.subjects || 4} Subjects</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. LATEST STUDY NOTES & MIND MAPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-extrabold text-indigo-600 uppercase tracking-wider">Concept Clarity</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">Study Notes & Visual Mind Maps</h2>
          </div>
          <Link href="/study-notes" className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1">
            Browse All Notes <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.slice(0, 3).map((note) => (
            <div
              key={note.id}
              className="bg-white rounded-3xl border border-slate-200 p-6 hover:shadow-lg transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 font-bold">
                    {note.chapter?.subject?.classGrade?.name || 'Class 10'} • {note.chapter?.subject?.name || 'Math'}
                  </span>
                  <span className="flex items-center gap-1 text-amber-600 font-semibold text-[11px]">
                    <Sparkles className="w-3.5 h-3.5" /> Mind Map Included
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors font-display line-clamp-2">
                  {note.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">{note.summary}</p>
              </div>

              <Link
                href={`/study-notes/${note.id}`}
                className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-bold text-brand-600 hover:text-brand-700"
              >
                <span>Read Note & Open Mind Map</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PRACTICE WORKSHEETS & QUIZZES */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-extrabold text-brand-400 uppercase tracking-wider">Practice Engine</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display">Worksheets & Interactive Quizzes</h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Solve chapter-wise worksheets online, download printable PDF test papers, and compete in timed quizzes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Worksheets Card */}
            <div className="bg-slate-800/80 rounded-3xl p-6 sm:p-8 border border-slate-700 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-brand-500/20 text-brand-400 flex items-center justify-center">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">CBSE Practice Worksheets</h3>
                    <p className="text-xs text-slate-400">Step-by-step solutions & printable layout</p>
                  </div>
                </div>
                <Link href="/worksheets" className="text-xs font-bold text-brand-400 hover:text-brand-300">
                  View All
                </Link>
              </div>

              <div className="space-y-3">
                {worksheets.slice(0, 3).map((ws) => (
                  <Link
                    key={ws.id}
                    href={`/worksheets/${ws.id}`}
                    className="block bg-slate-900/60 hover:bg-slate-900 p-4 rounded-2xl border border-slate-700/60 transition group"
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-brand-400">{ws.subject?.name}</span>
                      <span className="text-slate-500">{ws.durationMinutes} Mins • {ws.totalMarks} Marks</span>
                    </div>
                    <h4 className="text-sm font-semibold text-slate-200 group-hover:text-white transition">
                      {ws.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quizzes Card */}
            <div className="bg-slate-800/80 rounded-3xl p-6 sm:p-8 border border-slate-700 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">Gamified Chapter Quizzes</h3>
                    <p className="text-xs text-slate-400">Instant XP, accuracy breakdown & badges</p>
                  </div>
                </div>
                <Link href="/quizzes" className="text-xs font-bold text-sky-400 hover:text-sky-300">
                  View All
                </Link>
              </div>

              <div className="space-y-3">
                {quizzes.slice(0, 3).map((qz) => (
                  <Link
                    key={qz.id}
                    href={`/quizzes/${qz.id}`}
                    className="block bg-slate-900/60 hover:bg-slate-900 p-4 rounded-2xl border border-slate-700/60 transition group"
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-sky-400">{qz.subject?.name}</span>
                      <span className="text-amber-400 font-bold flex items-center gap-1">
                        <Zap className="w-3 h-3 fill-amber-400" /> +50 XP
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-slate-200 group-hover:text-white transition">
                      {qz.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. QUESTION PAPER GENERATOR SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-800 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <span className="px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold border border-brand-500/30">
              For Teachers & Students
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display">
              Official CBSE Question Paper Generator
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Generate standardized pre-board examination papers with custom blueprints, Bloom taxonomy distributions, marking schemes, and 1-click printable PDF exports.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/question-papers"
                className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition"
              >
                View Model Question Papers
              </Link>
              <Link
                href="/teacher/question-papers"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm rounded-xl border border-white/20 transition"
              >
                Generate New Exam Paper
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-96 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-3 text-xs">
            <div className="flex items-center gap-2 text-brand-300 font-bold pb-2 border-b border-white/10">
              <ShieldCheck className="w-4 h-4" />
              <span>CBSE Pattern Blueprint Features</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/5">
              <span className="text-slate-400">Section A:</span>
              <span className="font-semibold text-slate-200">20 MCQs (1 Mark each)</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/5">
              <span className="text-slate-400">Section B:</span>
              <span className="font-semibold text-slate-200">5 Short Answer (2 Marks each)</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/5">
              <span className="text-slate-400">Section C:</span>
              <span className="font-semibold text-slate-200">6 Short Answer (3 Marks each)</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-400">Section D & E:</span>
              <span className="font-semibold text-slate-200">Long & Case-Based Questions</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-extrabold text-amber-600 uppercase tracking-wider">Loved by Learners</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">What Teachers & Students Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
              "The visual mind maps for Class 10 Science and Real Numbers made revision 10x faster before my pre-board exams!"
            </p>
            <div className="flex items-center gap-3 pt-2">
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100"
                alt="Aarav"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="text-xs font-bold text-slate-900">Aarav Kumar</h4>
                <p className="text-[11px] text-slate-500">Class 10 CBSE Student</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
              "Generating customized question papers according to the CBSE 2026 blueprint with answer keys takes less than 30 seconds."
            </p>
            <div className="flex items-center gap-3 pt-2">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100"
                alt="Priya"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="text-xs font-bold text-slate-900">Priya Sharma</h4>
                <p className="text-[11px] text-slate-500">Senior Science Teacher, DPS</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
              "The parent dashboard gives me complete peace of mind knowing exactly which topics my son has mastered and where he needs help."
            </p>
            <div className="flex items-center gap-3 pt-2">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
                alt="Anand"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="text-xs font-bold text-slate-900">Anand Kumar</h4>
                <p className="text-[11px] text-slate-500">Parent</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PRICING PREVIEW CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold text-slate-900 font-display">
            Start Excelling in Your Studies Today
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Join thousands of CBSE students, teachers, and parents accelerating their academic achievements with FlipGyan.
          </p>
          <div className="pt-2">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-sm rounded-2xl shadow-lg shadow-brand-500/25 transition"
            >
              <span>Create Free Account</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
