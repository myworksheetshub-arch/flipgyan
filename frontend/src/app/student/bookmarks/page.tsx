'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { api } from '@/lib/api';
import { Bookmark, BookOpen, FileSpreadsheet, Trash2, ArrowRight } from 'lucide-react';

export default function StudentBookmarksPage() {
  const [bookmarks, setBookmarks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await api.getBookmarks();
        setBookmarks(data);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const handleRemove = async (id: string) => {
    try {
      await api.toggleBookmark({ itemType: 'NOTE', itemId: id, title: '' }); // or delete
      setBookmarks(bookmarks.filter((b) => b.id !== id));
    } catch (err) {}
  };

  return (
    <DashboardLayout role="STUDENT">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 font-display">Saved Bookmarks</h1>
          <p className="text-xs text-slate-500">Quick access to all notes, formulas, and worksheets you've saved.</p>
        </div>

        {bookmarks.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
            <Bookmark className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-sm font-bold text-slate-800">No saved bookmarks yet</h3>
            <p className="text-xs text-slate-500">Click the bookmark icon on any note or worksheet to save it here.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookmarks.map((bm) => (
              <div
                key={bm.id}
                className="bg-white rounded-3xl border border-slate-200 p-6 hover:shadow-md transition flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-700 text-xs font-bold">
                    {bm.itemType}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">{bm.title}</h3>
                  {bm.subtitle && <p className="text-xs text-slate-500">{bm.subtitle}</p>}
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <Link
                    href={bm.itemType === 'NOTE' ? `/study-notes/${bm.itemId}` : `/worksheets/${bm.itemId}`}
                    className="font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1"
                  >
                    <span>Open Material</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
