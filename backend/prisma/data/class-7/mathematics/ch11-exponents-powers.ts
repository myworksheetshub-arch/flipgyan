export const ch11ExponentsPowersClass7Data = {
  classNumber: 7,
  className: 'Class 7',
  subjectName: 'Mathematics',
  subjectCode: 'MATH7',
  chapterNumber: 11,
  chapterTitle: 'Exponents and Powers',
  summary: 'Laws of Exponents (a^m * a^n = a^(m+n), a^m / a^n = a^(m-n), (a^m)^n = a^(m*n), a^0 = 1), Decimal Number System and Standard Scientific Notation.',
  contentMarkdown: `# Chapter 11: Exponents and Powers (Class 7 Mathematics NEP 2025)

## 1. Laws of Exponents
For any non-zero integer $a$ and integers $m, n$:
1. $a^m \\times a^n = a^{m+n}$
2. $a^m \\div a^n = a^{m-n} \\quad (m > n)$
3. $(a^m)^n = a^{m \\cdot n}$
4. $a^m \\times b^m = (a \\times b)^m$
5. $a^0 = 1$

## 2. Standard Form (Scientific Notation)
Any number can be expressed as $k \\times 10^n$ where $1 \\le k < 10$ and $n$ is an integer.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Exponents & Powers',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'exp-laws',
          label: 'Laws of Exponents',
          type: 'category',
          children: [
            { id: 'mult-law', label: 'a^m × a^n = a^(m+n)', type: 'concept' },
            { id: 'div-law', label: 'a^m ÷ a^n = a^(m-n)', type: 'concept' },
            { id: 'zero-pow', label: 'a⁰ = 1', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C7-MATH-CH11-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Simplify and express in exponential form: (2⁵ ÷ 2⁸) × 2⁻⁵.',
      explanation: '(2⁵⁻⁸) × 2⁻⁵ = 2⁻³ × 2⁻⁵ = 2⁻⁸ = 1 / 2⁸.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '2⁻⁸ (1 / 2⁸)', isCorrect: true },
        { optionLabel: 'B', optionText: '2⁸', isCorrect: false },
        { optionLabel: 'C', optionText: '2⁻²', isCorrect: false },
        { optionLabel: 'D', optionText: '2²', isCorrect: false },
      ],
    },
    {
      questionCode: 'C7-MATH-CH11-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'Evaluate the expression: (2⁰ + 3⁰ + 4⁰) × 5⁰.',
      explanation: '(1 + 1 + 1) × 1 = 3 × 1 = 3.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '3', isCorrect: true },
        { optionLabel: 'B', optionText: '1', isCorrect: false },
        { optionLabel: 'C', optionText: '0', isCorrect: false },
        { optionLabel: 'D', optionText: '9', isCorrect: false },
      ],
    },
    {
      questionCode: 'C7-MATH-CH11-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Simplify: (2³ × 3⁴ × 4) / (3 × 32).',
      explanation: '4 = 2², 32 = 2⁵. (2³ × 2² × 3⁴) / (3¹ × 2⁵) = (2⁵ × 3⁴) / (2⁵ × 3¹) = 3⁴⁻¹ = 3³ = 27.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '27 (3³)', isCorrect: true },
        { optionLabel: 'B', optionText: '81', isCorrect: false },
        { optionLabel: 'C', optionText: '9', isCorrect: false },
        { optionLabel: 'D', optionText: '54', isCorrect: false },
      ],
    },
    {
      questionCode: 'C7-MATH-CH11-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'Express 59045.8 in Standard Scientific Form.',
      explanation: 'Move decimal 4 places to the left: 5.90458 × 10⁴.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '5.90458 × 10⁴', isCorrect: true },
        { optionLabel: 'B', optionText: '59.0458 × 10³', isCorrect: false },
        { optionLabel: 'C', optionText: '0.590458 × 10⁵', isCorrect: false },
        { optionLabel: 'D', optionText: '5.90458 × 10⁵', isCorrect: false },
      ],
    },
    {
      questionCode: 'C7-MATH-CH11-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [CBSE Olympiad] Find m so that (-3)^(m+1) × (-3)⁵ = (-3)⁷.',
      explanation: '(-3)^(m+1+5) = (-3)⁷ => m + 6 = 7 => m = 1.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'm = 1', isCorrect: true },
        { optionLabel: 'B', optionText: 'm = 2', isCorrect: false },
        { optionLabel: 'C', optionText: 'm = 0', isCorrect: false },
        { optionLabel: 'D', optionText: 'm = 3', isCorrect: false },
      ],
    },
    {
      questionCode: 'C7-MATH-CH11-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] Which of the following is LARGER: 2.7 × 10¹² or 1.5 × 10⁸?',
      explanation: 'Comparing powers of 10: 10¹² is 10,000 times larger than 10⁸. So 2.7 × 10¹² is much LARGER.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '2.7 × 10¹²', isCorrect: true },
        { optionLabel: 'B', optionText: '1.5 × 10⁸', isCorrect: false },
        { optionLabel: 'C', optionText: 'Both are equal', isCorrect: false },
        { optionLabel: 'D', optionText: 'Cannot be determined', isCorrect: false },
      ],
    },
    {
      questionCode: 'C7-MATH-CH11-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'What is (-1)^odd integer equal to?',
      explanation: 'Any negative number raised to an odd power is NEGATIVE: (-1)^odd = -1.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '-1', isCorrect: true },
        { optionLabel: 'B', optionText: '1', isCorrect: false },
        { optionLabel: 'C', optionText: '0', isCorrect: false },
        { optionLabel: 'D', optionText: 'Infinity', isCorrect: false },
      ],
    },
    {
      questionCode: 'C7-MATH-CH11-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Express 729 as a power of 3.',
      explanation: '3¹=3, 3²=9, 3³=27, 3⁴=81, 3⁵=243, 3⁶=729. 729 = 3⁶.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '3⁶', isCorrect: true },
        { optionLabel: 'B', optionText: '3⁵', isCorrect: false },
        { optionLabel: 'C', optionText: '3⁷', isCorrect: false },
        { optionLabel: 'D', optionText: '3⁴', isCorrect: false },
      ],
    },
  ],
};
