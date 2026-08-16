export type UserRole = 'ADMIN' | 'TEACHER' | 'STUDENT' | 'PARENT' | 'CONTENT_EDITOR';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  phone?: string;
  classGradeId?: string;
  classGrade?: ClassGrade;
  school?: string;
  parentId?: string;
  streakDays: number;
  totalXp: number;
  level: number;
  createdAt: string;
}

export interface ClassGrade {
  id: string;
  name: string;
  number: number;
  order: number;
  description?: string;
  subjects?: Subject[];
  _count?: {
    subjects: number;
    users: number;
  };
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  icon?: string;
  color?: string;
  classGradeId: string;
  classGrade?: ClassGrade;
  chapters?: Chapter[];
  _count?: {
    chapters: number;
    worksheets: number;
    quizzes: number;
  };
}

export interface Chapter {
  id: string;
  title: string;
  chapterNumber: number;
  description?: string;
  subjectId: string;
  subject?: Subject;
  topics?: Topic[];
  studyNotes?: StudyNote[];
  worksheets?: Worksheet[];
  quizzes?: Quiz[];
  _count?: {
    studyNotes: number;
    questions: number;
    worksheets: number;
    quizzes: number;
  };
}

export interface Topic {
  id: string;
  title: string;
  order: number;
  summary?: string;
  chapterId: string;
}

export interface MindMapNode {
  topic: string;
  children?: MindMapNode[];
}

export interface StudyNote {
  id: string;
  title: string;
  summary: string;
  keyConcepts: string; // JSON array
  definitions: string; // JSON array of {term, meaning}
  examples: string; // JSON array of {title, problem, solution}
  importantPoints: string; // JSON array
  mindMapJson?: string;
  visualExplanation?: string;
  deepDive?: string;
  practiceQuestions?: string; // JSON array
  chapterId: string;
  topicId?: string;
  chapter?: Chapter;
  topic?: Topic;
  viewsCount: number;
  createdAt: string;
}

export interface QuestionOption {
  id: string;
  questionId: string;
  text: string;
  isCorrect?: boolean;
  explanation?: string;
  sequence: number;
}

export interface Question {
  id: string;
  questionText: string;
  questionType: 'MCQ' | 'MULTIPLE_SELECT' | 'TRUE_FALSE' | 'FILL_BLANK' | 'MATCH' | 'SHORT_ANSWER';
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  bloomLevel: 'REMEMBER' | 'UNDERSTAND' | 'APPLY' | 'ANALYZE' | 'EVALUATE' | 'CREATE';
  competency: 'CONCEPTUAL' | 'PROCEDURAL' | 'LOGICAL' | 'CRITICAL' | 'PROBLEM_SOLVING' | 'COMMUNICATION';
  marks: number;
  negativeMarks: number;
  explanation?: string;
  hint?: string;
  answerText?: string;
  options: QuestionOption[];
  chapterId: string;
  topicId?: string;
  chapter?: Chapter;
  topic?: Topic;
}

export interface Worksheet {
  id: string;
  title: string;
  description?: string;
  instructions?: string;
  type: 'PRACTICE' | 'REVISION' | 'HOMEWORK' | 'ASSESSMENT' | 'CHAPTER_TEST' | 'MOCK_TEST';
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  durationMinutes: number;
  totalMarks: number;
  totalQuestions: number;
  pdfUrl?: string;
  answerKey?: string;
  chapterId: string;
  subjectId: string;
  subject?: Subject;
  chapter?: Chapter;
  questions?: Array<{
    id: string;
    sequence: number;
    marks: number;
    question: Question;
  }>;
  _count?: {
    questions: number;
    attempts: number;
  };
}

export interface Quiz {
  id: string;
  title: string;
  description?: string;
  durationMinutes: number;
  totalMarks: number;
  passMarks: number;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  chapterId: string;
  subjectId: string;
  subject?: Subject;
  chapter?: Chapter;
  questions?: Array<{
    id: string;
    sequence: number;
    question: Question;
  }>;
  _count?: {
    questions: number;
    attempts: number;
  };
}

export interface QuizAttemptResult {
  attemptId: string;
  quizTitle: string;
  score: number;
  maxScore: number;
  percentage: number;
  accuracy: number;
  correctCount: number;
  incorrectCount: number;
  skippedCount: number;
  timeSpentSeconds: number;
  xpGained: number;
  passed: boolean;
  topicPerformance: Record<string, { total: number; correct: number }>;
  difficultyPerformance: Record<string, { total: number; correct: number }>;
  bloomPerformance: Record<string, { total: number; correct: number }>;
  questions: Array<{
    questionId: string;
    questionText: string;
    questionType: string;
    difficulty: string;
    bloomLevel: string;
    competency: string;
    marks: number;
    negativeMarks: number;
    studentAnswer: any;
    correctAnswer: string;
    isCorrect: boolean;
    isSkipped: boolean;
    explanation?: string;
    hint?: string;
    options: QuestionOption[];
  }>;
}

export interface QuestionPaper {
  id: string;
  title: string;
  examName: string;
  academicYear: string;
  classGradeId: string;
  subjectId: string;
  classGrade?: ClassGrade;
  subject?: Subject;
  totalMarks: number;
  durationMinutes: number;
  instructions: string;
  blueprintJson: string;
  sectionsJson: string;
  createdAt: string;
}

export interface Bookmark {
  id: string;
  userId: string;
  itemType: 'NOTE' | 'WORKSHEET' | 'QUIZ' | 'QUESTION' | 'PAPER';
  itemId: string;
  title: string;
  subtitle?: string;
  metadataJson?: string;
  createdAt: string;
}

export interface Achievement {
  id: string;
  code: string;
  title: string;
  description: string;
  icon: string;
  badgeType: 'BRONZE' | 'SILVER' | 'GOLD' | 'PLATINUM';
  xpReward: number;
  isUnlocked?: boolean;
  unlockedAt?: string;
}
