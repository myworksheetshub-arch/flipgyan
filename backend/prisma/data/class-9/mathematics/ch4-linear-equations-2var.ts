export const ch4LinearEquations2VarClass9Data = {
  classNumber: 9,
  className: 'Class 9',
  subjectName: 'Mathematics',
  subjectCode: 'MATH9',
  chapterNumber: 4,
  chapterTitle: 'Linear Equations in Two Variables',
  summary: 'Linear equations of form ax + by + c = 0, infinitely many solutions for a linear equation in 2 variables, plotting graphs of linear equations, lines parallel to x-axis and y-axis.',
  contentMarkdown: `# Chapter 4: Linear Equations in Two Variables (Class 9 Mathematics NEP 2025)

## 1. General Form
An equation of the form $ax + by + c = 0$, where $a, b, c$ are real numbers and $a, b \\neq 0$.
- A linear equation in two variables has **infinitely many solutions**!

## 2. Special Line Equations
- Equation of X-axis: $y = 0$
- Equation of Y-axis: $x = 0$
- Line parallel to X-axis: $y = k$
- Line parallel to Y-axis: $x = k$
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Linear Eqns in 2 Variables',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'solutions',
          label: 'Infinitely Many Solutions',
          type: 'category',
          children: [
            { id: 'gen-form', label: 'ax + by + c = 0', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C9-MATH-CH4-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'How many solutions does a linear equation in two variables have?',
      explanation: 'A linear equation in two variables ax + by + c = 0 represents a straight line and has Infinitely Many Solutions.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Infinitely many solutions', isCorrect: true },
        { optionLabel: 'B', optionText: 'Unique solution', isCorrect: false },
        { optionLabel: 'C', optionText: 'Two solutions', isCorrect: false },
        { optionLabel: 'D', optionText: 'No solution', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH4-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Express 2x + 3y = 4.37 in standard form ax + by + c = 0 and write the value of c.',
      explanation: '2x + 3y - 4.37 = 0. Comparing with ax + by + c = 0 gives c = -4.37.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'c = -4.37', isCorrect: true },
        { optionLabel: 'B', optionText: 'c = 4.37', isCorrect: false },
        { optionLabel: 'C', optionText: 'c = 2', isCorrect: false },
        { optionLabel: 'D', optionText: 'c = 3', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH4-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the value of k if x = 2, y = 1 is a solution of the equation 2x + 3y = k.',
      explanation: '2(2) + 3(1) = k => 4 + 3 = k => k = 7.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'k = 7', isCorrect: true },
        { optionLabel: 'B', optionText: 'k = 5', isCorrect: false },
        { optionLabel: 'C', optionText: 'k = 6', isCorrect: false },
        { optionLabel: 'D', optionText: 'k = 8', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH4-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'The cost of a notebook is twice the cost of a pen. Write a linear equation in two variables to represent this statement.',
      explanation: 'Let notebook cost = x, pen cost = y. Statement: x = 2y => x - 2y = 0.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'x - 2y = 0', isCorrect: true },
        { optionLabel: 'B', optionText: '2x - y = 0', isCorrect: false },
        { optionLabel: 'C', optionText: 'x + 2y = 0', isCorrect: false },
        { optionLabel: 'D', optionText: 'x - y = 2', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH4-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [CBSE Olympiad] The graph of the linear equation 2x + 3y = 6 cuts the X-axis at which point?',
      explanation: 'On the X-axis, y = 0. Substituting y = 0 into 2x + 3(0) = 6 => 2x = 6 => x = 3. Point is (3, 0).',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '(3, 0)', isCorrect: true },
        { optionLabel: 'B', optionText: '(0, 2)', isCorrect: false },
        { optionLabel: 'C', optionText: '(2, 3)', isCorrect: false },
        { optionLabel: 'D', optionText: '(0, 3)', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH4-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] Any point on the line y = x is of the form:',
      explanation: 'Since y = x, both coordinates must be equal, so any point is of the form (a, a).',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '(a, a)', isCorrect: true },
        { optionLabel: 'B', optionText: '(a, -a)', isCorrect: false },
        { optionLabel: 'C', optionText: '(0, a)', isCorrect: false },
        { optionLabel: 'D', optionText: '(a, 0)', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH4-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'The equation of the Y-axis is:',
      explanation: 'On the Y-axis, the x-coordinate of every point is zero, so its equation is x = 0.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'x = 0', isCorrect: true },
        { optionLabel: 'B', optionText: 'y = 0', isCorrect: false },
        { optionLabel: 'C', optionText: 'x = 1', isCorrect: false },
        { optionLabel: 'D', optionText: 'x + y = 0', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH4-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'If (3, 4) lies on the graph of 3y = ax + 7, find the value of a.',
      explanation: '3(4) = a(3) + 7 => 12 = 3a + 7 => 3a = 5 => a = 5/3.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '5/3', isCorrect: true },
        { optionLabel: 'B', optionText: '3/5', isCorrect: false },
        { optionLabel: 'C', optionText: '19/3', isCorrect: false },
        { optionLabel: 'D', optionText: '5', isCorrect: false },
      ],
    },
  ],
};
