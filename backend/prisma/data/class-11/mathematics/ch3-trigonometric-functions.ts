export const ch3TrigonometricFunctionsClass11Data = {
  classNumber: 11,
  className: 'Class 11',
  subjectName: 'Mathematics',
  subjectCode: 'MATH11',
  chapterNumber: 3,
  chapterTitle: 'Trigonometric Functions',
  summary: 'Radian and Degree measure (π rad = 180°), Sign of trigonometric functions in four quadrants (ASTC Rule), Sum and Difference identities, Double and Triple angle formulas.',
  contentMarkdown: `# Chapter 3: Trigonometric Functions (Class 11 Mathematics NEP 2025)

## 1. Radian and Degree Conversion
$$\\pi \\text{ radians} = 180^\\circ \\implies 1 \\text{ rad} = \\frac{180^\\circ}{\\pi}, \\quad 1^\\circ = \\frac{\\pi}{180} \\text{ rad}$$
- Arc length $l = r \\theta$ (where $\\theta$ is in radians).

## 2. ASTC Rule (All Silver Tea Cups)
- **Quadrant I** ($0 - 90^\\circ$): ALL ratios positive.
- **Quadrant II** ($90^\\circ - 180^\\circ$): SIN, COSEC positive.
- **Quadrant III** ($180^\\circ - 270^\\circ$): TAN, COT positive.
- **Quadrant IV** ($270^\\circ - 360^\\circ$): COS, SEC positive.

## 3. Important Formulas
- $\\sin(x + y) = \\sin x \\cos y + \\cos x \\sin y$
- $\\cos(x + y) = \\cos x \\cos y - \\sin x \\sin y$
- $\\cos 2x = \\cos^2 x - \\sin^2 x = 2\\cos^2 x - 1 = 1 - 2\\sin^2 x$
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Trigonometric Functions',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'astc-rule',
          label: 'ASTC Quadrant Rule',
          type: 'category',
          children: [
            { id: 'rad-deg', label: 'π radians = 180°, l = r θ', type: 'concept' },
            { id: 'double-angle', label: 'cos 2x = 1 - 2sin²x', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C11-MATH-CH3-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'Convert 40° 20\' into radian measure.',
      explanation: '40° 20\' = (40 + 20/60)° = (40 + 1/3)° = 121/3°. Radian measure = (121/3) × (π/180) = 121π / 540 rad.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '121π / 540 rad', isCorrect: true },
        { optionLabel: 'B', optionText: '120π / 540 rad', isCorrect: false },
        { optionLabel: 'C', optionText: '121π / 360 rad', isCorrect: false },
        { optionLabel: 'D', optionText: '221π / 540 rad', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH3-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the value of sin 75° using compound angle formulas.',
      explanation: 'sin(45° + 30°) = sin 45° cos 30° + cos 45° sin 30° = (1/√2)(√3/2) + (1/√2)(1/2) = (√3 + 1) / (2√2).',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '(√3 + 1) / (2√2)', isCorrect: true },
        { optionLabel: 'B', optionText: '(√3 - 1) / (2√2)', isCorrect: false },
        { optionLabel: 'C', optionText: '√3 / 2', isCorrect: false },
        { optionLabel: 'D', optionText: '1 / √2', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH3-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'If cos x = -3/5 and x lies in the 3rd quadrant, find the value of sin x.',
      explanation: 'In 3rd quadrant, sin x is negative. sin x = -√(1 - cos²x) = -√(1 - 9/25) = -√(16/25) = -4/5.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '-4/5', isCorrect: true },
        { optionLabel: 'B', optionText: '4/5', isCorrect: false },
        { optionLabel: 'C', optionText: '-3/4', isCorrect: false },
        { optionLabel: 'D', optionText: '3/4', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH3-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'Find the principal solution of the trigonometric equation sin x = √3 / 2.',
      explanation: 'sin x = sin(π/3) or sin(π - π/3) = sin(2π/3). Principal solutions are x = π/3, 2π/3.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'π/3, 2π/3', isCorrect: true },
        { optionLabel: 'B', optionText: 'π/6, 5π/6', isCorrect: false },
        { optionLabel: 'C', optionText: 'π/4, 3π/4', isCorrect: false },
        { optionLabel: 'D', optionText: 'π/3, 4π/3', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH3-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [JEE Main / Olympiad] Prove the product: cos 20° cos 40° cos 60° cos 80° equals:',
      explanation: 'cos 60° = 1/2. Product cos 20° cos 40° cos 80° = (1/8) (sin 80° / sin 20°). Total = (1/2) × (1/8) = 1/16.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '1/16', isCorrect: true },
        { optionLabel: 'B', optionText: '1/8', isCorrect: false },
        { optionLabel: 'C', optionText: '3/16', isCorrect: false },
        { optionLabel: 'D', optionText: '1/32', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH3-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] Find the maximum value of the expression 3 sin x + 4 cos x + 5.',
      explanation: 'Maximum value of a sin x + b cos x is √(a² + b²). Here √(3² + 4²) = 5. So maximum value of (3 sin x + 4 cos x + 5) = 5 + 5 = 10.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '10', isCorrect: true },
        { optionLabel: 'B', optionText: '12', isCorrect: false },
        { optionLabel: 'C', optionText: '5', isCorrect: false },
        { optionLabel: 'D', optionText: '7', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH3-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'Find the period of the function f(x) = sin 2x.',
      explanation: 'The period of sin(kx) is 2π / k. Here period = 2π / 2 = π.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'π', isCorrect: true },
        { optionLabel: 'B', optionText: '2π', isCorrect: false },
        { optionLabel: 'C', optionText: 'π/2', isCorrect: false },
        { optionLabel: 'D', optionText: '4π', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH3-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the value of tan 15°.',
      explanation: 'tan(45° - 30°) = (1 - 1/√3) / (1 + 1/√3) = (√3 - 1) / (√3 + 1) = 2 - √3.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '2 - √3', isCorrect: true },
        { optionLabel: 'B', optionText: '2 + √3', isCorrect: false },
        { optionLabel: 'C', optionText: '√3 - 1', isCorrect: false },
        { optionLabel: 'D', optionText: '1 - √3', isCorrect: false },
      ],
    },
  ],
};
