export const ch2RelationsFunctionsClass11Data = {
  classNumber: 11,
  className: 'Class 11',
  subjectName: 'Mathematics',
  subjectCode: 'MATH11',
  chapterNumber: 2,
  chapterTitle: 'Relations and Functions',
  summary: 'Cartesian product A × B, Relation as subset of A × B, Domain, Range, Codomain, Function as a special relation, Types of functions (Identity, Constant, Polynomial, Rational, Modulus, Signum, Greatest Integer Function).',
  contentMarkdown: `# Chapter 2: Relations and Functions (Class 11 Mathematics NEP 2025)

## 1. Cartesian Product
If $n(A) = p$ and $n(B) = q$, then:
- $n(A \\times B) = p \\cdot q$
- Total number of relations from $A$ to $B = 2^{pq}$

## 2. Important Real Functions
1. **Modulus Function**: $f(x) = |x| = \\begin{cases} x & x \\ge 0 \\\\ -x & x < 0 \\end{cases}$
2. **Greatest Integer Function (Floor)**: $f(x) = [x]$ (greatest integer $\\le x$).
3. **Signum Function**: $sgn(x) = \\begin{cases} 1 & x > 0 \\\\ 0 & x = 0 \\\\ -1 & x < 0 \\end{cases}$
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Relations & Functions',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'func-types',
          label: 'Real Functions',
          type: 'category',
          children: [
            { id: 'modulus', label: 'Modulus |x| (Domain R, Range [0, ∞))', type: 'concept' },
            { id: 'gif', label: 'Greatest Integer [x]', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C11-MATH-CH2-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'If n(A) = 3 and n(B) = 2, what is the total number of relations from set A to set B?',
      explanation: 'Number of elements in A × B = 3 × 2 = 6. Total relations = 2⁶ = 64.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '64', isCorrect: true },
        { optionLabel: 'B', optionText: '6', isCorrect: false },
        { optionLabel: 'C', optionText: '32', isCorrect: false },
        { optionLabel: 'D', optionText: '12', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH2-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the domain of the real function f(x) = √(x - 3).',
      explanation: 'For square root to be real, x - 3 ≥ 0 => x ≥ 3. Domain is [3, ∞).',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '[3, ∞)', isCorrect: true },
        { optionLabel: 'B', optionText: '(3, ∞)', isCorrect: false },
        { optionLabel: 'C', optionText: '(-∞, 3]', isCorrect: false },
        { optionLabel: 'D', optionText: 'R', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH2-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'Find the range of the function f(x) = 2 - 3x for x ∈ R, x > 0.',
      explanation: 'x > 0 => 3x > 0 => -3x < 0 => 2 - 3x < 2. Range is (-∞, 2).',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '(-∞, 2)', isCorrect: true },
        { optionLabel: 'B', optionText: '(-∞, 2]', isCorrect: false },
        { optionLabel: 'C', optionText: '(2, ∞)', isCorrect: false },
        { optionLabel: 'D', optionText: 'R', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH2-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'If (x/3 + 1, y - 2/3) = (5/3, 1/3), find the values of x and y.',
      explanation: 'x/3 + 1 = 5/3 => x/3 = 2/3 => x = 2. y - 2/3 = 1/3 => y = 1.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'x = 2, y = 1', isCorrect: true },
        { optionLabel: 'B', optionText: 'x = 1, y = 2', isCorrect: false },
        { optionLabel: 'C', optionText: 'x = 3, y = 1', isCorrect: false },
        { optionLabel: 'D', optionText: 'x = 2, y = 3', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH2-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [JEE Main / Olympiad] Find the domain of the real-valued function f(x) = 1 / √(9 - x²).',
      explanation: 'Condition: 9 - x² > 0 => x² < 9 => -3 < x < 3. Domain is (-3, 3).',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '(-3, 3)', isCorrect: true },
        { optionLabel: 'B', optionText: '[-3, 3]', isCorrect: false },
        { optionLabel: 'C', optionText: '(-∞, -3) ∪ (3, ∞)', isCorrect: false },
        { optionLabel: 'D', optionText: 'R - {-3, 3}', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH2-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] What is the range of the real function f(x) = x / (1 + x²)?',
      explanation: 'Let y = x / (1 + x²) => y x² - x + y = 0. For real x, Discriminant D ≥ 0 => 1 - 4y² ≥ 0 => 4y² ≤ 1 => -1/2 ≤ y ≤ 1/2. Range is [-1/2, 1/2].',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '[-1/2, 1/2]', isCorrect: true },
        { optionLabel: 'B', optionText: '(-1/2, 1/2)', isCorrect: false },
        { optionLabel: 'C', optionText: '[-1, 1]', isCorrect: false },
        { optionLabel: 'D', optionText: '[0, 1/2]', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH2-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'What is the range of the Modulus Function f(x) = |x| for all x ∈ R?',
      explanation: 'Absolute value is always non-negative: [0, ∞).',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '[0, ∞)', isCorrect: true },
        { optionLabel: 'B', optionText: 'R', isCorrect: false },
        { optionLabel: 'C', optionText: '(0, ∞)', isCorrect: false },
        { optionLabel: 'D', optionText: '(-∞, 0]', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH2-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'What is the value of the Greatest Integer Function f(x) = [-2.7]?',
      explanation: 'The greatest integer less than or equal to -2.7 is -3.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '-3', isCorrect: true },
        { optionLabel: 'B', optionText: '-2', isCorrect: false },
        { optionLabel: 'C', optionText: '2', isCorrect: false },
        { optionLabel: 'D', optionText: '3', isCorrect: false },
      ],
    },
  ],
};
