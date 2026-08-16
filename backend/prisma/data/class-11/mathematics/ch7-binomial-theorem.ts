export const ch7BinomialTheoremClass11Data = {
  classNumber: 11,
  className: 'Class 11',
  subjectName: 'Mathematics',
  subjectCode: 'MATH11',
  chapterNumber: 7,
  chapterTitle: 'Binomial Theorem',
  summary: 'Binomial Expansion of (a + b)ⁿ, General term T_{r+1} = C(n, r) * a^(n-r) * b^r, Middle term(s) in expansion, Simple applications.',
  contentMarkdown: `# Chapter 7: Binomial Theorem (Class 11 Mathematics NEP 2025)

## 1. Binomial Theorem Statement
For any positive integer $n$:
$$(a + b)^n = \\sum_{r=0}^{n} {}^n C_r a^{n-r} b^r = {}^n C_0 a^n + {}^n C_1 a^{n-1}b + \\dots + {}^n C_n b^n$$

## 2. General Term
$$T_{r+1} = {}^n C_r a^{n-r} b^r$$

## 3. Middle Term
- If $n$ is **even**: Single middle term is $T_{\\frac{n}{2} + 1}$.
- If $n$ is **odd**: Two middle terms are $T_{\\frac{n+1}{2}}$ and $T_{\\frac{n+3}{2}}$.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Binomial Theorem',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'binomial-expansion',
          label: 'Expansion & Terms',
          type: 'category',
          children: [
            { id: 'gen-term', label: 'Tr+1 = nCr a^(n-r) b^r', type: 'concept' },
            { id: 'mid-term', label: 'Middle Term Calculation', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C11-MATH-CH7-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'How many total terms are present in the Binomial expansion of (x + y)ⁿ?',
      explanation: 'The expansion of (x + y)ⁿ always has (n + 1) terms.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'n + 1', isCorrect: true },
        { optionLabel: 'B', optionText: 'n', isCorrect: false },
        { optionLabel: 'C', optionText: '2ⁿ', isCorrect: false },
        { optionLabel: 'D', optionText: 'n - 1', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH7-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'What is the sum of all binomial coefficients in the expansion of (1 + x)ⁿ?',
      explanation: 'ⁿC₀ + ⁿC₁ + ... + ⁿCₙ = 2ⁿ (by putting x = 1).',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '2ⁿ', isCorrect: true },
        { optionLabel: 'B', optionText: '2ⁿ⁻¹', isCorrect: false },
        { optionLabel: 'C', optionText: 'n²', isCorrect: false },
        { optionLabel: 'D', optionText: 'n!', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH7-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the middle term in the expansion of (x + 2y)⁸.',
      explanation: 'n = 8 (even). Middle term is T_{8/2 + 1} = T₅. T₅ = ⁸C₄ x⁴ (2y)⁴ = 70 × 16 x⁴ y⁴ = 1120 x⁴ y⁴.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '1120 x⁴ y⁴', isCorrect: true },
        { optionLabel: 'B', optionText: '560 x⁴ y⁴', isCorrect: false },
        { optionLabel: 'C', optionText: '1120 x⁵ y³', isCorrect: false },
        { optionLabel: 'D', optionText: '70 x⁴ y⁴', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH7-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'Find the coefficient of x⁶ in the expansion of (3x² - 1 / 3x)⁹.',
      explanation: 'T_{r+1} = ⁹C_r (3x²)^{9-r} (-1/3x)^r = ⁹C_r 3^{9-2r} (-1)^r x^{18-3r}. For x⁶: 18 - 3r = 6 => 3r = 12 => r = 4. Coeff = ⁹C₄ 3¹ (-1)⁴ = 126 × 3 = 378.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '378', isCorrect: true },
        { optionLabel: 'B', optionText: '-378', isCorrect: false },
        { optionLabel: 'C', optionText: '126', isCorrect: false },
        { optionLabel: 'D', optionText: '252', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH7-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [JEE Main / Olympiad] Find the term independent of x in the expansion of (x + 1/x)²ⁿ.',
      explanation: 'T_{r+1} = ²ⁿC_r x^{2n-r} (1/x)^r = ²ⁿC_r x^{2n-2r}. Independent of x => 2n - 2r = 0 => r = n. Term is ²ⁿC_n = (2n)! / (n!)².',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '(2n)! / (n!)²', isCorrect: true },
        { optionLabel: 'B', optionText: 'n!', isCorrect: false },
        { optionLabel: 'C', optionText: '(2n)! / n!', isCorrect: false },
        { optionLabel: 'D', optionText: '²ⁿC_n x^n', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH7-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] Find the remainder when 6ⁿ - 5n is divided by 25 for any natural number n ≥ 2.',
      explanation: '6ⁿ = (1 + 5)ⁿ = 1 + 5n + ²C₂ 5² + ... = 1 + 5n + 25k. So 6ⁿ - 5n = 25k + 1. Remainder when divided by 25 is 1.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '1', isCorrect: true },
        { optionLabel: 'B', optionText: '0', isCorrect: false },
        { optionLabel: 'C', optionText: '5', isCorrect: false },
        { optionLabel: 'D', optionText: '6', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH7-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'What is the sum of odd binomial coefficients ⁿC₁ + ⁿC₃ + ⁿC₅ + ... ?',
      explanation: 'Sum of odd binomial coefficients = Sum of even binomial coefficients = 2ⁿ⁻¹.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '2ⁿ⁻¹', isCorrect: true },
        { optionLabel: 'B', optionText: '2ⁿ', isCorrect: false },
        { optionLabel: 'C', optionText: '2ⁿ⁺¹', isCorrect: false },
        { optionLabel: 'D', optionText: '2ⁿ / 4', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH7-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the 4th term from the END in the expansion of (x/3 - 3/x²)⁷.',
      explanation: '4th term from end in (a+b)ⁿ is (n - 4 + 2)th term from beginning = (7 - 4 + 2) = 5th term = T₅. T₅ = ⁷C₄ (x/3)³ (-3/x²)⁴ = 35 (x³/27) (81/x⁸) = 105 / x⁵.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '105 / x⁵', isCorrect: true },
        { optionLabel: 'B', optionText: '-105 / x⁵', isCorrect: false },
        { optionLabel: 'C', optionText: '35 / x⁵', isCorrect: false },
        { optionLabel: 'D', optionText: '315 / x⁵', isCorrect: false },
      ],
    },
  ],
};
