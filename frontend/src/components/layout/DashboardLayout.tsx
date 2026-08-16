'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import {
  LayoutDashboard,
  BookOpen,
  FileSpreadsheet,
  HelpCircle,
  Award,
  Flame,
  Zap,
  Bookmark,
  TrendingUp,
  Settings,
  Users,
  FileText,
  Layers,
  CreditCard,
  LogOut,
  ChevronRight,
  Menu,
  X,
  Sparkles,
  GraduationCap,
  Shield,
  HeartHandshake,
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: 'STUDENT' | 'TEACHER' | 'PARENT' | 'ADMIN';
}

export function DashboardLayout({ children, role }: DashboardLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout, switchDemoUser } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const getNavLinks = () => {
    switch (role) {
      case 'STUDENT':
        return [
          { name: 'Dashboard Overview', href: '/student/dashboard', icon: LayoutDashboard },
          { name: 'Study Notes', href: '/student/notes', icon: BookOpen },
          { name: 'Practice Worksheets', href: '/student/worksheets', icon: FileSpreadsheet },
          { name: 'Interactive Quizzes', href: '/student/quizzes', icon: HelpCircle },
          { name: 'My Quiz Results', href: '/student/results', icon: TrendingUp },
          { name: 'Saved Bookmarks', href: '/student/bookmarks', icon: Bookmark },
          { name: 'Achievements & Badges', href: '/student/achievements', icon: Award },
          { name: 'Leaderboard', href: '/student/leaderboard', icon: Flame },
          { name: 'Account Settings', href: '/student/settings', icon: Settings },
        ];
      case 'TEACHER':
        return [
          { name: 'Teacher Dashboard', href: '/teacher/dashboard', icon: LayoutDashboard },
          { name: 'My Students', href: '/teacher/students', icon: Users },
          { name: 'Class Cohorts', href: '/teacher/classes', icon: GraduationCap },
          { name: 'Create Worksheets', href: '/teacher/worksheets', icon: FileSpreadsheet },
          { name: 'Quiz Maker Studio', href: '/teacher/quizzes', icon: HelpCircle },
          { name: 'Question Bank', href: '/teacher/questions', icon: Layers },
          { name: 'Question Paper Generator', href: '/teacher/question-papers', icon: FileText },
          { name: 'Class Analytics', href: '/teacher/analytics', icon: TrendingUp },
        ];
      case 'PARENT':
        return [
          { name: 'Parent Dashboard', href: '/parent/dashboard', icon: LayoutDashboard },
          { name: 'Children Overview', href: '/parent/children', icon: HeartHandshake },
          { name: 'Subject Progress', href: '/parent/progress', icon: TrendingUp },
          { name: 'Test Results', href: '/parent/results', icon: Award },
        ];
      case 'ADMIN':
        return [
          { name: 'Admin Overview', href: '/admin/dashboard', icon: LayoutDashboard },
          { name: 'User Management', href: '/admin/users', icon: Users },
          { name: 'Curriculum & Classes', href: '/admin/classes', icon: GraduationCap },
          { name: 'Subjects & Chapters', href: '/admin/subjects', icon: BookOpen },
          { name: 'Master Question Bank', href: '/admin/questions', icon: Layers },
          { name: 'Worksheets Manager', href: '/admin/worksheets', icon: FileSpreadsheet },
          { name: 'Quizzes Manager', href: '/admin/quizzes', icon: HelpCircle },
          { name: 'Study Notes Manager', href: '/admin/notes', icon: FileText },
          { name: 'Subscriptions & Revenue', href: '/admin/subscriptions', icon: CreditCard },
          { name: 'System Analytics', href: '/admin/analytics', icon: TrendingUp },
          { name: 'Portal Settings', href: '/admin/settings', icon: Settings },
        ];
      default:
        return [];
    }
  };

  const navLinks = getNavLinks();

  const getRoleBadge = () => {
    switch (role) {
      case 'ADMIN':
        return { label: 'Admin Portal', bg: 'bg-rose-500/10 text-rose-700 border-rose-200', icon: Shield };
      case 'TEACHER':
        return { label: 'Teacher Portal', bg: 'bg-indigo-500/10 text-indigo-700 border-indigo-200', icon: GraduationCap };
      case 'PARENT':
        return { label: 'Parent Portal', bg: 'bg-emerald-500/10 text-emerald-700 border-emerald-200', icon: HeartHandshake };
      default:
        return { label: 'Student Portal', bg: 'bg-brand-500/10 text-brand-700 border-brand-200', icon: Zap };
    }
  };

  const roleBadge = getRoleBadge();
  const RoleIcon = roleBadge.icon;

  return (
    <div className="min-h-screen bg-slate-100/60 flex flex-col md:flex-row">
      {/* Mobile Top Bar */}
      <div className="md:hidden bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-100"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <span className="font-bold text-sm text-slate-800 flex items-center gap-1.5">
            <RoleIcon className="w-4 h-4 text-brand-600" />
            {roleBadge.label}
          </span>
        </div>

        {user && (
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700">{user.name}</span>
          </div>
        )}
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed md:sticky top-0 left-0 z-40 h-screen w-64 bg-white border-r border-slate-200/80 p-5 flex flex-col justify-between transition-transform duration-200 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="space-y-6">
          {/* Portal Header */}
          <div className="space-y-3 pb-4 border-b border-slate-100">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-linear-to-tr from-brand-600 to-sky-400 flex items-center justify-center text-white shadow-xs">
                <Zap className="w-4 h-4 fill-white" />
              </div>
              <span className="text-lg font-extrabold text-slate-900 font-display">
                Flip<span className="text-brand-600">Gyan</span>
              </span>
            </Link>

            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-bold ${roleBadge.bg}`}>
              <RoleIcon className="w-3.5 h-3.5" />
              <span>{roleBadge.label}</span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-brand-600 text-white shadow-xs shadow-brand-500/20 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    <span>{link.name}</span>
                  </div>
                  {isActive && <ChevronRight className="w-3.5 h-3.5 text-white/80" />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Card & Switcher */}
        <div className="pt-4 border-t border-slate-100 space-y-3">
          {user && (
            <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-50 border border-slate-200/60">
              <img
                src={user.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100'}
                alt={user.name}
                className="w-9 h-9 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-slate-900 truncate">{user.name}</p>
                <p className="text-[11px] text-slate-500 truncate">{user.email}</p>
              </div>
            </div>
          )}

          {/* Quick Demo Switcher */}
          <div className="text-[11px] text-slate-400 font-medium">
            <span className="block mb-1.5 font-bold uppercase tracking-wider text-[10px]">Switch Demo Portal:</span>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                onClick={() => {
                  switchDemoUser('STUDENT');
                  router.push('/student/dashboard');
                }}
                className={`py-1 px-2 text-[11px] font-bold rounded-lg transition text-center ${
                  role === 'STUDENT' ? 'bg-brand-50 text-brand-700 border border-brand-200' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                Student
              </button>
              <button
                onClick={() => {
                  switchDemoUser('TEACHER');
                  router.push('/teacher/dashboard');
                }}
                className={`py-1 px-2 text-[11px] font-bold rounded-lg transition text-center ${
                  role === 'TEACHER' ? 'bg-brand-50 text-brand-700 border border-brand-200' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                Teacher
              </button>
              <button
                onClick={() => {
                  switchDemoUser('PARENT');
                  router.push('/parent/dashboard');
                }}
                className={`py-1 px-2 text-[11px] font-bold rounded-lg transition text-center ${
                  role === 'PARENT' ? 'bg-brand-50 text-brand-700 border border-brand-200' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                Parent
              </button>
              <button
                onClick={() => {
                  switchDemoUser('ADMIN');
                  router.push('/admin/dashboard');
                }}
                className={`py-1 px-2 text-[11px] font-bold rounded-lg transition text-center ${
                  role === 'ADMIN' ? 'bg-brand-50 text-brand-700 border border-brand-200' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                Admin
              </button>
            </div>
          </div>

          <button
            onClick={() => {
              logout();
              router.push('/');
            }}
            className="flex items-center gap-2 w-full px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-xl transition"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
}
