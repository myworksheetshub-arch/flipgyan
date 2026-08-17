'use client';

import React, { useState, useEffect, useRef } from 'react';
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
  Upload,
  Download,
  Clock,
  XCircle,
  CheckCircle2,
  FileSpreadsheet,
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
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState(true);

  // Modal State (Single Question)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingQId, setEditingQId] = useState<string | null>(null);

  // Modal State (JSON Bulk Upload)
  const [showJsonModal, setShowJsonModal] = useState(false);
  const [jsonText, setJsonText] = useState('');
  const [jsonParsedQuestions, setJsonParsedQuestions] = useState<any[]>([]);
  const [jsonParseError, setJsonParseError] = useState('');
  const [jsonImporting, setJsonImporting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState<number>(50);

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      const params: any = {
        take: pageSize,
        skip: (page - 1) * pageSize,
      };
      if (selectedClassId !== 'ALL') params.classId = selectedClassId;
      if (selectedSubjectId !== 'ALL') params.subjectId = selectedSubjectId;
      if (selectedDifficulty !== 'ALL') params.difficulty = selectedDifficulty;
      if (selectedBloom !== 'ALL') params.bloomLevel = selectedBloom;
      if (selectedType !== 'ALL') params.questionType = selectedType;
      if (selectedStatus !== 'ALL') params.status = selectedStatus;
      if (search.trim()) params.search = search.trim();

      const qRes = await api.getQuestions(params);
      setQuestions(qRes.items || []);
      setTotalCount(qRes.total || (qRes.items ? qRes.items.length : 0));
    } catch (err) {
      console.error('Failed to load questions:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    async function initData() {
      try {
        const [clsRes, subRes] = await Promise.all([
          api.getClasses(),
          api.getSubjects(),
        ]);
        setClasses(clsRes || []);
        setSubjects(subRes || []);
      } catch (err) {
        console.error('Failed to load classes and subjects:', err);
      }
    }
    initData();
  }, []);

  // Reset to page 1 on filter change
  useEffect(() => {
    setPage(1);
  }, [selectedClassId, selectedSubjectId, selectedDifficulty, selectedBloom, selectedType, selectedStatus, search, pageSize]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchQuestions();
    }, 200);
    return () => clearTimeout(timer);
  }, [selectedClassId, selectedSubjectId, selectedDifficulty, selectedBloom, selectedType, selectedStatus, search, page, pageSize]);

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
            text: o.text || (o as any).optionText || '',
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
      status: 'APPROVED',
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

  const handleApprove = async (id: string) => {
    try {
      await api.approveQuestion(id);
      setQuestions((prev) => prev.map((q) => (q.id === id ? { ...q, status: 'APPROVED' as any } : q)));
      alert('Question approved and published to the master question bank!');
    } catch (err: any) {
      alert('Failed to approve question: ' + (err.message || 'Server error'));
    }
  };

  const handleReject = async (id: string) => {
    const reason = prompt('Enter rejection reason or feedback for the teacher:', 'Needs revisions to question text or answer options.');
    if (reason === null) return;

    try {
      await api.rejectQuestion(id, reason);
      setQuestions((prev) => prev.map((q) => (q.id === id ? { ...q, status: 'REJECTED' as any } : q)));
      alert('Question status updated to Rejected.');
    } catch (err: any) {
      alert('Failed to reject question: ' + (err.message || 'Server error'));
    }
  };

  // JSON Import
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      setJsonText(content);
      parseJsonContent(content);
    };
    reader.readAsText(file);
  };

  const parseJsonContent = (text: string) => {
    try {
      setJsonParseError('');
      if (!text.trim()) {
        setJsonParsedQuestions([]);
        return;
      }
      const parsed = JSON.parse(text);
      const list = Array.isArray(parsed) ? parsed : parsed.questions;
      if (!Array.isArray(list)) {
        throw new Error('JSON must be an array of question objects.');
      }
      setJsonParsedQuestions(list);
    } catch (err: any) {
      setJsonParseError(err.message || 'Invalid JSON format');
      setJsonParsedQuestions([]);
    }
  };

  const handleJsonBulkSubmit = async () => {
    if (jsonParsedQuestions.length === 0) return;
    try {
      setJsonImporting(true);
      await api.bulkCreateQuestions(jsonParsedQuestions);
      setShowJsonModal(false);
      setJsonText('');
      setJsonParsedQuestions([]);
      fetchQuestions();
      alert(`Successfully imported ${jsonParsedQuestions.length} questions!`);
    } catch (err: any) {
      setJsonParseError(err.message || 'Failed to bulk import questions.');
    } finally {
      setJsonImporting(false);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'APPROVED':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle className="w-3 h-3 text-emerald-600" />
            Approved
          </span>
        );
      case 'REJECTED':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-rose-50 text-rose-700 border border-rose-200">
            <XCircle className="w-3 h-3 text-rose-600" />
            Rejected
          </span>
        );
      case 'REVIEW':
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-50 text-amber-700 border border-amber-200 animate-pulse">
            <Clock className="w-3 h-3 text-amber-600" />
            Pending Review
          </span>
        );
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
              Master Question Bank & Review Studio
            </h1>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-[11px] font-extrabold border border-indigo-200">
                {totalCount} Total Questions
              </span>
              <p className="text-xs text-slate-500">
                Review and approve teacher submissions, manage taxonomy, and bulk import CBSE questions.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => setShowJsonModal(true)}
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl shadow-xs transition"
            >
              <Upload className="w-4 h-4 text-slate-600" />
              <span>Import JSON</span>
            </button>

            <button
              onClick={openCreateModal}
              className="flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition"
            >
              <Plus className="w-4 h-4" />
              <span>Add Question</span>
            </button>
          </div>
        </div>

        {/* Status Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {[
            { label: 'All Questions', value: 'ALL' },
            { label: 'Pending Review', value: 'REVIEW' },
            { label: 'Approved', value: 'APPROVED' },
            { label: 'Rejected', value: 'REJECTED' },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setSelectedStatus(tab.value)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedStatus === tab.value
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
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
                className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700"
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
                className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700"
              >
                <option value="ALL">All Subjects</option>
                {filteredSubjects.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} ({s.classGrade?.number ? `Class ${s.classGrade.number}` : s.code})
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500">Type:</span>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700"
              >
                <option value="ALL">All Types</option>
                <option value="MCQ">MCQ</option>
                <option value="TRUE_FALSE">True / False</option>
                <option value="ASSERTION_REASON">Assertion & Reason</option>
                <option value="FILL_IN_BLANK">Fill in Blank</option>
                <option value="SHORT_ANSWER">Short Answer</option>
                <option value="LONG_ANSWER">Long Answer</option>
                <option value="CASE_BASED">Case Study</option>
                <option value="DIAGRAM_BASED">Diagram Based</option>
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
        ) : questions.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
            <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-sm font-bold text-slate-700">No Questions Found</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1">
              Adjust your search/filter parameters or click "Add Question".
            </p>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xs divide-y divide-slate-100 overflow-hidden">
              {questions.map((q, idx) => (
                <div key={q.id} className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-extrabold text-xs text-slate-400">#{(page - 1) * pageSize + idx + 1}</span>
                      {getStatusBadge(q.status)}
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
                        {q.chapter?.subject?.name} (Class {q.chapter?.subject?.classGrade?.number}) • Ch {q.chapter?.chapterNumber}: {q.chapter?.title || q.chapter?.name}
                      </span>
                    </div>

                    <p className="text-xs font-bold text-slate-900 leading-relaxed whitespace-pre-wrap">{q.questionText}</p>

                    {q.options && q.options.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                        {q.options.map((opt) => (
                          <div
                            key={opt.id}
                            className={`p-2 rounded-lg border text-[11px] flex items-center justify-between ${
                              opt.isCorrect
                                ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-bold'
                                : 'bg-slate-50 border-slate-200 text-slate-700'
                            }`}
                          >
                            <span>
                              <strong>{opt.optionLabel || ''}.</strong> {opt.text || opt.optionText}
                            </span>
                            {opt.isCorrect && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {/* Review Actions for Pending or Rejected Items */}
                    {q.status === 'REVIEW' && (
                      <>
                        <button
                          onClick={() => handleApprove(q.id)}
                          className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1"
                        >
                          <CheckCircle className="w-3.5 h-3.5" />
                          Approve
                        </button>

                        <button
                          onClick={() => handleReject(q.id)}
                          className="px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold rounded-lg transition-colors flex items-center gap-1"
                        >
                          <XCircle className="w-3.5 h-3.5" />
                          Reject
                        </button>
                      </>
                    )}

                    <button
                      onClick={() => openEditModal(q)}
                      className="px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <Edit className="w-3.5 h-3.5" />
                      Edit
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

            {/* Pagination Controls */}
            {totalCount > 0 && (
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
                <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                  <span>
                    Showing <strong className="text-slate-900">{Math.min((page - 1) * pageSize + 1, totalCount)}</strong> to{' '}
                    <strong className="text-slate-900">{Math.min(page * pageSize, totalCount)}</strong> of{' '}
                    <strong className="text-indigo-600 font-bold">{totalCount}</strong> questions
                  </span>

                  <div className="flex items-center gap-1.5 pl-3 border-l border-slate-200">
                    <span className="text-[11px] text-slate-400 font-semibold">Per page:</span>
                    <select
                      value={pageSize}
                      onChange={(e) => setPageSize(Number(e.target.value))}
                      className="px-2 py-1 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700"
                    >
                      <option value={50}>50</option>
                      <option value={100}>100</option>
                      <option value={250}>250</option>
                      <option value={500}>500</option>
                      <option value={2000}>All ({totalCount})</option>
                    </select>
                  </div>
                </div>

                {/* Page Buttons */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setPage(1)}
                    disabled={page <= 1}
                    className="px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  >
                    « First
                  </button>
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page <= 1}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  >
                    ‹ Prev
                  </button>

                  <div className="flex items-center gap-1 px-1">
                    {Array.from({ length: Math.min(5, Math.ceil(totalCount / pageSize)) }, (_, i) => {
                      const totalPages = Math.ceil(totalCount / pageSize);
                      let pageNum = page;
                      if (page <= 3) {
                        pageNum = i + 1;
                      } else if (page >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = page - 2 + i;
                      }
                      if (pageNum < 1 || pageNum > totalPages) return null;

                      return (
                        <button
                          key={pageNum}
                          onClick={() => setPage(pageNum)}
                          className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                            page === pageNum
                              ? 'bg-indigo-600 text-white shadow-xs'
                              : 'text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => setPage((p) => Math.min(Math.ceil(totalCount / pageSize), p + 1))}
                    disabled={page >= Math.ceil(totalCount / pageSize)}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  >
                    Next ›
                  </button>
                  <button
                    onClick={() => setPage(Math.ceil(totalCount / pageSize))}
                    disabled={page >= Math.ceil(totalCount / pageSize)}
                    className="px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  >
                    Last »
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        {/* SINGLE QUESTION MODAL */}
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
                      {editingQId ? 'Edit CBSE Question' : 'Author Master Question'}
                    </h2>
                    <p className="text-xs text-slate-400">Published directly to the Master Question Bank</p>
                  </div>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-4 flex-1">
                {errorMsg && (
                  <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Subject</label>
                    <select
                      value={subjectId}
                      onChange={(e) => setSubjectId(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold"
                    >
                      {subjects.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name} ({s.classGrade?.number ? `Class ${s.classGrade.number}` : s.code})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Chapter</label>
                    <select
                      value={chapterId}
                      onChange={(e) => setChapterId(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold"
                    >
                      {chapters.map((ch) => (
                        <option key={ch.id} value={ch.id}>
                          Ch {ch.chapterNumber || (ch as any).chapterNo}: {ch.title || ch.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Question Text</label>
                  <textarea
                    rows={3}
                    value={questionText}
                    onChange={(e) => setQuestionText(e.target.value)}
                    placeholder="Type question statement..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Type</label>
                    <select
                      value={questionType}
                      onChange={(e) => setQuestionType(e.target.value)}
                      className="w-full px-2.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                    >
                      <option value="MCQ">MCQ</option>
                      <option value="TRUE_FALSE">True / False</option>
                      <option value="FILL_IN_BLANK">Fill in Blank</option>
                      <option value="SHORT_ANSWER">Short Answer</option>
                      <option value="LONG_ANSWER">Long Answer</option>
                      <option value="CASE_BASED">Case Study</option>
                      <option value="ASSERTION_REASON">Assertion & Reason</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Difficulty</label>
                    <select
                      value={difficulty}
                      onChange={(e) => setDifficulty(e.target.value)}
                      className="w-full px-2.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                    >
                      <option value="EASY">Easy</option>
                      <option value="MEDIUM">Medium</option>
                      <option value="HARD">Hard</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Bloom's</label>
                    <select
                      value={bloomLevel}
                      onChange={(e) => setBloomLevel(e.target.value)}
                      className="w-full px-2.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
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
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Marks</label>
                    <input
                      type="number"
                      min={1}
                      max={10}
                      value={marks}
                      onChange={(e) => setMarks(Number(e.target.value))}
                      className="w-full px-2.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                    />
                  </div>
                </div>

                {/* Options List */}
                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold text-slate-700">Options</label>
                  {optionsList.map((opt, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <input
                        type="text"
                        value={opt.text}
                        onChange={(e) => {
                          const val = e.target.value;
                          setOptionsList((prev) => prev.map((o, i) => (i === idx ? { ...o, text: val } : o)));
                        }}
                        placeholder={`Option ${String.fromCharCode(65 + idx)}`}
                        className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setOptionsList((prev) => prev.map((o, i) => ({ ...o, isCorrect: i === idx })));
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                          opt.isCorrect ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                        }`}
                      >
                        {opt.isCorrect ? 'Correct ✓' : 'Mark Correct'}
                      </button>
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Solution Explanation</label>
                  <textarea
                    rows={3}
                    value={explanation}
                    onChange={(e) => setExplanation(e.target.value)}
                    placeholder="Step-by-step marking scheme..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                  />
                </div>
              </div>

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
                  {saving ? 'Saving...' : editingQId ? 'Update Question' : 'Publish Question'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* JSON BULK UPLOAD MODAL */}
        {showJsonModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-4xl w-full border border-slate-200 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
              <div className="p-6 bg-slate-900 text-white flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-indigo-400 font-bold">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-extrabold font-display">Bulk Import Questions from JSON (Admin)</h2>
                    <p className="text-xs text-slate-400">Directly publish multiple questions into the master question bank</p>
                  </div>
                </div>
                <button onClick={() => setShowJsonModal(false)} className="text-slate-400 hover:text-white p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-4 flex-1">
                {jsonParseError && (
                  <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{jsonParseError}</span>
                  </div>
                )}

                <div className="flex items-center justify-between bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div>
                    <p className="text-xs font-bold text-slate-800">Select a .json file or paste raw JSON</p>
                    <p className="text-[11px] text-slate-500">Auto-assigns approved status for master questions.</p>
                  </div>

                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept=".json,application/json"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-3.5 py-2 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold rounded-xl flex items-center gap-1.5 transition"
                  >
                    <Upload className="w-4 h-4 text-slate-500" />
                    Browse JSON File
                  </button>
                </div>

                <textarea
                  rows={8}
                  value={jsonText}
                  onChange={(e) => {
                    setJsonText(e.target.value);
                    parseJsonContent(e.target.value);
                  }}
                  placeholder={`[\n  {\n    "chapterName": "Integers",\n    "questionText": "Find the value of -5 + 12",\n    "questionType": "MCQ",\n    "marks": 1,\n    "options": [\n      { "text": "7", "isCorrect": true },\n      { "text": "-7", "isCorrect": false }\n    ]\n  }\n]`}
                  className="w-full p-3.5 bg-slate-950 text-emerald-400 font-mono text-xs rounded-2xl border border-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none"
                />

                {jsonParsedQuestions.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      {jsonParsedQuestions.length} Questions Ready for Direct Publishing
                    </h3>
                    <div className="max-h-48 overflow-y-auto divide-y divide-slate-100 border border-slate-200 rounded-2xl bg-white">
                      {jsonParsedQuestions.map((q, idx) => (
                        <div key={idx} className="p-3 text-xs space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-400">#{idx + 1}</span>
                            <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 font-bold text-[10px]">
                              {q.questionType || 'MCQ'}
                            </span>
                            <span className="text-slate-500 text-[11px]">
                              Ch: {q.chapterName || q.chapterTitle || q.chapterId || 'Auto'}
                            </span>
                          </div>
                          <p className="font-semibold text-slate-900 truncate">{q.questionText}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
                <button
                  type="button"
                  onClick={() => setShowJsonModal(false)}
                  className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleJsonBulkSubmit}
                  disabled={jsonImporting || jsonParsedQuestions.length === 0}
                  className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-2 disabled:opacity-50"
                >
                  {jsonImporting ? 'Importing...' : `Directly Publish ${jsonParsedQuestions.length} Questions`}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
