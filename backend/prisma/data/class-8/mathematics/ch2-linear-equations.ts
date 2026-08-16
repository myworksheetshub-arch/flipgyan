export const ch2LinearEquationsClass8Data = {
  classNumber: 8,
  className: 'Class 8',
  subjectName: 'Mathematics',
  subjectCode: 'MATH8',
  chapterNumber: 2,
  chapterTitle: 'Linear Equations in One Variable',
  summary: 'Solving algebraic equations with linear expressions on one side and numbers/variable on the other side, transposition method, word problems (age, perimeter, digit problems).',
  contentMarkdown: `# Chapter 2: Linear Equations in One Variable (Class 8 Mathematics NEP 2025)

## 1. Linear Equations
An algebraic equation where the highest power of the variable is **1**.
- Example: $2x - 3 = 7 \\implies 2x = 10 \\implies x = 5$.

## 2. Transposition Method
When a term moves from LHS to RHS (or vice versa):
- $+$ becomes $-$
- $-$ becomes $+$
- $\\times$ becomes $\\div$
- $\\div$ becomes $\\times$
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Linear Equations',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'transposition',
          label: 'Transposition Rules',
          type: 'category',
          children: [
            { id: 'sign-change', label: '+ turns -, × turns ÷', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C8-MATH-CH2-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Solve for x: 3x - 5 = 16.',
      explanation: '3x = 16 + 5 = 21. x = 21 / 3 = 7.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'x = 7', isCorrect: true },
        { optionLabel: 'B', optionText: 'x = 5', isCorrect: false },
        { optionLabel: 'C', optionText: 'x = 21', isCorrect: false },
        { optionLabel: 'D', optionText: 'x = 3', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH2-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Solve for y: 2y + 9 = 4.',
      explanation: '2y = 4 - 9 = -5. y = -5/2.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'y = -5/2', isCorrect: true },
        { optionLabel: 'B', optionText: 'y = 5/2', isCorrect: false },
        { optionLabel: 'C', optionText: 'y = -13/2', isCorrect: false },
        { optionLabel: 'D', optionText: 'y = -2/5', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH2-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'Solve: 5x + 7/2 = (3/2)x - 14.',
      explanation: '5x - (3/2)x = -14 - 7/2 => (7/2)x = -35/2 => 7x = -35 => x = -5.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'x = -5', isCorrect: true },
        { optionLabel: 'B', optionText: 'x = 5', isCorrect: false },
        { optionLabel: 'C', optionText: 'x = -7', isCorrect: false },
        { optionLabel: 'D', optionText: 'x = -35', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH2-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'LOGICAL_REASONING',
      questionText: 'The perimeter of a rectangle is 13 cm and its width is 2 ¾ cm. Find its length.',
      explanation: '2(Length + 11/4) = 13 => Length + 11/4 = 13/2 = 26/4 => Length = 15/4 = 3 ¾ cm.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '3 ¾ cm (15/4 cm)', isCorrect: true },
        { optionLabel: 'B', optionText: '2 ½ cm', isCorrect: false },
        { optionLabel: 'C', optionText: '4 ¼ cm', isCorrect: false },
        { optionLabel: 'D', optionText: '5 cm', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH2-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [CBSE Olympiad] A number consists of two digits whose sum is 9. If 27 is added to the number, the digits are reversed. What is the original number?',
      explanation: 'Let tens digit = x, units = 9 - x. Number = 10x + (9-x) = 9x + 9. Reversed = 10(9-x) + x = 90 - 9x. Equation: 9x + 9 + 27 = 90 - 9x => 18x = 54 => x = 3. Units digit = 6. Original number = 36.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '36', isCorrect: true },
        { optionLabel: 'B', optionText: '63', isCorrect: false },
        { optionLabel: 'C', optionText: '27', isCorrect: false },
        { optionLabel: 'D', optionText: '45', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH2-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS Age Problem] Hari and Harry’s present ages are in the ratio 5:7. Four years from now, the ratio of their ages will be 3:4. Find Hari’s present age.',
      explanation: 'Let ages be 5x and 7x. In 4 years: (5x + 4)/(7x + 4) = 3/4 => 4(5x + 4) = 3(7x + 4) => 20x + 16 = 21x + 12 => x = 4. Hari’s age = 5(4) = 20 years.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '20 years', isCorrect: true },
        { optionLabel: 'B', optionText: '28 years', isCorrect: false },
        { optionLabel: 'C', optionText: '15 years', isCorrect: false },
        { optionLabel: 'D', optionText: '24 years', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH2-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'What is the degree of a linear equation in one variable?',
      explanation: 'By definition, a linear equation has a variable raised to the highest exponent/degree of 1.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '1', isCorrect: true },
        { optionLabel: 'B', optionText: '2', isCorrect: false },
        { optionLabel: 'C', optionText: '0', isCorrect: false },
        { optionLabel: 'D', optionText: '3', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH2-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Solve for z: (z / 2.5) = 1.6.',
      explanation: 'z = 1.6 × 2.5 = 4.0.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'z = 4.0', isCorrect: true },
        { optionLabel: 'B', optionText: 'z = 3.2', isCorrect: false },
        { optionLabel: 'C', optionText: 'z = 4.1', isCorrect: false },
        { optionLabel: 'D', optionText: 'z = 2.5', isCorrect: false },
      ],
    },
  ],
};
