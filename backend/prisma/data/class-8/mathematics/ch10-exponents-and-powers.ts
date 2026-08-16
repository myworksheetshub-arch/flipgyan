export const ch10ExponentsClass8Data = {
  classNumber: 8,
  className: 'Class 8',
  subjectName: 'Mathematics',
  subjectCode: 'MATH8',
  chapterNumber: 10,
  chapterTitle: 'Exponents and Powers',
  summary: 'Powers with negative exponents ($a^{-m} = 1/a^m$), laws of exponents, expressing very large and very small numbers in Standard Scientific Notation.',
  contentMarkdown: `# Chapter 10: Exponents and Powers (Class 8 Mathematics NEP 2025)

## 1. Laws of Exponents
For non-zero integers $a, b$ and integers $m, n$:
1. $a^m \\times a^n = a^{m+n}$
2. $a^m \\div a^n = a^{m-n}$
3. $(a^m)^n = a^{mn}$
4. $a^m \\times b^m = (ab)^m$
5. $a^m \\div b^m = (a/b)^m$
6. $a^0 = 1$
7. $a^{-m} = \\frac{1}{a^m}$

## 2. Standard Form (Scientific Notation)
Any number expressed in the form $m \\times 10^n$, where $1 \\le m < 10$ and $n$ is an integer.
- $0.000007 = 7 \\times 10^{-6}$
- $149,600,000,000 = 1.496 \\times 10^{11}$
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Exponents & Powers',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'laws',
          label: 'Exponent Laws',
          type: 'category',
          children: [
            { id: 'neg-exp', label: 'a^(-m) = 1 / a^m', type: 'concept' },
            { id: 'zero-exp', label: 'a⁰ = 1', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C8-MATH-CH10-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'What is the value of 3⁻²?',
      explanation: '3⁻² = 1 / 3² = 1/9.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '1/9', isCorrect: true },
        { optionLabel: 'B', optionText: '-9', isCorrect: false },
        { optionLabel: 'C', optionText: '-6', isCorrect: false },
        { optionLabel: 'D', optionText: '9', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH10-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Express 0.000007 in Standard Form (Scientific Notation).',
      explanation: 'Moving decimal 6 places to the right gives 7 × 10⁻⁶.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '7 × 10⁻⁶', isCorrect: true },
        { optionLabel: 'B', optionText: '7 × 10⁻⁵', isCorrect: false },
        { optionLabel: 'C', optionText: '0.7 × 10⁻⁶', isCorrect: false },
        { optionLabel: 'D', optionText: '7 × 10⁶', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH10-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the value of m for which 5ᵐ ÷ 5⁻³ = 5⁵.',
      explanation: '5ᵐ ⁻ ⁽⁻³⁾ = 5⁵ => 5ᵐ ⁺ ³ = 5⁵ => m + 3 = 5 => m = 2.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'm = 2', isCorrect: true },
        { optionLabel: 'B', optionText: 'm = 8', isCorrect: false },
        { optionLabel: 'C', optionText: 'm = -2', isCorrect: false },
        { optionLabel: 'D', optionText: 'm = 15', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH10-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Evaluate: (2⁻¹ × 4⁻¹) ÷ 2⁻².',
      explanation: '(1/2 × 1/4) ÷ (1/4) = (1/8) × 4 = 1/2.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '1/2', isCorrect: true },
        { optionLabel: 'B', optionText: '2', isCorrect: false },
        { optionLabel: 'C', optionText: '1/4', isCorrect: false },
        { optionLabel: 'D', optionText: '1', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH10-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [CBSE Olympiad] Simplify: (3⁻⁵ × 10⁻⁵ × 125) / (5⁻⁷ × 6⁻⁵).',
      explanation: '10⁻⁵ = 2⁻⁵ × 5⁻⁵, 125 = 5³, 6⁻⁵ = 2⁻⁵ × 3⁻⁵. Numerator = 3⁻⁵ × 2⁻⁵ × 5⁻⁵ × 5³ = 3⁻⁵ × 2⁻⁵ × 5⁻². Denominator = 5⁻⁷ × 2⁻⁵ × 3⁻⁵. Dividing gives 5⁻² / 5⁻⁷ = 5⁵ = 3125.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '3125 (5⁵)', isCorrect: true },
        { optionLabel: 'B', optionText: '625 (5⁴)', isCorrect: false },
        { optionLabel: 'C', optionText: '1', isCorrect: false },
        { optionLabel: 'D', optionText: '1/3125', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH10-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] Find the multiplicative inverse of (5/8)⁻⁷ × (8/5)⁻⁵.',
      explanation: '(5/8)⁻⁷ = (8/5)⁷. Product = (8/5)⁷ × (8/5)⁻⁵ = (8/5)². Multiplicative inverse of (8/5)² is (5/8)² = 25/64.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '25/64', isCorrect: true },
        { optionLabel: 'B', optionText: '64/25', isCorrect: false },
        { optionLabel: 'C', optionText: '-25/64', isCorrect: false },
        { optionLabel: 'D', optionText: '5/8', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH10-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'What is the value of (2⁰ + 3⁰ + 4⁰)?',
      explanation: 'Any non-zero number to power 0 is 1. (1 + 1 + 1) = 3.',
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
      questionCode: 'C8-MATH-CH10-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Express 3.61492 × 10⁶ in usual decimal form.',
      explanation: '3.61492 × 1000000 = 3614920.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '36,14,920', isCorrect: true },
        { optionLabel: 'B', optionText: '36149.2', isCorrect: false },
        { optionLabel: 'C', optionText: '361492', isCorrect: false },
        { optionLabel: 'D', optionText: '36149200', isCorrect: false },
      ],
    },
  ],
};
