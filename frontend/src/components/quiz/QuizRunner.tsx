'use client';

import React, { useState, useEffect } from 'react';
import { Quiz, QuizAttemptResult } from '@/types';
import { api } from '@/lib/api';
import { useAuth } from '@/lib/auth-context';
import {
  Clock,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Flag,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Sparkles,
  Zap,
  Award,
  BarChart2,
  ArrowRight,
  Check,
  AlertTriangle,
  Lightbulb,
  Share2,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuizRunnerProps {
  quiz: Quiz;
  onComplete?: (result: QuizAttemptResult) => void;
}

export function QuizRunner({ quiz, onComplete }: QuizRunnerProps) {
  const { user } = useAuth();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, any>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>({});
  const [secondsRemaining, setSecondsRemaining] = useState(quiz.durationMinutes * 60);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<QuizAttemptResult | null>(null);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [filterMode, setFilterMode] = useState<'ALL' | 'ANSWERED' | 'REVIEW' | 'SKIPPED'>('ALL');

  const questions = quiz.questions?.map((qq) => qq.question) || [];
  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;

  // Timer countdown
  useEffect(() => {
    if (result) return;
    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [result]);

  const handleSelectOption = (questionId: string, optionText: string, isMultiple = false) => {
    if (result) return;

    if (isMultiple) {
      const currentArr: string[] = userAnswers[questionId] || [];
      const updated = currentArr.includes(optionText)
        ? currentArr.filter((item) => item !== optionText)
        : [...currentArr, optionText];
      setUserAnswers((prev) => ({ ...prev, [questionId]: updated }));
    } else {
      setUserAnswers((prev) => ({ ...prev, [questionId]: optionText }));
    }
  };

  const handleToggleReview = (questionId: string) => {
    setMarkedForReview((prev) => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  const handleSubmitQuiz = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setShowSubmitModal(false);

    try {
      const timeSpent = quiz.durationMinutes * 60 - secondsRemaining;
      const res: QuizAttemptResult = await api.submitQuiz(quiz.id, {
        answers: userAnswers,
        timeSpentSeconds: timeSpent,
      });

      setResult(res);
      if (onComplete) onComplete(res);

      // Trigger celebratory confetti if passed or scored >= 75%
      if (res.percentage >= 70) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      }
    } catch (err) {
      console.error('Quiz submission error:', err);
      alert('Error submitting quiz. Please ensure you are logged in.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const answeredCount = Object.keys(userAnswers).filter((k) => userAnswers[k] !== undefined && userAnswers[k] !== '').length;
  const reviewCount = Object.keys(markedForReview).filter((k) => markedForReview[k]).length;

  // --- RESULT VIEW ---
  if (result) {
    return (
      <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
        {/* Score Header Card */}
        <div className="bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold border border-brand-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Quiz Completed</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display">{result.quizTitle}</h2>
              <p className="text-sm text-slate-300">
                {result.passed
                  ? '🎉 Outstanding performance! You demonstrated strong mastery of this chapter.'
                  : '💡 Good effort! Review your explanations below to strengthen weak areas.'}
              </p>
            </div>

            {/* Score Ring */}
            <div className="flex items-center gap-4">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 text-center min-w-[130px]">
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                  {result.score}
                  <span className="text-lg text-slate-400 font-medium">/{result.maxScore}</span>
                </span>
                <p className="text-xs font-bold text-brand-300 mt-1 uppercase tracking-wider">{result.percentage}% Score</p>
              </div>

              <div className="bg-amber-500/20 border border-amber-500/30 p-4 rounded-2xl text-center min-w-[110px]">
                <div className="flex items-center justify-center gap-1 text-amber-400">
                  <Zap className="w-5 h-5 fill-amber-400" />
                  <span className="text-2xl font-extrabold text-amber-300">+{result.xpGained}</span>
                </div>
                <p className="text-xs font-bold text-amber-300 mt-1 uppercase tracking-wider">XP Earned</p>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-white/10 text-center">
            <div className="bg-white/5 p-3 rounded-xl">
              <p className="text-xs text-slate-400 font-medium">Accuracy</p>
              <p className="text-lg font-bold text-emerald-400 mt-0.5">{result.accuracy}%</p>
            </div>
            <div className="bg-white/5 p-3 rounded-xl">
              <p className="text-xs text-slate-400 font-medium">Correct / Wrong</p>
              <p className="text-lg font-bold text-slate-100 mt-0.5">
                <span className="text-emerald-400">{result.correctCount}</span> /{' '}
                <span className="text-rose-400">{result.incorrectCount}</span>
              </p>
            </div>
            <div className="bg-white/5 p-3 rounded-xl">
              <p className="text-xs text-slate-400 font-medium">Skipped</p>
              <p className="text-lg font-bold text-slate-300 mt-0.5">{result.skippedCount}</p>
            </div>
            <div className="bg-white/5 p-3 rounded-xl">
              <p className="text-xs text-slate-400 font-medium">Time Taken</p>
              <p className="text-lg font-bold text-sky-400 mt-0.5">{formatTimer(result.timeSpentSeconds)}</p>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setResult(null);
                setUserAnswers({});
                setMarkedForReview({});
                setSecondsRemaining(quiz.durationMinutes * 60);
                setCurrentIndex(0);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-brand-50 hover:bg-brand-100 text-brand-700 font-bold text-xs rounded-xl transition"
            >
              <RotateCcw className="w-4 h-4" />
              Retry Quiz
            </button>
          </div>
          <a
            href="/student/dashboard"
            className="flex items-center gap-2 px-5 py-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-xs transition"
          >
            <span>Back to Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Detailed Question Review */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 font-display flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-brand-600" />
              Detailed Solutions & Explanations ({result.questions.length})
            </h3>
          </div>

          <div className="space-y-4">
            {result.questions.map((q, idx) => (
              <div
                key={q.questionId}
                className={`p-5 sm:p-6 rounded-2xl border transition-all bg-white shadow-xs ${
                  q.isCorrect
                    ? 'border-emerald-200 ring-1 ring-emerald-100'
                    : q.isSkipped
                    ? 'border-slate-200'
                    : 'border-rose-200 ring-1 ring-rose-100'
                }`}
              >
                {/* Question Status Tag */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-xs font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{q.difficulty}</span>
                    <span className="text-xs px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium">
                      Bloom: {q.bloomLevel}
                    </span>
                  </div>

                  {q.isCorrect ? (
                    <span className="flex items-center gap-1 text-emerald-600 font-bold text-xs bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Correct (+{q.marks} marks)
                    </span>
                  ) : q.isSkipped ? (
                    <span className="flex items-center gap-1 text-slate-500 font-bold text-xs bg-slate-100 px-2.5 py-1 rounded-full">
                      <HelpCircle className="w-3.5 h-3.5" /> Skipped (0 marks)
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-rose-600 font-bold text-xs bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
                      <XCircle className="w-3.5 h-3.5" /> Incorrect (-{q.negativeMarks} marks)
                    </span>
                  )}
                </div>

                <p className="text-sm font-semibold text-slate-900 mb-4">{q.questionText}</p>

                {/* Options Review */}
                <div className="space-y-2 mb-4">
                  {q.options?.map((opt) => {
                    const isStudentChosen = Array.isArray(q.studentAnswer)
                      ? q.studentAnswer.includes(opt.text)
                      : q.studentAnswer === opt.text;
                    const isRightOption = opt.isCorrect;

                    let optBg = 'bg-slate-50 border-slate-200 text-slate-700';
                    if (isRightOption) {
                      optBg = 'bg-emerald-50 border-emerald-300 text-emerald-900 font-semibold ring-1 ring-emerald-200';
                    } else if (isStudentChosen && !isRightOption) {
                      optBg = 'bg-rose-50 border-rose-300 text-rose-900 font-semibold';
                    }

                    return (
                      <div
                        key={opt.id}
                        className={`flex items-center justify-between p-3 rounded-xl border text-xs ${optBg}`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                              isRightOption
                                ? 'bg-emerald-600 text-white'
                                : isStudentChosen
                                ? 'bg-rose-600 text-white'
                                : 'bg-slate-200 text-slate-600'
                            }`}
                          >
                            {opt.sequence}
                          </div>
                          <span>{opt.text}</span>
                        </div>

                        {isRightOption && <span className="text-[11px] font-bold text-emerald-700">Correct Answer</span>}
                        {isStudentChosen && !isRightOption && (
                          <span className="text-[11px] font-bold text-rose-600">Your Answer</span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Explanation Box */}
                {q.explanation && (
                  <div className="mt-3 p-3.5 bg-sky-50/70 border border-sky-200/80 rounded-xl text-xs space-y-1">
                    <div className="flex items-center gap-1.5 text-sky-900 font-bold">
                      <Lightbulb className="w-3.5 h-3.5 text-sky-600" />
                      <span>Step-by-Step Concept Explanation</span>
                    </div>
                    <p className="text-sky-800 leading-relaxed pl-5">{q.explanation}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // --- LIVE QUIZ RUNNER INTERFACE ---
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Top Header with Progress & Countdown Timer */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 font-display">{quiz.title}</h2>
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span>
              Question <strong className="text-slate-900">{currentIndex + 1}</strong> of {totalQuestions}
            </span>
            <span>•</span>
            <span className="text-brand-600 font-semibold">{answeredCount} Answered</span>
            {reviewCount > 0 && (
              <>
                <span>•</span>
                <span className="text-purple-600 font-semibold">{reviewCount} For Review</span>
              </>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Timer Clock */}
          <div
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl border text-xs font-extrabold ${
              secondsRemaining < 120
                ? 'bg-rose-50 border-rose-300 text-rose-700 animate-pulse'
                : 'bg-slate-100 border-slate-200 text-slate-800'
            }`}
          >
            <Clock className="w-4 h-4 text-brand-600" />
            <span>{formatTimer(secondsRemaining)}</span>
          </div>

          <button
            onClick={() => setShowSubmitModal(true)}
            className="px-4 py-1.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl shadow-xs transition"
          >
            Submit Test
          </button>
        </div>
      </div>

      {/* Main Layout: Question + Sidebar Palette */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Question Box */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs min-h-[380px] flex flex-col justify-between">
            {currentQuestion ? (
              <div className="space-y-5">
                {/* Question Info Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 bg-brand-50 text-brand-700 text-xs font-extrabold rounded-lg">
                      Q{currentIndex + 1}
                    </span>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {currentQuestion.difficulty}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">({currentQuestion.marks} Mark)</span>
                  </div>

                  <button
                    onClick={() => handleToggleReview(currentQuestion.id)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold border transition ${
                      markedForReview[currentQuestion.id]
                        ? 'bg-purple-50 text-purple-700 border-purple-300'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <Flag className="w-3.5 h-3.5" />
                    <span>{markedForReview[currentQuestion.id] ? 'Marked' : 'Review Later'}</span>
                  </button>
                </div>

                {/* Question Text */}
                <p className="text-sm sm:text-base font-semibold text-slate-900 leading-relaxed">
                  {currentQuestion.questionText}
                </p>

                {/* Hint if available */}
                {currentQuestion.hint && (
                  <div className="p-3 bg-amber-50/60 border border-amber-200/60 rounded-xl text-xs text-amber-800 flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Hint:</strong> {currentQuestion.hint}
                    </span>
                  </div>
                )}

                {/* Options List */}
                <div className="space-y-2.5 pt-2">
                  {currentQuestion.options?.map((opt, optIdx) => {
                    const isSelected =
                      currentQuestion.questionType === 'MULTIPLE_SELECT'
                        ? (userAnswers[currentQuestion.id] || []).includes(opt.text)
                        : userAnswers[currentQuestion.id] === opt.text;

                    return (
                      <button
                        key={opt.id}
                        onClick={() =>
                          handleSelectOption(
                            currentQuestion.id,
                            opt.text,
                            currentQuestion.questionType === 'MULTIPLE_SELECT',
                          )
                        }
                        className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all ${
                          isSelected
                            ? 'bg-brand-50 border-brand-500 text-brand-900 shadow-xs ring-1 ring-brand-400'
                            : 'bg-slate-50 hover:bg-slate-100/80 border-slate-200 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                              isSelected ? 'bg-brand-600 text-white' : 'bg-slate-200 text-slate-600'
                            }`}
                          >
                            {String.fromCharCode(65 + optIdx)}
                          </div>
                          <span>{opt.text}</span>
                        </div>

                        {isSelected && <Check className="w-4 h-4 text-brand-600 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <p className="text-slate-400 text-center py-12">No question available.</p>
            )}

            {/* Question Bottom Action Bar */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-6">
              <button
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none rounded-xl transition"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>

              <button
                onClick={() => {
                  setUserAnswers((prev) => {
                    const copy = { ...prev };
                    delete copy[currentQuestion.id];
                    return copy;
                  });
                }}
                className="text-xs text-slate-400 hover:text-slate-600 font-semibold px-2 py-1"
              >
                Clear Selection
              </button>

              {currentIndex < totalQuestions - 1 ? (
                <button
                  onClick={() => setCurrentIndex((prev) => Math.min(totalQuestions - 1, prev + 1))}
                  className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => setShowSubmitModal(true)}
                  className="flex items-center gap-1.5 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl transition shadow-xs"
                >
                  <span>Submit Quiz</span>
                  <Check className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right 1 Col: Question Navigator Palette */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Question Palette</h4>

            {/* Status Legend */}
            <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-500 mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span>Answered ({answeredCount})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-purple-500" />
                <span>Review ({reviewCount})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-slate-200" />
                <span>Unanswered</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full border-2 border-brand-500" />
                <span>Current</span>
              </div>
            </div>

            {/* Grid of question buttons */}
            <div className="grid grid-cols-5 gap-2">
              {questions.map((q, idx) => {
                const isAnswered = userAnswers[q.id] !== undefined && userAnswers[q.id] !== '';
                const isReview = !!markedForReview[q.id];
                const isCurrent = idx === currentIndex;

                let btnStyle = 'bg-slate-100 text-slate-700 hover:bg-slate-200';
                if (isReview) {
                  btnStyle = 'bg-purple-100 text-purple-800 font-bold border border-purple-300';
                } else if (isAnswered) {
                  btnStyle = 'bg-emerald-500 text-white font-bold';
                }

                if (isCurrent) {
                  btnStyle += ' ring-2 ring-brand-500 ring-offset-2';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-9 rounded-xl text-xs flex items-center justify-center transition-all ${btnStyle}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Submit Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-xl font-bold text-slate-900 font-display">Ready to Submit?</h3>
              <p className="text-xs text-slate-500">
                You have answered <strong>{answeredCount}</strong> of <strong>{totalQuestions}</strong> questions.
                {totalQuestions - answeredCount > 0 && (
                  <span className="text-amber-600 block mt-1">
                    Warning: You have {totalQuestions - answeredCount} unanswered questions.
                  </span>
                )}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 transition"
              >
                Continue Test
              </button>
              <button
                onClick={handleSubmitQuiz}
                disabled={isSubmitting}
                className="flex-1 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-xs transition"
              >
                {isSubmitting ? 'Evaluating...' : 'Yes, Submit'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
