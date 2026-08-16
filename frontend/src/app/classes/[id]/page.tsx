'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { api } from '@/lib/api';
import { ClassGrade, Subject } from '@/types';
import { ChevronLeft, BookOpen, FileSpreadsheet, HelpCircle, ArrowRight } from 'lucide-react';

export default function ClassDetailPage() {
  const { id } = useParams() as { id: string };
  const [classGrade, setClassGrade] = useState<ClassGrade | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await api.getClass(id);
        setClassGrade(res);
      } catch (err) {
        console.error('Failed to load class details:', err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="w-10 h-10 border-4 border-brand-600 border-t-transparent rounded-full animate-spin mx-auto" />
      </div>
    );
  }

  if (!classGrade) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="text-xl font-bold text-slate-800">Class Not Found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Link href="/classes" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-brand-600">
        <ChevronLeft className="w-4 h-4" /> All Classes
      </Link>

      <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xs space-y-3">
        <span className="px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold rounded-full">CBSE Standards</span>
        <h1 className="text-3xl font-extrabold text-slate-900 font-display">{classGrade.name}</h1>
        <p className="text-xs sm:text-sm text-slate-600">{classGrade.description || 'Full subject breakdown for this standard.'}</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 font-display">Enrolled Subjects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classGrade.subjects?.map((sub) => (
            <div key={sub.id} className="bg-white p-6 rounded-3xl border border-slate-200 hover:shadow-md transition space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 font-extrabold flex items-center justify-center font-display">
                  {sub.name.slice(0, 2).toUpperCase()}
                </div>
                <span className="text-xs font-bold text-slate-400">{sub.code}</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">{sub.name}</h3>
                <p className="text-xs text-slate-500 mt-1">{sub._count?.chapters || 8} Chapters</p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <Link href={`/study-notes?subjectId=${sub.id}`} className="font-bold text-brand-600 hover:underline">
                  Study Notes
                </Link>
                <Link href={`/worksheets?subjectId=${sub.id}`} className="font-bold text-emerald-600 hover:underline">
                  Worksheets
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
