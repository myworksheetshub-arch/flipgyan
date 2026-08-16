'use client';

import React, { useState, useEffect } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { api } from '@/lib/api';
import { Quiz, ClassGrade, Subject, Chapter } from '@/types';
import {
  HelpCircle,
  Plus,
  Edit,
  Trash2,
  Search,
  CheckCircle,
  X,
  Clock,
  Award,
  AlertCircle,
  Target,
} from 'lucide-react';

export default function AdminQuizzesPage() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [classes, setClasses] = useState<ClassGrade[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);

  const [selectedClassId, setSelectedClassId] = useState<string>('ALL');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('ALL');
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState(true);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingQuizId, setEditingQuizId] = useState<string | null>(null);

  // Form State
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [durationMinutes, setDurationMinutes] = useState(15);
  const [totalMarks, setTotalMarks] = useState(10);
  const [passMarks, setPassMarks] = useState(5);
  const [difficulty, setDifficulty] = useState('MEDIUM');
  const [chapterId, setChapterId] = useState('');
  const [subjectId, setSubjectId] = useState('');

  // Questions State
  const [customQuestions, setCustomQuestions] = useState<
    Array<{
      questionText: string;
      questionType: string;
      marks: number;
      explanation: string;
      options: Array<{ text: string; isCorrect: boolean }>;
    }>
  >([
    {
      questionText: '',
      questionType: 'MCQ',
      marks: 1,
      explanation: '',
      options: [
        { text: 'Option A', isCorrect: true },
        { text: 'Option B', isCorrect: false },
        { text: 'Option C', isCorrect: false },
        { text: 'Option D', isCorrect: false },
      ],
    },
  ]);

  const [saving, setSaving] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Delete State
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    async function initData() {
      try {
        setLoading(true);
        const [qzRes, classesRes, subjectsRes] = await Promise.all([
          api.getQuizzes(),
          api.getClasses(),
          api.getSubjects(),
        ]);
        setQuizzes(qzRes || []);
        setClasses(classesRes || []);
        setSubjects(subjectsRes || []);
      } catch (err: any) {
        console.error('Failed to load admin quizzes:', err);
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

  const filteredQuizzes = quizzes.filter((qz) => {
    const matchesSearch =
      !search ||
      qz.title.toLowerCase().includes(search.toLowerCase()) ||
      (qz.description || '').toLowerCase().includes(search.toLowerCase());

    const qzClassId = qz.subject?.classGradeId || qz.subject?.classGrade?.id;
    const matchesClass = selectedClassId === 'ALL' || qzClassId === selectedClassId;

    const qzSubjectId = qz.subjectId;
    const matchesSubject = selectedSubjectId === 'ALL' || qzSubjectId === selectedSubjectId;

    return matchesSearch && matchesClass && matchesSubject;
  });

  const openCreateModal = () => {
    setEditingQuizId(null);
    setTitle('');
    setDescription('Timed chapter practice quiz to evaluate student mastery.');
    setDurationMinutes(15);
    setTotalMarks(10);
    setPassMarks(5);
    setDifficulty('MEDIUM');

    const defaultSub = subjects[0]?.id || '';
    setSubjectId(defaultSub);

    setCustomQuestions([
      {
        questionText: '',
        questionType: 'MCQ',
        marks: 1,
        explanation: '',
        options: [
          { text: 'Option A', isCorrect: true },
          { text: 'Option B', isCorrect: false },
          { text: 'Option C', isCorrect: false },
          { text: 'Option D', isCorrect: false },
        ],
      },
    ]);
    setErrorMsg('');
    setIsModalOpen(true);
  };

  const openEditModal = async (qz: Quiz) => {
    setEditingQuizId(qz.id);
    setTitle(qz.title);
    setDescription(qz.description || '');
    setDurationMinutes(qz.durationMinutes || 15);
    setTotalMarks(qz.totalMarks || 10);
    setPassMarks(qz.passMarks || 5);
    setDifficulty(qz.difficulty || 'MEDIUM');
    setSubjectId(qz.subjectId || '');
    setChapterId(qz.chapterId || '');

    try {
      const fullQz = await api.getQuiz(qz.id);
      if (fullQz.questions && fullQz.questions.length > 0) {
        const mappedQs = fullQz.questions.map((qq: any) => ({
          questionText: qq.question?.questionText || '',
          questionType: qq.question?.questionType || 'MCQ',
          marks: qq.question?.marks || 1,
          explanation: qq.question?.explanation || '',
          options: (qq.question?.options || []).map((o: any) => ({
            text: o.text,
            isCorrect: !!o.isCorrect,
          })),
        }));
        setCustomQuestions(mappedQs);
      }
    } catch (e) {
      console.warn('Full quiz load error:', e);
    }

    setErrorMsg('');
    setIsModalOpen(true);
  };

  const handleSaveQuiz = async () => {
    if (!title.trim()) {
      setErrorMsg('Quiz Title is required.');
      return;
    }
    if (!subjectId) {
      setErrorMsg('Please select a Subject.');
      return;
    }
    if (!chapterId) {
      setErrorMsg('Please select a Chapter.');
      return;
    }

    const payload = {
      title,
      description,
      durationMinutes: Number(durationMinutes),
      totalMarks: Number(totalMarks),
      passMarks: Number(passMarks),
      difficulty,
      chapterId,
      subjectId,
      customQuestions,
    };

    try {
      setSaving(true);
      setErrorMsg('');
      if (editingQuizId) {
        const updated = await api.updateQuiz(editingQuizId, payload);
        setQuizzes((prev) => prev.map((q) => (q.id === editingQuizId ? { ...q, ...updated } : q)));
      } else {
        const created = await api.createQuiz(payload);
        setQuizzes((prev) => [created, ...prev]);
      }
      setIsModalOpen(false);
    } catch (err: any) {
      console.error('Failed to save quiz:', err);
      setErrorMsg(err.message || 'Error saving quiz.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await api.deleteQuiz(id);
      setQuizzes((prev) => prev.filter((q) => q.id !== id));
      setDeletingId(null);
    } catch (err: any) {
      alert('Failed to delete quiz: ' + (err.message || 'Server error'));
    }
  };

  return (
    <DashboardLayout role="ADMIN">
      <div className="space-y-6 pb-12">
        {/* Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-xs">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 font-display flex items-center gap-2.5">
              <HelpCircle className="w-7 h-7 text-sky-600" />
              System Quizzes Registry & Builder
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Add new timed quizzes, configure pass criteria, and manage question items.
            </p>
          </div>
          <button
            onClick={openCreateModal}
            className="flex items-center justify-center gap-2 px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-md transition-all shrink-0"
          >
            <Plus className="w-4 h-4" />
            Add New Quiz
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search quiz title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500">Class:</span>
            <select
              value={selectedClassId}
              onChange={(e) => setSelectedClassId(e.target.value)}
              className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:ring-2 focus:ring-sky-500"
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
              className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:ring-2 focus:ring-sky-500"
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

        {/* Quizzes Grid */}
        {loading ? (
          <div className="text-center py-16">
            <div className="animate-spin w-8 h-8 border-4 border-sky-600 border-t-transparent rounded-full mx-auto mb-3" />
            <p className="text-xs text-slate-500">Loading quizzes...</p>
          </div>
        ) : filteredQuizzes.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
            <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-sm font-bold text-slate-700">No Quizzes Found</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1">
              Click "Add New Quiz" to build an interactive quiz.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredQuizzes.map((qz) => (
              <div
                key={qz.id}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 bg-sky-50 text-sky-700 text-[11px] font-bold rounded-lg border border-sky-100">
                      {qz.subject?.name || 'Subject'} • Ch {qz.chapter?.chapterNumber || 1}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      Class {qz.subject?.classGrade?.number || 7}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 line-clamp-1">{qz.title}</h3>

                  <div className="flex items-center gap-4 text-xs text-slate-500 font-medium pt-1">
                    <span className="flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-amber-500" />
                      {qz.totalMarks} Marks
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-indigo-500" />
                      {qz.durationMinutes} mins
                    </span>
                    <span className="flex items-center gap-1">
                      <Target className="w-3.5 h-3.5 text-emerald-500" />
                      Pass: {qz.passMarks || 5}
                    </span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => openEditModal(qz)}
                    className="px-3 py-1.5 bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <Edit className="w-3.5 h-3.5" />
                    Edit Quiz
                  </button>

                  {deletingId === qz.id ? (
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleDelete(qz.id)}
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
                      onClick={() => setDeletingId(qz.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors"
                      title="Delete Quiz"
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
            <div className="bg-white rounded-3xl max-w-4xl w-full border border-slate-200 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
              <div className="p-6 bg-slate-900 text-white flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-600/30 border border-sky-400/40 flex items-center justify-center text-sky-400 font-bold">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-extrabold font-display">
                      {editingQuizId ? 'Edit Quiz Details' : 'Add New Quiz'}
                    </h2>
                    <p className="text-xs text-slate-400">Configure quiz parameters, passing mark, and quiz questions.</p>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1">Quiz Title *</label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="e.g. Integers Properties & Sign Rules Practice Quiz"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Subject *</label>
                    <select
                      value={subjectId}
                      onChange={(e) => setSubjectId(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:ring-2 focus:ring-sky-500"
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
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:ring-2 focus:ring-sky-500"
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
                    <label className="block text-xs font-bold text-slate-700 mb-1">Time Limit (Minutes)</label>
                    <input
                      type="number"
                      value={durationMinutes}
                      onChange={(e) => setDurationMinutes(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Difficulty Level</label>
                    <select
                      value={difficulty}
                      onChange={(e) => setDifficulty(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:ring-2 focus:ring-sky-500"
                    >
                      <option value="EASY">Easy</option>
                      <option value="MEDIUM">Medium</option>
                      <option value="HARD">Hard</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Total Marks</label>
                    <input
                      type="number"
                      value={totalMarks}
                      onChange={(e) => setTotalMarks(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Passing Marks</label>
                    <input
                      type="number"
                      value={passMarks}
                      onChange={(e) => setPassMarks(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>

                {/* Questions Builder */}
                <div className="pt-4 border-t border-slate-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Quiz Questions ({customQuestions.length})</h4>
                      <p className="text-[11px] text-slate-400">Configure questions and select correct answer options.</p>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setCustomQuestions([
                          ...customQuestions,
                          {
                            questionText: '',
                            questionType: 'MCQ',
                            marks: 1,
                            explanation: '',
                            options: [
                              { text: 'Option A', isCorrect: true },
                              { text: 'Option B', isCorrect: false },
                            ],
                          },
                        ])
                      }
                      className="px-3 py-1.5 bg-sky-50 text-sky-700 text-xs font-bold rounded-lg hover:bg-sky-100"
                    >
                      + Add Question
                    </button>
                  </div>

                  {customQuestions.map((q, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-slate-700">Q{idx + 1}. Question Text</span>
                        {customQuestions.length > 1 && (
                          <button
                            type="button"
                            onClick={() => setCustomQuestions(customQuestions.filter((_, i) => i !== idx))}
                            className="text-slate-400 hover:text-rose-600"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>

                      <textarea
                        rows={2}
                        value={q.questionText}
                        onChange={(e) => {
                          const updated = [...customQuestions];
                          updated[idx].questionText = e.target.value;
                          setCustomQuestions(updated);
                        }}
                        placeholder="State the quiz question text..."
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs"
                      />

                      {/* Options */}
                      <div className="space-y-2">
                        <label className="block text-[11px] font-semibold text-slate-600">Answer Choice Options</label>
                        {q.options.map((opt, oIdx) => (
                          <div key={oIdx} className="flex items-center gap-2">
                            <input
                              type="radio"
                              name={`correct-opt-${idx}`}
                              checked={opt.isCorrect}
                              onChange={() => {
                                const updated = [...customQuestions];
                                updated[idx].options.forEach((o, i) => {
                                  o.isCorrect = i === oIdx;
                                });
                                setCustomQuestions(updated);
                              }}
                              className="w-4 h-4 text-sky-600"
                            />
                            <input
                              type="text"
                              value={opt.text}
                              onChange={(e) => {
                                const updated = [...customQuestions];
                                updated[idx].options[oIdx].text = e.target.value;
                                setCustomQuestions(updated);
                              }}
                              placeholder={`Option ${oIdx + 1}`}
                              className="flex-1 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
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
                  onClick={handleSaveQuiz}
                  disabled={saving}
                  className="px-6 py-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-2 disabled:opacity-50"
                >
                  {saving ? 'Saving...' : editingQuizId ? 'Update Quiz' : 'Create Quiz'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
