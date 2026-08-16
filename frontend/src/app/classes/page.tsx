'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { api } from '@/lib/api';
import { ClassGrade } from '@/types';
import { Sparkles, BookOpen, FileSpreadsheet, HelpCircle, ChevronRight, ArrowRight, UserCheck } from 'lucide-react';

export default function ClassesPage() {
  const { user } = useAuth();
  const [classes, setClasses] = useState<ClassGrade[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await api.getClasses();
        setClasses(res);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  let studentClassNum: string | null = null;
  if (user?.role === 'STUDENT') {
    const cg = (user as any).classGrade;
    if (cg && typeof cg === 'object' && cg.number) {
      studentClassNum = String(cg.number);
    } else if (typeof cg === 'string') {
      const match = cg.match(/\d+/);
      if (match) studentClassNum = match[0];
    } else {
      studentClassNum = '10';
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curriculum Hub</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-display">Classes 5 to 12 Curriculum</h1>
        <p className="text-xs sm:text-sm text-slate-600">
          Structured CBSE syllabus with chapter-wise study notes, interactive mind maps, worksheets, and board mock tests.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((c) => {
          const isStudentClass = studentClassNum && String(c.number) === studentClassNum;

          return (
            <div
              key={c.id}
              className={`bg-white rounded-3xl p-6 sm:p-8 transition-all flex flex-col justify-between space-y-6 group ${
                isStudentClass
                  ? 'border-2 border-brand-500 shadow-xl ring-4 ring-brand-500/10'
                  : 'border border-slate-200 hover:shadow-xl hover:border-brand-400'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center text-xl font-black font-display shadow-md shadow-brand-500/20">
                    {c.number}
                  </div>
                  {isStudentClass ? (
                    <span className="px-3 py-1 bg-brand-600 text-white text-xs font-extrabold rounded-full flex items-center gap-1">
                      <UserCheck className="w-3.5 h-3.5" /> Your Class
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-full">
                      {c._count?.subjects || 5} Subjects
                    </span>
                  )}
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl font-extrabold text-slate-900 font-display group-hover:text-brand-600 transition-colors">
                    {c.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{c.description || 'Comprehensive curriculum aligned with NCERT guidelines.'}</p>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 text-center text-xs">
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <span className="font-extrabold text-slate-900 block">50+</span>
                    <span className="text-[10px] text-slate-500">Notes</span>
                  </div>
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <span className="font-extrabold text-emerald-600 block">30+</span>
                    <span className="text-[10px] text-slate-500">Worksheets</span>
                  </div>
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <span className="font-extrabold text-sky-600 block">25+</span>
                    <span className="text-[10px] text-slate-500">Quizzes</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/study-notes?classId=${c.number}`}
                  className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1"
                >
                  <span>Study Notes</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href={`/worksheets?classId=${c.number}`}
                  className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                >
                  <span>Worksheets</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
