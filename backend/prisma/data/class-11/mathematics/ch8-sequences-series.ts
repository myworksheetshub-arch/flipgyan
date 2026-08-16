export const ch8SequencesSeriesClass11Data = {
  classNumber: 11,
  className: 'Class 11',
  subjectName: 'Mathematics',
  subjectCode: 'MATH11',
  chapterNumber: 8,
  chapterTitle: 'Sequences and Series',
  summary: 'Geometric Progression (GP), nth term an = a*r^(n-1), Sum of n terms Sn = a(r^n - 1)/(r - 1), Sum to infinity S_inf = a/(1 - r) for |r| < 1, AM and GM relationship (AM ≥ GM).',
  contentMarkdown: `# Chapter 8: Sequences and Series (Class 11 Mathematics NEP 2025)

## 1. Geometric Progression (GP)
- **$n^{\\text{th}}$ Term**: $a_n = a r^{n-1}$
- **Sum of $n$ Terms**: $S_n = \\frac{a(r^n - 1)}{r - 1} \\quad (r \\neq 1)$
- **Sum to Infinity** ($|r| < 1$):
  $$S_\\infty = \\frac{a}{1 - r}$$

## 2. AM and GM Inequality
For two positive real numbers $a$ and $b$:
- Arithmetic Mean: $A = \\frac{a + b}{2}$
- Geometric Mean: $G = \\sqrt{ab}$
- **Inequality**: $A \\ge G \\implies \\frac{a + b}{2} \\ge \\sqrt{ab}$
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Sequences & Series',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'gp-am-gm',
          label: 'GP & AM-GM Inequality',
          type: 'category',
          children: [
            { id: 'inf-sum', label: 'S∞ = a / (1 - r)', type: 'concept' },
            { id: 'am-gm-rel', label: 'AM ≥ GM', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C11-MATH-CH8-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the 10th term of the GP: 5, 25, 125, ...',
      explanation: 'a = 5, r = 5. a₁₀ = a r⁹ = 5 × 5⁹ = 5¹⁰.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '5¹⁰', isCorrect: true },
        { optionLabel: 'B', optionText: '5⁹', isCorrect: false },
        { optionLabel: 'C', optionText: '10⁵', isCorrect: false },
        { optionLabel: 'D', optionText: '5¹1', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH8-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the sum to infinity of the GP: 1, 1/2, 1/4, 1/8, ...',
      explanation: 'a = 1, r = 1/2. S_∞ = a / (1 - r) = 1 / (1 - 1/2) = 1 / (1/2) = 2.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '2', isCorrect: true },
        { optionLabel: 'B', optionText: '1', isCorrect: false },
        { optionLabel: 'C', optionText: '4', isCorrect: false },
        { optionLabel: 'D', optionText: '1.5', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH8-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'The 5th, 8th and 11th terms of a GP are p, q and s respectively. Show that:',
      explanation: 'p = a r⁴, q = a r⁷, s = a r¹⁰. q² = (a r⁷)² = a² r¹⁴. p × s = (a r⁴)(a r¹⁰) = a² r¹⁴. So q² = ps.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'q² = ps', isCorrect: true },
        { optionLabel: 'B', optionText: 'q = p + s', isCorrect: false },
        { optionLabel: 'C', optionText: 'q³ = p s', isCorrect: false },
        { optionLabel: 'D', optionText: 'p² = q s', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH8-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'Insert two numbers between 3 and 81 so that the resulting sequence is a GP.',
      explanation: 'Sequence: 3, G₁, G₂, 81. a = 3, a₄ = 81 => 3 r³ = 81 => r³ = 27 => r = 3. G₁ = 3(3) = 9, G₂ = 9(3) = 27.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '9 and 27', isCorrect: true },
        { optionLabel: 'B', optionText: '12 and 36', isCorrect: false },
        { optionLabel: 'C', optionText: '6 and 18', isCorrect: false },
        { optionLabel: 'D', optionText: '27 and 54', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH8-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [JEE Main / Olympiad] If A and G be AM and GM of two positive numbers, then the numbers are given by:',
      explanation: 'a, b = A ± √(A² - G²).',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'A ± √(A² - G²)', isCorrect: true },
        { optionLabel: 'B', optionText: 'A ± √(A + G)', isCorrect: false },
        { optionLabel: 'C', optionText: 'G ± √(A² - G²)', isCorrect: false },
        { optionLabel: 'D', optionText: 'A ± G', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH8-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] Find the minimum value of x + 1/x for x > 0 using AM-GM inequality.',
      explanation: '(x + 1/x)/2 ≥ √(x × 1/x) = 1 => x + 1/x ≥ 2. Minimum value is 2 (at x = 1).',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '2', isCorrect: true },
        { optionLabel: 'B', optionText: '1', isCorrect: false },
        { optionLabel: 'C', optionText: '0', isCorrect: false },
        { optionLabel: 'D', optionText: '4', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH8-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'For any two non-equal positive real numbers a and b, which inequality holds true?',
      explanation: 'Arithmetic Mean (AM) is strictly greater than Geometric Mean (GM) for distinct positive numbers: AM > GM.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'AM > GM', isCorrect: true },
        { optionLabel: 'B', optionText: 'AM < GM', isCorrect: false },
        { optionLabel: 'C', optionText: 'AM = GM always', isCorrect: false },
        { optionLabel: 'D', optionText: 'AM × GM = 1', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH8-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the sum of the series: 7 + 77 + 777 + ... to n terms.',
      explanation: '(7/9)[9 + 99 + 999 + ...] = (7/9)[(10 - 1) + (10² - 1) + ...] = (7/9)[ (10(10ⁿ - 1)/9) - n ] = (70/81)(10ⁿ - 1) - (7n/9).',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '(70/81)(10ⁿ - 1) - (7n/9)', isCorrect: true },
        { optionLabel: 'B', optionText: '(7/9)(10ⁿ - 1)', isCorrect: false },
        { optionLabel: 'C', optionText: '(70/9)(10ⁿ - 1) - 7n', isCorrect: false },
        { optionLabel: 'D', optionText: '(7/81)(10ⁿ - 1) - n', isCorrect: false },
      ],
    },
  ],
};
