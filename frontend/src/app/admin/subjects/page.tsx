'use client';

import React, { useState, useEffect } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { api } from '@/lib/api';
import { Subject, ClassGrade, Chapter } from '@/types';
import {
  BookOpen,
  Plus,
  Edit,
  Trash2,
  ChevronDown,
  ChevronRight,
  Layers,
  CheckCircle,
  X,
  AlertCircle,
  FileText,
} from 'lucide-react';

export default function AdminSubjectsPage() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [classes, setClasses] = useState<ClassGrade[]>([]);
  const [selectedClassId, setSelectedClassId] = useState<string>('ALL');
  const [expandedSubjectId, setExpandedSubjectId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Subject Modal State
  const [isSubModalOpen, setIsSubModalOpen] = useState(false);
  const [editingSubId, setEditingSubId] = useState<string | null>(null);
  const [subName, setSubName] = useState('');
  const [subCode, setSubCode] = useState('');
  const [subClassId, setSubClassId] = useState('');
  const [subColor, setSubColor] = useState('#4F46E5');

  // Chapter Modal State
  const [isChModalOpen, setIsChModalOpen] = useState(false);
  const [editingChId, setEditingChId] = useState<string | null>(null);
  const [chSubjectId, setChSubjectId] = useState('');
  const [chTitle, setChTitle] = useState('');
  const [chNumber, setChNumber] = useState(1);
  const [chDescription, setChDescription] = useState('');

  const [saving, setSaving] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [deletingSubId, setDeletingSubId] = useState<string | null>(null);
  const [deletingChId, setDeletingChId] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const [subRes, clsRes] = await Promise.all([api.getSubjects(), api.getClasses()]);
        setSubjects(subRes || []);
        setClasses(clsRes || []);
      } catch (err) {
        console.error('Failed to load admin subjects:', err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // Filtered Subjects
  const filteredSubjects = selectedClassId === 'ALL'
    ? subjects
    : subjects.filter((s) => s.classGradeId === selectedClassId || s.classGrade?.id === selectedClassId);

  // SUBJECT MODAL HANDLERS
  const openCreateSubjectModal = () => {
    setEditingSubId(null);
    setSubName('');
    setSubCode('');
    setSubClassId(classes[0]?.id || '');
    setSubColor('#4F46E5');
    setErrorMsg('');
    setIsSubModalOpen(true);
  };

  const openEditSubjectModal = (s: Subject) => {
    setEditingSubId(s.id);
    setSubName(s.name);
    setSubCode(s.code);
    setSubClassId(s.classGradeId || s.classGrade?.id || '');
    setSubColor(s.color || '#4F46E5');
    setErrorMsg('');
    setIsSubModalOpen(true);
  };

  const handleSaveSubject = async () => {
    if (!subName.trim() || !subCode.trim()) {
      setErrorMsg('Subject Name and Subject Code are required.');
      return;
    }
    if (!subClassId) {
      setErrorMsg('Please select a target Class Grade.');
      return;
    }

    const payload = {
      name: subName,
      code: subCode,
      classGradeId: subClassId,
      color: subColor,
    };

    try {
      setSaving(true);
      setErrorMsg('');
      if (editingSubId) {
        const updated = await api.updateSubject(editingSubId, payload);
        setSubjects((prev) => prev.map((s) => (s.id === editingSubId ? { ...s, ...updated } : s)));
      } else {
        const created = await api.createSubject(payload);
        setSubjects((prev) => [...prev, created]);
      }
      setIsSubModalOpen(false);
    } catch (err: any) {
      console.error('Failed to save subject:', err);
      setErrorMsg(err.message || 'Error saving subject.');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteSubject = async (id: string) => {
    try {
      await api.deleteSubject(id);
      setSubjects((prev) => prev.filter((s) => s.id !== id));
      setDeletingSubId(null);
    } catch (err: any) {
      alert('Failed to delete subject: ' + (err.message || 'Server error'));
    }
  };

  // CHAPTER MODAL HANDLERS
  const toggleExpandSubject = async (subId: string) => {
    if (expandedSubjectId === subId) {
      setExpandedSubjectId(null);
    } else {
      setExpandedSubjectId(subId);
      // Load detailed subject with chapters
      try {
        const fullSub = await api.getSubject(subId);
        setSubjects((prev) => prev.map((s) => (s.id === subId ? { ...s, chapters: fullSub.chapters } : s)));
      } catch (e) {
        console.warn('Load subject chapters error:', e);
      }
    }
  };

  const openCreateChapterModal = (subId: string, currentChapterCount: number) => {
    setEditingChId(null);
    setChSubjectId(subId);
    setChTitle('');
    setChNumber(currentChapterCount + 1);
    setChDescription('');
    setErrorMsg('');
    setIsChModalOpen(true);
  };

  const openEditChapterModal = (ch: Chapter, subId: string) => {
    setEditingChId(ch.id);
    setChSubjectId(subId);
    setChTitle(ch.title);
    setChNumber(ch.chapterNumber);
    setChDescription(ch.description || '');
    setErrorMsg('');
    setIsChModalOpen(true);
  };

  const handleSaveChapter = async () => {
    if (!chTitle.trim()) {
      setErrorMsg('Chapter Title is required.');
      return;
    }

    const payload = {
      title: chTitle,
      chapterNumber: Number(chNumber),
      description: chDescription,
      subjectId: chSubjectId,
    };

    try {
      setSaving(true);
      setErrorMsg('');
      if (editingChId) {
        const updated = await api.updateChapter(editingChId, payload);
        setSubjects((prev) =>
          prev.map((s) => {
            if (s.id === chSubjectId && s.chapters) {
              return {
                ...s,
                chapters: s.chapters.map((ch) => (ch.id === editingChId ? { ...ch, ...updated } : ch)),
              };
            }
            return s;
          })
        );
      } else {
        const created = await api.createChapter(payload);
        setSubjects((prev) =>
          prev.map((s) => {
            if (s.id === chSubjectId) {
              const existingChs = s.chapters || [];
              return {
                ...s,
                chapters: [...existingChs, created].sort((a, b) => a.chapterNumber - b.chapterNumber),
              };
            }
            return s;
          })
        );
      }
      setIsChModalOpen(false);
    } catch (err: any) {
      console.error('Failed to save chapter:', err);
      setErrorMsg(err.message || 'Error saving chapter.');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteChapter = async (chId: string, subId: string) => {
    try {
      await api.deleteChapter(chId);
      setSubjects((prev) =>
        prev.map((s) => {
          if (s.id === subId && s.chapters) {
            return {
              ...s,
              chapters: s.chapters.filter((ch) => ch.id !== chId),
            };
          }
          return s;
        })
      );
      setDeletingChId(null);
    } catch (err: any) {
      alert('Failed to delete chapter: ' + (err.message || 'Server error'));
    }
  };

  return (
    <DashboardLayout role="ADMIN">
      <div className="space-y-6 pb-12">
        {/* Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-xs">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 font-display flex items-center gap-2.5">
              <BookOpen className="w-7 h-7 text-indigo-600" />
              Subjects & Chapters Syllabi Editor
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Add and edit CBSE subjects, course codes, and chapter sequences across Class 5 to 12.
            </p>
          </div>
          <button
            onClick={openCreateSubjectModal}
            className="flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition-all shrink-0"
          >
            <Plus className="w-4 h-4" />
            Add New Subject
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedClassId('ALL')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedClassId === 'ALL'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Classes
          </button>
          {classes.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedClassId(c.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedClassId === c.id
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Class {c.number}
            </button>
          ))}
        </div>

        {/* Subjects List */}
        {loading ? (
          <div className="text-center py-16">
            <div className="animate-spin w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full mx-auto mb-3" />
            <p className="text-xs text-slate-500">Loading subjects and syllabi...</p>
          </div>
        ) : filteredSubjects.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-sm font-bold text-slate-700">No Subjects Found</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1">
              Click "Add New Subject" to configure subjects for this class.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredSubjects.map((sub) => {
              const isExpanded = expandedSubjectId === sub.id;

              return (
                <div
                  key={sub.id}
                  className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden transition-all"
                >
                  {/* Subject Header Card */}
                  <div className="p-5 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <button
                        onClick={() => toggleExpandSubject(sub.id)}
                        className="p-2 hover:bg-slate-100 rounded-xl text-slate-500 transition-colors"
                      >
                        {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                      </button>

                      <div
                        className="w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-white text-sm shadow-xs"
                        style={{ backgroundColor: sub.color || '#4F46E5' }}
                      >
                        {sub.code ? sub.code.substring(0, 3).toUpperCase() : 'SUB'}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-base font-extrabold text-slate-900 font-display">{sub.name}</h3>
                          <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-[10px] font-bold">
                            {sub.classGrade?.name || 'Class Grade'}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 font-medium mt-0.5">
                          Code: <span className="font-bold text-slate-700">{sub.code}</span> •{' '}
                          {sub.chapters?.length || sub._count?.chapters || 0} Chapters
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => openCreateChapterModal(sub.id, sub.chapters?.length || sub._count?.chapters || 0)}
                        className="px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold rounded-xl transition-colors flex items-center gap-1"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        Add Chapter
                      </button>

                      <button
                        onClick={() => openEditSubjectModal(sub)}
                        className="px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold rounded-xl transition-colors flex items-center gap-1"
                      >
                        <Edit className="w-3.5 h-3.5" />
                        Edit Subject
                      </button>

                      {deletingSubId === sub.id ? (
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleDeleteSubject(sub.id)}
                            className="px-2.5 py-1 bg-rose-600 text-white text-[11px] font-bold rounded-lg"
                          >
                            Confirm
                          </button>
                          <button
                            onClick={() => setDeletingSubId(null)}
                            className="px-2.5 py-1 bg-slate-200 text-slate-700 text-[11px] font-bold rounded-lg"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setDeletingSubId(sub.id)}
                          className="p-2 text-slate-400 hover:text-rose-600 transition-colors"
                          title="Delete Subject"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Expandable Chapters List */}
                  {isExpanded && (
                    <div className="bg-slate-50 border-t border-slate-200 p-5 space-y-3">
                      <h4 className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                        <FileText className="w-4 h-4 text-indigo-600" />
                        Chapters in {sub.name}
                      </h4>

                      {!sub.chapters || sub.chapters.length === 0 ? (
                        <p className="text-xs text-slate-400 italic py-2">
                          No chapters registered yet for {sub.name}. Click "+ Add Chapter" to add Ch 1.
                        </p>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {sub.chapters.map((ch) => (
                            <div
                              key={ch.id}
                              className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs flex items-center justify-between gap-3"
                            >
                              <div className="flex items-center gap-3">
                                <span className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0">
                                  {ch.chapterNumber}
                                </span>
                                <div>
                                  <h5 className="text-xs font-bold text-slate-900">{ch.title}</h5>
                                  <p className="text-[11px] text-slate-400 line-clamp-1">
                                    {ch.description || 'NCERT Chapter Content'}
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center gap-1 shrink-0">
                                <button
                                  onClick={() => openEditChapterModal(ch, sub.id)}
                                  className="p-1.5 text-slate-400 hover:text-indigo-600 transition-colors"
                                  title="Edit Chapter"
                                >
                                  <Edit className="w-3.5 h-3.5" />
                                </button>

                                {deletingChId === ch.id ? (
                                  <div className="flex items-center gap-1">
                                    <button
                                      onClick={() => handleDeleteChapter(ch.id, sub.id)}
                                      className="px-1.5 py-0.5 bg-rose-600 text-white text-[9px] font-bold rounded"
                                    >
                                      Yes
                                    </button>
                                    <button
                                      onClick={() => setDeletingChId(null)}
                                      className="px-1.5 py-0.5 bg-slate-200 text-slate-700 text-[9px] font-bold rounded"
                                    >
                                      No
                                    </button>
                                  </div>
                                ) : (
                                  <button
                                    onClick={() => setDeletingChId(ch.id)}
                                    className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors"
                                    title="Delete Chapter"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* SUBJECT MODAL */}
        {isSubModalOpen && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-md w-full border border-slate-200 shadow-2xl overflow-hidden">
              <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-indigo-400 font-bold">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-extrabold font-display">
                      {editingSubId ? 'Edit Subject Details' : 'Add New Subject'}
                    </h2>
                    <p className="text-[11px] text-slate-400">Configure subject code, grade and color accent.</p>
                  </div>
                </div>
                <button onClick={() => setIsSubModalOpen(false)} className="p-2 text-slate-400 hover:text-white rounded-xl">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {errorMsg && (
                <div className="mx-6 mt-4 p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold rounded-xl flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {errorMsg}
                </div>
              )}

              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Subject Name *</label>
                  <input
                    type="text"
                    value={subName}
                    onChange={(e) => setSubName(e.target.value)}
                    placeholder="e.g. Mathematics"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Subject Code *</label>
                  <input
                    type="text"
                    value={subCode}
                    onChange={(e) => setSubCode(e.target.value)}
                    placeholder="e.g. MATH7"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Class Grade *</label>
                  <select
                    value={subClassId}
                    onChange={(e) => setSubClassId(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select Class Grade</option>
                    {classes.map((c) => (
                      <option key={c.id} value={c.id}>
                        Class {c.number} ({c.name})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setIsSubModalOpen(false)}
                  className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveSubject}
                  disabled={saving}
                  className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-2 disabled:opacity-50"
                >
                  {saving ? 'Saving...' : editingSubId ? 'Update Subject' : 'Create Subject'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CHAPTER MODAL */}
        {isChModalOpen && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-md w-full border border-slate-200 shadow-2xl overflow-hidden">
              <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-400/40 flex items-center justify-center text-emerald-400 font-bold">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-extrabold font-display">
                      {editingChId ? 'Edit Chapter Details' : 'Add New Chapter'}
                    </h2>
                    <p className="text-[11px] text-slate-400">Configure chapter sequence, title, and overview.</p>
                  </div>
                </div>
                <button onClick={() => setIsChModalOpen(false)} className="p-2 text-slate-400 hover:text-white rounded-xl">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {errorMsg && (
                <div className="mx-6 mt-4 p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold rounded-xl flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {errorMsg}
                </div>
              )}

              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Chapter Number *</label>
                  <input
                    type="number"
                    value={chNumber}
                    onChange={(e) => setChNumber(Number(e.target.value))}
                    placeholder="1"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Chapter Title *</label>
                  <input
                    type="text"
                    value={chTitle}
                    onChange={(e) => setChTitle(e.target.value)}
                    placeholder="e.g. Integers"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Chapter Overview / Description</label>
                  <textarea
                    rows={3}
                    value={chDescription}
                    onChange={(e) => setChDescription(e.target.value)}
                    placeholder="Brief description of topics covered in chapter..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setIsChModalOpen(false)}
                  className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveChapter}
                  disabled={saving}
                  className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-2 disabled:opacity-50"
                >
                  {saving ? 'Saving...' : editingChId ? 'Update Chapter' : 'Create Chapter'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
