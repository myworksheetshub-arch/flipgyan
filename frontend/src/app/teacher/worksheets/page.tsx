'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { api } from '@/lib/api';
import { Worksheet, Subject, Chapter } from '@/types';
import {
  FileSpreadsheet,
  Plus,
  Search,
  ArrowRight,
  Sparkles,
  X,
  BookOpen,
  Award,
  Clock,
  Printer,
  CheckCircle2,
  Trash2,
  ListPlus,
  HelpCircle as QuestionIcon,
  CheckCircle,
} from 'lucide-react';

interface CustomOptionInput {
  text: string;
  isCorrect: boolean;
}

interface CustomQuestionInput {
  questionText: string;
  questionType: string; // MCQ, SHORT_ANSWER, TRUE_FALSE
  marks: number;
  explanation: string;
  options: CustomOptionInput[];
}

export default function TeacherWorksheetsPage() {
  const [worksheets, setWorksheets] = useState<Worksheet[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Worksheet Authoring State
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('PRACTICE');
  const [difficulty, setDifficulty] = useState('MEDIUM');
  const [subjectId, setSubjectId] = useState('');
  const [chapterId, setChapterId] = useState('');
  const [durationMinutes, setDurationMinutes] = useState(45);
  const [totalMarks, setTotalMarks] = useState(25);
  const [instructions, setInstructions] = useState(`### Worksheet Instructions:
1. Read each question carefully and attempt all questions.
2. For multiple-choice questions, select the single best answer.
3. Refer to the answer key for marking rubrics.`);
  const [answerKey, setAnswerKey] = useState(`# CBSE & NEP 2020 Marking Scheme & Solution Key\n\n- **Rubric**: Award 1 mark for correct selection and step execution.`);

  // Dynamic Custom Questions State for Worksheet
  const [customQuestions, setCustomQuestions] = useState<CustomQuestionInput[]>([
    {
      questionText: '',
      questionType: 'MCQ',
      marks: 1,
      explanation: '',
      options: [
        { text: '', isCorrect: true },
        { text: '', isCorrect: false },
        { text: '', isCorrect: false },
        { text: '', isCorrect: false },
      ],
    },
  ]);

  useEffect(() => {
    async function loadData() {
      try {
        const [wsData, subData] = await Promise.all([
          api.getWorksheets(),
          api.getSubjects(),
        ]);
        setWorksheets(wsData);
        setSubjects(subData);
        if (subData.length > 0) setSubjectId(subData[0].id);
      } catch (err) {
        console.error('Failed to load worksheets/subjects:', err);
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    async function loadChapters() {
      if (!subjectId) return;
      try {
        const chData = await api.getChapters(subjectId);
        setChapters(chData);
        if (chData.length > 0) {
          setChapterId(chData[0].id);
          setTitle(`CBSE ${chData[0].title} Competency Worksheet`);
          setDescription(`NEP 2020 aligned competency practice worksheet evaluating critical thinking, application, and real-life problem solving.`);
        } else {
          setChapterId('');
        }
      } catch (err) {
        console.error('Failed to load chapters:', err);
      }
    }
    loadChapters();
  }, [subjectId]);

  // Question Builder Handlers for Worksheet
  const handleAddQuestion = () => {
    setCustomQuestions([
      ...customQuestions,
      {
        questionText: '',
        questionType: 'MCQ',
        marks: 1,
        explanation: '',
        options: [
          { text: '', isCorrect: true },
          { text: '', isCorrect: false },
          { text: '', isCorrect: false },
          { text: '', isCorrect: false },
        ],
      },
    ]);
  };

  const handleRemoveQuestion = (qIdx: number) => {
    if (customQuestions.length === 1) {
      alert('Worksheet must contain at least one question.');
      return;
    }
    setCustomQuestions(customQuestions.filter((_, idx) => idx !== qIdx));
  };

  const handleUpdateQuestionText = (qIdx: number, text: string) => {
    const updated = [...customQuestions];
    updated[qIdx].questionText = text;
    setCustomQuestions(updated);
  };

  const handleUpdateQuestionType = (qIdx: number, qType: string) => {
    const updated = [...customQuestions];
    updated[qIdx].questionType = qType;
    setCustomQuestions(updated);
  };

  const handleUpdateMarks = (qIdx: number, marks: number) => {
    const updated = [...customQuestions];
    updated[qIdx].marks = Math.max(1, marks);
    setCustomQuestions(updated);
  };

  const handleUpdateExplanation = (qIdx: number, text: string) => {
    const updated = [...customQuestions];
    updated[qIdx].explanation = text;
    setCustomQuestions(updated);
  };

  const handleUpdateOptionText = (qIdx: number, oIdx: number, text: string) => {
    const updated = [...customQuestions];
    updated[qIdx].options[oIdx].text = text;
    setCustomQuestions(updated);
  };

  const handleSetCorrectOption = (qIdx: number, oIdx: number) => {
    const updated = [...customQuestions];
    updated[qIdx].options = updated[qIdx].options.map((opt, idx) => ({
      ...opt,
      isCorrect: idx === oIdx,
    }));
    setCustomQuestions(updated);
  };

  const handleAddOption = (qIdx: number) => {
    const updated = [...customQuestions];
    updated[qIdx].options.push({ text: '', isCorrect: false });
    setCustomQuestions(updated);
  };

  const handleRemoveOption = (qIdx: number, oIdx: number) => {
    const updated = [...customQuestions];
    if (updated[qIdx].options.length <= 2) {
      alert('Question must have at least 2 choice options.');
      return;
    }
    const wasCorrect = updated[qIdx].options[oIdx].isCorrect;
    updated[qIdx].options = updated[qIdx].options.filter((_, idx) => idx !== oIdx);
    if (wasCorrect && updated[qIdx].options.length > 0) {
      updated[qIdx].options[0].isCorrect = true;
    }
    setCustomQuestions(updated);
  };

  const handleCreateWorksheet = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subjectId || !chapterId) {
      alert('Please select both a Subject and a Chapter.');
      return;
    }

    const validQuestions = customQuestions.filter((q) => q.questionText.trim() !== '');
    if (validQuestions.length === 0) {
      alert('Please enter text for at least one question.');
      return;
    }

    setIsSubmitting(true);
    try {
      await api.createWorksheet({
        title,
        description,
        type,
        difficulty,
        subjectId,
        chapterId,
        durationMinutes: Number(durationMinutes),
        totalMarks: Number(totalMarks),
        totalQuestions: validQuestions.length,
        instructions,
        answerKey,
        isPublished: true,
        customQuestions: validQuestions,
      });

      setShowAddModal(false);
      setTitle('');
      setDescription('');
      setCustomQuestions([
        {
          questionText: '',
          questionType: 'MCQ',
          marks: 1,
          explanation: '',
          options: [
            { text: '', isCorrect: true },
            { text: '', isCorrect: false },
            { text: '', isCorrect: false },
            { text: '', isCorrect: false },
          ],
        },
      ]);
      const updated = await api.getWorksheets();
      setWorksheets(updated);
      alert('Worksheet with custom questions published successfully!');
    } catch (err: any) {
      alert(err.message || 'Failed to create worksheet');
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredWorksheets = worksheets.filter(
    (ws) =>
      ws.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ws.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ws.subject?.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout role="TEACHER">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 font-display">Worksheet & Assessment Authoring</h1>
            <p className="text-xs text-slate-500">
              Create, configure, add custom questions, and publish CBSE + NEP 2020 Competency Worksheets.
            </p>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition flex items-center gap-2 shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Create New Worksheet</span>
          </button>
        </div>

        {/* Filter / Search Bar */}
        <div className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
          <Search className="w-4 h-4 text-slate-400 ml-2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search worksheets by title, subject, or topic..."
            className="w-full text-xs bg-transparent outline-none font-semibold text-slate-700 placeholder:text-slate-400"
          />
        </div>

        {/* Worksheets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorksheets.map((ws) => (
            <div
              key={ws.id}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between hover:shadow-md transition"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-bold">
                    {ws.subject?.classGrade?.name || 'Class'} • {ws.subject?.name}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-bold text-[10px]">
                    {ws.type}
                  </span>
                </div>

                {ws.chapter && (
                  <p className="text-xs text-indigo-600 font-bold flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Ch {ws.chapter.chapterNumber}: {ws.chapter.title}</span>
                  </p>
                )}

                <h3 className="text-sm font-bold text-slate-900 font-display">{ws.title}</h3>
                <p className="text-xs text-slate-500 line-clamp-2">{ws.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-500 font-medium">
                  <span>{ws.totalMarks} Marks</span>
                  <span>•</span>
                  <span>{ws.durationMinutes}m</span>
                </div>
                <Link
                  href={`/worksheets/${ws.id}`}
                  className="font-bold text-emerald-600 hover:underline flex items-center gap-1"
                >
                  Preview <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Create Worksheet Modal with Full Question & Option Authoring */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-3xl w-full shadow-2xl border border-slate-100 space-y-6 my-8 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 sticky top-0 bg-white z-10">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900 font-display">Worksheet & Question Authoring Studio</h3>
                    <p className="text-xs text-slate-500">Create worksheet details, add custom questions, options & answer keys</p>
                  </div>
                </div>
                <button onClick={() => setShowAddModal(false)} className="p-1 text-slate-400 hover:text-slate-600">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleCreateWorksheet} className="space-y-6 text-xs">
                {/* 1. Worksheet General Metadata */}
                <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-200 space-y-4">
                  <h4 className="font-extrabold text-slate-900 uppercase tracking-wider text-[11px] text-emerald-700 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Step 1: Worksheet General Details</span>
                  </h4>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Worksheet Title</label>
                    <input
                      type="text"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="e.g. CBSE Class 10 Light Refraction Practice Worksheet"
                      className="w-full p-2.5 bg-white border border-slate-200 rounded-xl outline-none focus:border-emerald-500 font-bold text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Description / Learning Context</label>
                    <textarea
                      rows={2}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Brief summary of learning outcomes and target skills..."
                      className="w-full p-2.5 bg-white border border-slate-200 rounded-xl outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Subject</label>
                      <select
                        value={subjectId}
                        onChange={(e) => setSubjectId(e.target.value)}
                        className="w-full p-2.5 bg-white border border-slate-200 rounded-xl outline-none font-semibold text-slate-700"
                      >
                        {subjects.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.name} ({s.classGrade?.name || 'Class'})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Chapter</label>
                      <select
                        value={chapterId}
                        onChange={(e) => setChapterId(e.target.value)}
                        className="w-full p-2.5 bg-white border border-slate-200 rounded-xl outline-none font-semibold text-slate-700"
                      >
                        {chapters.map((ch) => (
                          <option key={ch.id} value={ch.id}>
                            Ch {ch.chapterNumber}: {ch.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Worksheet Type</label>
                      <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="w-full p-2 bg-white border border-slate-200 rounded-xl font-bold"
                      >
                        <option value="PRACTICE">PRACTICE (MCQs)</option>
                        <option value="COMPETENCY">COMPETENCY</option>
                        <option value="HOTS">HOTS / CASE STUDY</option>
                        <option value="REVISION">REVISION</option>
                        <option value="ASSESSMENT">ASSESSMENT</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Difficulty</label>
                      <select
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                        className="w-full p-2 bg-white border border-slate-200 rounded-xl font-bold"
                      >
                        <option value="EASY">EASY</option>
                        <option value="MEDIUM">MEDIUM</option>
                        <option value="HARD">HARD</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Total Marks</label>
                      <input
                        type="number"
                        required
                        value={totalMarks}
                        onChange={(e) => setTotalMarks(Number(e.target.value))}
                        className="w-full p-2 bg-white border border-slate-200 rounded-xl text-center font-bold"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Duration (Mins)</label>
                      <input
                        type="number"
                        required
                        value={durationMinutes}
                        onChange={(e) => setDurationMinutes(Number(e.target.value))}
                        className="w-full p-2 bg-white border border-slate-200 rounded-xl text-center font-bold"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Questions & Options Builder Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <h4 className="font-extrabold text-slate-900 uppercase tracking-wider text-[11px] text-emerald-700 flex items-center gap-1.5">
                      <QuestionIcon className="w-4 h-4 text-emerald-600" />
                      <span>Step 2: Add Questions, Choice Options & Answer Keys</span>
                    </h4>
                    <span className="text-[11px] font-bold text-slate-500">
                      {customQuestions.length} Question(s) Added
                    </span>
                  </div>

                  {customQuestions.map((q, qIdx) => (
                    <div
                      key={qIdx}
                      className="bg-white border-2 border-slate-200 hover:border-emerald-400 p-5 rounded-2xl space-y-4 shadow-xs relative group transition"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-extrabold text-xs rounded-lg">
                            Question #{qIdx + 1}
                          </span>
                          <select
                            value={q.questionType}
                            onChange={(e) => handleUpdateQuestionType(qIdx, e.target.value)}
                            className="px-2 py-1 bg-slate-100 text-slate-700 font-bold text-[11px] rounded-lg outline-none"
                          >
                            <option value="MCQ">MCQ (Multiple Choice)</option>
                            <option value="SHORT_ANSWER">SHORT ANSWER</option>
                            <option value="TRUE_FALSE">TRUE / FALSE</option>
                          </select>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <span className="text-slate-500 font-bold">Marks:</span>
                            <input
                              type="number"
                              min={1}
                              value={q.marks}
                              onChange={(e) => handleUpdateMarks(qIdx, Number(e.target.value))}
                              className="w-12 p-1 bg-slate-100 border border-slate-200 rounded-lg text-center font-bold text-xs"
                            />
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveQuestion(qIdx)}
                            className="text-slate-400 hover:text-rose-600 font-bold p-1 rounded-lg hover:bg-rose-50 transition flex items-center gap-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Question Text */}
                      <div>
                        <label className="block font-bold text-slate-800 mb-1">Question Statement</label>
                        <input
                          type="text"
                          required
                          value={q.questionText}
                          onChange={(e) => handleUpdateQuestionText(qIdx, e.target.value)}
                          placeholder={`Enter question statement for Question #${qIdx + 1}...`}
                          className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-emerald-500 font-semibold"
                        />
                      </div>

                      {/* Options list for MCQ / TRUE_FALSE */}
                      {q.questionType !== 'SHORT_ANSWER' && (
                        <div className="space-y-2.5 bg-slate-50/70 p-4 rounded-xl border border-slate-200">
                          <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-1">
                            <span>Choice Options (Select Correct Answer):</span>
                            <span className="text-[10px] text-emerald-600 font-extrabold flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Radio button marks Correct Option
                            </span>
                          </div>

                          {q.options.map((opt, oIdx) => (
                            <div key={oIdx} className="flex items-center gap-2">
                              {/* Correct Radio Option */}
                              <label
                                title="Mark as correct answer"
                                className={`flex items-center justify-center w-8 h-8 rounded-lg font-bold border transition cursor-pointer shrink-0 ${
                                  opt.isCorrect
                                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                                    : 'bg-white text-slate-500 border-slate-300 hover:border-emerald-400'
                                }`}
                              >
                                <input
                                  type="radio"
                                  name={`correct_opt_ws_${qIdx}`}
                                  checked={opt.isCorrect}
                                  onChange={() => handleSetCorrectOption(qIdx, oIdx)}
                                  className="sr-only"
                                />
                                {String.fromCharCode(65 + oIdx)}
                              </label>

                              {/* Option Input */}
                              <input
                                type="text"
                                required
                                value={opt.text}
                                onChange={(e) => handleUpdateOptionText(qIdx, oIdx, e.target.value)}
                                placeholder={`Option ${String.fromCharCode(65 + oIdx)} value...`}
                                className={`flex-1 p-2.5 bg-white border rounded-xl outline-none transition text-xs font-semibold ${
                                  opt.isCorrect
                                    ? 'border-emerald-500 ring-2 ring-emerald-500/10'
                                    : 'border-slate-200 focus:border-emerald-500'
                                }`}
                              />

                              {/* Correct Indicator Label */}
                              {opt.isCorrect && (
                                <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 font-extrabold text-[10px] rounded-lg shrink-0">
                                  Correct Answer
                                </span>
                              )}

                              {/* Remove Option Button */}
                              <button
                                type="button"
                                onClick={() => handleRemoveOption(qIdx, oIdx)}
                                className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          ))}

                          <button
                            type="button"
                            onClick={() => handleAddOption(qIdx)}
                            className="mt-2 text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 pt-1"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add Option ({String.fromCharCode(65 + q.options.length)})</span>
                          </button>
                        </div>
                      )}

                      {/* Solution / Explanation */}
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">
                          Solution Explanation / Marking Rubric (Included in Answer Key)
                        </label>
                        <input
                          type="text"
                          value={q.explanation}
                          onChange={(e) => handleUpdateExplanation(qIdx, e.target.value)}
                          placeholder="Provide detailed explanation or step-by-step solution..."
                          className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-emerald-500"
                        />
                      </div>
                    </div>
                  ))}

                  {/* Add New Question Button */}
                  <button
                    type="button"
                    onClick={handleAddQuestion}
                    className="w-full py-3 bg-slate-100 hover:bg-emerald-50 text-emerald-700 font-bold border-2 border-dashed border-emerald-300 rounded-2xl transition flex items-center justify-center gap-2"
                  >
                    <ListPlus className="w-4 h-4" />
                    <span>+ Add Another Question</span>
                  </button>
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-100 sticky bottom-0 bg-white z-10">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-xl font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-md transition flex items-center gap-1.5"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{isSubmitting ? 'Creating...' : 'Publish Worksheet with Questions'}</span>
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
