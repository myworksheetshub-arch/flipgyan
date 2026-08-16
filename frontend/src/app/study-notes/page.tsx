'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { api } from '@/lib/api';
import { StudyNote } from '@/types';
import { BookOpen, Sparkles, Search, ChevronRight, Eye, UserCheck, Crown, Lock } from 'lucide-react';

export default function StudyNotesListPage() {
  const { user, isPro } = useAuth();
  const [notes, setNotes] = useState<StudyNote[]>([]);
  const [classes, setClasses] = useState<any[]>([]);
  const [subjects, setSubjects] = useState<any[]>([]);
  const [selectedClass, setSelectedClass] = useState<string>('');
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const isStudent = user?.role === 'STUDENT' || (user as any)?.role === 'PRO_STUDENT';
  const isProStudent = isPro || user?.role === 'TEACHER' || user?.role === 'ADMIN' || (user as any)?.role === 'PRO_STUDENT' || (user as any)?.subscriptionTier === 'PRO_STUDENT';

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
      setSelectedClass(studentClassNum || '7');
    }
  }, [user, isStudent]);

  // Load subjects when selected class changes
  useEffect(() => {
    async function loadSubjects() {
      try {
        const subData = await api.getSubjects(selectedClass || undefined);
        setSubjects(subData);
        setSelectedSubject('');
      } catch (err) {
        console.error('Failed to load subjects:', err);
      }
    }
    loadSubjects();
  }, [selectedClass]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const [notesData, classesData] = await Promise.all([
          api.getStudyNotes({
            classId: selectedClass || undefined,
            subjectId: selectedSubject || undefined,
            search: search || undefined,
          }),
          api.getClasses().catch(() => []),
        ]);
        const filteredNotes = notesData.filter((n) => {
          if (!selectedClass) return true;
          const noteClassNum = String(n.chapter?.subject?.classGrade?.number || '');
          return noteClassNum === selectedClass;
        });
        setNotes(filteredNotes);
        setClasses(classesData);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [selectedClass, selectedSubject, search]);

  // Deduplicate unique subject names for filter buttons
  const uniqueSubjects = Array.from(new Map(subjects.map((s) => [s.name, s])).values());

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

  // Chapter 1 of EVERY subject in selected class is 100% free and visible to starter students.
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

  const displayNotes = isProStudent ? notes : freeNotes;
  const proNotesCount = Math.max(0, notes.length - freeNotes.length);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Learning</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 font-display">Study Notes & Visual Mind Maps</h1>
          <p className="text-xs sm:text-sm text-slate-500">
            {isStudent
              ? `Displaying study notes for Class ${selectedClass || '7'}.`
              : 'Comprehensive CBSE study notes with key concepts, definitions, solved examples, mind maps, and practice questions.'}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Filter notes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 text-xs bg-white border border-slate-200 rounded-xl outline-none focus:border-brand-500 transition"
            />
          </div>

          {/* Subject Dropdown Selector */}
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="px-3 py-2 text-xs bg-white border border-slate-200 rounded-xl outline-none font-semibold text-slate-700 focus:border-brand-500 transition cursor-pointer"
          >
            <option value="">All Subjects</option>
            {uniqueSubjects.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>

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
            <div className="px-3 py-2 text-xs bg-brand-50 border border-brand-200 rounded-xl font-bold text-brand-800 flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-brand-600" />
              <span>Class {selectedClass || '7'} (Enrolled)</span>
            </div>
          )}
        </div>
      </div>

      {/* Subject Pill Tabs */}
      {uniqueSubjects.length > 0 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedSubject('')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
              !selectedSubject
                ? 'bg-brand-600 text-white shadow-md shadow-brand-200'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            📚 All Subjects ({uniqueSubjects.length})
          </button>
          {uniqueSubjects.map((sub) => {
            const isSelected = selectedSubject === sub.id;
            return (
              <button
                key={sub.id}
                onClick={() => setSelectedSubject(sub.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {sub.name}
              </button>
            );
          })}
        </div>
      )}

      {/* Starter Student PRO Study Notes Banner */}
      {!isProStudent && (
        <div className="p-5 bg-gradient-to-r from-indigo-500/10 via-sky-50 to-amber-50 border border-indigo-300/80 rounded-3xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs shadow-xs">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold shrink-0 mt-0.5 shadow-xs">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-indigo-200 text-indigo-950 text-[11px] font-extrabold">
                  {freeNotes.length} Free Notes & Mind Maps (1 Per Subject)
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-900 text-amber-400 text-[11px] font-extrabold">
                  👑 {proNotesCount} Extra PRO Notes & Mind Maps
                </span>
              </div>
              <p className="font-extrabold text-slate-900 text-sm">
                Starter Plan: Showing {freeNotes.length} Free Study Notes & Visual Mind Maps (1 From Each Subject)
              </p>
              <p className="text-slate-600 leading-relaxed">
                There are <strong>{proNotesCount} additional PRO study notes & visual mind maps</strong> with complete concept trees available in PRO Version!
              </p>
            </div>
          </div>
          <Link
            href="/pricing"
            className="px-5 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-extrabold text-xs rounded-2xl shadow-md transition flex items-center gap-2 shrink-0 self-start sm:self-auto hover:scale-105 transform"
          >
            <Crown className="w-4 h-4 fill-amber-300 text-amber-300" />
            <span>Unlock {proNotesCount} PRO Notes & Mind Maps 👑</span>
          </Link>
        </div>
      )}

      {/* Grid of Notes */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-slate-100 rounded-3xl animate-pulse" />
          ))}
        </div>
      ) : displayNotes.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
          <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">No study notes found</h3>
          <p className="text-xs text-slate-500">Try changing your search query.</p>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayNotes.map((note) => (
              <div
                key={note.id}
                className="bg-white rounded-3xl border border-slate-200 p-6 hover:shadow-lg transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-1 rounded-lg bg-brand-50 text-brand-700 font-bold">
                      {note.chapter?.subject?.classGrade?.name || 'Class 10'} • {note.chapter?.subject?.name || 'Math'}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400 text-[11px]">
                      <Eye className="w-3.5 h-3.5" /> {note.viewsCount || 0} views
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors font-display line-clamp-2">
                    {note.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">{note.summary}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-amber-600 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Mind Map Ready
                  </span>
                  <Link
                    href={`/study-notes/${note.id}`}
                    className="px-3 py-1.5 bg-slate-900 hover:bg-brand-600 text-white text-xs font-bold rounded-xl transition flex items-center gap-1"
                  >
                    <span>Open Note</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
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
  );
}
