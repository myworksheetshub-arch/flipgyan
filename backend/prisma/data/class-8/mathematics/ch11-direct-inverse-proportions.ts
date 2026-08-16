export const ch11ProportionsClass8Data = {
  classNumber: 8,
  className: 'Class 8',
  subjectName: 'Mathematics',
  subjectCode: 'MATH8',
  chapterNumber: 11,
  chapterTitle: 'Direct and Inverse Proportions',
  summary: 'Direct proportion (x/y = k constant), inverse proportion (x*y = k constant), real-life speed-time, work-time, scale map problems.',
  contentMarkdown: `# Chapter 11: Direct and Inverse Proportions (Class 8 Mathematics NEP 2025)

## 1. Direct Proportion
Two quantities $x$ and $y$ are in direct proportion if $\\frac{x}{y} = k$ (constant).
- As $x$ increases, $y$ increases proportionally.
- $\\frac{x_1}{y_1} = \\frac{x_2}{y_2}$

## 2. Inverse Proportion
Two quantities $x$ and $y$ are in inverse proportion if $x \\times y = k$ (constant).
- As $x$ increases, $y$ decreases proportionally.
- $x_1 y_1 = x_2 y_2$
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Direct & Inverse Proportions',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'proportions',
          label: 'Formulae',
          type: 'category',
          children: [
            { id: 'direct', label: 'Direct: x1 / y1 = x2 / y2', type: 'concept' },
            { id: 'inverse', label: 'Inverse: x1 · y1 = x2 · y2', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C8-MATH-CH11-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'If 14 metres of cloth costs ₹1890, what is the cost of 6 metres of cloth of the same type?',
      explanation: 'Direct proportion: 14 / 1890 = 6 / y => y = (1890 × 6) / 14 = 135 × 6 = ₹810.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '₹810', isCorrect: true },
        { optionLabel: 'B', optionText: '₹750', isCorrect: false },
        { optionLabel: 'C', optionText: '₹900', isCorrect: false },
        { optionLabel: 'D', optionText: '₹840', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH11-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'If 6 pipes can fill a tank in 1 hour 20 minutes (80 minutes), how long will 5 pipes take?',
      explanation: 'Inverse proportion: 6 × 80 = 5 × t => t = 480 / 5 = 96 minutes = 1 hour 36 minutes.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '1 hour 36 minutes (96 min)', isCorrect: true },
        { optionLabel: 'B', optionText: '1 hour 15 minutes', isCorrect: false },
        { optionLabel: 'C', optionText: '1 hour 40 minutes', isCorrect: false },
        { optionLabel: 'D', optionText: '2 hours', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH11-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'A car takes 2 hours to reach a destination by traveling at 60 km/h. How long will it take at a speed of 80 km/h?',
      explanation: 'Inverse proportion: Speed × Time = Distance. 60 × 2 = 80 × t => 120 = 80t => t = 1.5 hours (1 hr 30 min).',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '1.5 hours (1 hr 30 min)', isCorrect: true },
        { optionLabel: 'B', optionText: '2.5 hours', isCorrect: false },
        { optionLabel: 'C', optionText: '1 hour', isCorrect: false },
        { optionLabel: 'D', optionText: '1.75 hours', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH11-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'A hostel has food provisions for 100 students for 20 days. If 25 more students join, how long will the provisions last?',
      explanation: 'Total students = 100 + 25 = 125. Inverse proportion: 100 × 20 = 125 × d => d = 2000 / 125 = 16 days.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '16 days', isCorrect: true },
        { optionLabel: 'B', optionText: '15 days', isCorrect: false },
        { optionLabel: 'C', optionText: '18 days', isCorrect: false },
        { optionLabel: 'D', optionText: '12 days', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH11-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [CBSE Olympiad] 12 workers can build a wall in 5 days. How many workers must be employed to complete the same wall in 3 days?',
      explanation: 'Inverse proportion: 12 × 5 = W × 3 => 60 = 3W => W = 20 workers.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '20 workers', isCorrect: true },
        { optionLabel: 'B', optionText: '15 workers', isCorrect: false },
        { optionLabel: 'C', optionText: '25 workers', isCorrect: false },
        { optionLabel: 'D', optionText: '18 workers', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH11-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] A map is drawn to a scale where 1 cm represents 18 km. If two cities are 72 km apart in reality, what is their distance on the map?',
      explanation: 'Direct proportion: 1 / 18 = d / 72 => d = 72 / 18 = 4 cm.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '4 cm', isCorrect: true },
        { optionLabel: 'B', optionText: '3 cm', isCorrect: false },
        { optionLabel: 'C', optionText: '5 cm', isCorrect: false },
        { optionLabel: 'D', optionText: '6 cm', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH11-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'Which of the following pairs of quantities are in INVERSE proportion?',
      explanation: 'Number of workers and time taken to complete a job are in inverse proportion (more workers take less time).',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Number of workers and time taken to finish a work', isCorrect: true },
        { optionLabel: 'B', optionText: 'Distance traveled and speed (for fixed time)', isCorrect: false },
        { optionLabel: 'C', optionText: 'Quantity of goods bought and total cost', isCorrect: false },
        { optionLabel: 'D', optionText: 'Height of a tree and its shadow length', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH11-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'If 5 kg of sugar contains 2.25 × 10⁶ crystals, how many crystals are in 2 kg of sugar?',
      explanation: 'Direct proportion: (2.25 × 10⁶ / 5) × 2 = 0.45 × 2 × 10⁶ = 0.9 × 10⁶ = 9 × 10⁵.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '9 × 10⁵ (900,000)', isCorrect: true },
        { optionLabel: 'B', optionText: '4.5 × 10⁵', isCorrect: false },
        { optionLabel: 'C', optionText: '1.2 × 10⁶', isCorrect: false },
        { optionLabel: 'D', optionText: '8 × 10⁵', isCorrect: false },
      ],
    },
  ],
};
