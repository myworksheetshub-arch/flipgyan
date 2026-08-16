'use client';

import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { useAuth } from '@/lib/auth-context';
import { api } from '@/lib/api';
import { Settings, User, Lock, CheckCircle2, Shield, UploadCloud, Sparkles, Loader2 } from 'lucide-react';

export default function StudentSettingsPage() {
  const { user, refreshUser } = useAuth();
  const [name, setName] = useState(user?.name || 'Aarav Kumar');
  const [phone, setPhone] = useState(user?.phone || '+91 9876501234');
  const [school, setSchool] = useState(user?.school || 'Delhi Public School, R.K. Puram');
  const [classGrade, setClassGrade] = useState(() => {
    const cg = (user as any)?.classGrade;
    if (cg && typeof cg === 'object' && typeof cg.number === 'number') {
      return String(cg.number);
    }
    if (typeof cg === 'string') {
      const match = cg.match(/\d+/);
      if (match) return match[0];
    }
    return '7';
  });
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg('');
    try {
      await api.updateProfile({ name, phone, school, classGradeId: classGrade });
      await refreshUser();
      setMsg('Personal, School & Enrolled Class information updated successfully!');
    } catch (err: any) {
      alert(err.message || 'Update failed');
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg('');
    try {
      await api.changePassword({ currentPassword, newPassword });
      setCurrentPassword('');
      setNewPassword('');
      setMsg('Password updated successfully!');
    } catch (err: any) {
      alert(err.message || 'Failed to update password');
    }
  };

  const [isUploadingAvatar, setIsUploadingAvatar] = useState(false);

  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file (PNG, JPG, WEBP, etc.)');
      return;
    }

    setIsUploadingAvatar(true);
    setMsg('');
    try {
      const res = await api.uploadAvatar(file);
      await refreshUser();
      setMsg('Profile picture uploaded successfully to Cloudinary!');
    } catch (err: any) {
      console.error('Avatar upload error:', err);
      alert(err.message || 'Failed to upload profile picture to Cloudinary');
    } finally {
      setIsUploadingAvatar(false);
    }
  };

  return (
    <DashboardLayout role="STUDENT">
      <div className="max-w-3xl space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-3 py-1 bg-brand-50 text-brand-700 text-xs font-bold rounded-full">
              Personal & School Profile Setup
            </span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 font-display">Personal & School Information</h1>
          <p className="text-xs text-slate-500">Manage your profile photo, school details, and enrolled Class Grade standard.</p>
        </div>

        {msg && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs font-bold text-emerald-800 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{msg}</span>
          </div>
        )}

        {/* Profile Picture / Cloudinary Avatar Section */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative group shrink-0">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md bg-slate-100 flex items-center justify-center text-slate-400 font-extrabold text-2xl">
                {user?.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name || 'User Avatar'}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span>{(user?.name || 'U').substring(0, 2).toUpperCase()}</span>
                )}
              </div>
              <label
                htmlFor="avatar-input"
                className="absolute bottom-0 right-0 p-2 bg-brand-600 hover:bg-brand-700 text-white rounded-full shadow-md cursor-pointer transition transform hover:scale-105"
                title="Change Profile Picture"
              >
                <UploadCloud className="w-4 h-4" />
                <input
                  id="avatar-input"
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  disabled={isUploadingAvatar}
                  className="hidden"
                />
              </label>
            </div>

            <div className="space-y-1.5 text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <h3 className="text-base font-extrabold text-slate-900 font-display">Profile Photo</h3>
                <span className="px-2.5 py-0.5 bg-sky-50 text-sky-700 border border-sky-200 text-[10px] font-bold rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-sky-500" />
                  Cloudinary CDN
                </span>
              </div>
              <p className="text-xs text-slate-500 max-w-md">
                Upload a JPEG, PNG, or WEBP photo. Your profile image is stored securely on Cloudinary and optimized across all devices.
              </p>
              <div className="pt-2 flex items-center justify-center sm:justify-start gap-3">
                <label
                  htmlFor="avatar-input"
                  className={`px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs cursor-pointer transition inline-flex items-center gap-2 ${
                    isUploadingAvatar ? 'opacity-50 pointer-events-none' : ''
                  }`}
                >
                  {isUploadingAvatar ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Uploading to Cloudinary...</span>
                    </>
                  ) : (
                    <>
                      <UploadCloud className="w-3.5 h-3.5" />
                      <span>Upload New Picture</span>
                    </>
                  )}
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Details & Class Grade Form */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <h3 className="text-base font-bold text-slate-900 font-display flex items-center gap-2">
            <User className="w-4 h-4 text-brand-600" />
            Personal & School Information
          </h3>

          <form onSubmit={handleUpdateProfile} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-brand-500 font-semibold"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Phone Number</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-brand-500 font-semibold"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-700 mb-1">School / Institution</label>
                <input
                  type="text"
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                  placeholder="e.g. Delhi Public School"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-brand-500 font-semibold"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Enrolled Class Standard</label>
                <select
                  value={classGrade}
                  onChange={(e) => setClassGrade(e.target.value)}
                  className="w-full p-2.5 bg-brand-50/60 border border-brand-200 text-brand-900 rounded-xl outline-none focus:border-brand-500 font-bold cursor-pointer"
                >
                  <option value="5">Class 5</option>
                  <option value="6">Class 6</option>
                  <option value="7">Class 7</option>
                  <option value="8">Class 8</option>
                  <option value="9">Class 9</option>
                  <option value="10">Class 10</option>
                  <option value="11">Class 11</option>
                  <option value="12">Class 12</option>
                </select>
              </div>
            </div>

            {/* Quick Class Grade Pills Selection */}
            <div className="space-y-1.5 pt-2">
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Quick Select Class</label>
              <div className="flex flex-wrap items-center gap-2">
                {['5', '6', '7', '8', '9', '10', '11', '12'].map((num) => {
                  const isSelected = classGrade === num;
                  return (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setClassGrade(num)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                        isSelected
                          ? 'bg-brand-600 text-white shadow-xs'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      Class {num}
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              type="submit"
              className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl shadow-xs transition"
            >
              Save Profile & Class Changes
            </button>
          </form>
        </div>

        {/* Change Password Form */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <h3 className="text-base font-bold text-slate-900 font-display flex items-center gap-2">
            <Lock className="w-4 h-4 text-brand-600" />
            Security & Password
          </h3>

          <form onSubmit={handleChangePassword} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Current Password</label>
                <input
                  type="password"
                  required
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-brand-500"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">New Password</label>
                <input
                  type="password"
                  required
                  minLength={6}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Minimum 6 characters"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-brand-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-xs transition"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
