'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { api } from '@/lib/api';
import { QuestionPaper } from '@/types';
import { FileText, Search, Clock, Award, Printer, ArrowRight, Layers, Sparkles, UserCheck } from 'lucide-react';

export default function QuestionPapersListPage() {
  const { user } = useAuth();
  const [papers, setPapers] = useState<QuestionPaper[]>([]);
  const [classes, setClasses] = useState<any[]>([]);
  const [selectedClass, setSelectedClass] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const isStudent = user?.role === 'STUDENT';

  // Automatically filter to student's enrolled class
  useEffect(() => {
    if (user && isStudent) {
      let studentClassNum = '';
      const cg = (user as any).classGrade;
      if (cg && typeof cg === 'object' && cg.number) {
        studentClassNum = String(cg.number);
      } else if (typeof cg === 'string') {
        const match = cg.match(/\d+/);
        if (match) studentClassNum = match[0];
      }
      setSelectedClass(studentClassNum || '10');
    }
  }, [user, isStudent]);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const [pData, clsData] = await Promise.all([
          api.getQuestionPapers({
            classId: selectedClass || undefined,
            search: search || undefined,
          }),
          api.getClasses().catch(() => []),
        ]);
        setPapers(pData);
        setClasses(clsData);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [selectedClass, search]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold">
            <FileText className="w-3.5 h-3.5" />
            <span>CBSE Board Examination Standards</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 font-display">Model Question Papers & Pre-Boards</h1>
          <p className="text-xs sm:text-sm text-slate-500">
            {isStudent
              ? `Displaying model examination papers for Class ${selectedClass || '10'}.`
              : 'Standardized examination papers with official blueprint weightage, Section A–E structure, and complete marking keys.'}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search exam papers..."
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
            <div className="px-3 py-2 text-xs bg-indigo-50 border border-indigo-200 rounded-xl font-bold text-indigo-800 flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-indigo-600" />
              <span>Class {selectedClass || '10'} (Enrolled)</span>
            </div>
          )}

          {user?.role === 'TEACHER' || user?.role === 'ADMIN' ? (
            <Link
              href="/teacher/question-papers"
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-400" />
              <span>Generate New Paper</span>
            </Link>
          ) : null}
        </div>
      </div>

      {/* Grid of Papers */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-60 bg-slate-100 rounded-3xl animate-pulse" />
          ))}
        </div>
      ) : papers.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
          <FileText className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">No question papers found</h3>
          <p className="text-xs text-slate-500">Try adjusting your search keywords.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {papers.map((paper) => (
            <div
              key={paper.id}
              className="bg-white rounded-3xl border border-slate-200 p-6 hover:shadow-lg transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 font-bold">
                    {paper.classGrade?.name || 'Class 10'} • {paper.subject?.name || 'Math'}
                  </span>
                  <span className="text-slate-400 font-semibold text-[11px]">{paper.academicYear}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors font-display line-clamp-2">
                  {paper.title}
                </h3>
                <p className="text-xs text-slate-600 font-medium">{paper.examName}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3 text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {Math.round(paper.durationMinutes / 60)}h
                  </span>
                  <span className="font-bold text-slate-700">{paper.totalMarks} Marks</span>
                </div>

                <Link
                  href={`/question-papers/${paper.id}`}
                  className="px-3.5 py-1.5 bg-slate-900 hover:bg-brand-600 text-white font-bold rounded-xl transition flex items-center gap-1 shadow-xs"
                >
                  <span>View & Print</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
