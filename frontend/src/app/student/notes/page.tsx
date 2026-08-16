'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { useAuth } from '@/lib/auth-context';
import { api } from '@/lib/api';
import { StudyNote } from '@/types';
import { BookOpen, Sparkles, Search, ChevronRight, Eye, Crown, Lock } from 'lucide-react';

export default function StudentNotesPage() {
  const { user, isPro } = useAuth();
  const [notes, setNotes] = useState<StudyNote[]>([]);
  const [subjects, setSubjects] = useState<any[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<string>('ALL');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  const isProStudent = isPro || user?.role === 'TEACHER' || user?.role === 'ADMIN' || (user as any)?.role === 'PRO_STUDENT' || (user as any)?.subscriptionTier === 'PRO_STUDENT';

  function getStudentClassNum(usr: any): string {
    if (!usr) return '9';
    const cg = usr.classGrade;
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
    if (usr.classGradeId && typeof usr.classGradeId === 'string') {
      const match = usr.classGradeId.match(/\d+/);
      if (match) return match[0];
    }
    return '9';
  }

  const studentClassNum = getStudentClassNum(user);

  useEffect(() => {
    async function loadSubjects() {
      try {
        const subData = await api.getSubjects(studentClassNum);
        setSubjects(subData);
      } catch (err) {
        console.error('Failed to load subjects:', err);
      }
    }
    loadSubjects();
  }, [studentClassNum]);

  useEffect(() => {
    async function load() {
      try {
        const data = await api.getStudyNotes({ classId: studentClassNum, search: search || undefined });
        const filteredData = data.filter((n) => {
          const noteClassNum = String(n.chapter?.subject?.classGrade?.number || '');
          return noteClassNum === studentClassNum;
        });

        setNotes(filteredData);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [user, search, studentClassNum]);

  // Sort notes so Chapter 1 notes come first for each subject
  const sortedNotes = [...notes].sort((a, b) => {
    const aCh = (a.chapter as any);
    const bCh = (b.chapter as any);
    const aIsCh1 = aCh?.order === 1 || aCh?.chapterNumber === 1 || String(aCh?.title || aCh?.name || '').toLowerCase().includes('chapter 1') || (a.title || '').toLowerCase().includes('chapter 1') || String(aCh?.title || '').toLowerCase().includes('integers') || String(aCh?.title || '').toLowerCase().includes('crop');
    const bIsCh1 = bCh?.order === 1 || bCh?.chapterNumber === 1 || String(bCh?.title || bCh?.name || '').toLowerCase().includes('chapter 1') || (b.title || '').toLowerCase().includes('chapter 1') || String(bCh?.title || '').toLowerCase().includes('integers') || String(bCh?.title || '').toLowerCase().includes('crop');
    if (aIsCh1 && !bIsCh1) return -1;
    if (!aIsCh1 && bIsCh1) return 1;
    return 0;
  });

  // Chapter 1 of EVERY subject in student's class is 100% free and visible to starter students.
  const freeNotes = notes.filter((n) => {
    const ch = (n.chapter as any);
    const isCh1 = ch?.chapterNumber === 1 || ch?.order === 1 || String(ch?.title || '').toLowerCase().includes('chapter 1') || String(n.title || '').toLowerCase().includes('chapter 1') || String(ch?.title || '').toLowerCase().includes('foundations') || String(ch?.title || '').toLowerCase().includes('integers') || String(ch?.title || '').toLowerCase().includes('real numbers') || String(ch?.title || '').toLowerCase().includes('rational') || String(ch?.title || '').toLowerCase().includes('number systems') || String(ch?.title || '').toLowerCase().includes('patterns') || String(ch?.title || '').toLowerCase().includes('shapes') || String(ch?.title || '').toLowerCase().includes('sets');
    return isCh1;
  });

  // Ensure every subject has at least 1 free note if an explicit Chapter 1 tag is missing
  const freeNoteSubjectIds = new Set(freeNotes.map((n) => n.chapter?.subjectId || n.chapter?.subject?.id));
  for (const n of sortedNotes) {
    const subId = n.chapter?.subjectId || n.chapter?.subject?.id;
    if (subId && !freeNoteSubjectIds.has(subId)) {
      freeNoteSubjectIds.add(subId);
      freeNotes.push(n);
    }
  }

  const baseDisplayNotes = isProStudent ? notes : freeNotes;

  // Filter baseDisplayNotes by selectedSubject
  const displayNotes = baseDisplayNotes.filter((n) => {
    if (selectedSubject === 'ALL') return true;
    const subName = n.chapter?.subject?.name || '';
    const subId = n.chapter?.subjectId || n.chapter?.subject?.id || '';
    return subId === selectedSubject || subName.toLowerCase() === selectedSubject.toLowerCase();
  });

  const proNotesCount = Math.max(0, notes.length - freeNotes.length);

  // Extract unique subject names/objects for subject filter pills
  const uniqueSubjectsMap = new Map<string, { id: string; name: string }>();
  notes.forEach((n) => {
    const sub = n.chapter?.subject;
    if (sub && sub.name && !uniqueSubjectsMap.has(sub.name)) {
      uniqueSubjectsMap.set(sub.name, { id: sub.id || sub.name, name: sub.name });
    }
  });
  const availableSubjectPills = Array.from(uniqueSubjectsMap.values());

  return (
    <DashboardLayout role="STUDENT">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-extrabold text-slate-900 font-display">My Study Notes & Mind Maps</h1>
              <span className="px-2.5 py-0.5 rounded-full bg-brand-100 text-brand-800 text-[11px] font-extrabold border border-brand-200">
                Class {studentClassNum} (Enrolled)
              </span>
            </div>
            <p className="text-xs text-slate-500">Access curated NCERT study notes and visual mind maps for Class {studentClassNum} only.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Subject Selector Dropdown */}
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="px-3 py-2 text-xs bg-white border border-slate-200 rounded-xl outline-none font-bold text-slate-700 focus:border-brand-500 shadow-xs cursor-pointer"
            >
              <option value="ALL">All Subjects</option>
              {availableSubjectPills.map((sub) => (
                <option key={sub.id} value={sub.id}>
                  {sub.name}
                </option>
              ))}
            </select>

            <div className="relative max-w-xs w-full">
              <input
                type="text"
                placeholder="Search notes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-200 rounded-xl outline-none focus:border-brand-500"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>

            {!isProStudent && (
              <Link
                href="/pricing"
                className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-extrabold text-xs rounded-xl shadow-md transition flex items-center gap-1.5 shrink-0 hover:scale-105 transform"
              >
                <Crown className="w-4 h-4 fill-amber-300 text-amber-300" />
                <span>Upgrade to PRO 👑</span>
              </Link>
            )}
          </div>
        </div>

        {/* Interactive Subject Pills Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200/80">
          <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 text-brand-600" /> Filter Subject:
          </span>
          <button
            onClick={() => setSelectedSubject('ALL')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
              selectedSubject === 'ALL'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            All Subjects ({baseDisplayNotes.length})
          </button>
          {availableSubjectPills.map((sub) => {
            const isSelected = selectedSubject === sub.id || selectedSubject.toLowerCase() === sub.name.toLowerCase();
            const subCount = baseDisplayNotes.filter((n) => {
              const name = n.chapter?.subject?.name || '';
              const id = n.chapter?.subjectId || n.chapter?.subject?.id || '';
              return id === sub.id || name.toLowerCase() === sub.name.toLowerCase();
            }).length;

            return (
              <button
                key={sub.id}
                onClick={() => setSelectedSubject(sub.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-brand-600 text-white shadow-xs shadow-brand-500/25'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                <span>{sub.name}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                    isSelected ? 'bg-brand-700 text-white' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {subCount}
                </span>
              </button>
            );
          })}
        </div>

        {/* Free Starter Plan vs PRO Banner */}
        {!isProStudent && (
          <div className="p-4 bg-gradient-to-r from-indigo-500/10 via-sky-50 to-amber-50 border border-indigo-300/80 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs shadow-xs">
            <div className="flex items-center gap-3 text-slate-900 font-bold">
              <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold shrink-0">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <p className="font-extrabold text-slate-900">
                  Starter Plan: Showing {freeNotes.length} Free Notes & Mind Maps (1 From Each Subject)
                </p>
                <p className="text-slate-600 font-normal">
                  There are <strong>{proNotesCount} additional PRO study notes & visual mind maps</strong> available in the PRO Version for your class!
                </p>
              </div>
            </div>
            <Link
              href="/pricing"
              className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-xs transition shrink-0 self-start sm:self-auto flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              <span>Unlock {proNotesCount} PRO Notes & Mind Maps 👑</span>
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
              {displayNotes.map((note) => (
                <div
                  key={note.id}
                  className="bg-white rounded-3xl border border-slate-200 p-6 hover:shadow-md transition flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-xs font-bold">
                      {note.chapter?.subject?.name || 'Science'}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-brand-600 transition">
                      {note.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2">{note.summary}</p>
                  </div>

                  <Link
                    href={`/study-notes/${note.id}`}
                    className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-600 hover:text-brand-700"
                  >
                    <span>Open Interactive Note</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>

            {/* PRO Study Notes Showcase Card for Starter Students */}
            {!isProStudent && proNotesCount > 0 && (
              <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 shadow-xl border border-indigo-500/30 text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 font-extrabold text-xs border border-indigo-500/30">
                  <Crown className="w-4 h-4 fill-amber-300 text-amber-300" />
                  <span>{proNotesCount} Additional PRO Study Notes & Mind Maps Locked</span>
                </div>
                <h3 className="text-2xl font-extrabold font-display">
                  Upgrade to PRO Version to Unlock {proNotesCount} More Notes & Mind Maps!
                </h3>
                <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
                  You are currently viewing <strong>{freeNotes.length} Free Study Notes & Visual Mind Maps</strong> (1 from each subject). Upgrade to <strong>PRO Student</strong> to instantly unlock all <strong>{proNotesCount} NCERT Study Notes & Visual Mind Maps</strong> for your class!
                </p>
                <div className="pt-2">
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold text-sm rounded-2xl shadow-lg transition transform hover:scale-105"
                  >
                    <Sparkles className="w-4 h-4 fill-slate-950" />
                    <span>Unlock {proNotesCount} PRO Notes & Mind Maps 👑</span>
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
