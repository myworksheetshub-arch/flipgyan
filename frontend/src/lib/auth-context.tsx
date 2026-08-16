'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '@/types';
import { api } from './api';

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: (data: { email: string; name?: string; avatar?: string; googleId?: string; role?: string; classGradeId?: string }) => Promise<void>;
  register: (data: any) => Promise<void>;
  logout: () => void;
  refreshUser: () => Promise<void>;
  switchDemoUser: (role: 'STUDENT' | 'TEACHER' | 'PARENT' | 'ADMIN') => Promise<void>;
  isStudent: boolean;
  isTeacher: boolean;
  isParent: boolean;
  isAdmin: boolean;
  isPro: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const refreshUser = async () => {
    try {
      const savedToken = localStorage.getItem('flipgyan_token');
      if (!savedToken) {
        setUser(null);
        setIsLoading(false);
        return;
      }
      setToken(savedToken);
      const userData = await api.getMe();
      setUser(userData);
    } catch (err) {
      console.warn('Auth token expired or invalid:', err);
      localStorage.removeItem('flipgyan_token');
      setUser(null);
      setToken(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refreshUser();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const res = await api.login({ email, password });
      localStorage.setItem('flipgyan_token', res.tokens.accessToken);
      setToken(res.tokens.accessToken);
      setUser(res.user);
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGoogle = async (data: { email: string; name?: string; avatar?: string; googleId?: string; role?: string; classGradeId?: string }) => {
    setIsLoading(true);
    try {
      const res = await api.loginWithGoogle(data);
      localStorage.setItem('flipgyan_token', res.tokens.accessToken);
      setToken(res.tokens.accessToken);
      setUser(res.user);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (data: any) => {
    setIsLoading(true);
    try {
      const res = await api.register(data);
      localStorage.setItem('flipgyan_token', res.tokens.accessToken);
      setToken(res.tokens.accessToken);
      setUser(res.user);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('flipgyan_token');
    setToken(null);
    setUser(null);
  };

  const switchDemoUser = async (role: 'STUDENT' | 'TEACHER' | 'PARENT' | 'ADMIN') => {
    const demoCredentials: Record<string, { email: string; pass: string }> = {
      STUDENT: { email: 'student@flipgyan.com', pass: 'password123' },
      TEACHER: { email: 'teacher@flipgyan.com', pass: 'password123' },
      PARENT: { email: 'parent@flipgyan.com', pass: 'password123' },
      ADMIN: { email: 'admin@flipgyan.com', pass: 'password123' },
    };

    const creds = demoCredentials[role];
    if (creds) {
      await login(creds.email, creds.pass);
    }
  };

  const isStudent = user?.role === 'STUDENT' || (user as any)?.role === 'PRO_STUDENT' || (user as any)?.subscriptionTier === 'PRO_STUDENT';
  const isTeacher = user?.role === 'TEACHER' || (user as any)?.subscriptionTier === 'PRO_TEACHER';
  const isParent = user?.role === 'PARENT';
  const isAdmin = user?.role === 'ADMIN';
  const isPro = !!((user as any)?.isPro || (user as any)?.subscriptionTier === 'PRO_STUDENT' || (user as any)?.subscriptionTier === 'PRO_TEACHER' || (user as any)?.subscriptionTier === 'SCHOOL');

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isLoading,
        login,
        loginWithGoogle,
        register,
        logout,
        refreshUser,
        switchDemoUser,
        isStudent,
        isTeacher,
        isParent,
        isAdmin,
        isPro,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
