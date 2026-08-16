'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { api } from '@/lib/api';
import { QuestionPaper } from '@/types';
import {
  FileText,
  Sparkles,
  Printer,
  Plus,
  Layers,
  CheckCircle2,
  Clock,
  Award,
  ChevronRight,
  X,
} from 'lucide-react';

export default function TeacherQuestionPapersPage() {
  const [papers, setPapers] = useState<QuestionPaper[]>([]);
  const [subjects, setSubjects] = useState<any[]>([]);
  const [chapters, setChapters] = useState<any[]>([]);
  const [showGenModal, setShowGenModal] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [loading, setLoading] = useState(true);

  // Generator form
  const [title, setTitle] = useState('CBSE Class 10 Pre-Board Examination');
  const [examName, setExamName] = useState('Pre-Board Assessment 2026-27');
  const [academicYear, setAcademicYear] = useState('2026-2027');
  const [classGrade, setClassGrade] = useState('10');
  const [subjectId, setSubjectId] = useState('');
  const [selectedChapters, setSelectedChapters] = useState<string[]>([]);
  const [totalMarks, setTotalMarks] = useState(80);
  const [durationMinutes, setDurationMinutes] = useState(180);
  const [easyPercent, setEasyPercent] = useState(30);
  const [mediumPercent, setMediumPercent] = useState(50);
  const [hardPercent, setHardPercent] = useState(20);

  useEffect(() => {
    async function load() {
      try {
        const [pData, sData, chData] = await Promise.all([
          api.getQuestionPapers(),
          api.getSubjects(),
          api.getChapters(),
        ]);
        setPapers(pData);
        setSubjects(sData);
        setChapters(chData);
        if (sData.length > 0) setSubjectId(sData[0].id);
        if (chData.length > 0) setSelectedChapters([chData[0].id]);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    try {
      const created = await api.generateQuestionPaper({
        title,
        examName,
        academicYear,
        classGradeId: classGrade,
        subjectId,
        chapterIds: selectedChapters.length > 0 ? selectedChapters : chapters.map((c) => c.id),
        totalMarks: Number(totalMarks),
        durationMinutes: Number(durationMinutes),
        difficultyDist: { easy: easyPercent, medium: mediumPercent, hard: hardPercent },
      });

      setShowGenModal(false);
      const updated = await api.getQuestionPapers();
      setPapers(updated);
      alert('Question Paper generated successfully with official CBSE Blueprint!');
    } catch (err: any) {
      alert(err.message || 'Generation failed');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <DashboardLayout role="TEACHER">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 font-display">CBSE Question Paper Generator</h1>
            <p className="text-xs text-slate-500">
              Automated board examination paper authoring with blueprint distribution and model marking keys.
            </p>
          </div>

          <button
            onClick={() => setShowGenModal(true)}
            className="px-4 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-xs transition flex items-center gap-2 shrink-0"
          >
            <Sparkles className="w-4 h-4" />
            <span>Generate New CBSE Paper</span>
          </button>
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {papers.map((paper) => (
            <div
              key={paper.id}
              className="bg-white rounded-3xl border border-slate-200 p-6 hover:shadow-lg transition flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 font-bold">
                    {paper.classGrade?.name || 'Class 10'} • {paper.subject?.name || 'Math'}
                  </span>
                  <span className="text-slate-400 font-semibold">{paper.academicYear}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 font-display">{paper.title}</h3>
                <p className="text-xs text-slate-500 font-medium">{paper.examName}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="text-slate-500 font-medium">
                  <span>{paper.totalMarks} Marks • {Math.round(paper.durationMinutes / 60)}h</span>
                </div>

                <Link
                  href={`/question-papers/${paper.id}`}
                  className="px-3.5 py-1.5 bg-slate-900 hover:bg-brand-600 text-white font-bold rounded-xl transition flex items-center gap-1 shadow-xs"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>View & Print</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Generate Modal */}
        {showGenModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl border border-slate-100 space-y-6 my-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">Configure CBSE Exam Blueprint</h3>
                  <p className="text-xs text-slate-500">The generator will pull verified questions according to your distribution.</p>
                </div>
                <button onClick={() => setShowGenModal(false)} className="p-1 text-slate-400 hover:text-slate-600">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleGenerate} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Examination Paper Title</label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-brand-500 font-semibold"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Exam Type</label>
                    <input
                      type="text"
                      required
                      value={examName}
                      onChange={(e) => setExamName(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Subject</label>
                    <select
                      value={subjectId}
                      onChange={(e) => setSubjectId(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none font-semibold"
                    >
                      {subjects.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name} ({s.classGrade?.name || 'Class 10'})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Total Marks</label>
                    <select
                      value={totalMarks}
                      onChange={(e) => setTotalMarks(Number(e.target.value))}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none font-semibold"
                    >
                      <option value="80">80 Marks (Standard Board Exam)</option>
                      <option value="40">40 Marks (Periodic Assessment)</option>
                      <option value="25">25 Marks (Unit Test)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Duration</label>
                    <select
                      value={durationMinutes}
                      onChange={(e) => setDurationMinutes(Number(e.target.value))}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none font-semibold"
                    >
                      <option value="180">3 Hours (180 Mins)</option>
                      <option value="120">2 Hours (120 Mins)</option>
                      <option value="90">90 Mins</option>
                    </select>
                  </div>
                </div>

                {/* Difficulty Distribution */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <span className="block font-bold text-slate-800">Difficulty Weightage Distribution:</span>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <span className="text-slate-500 block">Easy %</span>
                      <input
                        type="number"
                        value={easyPercent}
                        onChange={(e) => setEasyPercent(Number(e.target.value))}
                        className="w-full p-1.5 bg-white border border-slate-200 rounded-lg text-center font-bold"
                      />
                    </div>
                    <div>
                      <span className="text-slate-500 block">Medium %</span>
                      <input
                        type="number"
                        value={mediumPercent}
                        onChange={(e) => setMediumPercent(Number(e.target.value))}
                        className="w-full p-1.5 bg-white border border-slate-200 rounded-lg text-center font-bold"
                      />
                    </div>
                    <div>
                      <span className="text-slate-500 block">Hard %</span>
                      <input
                        type="number"
                        value={hardPercent}
                        onChange={(e) => setHardPercent(Number(e.target.value))}
                        className="w-full p-1.5 bg-white border border-slate-200 rounded-lg text-center font-bold"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setShowGenModal(false)}
                    className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-xl font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isGenerating}
                    className="px-6 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl shadow-xs transition flex items-center gap-1.5"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{isGenerating ? 'Building Paper...' : 'Generate Question Paper'}</span>
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
