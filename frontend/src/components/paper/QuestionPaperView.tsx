'use client';

import React, { useState } from 'react';
import { QuestionPaper } from '@/types';
import { Printer, BookOpen, Layers, CheckCircle2, ShieldCheck, Eye, EyeOff, FileDown } from 'lucide-react';

interface QuestionPaperViewProps {
  paper: QuestionPaper;
}

export function QuestionPaperView({ paper }: QuestionPaperViewProps) {
  const [showMarkingScheme, setShowMarkingScheme] = useState(false);
  const [showBlueprint, setShowBlueprint] = useState(false);

  let blueprint: any = {};
  let sections: any[] = [];

  try {
    blueprint = JSON.parse(paper.blueprintJson || '{}');
  } catch (e) {}

  try {
    sections = JSON.parse(paper.sectionsJson || '[]');
  } catch (e) {}

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs no-print">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold rounded-lg">
            {paper.academicYear} • CBSE Standard
          </span>
          <span className="text-xs text-slate-500 font-medium">{paper.durationMinutes} Mins • {paper.totalMarks} Marks</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowBlueprint(!showBlueprint)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition"
          >
            <Layers className="w-4 h-4" />
            <span>{showBlueprint ? 'Hide Blueprint' : 'View Blueprint'}</span>
          </button>
          <button
            onClick={() => setShowMarkingScheme(!showMarkingScheme)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-brand-50 hover:bg-brand-100 text-brand-700 text-xs font-bold rounded-xl transition"
          >
            {showMarkingScheme ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            <span>{showMarkingScheme ? 'Hide Marking Scheme' : 'Marking Scheme'}</span>
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-xs transition"
          >
            <Printer className="w-4 h-4" />
            <span>Print Paper</span>
          </button>
        </div>
      </div>

      {/* Blueprint Panel */}
      {showBlueprint && blueprint && (
        <div className="bg-slate-900 text-slate-100 rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 no-print animate-in fade-in space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-4">
            <Layers className="w-5 h-5 text-brand-400" />
            <h3 className="text-base font-bold text-white font-display">CBSE Examination Blueprint & Weightage Matrix</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
              <h4 className="font-bold text-brand-300 mb-2 uppercase tracking-wider">Difficulty Distribution</h4>
              <ul className="space-y-1.5 text-slate-300">
                <li className="flex justify-between">
                  <span>Easy (30%):</span>
                  <span className="font-bold text-emerald-400">{Math.round(paper.totalMarks * 0.3)} Marks</span>
                </li>
                <li className="flex justify-between">
                  <span>Medium (50%):</span>
                  <span className="font-bold text-amber-400">{Math.round(paper.totalMarks * 0.5)} Marks</span>
                </li>
                <li className="flex justify-between">
                  <span>Hard (20%):</span>
                  <span className="font-bold text-rose-400">{Math.round(paper.totalMarks * 0.2)} Marks</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
              <h4 className="font-bold text-sky-300 mb-2 uppercase tracking-wider">Bloom Taxonomy Targets</h4>
              <ul className="space-y-1.5 text-slate-300">
                <li className="flex justify-between"><span>Remember / Recall:</span><span className="font-bold">20%</span></li>
                <li className="flex justify-between"><span>Understanding:</span><span className="font-bold">35%</span></li>
                <li className="flex justify-between"><span>Application / Solving:</span><span className="font-bold">30%</span></li>
                <li className="flex justify-between"><span>Higher Order Analysis:</span><span className="font-bold">15%</span></li>
              </ul>
            </div>

            <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
              <h4 className="font-bold text-purple-300 mb-2 uppercase tracking-wider">CBSE Typology Compliance</h4>
              <p className="text-slate-300 leading-relaxed">
                Structured in 5 distinct sections with 20% competency-based questions, case-study questions, and internal choices.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Official CBSE Paper Sheet (White Clean Print Styling) */}
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm printable-content space-y-8">
        {/* Examination Heading Header */}
        <div className="text-center space-y-2 border-b-2 border-slate-900 pb-6">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700 uppercase tracking-wider">
            <span>Roll No: __________________</span>
            <span>Set - 1</span>
          </div>

          <p className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            CENTRAL BOARD OF SECONDARY EDUCATION EXAMINATION {paper.academicYear}
          </p>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 font-display uppercase tracking-tight">
            {paper.title}
          </h1>
          <p className="text-xs font-semibold text-slate-700">
            {paper.subject?.name} • {paper.classGrade?.name || 'Class 10'}
          </p>

          <div className="flex items-center justify-between text-xs font-bold text-slate-900 pt-3 border-t border-slate-200">
            <span>Time Allowed: {Math.round(paper.durationMinutes / 60)} Hours</span>
            <span>Maximum Marks: {paper.totalMarks}</span>
          </div>
        </div>

        {/* General Instructions */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1.5">
          <h4 className="font-bold text-slate-900 uppercase tracking-wider">General Instructions:</h4>
          <div className="text-slate-700 whitespace-pre-line leading-relaxed pl-2">
            {paper.instructions}
          </div>
        </div>

        {/* Structured Sections */}
        <div className="space-y-8">
          {sections.map((sec, secIdx) => (
            <div key={secIdx} className="space-y-6">
              <div className="border-b border-slate-300 pb-2 flex items-center justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 font-display">
                    {sec.section || `SECTION ${String.fromCharCode(65 + secIdx)}`}
                  </h3>
                  {sec.instructions && (
                    <p className="text-xs text-slate-500 italic mt-0.5">{sec.instructions}</p>
                  )}
                </div>
                {sec.marksPerQuestion && (
                  <span className="text-xs font-bold bg-slate-100 px-2.5 py-1 rounded-md text-slate-700">
                    [{sec.marksPerQuestion} Mark each]
                  </span>
                )}
              </div>

              {/* Questions inside Section */}
              <div className="space-y-6 pl-1 sm:pl-2">
                {sec.questions?.map((q: any) => (
                  <div key={q.qNum} className="space-y-2 text-xs sm:text-sm">
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-semibold text-slate-900 leading-relaxed">
                        <strong className="text-slate-900 mr-2">Q{q.qNum}.</strong>
                        {q.text}
                      </p>
                      <span className="text-xs font-bold text-slate-500 shrink-0">[{q.marks || 1}]</span>
                    </div>

                    {/* MCQ Options Grid */}
                    {q.options && q.options.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-6 pt-1 text-slate-700">
                        {q.options.map((opt: string, optI: number) => (
                          <div key={optI} className="flex items-center gap-1.5 font-medium">
                            <span>{opt}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Marking Scheme Answer Key Display */}
                    {showMarkingScheme && (
                      <div className="mt-2 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs space-y-1 text-emerald-900">
                        <div className="flex items-center gap-1 font-bold">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Marking Scheme / Expected Solution:</span>
                        </div>
                        <p className="pl-5 text-emerald-800 font-semibold">{q.answer}</p>
                        {q.explanation && (
                          <p className="pl-5 text-[11px] text-emerald-700 italic">{q.explanation}</p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
