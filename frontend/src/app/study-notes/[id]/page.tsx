'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { api } from '@/lib/api';
import { useAuth } from '@/lib/auth-context';
import { StudyNote } from '@/types';
import { MindMapViewer } from '@/components/mindmap/MindMapViewer';
import {
  BookOpen,
  Sparkles,
  Bookmark,
  ChevronLeft,
  Lightbulb,
  FileSpreadsheet,
  HelpCircle,
  Eye,
  CheckCircle2,
  Share2,
  Layers,
  ArrowRight,
} from 'lucide-react';

export default function StudyNoteDetailPage() {
  const { id } = useParams() as { id: string };
  const { user } = useAuth();
  const [note, setNote] = useState<StudyNote | null>(null);
  const [activeTab, setActiveTab] = useState<'OVERVIEW' | 'MINDMAP' | 'DEEP_DIVE' | 'EXAMPLES' | 'PRACTICE'>('OVERVIEW');
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNote() {
      try {
        const data = await api.getStudyNote(id, user?.id);
        setNote(data);
      } catch (err) {
        console.error('Failed to load note:', err);
      } finally {
        setLoading(false);
      }
    }
    loadNote();
  }, [id, user]);

  const handleToggleBookmark = async () => {
    if (!note) return;
    try {
      const res = await api.toggleBookmark({
        itemType: 'NOTE',
        itemId: note.id,
        title: note.title,
        subtitle: `${note.chapter?.subject?.classGrade?.name || 'Class 10'} • ${note.chapter?.subject?.name || 'Math'}`,
      });
      setIsBookmarked(res.bookmarked);
    } catch (err) {
      alert('Please log in to bookmark this study note.');
    }
  };

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-16 text-center space-y-4">
        <div className="w-12 h-12 border-4 border-brand-600 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-xs text-slate-500 font-medium">Loading interactive study note & mind maps...</p>
      </div>
    );
  }

  if (!note) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-800">Study Note Not Found</h2>
        <Link href="/study-notes" className="inline-flex items-center gap-2 text-xs font-bold text-brand-600">
          <ChevronLeft className="w-4 h-4" /> Back to Study Notes
        </Link>
      </div>
    );
  }

  let keyConcepts: string[] = [];
  let definitions: Array<{ term: string; meaning: string }> = [];
  let examples: Array<{ title: string; problem: string; solution: string }> = [];
  let importantPoints: string[] = [];
  let mindMapData: any = null;
  let practiceQuestions: string[] = [];

  try {
    keyConcepts = JSON.parse(note.keyConcepts || '[]');
  } catch (e) {}

  try {
    definitions = JSON.parse(note.definitions || '[]');
  } catch (e) {}

  try {
    examples = JSON.parse(note.examples || '[]');
  } catch (e) {}

  try {
    importantPoints = JSON.parse(note.importantPoints || '[]');
  } catch (e) {}

  try {
    mindMapData = JSON.parse(note.mindMapJson || 'null');
  } catch (e) {}

  try {
    practiceQuestions = JSON.parse(note.practiceQuestions || '[]');
  } catch (e) {}

  const tabs = [
    { key: 'OVERVIEW', label: 'Overview & Concepts', icon: BookOpen },
    { key: 'MINDMAP', label: 'Visual Mind Map', icon: Sparkles },
    { key: 'DEEP_DIVE', label: 'Deep Dive Theory', icon: Layers },
    { key: 'EXAMPLES', label: 'Solved Examples', icon: Lightbulb },
    { key: 'PRACTICE', label: 'Practice & Quizzes', icon: HelpCircle },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/study-notes"
          className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-brand-600 transition"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>All Study Notes</span>
        </Link>

        <div className="flex items-center gap-2">
          <button
            onClick={handleToggleBookmark}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition ${
              isBookmarked
                ? 'bg-amber-50 text-amber-700 border-amber-300'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
            <span>{isBookmarked ? 'Saved' : 'Bookmark'}</span>
          </button>
        </div>
      </div>

      {/* Note Header Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-extrabold">
            {note.chapter?.subject?.classGrade?.name || 'Class 10'} • {note.chapter?.subject?.name || 'Science'}
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
            Chapter {note.chapter?.chapterNumber}: {note.chapter?.title}
          </span>
          <span className="text-xs text-slate-400 font-medium ml-auto flex items-center gap-1">
            <Eye className="w-3.5 h-3.5" /> {note.viewsCount} reads
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-display leading-tight">
          {note.title}
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">{note.summary}</p>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-100">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-brand-600 text-white shadow-xs shadow-brand-500/25'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* TAB 1: OVERVIEW & KEY CONCEPTS */}
      {activeTab === 'OVERVIEW' && (
        <div className="space-y-6 animate-in fade-in">
          {/* Key Concepts Grid */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-slate-900 font-display flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-600" />
              Core Concepts to Remember
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {keyConcepts.map((concept, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-xs font-semibold text-slate-800 leading-relaxed">{concept}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Definitions */}
          {definitions.length > 0 && (
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-900 font-display flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-600" />
                Key Definitions & Terminology
              </h3>
              <div className="space-y-3">
                {definitions.map((def, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 space-y-1 text-xs">
                    <h4 className="font-extrabold text-indigo-950">{def.term}</h4>
                    <p className="text-indigo-900 leading-relaxed">{def.meaning}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Important Examination Points */}
          {importantPoints.length > 0 && (
            <div className="bg-amber-50/70 border border-amber-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                <span>Crucial CBSE Board Exam Tips & Pitfalls</span>
              </div>
              <ul className="space-y-2 text-xs text-amber-900 list-disc pl-5 leading-relaxed">
                {importantPoints.map((pt, idx) => (
                  <li key={idx} className="font-medium">
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: VISUAL MIND MAP */}
      {activeTab === 'MINDMAP' && (
        <div className="space-y-6 animate-in fade-in">
          {mindMapData ? (
            <MindMapViewer data={mindMapData} title={`${note.title} — Visual Tree`} />
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
              <p className="text-xs text-slate-500">Mind map for this note is being rendered.</p>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: DEEP DIVE */}
      {activeTab === 'DEEP_DIVE' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6 animate-in fade-in">
          <div className="flex items-center gap-2 pb-4 border-b border-slate-100">
            <Layers className="w-5 h-5 text-brand-600" />
            <h3 className="text-lg font-bold text-slate-900 font-display">Deep Dive Theoretical Context</h3>
          </div>

          <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed whitespace-pre-line text-slate-700">
            {note.deepDive || note.visualExplanation || 'Detailed step-by-step theoretical derivation.'}
          </div>
        </div>
      )}

      {/* TAB 4: SOLVED EXAMPLES */}
      {activeTab === 'EXAMPLES' && (
        <div className="space-y-4 animate-in fade-in">
          {examples.map((ex, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-extrabold rounded-lg">
                  {ex.title || `Example ${idx + 1}`}
                </span>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900">
                <strong>Problem: </strong>
                {ex.problem}
              </div>

              <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100 text-xs sm:text-sm text-emerald-950 whitespace-pre-line leading-relaxed">
                <strong className="block text-emerald-900 mb-1">Step-by-Step Solution:</strong>
                {ex.solution}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 5: PRACTICE QUESTIONS & RELATED WORKSHEETS/QUIZZES */}
      {activeTab === 'PRACTICE' && (
        <div className="space-y-6 animate-in fade-in">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-slate-900 font-display flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-brand-600" />
              Practice Questions for Self-Assessment
            </h3>
            <div className="space-y-3">
              {practiceQuestions.map((q, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs font-semibold text-slate-800">
                  {q}
                </div>
              ))}
            </div>
          </div>

          {/* Related Quizzes and Worksheets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-3">
              <h4 className="text-sm font-bold text-slate-900 font-display flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-sky-600" />
                Related Chapter Quizzes
              </h4>
              <p className="text-xs text-slate-500">Test your retention with instant accuracy metrics.</p>
              <Link
                href="/quizzes"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700"
              >
                <span>Take Chapter Quiz</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-3">
              <h4 className="text-sm font-bold text-slate-900 font-display flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                Related Practice Worksheets
              </h4>
              <p className="text-xs text-slate-500">Practice full-length questions with model marking schemes.</p>
              <Link
                href="/worksheets"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700"
              >
                <span>Solve Worksheet</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
