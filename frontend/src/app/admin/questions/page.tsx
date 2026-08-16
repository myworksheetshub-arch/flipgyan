'use client';

import React, { useState, useEffect } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { api } from '@/lib/api';
import { Question, ClassGrade, Subject, Chapter } from '@/types';
import {
  Layers,
  Plus,
  Edit,
  Trash2,
  Search,
  CheckCircle,
  X,
  AlertCircle,
  HelpCircle,
  Sparkles,
  Award,
} from 'lucide-react';
import { getDifficultyColor, getBloomColor } from '@/lib/utils';

export default function AdminQuestionsPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [classes, setClasses] = useState<ClassGrade[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);

  // Filter State
  const [selectedClassId, setSelectedClassId] = useState<string>('ALL');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('ALL');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('ALL');
  const [selectedBloom, setSelectedBloom] = useState<string>('ALL');
  const [selectedType, setSelectedType] = useState<string>('ALL');
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState(true);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingQId, setEditingQId] = useState<string | null>(null);

  // Form State
  const [questionText, setQuestionText] = useState('');
  const [questionType, setQuestionType] = useState('MCQ');
  const [difficulty, setDifficulty] = useState('MEDIUM');
  const [bloomLevel, setBloomLevel] = useState('UNDERSTAND');
  const [competency, setCompetency] = useState('CONCEPTUAL');
  const [marks, setMarks] = useState(1);
  const [negativeMarks, setNegativeMarks] = useState(0);
  const [explanation, setExplanation] = useState('');
  const [subjectId, setSubjectId] = useState('');
  const [chapterId, setChapterId] = useState('');

  const [optionsList, setOptionsList] = useState<
    Array<{ text: string; isCorrect: boolean; explanation?: string }>
  >([
    { text: 'Option A', isCorrect: true },
    { text: 'Option B', isCorrect: false },
    { text: 'Option C', isCorrect: false },
    { text: 'Option D', isCorrect: false },
  ]);

  const [saving, setSaving] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    async function initData() {
      try {
        setLoading(true);
        const [qRes, clsRes, subRes] = await Promise.all([
          api.getQuestions(),
          api.getClasses(),
          api.getSubjects(),
        ]);
        setQuestions(qRes.items || []);
        setClasses(clsRes || []);
        setSubjects(subRes || []);
      } catch (err) {
        console.error('Failed to load question bank:', err);
      } finally {
        setLoading(false);
      }
    }
    initData();
  }, []);

  const filteredSubjects = selectedClassId === 'ALL'
    ? subjects
    : subjects.filter((s) => s.classGradeId === selectedClassId || s.classGrade?.id === selectedClassId);

  useEffect(() => {
    async function loadChapters() {
      if (subjectId) {
        const res = await api.getChapters(subjectId);
        setChapters(res || []);
        if (res && res.length > 0 && !chapterId) {
          setChapterId(res[0].id);
        }
      } else {
        const res = await api.getChapters();
        setChapters(res || []);
      }
    }
    loadChapters();
  }, [subjectId]);

  const filteredQuestions = questions.filter((q) => {
    const matchesSearch =
      !search ||
      q.questionText.toLowerCase().includes(search.toLowerCase()) ||
      (q.explanation || '').toLowerCase().includes(search.toLowerCase());

    const matchesDifficulty = selectedDifficulty === 'ALL' || q.difficulty === selectedDifficulty;
    const matchesBloom = selectedBloom === 'ALL' || q.bloomLevel === selectedBloom;
    const matchesType = selectedType === 'ALL' || q.questionType === selectedType;

    const qClassId = q.chapter?.subject?.classGradeId || q.chapter?.subject?.classGrade?.id;
    const matchesClass = selectedClassId === 'ALL' || qClassId === selectedClassId;

    const qSubjectId = q.chapter?.subjectId;
    const matchesSubject = selectedSubjectId === 'ALL' || qSubjectId === selectedSubjectId;

    return matchesSearch && matchesDifficulty && matchesBloom && matchesType && matchesClass && matchesSubject;
  });

  const openCreateModal = () => {
    setEditingQId(null);
    setQuestionText('');
    setQuestionType('MCQ');
    setDifficulty('MEDIUM');
    setBloomLevel('UNDERSTAND');
    setCompetency('CONCEPTUAL');
    setMarks(1);
    setNegativeMarks(0);
    setExplanation('Step-by-step verified solution.');

    const defaultSub = subjects[0]?.id || '';
    setSubjectId(defaultSub);

    setOptionsList([
      { text: 'Option A', isCorrect: true },
      { text: 'Option B', isCorrect: false },
      { text: 'Option C', isCorrect: false },
      { text: 'Option D', isCorrect: false },
    ]);
    setErrorMsg('');
    setIsModalOpen(true);
  };

  const openEditModal = async (q: Question) => {
    setEditingQId(q.id);
    setQuestionText(q.questionText);
    setQuestionType(q.questionType || 'MCQ');
    setDifficulty(q.difficulty || 'MEDIUM');
    setBloomLevel(q.bloomLevel || 'UNDERSTAND');
    setCompetency(q.competency || 'CONCEPTUAL');
    setMarks(q.marks || 1);
    setNegativeMarks(q.negativeMarks || 0);
    setExplanation(q.explanation || '');
    setSubjectId(q.chapter?.subjectId || '');
    setChapterId(q.chapterId || '');

    try {
      const fullQ = await api.getQuestion(q.id);
      if (fullQ.options && fullQ.options.length > 0) {
        setOptionsList(
          fullQ.options.map((o) => ({
            text: o.text,
            isCorrect: !!o.isCorrect,
            explanation: o.explanation,
          }))
        );
      }
    } catch (e) {
      console.warn('Load full question error:', e);
    }

    setErrorMsg('');
    setIsModalOpen(true);
  };

  const handleSaveQuestion = async () => {
    if (!questionText.trim()) {
      setErrorMsg('Question text is required.');
      return;
    }
    if (!chapterId) {
      setErrorMsg('Please select a target Chapter.');
      return;
    }

    const payload = {
      questionText,
      questionType,
      difficulty,
      bloomLevel,
      competency,
      marks: Number(marks),
      negativeMarks: Number(negativeMarks),
      explanation,
      chapterId,
      options: optionsList.map((o, idx) => ({
        text: o.text,
        isCorrect: !!o.isCorrect,
        optionLabel: String.fromCharCode(65 + idx),
        sequence: idx + 1,
      })),
    };

    try {
      setSaving(true);
      setErrorMsg('');
      if (editingQId) {
        const updated = await api.updateQuestion(editingQId, payload);
        setQuestions((prev) => prev.map((q) => (q.id === editingQId ? { ...q, ...updated } : q)));
      } else {
        const created = await api.createQuestion(payload);
        setQuestions((prev) => [created, ...prev]);
      }
      setIsModalOpen(false);
    } catch (err: any) {
      console.error('Failed to save question:', err);
      setErrorMsg(err.message || 'Error saving question.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await api.deleteQuestion(id);
      setQuestions((prev) => prev.filter((q) => q.id !== id));
      setDeletingId(null);
    } catch (err: any) {
      alert('Failed to delete question: ' + (err.message || 'Server error'));
    }
  };

  return (
    <DashboardLayout role="ADMIN">
      <div className="space-y-6 pb-12">
        {/* Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-xs">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 font-display flex items-center gap-2.5">
              <HelpCircle className="w-7 h-7 text-indigo-600" />
              Master Question Bank & Taxonomy Editor
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Authored CBSE questions aligned with Bloom's Taxonomy, NEP 2020 competencies, and PARAKH rubrics.
            </p>
          </div>
          <button
            onClick={openCreateModal}
            className="flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition-all shrink-0"
          >
            <Plus className="w-4 h-4" />
            Add New Question
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative flex-1 min-w-[220px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search question text or solution..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500">Class:</span>
              <select
                value={selectedClassId}
                onChange={(e) => setSelectedClassId(e.target.value)}
                className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:ring-2 focus:ring-indigo-500"
              >
                <option value="ALL">All Classes</option>
                {classes.map((c) => (
                  <option key={c.id} value={c.id}>
                    Class {c.number}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500">Subject:</span>
              <select
                value={selectedSubjectId}
                onChange={(e) => setSelectedSubjectId(e.target.value)}
                className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:ring-2 focus:ring-indigo-500"
              >
                <option value="ALL">All Subjects</option>
                {filteredSubjects.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} ({s.classGrade?.number ? `Class ${s.classGrade.number}` : s.code})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-100">
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-semibold text-slate-400">Difficulty:</span>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-lg text-xs"
              >
                <option value="ALL">All Difficulties</option>
                <option value="EASY">Easy</option>
                <option value="MEDIUM">Medium</option>
                <option value="HARD">Hard</option>
              </select>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-semibold text-slate-400">Bloom Level:</span>
              <select
                value={selectedBloom}
                onChange={(e) => setSelectedBloom(e.target.value)}
                className="px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-lg text-xs"
              >
                <option value="ALL">All Bloom Levels</option>
                <option value="REMEMBER">Remember</option>
                <option value="UNDERSTAND">Understand</option>
                <option value="APPLY">Apply</option>
                <option value="ANALYZE">Analyze</option>
                <option value="EVALUATE">Evaluate</option>
                <option value="CREATE">Create</option>
              </select>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-semibold text-slate-400">Type:</span>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-lg text-xs"
              >
                <option value="ALL">All Question Types</option>
                <option value="MCQ">MCQ</option>
                <option value="TRUE_FALSE">True / False</option>
                <option value="FILL_BLANK">Fill in Blank</option>
                <option value="SHORT_ANSWER">Short Answer</option>
                <option value="CASE_STUDY">Case Study</option>
                <option value="DIAGRAM">Diagram / Map</option>
              </select>
            </div>
          </div>
        </div>

        {/* Questions List */}
        {loading ? (
          <div className="text-center py-16">
            <div className="animate-spin w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full mx-auto mb-3" />
            <p className="text-xs text-slate-500">Loading master question bank...</p>
          </div>
        ) : filteredQuestions.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
            <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-sm font-bold text-slate-700">No Questions Found</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1">
              Adjust your search/filter parameters or click "Add New Question".
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xs divide-y divide-slate-100 overflow-hidden">
            {filteredQuestions.map((q, idx) => (
              <div key={q.id} className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-extrabold text-xs text-slate-400">#{idx + 1}</span>
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${getDifficultyColor(q.difficulty)}`}>
                      {q.difficulty}
                    </span>
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${getBloomColor(q.bloomLevel)}`}>
                      {q.bloomLevel}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-[10px] font-bold border border-indigo-100">
                      {q.questionType} • {q.marks || 1} Marks
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {q.chapter?.subject?.name} (Class {q.chapter?.subject?.classGrade?.number}) • Ch {q.chapter?.chapterNumber}
                    </span>
                  </div>

                  <p className="text-xs font-bold text-slate-900 leading-relaxed">{q.questionText}</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => openEditModal(q)}
                    className="px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <Edit className="w-3.5 h-3.5" />
                    Edit Question
                  </button>

                  {deletingId === q.id ? (
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleDelete(q.id)}
                        className="px-2 py-1 bg-rose-600 text-white text-[10px] font-bold rounded-md"
                      >
                        Confirm
                      </button>
                      <button
                        onClick={() => setDeletingId(null)}
                        className="px-2 py-1 bg-slate-200 text-slate-700 text-[10px] font-bold rounded-md"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setDeletingId(q.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors"
                      title="Delete Question"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* MODAL */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-3xl w-full border border-slate-200 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
              <div className="p-6 bg-slate-900 text-white flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-indigo-400 font-bold">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-extrabold font-display">
                      {editingQId ? 'Edit Question & Options' : 'Add New Question'}
                    </h2>
                    <p className="text-xs text-slate-400">Configure question stem, options, bloom taxonomy & chapter target.</p>
                  </div>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="p-2 text-slate-400 hover:text-white rounded-xl">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {errorMsg && (
                <div className="mx-6 mt-4 p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold rounded-xl flex items-center gap-2 shrink-0">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {errorMsg}
                </div>
              )}

              <div className="p-6 overflow-y-auto space-y-5 flex-1">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Question Text *</label>
                  <textarea
                    rows={3}
                    value={questionText}
                    onChange={(e) => setQuestionText(e.target.value)}
                    placeholder="Enter full question statement..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Subject *</label>
                    <select
                      value={subjectId}
                      onChange={(e) => setSubjectId(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="">Select Subject</option>
                      {subjects.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name} ({s.classGrade?.number ? `Class ${s.classGrade.number}` : s.code})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Chapter *</label>
                    <select
                      value={chapterId}
                      onChange={(e) => setChapterId(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="">Select Chapter</option>
                      {chapters.map((ch) => (
                        <option key={ch.id} value={ch.id}>
                          Ch {ch.chapterNumber}: {ch.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Question Format</label>
                    <select
                      value={questionType}
                      onChange={(e) => setQuestionType(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="MCQ">MCQ (Multiple Choice)</option>
                      <option value="TRUE_FALSE">True / False</option>
                      <option value="FILL_BLANK">Fill in the Blank</option>
                      <option value="SHORT_ANSWER">Short Answer / Subjective</option>
                      <option value="CASE_STUDY">Competency Case Study</option>
                      <option value="DIAGRAM">Diagram / Skill Analysis</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Difficulty Level</label>
                    <select
                      value={difficulty}
                      onChange={(e) => setDifficulty(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="EASY">Easy</option>
                      <option value="MEDIUM">Medium</option>
                      <option value="HARD">Hard</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Bloom's Taxonomy Level</label>
                    <select
                      value={bloomLevel}
                      onChange={(e) => setBloomLevel(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:ring-2 focus:ring-indigo-500"
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
                    <label className="block text-xs font-bold text-slate-700 mb-1">Marks</label>
                    <input
                      type="number"
                      value={marks}
                      onChange={(e) => setMarks(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                {/* Options Builder */}
                <div className="pt-4 border-t border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-bold text-slate-700">Answer Options</label>
                    <button
                      type="button"
                      onClick={() =>
                        setOptionsList([
                          ...optionsList,
                          { text: `Option ${String.fromCharCode(65 + optionsList.length)}`, isCorrect: false },
                        ])
                      }
                      className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-[11px] font-bold rounded-lg hover:bg-indigo-100"
                    >
                      + Add Option
                    </button>
                  </div>

                  {optionsList.map((opt, oIdx) => (
                    <div key={oIdx} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                      <input
                        type="radio"
                        name="correct-opt-group"
                        checked={opt.isCorrect}
                        onChange={() => {
                          const updated = [...optionsList];
                          updated.forEach((o, i) => {
                            o.isCorrect = i === oIdx;
                          });
                          setOptionsList(updated);
                        }}
                        className="w-4 h-4 text-indigo-600"
                      />
                      <span className="text-xs font-bold text-slate-500 w-5">{String.fromCharCode(65 + oIdx)}.</span>
                      <input
                        type="text"
                        value={opt.text}
                        onChange={(e) => {
                          const updated = [...optionsList];
                          updated[oIdx].text = e.target.value;
                          setOptionsList(updated);
                        }}
                        placeholder={`Option ${String.fromCharCode(65 + oIdx)} Text`}
                        className="flex-1 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs"
                      />
                      {optionsList.length > 2 && (
                        <button
                          type="button"
                          onClick={() => setOptionsList(optionsList.filter((_, i) => i !== oIdx))}
                          className="text-slate-400 hover:text-rose-600 p-1"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Step-by-Step Solution Explanation</label>
                  <textarea
                    rows={3}
                    value={explanation}
                    onChange={(e) => setExplanation(e.target.value)}
                    placeholder="Provide full marking scheme and step-by-step explanation..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveQuestion}
                  disabled={saving}
                  className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-2 disabled:opacity-50"
                >
                  {saving ? 'Saving...' : editingQId ? 'Update Question' : 'Create Question'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
