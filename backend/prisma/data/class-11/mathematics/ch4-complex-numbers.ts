export const ch4ComplexNumbersClass11Data = {
  classNumber: 11,
  className: 'Class 11',
  subjectName: 'Mathematics',
  subjectCode: 'MATH11',
  chapterNumber: 4,
  chapterTitle: 'Complex Numbers and Quadratic Equations',
  summary: 'Imaginary unit i = √(-1), Complex number z = a + ib, Argand plane, Modulus |z| = √(a² + b²), Conjugate z̄ = a - ib, Quadratic equations with negative discriminant.',
  contentMarkdown: `# Chapter 4: Complex Numbers (Class 11 Mathematics NEP 2025)

## 1. Complex Numbers Basics
- $i = \\sqrt{-1}, \\quad i^2 = -1, \\quad i^3 = -i, \\quad i^4 = 1$
- For $z = a + ib$:
  - **Modulus**: $|z| = \\sqrt{a^2 + b^2}$
  - **Conjugate**: $\\bar{z} = a - ib$
  - **Multiplicative Inverse**: $z^{-1} = \\frac{\\bar{z}}{|z|^2}$

## 2. Quadratic Equations with $D < 0$
For $ax^2 + bx + c = 0$ with $D = b^2 - 4ac < 0$:
$$x = \\frac{-b \\pm i\\sqrt{4ac - b^2}}{2a}$$
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Complex Numbers',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'z-mod-conj',
          label: 'Modulus & Conjugate',
          type: 'category',
          children: [
            { id: 'mod', label: '|z| = √(a² + b²)', type: 'concept' },
            { id: 'conj', label: 'z̄ = a - ib', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C11-MATH-CH4-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'Evaluate the power of i: i¹⁹.',
      explanation: 'i¹⁹ = i⁴ˣ⁴⁺³ = (i⁴)⁴ × i³ = 1⁴ × (-i) = -i.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '-i', isCorrect: true },
        { optionLabel: 'B', optionText: 'i', isCorrect: false },
        { optionLabel: 'C', optionText: '1', isCorrect: false },
        { optionLabel: 'D', optionText: '-1', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH4-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the modulus of the complex number z = 3 - 4i.',
      explanation: '|z| = √(3² + (-4)²) = √(9 + 16) = √25 = 5.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '5', isCorrect: true },
        { optionLabel: 'B', optionText: '7', isCorrect: false },
        { optionLabel: 'C', optionText: '25', isCorrect: false },
        { optionLabel: 'D', optionText: '1', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH4-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Express (1 + i) / (1 - i) in the standard form a + ib.',
      explanation: '(1 + i)² / ((1 - i)(1 + i)) = (1 + 2i - 1) / (1 - (-1)) = 2i / 2 = i = 0 + 1i.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '0 + 1i (i)', isCorrect: true },
        { optionLabel: 'B', optionText: '0 - 1i (-i)', isCorrect: false },
        { optionLabel: 'C', optionText: '1 + 0i (1)', isCorrect: false },
        { optionLabel: 'D', optionText: '-1 + 0i (-1)', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH4-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'Solve the quadratic equation x² + x + 1 = 0 over complex numbers.',
      explanation: 'D = 1² - 4(1)(1) = -3. x = (-1 ± √(-3)) / 2 = (-1 ± i√3) / 2.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '(-1 ± i√3) / 2', isCorrect: true },
        { optionLabel: 'B', optionText: '(1 ± i√3) / 2', isCorrect: false },
        { optionLabel: 'C', optionText: '(-1 ± √3) / 2', isCorrect: false },
        { optionLabel: 'D', optionText: '-1 ± 2i', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH4-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [JEE Main / Olympiad] If ((1 + i) / (1 - i))ᵐ = 1, find the least positive integer value of m.',
      explanation: '(1 + i)/(1 - i) = i. iᵐ = 1. The least positive integer m such that iᵐ = 1 is m = 4.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '4', isCorrect: true },
        { optionLabel: 'B', optionText: '2', isCorrect: false },
        { optionLabel: 'C', optionText: '8', isCorrect: false },
        { optionLabel: 'D', optionText: '1', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH4-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] If |z + 4| ≤ 3, then the maximum value of |z + 1| is:',
      explanation: '|z + 1| = |(z + 4) - 3| ≤ |z + 4| + |-3| ≤ 3 + 3 = 6.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '6', isCorrect: true },
        { optionLabel: 'B', optionText: '4', isCorrect: false },
        { optionLabel: 'C', optionText: '10', isCorrect: false },
        { optionLabel: 'D', optionText: '3', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH4-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'Find the multiplicative inverse of z = 4 - 3i.',
      explanation: 'z⁻¹ = z̄ / |z|² = (4 + 3i) / (16 + 9) = (4 + 3i) / 25 = 4/25 + (3/25)i.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '4/25 + (3/25)i', isCorrect: true },
        { optionLabel: 'B', optionText: '4/25 - (3/25)i', isCorrect: false },
        { optionLabel: 'C', optionText: '4 + 3i', isCorrect: false },
        { optionLabel: 'D', optionText: '-4 + 3i', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH4-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the value of x and y if (x + iy)(2 - 3i) = 4 + i.',
      explanation: '(2x + 3y) + i(2y - 3x) = 4 + i => 2x + 3y = 4 and 2y - 3x = 1. Solving gives x = 5/13, y = 14/13.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'x = 5/13, y = 14/13', isCorrect: true },
        { optionLabel: 'B', optionText: 'x = 14/13, y = 5/13', isCorrect: false },
        { optionLabel: 'C', optionText: 'x = 1, y = 2', isCorrect: false },
        { optionLabel: 'D', optionText: 'x = 2, y = -1', isCorrect: false },
      ],
    },
  ],
};
