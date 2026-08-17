'use client';

import React, { useState, useEffect, useRef } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { api } from '@/lib/api';
import { Question, ClassGrade, Subject, Chapter } from '@/types';
import {
  Layers,
  Plus,
  Search,
  CheckCircle2,
  Trash2,
  Edit3,
  X,
  Sparkles,
  Upload,
  FileText,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle,
  Download,
  HelpCircle,
  Image as ImageIcon,
  ChevronRight,
  Filter,
  FileSpreadsheet,
} from 'lucide-react';
import { getDifficultyColor, getBloomColor } from '@/lib/utils';

export default function TeacherQuestionsPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [classes, setClasses] = useState<ClassGrade[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);

  // Filter state
  const [selectedClassId, setSelectedClassId] = useState<string>('ALL');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('ALL');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('ALL');
  const [selectedBloom, setSelectedBloom] = useState<string>('ALL');
  const [selectedType, setSelectedType] = useState<string>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  // Pagination state
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState<number>(50);

  // Modals
  const [showAddModal, setShowAddModal] = useState(false);
  const [showJsonModal, setShowJsonModal] = useState(false);
  const [saving, setSaving] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Form State (Single Question)
  const [modalClassId, setModalClassId] = useState('');
  const [modalSubjectId, setModalSubjectId] = useState('');
  const [modalChapterId, setModalChapterId] = useState('');
  const [modalChapters, setModalChapters] = useState<Chapter[]>([]);
  const [modalSubjects, setModalSubjects] = useState<Subject[]>([]);

  const [questionText, setQuestionText] = useState('');
  const [questionType, setQuestionType] = useState('MCQ');
  const [difficulty, setDifficulty] = useState('MEDIUM');
  const [bloomLevel, setBloomLevel] = useState('UNDERSTAND');
  const [competency, setCompetency] = useState('CONCEPTUAL');
  const [marks, setMarks] = useState(1);
  const [negativeMarks, setNegativeMarks] = useState(0);
  const [explanation, setExplanation] = useState('');
  const [hint, setHint] = useState('');

  // Type-specific states
  // MCQ Options
  const [mcqOptions, setMcqOptions] = useState<Array<{ text: string; isCorrect: boolean; explanation?: string }>>([
    { text: '', isCorrect: true },
    { text: '', isCorrect: false },
    { text: '', isCorrect: false },
    { text: '', isCorrect: false },
  ]);

  // True / False
  const [tfCorrect, setTfCorrect] = useState<boolean>(true);

  // Assertion / Reason
  const [assertionText, setAssertionText] = useState('');
  const [reasonText, setReasonText] = useState('');
  const [arSelectedOption, setArSelectedOption] = useState<number>(0);

  // Fill in Blank
  const [blankAnswer, setBlankAnswer] = useState('');

  // Diagram Based
  const [diagramUrl, setDiagramUrl] = useState('');

  // Case Based
  const [casePassage, setCasePassage] = useState('');

  // JSON Bulk Upload State
  const [jsonText, setJsonText] = useState('');
  const [jsonParsedQuestions, setJsonParsedQuestions] = useState<any[]>([]);
  const [jsonParseError, setJsonParseError] = useState('');
  const [jsonImporting, setJsonImporting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
          api.getClasses().catch(() => []),
          api.getSubjects().catch(() => []),
        ]);
        setClasses(clsRes || []);
        setSubjects(subRes || []);
      } catch (err) {
        console.error('Failed to init classes/subjects:', err);
      }
    }
    initData();
  }, []);

  useEffect(() => {
    setPage(1);
  }, [selectedClassId, selectedSubjectId, selectedDifficulty, selectedBloom, selectedType, selectedStatus, search, pageSize]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchQuestions();
    }, 200);
    return () => clearTimeout(timer);
  }, [selectedClassId, selectedSubjectId, selectedDifficulty, selectedBloom, selectedType, selectedStatus, search, page, pageSize]);

  // Modal Cascading Subjects
  useEffect(() => {
    if (modalClassId) {
      const subs = subjects.filter(
        (s) => s.classGradeId === modalClassId || s.classGrade?.id === modalClassId
      );
      setModalSubjects(subs);
      if (subs.length > 0) {
        setModalSubjectId(subs[0].id);
      } else {
        setModalSubjectId('');
        setModalChapters([]);
      }
    } else {
      setModalSubjects(subjects);
    }
  }, [modalClassId, subjects]);

  // Modal Cascading Chapters
  useEffect(() => {
    async function loadModalChapters() {
      if (modalSubjectId) {
        try {
          const chData = await api.getChapters(modalSubjectId);
          setModalChapters(chData || []);
          if (chData && chData.length > 0) {
            setModalChapterId(chData[0].id);
          } else {
            setModalChapterId('');
          }
        } catch {
          setModalChapters([]);
        }
      }
    }
    loadModalChapters();
  }, [modalSubjectId]);

  const openAddModal = () => {
    setErrorMsg('');
    setQuestionText('');
    setQuestionType('MCQ');
    setDifficulty('MEDIUM');
    setBloomLevel('UNDERSTAND');
    setCompetency('CONCEPTUAL');
    setMarks(1);
    setNegativeMarks(0);
    setExplanation('');
    setHint('');
    setAssertionText('');
    setReasonText('');
    setBlankAnswer('');
    setDiagramUrl('');
    setCasePassage('');
    setMcqOptions([
      { text: '', isCorrect: true },
      { text: '', isCorrect: false },
      { text: '', isCorrect: false },
      { text: '', isCorrect: false },
    ]);

    if (classes.length > 0 && !modalClassId) {
      setModalClassId(classes[0].id);
    }
    setShowAddModal(true);
  };

  const handleCreateQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!modalChapterId) {
      setErrorMsg('Please select a valid Target Chapter.');
      return;
    }

    let finalQuestionText = questionText.trim();
    let optionsPayload: any[] = [];
    let mediaPayload: any[] = [];

    if (questionType === 'MCQ') {
      const validOptions = mcqOptions.filter((o) => o.text.trim().length > 0);
      if (validOptions.length < 2) {
        setErrorMsg('MCQ requires at least 2 non-empty option choices.');
        return;
      }
      if (!validOptions.some((o) => o.isCorrect)) {
        setErrorMsg('Please mark at least one option as Correct.');
        return;
      }
      optionsPayload = validOptions.map((o, idx) => ({
        optionLabel: String.fromCharCode(65 + idx),
        text: o.text.trim(),
        optionText: o.text.trim(),
        isCorrect: o.isCorrect,
        sequence: idx + 1,
      }));
    } else if (questionType === 'TRUE_FALSE') {
      optionsPayload = [
        { optionLabel: 'A', text: 'True', optionText: 'True', isCorrect: tfCorrect === true, sequence: 1 },
        { optionLabel: 'B', text: 'False', optionText: 'False', isCorrect: tfCorrect === false, sequence: 2 },
      ];
    } else if (questionType === 'ASSERTION_REASON') {
      if (!assertionText.trim() || !reasonText.trim()) {
        setErrorMsg('Both Assertion (A) and Reason (R) statements are required.');
        return;
      }
      finalQuestionText = `Assertion (A): ${assertionText.trim()}\nReason (R): ${reasonText.trim()}`;
      optionsPayload = [
        {
          optionLabel: 'A',
          text: 'Both A and R are true and R is the correct explanation of A.',
          optionText: 'Both A and R are true and R is the correct explanation of A.',
          isCorrect: arSelectedOption === 0,
          sequence: 1,
        },
        {
          optionLabel: 'B',
          text: 'Both A and R are true but R is NOT the correct explanation of A.',
          optionText: 'Both A and R are true but R is NOT the correct explanation of A.',
          isCorrect: arSelectedOption === 1,
          sequence: 2,
        },
        {
          optionLabel: 'C',
          text: 'A is true but R is false.',
          optionText: 'A is true but R is false.',
          isCorrect: arSelectedOption === 2,
          sequence: 3,
        },
        {
          optionLabel: 'D',
          text: 'A is false but R is true.',
          optionText: 'A is false but R is true.',
          isCorrect: arSelectedOption === 3,
          sequence: 4,
        },
      ];
    } else if (questionType === 'FILL_IN_BLANK') {
      if (!blankAnswer.trim()) {
        setErrorMsg('Please specify the expected answer keyword for the blank.');
        return;
      }
      optionsPayload = [
        { optionLabel: 'Answer', text: blankAnswer.trim(), optionText: blankAnswer.trim(), isCorrect: true, sequence: 1 },
      ];
    } else if (questionType === 'CASE_BASED') {
      if (!casePassage.trim()) {
        setErrorMsg('Case Study passage or data context is required.');
        return;
      }
      finalQuestionText = `[Case Study / Source Context]\n${casePassage.trim()}\n\nQuestion: ${questionText.trim()}`;
    } else if (questionType === 'DIAGRAM_BASED') {
      if (diagramUrl.trim()) {
        mediaPayload = [
          { mediaType: 'IMAGE', fileUrl: diagramUrl.trim(), caption: 'Diagram Figure', displayOrder: 1 },
        ];
      }
    }

    const payload = {
      chapterId: modalChapterId,
      questionText: finalQuestionText,
      questionType,
      difficulty,
      bloomLevel,
      competency,
      marks: Number(marks),
      negativeMarks: Number(negativeMarks),
      explanation: explanation.trim(),
      hint: hint.trim(),
      options: optionsPayload,
      media: mediaPayload,
    };

    try {
      setSaving(true);
      setErrorMsg('');
      await api.createQuestion(payload);
      setShowAddModal(false);
      fetchQuestions();
      alert('Question submitted successfully! It has been placed in the Admin Review Queue for approval.');
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to submit question.');
    } finally {
      setSaving(false);
    }
  };

  // JSON File Handling
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
        throw new Error('JSON must be an array of question objects or have a top-level "questions" array.');
      }
      if (list.length === 0) {
        throw new Error('JSON array is empty.');
      }
      setJsonParsedQuestions(list);
    } catch (err: any) {
      setJsonParseError(err.message || 'Invalid JSON format');
      setJsonParsedQuestions([]);
    }
  };

  const handleJsonBulkSubmit = async () => {
    if (jsonParsedQuestions.length === 0) {
      alert('Please provide valid questions JSON first.');
      return;
    }
    try {
      setJsonImporting(true);
      setJsonParseError('');
      await api.bulkCreateQuestions(jsonParsedQuestions);
      setShowJsonModal(false);
      setJsonText('');
      setJsonParsedQuestions([]);
      fetchQuestions();
      alert(`Successfully submitted ${jsonParsedQuestions.length} questions for Admin Review!`);
    } catch (err: any) {
      setJsonParseError(err.message || 'Failed to bulk import questions.');
    } finally {
      setJsonImporting(false);
    }
  };

  const downloadSampleJson = () => {
    const sample = [
      {
        chapterName: 'Integers',
        questionText: 'Which of the following integers is the greatest?',
        questionType: 'MCQ',
        difficulty: 'EASY',
        bloomLevel: 'REMEMBER',
        competency: 'Number Sense',
        marks: 1,
        explanation: '-1 is greater than any other negative integer listed.',
        options: [
          { optionLabel: 'A', text: '-1', isCorrect: true },
          { optionLabel: 'B', text: '-10', isCorrect: false },
          { optionLabel: 'C', text: '-100', isCorrect: false },
          { optionLabel: 'D', text: '-50', isCorrect: false },
        ],
      },
      {
        chapterName: 'Heat',
        questionText: 'Assertion (A): Stainless steel cooking pans are often provided with copper bottoms.\nReason (R): Copper is a better conductor of heat than stainless steel.',
        questionType: 'ASSERTION_REASON',
        difficulty: 'MEDIUM',
        bloomLevel: 'UNDERSTAND',
        competency: 'Thermal Conductivity',
        marks: 1,
        explanation: 'Copper conducts heat much faster, allowing even and quick distribution of heat.',
        options: [
          { optionLabel: 'A', text: 'Both A and R are true and R is the correct explanation of A.', isCorrect: true },
          { optionLabel: 'B', text: 'Both A and R are true but R is NOT the correct explanation of A.', isCorrect: false },
          { optionLabel: 'C', text: 'A is true but R is false.', isCorrect: false },
          { optionLabel: 'D', text: 'A is false but R is true.', isCorrect: false },
        ],
      },
      {
        chapterName: 'Acids, Bases and Salts',
        questionText: 'The chemical formula of common salt (Sodium Chloride) is ___.',
        questionType: 'FILL_IN_BLANK',
        difficulty: 'EASY',
        bloomLevel: 'REMEMBER',
        competency: 'Chemical Nomenclature',
        marks: 1,
        explanation: 'Sodium chloride has the chemical formula NaCl.',
        options: [
          { optionLabel: 'Answer', text: 'NaCl', isCorrect: true },
        ],
      },
      {
        chapterName: 'Light',
        questionText: 'An image formed by a plane mirror is always virtual and erect.',
        questionType: 'TRUE_FALSE',
        difficulty: 'EASY',
        bloomLevel: 'UNDERSTAND',
        competency: 'Optics Properties',
        marks: 1,
        explanation: 'Plane mirror always forms a virtual, erect, and same-sized image behind the mirror.',
        options: [
          { optionLabel: 'A', text: 'True', isCorrect: true },
          { optionLabel: 'B', text: 'False', isCorrect: false },
        ],
      },
    ];

    const blob = new Blob([JSON.stringify(sample, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'flipgyan-questions-template.json';
    a.click();
    URL.revokeObjectURL(url);
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
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-50 text-amber-700 border border-amber-200">
            <Clock className="w-3 h-3 text-amber-600 animate-pulse" />
            Under Admin Review
          </span>
        );
    }
  };

  return (
    <DashboardLayout role="TEACHER">
      <div className="space-y-6 pb-12">
        {/* Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-xs">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 font-display flex items-center gap-2.5">
              <Layers className="w-7 h-7 text-brand-600" />
              Teacher Question Studio & Question Bank
            </h1>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <span className="px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700 text-[11px] font-extrabold border border-brand-200">
                {totalCount} Total Questions
              </span>
              <p className="text-xs text-slate-500">
                Author and import questions for all Classes, Subjects, and Question Types. Newly submitted items undergo Admin Review.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => setShowJsonModal(true)}
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl shadow-xs transition"
            >
              <Upload className="w-4 h-4 text-slate-600" />
              <span>Import JSON File</span>
            </button>

            <button
              onClick={openAddModal}
              className="flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-md transition"
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
            { label: 'Under Review', value: 'REVIEW' },
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
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-500 focus:outline-none"
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
                {subjects.map((s) => (
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
            <div className="animate-spin w-8 h-8 border-4 border-brand-600 border-t-transparent rounded-full mx-auto mb-3" />
            <p className="text-xs text-slate-500">Loading questions...</p>
          </div>
        ) : questions.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
            <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-sm font-bold text-slate-700">No Questions Found</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1">
              Click "+ Add Question" or "Import JSON File" to add new questions to the curriculum.
            </p>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xs divide-y divide-slate-100 overflow-hidden">
              {questions.map((q, idx) => (
                <div key={q.id} className="p-5 space-y-3 hover:bg-slate-50/60 transition">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-extrabold text-xs text-slate-400">#{(page - 1) * pageSize + idx + 1}</span>
                      {getStatusBadge(q.status)}
                      <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold border ${getDifficultyColor(q.difficulty)}`}>
                        {q.difficulty}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold border ${getBloomColor(q.bloomLevel)}`}>
                        {q.bloomLevel}
                      </span>
                      <span className="px-2 py-0.5 bg-brand-50 text-brand-700 rounded-md text-[11px] font-bold border border-brand-100">
                        {q.questionType} • {q.marks || 1} Marks
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">
                        {q.chapter?.subject?.name} (Class {q.chapter?.subject?.classGrade?.number}) • Ch {q.chapter?.chapterNumber}: {q.chapter?.title || q.chapter?.name}
                      </span>
                    </div>

                    <span className="text-xs font-bold text-brand-600">[{q.marks} Mark]</span>
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed whitespace-pre-wrap">
                    {q.questionText}
                  </p>

                  {/* Options */}
                  {q.options && q.options.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                      {q.options.map((opt) => (
                        <div
                          key={opt.id}
                          className={`p-2.5 rounded-xl border text-[11px] flex items-center justify-between ${
                            opt.isCorrect
                              ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-bold'
                              : 'bg-slate-50 border-slate-200 text-slate-700'
                          }`}
                        >
                          <span>
                            <strong className="mr-1.5">{opt.optionLabel || ''}.</strong>
                            {opt.text || opt.optionText}
                          </span>
                          {opt.isCorrect && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Solution */}
                  {q.explanation && (
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-[11px] text-slate-600">
                      <strong className="text-slate-800">Solution / Marking Scheme:</strong> {q.explanation}
                    </div>
                  )}
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
                    <strong className="text-brand-600 font-bold">{totalCount}</strong> questions
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
                              ? 'bg-brand-600 text-white shadow-xs'
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

        {/* SINGLE QUESTION AUTHORING MODAL */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-3xl w-full border border-slate-200 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
              <div className="p-6 bg-slate-900 text-white flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-600/30 border border-brand-400/40 flex items-center justify-center text-brand-400 font-bold">
                    <Plus className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-extrabold font-display">Author New CBSE Question</h2>
                    <p className="text-xs text-slate-400">Questions submitted will be sent for Admin Review</p>
                  </div>
                </div>
                <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-white p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleCreateQuestion} className="p-6 overflow-y-auto space-y-5 flex-1">
                {errorMsg && (
                  <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Cascading Class -> Subject -> Chapter Selectors */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
                  <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Curriculum Mapping</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 mb-1">1. Class</label>
                      <select
                        value={modalClassId}
                        onChange={(e) => setModalClassId(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold"
                        required
                      >
                        {classes.map((c) => (
                          <option key={c.id} value={c.id}>
                            Class {c.number} ({c.name})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 mb-1">2. Subject</label>
                      <select
                        value={modalSubjectId}
                        onChange={(e) => setModalSubjectId(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold"
                        required
                      >
                        {modalSubjects.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 mb-1">3. Chapter</label>
                      <select
                        value={modalChapterId}
                        onChange={(e) => setModalChapterId(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold"
                        required
                      >
                        {modalChapters.length === 0 ? (
                          <option value="">No chapters found</option>
                        ) : (
                          modalChapters.map((ch) => (
                            <option key={ch.id} value={ch.id}>
                              Ch {ch.chapterNumber || (ch as any).chapterNo}: {ch.title || ch.name}
                            </option>
                          ))
                        )}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Question Type & Taxonomy */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Question Type</label>
                    <select
                      value={questionType}
                      onChange={(e) => setQuestionType(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-brand-700"
                    >
                      <option value="MCQ">Multiple Choice (MCQ)</option>
                      <option value="TRUE_FALSE">True / False</option>
                      <option value="ASSERTION_REASON">Assertion & Reason</option>
                      <option value="FILL_IN_BLANK">Fill in Blank</option>
                      <option value="SHORT_ANSWER">Short Answer</option>
                      <option value="LONG_ANSWER">Long Answer</option>
                      <option value="CASE_BASED">Case Study / Source</option>
                      <option value="DIAGRAM_BASED">Diagram / Map Based</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Difficulty</label>
                    <select
                      value={difficulty}
                      onChange={(e) => setDifficulty(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                    >
                      <option value="EASY">Easy</option>
                      <option value="MEDIUM">Medium</option>
                      <option value="HARD">Hard</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Bloom's Level</label>
                    <select
                      value={bloomLevel}
                      onChange={(e) => setBloomLevel(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
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
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold"
                    />
                  </div>
                </div>

                {/* Case Study Context if CASE_BASED */}
                {questionType === 'CASE_BASED' && (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Case Study Passage / Context</label>
                    <textarea
                      rows={4}
                      value={casePassage}
                      onChange={(e) => setCasePassage(e.target.value)}
                      placeholder="Enter the case study passage, experiment observation, or data table..."
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                      required
                    />
                  </div>
                )}

                {/* Diagram URL if DIAGRAM_BASED */}
                {questionType === 'DIAGRAM_BASED' && (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Diagram / Image URL</label>
                    <input
                      type="url"
                      value={diagramUrl}
                      onChange={(e) => setDiagramUrl(e.target.value)}
                      placeholder="https://images.unsplash.com/photo-diagram.jpg"
                      className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                    />
                  </div>
                )}

                {/* Question Text */}
                {questionType === 'ASSERTION_REASON' ? (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Assertion (A) Statement</label>
                      <input
                        type="text"
                        value={assertionText}
                        onChange={(e) => setAssertionText(e.target.value)}
                        placeholder="State the Assertion clearly..."
                        className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Reason (R) Statement</label>
                      <input
                        type="text"
                        value={reasonText}
                        onChange={(e) => setReasonText(e.target.value)}
                        placeholder="State the Reason clearly..."
                        className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold"
                        required
                      />
                    </div>

                    <div className="space-y-2 pt-2">
                      <label className="block text-xs font-bold text-slate-700">Correct CBSE Assertion-Reason Choice</label>
                      {[
                        'Both A and R are true and R is the correct explanation of A.',
                        'Both A and R are true but R is NOT the correct explanation of A.',
                        'A is true but R is false.',
                        'A is false but R is true.',
                      ].map((optText, optIdx) => (
                        <label
                          key={optIdx}
                          className={`flex items-center gap-3 p-3 rounded-xl border text-xs cursor-pointer transition ${
                            arSelectedOption === optIdx
                              ? 'bg-brand-50 border-brand-300 text-brand-900 font-bold'
                              : 'bg-slate-50 border-slate-200 text-slate-700'
                          }`}
                        >
                          <input
                            type="radio"
                            name="arOption"
                            checked={arSelectedOption === optIdx}
                            onChange={() => setArSelectedOption(optIdx)}
                            className="text-brand-600"
                          />
                          <span>
                            <strong>({String.fromCharCode(65 + optIdx)})</strong> {optText}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Question Text</label>
                    <textarea
                      rows={3}
                      value={questionText}
                      onChange={(e) => setQuestionText(e.target.value)}
                      placeholder="Type the question text here (supports Markdown and LaTeX formulas)..."
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-500"
                      required
                    />
                  </div>
                )}

                {/* MCQ Options */}
                {questionType === 'MCQ' && (
                  <div className="space-y-2.5">
                    <label className="block text-xs font-bold text-slate-700">Answer Options</label>
                    {mcqOptions.map((opt, idx) => (
                      <div key={idx} className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-lg bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <input
                          type="text"
                          value={opt.text}
                          onChange={(e) => {
                            const val = e.target.value;
                            setMcqOptions((prev) => prev.map((o, i) => (i === idx ? { ...o, text: val } : o)));
                          }}
                          placeholder={`Option ${String.fromCharCode(65 + idx)} text`}
                          className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                          required={idx < 2}
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setMcqOptions((prev) => prev.map((o, i) => ({ ...o, isCorrect: i === idx })));
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
                )}

                {/* True / False Toggle */}
                {questionType === 'TRUE_FALSE' && (
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700">Correct Answer</label>
                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-2 cursor-pointer font-bold text-xs">
                        <input
                          type="radio"
                          name="tf"
                          checked={tfCorrect === true}
                          onChange={() => setTfCorrect(true)}
                          className="text-brand-600"
                        />
                        <span>True</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer font-bold text-xs">
                        <input
                          type="radio"
                          name="tf"
                          checked={tfCorrect === false}
                          onChange={() => setTfCorrect(false)}
                          className="text-brand-600"
                        />
                        <span>False</span>
                      </label>
                    </div>
                  </div>
                )}

                {/* Fill in Blank Keyword */}
                {questionType === 'FILL_IN_BLANK' && (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Expected Blank Answer Keyword</label>
                    <input
                      type="text"
                      value={blankAnswer}
                      onChange={(e) => setBlankAnswer(e.target.value)}
                      placeholder="e.g. Photosynthesis, NaCl, 45"
                      className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold"
                      required
                    />
                  </div>
                )}

                {/* Solution & Explanation */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Step-by-Step Solution & Marking Scheme</label>
                  <textarea
                    rows={3}
                    value={explanation}
                    onChange={(e) => setExplanation(e.target.value)}
                    placeholder="Provide full marking scheme, derivations, or explanation for students..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                  />
                </div>

                <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 flex items-center gap-2">
                  <Clock className="w-4 h-4 shrink-0 text-amber-600" />
                  <span>
                    <strong>Note:</strong> Submitted questions will appear with <em>"Under Admin Review"</em> status until an Admin reviews and approves them.
                  </span>
                </div>
              </form>

              <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleCreateQuestion}
                  disabled={saving}
                  className="px-6 py-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-2 disabled:opacity-50"
                >
                  {saving ? 'Submitting...' : 'Submit for Admin Review'}
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
                  <div className="w-10 h-10 rounded-xl bg-brand-600/30 border border-brand-400/40 flex items-center justify-center text-brand-400 font-bold">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-extrabold font-display">Bulk Import Questions from JSON</h2>
                    <p className="text-xs text-slate-400">Upload multiple questions across Classes, Subjects, and Types at once</p>
                  </div>
                </div>
                <button onClick={() => setShowJsonModal(false)} className="text-slate-400 hover:text-white p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-5 flex-1">
                {jsonParseError && (
                  <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{jsonParseError}</span>
                  </div>
                )}

                {/* Action Bar: File upload + Download sample template */}
                <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div>
                    <p className="text-xs font-bold text-slate-800">Select a .json file or paste raw JSON below</p>
                    <p className="text-[11px] text-slate-500">Supports MCQ, Assertion-Reason, Fill-in-blanks, and True/False.</p>
                  </div>

                  <div className="flex items-center gap-2">
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

                    <button
                      type="button"
                      onClick={downloadSampleJson}
                      className="px-3.5 py-2 bg-brand-50 border border-brand-200 hover:bg-brand-100 text-brand-700 text-xs font-bold rounded-xl flex items-center gap-1.5 transition"
                    >
                      <Download className="w-4 h-4 text-brand-600" />
                      Download Sample Template
                    </button>
                  </div>
                </div>

                {/* JSON Editor Textarea */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-bold text-slate-700">JSON Payload</label>
                    {jsonParsedQuestions.length > 0 && (
                      <span className="text-xs font-extrabold text-emerald-600 flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" />
                        {jsonParsedQuestions.length} Valid Questions Detected
                      </span>
                    )}
                  </div>
                  <textarea
                    rows={8}
                    value={jsonText}
                    onChange={(e) => {
                      setJsonText(e.target.value);
                      parseJsonContent(e.target.value);
                    }}
                    placeholder={`[\n  {\n    "chapterName": "Integers",\n    "questionText": "Find the value of -5 + 12",\n    "questionType": "MCQ",\n    "marks": 1,\n    "options": [\n      { "text": "7", "isCorrect": true },\n      { "text": "-7", "isCorrect": false }\n    ]\n  }\n]`}
                    className="w-full p-3.5 bg-slate-950 text-emerald-400 font-mono text-xs rounded-2xl border border-slate-800 focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>

                {/* Parsed Preview */}
                {jsonParsedQuestions.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                      Preview of Questions ({jsonParsedQuestions.length})
                    </h3>
                    <div className="max-h-60 overflow-y-auto divide-y divide-slate-100 border border-slate-200 rounded-2xl bg-white">
                      {jsonParsedQuestions.map((q, idx) => (
                        <div key={idx} className="p-3 text-xs space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-400">#{idx + 1}</span>
                            <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold text-[10px]">
                              {q.questionType || 'MCQ'}
                            </span>
                            <span className="text-slate-500 text-[11px] font-medium">
                              Ch: {q.chapterName || q.chapterTitle || q.chapterId || 'Auto'}
                            </span>
                            <span className="ml-auto font-bold text-brand-600">{q.marks || 1} M</span>
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
                  className="px-6 py-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-2 disabled:opacity-50"
                >
                  {jsonImporting ? 'Importing Batch...' : `Submit ${jsonParsedQuestions.length} Questions for Admin Review`}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
