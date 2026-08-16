'use client';

import React, { useState, useEffect } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { api } from '@/lib/api';
import { Worksheet, ClassGrade, Subject, Chapter, Question } from '@/types';
import {
  FileSpreadsheet,
  Plus,
  Edit,
  Trash2,
  Search,
  CheckCircle,
  X,
  Clock,
  Award,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';

export default function AdminWorksheetsPage() {
  const [worksheets, setWorksheets] = useState<Worksheet[]>([]);
  const [classes, setClasses] = useState<ClassGrade[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);

  const [selectedClassId, setSelectedClassId] = useState<string>('ALL');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('ALL');
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState(true);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingWsId, setEditingWsId] = useState<string | null>(null);

  // Form State
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [instructions, setInstructions] = useState('');
  const [type, setType] = useState('PRACTICE');
  const [difficulty, setDifficulty] = useState('MEDIUM');
  const [durationMinutes, setDurationMinutes] = useState(30);
  const [totalMarks, setTotalMarks] = useState(30);
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
        const [wsRes, classesRes, subjectsRes] = await Promise.all([
          api.getWorksheets(),
          api.getClasses(),
          api.getSubjects(),
        ]);
        setWorksheets(wsRes || []);
        setClasses(classesRes || []);
        setSubjects(subjectsRes || []);
      } catch (err: any) {
        console.error('Failed to load admin worksheets:', err);
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

  const filteredWorksheets = worksheets.filter((ws) => {
    const matchesSearch =
      !search ||
      ws.title.toLowerCase().includes(search.toLowerCase()) ||
      (ws.description || '').toLowerCase().includes(search.toLowerCase());

    const wsClassId = ws.subject?.classGradeId || ws.subject?.classGrade?.id;
    const matchesClass = selectedClassId === 'ALL' || wsClassId === selectedClassId;

    const wsSubjectId = ws.subjectId;
    const matchesSubject = selectedSubjectId === 'ALL' || wsSubjectId === selectedSubjectId;

    return matchesSearch && matchesClass && matchesSubject;
  });

  const openCreateModal = () => {
    setEditingWsId(null);
    setTitle('');
    setDescription('');
    setInstructions('Read all questions carefully. Show step-by-step working for full marks.');
    setType('PRACTICE');
    setDifficulty('MEDIUM');
    setDurationMinutes(30);
    setTotalMarks(30);

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

  const openEditModal = async (ws: Worksheet) => {
    setEditingWsId(ws.id);
    setTitle(ws.title);
    setDescription(ws.description || '');
    setInstructions(ws.instructions || '');
    setType(ws.type || 'PRACTICE');
    setDifficulty(ws.difficulty || 'MEDIUM');
    setDurationMinutes(ws.durationMinutes || 30);
    setTotalMarks(ws.totalMarks || 30);
    setSubjectId(ws.subjectId || '');
    setChapterId(ws.chapterId || '');

    try {
      // Load detailed worksheet with questions
      const fullWs = await api.getWorksheet(ws.id);
      if (fullWs.questions && fullWs.questions.length > 0) {
        const mappedQs = fullWs.questions.map((wq: any) => ({
          questionText: wq.question?.questionText || '',
          questionType: wq.question?.questionType || 'MCQ',
          marks: wq.marks || 1,
          explanation: wq.question?.explanation || '',
          options: (wq.question?.options || []).map((o: any) => ({
            text: o.text,
            isCorrect: !!o.isCorrect,
          })),
        }));
        setCustomQuestions(mappedQs);
      }
    } catch (e) {
      console.warn('Full worksheet load error:', e);
    }

    setErrorMsg('');
    setIsModalOpen(true);
  };

  const handleSaveWorksheet = async () => {
    if (!title.trim()) {
      setErrorMsg('Worksheet Title is required.');
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
      instructions,
      type,
      difficulty,
      durationMinutes: Number(durationMinutes),
      totalMarks: Number(totalMarks),
      totalQuestions: customQuestions.length,
      chapterId,
      subjectId,
      customQuestions,
    };

    try {
      setSaving(true);
      setErrorMsg('');
      if (editingWsId) {
        const updated = await api.updateWorksheet(editingWsId, payload);
        setWorksheets((prev) => prev.map((w) => (w.id === editingWsId ? { ...w, ...updated } : w)));
      } else {
        const created = await api.createWorksheet(payload);
        setWorksheets((prev) => [created, ...prev]);
      }
      setIsModalOpen(false);
    } catch (err: any) {
      console.error('Failed to save worksheet:', err);
      setErrorMsg(err.message || 'Error saving worksheet.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await api.deleteWorksheet(id);
      setWorksheets((prev) => prev.filter((w) => w.id !== id));
      setDeletingId(null);
    } catch (err: any) {
      alert('Failed to delete worksheet: ' + (err.message || 'Server error'));
    }
  };

  return (
    <DashboardLayout role="ADMIN">
      <div className="space-y-6 pb-12">
        {/* Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-xs">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 font-display flex items-center gap-2.5">
              <FileSpreadsheet className="w-7 h-7 text-emerald-600" />
              Worksheets Registry & Editor
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Create, edit, and assign CBSE worksheets with customizable questions, mark schemes, and printable layouts.
            </p>
          </div>
          <button
            onClick={openCreateModal}
            className="flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-all shrink-0"
          >
            <Plus className="w-4 h-4" />
            Add New Worksheet
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search worksheets title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500">Class:</span>
            <select
              value={selectedClassId}
              onChange={(e) => setSelectedClassId(e.target.value)}
              className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:ring-2 focus:ring-emerald-500"
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
              className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:ring-2 focus:ring-emerald-500"
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

        {/* Worksheets Grid */}
        {loading ? (
          <div className="text-center py-16">
            <div className="animate-spin w-8 h-8 border-4 border-emerald-600 border-t-transparent rounded-full mx-auto mb-3" />
            <p className="text-xs text-slate-500">Loading worksheets...</p>
          </div>
        ) : filteredWorksheets.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
            <FileSpreadsheet className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-sm font-bold text-slate-700">No Worksheets Found</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1">
              Click "Add New Worksheet" to build a worksheet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredWorksheets.map((ws) => (
              <div
                key={ws.id}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-[11px] font-bold rounded-lg border border-emerald-100">
                      {ws.subject?.name || 'Subject'} • Ch {ws.chapter?.chapterNumber || 1}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      Class {ws.subject?.classGrade?.number || 7}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 line-clamp-1">{ws.title}</h3>

                  <div className="flex items-center gap-4 text-xs text-slate-500 font-medium pt-1">
                    <span className="flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-amber-500" />
                      {ws.totalMarks} Marks
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-500" />
                      {ws.durationMinutes} mins
                    </span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => openEditModal(ws)}
                    className="px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <Edit className="w-3.5 h-3.5" />
                    Edit Worksheet
                  </button>

                  {deletingId === ws.id ? (
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleDelete(ws.id)}
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
                      onClick={() => setDeletingId(ws.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors"
                      title="Delete Worksheet"
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
                  <div className="w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-400/40 flex items-center justify-center text-emerald-400 font-bold">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-extrabold font-display">
                      {editingWsId ? 'Edit Worksheet Details' : 'Add New Worksheet'}
                    </h2>
                    <p className="text-xs text-slate-400">Configure duration, difficulty, marks, and custom questions.</p>
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
                    <label className="block text-xs font-bold text-slate-700 mb-1">Worksheet Title *</label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="e.g. Master Worksheet 1: Integers Properties & Sign Rules"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Subject *</label>
                    <select
                      value={subjectId}
                      onChange={(e) => setSubjectId(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:ring-2 focus:ring-emerald-500"
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
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:ring-2 focus:ring-emerald-500"
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
                    <label className="block text-xs font-bold text-slate-700 mb-1">Worksheet Type</label>
                    <select
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="PRACTICE">Standard Practice</option>
                      <option value="COMPETENCY">Competency Based (NEP 2020)</option>
                      <option value="HOTS">HOTS (High Order Thinking Skills)</option>
                      <option value="CASE_STUDY">Case Study Based</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Difficulty</label>
                    <select
                      value={difficulty}
                      onChange={(e) => setDifficulty(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="EASY">Easy</option>
                      <option value="MEDIUM">Medium</option>
                      <option value="HARD">Hard</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Time Limit (Minutes)</label>
                    <input
                      type="number"
                      value={durationMinutes}
                      onChange={(e) => setDurationMinutes(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Total Marks</label>
                    <input
                      type="number"
                      value={totalMarks}
                      onChange={(e) => setTotalMarks(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                {/* Custom Questions Section */}
                <div className="pt-4 border-t border-slate-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Worksheet Questions List ({customQuestions.length})</h4>
                      <p className="text-[11px] text-slate-400">Add questions or rely on auto-populated chapter questions.</p>
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
                      className="px-3 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-lg hover:bg-emerald-100"
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
                        placeholder="State the question text..."
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs"
                      />

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-600 mb-1">Question Type</label>
                          <select
                            value={q.questionType}
                            onChange={(e) => {
                              const updated = [...customQuestions];
                              updated[idx].questionType = e.target.value;
                              setCustomQuestions(updated);
                            }}
                            className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs"
                          >
                            <option value="MCQ">MCQ</option>
                            <option value="TRUE_FALSE">True / False</option>
                            <option value="SHORT_ANSWER">Short Answer / Subjective</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[11px] font-semibold text-slate-600 mb-1">Marks</label>
                          <input
                            type="number"
                            value={q.marks}
                            onChange={(e) => {
                              const updated = [...customQuestions];
                              updated[idx].marks = Number(e.target.value);
                              setCustomQuestions(updated);
                            }}
                            className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs"
                          />
                        </div>
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
                  onClick={handleSaveWorksheet}
                  disabled={saving}
                  className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-2 disabled:opacity-50"
                >
                  {saving ? 'Saving...' : editingWsId ? 'Update Worksheet' : 'Create Worksheet'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
