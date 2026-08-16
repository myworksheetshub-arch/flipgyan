export const ch2PolynomialsClass9Data = {
  classNumber: 9,
  className: 'Class 9',
  subjectName: 'Mathematics',
  subjectCode: 'MATH9',
  chapterNumber: 2,
  chapterTitle: 'Polynomials',
  summary: 'Polynomials in one variable, degree of polynomial, zeroes of a polynomial, Factor Theorem, Remainder Theorem, algebraic identities (cubic & square).',
  contentMarkdown: `# Chapter 2: Polynomials (Class 9 Mathematics NEP 2025)

## 1. Factor Theorem
If $p(x)$ is a polynomial of degree $n \\ge 1$ and $a$ is any real number:
1. $(x - a)$ is a factor of $p(x)$ if $p(a) = 0$.
2. $p(a) = 0$ if $(x - a)$ is a factor of $p(x)$.

## 2. Important Algebraic Identities
- $(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2bc + 2ca$
- $(a + b)^3 = a^3 + b^3 + 3ab(a + b)$
- $(a - b)^3 = a^3 - b^3 - 3ab(a - b)$
- $a^3 + b^3 + c^3 - 3abc = (a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca)$
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Polynomials',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'factor-thm',
          label: 'Factor Theorem',
          type: 'category',
          children: [
            { id: 'zero-check', label: 'x - a is a factor iff p(a) = 0', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C9-MATH-CH2-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'What is the degree of the zero polynomial?',
      explanation: 'The degree of the zero polynomial is Not Defined.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Not defined', isCorrect: true },
        { optionLabel: 'B', optionText: '0', isCorrect: false },
        { optionLabel: 'C', optionText: '1', isCorrect: false },
        { optionLabel: 'D', optionText: 'Infinity', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH2-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the value of polynomial p(x) = 5x - 4x² + 3 at x = -1.',
      explanation: 'p(-1) = 5(-1) - 4(-1)² + 3 = -5 - 4(1) + 3 = -9 + 3 = -6.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '-6', isCorrect: true },
        { optionLabel: 'B', optionText: '4', isCorrect: false },
        { optionLabel: 'C', optionText: '-2', isCorrect: false },
        { optionLabel: 'D', optionText: '6', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH2-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'If (x - 1) is a factor of p(x) = kx² - 3x + k, find the value of k.',
      explanation: 'By Factor Theorem, p(1) = 0 => k(1)² - 3(1) + k = 0 => 2k - 3 = 0 => k = 3/2.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '3/2', isCorrect: true },
        { optionLabel: 'B', optionText: '2/3', isCorrect: false },
        { optionLabel: 'C', optionText: '-3/2', isCorrect: false },
        { optionLabel: 'D', optionText: '3', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH2-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Factorise: 12x² - 7x + 1.',
      explanation: '12x² - 4x - 3x + 1 = 4x(3x - 1) - 1(3x - 1) = (3x - 1)(4x - 1).',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '(3x - 1)(4x - 1)', isCorrect: true },
        { optionLabel: 'B', optionText: '(3x + 1)(4x + 1)', isCorrect: false },
        { optionLabel: 'C', optionText: '(6x - 1)(2x - 1)', isCorrect: false },
        { optionLabel: 'D', optionText: '(12x - 1)(x - 1)', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH2-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [CBSE Olympiad] If a + b + c = 0, what is the value of (a³ + b³ + c³)?',
      explanation: 'If a + b + c = 0, using identity a³ + b³ + c³ - 3abc = (a+b+c)(a²+b²+c²-ab-bc-ca) = 0 => a³ + b³ + c³ = 3abc.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '3abc', isCorrect: true },
        { optionLabel: 'B', optionText: 'abc', isCorrect: false },
        { optionLabel: 'C', optionText: '0', isCorrect: false },
        { optionLabel: 'D', optionText: '-3abc', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH2-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] Evaluate without multiplying directly: 99³.',
      explanation: '99³ = (100 - 1)³ = 100³ - 1³ - 3(100)(1)(100 - 1) = 1,000,000 - 1 - 297,000 = 970,299.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '970,299', isCorrect: true },
        { optionLabel: 'B', optionText: '970,199', isCorrect: false },
        { optionLabel: 'C', optionText: '960,299', isCorrect: false },
        { optionLabel: 'D', optionText: '980,299', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH2-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'Which of the following is a binomial of degree 35?',
      explanation: 'A binomial has 2 terms. Degree 35 means highest power of x is 35. Example: x³⁵ + 3.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'x³⁵ + 3', isCorrect: true },
        { optionLabel: 'B', optionText: '35x³⁵', isCorrect: false },
        { optionLabel: 'C', optionText: 'x³⁵ + x² + 1', isCorrect: false },
        { optionLabel: 'D', optionText: 'x³5', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH2-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Expand: (x + 2y + 4z)².',
      explanation: '(a+b+c)² = a²+b²+c²+2ab+2bc+2ca = x² + 4y² + 16z² + 4xy + 16yz + 8zx.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'x² + 4y² + 16z² + 4xy + 16yz + 8zx', isCorrect: true },
        { optionLabel: 'B', optionText: 'x² + 2y² + 4z² + 4xy + 8yz + 4zx', isCorrect: false },
        { optionLabel: 'C', optionText: 'x² + 4y² + 16z²', isCorrect: false },
        { optionLabel: 'D', optionText: 'x² + 4y² + 8z² + 4xy + 16yz + 8zx', isCorrect: false },
      ],
    },
  ],
};
