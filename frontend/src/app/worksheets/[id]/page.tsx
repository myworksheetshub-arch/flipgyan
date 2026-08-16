'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { api } from '@/lib/api';
import { Worksheet } from '@/types';
import { WorksheetSolver } from '@/components/worksheet/WorksheetSolver';
import { ChevronLeft } from 'lucide-react';

export default function WorksheetDetailPage() {
  const { id } = useParams() as { id: string };
  const [worksheet, setWorksheet] = useState<Worksheet | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadWorksheet() {
      try {
        const data = await api.getWorksheet(id);
        setWorksheet(data);
      } catch (err) {
        console.error('Failed to load worksheet:', err);
      } finally {
        setLoading(false);
      }
    }
    loadWorksheet();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <div className="w-12 h-12 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-xs text-slate-500 font-medium">Loading worksheet questions & answer key...</p>
      </div>
    );
  }

  if (!worksheet) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-800">Worksheet Not Found</h2>
        <Link href="/worksheets" className="inline-flex items-center gap-2 text-xs font-bold text-brand-600">
          <ChevronLeft className="w-4 h-4" /> Back to Worksheets
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <div className="no-print">
        <Link
          href="/worksheets"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-brand-600 transition"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>All Worksheets</span>
        </Link>
      </div>

      <WorksheetSolver worksheet={worksheet} />
    </div>
  );
}
