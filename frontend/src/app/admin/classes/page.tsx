'use client';

import React, { useState, useEffect } from 'react';
import { api } from '@/lib/api';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { ClassGrade } from '@/types';
import { Layers, Plus, Edit, Trash2, CheckCircle, X, AlertCircle, BookOpen, Users } from 'lucide-react';

export default function AdminClassesPage() {
  const [classes, setClasses] = useState<ClassGrade[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingClassId, setEditingClassId] = useState<string | null>(null);

  // Form State
  const [name, setName] = useState('');
  const [number, setNumber] = useState(7);
  const [order, setOrder] = useState(7);
  const [description, setDescription] = useState('');

  const [saving, setSaving] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const data = await api.getClasses();
        setClasses(data || []);
      } catch (err) {
        console.error('Failed to load classes:', err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const openCreateModal = () => {
    setEditingClassId(null);
    setName(`Class ${classes.length + 5}`);
    setNumber(classes.length + 5);
    setOrder(classes.length + 5);
    setDescription('CBSE Standard Curriculum Grade');
    setErrorMsg('');
    setIsModalOpen(true);
  };

  const openEditModal = (c: ClassGrade) => {
    setEditingClassId(c.id);
    setName(c.name);
    setNumber(c.number);
    setOrder(c.order || c.number);
    setDescription(c.description || '');
    setErrorMsg('');
    setIsModalOpen(true);
  };

  const handleSaveClass = async () => {
    if (!name.trim()) {
      setErrorMsg('Class Name is required.');
      return;
    }

    const payload = {
      name,
      number: Number(number),
      order: Number(order),
      description,
    };

    try {
      setSaving(true);
      setErrorMsg('');
      if (editingClassId) {
        const updated = await api.updateClass(editingClassId, payload);
        setClasses((prev) => prev.map((item) => (item.id === editingClassId ? { ...item, ...updated } : item)));
      } else {
        const created = await api.createClass(payload);
        setClasses((prev) => [...prev, created].sort((a, b) => a.number - b.number));
      }
      setIsModalOpen(false);
    } catch (err: any) {
      console.error('Failed to save class:', err);
      setErrorMsg(err.message || 'Failed to save class grade.');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteClass = async (id: string) => {
    try {
      await api.deleteClass(id);
      setClasses((prev) => prev.filter((c) => c.id !== id));
      setDeletingId(null);
    } catch (err: any) {
      alert('Failed to delete class grade: ' + (err.message || 'Server error'));
    }
  };

  return (
    <DashboardLayout role="ADMIN">
      <div className="space-y-6 pb-12">
        {/* Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-xs">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 font-display flex items-center gap-2.5">
              <Layers className="w-7 h-7 text-brand-600" />
              Manage Classes & Curriculum Standards
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Configure CBSE class grades (Classes 5 through 12), display order, and curriculum descriptions.
            </p>
          </div>
          <button
            onClick={openCreateModal}
            className="flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-md transition-all shrink-0"
          >
            <Plus className="w-4 h-4" />
            Add New Class Grade
          </button>
        </div>

        {/* Classes Grid */}
        {loading ? (
          <div className="text-center py-16">
            <div className="animate-spin w-8 h-8 border-4 border-brand-600 border-t-transparent rounded-full mx-auto mb-3" />
            <p className="text-xs text-slate-500">Loading curriculum standards...</p>
          </div>
        ) : classes.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
            <Layers className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-sm font-bold text-slate-700">No Class Grades Registered</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1">
              Click "Add New Class Grade" to register Class 5 through 12.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {classes.map((c) => (
              <div
                key={c.id}
                className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 font-extrabold flex items-center justify-center text-xl shadow-xs border border-brand-100">
                      {c.number}
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-lg">
                      Order: #{c.order || c.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base font-display">{c.name}</h3>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                      {c.description || 'CBSE Standardized Curriculum & PARAKH Learning Outcomes'}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-slate-500 pt-2 border-t border-slate-100">
                    <span className="flex items-center gap-1 font-semibold">
                      <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                      {c._count?.subjects || 0} Subjects
                    </span>
                    <span className="flex items-center gap-1 font-semibold">
                      <Users className="w-3.5 h-3.5 text-emerald-500" />
                      {c._count?.users || 0} Students
                    </span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => openEditModal(c)}
                    className="px-3 py-1.5 bg-brand-50 hover:bg-brand-100 text-brand-700 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <Edit className="w-3.5 h-3.5" />
                    Edit Grade
                  </button>

                  {deletingId === c.id ? (
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleDeleteClass(c.id)}
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
                      onClick={() => setDeletingId(c.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors"
                      title="Delete Class Grade"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* MODAL */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-md w-full border border-slate-200 shadow-2xl overflow-hidden">
              <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-600/30 border border-brand-400/40 flex items-center justify-center text-brand-400 font-bold">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-extrabold font-display">
                      {editingClassId ? 'Edit Class Grade' : 'Add New Class Grade'}
                    </h2>
                    <p className="text-[11px] text-slate-400">Configure grade number, label and order.</p>
                  </div>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="p-2 text-slate-400 hover:text-white rounded-xl">
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
                  <label className="block text-xs font-bold text-slate-700 mb-1">Class Name *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Class 10"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Grade Number *</label>
                    <input
                      type="number"
                      value={number}
                      onChange={(e) => setNumber(Number(e.target.value))}
                      placeholder="10"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Display Order</label>
                    <input
                      type="number"
                      value={order}
                      onChange={(e) => setOrder(Number(e.target.value))}
                      placeholder="10"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Curriculum Description</label>
                  <textarea
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="CBSE aligned curriculum standards..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveClass}
                  disabled={saving}
                  className="px-6 py-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-2 disabled:opacity-50"
                >
                  {saving ? 'Saving...' : editingClassId ? 'Update Grade' : 'Create Grade'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
