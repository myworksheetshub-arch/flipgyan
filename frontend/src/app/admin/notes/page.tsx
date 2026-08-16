'use client';

import React, { useState, useEffect } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { api } from '@/lib/api';
import { StudyNote, ClassGrade, Subject, Chapter } from '@/types';
import {
  BookOpen,
  Plus,
  Edit,
  Trash2,
  Search,
  CheckCircle,
  X,
  FileText,
  Brain,
  Sparkles,
  HelpCircle,
  AlertCircle,
} from 'lucide-react';

export default function AdminNotesPage() {
  const [notes, setNotes] = useState<StudyNote[]>([]);
  const [classes, setClasses] = useState<ClassGrade[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);

  const [selectedClassId, setSelectedClassId] = useState<string>('ALL');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('ALL');
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState(true);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'general' | 'deepdive' | 'mindmap' | 'concepts' | 'examples'>('general');

  // Form State
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [deepDive, setDeepDive] = useState('');
  const [chapterId, setChapterId] = useState('');
  const [mindMapJson, setMindMapJson] = useState('');
  const [keyConceptsText, setKeyConceptsText] = useState('');
  const [importantPointsText, setImportantPointsText] = useState('');
  const [definitionsList, setDefinitionsList] = useState<Array<{ term: string; meaning: string }>>([
    { term: '', meaning: '' },
  ]);
  const [examplesList, setExamplesList] = useState<Array<{ title: string; problem: string; solution: string }>>([
    { title: '', problem: '', solution: '' },
  ]);

  const [saving, setSaving] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Delete State
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    async function initData() {
      try {
        setLoading(true);
        const [notesRes, classesRes, subjectsRes] = await Promise.all([
          api.getStudyNotes(),
          api.getClasses(),
          api.getSubjects(),
        ]);
        setNotes(notesRes || []);
        setClasses(classesRes || []);
        setSubjects(subjectsRes || []);
      } catch (err: any) {
        console.error('Failed to load admin study notes:', err);
      } finally {
        setLoading(false);
      }
    }
    initData();
  }, []);

  // Filter subjects when class selection changes
  const filteredSubjects = selectedClassId === 'ALL'
    ? subjects
    : subjects.filter((s) => s.classGradeId === selectedClassId || s.classGrade?.id === selectedClassId);

  // Fetch chapters when modal opens or subject changes
  useEffect(() => {
    async function loadChapters() {
      if (selectedSubjectId !== 'ALL') {
        const res = await api.getChapters(selectedSubjectId);
        setChapters(res || []);
      } else {
        const res = await api.getChapters();
        setChapters(res || []);
      }
    }
    loadChapters();
  }, [selectedSubjectId]);

  // Filtered Notes list
  const filteredNotes = notes.filter((n) => {
    const matchesSearch =
      !search ||
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.summary.toLowerCase().includes(search.toLowerCase());

    const noteClassId = n.chapter?.subject?.classGradeId || n.chapter?.subject?.classGrade?.id;
    const matchesClass = selectedClassId === 'ALL' || noteClassId === selectedClassId;

    const noteSubjectId = n.chapter?.subjectId;
    const matchesSubject = selectedSubjectId === 'ALL' || noteSubjectId === selectedSubjectId;

    return matchesSearch && matchesClass && matchesSubject;
  });

  const openCreateModal = () => {
    setEditingNoteId(null);
    setTitle('');
    setSummary('');
    setDeepDive('');
    setChapterId(chapters[0]?.id || '');
    setMindMapJson(
      JSON.stringify(
        {
          topic: 'Central Topic',
          children: [
            { topic: 'Subtopic 1', children: [{ topic: 'Concept A' }] },
            { topic: 'Subtopic 2', children: [{ topic: 'Concept B' }] },
          ],
        },
        null,
        2
      )
    );
    setKeyConceptsText('');
    setImportantPointsText('');
    setDefinitionsList([{ term: '', meaning: '' }]);
    setExamplesList([{ title: '', problem: '', solution: '' }]);
    setErrorMsg('');
    setActiveTab('general');
    setIsModalOpen(true);
  };

  const openEditModal = (n: StudyNote) => {
    setEditingNoteId(n.id);
    setTitle(n.title);
    setSummary(n.summary || '');
    setDeepDive(n.deepDive || '');
    setChapterId(n.chapterId || '');

    // Mindmap JSON
    let parsedMindMap = n.mindMapJson;
    try {
      if (n.mindMapJson) {
        parsedMindMap = JSON.stringify(JSON.parse(n.mindMapJson), null, 2);
      }
    } catch (e) {
      parsedMindMap = n.mindMapJson || '';
    }
    setMindMapJson(parsedMindMap || '');

    // Key Concepts
    try {
      const kcArr = JSON.parse(n.keyConcepts || '[]');
      setKeyConceptsText(Array.isArray(kcArr) ? kcArr.join('\n') : '');
    } catch {
      setKeyConceptsText('');
    }

    // Important Points
    try {
      const ipArr = JSON.parse(n.importantPoints || '[]');
      setImportantPointsText(Array.isArray(ipArr) ? ipArr.join('\n') : '');
    } catch {
      setImportantPointsText('');
    }

    // Definitions
    try {
      const defArr = JSON.parse(n.definitions || '[]');
      setDefinitionsList(Array.isArray(defArr) && defArr.length > 0 ? defArr : [{ term: '', meaning: '' }]);
    } catch {
      setDefinitionsList([{ term: '', meaning: '' }]);
    }

    // Examples
    try {
      const exArr = JSON.parse(n.examples || '[]');
      setExamplesList(Array.isArray(exArr) && exArr.length > 0 ? exArr : [{ title: '', problem: '', solution: '' }]);
    } catch {
      setExamplesList([{ title: '', problem: '', solution: '' }]);
    }

    setErrorMsg('');
    setActiveTab('general');
    setIsModalOpen(true);
  };

  const handleSaveNote = async () => {
    if (!title.trim()) {
      setErrorMsg('Note Title is required.');
      return;
    }
    if (!chapterId) {
      setErrorMsg('Please select a valid Chapter.');
      return;
    }

    // Format fields
    const keyConceptsArr = keyConceptsText
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);
    const importantPointsArr = importantPointsText
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);
    const validDefs = definitionsList.filter((d) => d.term.trim() && d.meaning.trim());
    const validExs = examplesList.filter((e) => e.problem.trim());

    // Validate mindmap JSON if filled
    let formattedMindMapJson = mindMapJson;
    if (mindMapJson.trim()) {
      try {
        formattedMindMapJson = JSON.stringify(JSON.parse(mindMapJson));
      } catch (e) {
        setErrorMsg('Invalid Mind Map JSON syntax. Please check formatting.');
        return;
      }
    }

    const payload = {
      title,
      summary: summary || `Comprehensive Study Notes for ${title}`,
      deepDive,
      chapterId,
      mindMapJson: formattedMindMapJson,
      keyConcepts: JSON.stringify(keyConceptsArr),
      definitions: JSON.stringify(validDefs),
      examples: JSON.stringify(validExs),
      importantPoints: JSON.stringify(importantPointsArr),
      isPublished: true,
    };

    try {
      setSaving(true);
      setErrorMsg('');
      if (editingNoteId) {
        const updated = await api.updateStudyNote(editingNoteId, payload);
        setNotes((prev) => prev.map((item) => (item.id === editingNoteId ? { ...item, ...updated } : item)));
      } else {
        const created = await api.createStudyNote(payload);
        setNotes((prev) => [created, ...prev]);
      }
      setIsModalOpen(false);
    } catch (err: any) {
      console.error('Failed to save study note:', err);
      setErrorMsg(err.message || 'Error saving study note. Please check backend inputs.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await api.deleteStudyNote(id);
      setNotes((prev) => prev.filter((n) => n.id !== id));
      setDeletingId(null);
    } catch (err: any) {
      alert('Failed to delete study note: ' + (err.message || 'Server error'));
    }
  };

  return (
    <DashboardLayout role="ADMIN">
      <div className="space-y-6 pb-12">
        {/* Header Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-xs">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 font-display flex items-center gap-2.5">
              <Brain className="w-7 h-7 text-indigo-600" />
              Study Notes & Visual Mind Maps Editor
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Create, modify, and publish comprehensive NCERT study notes, deep dive theory, and visual mind maps.
            </p>
          </div>
          <button
            onClick={openCreateModal}
            className="flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition-all shrink-0"
          >
            <Plus className="w-4 h-4" />
            Add New Study Note
          </button>
        </div>

        {/* Filters Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search notes title, summary..."
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
              className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:ring-2 focus:ring-indigo-500"
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
              className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:ring-2 focus:ring-indigo-500"
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

        {/* Notes Grid */}
        {loading ? (
          <div className="text-center py-16">
            <div className="animate-spin w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full mx-auto mb-3" />
            <p className="text-xs text-slate-500">Loading study notes database...</p>
          </div>
        ) : filteredNotes.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
            <Brain className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-sm font-bold text-slate-700">No Study Notes Found</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1">
              Try adjusting your class/subject filters or search term, or click "Add New Study Note" to create one.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredNotes.map((note) => (
              <div
                key={note.id}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-[11px] font-bold rounded-lg border border-indigo-100">
                      {note.chapter?.subject?.name || 'Subject'} • Ch {note.chapter?.chapterNumber || 1}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      Class {note.chapter?.subject?.classGrade?.number || 7}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 line-clamp-1">{note.title}</h3>
                  <p className="text-xs text-slate-500 line-clamp-2">{note.summary}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openEditModal(note)}
                      className="px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <Edit className="w-3.5 h-3.5" />
                      Edit Note
                    </button>
                  </div>

                  {deletingId === note.id ? (
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleDelete(note.id)}
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
                      onClick={() => setDeletingId(note.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors"
                      title="Delete Study Note"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CREATE / EDIT MODAL */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-4xl w-full border border-slate-200 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
              {/* Modal Header */}
              <div className="p-6 bg-slate-900 text-white flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-indigo-400 font-bold">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-extrabold font-display">
                      {editingNoteId ? 'Edit Study Note & Mind Map' : 'Create New Study Note'}
                    </h2>
                    <p className="text-xs text-slate-400">
                      Configure deep dive markdown, interactive mind map nodes, and core concepts.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 text-slate-400 hover:text-white rounded-xl transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Tabs */}
              <div className="flex border-b border-slate-200 bg-slate-50 px-6 gap-2 shrink-0 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('general')}
                  className={`px-4 py-3 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${
                    activeTab === 'general'
                      ? 'border-indigo-600 text-indigo-600 bg-white'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  General & Chapter
                </button>

                <button
                  onClick={() => setActiveTab('deepdive')}
                  className={`px-4 py-3 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${
                    activeTab === 'deepdive'
                      ? 'border-indigo-600 text-indigo-600 bg-white'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  Deep Dive Markdown
                </button>

                <button
                  onClick={() => setActiveTab('mindmap')}
                  className={`px-4 py-3 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${
                    activeTab === 'mindmap'
                      ? 'border-indigo-600 text-indigo-600 bg-white'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Brain className="w-3.5 h-3.5" />
                  Mind Map JSON
                </button>

                <button
                  onClick={() => setActiveTab('concepts')}
                  className={`px-4 py-3 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${
                    activeTab === 'concepts'
                      ? 'border-indigo-600 text-indigo-600 bg-white'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Concepts & Tips
                </button>

                <button
                  onClick={() => setActiveTab('examples')}
                  className={`px-4 py-3 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${
                    activeTab === 'examples'
                      ? 'border-indigo-600 text-indigo-600 bg-white'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  Solved Examples & Defs
                </button>
              </div>

              {/* Error Banner */}
              {errorMsg && (
                <div className="mx-6 mt-4 p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold rounded-xl flex items-center gap-2 shrink-0">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {errorMsg}
                </div>
              )}

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-5 flex-1">
                {/* TAB 1: GENERAL */}
                {activeTab === 'general' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Study Note Title *</label>
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="e.g. Class 7 Integers Notes & Visual Mind Map"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Select Target Chapter *</label>
                      <select
                        value={chapterId}
                        onChange={(e) => setChapterId(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:ring-2 focus:ring-indigo-500"
                      >
                        {chapters.map((ch) => (
                          <option key={ch.id} value={ch.id}>
                            Ch {ch.chapterNumber}: {ch.title} ({ch.subject?.name} - Class {ch.subject?.classGrade?.number})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Brief Summary / Overview</label>
                      <textarea
                        rows={3}
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                        placeholder="Short 2-line introduction for study note cards..."
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                )}

                {/* TAB 2: DEEP DIVE MARKDOWN */}
                {activeTab === 'deepdive' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="block text-xs font-bold text-slate-700">Deep Dive Markdown Content</label>
                      <span className="text-[11px] text-slate-400">Supports KaTeX math $E=mc^2$ & Markdown headers</span>
                    </div>
                    <textarea
                      rows={14}
                      value={deepDive}
                      onChange={(e) => setDeepDive(e.target.value)}
                      placeholder="# Chapter 1: Integers\n\n## 1. Multiplication Rules\n- Positive x Positive = Positive\n- Negative x Negative = Positive..."
                      className="w-full p-4 bg-slate-900 text-slate-100 font-mono text-xs rounded-xl focus:ring-2 focus:ring-indigo-500 border border-slate-800 leading-relaxed"
                    />
                  </div>
                )}

                {/* TAB 3: MIND MAP JSON */}
                {activeTab === 'mindmap' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="block text-xs font-bold text-slate-700">Mind Map JSON Structure</label>
                      <span className="text-[11px] text-slate-400">Tree format: &#123; "topic": "Name", "children": [...] &#125;</span>
                    </div>
                    <textarea
                      rows={14}
                      value={mindMapJson}
                      onChange={(e) => setMindMapJson(e.target.value)}
                      placeholder={`{\n  "topic": "INTEGERS",\n  "children": [\n    {\n      "topic": "Types",\n      "children": [\n        { "topic": "Positive Integers" },\n        { "topic": "Negative Integers" }\n      ]\n    }\n  ]\n}`}
                      className="w-full p-4 bg-slate-900 text-emerald-400 font-mono text-xs rounded-xl focus:ring-2 focus:ring-indigo-500 border border-slate-800 leading-relaxed"
                    />
                  </div>
                )}

                {/* TAB 4: CONCEPTS & TIPS */}
                {activeTab === 'concepts' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Key Concepts to Remember (One concept per line)
                      </label>
                      <textarea
                        rows={5}
                        value={keyConceptsText}
                        onChange={(e) => setKeyConceptsText(e.target.value)}
                        placeholder="Positive integers are greater than zero.&#10;Rules of Addition: Same signs add and keep common sign."
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Exam Tips & Common Mistakes (One point per line)
                      </label>
                      <textarea
                        rows={5}
                        value={importantPointsText}
                        onChange={(e) => setImportantPointsText(e.target.value)}
                        placeholder="⚠️ Common Mistake: Forgetting negative sign in multiplication.&#10;💡 Tip: Draw a number line for integer comparisons."
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                )}

                {/* TAB 5: SOLVED EXAMPLES & DEFINITIONS */}
                {activeTab === 'examples' && (
                  <div className="space-y-6">
                    {/* Definitions */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold text-slate-800">Key Definitions & Terms</h4>
                        <button
                          type="button"
                          onClick={() => setDefinitionsList([...definitionsList, { term: '', meaning: '' }])}
                          className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-[11px] font-bold rounded-lg hover:bg-indigo-100"
                        >
                          + Add Definition
                        </button>
                      </div>

                      {definitionsList.map((def, idx) => (
                        <div key={idx} className="flex gap-2 items-center bg-slate-50 p-3 rounded-xl border border-slate-200">
                          <input
                            type="text"
                            placeholder="Term (e.g. Additive Inverse)"
                            value={def.term}
                            onChange={(e) => {
                              const updated = [...definitionsList];
                              updated[idx].term = e.target.value;
                              setDefinitionsList(updated);
                            }}
                            className="w-1/3 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs"
                          />
                          <input
                            type="text"
                            placeholder="Meaning / Identity formula"
                            value={def.meaning}
                            onChange={(e) => {
                              const updated = [...definitionsList];
                              updated[idx].meaning = e.target.value;
                              setDefinitionsList(updated);
                            }}
                            className="flex-1 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs"
                          />
                          {definitionsList.length > 1 && (
                            <button
                              type="button"
                              onClick={() => setDefinitionsList(definitionsList.filter((_, i) => i !== idx))}
                              className="text-slate-400 hover:text-rose-600 p-1"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Solved Examples */}
                    <div className="space-y-3 pt-4 border-t border-slate-200">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold text-slate-800">Step-by-Step Solved Examples</h4>
                        <button
                          type="button"
                          onClick={() => setExamplesList([...examplesList, { title: '', problem: '', solution: '' }])}
                          className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-[11px] font-bold rounded-lg hover:bg-indigo-100"
                        >
                          + Add Solved Example
                        </button>
                      </div>

                      {examplesList.map((ex, idx) => (
                        <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                          <div className="flex justify-between items-center">
                            <input
                              type="text"
                              placeholder={`Example ${idx + 1} Title (e.g. Evaluating Product)`}
                              value={ex.title}
                              onChange={(e) => {
                                const updated = [...examplesList];
                                updated[idx].title = e.target.value;
                                setExamplesList(updated);
                              }}
                              className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold"
                            />
                            {examplesList.length > 1 && (
                              <button
                                type="button"
                                onClick={() => setExamplesList(examplesList.filter((_, i) => i !== idx))}
                                className="text-slate-400 hover:text-rose-600 ml-2"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                          <textarea
                            rows={2}
                            placeholder="Question Problem Statement..."
                            value={ex.problem}
                            onChange={(e) => {
                              const updated = [...examplesList];
                              updated[idx].problem = e.target.value;
                              setExamplesList(updated);
                            }}
                            className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs"
                          />
                          <textarea
                            rows={3}
                            placeholder="Step-by-Step Verified Solution..."
                            value={ex.solution}
                            onChange={(e) => {
                              const updated = [...examplesList];
                              updated[idx].solution = e.target.value;
                              setExamplesList(updated);
                            }}
                            className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
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
                  onClick={handleSaveNote}
                  disabled={saving}
                  className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-2 disabled:opacity-50"
                >
                  {saving ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      {editingNoteId ? 'Update Study Note' : 'Create & Publish Note'}
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
