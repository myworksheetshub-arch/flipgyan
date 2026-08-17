'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { api } from '@/lib/api';
import { Zap, Mail, Lock, ArrowRight, AlertCircle, Sparkles, Server, CheckCircle2, RefreshCw } from 'lucide-react';
import { GoogleLoginButton } from '@/components/auth/GoogleLoginButton';

export default function LoginPage() {
  const router = useRouter();
  const { login, switchDemoUser } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Backend connection helper state
  const [showServerConfig, setShowServerConfig] = useState(false);
  const [customApiUrl, setCustomApiUrl] = useState('');
  const [serverStatus, setServerStatus] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCustomApiUrl(api.getBaseUrl());
    }
  }, []);

  const handleSaveApiUrl = async () => {
    if (!customApiUrl.trim()) return;
    api.setBaseUrl(customApiUrl.trim());
    setServerStatus('Testing connection...');
    try {
      const res = await fetch(`${customApiUrl.trim().replace(/\/+$/, '')}/classes`);
      if (res.ok) {
        setServerStatus('✅ Connected to backend successfully!');
        setError('');
      } else {
        setServerStatus(`⚠️ Server reachable but returned status ${res.status}`);
      }
    } catch (e: any) {
      setServerStatus(`❌ Connection failed: ${e.message}`);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      router.push('/student/dashboard');
    } catch (err: any) {
      setError(err.message || 'Invalid email or password');
      if (err.message && (err.message.includes('Cannot connect') || err.message.includes('Failed to fetch'))) {
        setShowServerConfig(true);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = async (role: 'STUDENT' | 'TEACHER' | 'PARENT' | 'ADMIN') => {
    setError('');
    setLoading(true);
    try {
      await switchDemoUser(role);
      const redirectMap: Record<string, string> = {
        STUDENT: '/student/dashboard',
        TEACHER: '/teacher/dashboard',
        PARENT: '/parent/dashboard',
        ADMIN: '/admin/dashboard',
      };
      router.push(redirectMap[role]);
    } catch (err: any) {
      setError(err.message || 'Demo login failed');
      if (err.message && (err.message.includes('Cannot connect') || err.message.includes('Failed to fetch'))) {
        setShowServerConfig(true);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-3xl border border-slate-200 p-8 shadow-xl space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-brand-600 flex items-center justify-center text-white mx-auto shadow-md shadow-brand-500/20">
            <Zap className="w-6 h-6 fill-white" />
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 font-display">Welcome to FlipGyan</h1>
          <p className="text-xs text-slate-500">Sign in to resume your learning streaks & notes</p>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-700 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Google / Gmail Social Login Button */}
        <GoogleLoginButton mode="login" />

        <div className="relative py-1">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center text-[10px] uppercase font-bold text-slate-400 bg-white px-2">
            Or continue with email
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="student@flipgyan.com"
                className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-brand-500 transition"
              />
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-bold text-slate-700">Password</label>
              <Link href="/forgot-password" className="text-[11px] font-bold text-brand-600 hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-brand-500 transition"
              />
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-xs rounded-xl shadow-xs transition flex items-center justify-center gap-2"
          >
            <span>{loading ? 'Signing in...' : 'Sign In'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Demo Fast Login Buttons */}
        <div className="pt-4 border-t border-slate-100 space-y-2">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center">
            One-Click Instant Demo Login
          </p>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleDemoLogin('STUDENT')}
              className="py-2 px-3 text-xs bg-brand-50 hover:bg-brand-100 text-brand-700 font-bold rounded-xl text-center transition"
            >
              🎓 Student Demo
            </button>
            <button
              onClick={() => handleDemoLogin('TEACHER')}
              className="py-2 px-3 text-xs bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold rounded-xl text-center transition"
            >
              👩‍🏫 Teacher Demo
            </button>
            <button
              onClick={() => handleDemoLogin('PARENT')}
              className="py-2 px-3 text-xs bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold rounded-xl text-center transition"
            >
              👨‍👧 Parent Demo
            </button>
            <button
              onClick={() => handleDemoLogin('ADMIN')}
              className="py-2 px-3 text-xs bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-center transition"
            >
              🛡️ Admin Demo
            </button>
          </div>
        </div>

        {/* Server Connection Assistant */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setShowServerConfig(!showServerConfig)}
            className="w-full text-center text-[11px] font-semibold text-slate-400 hover:text-slate-600 transition flex items-center justify-center gap-1.5"
          >
            <Server className="w-3.5 h-3.5" />
            <span>{showServerConfig ? 'Hide Backend Server Settings' : 'Backend Server Settings'}</span>
          </button>

          {showServerConfig && (
            <div className="mt-3 p-3.5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2.5 text-xs animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-700">API Endpoint URL:</span>
                <button
                  type="button"
                  onClick={() => setCustomApiUrl('https://sheriff-spectacular-few-cage.trycloudflare.com')}
                  className="text-[10px] text-brand-600 font-bold hover:underline"
                >
                  Use Live Cloudflare Tunnel
                </button>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={customApiUrl}
                  onChange={(e) => setCustomApiUrl(e.target.value)}
                  placeholder="https://...trycloudflare.com or http://localhost:4000"
                  className="flex-1 px-2.5 py-1.5 text-xs bg-white border border-slate-200 rounded-lg outline-none focus:border-brand-500 font-mono"
                />
                <button
                  type="button"
                  onClick={handleSaveApiUrl}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs rounded-lg transition shrink-0"
                >
                  Connect
                </button>
              </div>
              {serverStatus && (
                <div className="text-[11px] font-semibold text-slate-700 bg-white p-2 rounded-lg border border-slate-200">
                  {serverStatus}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-slate-500">
          Don't have an account?{' '}
          <Link href="/signup" className="font-bold text-brand-600 hover:underline">
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
}
