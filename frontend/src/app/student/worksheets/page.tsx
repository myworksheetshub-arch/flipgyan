'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { useAuth } from '@/lib/auth-context';
import { api } from '@/lib/api';
import { Worksheet } from '@/types';
import { FileSpreadsheet, Clock, Award, ArrowRight, Crown, Sparkles, BookOpen, Filter } from 'lucide-react';

export default function StudentWorksheetsPage() {
  const { user, isPro } = useAuth();
  const [worksheets, setWorksheets] = useState<Worksheet[]>([]);
  const [subjects, setSubjects] = useState<any[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [loading, setLoading] = useState(true);

  const isProStudent = isPro || user?.role === 'TEACHER' || user?.role === 'ADMIN' || (user as any)?.role === 'PRO_STUDENT' || (user as any)?.subscriptionTier === 'PRO_STUDENT';

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        let studentClassNum = '7'; // Default to Class 7 if unspecified
        const cg = (user as any)?.classGrade;
        const uClass = (user as any)?.class;

        if (cg && typeof cg === 'object' && typeof cg.number === 'number') {
          studentClassNum = String(cg.number);
        } else if (uClass && typeof uClass === 'object' && typeof uClass.classNo === 'number') {
          studentClassNum = String(uClass.classNo);
        } else if (cg && typeof cg === 'object' && typeof cg.name === 'string') {
          const match = cg.name.match(/\d+/);
          if (match) studentClassNum = match[0];
        } else if (typeof cg === 'string') {
          const match = cg.match(/\d+/);
          if (match) studentClassNum = match[0];
        }

        const [data, subData] = await Promise.all([
          api.getWorksheets({ classId: studentClassNum }),
          api.getSubjects(studentClassNum).catch(() => []),
        ]);

        // STRICT FILTER: Only include worksheets belonging strictly to the student's enrolled class number
        const filteredData = data.filter((ws) => {
          const wsClassNum = String(ws.subject?.classGrade?.number || '');
          return wsClassNum === studentClassNum;
        });

        setWorksheets(filteredData);
        setSubjects(subData);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [user]);

  // Deduplicate subjects by name so each subject appears EXACTLY ONCE
  const uniqueSubjects = Array.from(
    new Map(
      (subjects.length > 0 ? subjects : worksheets.map((w) => w.subject).filter(Boolean))
        .filter((s) => s && s.name)
        .map((s) => [s.name.trim().toLowerCase(), s.name.trim()])
    ).values()
  );

  // Apply Subject and Type filters
  const filteredWorksheets = worksheets.filter((ws) => {
    if (selectedSubject) {
      const matchId = ws.subjectId === selectedSubject || ws.subject?.id === selectedSubject;
      const matchName = ws.subject?.name?.toLowerCase() === selectedSubject.toLowerCase();
      if (!matchId && !matchName) return false;
    }
    if (selectedType && ws.type !== selectedType) {
      return false;
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
    <DashboardLayout role="STUDENT">
      <div className="space-y-6">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 font-display">Practice Worksheets</h1>
            <p className="text-xs text-slate-500">Solve chapter test papers online or download printable versions.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Subject Dropdown Filter */}
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 border border-slate-200 rounded-xl shadow-xs">
              <BookOpen className="w-4 h-4 text-emerald-600 shrink-0" />
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="text-xs bg-transparent outline-none font-bold text-slate-800 cursor-pointer"
              >
                <option value="">All Subjects</option>
                {uniqueSubjects.map((subName) => (
                  <option key={subName} value={subName}>
                    {subName}
                  </option>
                ))}
              </select>
            </div>

            {/* Type Dropdown Filter */}
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 border border-slate-200 rounded-xl shadow-xs">
              <Filter className="w-4 h-4 text-slate-500 shrink-0" />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="text-xs bg-transparent outline-none font-semibold text-slate-700 cursor-pointer"
              >
                <option value="">All Types</option>
                <option value="PRACTICE">Practice</option>
                <option value="COMPETENCY">Competency</option>
                <option value="HOTS">HOTS / Case Study</option>
                <option value="REVISION">Revision</option>
                <option value="ASSESSMENT">Assessment</option>
              </select>
            </div>

            {!isProStudent && (
              <Link
                href="/pricing"
                className="px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-extrabold text-xs rounded-xl shadow-md transition flex items-center gap-2 shrink-0 hover:scale-105 transform"
              >
                <Crown className="w-4 h-4 fill-amber-300 text-amber-300" />
                <span>Upgrade to PRO 👑</span>
              </Link>
            )}
          </div>
        </div>

        {/* Free Starter Plan vs PRO Banner */}
        {!isProStudent && (
          <div className="p-4 bg-gradient-to-r from-emerald-500/10 via-emerald-50 to-sky-50 border border-emerald-300/80 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs shadow-xs">
            <div className="flex items-center gap-3 text-slate-900 font-bold">
              <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0">
                <FileSpreadsheet className="w-4 h-4" />
              </div>
              <div>
                <p className="font-extrabold text-slate-900">
                  Starter Plan: Showing {freeWorksheets.length} Free Worksheets (1 From Each Subject)
                </p>
                <p className="text-slate-600 font-normal">
                  There are <strong>{proWorksheetsCount} additional PRO worksheets</strong> available in the PRO Version for your class!
                </p>
              </div>
            </div>
            <Link
              href="/pricing"
              className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-xs transition shrink-0 self-start sm:self-auto flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              <span>Unlock {proWorksheetsCount} PRO Worksheets 👑</span>
            </Link>
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-52 bg-slate-100 rounded-3xl animate-pulse" />
            ))}
          </div>
        ) : displayWorksheets.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
            <FileSpreadsheet className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-800">No worksheets found for selected subject</h3>
            <p className="text-xs text-slate-500">Try selecting a different subject or reset filters.</p>
            <button
              onClick={() => { setSelectedSubject(''); setSelectedType(''); }}
              className="px-4 py-2 bg-emerald-50 text-emerald-700 font-bold text-xs rounded-xl hover:bg-emerald-100 transition"
            >
              Show All Subjects
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayWorksheets.map((ws) => (
                <div
                  key={ws.id}
                  className="bg-white rounded-3xl border border-slate-200 p-6 hover:shadow-md transition flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold">
                      {ws.subject?.name} • {ws.type}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">{ws.title}</h3>
                    <p className="text-xs text-slate-500 line-clamp-2">{ws.description}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500">{ws.durationMinutes}m • {ws.totalMarks} Marks</span>
                    <Link
                      href={`/worksheets/${ws.id}`}
                      className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition flex items-center gap-1 shadow-xs"
                    >
                      <span>Solve Online</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
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
                  You are currently viewing <strong>Free Practice Worksheets</strong> for your class. Upgrade to <strong>PRO Student</strong> to instantly download and solve all <strong>{proWorksheetsCount} Competency, HOTS & Revision Worksheets</strong>!
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
    </DashboardLayout>
  );
}
