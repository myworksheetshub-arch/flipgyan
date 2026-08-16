'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { api } from '@/lib/api';
import {
  Search as SearchIcon,
  BookOpen,
  FileSpreadsheet,
  HelpCircle,
} from 'lucide-react';

function SearchContent() {
  const searchParams = useSearchParams();
  const queryParam = searchParams.get('q') || '';
  const [searchTerm, setSearchTerm] = useState(queryParam);
  const [activeType, setActiveType] = useState<string>('ALL');
  const [results, setResults] = useState<any>({ notes: [], worksheets: [], quizzes: [], questions: [], papers: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchTerm.trim()) return;

    async function executeSearch() {
      setLoading(true);
      try {
        const typeFilter = activeType === 'ALL' ? undefined : activeType;
        const res = await api.globalSearch(searchTerm, typeFilter);
        setResults(res);
      } catch (err) {
        console.error('Search failed:', err);
      } finally {
        setLoading(false);
      }
    }

    const timer = setTimeout(executeSearch, 300);
    return () => clearTimeout(timer);
  }, [searchTerm, activeType]);

  const totalResults =
    (results.notes?.length || 0) +
    (results.worksheets?.length || 0) +
    (results.quizzes?.length || 0) +
    (results.questions?.length || 0) +
    (results.papers?.length || 0);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Search Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-extrabold text-slate-900 font-display">Search FlipGyan Knowledge Base</h1>

        <div className="relative">
          <input
            type="text"
            placeholder="Search any CBSE topic, formula, reaction, or keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 text-base bg-white border border-slate-300 focus:border-brand-500 rounded-2xl shadow-sm outline-none transition"
          />
          <SearchIcon className="w-5 h-5 text-slate-400 absolute left-4 top-4" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {['ALL', 'NOTES', 'WORKSHEETS', 'QUIZZES', 'PAPERS'].map((t) => (
            <button
              key={t}
              onClick={() => setActiveType(t)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                activeType === t
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {loading ? (
        <div className="py-12 text-center text-xs text-slate-500 font-medium">Searching curriculum database...</div>
      ) : totalResults === 0 && searchTerm.trim() ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-2">
          <p className="text-sm font-bold text-slate-800">No matching materials found for "{searchTerm}"</p>
          <p className="text-xs text-slate-500">Try searching for terms like "Real Numbers", "Chemical Reactions", "Theorem", or "Quiz".</p>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Notes Results */}
          {results.notes?.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-600" />
                Study Notes ({results.notes.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.notes.map((n: any) => (
                  <Link
                    key={n.id}
                    href={`/study-notes/${n.id}`}
                    className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-brand-500 hover:shadow-md transition space-y-2 group"
                  >
                    <span className="text-[11px] font-bold text-brand-600">
                      {n.chapter?.subject?.classGrade?.name || 'Class 10'} • {n.chapter?.subject?.name}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-brand-600 transition">{n.title}</h4>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{n.summary}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Worksheets Results */}
          {results.worksheets?.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                Practice Worksheets ({results.worksheets.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.worksheets.map((ws: any) => (
                  <Link
                    key={ws.id}
                    href={`/worksheets/${ws.id}`}
                    className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition space-y-2 group"
                  >
                    <span className="text-[11px] font-bold text-emerald-600">{ws.subject?.name}</span>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition">{ws.title}</h4>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{ws.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Quizzes Results */}
          {results.quizzes?.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-sky-600" />
                Interactive Quizzes ({results.quizzes.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.quizzes.map((qz: any) => (
                  <Link
                    key={qz.id}
                    href={`/quizzes/${qz.id}`}
                    className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-sky-500 hover:shadow-md transition space-y-2 group"
                  >
                    <span className="text-[11px] font-bold text-sky-600">{qz.subject?.name}</span>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-sky-600 transition">{qz.title}</h4>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{qz.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function GlobalSearchPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs font-semibold text-slate-500">Loading search interface...</div>}>
      <SearchContent />
    </Suspense>
  );
}
