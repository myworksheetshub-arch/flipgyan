'use client';

import React, { useState, useEffect } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { api } from '@/lib/api';
import {
  Users,
  Search,
  Crown,
  Sparkles,
  CheckCircle2,
  ShieldAlert,
  UserCheck,
  Zap,
  Filter,
  RefreshCw,
  Award,
  Loader2,
} from 'lucide-react';

export default function AdminUsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [roleFilter, setRoleFilter] = useState('');
  const [tierFilter, setTierFilter] = useState('');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [actionUserId, setActionUserId] = useState<string | null>(null);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const loadUsers = async () => {
    setLoading(true);
    try {
      const res = await api.getUsers(roleFilter || undefined);
      setUsers(res);
    } catch (err: any) {
      console.error('Failed to load users:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, [roleFilter]);

  const handleGrantPro = async (user: any) => {
    setActionUserId(user.id);
    setNotification(null);
    try {
      await api.grantProUser(user.id, 'PRO_STUDENT');
      setNotification({
        type: 'success',
        message: `🎉 Success! Granted 1-Year PRO Student Access to ${user.name} (${user.email}). All quizzes unlocked!`,
      });
      await loadUsers();
    } catch (err: any) {
      setNotification({
        type: 'error',
        message: err.message || 'Failed to grant PRO access.',
      });
    } finally {
      setActionUserId(null);
    }
  };

  const handleRevokePro = async (user: any) => {
    setActionUserId(user.id);
    setNotification(null);
    try {
      await api.revokeProUser(user.id);
      setNotification({
        type: 'success',
        message: `Switched ${user.name} back to Free Tier.`,
      });
      await loadUsers();
    } catch (err: any) {
      setNotification({
        type: 'error',
        message: err.message || 'Failed to revoke PRO access.',
      });
    } finally {
      setActionUserId(null);
    }
  };

  // Filter users by search and tier filter
  const filteredUsers = users.filter((u) => {
    const matchesSearch =
      !search ||
      u.name?.toLowerCase().includes(search.toLowerCase()) ||
      u.email?.toLowerCase().includes(search.toLowerCase()) ||
      u.school?.toLowerCase().includes(search.toLowerCase());

    const matchesTier =
      !tierFilter ||
      (tierFilter === 'PRO' && (u.isPro || u.subscriptionTier === 'PRO_STUDENT')) ||
      (tierFilter === 'FREE' && (!u.isPro && u.subscriptionTier !== 'PRO_STUDENT'));

    return matchesSearch && matchesTier;
  });

  // Calculate metrics
  const totalUsers = users.length;
  const totalStudents = users.filter((u) => u.role === 'STUDENT').length;
  const proStudentsCount = users.filter(
    (u) => u.isPro || u.subscriptionTier === 'PRO_STUDENT' || u.role === 'PRO_STUDENT'
  ).length;
  const freeStudentsCount = totalStudents - proStudentsCount;

  return (
    <DashboardLayout role="ADMIN">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-extrabold text-slate-900 font-display">User & PRO Access Management</h1>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold flex items-center gap-1">
                <Crown className="w-3.5 h-3.5 text-amber-600 fill-amber-500" /> PRO Control Center
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Manage student accounts, view subscription status, and grant PRO Student access for full quiz feature access.
            </p>
          </div>

          <button
            onClick={loadUsers}
            className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-xs transition flex items-center gap-2 shrink-0 self-start sm:self-auto"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh Data</span>
          </button>
        </div>

        {/* Action Notification Alert */}
        {notification && (
          <div
            className={`p-4 rounded-2xl border text-xs flex items-center justify-between animate-in fade-in ${
              notification.type === 'success'
                ? 'bg-emerald-50 border-emerald-200 text-emerald-950 font-bold'
                : 'bg-rose-50 border-rose-200 text-rose-950 font-bold'
            }`}
          >
            <div className="flex items-center gap-2">
              {notification.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              ) : (
                <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0" />
              )}
              <span>{notification.message}</span>
            </div>
            <button
              onClick={() => setNotification(null)}
              className="text-slate-400 hover:text-slate-600 font-bold text-sm px-2"
            >
              ✕
            </button>
          </div>
        )}

        {/* KPI Metrics Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Total Accounts</p>
              <h3 className="text-2xl font-black text-slate-900 font-display">{totalUsers}</h3>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Total Students</p>
              <h3 className="text-2xl font-black text-slate-900 font-display">{totalStudents}</h3>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 rounded-3xl p-5 shadow-md flex items-center gap-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-slate-950 text-amber-400 flex items-center justify-center font-bold shrink-0">
              <Crown className="w-6 h-6 fill-amber-400" />
            </div>
            <div>
              <p className="text-xs text-slate-950/80 font-extrabold uppercase tracking-wider">PRO Students</p>
              <h3 className="text-2xl font-black text-slate-950 font-display">{proStudentsCount}</h3>
            </div>
            <Sparkles className="w-16 h-16 text-white/10 absolute -right-2 -bottom-2 pointer-events-none" />
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-600 flex items-center justify-center font-bold">
              <Zap className="w-6 h-6 text-slate-500" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Free Tier Students</p>
              <h3 className="text-2xl font-black text-slate-900 font-display">{freeStudentsCount < 0 ? 0 : freeStudentsCount}</h3>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search by student name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none focus:bg-white focus:border-brand-500"
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <span>Filters:</span>
            </div>

            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl outline-none font-semibold text-slate-700 focus:bg-white"
            >
              <option value="">All Roles</option>
              <option value="STUDENT">Students Only</option>
              <option value="TEACHER">Teachers Only</option>
              <option value="PARENT">Parents Only</option>
              <option value="ADMIN">Admins Only</option>
            </select>

            <select
              value={tierFilter}
              onChange={(e) => setTierFilter(e.target.value)}
              className="px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl outline-none font-semibold text-slate-700 focus:bg-white"
            >
              <option value="">All Tiers</option>
              <option value="PRO">👑 PRO Access Only</option>
              <option value="FREE">⚡ Free Tier Only</option>
            </select>
          </div>
        </div>

        {/* Users & PRO Status Management Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
          {loading ? (
            <div className="p-12 text-center space-y-3">
              <Loader2 className="w-8 h-8 text-brand-600 animate-spin mx-auto" />
              <p className="text-xs text-slate-500 font-bold">Loading user directory...</p>
            </div>
          ) : filteredUsers.length === 0 ? (
            <div className="p-12 text-center space-y-2">
              <Users className="w-10 h-10 text-slate-300 mx-auto" />
              <h3 className="text-sm font-bold text-slate-800">No users found matching filters</h3>
              <p className="text-xs text-slate-500">Try adjusting your search criteria or resetting filters.</p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {filteredUsers.map((u) => {
                const isProUser = u.isPro || u.subscriptionTier === 'PRO_STUDENT' || u.role === 'PRO_STUDENT';
                const isProcessing = actionUserId === u.id;

                return (
                  <div
                    key={u.id}
                    className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50/70 transition"
                  >
                    {/* User Profile Info */}
                    <div className="flex items-center gap-3.5">
                      <div className="relative">
                        <img
                          src={u.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100'}
                          alt={u.name}
                          className="w-11 h-11 rounded-2xl object-cover border border-slate-200 shadow-xs"
                        />
                        {isProUser && (
                          <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-xs">
                            <Crown className="w-3 h-3 fill-slate-950" />
                          </div>
                        )}
                      </div>

                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-extrabold text-slate-900">{u.name}</h4>
                          <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-extrabold uppercase">
                            {u.role}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500">
                          {u.email} • {u.classGrade?.name || 'Class 10'} • {u.school || 'CBSE School'}
                        </p>
                      </div>
                    </div>

                    {/* Tier Status Badge & Actions */}
                    <div className="flex items-center gap-3 self-end md:self-auto">
                      {/* Subscription Tier Badge */}
                      {isProUser ? (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-amber-500 text-slate-950 text-xs font-black shadow-xs">
                          <Crown className="w-3.5 h-3.5 fill-slate-950" /> PRO Student Pass
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-slate-100 text-slate-600 text-xs font-bold border border-slate-200">
                          <Zap className="w-3 h-3 text-slate-400" /> Free Plan
                        </span>
                      )}

                      {/* Admin Toggle Action Buttons */}
                      {isProUser ? (
                        <button
                          onClick={() => handleRevokePro(u)}
                          disabled={isProcessing}
                          className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition border border-slate-300 flex items-center gap-1.5 disabled:opacity-50"
                        >
                          {isProcessing ? (
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          ) : (
                            <span>Revoke PRO</span>
                          )}
                        </button>
                      ) : (
                        <button
                          onClick={() => handleGrantPro(u)}
                          disabled={isProcessing}
                          className="px-4 py-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-xs transition flex items-center gap-1.5 shrink-0 disabled:opacity-50"
                        >
                          {isProcessing ? (
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          ) : (
                            <>
                              <Crown className="w-3.5 h-3.5 fill-slate-950" />
                              <span>Grant PRO Access</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
