'use client';

import React from 'react';
import Link from 'next/link';
import { Zap, BookOpen, FileSpreadsheet, HelpCircle, FileText, Sparkles, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-14 pb-8 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-linear-to-tr from-brand-600 to-sky-400 flex items-center justify-center text-white shadow-md">
                <Zap className="w-5 h-5 fill-white text-white" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white font-display">
                Flip<span className="text-brand-400">Gyan</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              India's premier interactive educational platform for K–12 and CBSE students, teachers, and parents.
              Empowering learners with structured study notes, visual mind maps, printable worksheets, and gamified quizzes.
            </p>
            <p className="text-xs text-brand-400 font-semibold italic">
              "Learn Smarter. Practice Better. Achieve More."
            </p>
          </div>

          {/* Quick Learning Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Curriculum & Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/study-notes" className="hover:text-white transition">Study Notes</Link>
              </li>
              <li>
                <Link href="/worksheets" className="hover:text-white transition">Practice Worksheets</Link>
              </li>
              <li>
                <Link href="/quizzes" className="hover:text-white transition">Interactive Quizzes</Link>
              </li>
              <li>
                <Link href="/question-papers" className="hover:text-white transition">CBSE Question Papers</Link>
              </li>
              <li>
                <Link href="/classes" className="hover:text-white transition">Classes 5 to 10</Link>
              </li>
            </ul>
          </div>

          {/* Popular CBSE Classes */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">CBSE Classes</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/classes" className="hover:text-white transition">Class 10 Board Prep</Link>
              </li>
              <li>
                <Link href="/classes" className="hover:text-white transition">Class 9 Science & Math</Link>
              </li>
              <li>
                <Link href="/classes" className="hover:text-white transition">Class 8 Foundations</Link>
              </li>
              <li>
                <Link href="/classes" className="hover:text-white transition">Class 7 Intermediate</Link>
              </li>
              <li>
                <Link href="/classes" className="hover:text-white transition">Class 6 Middle School</Link>
              </li>
            </ul>
          </div>

          {/* Portals & Company */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Portals & Info</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/student/dashboard" className="hover:text-white transition">Student Portal</Link>
              </li>
              <li>
                <Link href="/teacher/dashboard" className="hover:text-white transition">Teacher Portal</Link>
              </li>
              <li>
                <Link href="/parent/dashboard" className="hover:text-white transition">Parent Portal</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">About FlipGyan</Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition">Pricing Plans</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">Support & Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} FlipGyan Learning Technologies. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Built with precision for educational excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
