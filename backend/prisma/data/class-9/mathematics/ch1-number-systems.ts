export const ch1NumberSystemsClass9Data = {
  classNumber: 9,
  className: 'Class 9',
  subjectName: 'Mathematics',
  subjectCode: 'MATH9',
  chapterNumber: 1,
  chapterTitle: 'Number Systems',
  summary: 'Real numbers, rational & irrational numbers, decimal expansions (terminating vs non-terminating recurring), rationalising the denominator, laws of exponents for real numbers.',
  contentMarkdown: `# Chapter 1: Number Systems (Class 9 Mathematics NEP 2025)

## 1. Rational and Irrational Numbers
- **Irrational Numbers**: Cannot be written as $\\frac{p}{q}$. Their decimal expansion is **non-terminating and non-recurring** (e.g. $\\sqrt{2}, \\sqrt{3}, \\pi$).
- **Rationalising the Denominator**: Multiplying numerator and denominator by conjugate (e.g. $\\frac{1}{\\sqrt{a} + \\sqrt{b}} = \\frac{\\sqrt{a} - \\sqrt{b}}{a - b}$).

## 2. Laws of Exponents for Real Numbers
Let $a > 0$ be a real number and $p, q$ be rational numbers:
- $a^p \\cdot a^q = a^{p+q}$
- $(a^p)^q = a^{pq}$
- $\\frac{a^p}{a^q} = a^{p-q}$
- $a^p \\cdot b^p = (ab)^p$
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Number Systems',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'real-numbers',
          label: 'Real Numbers',
          type: 'category',
          children: [
            { id: 'irrational', label: 'Irrational: Non-terminating & non-recurring decimal', type: 'concept' },
            { id: 'rationalise', label: 'Rationalising Denominator', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C9-MATH-CH1-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'Which of the following is an IRRATIONAL number?',
      explanation: '√2 is irrational because its decimal expansion is non-terminating and non-recurring.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '√2', isCorrect: true },
        { optionLabel: 'B', optionText: '√4', isCorrect: false },
        { optionLabel: 'C', optionText: '3/7', isCorrect: false },
        { optionLabel: 'D', optionText: '0.125', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH1-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Express 0.333... (0.3̄) as a rational number p/q.',
      explanation: 'Let x = 0.333... 10x = 3.333... Subtracting: 9x = 3 => x = 3/9 = 1/3.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '1/3', isCorrect: true },
        { optionLabel: 'B', optionText: '3/10', isCorrect: false },
        { optionLabel: 'C', optionText: '3/100', isCorrect: false },
        { optionLabel: 'D', optionText: '1/9', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH1-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Rationalise the denominator of: 1 / (√7 - √6).',
      explanation: 'Multiply by (√7 + √6): 1(√7 + √6) / (7 - 6) = √7 + √6.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '√7 + √6', isCorrect: true },
        { optionLabel: 'B', optionText: '√7 - √6', isCorrect: false },
        { optionLabel: 'C', optionText: '(√7 + √6) / 13', isCorrect: false },
        { optionLabel: 'D', optionText: '13', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH1-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Simplify: (64)⁻¹/³.',
      explanation: '64 = 4³. So (4³)⁻¹/³ = 4⁻¹ = 1/4.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '1/4', isCorrect: true },
        { optionLabel: 'B', optionText: '-4', isCorrect: false },
        { optionLabel: 'C', optionText: '4', isCorrect: false },
        { optionLabel: 'D', optionText: '1/16', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH1-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [CBSE Olympiad] If x = 3 + 2√2, find the value of x + (1/x).',
      explanation: '1/x = 1/(3+2√2) = (3-2√2)/(9-8) = 3-2√2. So x + (1/x) = (3+2√2) + (3-2√2) = 6.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '6', isCorrect: true },
        { optionLabel: 'B', optionText: '4√2', isCorrect: false },
        { optionLabel: 'C', optionText: '3', isCorrect: false },
        { optionLabel: 'D', optionText: '6√2', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH1-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] Find the value of a and b if (5 + 2√3) / (7 + 4√3) = a + b√3.',
      explanation: 'Multiply num & den by (7 - 4√3): (5 + 2√3)(7 - 4√3) / (49 - 48) = (35 - 20√3 + 14√3 - 24) = 11 - 6√3. So a = 11, b = -6.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'a = 11, b = -6', isCorrect: true },
        { optionLabel: 'B', optionText: 'a = 11, b = 6', isCorrect: false },
        { optionLabel: 'C', optionText: 'a = -11, b = 6', isCorrect: false },
        { optionLabel: 'D', optionText: 'a = 35, b = -24', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH1-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'The decimal representation of an irrational number is always:',
      explanation: 'Irrational numbers have non-terminating and non-recurring decimal expansions.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Non-terminating Non-recurring', isCorrect: true },
        { optionLabel: 'B', optionText: 'Terminating', isCorrect: false },
        { optionLabel: 'C', optionText: 'Non-terminating Recurring', isCorrect: false },
        { optionLabel: 'D', optionText: 'Terminating Recurring', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH1-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Simplify: (2√2 + 5√3) + (1√2 - 3√3).',
      explanation: 'Group like terms: (2√2 + 1√2) + (5√3 - 3√3) = 3√2 + 2√3.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '3√2 + 2√3', isCorrect: true },
        { optionLabel: 'B', optionText: '5√5', isCorrect: false },
        { optionLabel: 'C', optionText: '3√2 + 8√3', isCorrect: false },
        { optionLabel: 'D', optionText: '6√6', isCorrect: false },
      ],
    },
  ],
};
