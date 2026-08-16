'use client';

import React, { useState, useEffect } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { api } from '@/lib/api';
import { Question } from '@/types';
import { Layers, Plus, Search, CheckCircle2, Trash2, Edit3, X, Sparkles } from 'lucide-react';
import { getDifficultyColor, getBloomColor } from '@/lib/utils';

export default function TeacherQuestionsPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [chapters, setChapters] = useState<any[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  // New question form state
  const [newQ, setNewQ] = useState({
    questionText: '',
    questionType: 'MCQ',
    difficulty: 'MEDIUM',
    bloomLevel: 'UNDERSTAND',
    competency: 'CONCEPTUAL',
    marks: 1,
    negativeMarks: 0.25,
    explanation: '',
    hint: '',
    chapterId: '',
    options: [
      { text: '', isCorrect: true, explanation: '' },
      { text: '', isCorrect: false, explanation: '' },
      { text: '', isCorrect: false, explanation: '' },
      { text: '', isCorrect: false, explanation: '' },
    ],
  });

  useEffect(() => {
    async function load() {
      try {
        const [qData, chData] = await Promise.all([
          api.getQuestions({ search: search || undefined }),
          api.getChapters().catch(() => []),
        ]);
        setQuestions(qData.items || []);
        setChapters(chData || []);
        if (chData && chData.length > 0 && !newQ.chapterId) {
          setNewQ((prev) => ({ ...prev, chapterId: chData[0].id }));
        }
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [search]);

  const handleCreateQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.createQuestion(newQ);
      setShowAddModal(false);
      // Reload questions
      const qData = await api.getQuestions();
      setQuestions(qData.items || []);
      alert('Question added successfully to the CBSE Question Bank!');
    } catch (err: any) {
      alert(err.message || 'Failed to add question');
    }
  };

  return (
    <DashboardLayout role="TEACHER">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 font-display">Master Question Bank</h1>
            <p className="text-xs text-slate-500">
              CBSE & NCERT aligned questions with Bloom's Taxonomy, Competencies, and Option Management.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search questions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 pr-3 py-2 text-xs bg-white border border-slate-200 rounded-xl outline-none focus:border-brand-500"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>

            <button
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-xs transition flex items-center gap-1.5 shrink-0"
            >
              <Plus className="w-4 h-4" />
              <span>Add Question</span>
            </button>
          </div>
        </div>

        {/* Questions Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="divide-y divide-slate-100">
            {questions.map((q, idx) => (
              <div key={q.id} className="p-5 space-y-3 hover:bg-slate-50/60 transition">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-slate-100 text-slate-700 font-extrabold text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold border ${getDifficultyColor(q.difficulty)}`}>
                      {q.difficulty}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold border ${getBloomColor(q.bloomLevel)}`}>
                      Bloom: {q.bloomLevel}
                    </span>
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md text-[11px] font-semibold">
                      {q.competency}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-brand-600">[{q.marks} Mark]</span>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed">{q.questionText}</p>

                {/* Options summary */}
                {q.options && q.options.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                    {q.options.map((opt) => (
                      <div
                        key={opt.id}
                        className={`p-2 rounded-lg border text-[11px] flex items-center justify-between ${
                          opt.isCorrect
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-bold'
                            : 'bg-slate-50 border-slate-200 text-slate-700'
                        }`}
                      >
                        <span>{opt.text}</span>
                        {opt.isCorrect && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Add Question Modal */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl border border-slate-100 space-y-6 my-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="text-lg font-bold text-slate-900 font-display">Author New CBSE Question</h3>
                <button onClick={() => setShowAddModal(false)} className="p-1 text-slate-400 hover:text-slate-600">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleCreateQuestion} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Target Chapter</label>
                  <select
                    value={newQ.chapterId}
                    onChange={(e) => setNewQ({ ...newQ, chapterId: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-brand-500 font-semibold"
                  >
                    {chapters.map((ch) => (
                      <option key={ch.id} value={ch.id}>
                        {ch.subject?.classGrade?.name || 'Class 10'} • {ch.subject?.name} • Ch {ch.chapterNumber}: {ch.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Question Text</label>
                  <textarea
                    rows={3}
                    required
                    value={newQ.questionText}
                    onChange={(e) => setNewQ({ ...newQ, questionText: e.target.value })}
                    placeholder="Enter the CBSE question problem statement..."
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-brand-500"
                  />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Difficulty</label>
                    <select
                      value={newQ.difficulty}
                      onChange={(e) => setNewQ({ ...newQ, difficulty: e.target.value })}
                      className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl outline-none font-semibold"
                    >
                      <option value="EASY">Easy</option>
                      <option value="MEDIUM">Medium</option>
                      <option value="HARD">Hard</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Bloom Level</label>
                    <select
                      value={newQ.bloomLevel}
                      onChange={(e) => setNewQ({ ...newQ, bloomLevel: e.target.value })}
                      className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl outline-none font-semibold"
                    >
                      <option value="REMEMBER">Remember</option>
                      <option value="UNDERSTAND">Understand</option>
                      <option value="APPLY">Apply</option>
                      <option value="ANALYZE">Analyze</option>
                      <option value="EVALUATE">Evaluate</option>
                      <option value="CREATE">Create</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Competency</label>
                    <select
                      value={newQ.competency}
                      onChange={(e) => setNewQ({ ...newQ, competency: e.target.value })}
                      className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl outline-none font-semibold"
                    >
                      <option value="CONCEPTUAL">Conceptual</option>
                      <option value="PROCEDURAL">Procedural</option>
                      <option value="LOGICAL">Logical</option>
                      <option value="CRITICAL">Critical</option>
                      <option value="PROBLEM_SOLVING">Problem Solving</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Marks</label>
                    <input
                      type="number"
                      value={newQ.marks}
                      onChange={(e) => setNewQ({ ...newQ, marks: Number(e.target.value) })}
                      className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl outline-none font-semibold"
                    />
                  </div>
                </div>

                {/* Options for MCQ */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <label className="block font-bold text-slate-700">Options (Select the Radio for Correct Choice)</label>
                  {newQ.options.map((opt, optIdx) => (
                    <div key={optIdx} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="correctChoice"
                        checked={opt.isCorrect}
                        onChange={() => {
                          const updated = newQ.options.map((o, i) => ({
                            ...o,
                            isCorrect: i === optIdx,
                          }));
                          setNewQ({ ...newQ, options: updated });
                        }}
                        className="w-4 h-4 text-brand-600"
                      />
                      <input
                        type="text"
                        required
                        placeholder={`Option ${String.fromCharCode(65 + optIdx)} text...`}
                        value={opt.text}
                        onChange={(e) => {
                          const updated = [...newQ.options];
                          updated[optIdx].text = e.target.value;
                          setNewQ({ ...newQ, options: updated });
                        }}
                        className="flex-1 p-2 bg-slate-50 border border-slate-200 rounded-xl outline-none"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Step-by-Step Explanation</label>
                  <textarea
                    rows={2}
                    value={newQ.explanation}
                    onChange={(e) => setNewQ({ ...newQ, explanation: e.target.value })}
                    placeholder="Explain the step-by-step logic for the answer key..."
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-xl font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl shadow-xs"
                  >
                    Save to Question Bank
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
