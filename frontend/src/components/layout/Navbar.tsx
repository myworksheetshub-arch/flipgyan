'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import {
  BookOpen,
  FileText,
  HelpCircle,
  FileSpreadsheet,
  Search,
  Flame,
  Zap,
  User as UserIcon,
  LogOut,
  LayoutDashboard,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Award,
} from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout, switchDemoUser } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const navLinks = [
    { name: 'Study Notes', href: '/study-notes', icon: BookOpen },
    { name: 'Worksheets', href: '/worksheets', icon: FileSpreadsheet },
    { name: 'Quizzes', href: '/quizzes', icon: HelpCircle },
    { name: 'Question Papers', href: '/question-papers', icon: FileText },
    { name: 'Classes & Subjects', href: '/classes', icon: Sparkles },
    { name: 'Pricing', href: '/pricing', icon: Award },
  ];

  const isStudent = !user || user?.role === 'STUDENT' || (user as any)?.role === 'PRO_STUDENT';

  const visibleNavLinks = navLinks.filter((link) => {
    if (isStudent && (link.name === 'Question Papers' || link.name === 'Classes & Subjects')) {
      return false;
    }
    return true;
  });

  const getDashboardHref = () => {
    if (!user) return '/login';
    switch (user.role) {
      case 'ADMIN':
        return '/admin/dashboard';
      case 'TEACHER':
        return '/teacher/dashboard';
      case 'PARENT':
        return '/parent/dashboard';
      default:
        return '/student/dashboard';
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-700 via-brand-600 to-sky-400 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5 fill-white text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 font-display">
                Flip<span className="text-brand-600">Gyan</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 -mt-1">
                Learn Smarter
              </span>
            </div>
          </Link>

          {/* Search Bar - Hidden on small mobile */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xs relative">
            <input
              type="text"
              placeholder="Search notes, questions, quizzes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-100/80 hover:bg-slate-100 focus:bg-white border border-transparent focus:border-brand-500 rounded-full outline-none transition-all"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2 pointer-events-none" />
          </form>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {visibleNavLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    isActive
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-brand-600' : 'text-slate-400'}`} />
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* User / Auth section */}
          <div className="flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Streak and XP Badges */}
                <div className="hidden sm:flex items-center gap-2 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-full text-xs font-bold text-amber-700">
                  <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500 animate-pulse" />
                  <span>{user.streakDays || 1}d Streak</span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 bg-sky-50 border border-sky-200/80 px-2.5 py-1 rounded-full text-xs font-bold text-sky-700">
                  <Zap className="w-3.5 h-3.5 fill-sky-500 text-sky-500" />
                  <span>{user.totalXp || 0} XP</span>
                </div>

                {/* Dashboard Button */}
                <Link
                  href={getDashboardHref()}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
                >
                  <LayoutDashboard className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Dashboard</span>
                </Link>

                {/* User Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    className="flex items-center gap-2 p-1 rounded-full border border-slate-200 hover:border-slate-300 focus:outline-none"
                  >
                    <img
                      src={user.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100'}
                      alt={user.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 mr-1" />
                  </button>

                  {userDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in zoom-in-95">
                      <div className="px-4 py-2 border-b border-slate-100">
                        <p className="text-xs font-bold text-slate-900 truncate">{user.name}</p>
                        <p className="text-[11px] text-slate-500 truncate">{user.email}</p>
                        <span className="inline-block mt-1 px-2 py-0.5 text-[10px] font-bold rounded-full bg-brand-50 text-brand-700 uppercase">
                          {user.role}
                        </span>
                      </div>

                      <div className="py-1">
                        <Link
                          href={getDashboardHref()}
                          onClick={() => setUserDropdownOpen(false)}
                          className="flex items-center gap-2 px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 font-medium"
                        >
                          <LayoutDashboard className="w-4 h-4 text-slate-400" />
                          Dashboard Portal
                        </Link>

                        {user.role === 'TEACHER' && (
                          <>
                            <Link
                              href="/teacher/quizzes"
                              onClick={() => setUserDropdownOpen(false)}
                              className="flex items-center gap-2 px-4 py-2 text-xs text-sky-700 hover:bg-sky-50 font-bold"
                            >
                              <HelpCircle className="w-4 h-4 text-sky-600" />
                              Quiz Maker Studio
                            </Link>
                            <Link
                              href="/teacher/worksheets"
                              onClick={() => setUserDropdownOpen(false)}
                              className="flex items-center gap-2 px-4 py-2 text-xs text-emerald-700 hover:bg-emerald-50 font-semibold"
                            >
                              <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                              Worksheet Creator
                            </Link>
                            <Link
                              href="/teacher/question-papers"
                              onClick={() => setUserDropdownOpen(false)}
                              className="flex items-center gap-2 px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 font-semibold"
                            >
                              <FileText className="w-4 h-4 text-brand-600" />
                              Question Paper Generator
                            </Link>
                          </>
                        )}

                        {user.role === 'STUDENT' && (
                          <>
                            <Link
                              href="/student/bookmarks"
                              onClick={() => setUserDropdownOpen(false)}
                              className="flex items-center gap-2 px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 font-medium"
                            >
                              <BookOpen className="w-4 h-4 text-slate-400" />
                              My Bookmarks
                            </Link>
                            <Link
                              href="/student/achievements"
                              onClick={() => setUserDropdownOpen(false)}
                              className="flex items-center gap-2 px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 font-medium"
                            >
                              <Award className="w-4 h-4 text-slate-400" />
                              Badges & XP
                            </Link>
                          </>
                        )}
                      </div>

                      <div className="border-t border-slate-100 pt-1">
                        <button
                          onClick={() => {
                            logout();
                            setUserDropdownOpen(false);
                            router.push('/');
                          }}
                          className="flex items-center gap-2 w-full px-4 py-2 text-xs text-rose-600 hover:bg-rose-50 font-medium text-left"
                        >
                          <LogOut className="w-4 h-4" />
                          Sign Out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                {/* Demo quick login shortcuts */}
                <div className="hidden xl:flex items-center gap-1 text-[11px] font-semibold text-slate-500 bg-slate-100 p-1 rounded-lg">
                  <span className="px-1 text-slate-400">Demo:</span>
                  <button
                    onClick={() => switchDemoUser('STUDENT')}
                    className="px-2 py-0.5 bg-white hover:bg-brand-50 hover:text-brand-700 rounded-md text-slate-700 transition"
                  >
                    Student
                  </button>
                  <button
                    onClick={() => switchDemoUser('TEACHER')}
                    className="px-2 py-0.5 bg-white hover:bg-brand-50 hover:text-brand-700 rounded-md text-slate-700 transition"
                  >
                    Teacher
                  </button>
                  <button
                    onClick={() => switchDemoUser('PARENT')}
                    className="px-2 py-0.5 bg-white hover:bg-brand-50 hover:text-brand-700 rounded-md text-slate-700 transition"
                  >
                    Parent
                  </button>
                  <button
                    onClick={() => switchDemoUser('ADMIN')}
                    className="px-2 py-0.5 bg-white hover:bg-brand-50 hover:text-brand-700 rounded-md text-slate-700 transition"
                  >
                    Admin
                  </button>
                </div>

                <Link
                  href="/login"
                  className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-lg transition"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="px-3.5 py-1.5 text-xs font-bold text-white bg-brand-600 hover:bg-brand-700 rounded-lg shadow-xs transition"
                >
                  Sign up
                </Link>
              </div>
            )}

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search notes, worksheets, quizzes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-100 border border-slate-200 rounded-lg outline-none"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
          </form>

          <div className="space-y-1">
            {visibleNavLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                >
                  <Icon className="w-4 h-4 text-brand-600" />
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Switch Demo Role</p>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  switchDemoUser('STUDENT');
                  setMobileMenuOpen(false);
                }}
                className="py-1.5 px-2 text-xs bg-slate-100 hover:bg-brand-50 hover:text-brand-700 font-semibold rounded-lg text-center"
              >
                Student Demo
              </button>
              <button
                onClick={() => {
                  switchDemoUser('TEACHER');
                  setMobileMenuOpen(false);
                }}
                className="py-1.5 px-2 text-xs bg-slate-100 hover:bg-brand-50 hover:text-brand-700 font-semibold rounded-lg text-center"
              >
                Teacher Demo
              </button>
              <button
                onClick={() => {
                  switchDemoUser('PARENT');
                  setMobileMenuOpen(false);
                }}
                className="py-1.5 px-2 text-xs bg-slate-100 hover:bg-brand-50 hover:text-brand-700 font-semibold rounded-lg text-center"
              >
                Parent Demo
              </button>
              <button
                onClick={() => {
                  switchDemoUser('ADMIN');
                  setMobileMenuOpen(false);
                }}
                className="py-1.5 px-2 text-xs bg-slate-100 hover:bg-brand-50 hover:text-brand-700 font-semibold rounded-lg text-center"
              >
                Admin Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
