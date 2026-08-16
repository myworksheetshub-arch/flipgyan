'use client';

import React, { useState } from 'react';
import { Worksheet } from '@/types';
import { api } from '@/lib/api';
import {
  FileSpreadsheet,
  Printer,
  Clock,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Zap,
  RotateCcw,
  Sparkles,
  BookOpen,
  Eye,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface WorksheetSolverProps {
  worksheet: Worksheet;
}

export function WorksheetSolver({ worksheet }: WorksheetSolverProps) {
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<any>(null);
  const [showAnswerKey, setShowAnswerKey] = useState(false);

  const questions = worksheet.questions?.map((wq) => ({
    ...wq.question,
    worksheetMarks: wq.marks,
  })) || [];

  const handleAnswerChange = (qId: string, val: any) => {
    if (isSubmitted) return;
    setAnswers((prev) => ({ ...prev, [qId]: val }));
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const res = await api.submitWorksheet(worksheet.id, {
        answers,
        timeSpentSeconds: 900,
      });

      setSubmissionResult(res);
      setIsSubmitted(true);
      setShowAnswerKey(true);

      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch (err) {
      console.error('Worksheet submission failed:', err);
      alert('Error submitting worksheet. Please log in or check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const getSectionInfo = (idx: number) => {
    if (idx < 6) {
      return { letter: 'SECTION A', name: 'MCQs', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' };
    } else if (idx < 10) {
      return { letter: 'SECTION B', name: 'Fill in the Blanks', color: 'bg-sky-100 text-sky-900 border-sky-300' };
    } else if (idx < 13) {
      return { letter: 'SECTION C', name: 'True / False', color: 'bg-indigo-100 text-indigo-900 border-indigo-300' };
    } else if (idx < 17) {
      return { letter: 'SECTION D', name: 'Solve (2 Marks)', color: 'bg-amber-100 text-amber-950 border-amber-300' };
    } else if (idx < 19) {
      return { letter: 'SECTION E', name: 'Assertion & Reasoning', color: 'bg-purple-100 text-purple-900 border-purple-300' };
    } else if (idx === 19) {
      return { letter: 'SECTION F', name: 'Case-Based (4 Marks)', color: 'bg-rose-100 text-rose-900 border-rose-300' };
    } else {
      return { letter: 'SECTION G', name: 'HOTS / Application', color: 'bg-teal-100 text-teal-900 border-teal-300' };
    }
  };

  const getSectionBanner = (idx: number) => {
    if (questions.length >= 21) {
      if (idx === 0) return { letter: 'A', title: 'SECTION A – MULTIPLE CHOICE QUESTIONS (Q1–Q6)', marks: '6 Marks (1 mark each)' };
      if (idx === 6) return { letter: 'B', title: 'SECTION B – FILL IN THE BLANKS (Q7–Q10)', marks: '4 Marks (1 mark each)' };
      if (idx === 10) return { letter: 'C', title: 'SECTION C – TRUE OR FALSE (Q11–Q13)', marks: '3 Marks (1 mark each)' };
      if (idx === 13) return { letter: 'D', title: 'SECTION D – SOLVE (Q14–Q17)', marks: '8 Marks (2 marks each)' };
      if (idx === 17) return { letter: 'E', title: 'SECTION E – ASSERTION AND REASONING (Q18–Q19)', marks: '4 Marks (2 marks each)' };
      if (idx === 19) return { letter: 'F', title: 'SECTION F – CASE-BASED QUESTION (Q20)', marks: '4 Marks Total (Q20a-d)' };
      if (idx === 20) return { letter: 'G', title: 'SECTION G – HOTS / APPLICATION (Q21)', marks: '1 Mark' };
    }
    return null;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Worksheet Header Box */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs relative overflow-hidden printable-content">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-brand-50 text-brand-700 text-xs font-extrabold rounded-full">
                {worksheet.subject?.classGrade?.name || 'Class 10'} • {worksheet.subject?.name || 'CBSE'}
              </span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-full uppercase">
                {worksheet.type}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">{worksheet.title}</h1>
            {worksheet.description && <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{worksheet.description}</p>}
          </div>

          <div className="flex flex-wrap items-center gap-2 no-print shrink-0">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition"
            >
              <Printer className="w-4 h-4" />
              <span>Print Worksheet</span>
            </button>
            <button
              onClick={() => setShowAnswerKey(!showAnswerKey)}
              className="flex items-center gap-2 px-4 py-2 bg-brand-50 hover:bg-brand-100 text-brand-700 text-xs font-bold rounded-xl transition"
            >
              <Eye className="w-4 h-4" />
              <span>{showAnswerKey ? 'Hide Solutions' : 'View Solutions'}</span>
            </button>
          </div>
        </div>

        {/* Instructions & Meta */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 text-xs">
          <div>
            <span className="text-slate-400 font-medium">Duration:</span>
            <p className="font-bold text-slate-800">{worksheet.durationMinutes || 60} Minutes</p>
          </div>
          <div>
            <span className="text-slate-400 font-medium">Total Marks:</span>
            <p className="font-bold text-slate-800">{worksheet.totalMarks || 30} Marks</p>
          </div>
          <div>
            <span className="text-slate-400 font-medium">Questions:</span>
            <p className="font-bold text-slate-800">{questions.length} Items (7 Sections)</p>
          </div>
          <div>
            <span className="text-slate-400 font-medium">Difficulty:</span>
            <p className="font-bold text-brand-600">{worksheet.difficulty || 'BALANCED'}</p>
          </div>
        </div>

        {worksheet.instructions && (
          <div className="mt-4 p-4 bg-slate-50 border border-slate-200/80 rounded-2xl text-xs text-slate-700 leading-relaxed">
            <strong className="text-slate-900 block mb-1">GENERAL INSTRUCTIONS:</strong>
            <span className="whitespace-pre-line font-mono">{worksheet.instructions}</span>
          </div>
        )}
      </div>

      {/* Submission Banner */}
      {isSubmitted && submissionResult && (
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-6 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 no-print animate-in fade-in">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <CheckCircle2 className="w-5 h-5" />
              <h3 className="font-bold text-base">Worksheet Successfully Graded!</h3>
            </div>
            <p className="text-xs text-emerald-100">
              Score: <strong>{submissionResult.score}</strong> / {submissionResult.totalMarks} ({submissionResult.percentage}%)
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-xl">
            <Zap className="w-5 h-5 text-amber-300 fill-amber-300" />
            <span className="text-sm font-extrabold text-white">+{submissionResult.xpEarned} XP Earned</span>
          </div>
        </div>
      )}

      {/* Questions List with Section Headers */}
      <div className="space-y-6 printable-content">
        {questions.map((q, idx) => {
          const sectionHeader = getSectionBanner(idx);
          const sectionTag = getSectionInfo(idx);

          return (
            <React.Fragment key={q.id}>
              {sectionHeader && (
                <div className="mt-8 mb-4 p-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl flex items-center justify-between shadow-xs print-section-header">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500 text-slate-950 font-black flex items-center justify-center text-sm print:hidden">
                      {sectionHeader.letter}
                    </div>
                    <h2 className="text-sm font-extrabold font-display tracking-wide">{sectionHeader.title}</h2>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30 print:text-white print:border-white/40">
                    {sectionHeader.marks}
                  </span>
                </div>
              )}

              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4 print-question-card">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 print:pb-1 print:mb-1">
                  <div className="flex items-center gap-2.5">
                    <span className="px-3 py-1 bg-slate-900 text-white text-xs font-bold rounded-lg print:px-2 print:py-0.5 print:text-[10px]">
                      Question {idx + 1}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 print:text-[10px]">[{q.worksheetMarks || (idx < 13 ? 1 : idx < 17 ? 2 : idx < 19 ? 2 : idx < 20 ? 4 : 1)} Marks]</span>
                </div>

                <p className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed whitespace-pre-line print:text-[10pt] print:leading-snug">
                  {q.questionText}
                </p>

                {/* Answer Input or Options */}
                {q.questionType === 'MCQ' || q.questionType === 'TRUE_FALSE' || (q.options && q.options.length > 0) ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 print:grid-cols-4 gap-2.5 print:gap-1.5 pt-2 print-options-grid">
                    {q.options?.map((opt, oIdx) => {
                      const isSelected = answers[q.id] === opt.text;
                      const isCorrect = opt.isCorrect;
                      const optionLetter = (opt as any).optionLabel || (opt as any).optionKey || String.fromCharCode(65 + oIdx);

                      let optClass = 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700';
                      if (isSelected) {
                        optClass = 'bg-brand-50 border-brand-500 text-brand-900 font-bold ring-1 ring-brand-400';
                      }
                      if (showAnswerKey && isCorrect) {
                        optClass = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold ring-2 ring-emerald-300';
                      }

                      return (
                        <div
                          key={opt.id || oIdx}
                          onClick={() => !isSubmitted && handleAnswerChange(q.id, opt.text)}
                          className={`worksheet-option p-3 rounded-xl border text-left text-xs sm:text-sm cursor-pointer transition flex items-center justify-between ${optClass}`}
                        >
                          <span className="flex items-center gap-2">
                            <span className="w-6 h-6 print:w-4 print:h-4 rounded-lg bg-slate-200/80 text-slate-900 font-bold text-xs print:text-[9px] flex items-center justify-center shrink-0">
                              {optionLetter}
                            </span>
                            <span className="print:text-[9pt]">{opt.text || (opt as any).optionText}</span>
                          </span>
                          {showAnswerKey && isCorrect && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-2 no-print" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="pt-2">
                    <label className="block text-xs font-bold text-slate-600 mb-1 no-print">Your Written Solution:</label>
                    <textarea
                      rows={3}
                      disabled={isSubmitted}
                      value={answers[q.id] || ''}
                      onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                      placeholder="Write your step-by-step calculations and final answer here..."
                      className="w-full p-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-brand-500 outline-none transition no-print"
                    />
                    <div className="hidden print:block border-b border-dashed border-slate-300 h-8 w-full mt-1 print-solution-space">
                      <span className="text-[9px] text-slate-400 font-mono">Answer / Solution Space:</span>
                    </div>
                  </div>
                )}

                {/* Detailed Explanation / Answer Key */}
                {showAnswerKey && (
                  <div className="mt-4 p-4 bg-sky-50/70 border border-sky-200 rounded-xl text-xs space-y-1.5 animate-in fade-in">
                    <div className="flex items-center gap-2 text-sky-900 font-bold">
                      <BookOpen className="w-4 h-4 text-sky-600" />
                      <span>Model Solution & Marking Scheme:</span>
                    </div>
                    <p className="text-sky-800 leading-relaxed whitespace-pre-line pl-6">
                      {q.explanation || q.answerText || 'Step 1: Write given values. Step 2: Apply fundamental theorem formula. Step 3: Simplify and state final unit.'}
                    </p>
                  </div>
                )}
              </div>
            </React.Fragment>
          );
        })}
      </div>

      {/* Answer Key Full Section */}
      {showAnswerKey && worksheet.answerKey && (
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl printable-content">
          <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-sm border-b border-slate-800 pb-3">
            <BookOpen className="w-5 h-5" />
            <span>OFFICIAL CBSE ANSWER KEY & MARKING SCHEME</span>
          </div>
          <pre className="whitespace-pre-wrap font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto">
            {worksheet.answerKey}
          </pre>
        </div>
      )}

      {/* Bottom Submit Action */}
      {!isSubmitted && (
        <div className="flex items-center justify-end gap-3 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs no-print">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="px-6 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition"
          >
            {isSubmitting ? 'Evaluating Worksheet...' : 'Submit Worksheet for Grading'}
          </button>
        </div>
      )}
    </div>
  );
}
