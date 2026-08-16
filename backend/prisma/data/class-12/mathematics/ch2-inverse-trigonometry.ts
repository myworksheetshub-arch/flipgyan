export const ch2InverseTrigonometryClass12Data = {
  classNumber: 12,
  className: 'Class 12',
  subjectName: 'Mathematics',
  subjectCode: 'MATH12',
  chapterNumber: 2,
  chapterTitle: 'Inverse Trigonometric Functions',
  summary: 'Principal Value Branches of sin⁻¹, cos⁻¹, tan⁻¹, cosec⁻¹, sec⁻¹, cot⁻¹, Properties of inverse trigonometric functions.',
  contentMarkdown: `# Chapter 2: Inverse Trigonometric Functions (Class 12 Mathematics NEP 2025)

## 1. Principal Value Branches
- $\\sin^{-1} x \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right], \\quad x \\in [-1, 1]$
- $\\cos^{-1} x \\in [0, \\pi], \\quad x \\in [-1, 1]$
- $\\tan^{-1} x \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right), \\quad x \\in \\mathbb{R}$

## 2. Core Identities
1. $\\sin^{-1} x + \\cos^{-1} x = \\frac{\\pi}{2} \\quad (x \\in [-1, 1])$
2. $\\tan^{-1} x + \\cot^{-1} x = \\frac{\\pi}{2} \\quad (x \\in \\mathbb{R})$
3. $\\sin^{-1}(-x) = -\\sin^{-1} x, \\quad \\cos^{-1}(-x) = \\pi - \\cos^{-1} x$
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Inverse Trigonometric Functions',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'pvb',
          label: 'Principal Value Branches',
          type: 'category',
          children: [
            { id: 'sin-inv-pvb', label: 'sin⁻¹x ∈ [-π/2, π/2]', type: 'concept' },
            { id: 'cos-inv-pvb', label: 'cos⁻¹x ∈ [0, π]', type: 'concept' },
            { id: 'identity-sum', label: 'sin⁻¹x + cos⁻¹x = π/2', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C12-MATH-CH2-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'What is the Principal Value of sin⁻¹(-1/2)?',
      explanation: 'sin⁻¹(-1/2) = -sin⁻¹(1/2) = -π/6.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '-π/6', isCorrect: true },
        { optionLabel: 'B', optionText: '5π/6', isCorrect: false },
        { optionLabel: 'C', optionText: 'π/6', isCorrect: false },
        { optionLabel: 'D', optionText: '-π/3', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH2-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the Principal Value of cos⁻¹(-1/2).',
      explanation: 'cos⁻¹(-x) = π - cos⁻¹(x) = π - cos⁻¹(1/2) = π - π/3 = 2π/3.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '2π/3', isCorrect: true },
        { optionLabel: 'B', optionText: '-π/3', isCorrect: false },
        { optionLabel: 'C', optionText: '4π/3', isCorrect: false },
        { optionLabel: 'D', optionText: 'π/3', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH2-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Evaluate: tan⁻¹(√3) - sec⁻¹(-2).',
      explanation: 'tan⁻¹(√3) = π/3. sec⁻¹(-2) = π - sec⁻¹(2) = π - π/3 = 2π/3. Difference = π/3 - 2π/3 = -π/3.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '-π/3', isCorrect: true },
        { optionLabel: 'B', optionText: 'π/3', isCorrect: false },
        { optionLabel: 'C', optionText: '2π/3', isCorrect: false },
        { optionLabel: 'D', optionText: '0', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH2-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'Evaluate the value of cos⁻¹(cos(7π/6)).',
      explanation: '7π/6 is outside [0, π]. cos(7π/6) = cos(2π - 5π/6) = cos(5π/6). cos⁻¹(cos(5π/6)) = 5π/6.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '5π/6', isCorrect: true },
        { optionLabel: 'B', optionText: '7π/6', isCorrect: false },
        { optionLabel: 'C', optionText: 'π/6', isCorrect: false },
        { optionLabel: 'D', optionText: '-π/6', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH2-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [CBSE Board/JEE Main] Solve for x: tan⁻¹(2x) + tan⁻¹(3x) = π/4.',
      explanation: 'tan⁻¹((2x + 3x)/(1 - 6x²)) = π/4 => 5x / (1 - 6x²) = 1 => 6x² + 5x - 1 = 0 => (6x - 1)(x + 1) = 0. Since x > 0 for LHS to be positive, x = 1/6.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'x = 1/6', isCorrect: true },
        { optionLabel: 'B', optionText: 'x = -1', isCorrect: false },
        { optionLabel: 'C', optionText: 'x = 1/3', isCorrect: false },
        { optionLabel: 'D', optionText: 'x = 1/2', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH2-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] If sin⁻¹ x + sin⁻¹ y + sin⁻¹ z = (3π / 2), find the value of (x¹⁰⁰ + y¹⁰⁰ + z¹⁰⁰) - (9 / (x¹⁰¹ + y¹⁰¹ + z¹⁰¹)).',
      explanation: 'Maximum value of sin⁻¹ is π/2. Each sin⁻¹ = π/2 => x = y = z = 1. (1 + 1 + 1) - (9 / 3) = 3 - 3 = 0.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '0', isCorrect: true },
        { optionLabel: 'B', optionText: '3', isCorrect: false },
        { optionLabel: 'C', optionText: '1', isCorrect: false },
        { optionLabel: 'D', optionText: '-1', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH2-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'What is the Domain of the function f(x) = sin⁻¹(2x - 1)?',
      explanation: '-1 ≤ 2x - 1 ≤ 1 => 0 ≤ 2x ≤ 2 => 0 ≤ x ≤ 1. Domain is [0, 1].',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '[0, 1]', isCorrect: true },
        { optionLabel: 'B', optionText: '[-1, 1]', isCorrect: false },
        { optionLabel: 'C', optionText: '[0, 2]', isCorrect: false },
        { optionLabel: 'D', optionText: 'R', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH2-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Evaluate: sin(π/3 - sin⁻¹(-1/2)).',
      explanation: 'sin⁻¹(-1/2) = -π/6. sin(π/3 - (-π/6)) = sin(π/3 + π/6) = sin(π/2) = 1.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '1', isCorrect: true },
        { optionLabel: 'B', optionText: '1/2', isCorrect: false },
        { optionLabel: 'C', optionText: '1/√2', isCorrect: false },
        { optionLabel: 'D', optionText: '0', isCorrect: false },
      ],
    },
  ],
};
