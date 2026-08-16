'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { api } from '@/lib/api';
import { GraduationCap, BookOpen, Users, ChevronRight } from 'lucide-react';

export default function TeacherClassesPage() {
  const [classes, setClasses] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const res = await api.getClasses();
      setClasses(res);
    }
    load();
  }, []);

  return (
    <DashboardLayout role="TEACHER">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 font-display">Class Cohorts & Curriculums</h1>
          <p className="text-xs text-slate-500">Manage syllabus progression and assign homework by class section.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((cls) => (
            <div key={cls.id} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center text-lg font-black font-display">
                  {cls.number}
                </div>
                <span className="text-xs font-bold text-slate-400">{cls._count?.subjects || 4} Subjects</span>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 font-display">{cls.name}</h3>
                <p className="text-xs text-slate-500 mt-1">{cls.description || 'CBSE board preparation cohort.'}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <Link href={`/classes/${cls.id}`} className="font-bold text-brand-600 hover:underline">
                  View Syllabus
                </Link>
                <Link href="/teacher/question-papers" className="font-bold text-indigo-600 hover:underline">
                  Build Paper
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
