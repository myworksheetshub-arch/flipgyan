import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

export function formatDate(dateStr: string | Date): string {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export function getDifficultyColor(diff: string) {
  switch (diff?.toUpperCase()) {
    case 'EASY':
      return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    case 'MEDIUM':
      return 'bg-amber-50 text-amber-700 border-amber-200';
    case 'HARD':
      return 'bg-rose-50 text-rose-700 border-rose-200';
    default:
      return 'bg-slate-50 text-slate-700 border-slate-200';
  }
}

export function getBloomColor(level: string) {
  switch (level?.toUpperCase()) {
    case 'REMEMBER':
      return 'bg-blue-50 text-blue-700 border-blue-200';
    case 'UNDERSTAND':
      return 'bg-teal-50 text-teal-700 border-teal-200';
    case 'APPLY':
      return 'bg-indigo-50 text-indigo-700 border-indigo-200';
    case 'ANALYZE':
      return 'bg-purple-50 text-purple-700 border-purple-200';
    case 'EVALUATE':
      return 'bg-orange-50 text-orange-700 border-orange-200';
    case 'CREATE':
      return 'bg-rose-50 text-rose-700 border-rose-200';
    default:
      return 'bg-slate-50 text-slate-700 border-slate-200';
  }
}
