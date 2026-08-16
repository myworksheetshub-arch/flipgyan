'use client';

import React from 'react';
import Link from 'next/link';
import { Zap, Target, Award, Users, BookOpen, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>About FlipGyan</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-display">
          Empowering Every Student to Excel
        </h1>
        <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
          FlipGyan was founded to revolutionize K–12 and CBSE education by combining cognitive learning science, visual mind maps, and gamified practice engines.
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 font-display">Our Mission</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            To provide high-quality, NCERT-aligned interactive learning content that simplifies complex formulas and concepts into intuitive visual trees, bite-sized revision notes, and targeted practice.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 font-display">Our Pedagogical Framework</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Built upon Bloom's Revised Taxonomy and CBSE competency-based assessment guidelines, ensuring students build conceptual understanding, logical deduction, and problem-solving fluency.
          </p>
        </div>
      </div>

      {/* Pillars */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-8">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display">The FlipGyan Advantage</h2>
          <p className="text-xs sm:text-sm text-slate-400">Why thousands of educators and students choose us daily</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
          <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
            <span className="font-extrabold text-brand-400 text-sm">Visual Mind Maps</span>
            <p className="text-slate-300 leading-relaxed">
              Hierarchical concept visualizers that allow instant revision of multi-chapter syllabus in under 5 minutes.
            </p>
          </div>
          <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
            <span className="font-extrabold text-amber-400 text-sm">Gamified Practice</span>
            <p className="text-slate-300 leading-relaxed">
              Streaks, XP badges, and live question palettes that turn homework into an engaging academic quest.
            </p>
          </div>
          <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
            <span className="font-extrabold text-emerald-400 text-sm">Board Blueprint Engine</span>
            <p className="text-slate-300 leading-relaxed">
              Instant generation of pre-board question papers aligned with the latest CBSE marking schemes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
