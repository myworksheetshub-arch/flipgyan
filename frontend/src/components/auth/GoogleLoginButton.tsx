'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { Sparkles, CheckCircle2, ShieldCheck, X } from 'lucide-react';

interface GoogleLoginButtonProps {
  mode?: 'login' | 'signup';
  role?: string;
  classGradeId?: string;
  className?: string;
}

export function GoogleLoginButton({ mode = 'login', role = 'STUDENT', classGradeId = '10', className = '' }: GoogleLoginButtonProps) {
  const router = useRouter();
  const { loginWithGoogle } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [customEmail, setCustomEmail] = useState('');
  const [customName, setCustomName] = useState('');
  const [error, setError] = useState('');

  const handleGoogleAuth = async (email: string, name: string, avatar?: string) => {
    setLoading(true);
    setError('');
    try {
      await loginWithGoogle({
        email,
        name,
        avatar: avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}`,
        googleId: `google_${Date.now()}`,
        role,
        classGradeId,
      });

      setShowModal(false);
      const redirectPath = role === 'TEACHER' ? '/teacher/dashboard' : role === 'PARENT' ? '/parent/dashboard' : role === 'ADMIN' ? '/admin/dashboard' : '/student/settings';
      router.push(redirectPath);
    } catch (err: any) {
      setError(err.message || 'Google login failed');
    } finally {
      setLoading(false);
    }
  };

  const sampleAccounts = [
    {
      name: 'Aarav Kumar',
      email: 'aarav.student@gmail.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
      badge: 'Student • Class 7',
    },
    {
      name: 'Priya Sharma',
      email: 'priya.teacher@gmail.com',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
      badge: 'Educator',
    },
  ];

  return (
    <>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className={`w-full py-2.5 px-4 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all flex items-center justify-center gap-3 active:scale-95 ${className}`}
      >
        {/* Official Google Multicolor G Icon */}
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
          />
        </svg>
        <span>{mode === 'signup' ? 'Sign up with Google / Gmail' : 'Continue with Google / Gmail'}</span>
      </button>

      {/* Gmail Account Picker Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-5 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="text-center space-y-1">
              <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 font-display">Sign in with Google</h3>
              <p className="text-xs text-slate-500">Choose an account to continue to <strong>FlipGyan</strong></p>
            </div>

            {error && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 font-semibold text-center">
                {error}
              </div>
            )}

            {/* Quick Select Accounts */}
            <div className="space-y-2">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Choose a Gmail account</p>
              {sampleAccounts.map((acc) => (
                <button
                  key={acc.email}
                  disabled={loading}
                  onClick={() => handleGoogleAuth(acc.email, acc.name, acc.avatar)}
                  className="w-full p-3 rounded-2xl border border-slate-200 hover:border-brand-500 hover:bg-brand-50/50 transition-all flex items-center justify-between group text-left"
                >
                  <div className="flex items-center gap-3">
                    <img src={acc.avatar} alt={acc.name} className="w-9 h-9 rounded-full object-cover border border-slate-200" />
                    <div>
                      <p className="text-xs font-bold text-slate-900 group-hover:text-brand-700">{acc.name}</p>
                      <p className="text-[11px] text-slate-500">{acc.email}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 group-hover:bg-brand-100 text-slate-600 group-hover:text-brand-800">
                    {acc.badge}
                  </span>
                </button>
              ))}
            </div>

            <div className="relative py-1">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-[10px] uppercase font-bold text-slate-400 bg-white px-2">
                Or Use Any Custom Gmail
              </div>
            </div>

            {/* Custom Gmail Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (customEmail) {
                  handleGoogleAuth(customEmail, customName || customEmail.split('@')[0]);
                }
              }}
              className="space-y-3"
            >
              <div>
                <input
                  type="email"
                  required
                  placeholder="name@gmail.com"
                  value={customEmail}
                  onChange={(e) => setCustomEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-brand-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading || !customEmail}
                className="w-full py-2.5 bg-slate-900 hover:bg-brand-600 text-white font-bold text-xs rounded-xl shadow-xs transition flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{loading ? 'Authenticating with Google...' : 'Sign in with Custom Gmail'}</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
