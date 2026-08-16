export const ch4QuadraticEquationsClass10Data = {
  classNumber: 10,
  className: 'Class 10',
  subjectName: 'Mathematics',
  subjectCode: 'MATH10',
  chapterNumber: 4,
  chapterTitle: 'Quadratic Equations',
  summary: 'Standard form ax² + bx + c = 0, solution by factorisation, quadratic formula x = (-b ± √D)/2a, Discriminant D = b² - 4ac, nature of roots.',
  contentMarkdown: `# Chapter 4: Quadratic Equations (Class 10 Mathematics NEP 2025)

## 1. Quadratic Formula
For $ax^2 + bx + c = 0$ ($a \\neq 0$):
$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

## 2. Discriminant & Nature of Roots
Discriminant $D = b^2 - 4ac$:
1. $D > 0 \\implies$ Two **distinct real roots**.
2. $D = 0 \\implies$ Two **equal real roots** ($x = -b / 2a$).
3. $D < 0 \\implies$ **No real roots** (imaginary/complex roots).
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Quadratic Equations',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'nature-roots',
          label: 'Discriminant D = b² - 4ac',
          type: 'category',
          children: [
            { id: 'd-gt-0', label: 'D > 0: Two distinct real roots', type: 'concept' },
            { id: 'd-eq-0', label: 'D = 0: Two equal real roots', type: 'concept' },
            { id: 'd-lt-0', label: 'D < 0: No real roots', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C10-MATH-CH4-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'What is the Discriminant D of the quadratic equation 2x² - 4x + 3 = 0?',
      explanation: 'D = b² - 4ac = (-4)² - 4(2)(3) = 16 - 24 = -8.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '-8 (No real roots)', isCorrect: true },
        { optionLabel: 'B', optionText: '8', isCorrect: false },
        { optionLabel: 'C', optionText: '-16', isCorrect: false },
        { optionLabel: 'D', optionText: '0', isCorrect: false },
      ],
    },
    {
      questionCode: 'C10-MATH-CH4-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the roots of the quadratic equation x² - 3x - 10 = 0 by factorisation.',
      explanation: 'x² - 5x + 2x - 10 = 0 => (x - 5)(x + 2) = 0 => x = 5, -2.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'x = 5, -2', isCorrect: true },
        { optionLabel: 'B', optionText: 'x = -5, 2', isCorrect: false },
        { optionLabel: 'C', optionText: 'x = 3, 10', isCorrect: false },
        { optionLabel: 'D', optionText: 'x = -3, -10', isCorrect: false },
      ],
    },
    {
      questionCode: 'C10-MATH-CH4-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the value of k for which the quadratic equation 2x² + kx + 3 = 0 has TWO EQUAL REAL ROOTS.',
      explanation: 'Equal roots => D = 0 => b² - 4ac = 0 => k² - 4(2)(3) = 0 => k² - 24 = 0 => k = ±√24 = ±2√6.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'k = ±2√6', isCorrect: true },
        { optionLabel: 'B', optionText: 'k = ±6', isCorrect: false },
        { optionLabel: 'C', optionText: 'k = ±4', isCorrect: false },
        { optionLabel: 'D', optionText: 'k = 24', isCorrect: false },
      ],
    },
    {
      questionCode: 'C10-MATH-CH4-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'The altitude of a right triangle is 7 cm less than its base. If the hypotenuse is 13 cm, find the base.',
      explanation: 'Let base = x. Altitude = x - 7. x² + (x - 7)² = 13² => 2x² - 14x + 49 = 169 => 2x² - 14x - 120 = 0 => x² - 7x - 60 = 0 => (x - 12)(x + 5) = 0 => Base = 12 cm.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '12 cm', isCorrect: true },
        { optionLabel: 'B', optionText: '5 cm', isCorrect: false },
        { optionLabel: 'C', optionText: '15 cm', isCorrect: false },
        { optionLabel: 'D', optionText: '9 cm', isCorrect: false },
      ],
    },
    {
      questionCode: 'C10-MATH-CH4-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [CBSE Board/Olympiad] Solve for x: (1 / (x + 4)) - (1 / (x - 7)) = 11 / 30 (x ≠ -4, 7).',
      explanation: '((x - 7) - (x + 4)) / ((x + 4)(x - 7)) = 11 / 30 => -11 / (x² - 3x - 28) = 11 / 30 => x² - 3x - 28 = -30 => x² - 3x + 2 = 0 => (x - 1)(x - 2) = 0 => x = 1, 2.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'x = 1, 2', isCorrect: true },
        { optionLabel: 'B', optionText: 'x = -1, -2', isCorrect: false },
        { optionLabel: 'C', optionText: 'x = 3, 4', isCorrect: false },
        { optionLabel: 'D', optionText: 'x = -4, 7', isCorrect: false },
      ],
    },
    {
      questionCode: 'C10-MATH-CH4-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] A motor boat whose speed is 18 km/h in still water takes 1 hour more to go 24 km upstream than to return downstream to the same spot. Find speed of stream.',
      explanation: '24/(18 - x) - 24/(18 + x) = 1 => 24(2x) / (324 - x²) = 1 => 48x = 324 - x² => x² + 48x - 324 = 0 => (x + 54)(x - 6) = 0 => Stream speed = 6 km/h.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '6 km/h', isCorrect: true },
        { optionLabel: 'B', optionText: '8 km/h', isCorrect: false },
        { optionLabel: 'C', optionText: '4 km/h', isCorrect: false },
        { optionLabel: 'D', optionText: '12 km/h', isCorrect: false },
      ],
    },
    {
      questionCode: 'C10-MATH-CH4-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'If D < 0 for a quadratic equation ax² + bx + c = 0, then the roots are:',
      explanation: 'When D < 0, square root of negative number is not real, so there are NO REAL ROOTS.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'No real roots', isCorrect: true },
        { optionLabel: 'B', optionText: 'Two distinct real roots', isCorrect: false },
        { optionLabel: 'C', optionText: 'Two equal real roots', isCorrect: false },
        { optionLabel: 'D', optionText: 'One real and one imaginary root', isCorrect: false },
      ],
    },
    {
      questionCode: 'C10-MATH-CH4-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the roots of 2x² - x + 1/8 = 0.',
      explanation: '16x² - 8x + 1 = 0 => (4x - 1)² = 0 => x = 1/4, 1/4.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '1/4, 1/4', isCorrect: true },
        { optionLabel: 'B', optionText: '1/2, 1/2', isCorrect: false },
        { optionLabel: 'C', optionText: '1/8, 1/8', isCorrect: false },
        { optionLabel: 'D', optionText: '-1/4, -1/4', isCorrect: false },
      ],
    },
  ],
};
