'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { api } from '@/lib/api';
import { Worksheet } from '@/types';
import { FileSpreadsheet, Search, Clock, Award, Printer, ArrowRight, UserCheck, Crown, Sparkles, Lock, BookOpen } from 'lucide-react';

export default function WorksheetsListPage() {
  const { user, isPro } = useAuth();
  const [worksheets, setWorksheets] = useState<Worksheet[]>([]);
  const [classes, setClasses] = useState<any[]>([]);
  const [subjects, setSubjects] = useState<any[]>([]);
  const [selectedClass, setSelectedClass] = useState<string>('');
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const isStudent = user?.role === 'STUDENT' || (user as any)?.role === 'PRO_STUDENT';
  const isProStudent = isPro || user?.role === 'TEACHER' || user?.role === 'ADMIN' || (user as any)?.role === 'PRO_STUDENT' || (user as any)?.subscriptionTier === 'PRO_STUDENT';

  // Automatically filter to student's enrolled class
  useEffect(() => {
    if (user && isStudent) {
      let studentClassNum = '7';
      const cg = (user as any).classGrade;
      const uClass = (user as any).class;
      if (cg && typeof cg === 'object' && cg.number) {
        studentClassNum = String(cg.number);
      } else if (uClass && typeof uClass === 'object' && typeof uClass.classNo === 'number') {
        studentClassNum = String(uClass.classNo);
      } else if (cg && typeof cg === 'object' && cg.name) {
        const match = cg.name.match(/\d+/);
        if (match) studentClassNum = match[0];
      } else if (typeof cg === 'string') {
        const match = cg.match(/\d+/);
        if (match) studentClassNum = match[0];
      }
      setSelectedClass(studentClassNum);
    }
  }, [user, isStudent]);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const [wsData, clsData, subData] = await Promise.all([
          api.getWorksheets({
            classId: selectedClass || undefined,
            type: selectedType || undefined,
            search: search || undefined,
          }),
          api.getClasses().catch(() => []),
          api.getSubjects(selectedClass || undefined).catch(() => []),
        ]);
        setWorksheets(wsData);
        setClasses(clsData);
        setSubjects(subData);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [selectedClass, selectedType, search]);

  // Deduplicate subjects by name so each subject appears EXACTLY ONCE
  const uniqueSubjects = Array.from(
    new Map(
      (subjects.length > 0 ? subjects : worksheets.map((w) => w.subject).filter(Boolean))
        .filter((s) => s && s.name)
        .map((s) => [s.name.trim().toLowerCase(), s.name.trim()])
    ).values()
  );

  // Apply Subject and Strict Class filter client-side
  const filteredWorksheets = worksheets.filter((ws) => {
    if (isStudent && selectedClass) {
      const wsClassNum = String(ws.subject?.classGrade?.number || '');
      if (wsClassNum !== selectedClass) return false;
    }
    if (selectedSubject) {
      const matchId = ws.subjectId === selectedSubject || ws.subject?.id === selectedSubject;
      const matchName = ws.subject?.name?.toLowerCase() === selectedSubject.toLowerCase();
      if (!matchId && !matchName) return false;
    }
    return true;
  });

  // Sort worksheets so Chapter 1 comes first for each subject
  const sortedWorksheets = [...filteredWorksheets].sort((a, b) => {
    const aIsCh1 = a.title?.toLowerCase().includes('chapter 1') || a.chapter?.title?.toLowerCase().includes('chapter 1') || a.chapter?.chapterNumber === 1 || (a.chapter as any)?.chapterNo === 1;
    const bIsCh1 = b.title?.toLowerCase().includes('chapter 1') || b.chapter?.title?.toLowerCase().includes('chapter 1') || b.chapter?.chapterNumber === 1 || (b.chapter as any)?.chapterNo === 1;
    if (aIsCh1 && !bIsCh1) return -1;
    if (!aIsCh1 && bIsCh1) return 1;
    return 0;
  });

  // Starter students get 1 free Chapter 1 worksheet from each subject, while PRO students see all
  const freeWorksheets: Worksheet[] = [];
  const seenSubjects = new Set<string>();
  for (const ws of sortedWorksheets) {
    const subjectKey = ws.subjectId || ws.subject?.id || ws.subject?.name || 'gen';
    if (!seenSubjects.has(subjectKey)) {
      seenSubjects.add(subjectKey);
      freeWorksheets.push(ws);
    }
  }

  const displayWorksheets = isProStudent ? filteredWorksheets : freeWorksheets;
  const proWorksheetsCount = Math.max(0, filteredWorksheets.length - freeWorksheets.length);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>Practice & Revision</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 font-display">CBSE Practice Worksheets</h1>
          <p className="text-xs sm:text-sm text-slate-500">
            {isStudent
              ? `Displaying worksheets specifically for Class ${selectedClass || '10'}.`
              : 'Interactive printable chapter-wise worksheets with step-by-step solutions and model marking schemes.'}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search worksheets..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 text-xs bg-white border border-slate-200 rounded-xl outline-none focus:border-brand-500 transition"
            />
          </div>

          {!isStudent ? (
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="px-3 py-2 text-xs bg-white border border-slate-200 rounded-xl outline-none font-semibold text-slate-700 focus:border-brand-500"
            >
              <option value="">All Classes</option>
              {classes.map((c) => (
                <option key={c.id} value={c.number}>
                  {c.name}
                </option>
              ))}
            </select>
          ) : (
            <div className="px-3 py-2 text-xs bg-emerald-50 border border-emerald-200 rounded-xl font-bold text-emerald-800 flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Class {selectedClass || '10'} (Enrolled)</span>
            </div>
          )}

          {/* Subject Filter Dropdown */}
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="px-3 py-2 text-xs bg-white border border-slate-200 rounded-xl outline-none font-bold text-slate-800 focus:border-brand-500"
          >
            <option value="">All Subjects</option>
            {uniqueSubjects.map((subName) => (
              <option key={subName} value={subName}>
                {subName}
              </option>
            ))}
          </select>

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-3 py-2 text-xs bg-white border border-slate-200 rounded-xl outline-none font-semibold text-slate-700 focus:border-brand-500"
          >
            <option value="">All Types</option>
            <option value="PRACTICE">Practice</option>
            <option value="COMPETENCY">Competency</option>
            <option value="HOTS">HOTS / Case Study</option>
            <option value="REVISION">Revision</option>
            <option value="ASSESSMENT">Assessment</option>
          </select>
        </div>
      </div>

      {/* Starter Student PRO Worksheets Banner */}
      {!isProStudent && (
        <div className="p-5 bg-gradient-to-r from-emerald-500/10 via-emerald-50 to-sky-50 border border-emerald-300/80 rounded-3xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs shadow-xs">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0 mt-0.5 shadow-xs">
              <FileSpreadsheet className="w-5 h-5 text-white" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-200 text-emerald-950 text-[11px] font-extrabold">
                  {freeWorksheets.length} Free Worksheets (1 Per Subject)
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-900 text-amber-400 text-[11px] font-extrabold">
                  👑 {proWorksheetsCount} Extra PRO Worksheets
                </span>
              </div>
              <p className="font-extrabold text-slate-900 text-sm">
                Starter Plan: Showing {freeWorksheets.length} Free Practice Worksheets (1 From Each Subject)
              </p>
              <p className="text-slate-600 leading-relaxed">
                There are <strong>{proWorksheetsCount} additional PRO worksheets</strong> (Competency, HOTS & Revision) with complete model answers available in PRO Version!
              </p>
            </div>
          </div>
          <Link
            href="/pricing"
            className="px-5 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-extrabold text-xs rounded-2xl shadow-md transition flex items-center gap-2 shrink-0 self-start sm:self-auto hover:scale-105 transform"
          >
            <Crown className="w-4 h-4 fill-amber-300 text-amber-300" />
            <span>Unlock {proWorksheetsCount} PRO Worksheets 👑</span>
          </Link>
        </div>
      )}

      {/* Grid of Worksheets */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-60 bg-slate-100 rounded-3xl animate-pulse" />
          ))}
        </div>
      ) : displayWorksheets.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
          <FileSpreadsheet className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">No worksheets found</h3>
          <p className="text-xs text-slate-500">Try adjusting your subject, type or search keywords.</p>
          <button
            onClick={() => { setSelectedSubject(''); setSelectedType(''); setSearch(''); }}
            className="px-4 py-2 bg-emerald-50 text-emerald-700 font-bold text-xs rounded-xl hover:bg-emerald-100 transition"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayWorksheets.map((ws) => (
              <div
                key={ws.id}
                className="bg-white rounded-3xl border border-slate-200 p-6 hover:shadow-lg transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-bold">
                      {ws.subject?.classGrade?.name || 'Class 10'} • {ws.subject?.name || 'Science'}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-semibold text-[11px] uppercase">
                      {ws.type}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition">
                    {ws.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {ws.description || 'Chapter revision worksheet with model answers.'}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{ws.durationMinutes} mins</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-slate-400" />
                      <span>{ws.totalMarks} Marks</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FileSpreadsheet className="w-3.5 h-3.5 text-slate-400" />
                      <span>{ws.totalQuestions} Qs</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <Link
                      href={`/worksheets/${ws.id}`}
                      className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <span>Solve Online</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PRO Worksheets Showcase Card for Starter Students */}
          {!isProStudent && proWorksheetsCount > 0 && (
            <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-teal-950 text-white rounded-3xl p-8 shadow-xl border border-emerald-500/30 text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 font-extrabold text-xs border border-emerald-500/30">
                <Crown className="w-4 h-4 fill-amber-300 text-amber-300" />
                <span>{proWorksheetsCount} Additional PRO Worksheets Locked</span>
              </div>
              <h3 className="text-2xl font-extrabold font-display">
                Upgrade to PRO Version to Unlock {proWorksheetsCount} More Worksheets!
              </h3>
              <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
                You are currently viewing <strong>5 Free Practice Worksheets</strong> for your class. Upgrade to <strong>PRO Student</strong> to instantly download and solve all <strong>{proWorksheetsCount} Competency, HOTS & Revision Worksheets</strong>!
              </p>
              <div className="pt-2">
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold text-sm rounded-2xl shadow-lg transition transform hover:scale-105"
                >
                  <Sparkles className="w-4 h-4 fill-slate-950" />
                  <span>Unlock {proWorksheetsCount} PRO Worksheets 👑</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
