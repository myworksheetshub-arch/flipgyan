export const ch5LinearInequalitiesClass11Data = {
  classNumber: 11,
  className: 'Class 11',
  subjectName: 'Mathematics',
  subjectCode: 'MATH11',
  chapterNumber: 5,
  chapterTitle: 'Linear Inequalities',
  summary: 'Linear inequalities in one and two variables, algebraic solution, graphical solution, system of linear inequalities.',
  contentMarkdown: `# Chapter 5: Linear Inequalities (Class 11 Mathematics NEP 2025)

## 1. Rules of Inequalities
1. Equal numbers can be added/subtracted to both sides.
2. Both sides can be multiplied/divided by a **positive number**.
3. Multiplying or dividing by a **negative number FLIPS the inequality sign**:
   $$-2x > 6 \\implies x < -3$$

## 2. Graphical Solution
Half-plane representation on Cartesian plane:
- Solid line for $\\le$ or $\\ge$
- Dotted line for $<$ or $>$
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Linear Inequalities',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'ineq-rules',
          label: 'Inequality Rules',
          type: 'category',
          children: [
            { id: 'neg-flip', label: 'Multiply by negative flips sign (< to >)', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C11-MATH-CH5-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Solve the inequality 30x < 200 for natural numbers x ∈ N.',
      explanation: 'x < 200 / 30 => x < 6.66. For natural numbers N: {1, 2, 3, 4, 5, 6}.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '{1, 2, 3, 4, 5, 6}', isCorrect: true },
        { optionLabel: 'B', optionText: '{1, 2, 3, 4, 5, 6, 7}', isCorrect: false },
        { optionLabel: 'C', optionText: '{0, 1, 2, 3, 4, 5, 6}', isCorrect: false },
        { optionLabel: 'D', optionText: '(-∞, 6.66)', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH5-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Solve 3(x - 1) ≤ 2(x - 3) for real x.',
      explanation: '3x - 3 ≤ 2x - 6 => 3x - 2x ≤ -6 + 3 => x ≤ -3. Solution interval is (-∞, -3].',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '(-∞, -3]', isCorrect: true },
        { optionLabel: 'B', optionText: '[-3, ∞)', isCorrect: false },
        { optionLabel: 'C', optionText: '(-∞, 3]', isCorrect: false },
        { optionLabel: 'D', optionText: '[3, ∞)', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH5-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'Solve: (3(x - 2) / 5) ≤ (5(2 - x) / 3).',
      explanation: 'Multiply by 15: 9(x - 2) ≤ 25(2 - x) => 9x - 18 ≤ 50 - 25x => 34x ≤ 68 => x ≤ 2. Solution: (-∞, 2].',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '(-∞, 2]', isCorrect: true },
        { optionLabel: 'B', optionText: '[2, ∞)', isCorrect: false },
        { optionLabel: 'C', optionText: '(-∞, -2]', isCorrect: false },
        { optionLabel: 'D', optionText: '[0, 2]', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH5-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'Ravi obtained 70 and 75 marks in first two unit test. Find the minimum marks he should get in third test to have an average of at least 60 marks.',
      explanation: '(70 + 75 + x) / 3 ≥ 60 => 145 + x ≥ 180 => x ≥ 35 marks.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '35 marks', isCorrect: true },
        { optionLabel: 'B', optionText: '40 marks', isCorrect: false },
        { optionLabel: 'C', optionText: '30 marks', isCorrect: false },
        { optionLabel: 'D', optionText: '45 marks', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH5-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [JEE Main / Olympiad] Solve the system of linear inequalities: 2(2x + 3) - 10 < 6(x - 2) and (2x - 3) / 4 + 6 ≥ 2 + (4x / 3).',
      explanation: '1st: 4x - 4 < 6x - 12 => 2x > 8 => x > 4. 2nd: (2x - 3)/4 + 4 ≥ 4x/3 => (2x + 13)/4 ≥ 4x/3 => 6x + 39 ≥ 16x => 10x ≤ 39 => x ≤ 3.9. Since x > 4 and x ≤ 3.9 conflict, NO SOLUTION.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'No solution (Empty set Ø)', isCorrect: true },
        { optionLabel: 'B', optionText: '(4, 3.9)', isCorrect: false },
        { optionLabel: 'C', optionText: '(-∞, 4)', isCorrect: false },
        { optionLabel: 'D', optionText: 'x ∈ R', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH5-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] A solution of 8% boric acid is to be diluted by adding a 2% boric acid solution. The resulting mixture must be more than 4% but less than 6% boric acid. If we have 640 L of 8% solution, how many liters of 2% solution must be added?',
      explanation: 'Let x L of 2% solution be added. 0.04(640 + x) < 640(0.08) + 0.02x < 0.06(640 + x). Solving gives 320 < x < 1280 liters.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Between 320 L and 1280 L', isCorrect: true },
        { optionLabel: 'B', optionText: 'Between 200 L and 800 L', isCorrect: false },
        { optionLabel: 'C', optionText: 'More than 1280 L', isCorrect: false },
        { optionLabel: 'D', optionText: 'Less than 320 L', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH5-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'If -x > 5, then:',
      explanation: 'Multiplying by -1 flips the inequality sign: x < -5.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'x < -5', isCorrect: true },
        { optionLabel: 'B', optionText: 'x > -5', isCorrect: false },
        { optionLabel: 'C', optionText: 'x < 5', isCorrect: false },
        { optionLabel: 'D', optionText: 'x > 5', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH5-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find all pairs of consecutive odd positive integers, both of which are smaller than 10, such that their sum is more than 11.',
      explanation: 'Odd integers x, x+2 < 10 => x < 8. x + (x + 2) > 11 => 2x > 9 => x > 4.5. Odd x: 5, 7. Pairs: (5, 7) and (7, 9).',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '(5, 7) and (7, 9)', isCorrect: true },
        { optionLabel: 'B', optionText: '(3, 5) and (5, 7)', isCorrect: false },
        { optionLabel: 'C', optionText: '(5, 7) only', isCorrect: false },
        { optionLabel: 'D', optionText: '(7, 9) only', isCorrect: false },
      ],
    },
  ],
};
