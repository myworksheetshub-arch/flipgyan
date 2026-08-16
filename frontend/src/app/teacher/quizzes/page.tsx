'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { api } from '@/lib/api';
import { Quiz, Subject, Chapter } from '@/types';
import {
  HelpCircle,
  Plus,
  Zap,
  ArrowRight,
  X,
  Sparkles,
  BookOpen,
  Clock,
  Award,
  CheckCircle,
  Trash2,
  CheckCircle2,
  ListPlus,
  HelpCircle as QuestionIcon,
} from 'lucide-react';

interface CustomOptionInput {
  text: string;
  isCorrect: boolean;
}

interface CustomQuestionInput {
  questionText: string;
  marks: number;
  explanation: string;
  options: CustomOptionInput[];
}

export default function TeacherQuizzesPage() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // New Quiz metadata form state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [subjectId, setSubjectId] = useState('');
  const [chapterId, setChapterId] = useState('');
  const [durationMinutes, setDurationMinutes] = useState(15);
  const [totalMarks, setTotalMarks] = useState(10);
  const [passMarks, setPassMarks] = useState(5);

  // Dynamic Custom Questions State
  const [customQuestions, setCustomQuestions] = useState<CustomQuestionInput[]>([
    {
      questionText: '',
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
        const [qzData, subData] = await Promise.all([
          api.getQuizzes(),
          api.getSubjects(),
        ]);
        setQuizzes(qzData);
        setSubjects(subData);
        if (subData.length > 0) setSubjectId(subData[0].id);
      } catch (err) {
        console.error('Failed to load quizzes/subjects:', err);
      }
    }
    loadData();
  }, []);

  // When subjectId changes, reload chapters
  useEffect(() => {
    async function loadChapters() {
      if (!subjectId) return;
      try {
        const chData = await api.getChapters(subjectId);
        setChapters(chData);
        if (chData.length > 0) setChapterId(chData[0].id);
        else setChapterId('');
      } catch (err) {
        console.error('Failed to load chapters:', err);
      }
    }
    loadChapters();
  }, [subjectId]);

  // Handlers for Question Builder
  const handleAddQuestion = () => {
    setCustomQuestions([
      ...customQuestions,
      {
        questionText: '',
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
      alert('Quiz must contain at least one question.');
      return;
    }
    setCustomQuestions(customQuestions.filter((_, idx) => idx !== qIdx));
  };

  const handleUpdateQuestionText = (qIdx: number, text: string) => {
    const updated = [...customQuestions];
    updated[qIdx].questionText = text;
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

  const handleCreateQuiz = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subjectId || !chapterId) {
      alert('Please select both a Subject and a Chapter.');
      return;
    }

    // Validate custom questions
    const validQuestions = customQuestions.filter((q) => q.questionText.trim() !== '');
    if (validQuestions.length === 0) {
      alert('Please enter text for at least one question.');
      return;
    }

    // Ensure each question has a correct option selected
    for (let i = 0; i < validQuestions.length; i++) {
      const q = validQuestions[i];
      const hasCorrect = q.options.some((o) => o.isCorrect);
      if (!hasCorrect) {
        alert(`Question #${i + 1} must have one option marked as correct.`);
        return;
      }
    }

    setIsSubmitting(true);
    try {
      await api.createQuiz({
        title,
        description,
        subjectId,
        chapterId,
        durationMinutes: Number(durationMinutes),
        totalMarks: Number(totalMarks),
        passMarks: Number(passMarks),
        difficulty: 'MEDIUM',
        isPublished: true,
        customQuestions: validQuestions,
      });

      setShowAddModal(false);
      setTitle('');
      setDescription('');
      setCustomQuestions([
        {
          questionText: '',
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
      const updated = await api.getQuizzes();
      setQuizzes(updated);
      alert('Quiz with custom questions and correct options published successfully!');
    } catch (err: any) {
      alert(err.message || 'Failed to create quiz');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DashboardLayout role="TEACHER">
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold border border-sky-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CBSE NEP 2020 Quiz Maker Studio</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-display">Interactive Quiz Maker Studio</h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Author chapter-wise practice tests, add custom MCQs with options, set correct answers, and publish instantly to students.
            </p>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="px-5 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-xs rounded-2xl shadow-lg transition flex items-center gap-2 shrink-0"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>Create New Quiz</span>
          </button>
        </div>

        {/* Quizzes Grid */}
        <div className="space-y-4">
          <h2 className="text-base font-bold text-slate-900 font-display flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-sky-600" />
            <span>Published Quizzes ({quizzes.length})</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizzes.map((qz) => (
              <div key={qz.id} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between hover:border-sky-400 hover:shadow-md transition">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-1 rounded-lg bg-sky-50 text-sky-700 font-bold">
                      {qz.subject?.classGrade?.name || 'Class 10'} • {qz.subject?.name}
                    </span>
                    <span className="flex items-center gap-1 font-bold text-slate-500 text-[11px]">
                      <Clock className="w-3.5 h-3.5 text-slate-400" /> {qz.durationMinutes}m
                    </span>
                  </div>
                  {qz.chapter && (
                    <p className="text-xs text-indigo-600 font-bold flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Ch {qz.chapter.chapterNumber}: {qz.chapter.title}</span>
                    </p>
                  )}
                  <h3 className="text-base font-bold text-slate-900 font-display">{qz.title}</h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{qz.description}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-600 font-semibold">{qz.totalMarks} Marks (Pass: {qz.passMarks})</span>
                  <Link href={`/quizzes/${qz.id}`} className="font-bold text-sky-600 hover:underline flex items-center gap-1">
                    <span>Preview Test</span> <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Create Quiz Modal with Full Question & Option Authoring */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-3xl w-full shadow-2xl border border-slate-100 space-y-6 my-8 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 sticky top-0 bg-white z-10">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900 font-display">Quiz & Question Authoring Studio</h3>
                    <p className="text-xs text-slate-500">Create quiz title, add questions, multiple options & mark correct answer</p>
                  </div>
                </div>
                <button onClick={() => setShowAddModal(false)} className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleCreateQuiz} className="space-y-6 text-xs">
                {/* 1. Quiz Settings Header */}
                <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-200 space-y-4">
                  <h4 className="font-extrabold text-slate-900 uppercase tracking-wider text-[11px] text-sky-700 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Step 1: Quiz General Details & Class Mapping</span>
                  </h4>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Quiz Title</label>
                    <input
                      type="text"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="e.g. Integers Concept & Competency Practice Quiz"
                      className="w-full p-3 bg-white border border-slate-200 rounded-xl outline-none focus:border-sky-500 font-bold text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Description / Student Instructions</label>
                    <textarea
                      rows={2}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Provide guidelines for students before starting this quiz..."
                      className="w-full p-3 bg-white border border-slate-200 rounded-xl outline-none focus:border-sky-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Select Subject</label>
                      <select
                        value={subjectId}
                        onChange={(e) => setSubjectId(e.target.value)}
                        className="w-full p-2.5 bg-white border border-slate-200 rounded-xl outline-none font-semibold text-slate-700 focus:border-sky-500"
                      >
                        {subjects.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.name} ({s.classGrade?.name || 'Class'})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Select Chapter</label>
                      <select
                        value={chapterId}
                        onChange={(e) => setChapterId(e.target.value)}
                        className="w-full p-2.5 bg-white border border-slate-200 rounded-xl outline-none font-semibold text-slate-700 focus:border-sky-500"
                      >
                        {chapters.map((ch) => (
                          <option key={ch.id} value={ch.id}>
                            Ch {ch.chapterNumber}: {ch.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 pt-1">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Duration (Mins)</label>
                      <input
                        type="number"
                        required
                        value={durationMinutes}
                        onChange={(e) => setDurationMinutes(Number(e.target.value))}
                        className="w-full p-2 bg-white border border-slate-200 rounded-xl text-center font-extrabold"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Total Marks</label>
                      <input
                        type="number"
                        required
                        value={totalMarks}
                        onChange={(e) => setTotalMarks(Number(e.target.value))}
                        className="w-full p-2 bg-white border border-slate-200 rounded-xl text-center font-extrabold"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Pass Marks</label>
                      <input
                        type="number"
                        required
                        value={passMarks}
                        onChange={(e) => setPassMarks(Number(e.target.value))}
                        className="w-full p-2 bg-white border border-slate-200 rounded-xl text-center font-extrabold"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Questions & Options Builder Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <h4 className="font-extrabold text-slate-900 uppercase tracking-wider text-[11px] text-sky-700 flex items-center gap-1.5">
                      <QuestionIcon className="w-4 h-4 text-sky-600" />
                      <span>Step 2: Add Questions, Options & Mark Correct Option</span>
                    </h4>
                    <span className="text-[11px] font-bold text-slate-500">
                      {customQuestions.length} Question(s) Added
                    </span>
                  </div>

                  {customQuestions.map((q, qIdx) => (
                    <div
                      key={qIdx}
                      className="bg-white border-2 border-slate-200 hover:border-sky-400 p-5 rounded-2xl space-y-4 shadow-xs relative group transition"
                    >
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-sky-100 text-sky-800 font-extrabold text-xs rounded-lg">
                          Question #{qIdx + 1}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleRemoveQuestion(qIdx)}
                          className="text-slate-400 hover:text-rose-600 font-bold p-1 rounded-lg hover:bg-rose-50 transition flex items-center gap-1"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span className="text-[11px]">Delete Question</span>
                        </button>
                      </div>

                      {/* Question Text */}
                      <div>
                        <label className="block font-bold text-slate-800 mb-1">Question Statement</label>
                        <input
                          type="text"
                          required
                          value={q.questionText}
                          onChange={(e) => handleUpdateQuestionText(qIdx, e.target.value)}
                          placeholder={`Enter question text for Question #${qIdx + 1}...`}
                          className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-sky-500 font-semibold"
                        />
                      </div>

                      {/* Choice Options Builder */}
                      <div className="space-y-2.5 bg-slate-50/70 p-4 rounded-xl border border-slate-200">
                        <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-1">
                          <span>Multiple Choice Options (Select Correct Answer):</span>
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
                                name={`correct_opt_${qIdx}`}
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
                                  : 'border-slate-200 focus:border-sky-500'
                              }`}
                            />

                            {/* Option Correct Indicator Label */}
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
                          className="mt-2 text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1 pt-1"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add Option ({String.fromCharCode(65 + q.options.length)})</span>
                        </button>
                      </div>

                      {/* Solution Explanation */}
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">
                          Solution Explanation / Hint (Shown after submission)
                        </label>
                        <input
                          type="text"
                          value={q.explanation}
                          onChange={(e) => handleUpdateExplanation(qIdx, e.target.value)}
                          placeholder="Explain step-by-step why the correct option is right..."
                          className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-sky-500"
                        />
                      </div>
                    </div>
                  ))}

                  {/* Add New Question Button */}
                  <button
                    type="button"
                    onClick={handleAddQuestion}
                    className="w-full py-3 bg-slate-100 hover:bg-sky-50 text-sky-700 font-bold border-2 border-dashed border-sky-300 rounded-2xl transition flex items-center justify-center gap-2"
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
                    className="px-5 py-2.5 text-slate-600 hover:bg-slate-100 rounded-xl font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-7 py-3 bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-xs rounded-xl shadow-md transition flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4 stroke-[2.5]" />
                    <span>{isSubmitting ? 'Publishing Quiz...' : 'Publish Quiz & Questions'}</span>
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
