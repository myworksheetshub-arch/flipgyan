import {
  User,
  ClassGrade,
  Subject,
  Chapter,
  StudyNote,
  Question,
  Worksheet,
  Quiz,
  QuestionPaper,
  Achievement,
} from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

class ApiClient {
  private getAuthHeader(): Record<string, string> {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('flipgyan_token');
      if (token) {
        return { Authorization: `Bearer ${token}` };
      }
    }
    return {};
  }

  private buildQueryString(params?: Record<string, any>): string {
    if (!params) return '';
    const clean: Record<string, string> = {};
    Object.entries(params).forEach(([key, val]) => {
      if (val !== undefined && val !== null && val !== '' && val !== 'undefined') {
        clean[key] = String(val);
      }
    });
    const q = new URLSearchParams(clean).toString();
    return q ? `?${q}` : '';
  }

  private async request<T = any>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      ...this.getAuthHeader(),
      ...options.headers,
    };

    try {
      const response = await fetch(url, { ...options, headers });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `Request failed with status ${response.status}`);
      }

      return data;
    } catch (error: any) {
      console.error(`API Error [${endpoint}]:`, error);
      throw error;
    }
  }

  // Auth
  register(dto: any) {
    return this.request('/auth/register', { method: 'POST', body: JSON.stringify(dto) });
  }

  login(dto: any) {
    return this.request('/auth/login', { method: 'POST', body: JSON.stringify(dto) });
  }

  loginWithGoogle(dto: { email: string; name?: string; avatar?: string; googleId?: string; role?: string; classGradeId?: string }) {
    return this.request('/auth/google', { method: 'POST', body: JSON.stringify(dto) });
  }

  refreshToken(refreshToken: string) {
    return this.request('/auth/refresh', { method: 'POST', body: JSON.stringify({ refreshToken }) });
  }

  getMe() {
    return this.request('/auth/me');
  }

  changePassword(dto: any) {
    return this.request('/auth/change-password', { method: 'POST', body: JSON.stringify(dto) });
  }

  // Curriculum
  getClasses(): Promise<ClassGrade[]> {
    return this.request('/classes');
  }

  getClass(id: string): Promise<ClassGrade> {
    return this.request(`/classes/${id}`);
  }

  createClass(data: any): Promise<ClassGrade> {
    return this.request('/admin/classes', { method: 'POST', body: JSON.stringify(data) });
  }

  updateClass(id: string, data: any): Promise<ClassGrade> {
    return this.request(`/admin/classes/${id}`, { method: 'PUT', body: JSON.stringify(data) });
  }

  deleteClass(id: string) {
    return this.request(`/admin/classes/${id}`, { method: 'DELETE' });
  }

  getSubjects(classId?: string): Promise<Subject[]> {
    return this.request(`/subjects${classId ? `?classId=${classId}` : ''}`);
  }

  getSubject(id: string): Promise<Subject> {
    return this.request(`/subjects/${id}`);
  }

  createSubject(data: any): Promise<Subject> {
    return this.request('/admin/subjects', { method: 'POST', body: JSON.stringify(data) });
  }

  updateSubject(id: string, data: any): Promise<Subject> {
    return this.request(`/admin/subjects/${id}`, { method: 'PUT', body: JSON.stringify(data) });
  }

  deleteSubject(id: string) {
    return this.request(`/admin/subjects/${id}`, { method: 'DELETE' });
  }

  getChapters(subjectId?: string): Promise<Chapter[]> {
    return this.request(`/chapters${subjectId ? `?subjectId=${subjectId}` : ''}`);
  }

  getChapter(id: string): Promise<Chapter> {
    return this.request(`/chapters/${id}`);
  }

  createChapter(data: any): Promise<Chapter> {
    return this.request('/admin/chapters', { method: 'POST', body: JSON.stringify(data) });
  }

  updateChapter(id: string, data: any): Promise<Chapter> {
    return this.request(`/admin/chapters/${id}`, { method: 'PUT', body: JSON.stringify(data) });
  }

  deleteChapter(id: string) {
    return this.request(`/admin/chapters/${id}`, { method: 'DELETE' });
  }

  // Study Notes
  getStudyNotes(params?: { chapterId?: string; subjectId?: string; classId?: string; search?: string }): Promise<StudyNote[]> {
    return this.request(`/study-notes${this.buildQueryString(params)}`);
  }

  getStudyNote(id: string, userId?: string): Promise<StudyNote> {
    return this.request(`/study-notes/${id}${userId ? `?userId=${userId}` : ''}`);
  }

  createStudyNote(data: any): Promise<StudyNote> {
    return this.request('/study-notes', { method: 'POST', body: JSON.stringify(data) });
  }

  updateStudyNote(id: string, data: any): Promise<StudyNote> {
    return this.request(`/study-notes/${id}`, { method: 'PUT', body: JSON.stringify(data) });
  }

  deleteStudyNote(id: string) {
    return this.request(`/study-notes/${id}`, { method: 'DELETE' });
  }

  // Question Bank
  getQuestions(params?: any): Promise<{ items: Question[]; total: number }> {
    return this.request(`/questions${this.buildQueryString(params)}`);
  }

  getQuestion(id: string): Promise<Question> {
    return this.request(`/questions/${id}`);
  }

  createQuestion(data: any) {
    return this.request('/questions', { method: 'POST', body: JSON.stringify(data) });
  }

  updateQuestion(id: string, data: any) {
    return this.request(`/questions/${id}`, { method: 'PUT', body: JSON.stringify(data) });
  }

  deleteQuestion(id: string) {
    return this.request(`/questions/${id}`, { method: 'DELETE' });
  }

  // Worksheets
  getWorksheets(params?: any): Promise<Worksheet[]> {
    return this.request(`/worksheets${this.buildQueryString(params)}`);
  }

  getWorksheet(id: string): Promise<Worksheet> {
    return this.request(`/worksheets/${id}`);
  }

  createWorksheet(data: any) {
    return this.request('/worksheets', { method: 'POST', body: JSON.stringify(data) });
  }

  updateWorksheet(id: string, data: any) {
    return this.request(`/worksheets/${id}`, { method: 'PUT', body: JSON.stringify(data) });
  }

  deleteWorksheet(id: string) {
    return this.request(`/worksheets/${id}`, { method: 'DELETE' });
  }

  submitWorksheet(id: string, data: { answers: Record<string, any>; timeSpentSeconds: number }) {
    return this.request(`/worksheets/${id}/submit`, { method: 'POST', body: JSON.stringify(data) });
  }

  getMyWorksheetAttempts() {
    return this.request('/worksheets/my-attempts');
  }

  // Quizzes
  getQuizzes(params?: any): Promise<Quiz[]> {
    return this.request(`/quizzes${this.buildQueryString(params)}`);
  }

  getQuiz(id: string): Promise<Quiz> {
    return this.request(`/quizzes/${id}`);
  }

  createQuiz(data: any) {
    return this.request('/quizzes', { method: 'POST', body: JSON.stringify(data) });
  }

  updateQuiz(id: string, data: any) {
    return this.request(`/quizzes/${id}`, { method: 'PUT', body: JSON.stringify(data) });
  }

  deleteQuiz(id: string) {
    return this.request(`/quizzes/${id}`, { method: 'DELETE' });
  }

  submitQuiz(id: string, data: { answers: Record<string, any>; timeSpentSeconds: number }) {
    return this.request(`/quizzes/${id}/submit`, { method: 'POST', body: JSON.stringify(data) });
  }

  getMyQuizAttempts() {
    return this.request('/quizzes/my-attempts');
  }

  getQuizAttempt(attemptId: string) {
    return this.request(`/quizzes/attempts/${attemptId}`);
  }

  // Question Papers
  getQuestionPapers(params?: any): Promise<QuestionPaper[]> {
    return this.request(`/question-papers${this.buildQueryString(params)}`);
  }

  getQuestionPaper(id: string): Promise<QuestionPaper> {
    return this.request(`/question-papers/${id}`);
  }

  generateQuestionPaper(dto: any): Promise<QuestionPaper> {
    return this.request('/question-papers/generate', { method: 'POST', body: JSON.stringify(dto) });
  }

  // Dashboards
  getStudentDashboard() {
    return this.request('/analytics/student');
  }

  getTeacherDashboard() {
    return this.request('/analytics/teacher');
  }

  getParentDashboard() {
    return this.request('/analytics/parent');
  }

  getAdminDashboard() {
    return this.request('/analytics/admin');
  }

  // Gamification
  getAchievements(userId?: string): Promise<Achievement[]> {
    return this.request(`/gamification/achievements${userId ? `?userId=${userId}` : ''}`);
  }

  getLeaderboard() {
    return this.request('/gamification/leaderboard');
  }

  // Bookmarks
  getBookmarks() {
    return this.request('/bookmarks');
  }

  toggleBookmark(data: { itemType: string; itemId: string; title: string; subtitle?: string }) {
    return this.request('/bookmarks/toggle', { method: 'POST', body: JSON.stringify(data) });
  }

  // Search
  globalSearch(query: string, type?: string) {
    return this.request(`/search?q=${encodeURIComponent(query)}${type ? `&type=${type}` : ''}`);
  }

  // Subscriptions
  getSubscriptionPlans() {
    return this.request('/subscriptions/plans');
  }

  getMySubscription() {
    return this.request('/subscriptions/my');
  }

  subscribe(planId: string) {
    return this.request('/subscriptions/checkout', { method: 'POST', body: JSON.stringify({ planId, planName: planId }) });
  }

  // Users Management
  getUsers(role?: string) {
    return this.request(`/users${role ? `?role=${role}` : ''}`);
  }

  updateProfile(data: any) {
    return this.request('/users/profile', { method: 'PATCH', body: JSON.stringify(data) });
  }

  async uploadAvatar(file: File) {
    const url = `${API_BASE_URL}/users/avatar`;
    const formData = new FormData();
    formData.append('file', file);

    const headers = {
      ...this.getAuthHeader(),
    };

    const response = await fetch(url, {
      method: 'PATCH',
      headers,
      body: formData,
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Avatar upload failed');
    }
    return data;
  }

  grantProUser(userId: string, planName: string = 'PRO_STUDENT') {
    return this.request(`/users/${userId}/grant-pro`, { method: 'PATCH', body: JSON.stringify({ planName }) });
  }

  revokeProUser(userId: string) {
    return this.request(`/users/${userId}/revoke-pro`, { method: 'PATCH' });
  }
}

export const api = new ApiClient();
