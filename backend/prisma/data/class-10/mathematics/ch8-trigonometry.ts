export const ch8TrigonometryClass10Data = {
  classNumber: 10,
  className: 'Class 10',
  subjectName: 'Mathematics',
  subjectCode: 'MATH10',
  chapterNumber: 8,
  chapterTitle: 'Introduction to Trigonometry',
  summary: 'Trigonometric ratios (sin, cos, tan, cosec, sec, cot), values at specific angles (0°, 30°, 45°, 60°, 90°), standard identities (sin²θ + cos²θ = 1, 1 + tan²θ = sec²θ, 1 + cot²θ = cosec²θ).',
  contentMarkdown: `# Chapter 8: Introduction to Trigonometry (Class 10 Mathematics NEP 2025)

## 1. Trigonometric Ratios
In right triangle $ABC$ right-angled at $B$:
- $\\sin A = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}$
- $\\cos A = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}$
- $\\tan A = \\frac{\\text{Opposite}}{\\text{Adjacent}} = \\frac{\\sin A}{\\cos A}$

## 2. Standard Trigonometric Identities
1. $\\sin^2 \\theta + \\cos^2 \\theta = 1$
2. $1 + \\tan^2 \\theta = \\sec^2 \\theta$
3. $1 + \\cot^2 \\theta = \\text{cosec}^2 \\theta$
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Trigonometry',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'identities-trig',
          label: '3 Core Identities',
          type: 'category',
          children: [
            { id: 'sin-cos-sq', label: 'sin²θ + cos²θ = 1', type: 'concept' },
            { id: 'sec-tan-sq', label: '1 + tan²θ = sec²θ', type: 'concept' },
            { id: 'cosec-cot-sq', label: '1 + cot²θ = cosec²θ', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C10-MATH-CH8-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'What is the value of (sin 30° + cos 60°)?',
      explanation: 'sin 30° = 1/2, cos 60° = 1/2. Sum = 1/2 + 1/2 = 1.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '1', isCorrect: true },
        { optionLabel: 'B', optionText: '1/2', isCorrect: false },
        { optionLabel: 'C', optionText: '√3/2', isCorrect: false },
        { optionLabel: 'D', optionText: '0', isCorrect: false },
      ],
    },
    {
      questionCode: 'C10-MATH-CH8-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Evaluate: 9 sec²A - 9 tan²A.',
      explanation: '9(sec²A - tan²A) = 9(1) = 9.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '9', isCorrect: true },
        { optionLabel: 'B', optionText: '1', isCorrect: false },
        { optionLabel: 'C', optionText: '0', isCorrect: false },
        { optionLabel: 'D', optionText: '-9', isCorrect: false },
      ],
    },
    {
      questionCode: 'C10-MATH-CH8-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'If 15 cot A = 8, find the value of sin A.',
      explanation: 'cot A = 8/15 (Adj/Opp). Hypotenuse = √(8² + 15²) = √(64 + 225) = √289 = 17. sin A = Opp/Hyp = 15/17.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '15/17', isCorrect: true },
        { optionLabel: 'B', optionText: '8/17', isCorrect: false },
        { optionLabel: 'C', optionText: '17/15', isCorrect: false },
        { optionLabel: 'D', optionText: '8/15', isCorrect: false },
      ],
    },
    {
      questionCode: 'C10-MATH-CH8-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'Evaluate: (2 tan 30°) / (1 + tan² 30°).',
      explanation: '(2(1/√3)) / (1 + 1/3) = (2/√3) / (4/3) = (2/√3) × (3/4) = √3/2 = sin 60°.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'sin 60° (√3/2)', isCorrect: true },
        { optionLabel: 'B', optionText: 'cos 60° (1/2)', isCorrect: false },
        { optionLabel: 'C', optionText: 'tan 60° (√3)', isCorrect: false },
        { optionLabel: 'D', optionText: 'sin 30°', isCorrect: false },
      ],
    },
    {
      questionCode: 'C10-MATH-CH8-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [CBSE Board/Olympiad] Prove: (1 + tan θ + sec θ)(1 + cot θ - cosec θ) equals:',
      explanation: '(1 + sin/cos + 1/cos)(1 + cos/sin - 1/sin) = ((sin+cos+1)/cos)((sin+cos-1)/sin) = ((sin+cos)² - 1)/(sin cos) = (1 + 2sin cos - 1)/(sin cos) = 2.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '2', isCorrect: true },
        { optionLabel: 'B', optionText: '0', isCorrect: false },
        { optionLabel: 'C', optionText: '1', isCorrect: false },
        { optionLabel: 'D', optionText: '-1', isCorrect: false },
      ],
    },
    {
      questionCode: 'C10-MATH-CH8-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] If sin θ + sin²θ = 1, then the value of the expression (cos²θ + cos⁴θ) is:',
      explanation: 'sin θ = 1 - sin²θ = cos²θ. Therefore cos²θ + cos⁴θ = sin θ + sin²θ = 1.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '1', isCorrect: true },
        { optionLabel: 'B', optionText: '0', isCorrect: false },
        { optionLabel: 'C', optionText: '2', isCorrect: false },
        { optionLabel: 'D', optionText: '1/2', isCorrect: false },
      ],
    },
    {
      questionCode: 'C10-MATH-CH8-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'What is the maximum value of sin θ for 0° ≤ θ ≤ 90°?',
      explanation: 'The maximum value of sin θ is 1 (at θ = 90°).',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '1', isCorrect: true },
        { optionLabel: 'B', optionText: '0', isCorrect: false },
        { optionLabel: 'C', optionText: '1/2', isCorrect: false },
        { optionLabel: 'D', optionText: 'Infinity', isCorrect: false },
      ],
    },
    {
      questionCode: 'C10-MATH-CH8-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'If tan A = 4/3, find cos A.',
      explanation: 'tan A = 4/3 (Opp/Adj). Hypotenuse = √(4² + 3²) = 5. cos A = Adj/Hyp = 3/5.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '3/5', isCorrect: true },
        { optionLabel: 'B', optionText: '4/5', isCorrect: false },
        { optionLabel: 'C', optionText: '5/3', isCorrect: false },
        { optionLabel: 'D', optionText: '5/4', isCorrect: false },
      ],
    },
  ],
};
