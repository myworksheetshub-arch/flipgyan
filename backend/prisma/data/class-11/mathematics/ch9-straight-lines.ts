export const ch9StraightLinesClass11Data = {
  classNumber: 11,
  className: 'Class 11',
  subjectName: 'Mathematics',
  subjectCode: 'MATH11',
  chapterNumber: 9,
  chapterTitle: 'Straight Lines',
  summary: 'Slope of a line m = tan θ = (y2-y1)/(x2-x1), Forms of equation of a line (Point-Slope, Two-Point, Slope-Intercept y = mx + c, Intercept x/a + y/b = 1), Perpendicular distance from a point to a line d = |ax1 + by1 + c| / √(a² + b²).',
  contentMarkdown: `# Chapter 9: Straight Lines (Class 11 Mathematics NEP 2025)

## 1. Forms of Line Equations
1. **Slope-Intercept Form**: $y = mx + c$
2. **Point-Slope Form**: $y - y_1 = m(x - x_1)$
3. **Two-Point Form**: $y - y_1 = \\frac{y_2 - y_1}{x_2 - x_1} (x - x_1)$
4. **Intercept Form**: $\\frac{x}{a} + \\frac{y}{b} = 1$

## 2. Perpendicular Distance
Distance of point $(x_1, y_1)$ from line $Ax + By + C = 0$:
$$d = \\frac{|A x_1 + B y_1 + C|}{\\sqrt{A^2 + B^2}}$$
- Distance between parallel lines $Ax + By + C_1 = 0$ and $Ax + By + C_2 = 0$:
  $$d = \\frac{|C_1 - C_2|}{\\sqrt{A^2 + B^2}}$$
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Straight Lines',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'line-forms',
          label: 'Line Equations & Distance',
          type: 'category',
          children: [
            { id: 'dist-point-line', label: 'd = |Ax1 + By1 + C| / √(A² + B²)', type: 'concept' },
            { id: 'parallel-dist', label: 'd = |C1 - C2| / √(A² + B²)', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C11-MATH-CH9-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'What is the slope m of a line making an angle of 135° with the positive X-axis?',
      explanation: 'Slope m = tan 135° = tan(180° - 45°) = -tan 45° = -1.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '-1', isCorrect: true },
        { optionLabel: 'B', optionText: '1', isCorrect: false },
        { optionLabel: 'C', optionText: '√3', isCorrect: false },
        { optionLabel: 'D', optionText: '-√3', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH9-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the equation of a line passing through (2, 3) with slope m = 4.',
      explanation: 'Point-slope form: y - 3 = 4(x - 2) => y - 3 = 4x - 8 => 4x - y - 5 = 0.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '4x - y - 5 = 0', isCorrect: true },
        { optionLabel: 'B', optionText: '4x + y - 5 = 0', isCorrect: false },
        { optionLabel: 'C', optionText: 'x - 4y + 10 = 0', isCorrect: false },
        { optionLabel: 'D', optionText: '4x - y + 5 = 0', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH9-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the perpendicular distance of the point P(3, -5) from the line 3x - 4y - 26 = 0.',
      explanation: 'd = |3(3) - 4(-5) - 26| / √(3² + (-4)²) = |9 + 20 - 26| / 5 = |3| / 5 = 3/5 units.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '3/5 units (0.6)', isCorrect: true },
        { optionLabel: 'B', optionText: '1 unit', isCorrect: false },
        { optionLabel: 'C', optionText: '5/3 units', isCorrect: false },
        { optionLabel: 'D', optionText: '3 units', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH9-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'Find the distance between parallel lines 15x + 8y - 34 = 0 and 15x + 8y + 31 = 0.',
      explanation: 'd = |C₁ - C₂| / √(A² + B²) = |-34 - 31| / √(15² + 8²) = |-65| / √(225 + 64) = 65 / 17 units.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '65 / 17 units', isCorrect: true },
        { optionLabel: 'B', optionText: '3 units', isCorrect: false },
        { optionLabel: 'C', optionText: '65 / 23 units', isCorrect: false },
        { optionLabel: 'D', optionText: '34 / 17 units', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH9-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [JEE Main / Olympiad] Find the equation of the line passing through the intersection of lines x - 7y + 5 = 0 and 3x + 1y - 7 = 0 and PERPENDICULAR to the line 7x - 1y + 2 = 0.',
      explanation: 'Intersection point is (1, 4). Perpendicular slope to (7x - y + 2 = 0, m=7) is m\' = -1/7. Line: y - 4 = (-1/7)(x - 1) => 7y - 28 = -x + 1 => x + 7y - 29 = 0.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'x + 7y - 29 = 0', isCorrect: true },
        { optionLabel: 'B', optionText: '7x - y - 3 = 0', isCorrect: false },
        { optionLabel: 'C', optionText: 'x - 7y + 27 = 0', isCorrect: false },
        { optionLabel: 'D', optionText: '7x + y - 11 = 0', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH9-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] Find the coordinates of the foot of perpendicular from the point (-1, 3) to the line 3x - 4y - 16 = 0.',
      explanation: 'Foot of perpendicular (h, k) satisfies: (h - x1)/A = (k - y1)/B = -(Ax1 + By1 + C)/(A² + B²). (h + 1)/3 = (k - 3)/(-4) = -(-3 - 12 - 16)/25 = 31/25. h = 68/25, k = -49/25.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '(68/25, -49/25)', isCorrect: true },
        { optionLabel: 'B', optionText: '(3, -4)', isCorrect: false },
        { optionLabel: 'C', optionText: '(2, -5)', isCorrect: false },
        { optionLabel: 'D', optionText: '(-68/25, 49/25)', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH9-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'If two lines with slopes m₁ and m₂ are perpendicular to each other, then:',
      explanation: 'Product of slopes of perpendicular lines is -1: m₁ × m₂ = -1.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'm₁ × m₂ = -1', isCorrect: true },
        { optionLabel: 'B', optionText: 'm₁ = m₂', isCorrect: false },
        { optionLabel: 'C', optionText: 'm₁ + m₂ = 0', isCorrect: false },
        { optionLabel: 'D', optionText: 'm₁ × m₂ = 1', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH9-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the angle between the lines y - √3 x - 5 = 0 and √3 y - x + 6 = 0.',
      explanation: 'm₁ = √3 (θ₁ = 60°), m₂ = 1/√3 (θ₂ = 30°). Angle between lines = 60° - 30° = 30°.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '30°', isCorrect: true },
        { optionLabel: 'B', optionText: '60°', isCorrect: false },
        { optionLabel: 'C', optionText: '45°', isCorrect: false },
        { optionLabel: 'D', optionText: '90°', isCorrect: false },
      ],
    },
  ],
};
