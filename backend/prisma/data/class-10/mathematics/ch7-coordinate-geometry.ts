export const ch7CoordinateGeometryClass10Data = {
  classNumber: 10,
  className: 'Class 10',
  subjectName: 'Mathematics',
  subjectCode: 'MATH10',
  chapterNumber: 7,
  chapterTitle: 'Coordinate Geometry',
  summary: 'Distance Formula d = √((x2-x1)² + (y2-y1)²), Section Formula ((m1x2 + m2x1)/(m1+m2), (m1y2 + m2y1)/(m1+m2)), Midpoint Formula.',
  contentMarkdown: `# Chapter 7: Coordinate Geometry (Class 10 Mathematics NEP 2025)

## 1. Distance Formula
Distance between $P(x_1, y_1)$ and $Q(x_2, y_2)$:
$$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$
- Distance from Origin $(0, 0)$ to $(x, y) = \\sqrt{x^2 + y^2}$.

## 2. Section Formula
Coordinates of point $P(x, y)$ dividing segment joining $A(x_1, y_1)$ and $B(x_2, y_2)$ in ratio $m_1 : m_2$:
$$P(x, y) = \\left( \\frac{m_1 x_2 + m_2 x_1}{m_1 + m_2}, \\frac{m_1 y_2 + m_2 y_1}{m_1 + m_2} \\right)$$
- **Midpoint Formula** ($1:1$ ratio):
  $$\\text{Midpoint} = \\left( \\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2} \\right)$$
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Coordinate Geometry',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'formulas',
          label: 'Distance & Section Formulas',
          type: 'category',
          children: [
            { id: 'dist-f', label: 'd = √((x2-x1)² + (y2-y1)²)', type: 'concept' },
            { id: 'sec-f', label: 'P(x, y) = ((m1x2 + m2x1)/(m1+m2), ...)', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C10-MATH-CH7-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the distance between the points (2, 3) and (4, 1).',
      explanation: 'd = √((4 - 2)² + (1 - 3)²) = √(2² + (-2)²) = √(4 + 4) = √8 = 2√2 units.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '2√2 units', isCorrect: true },
        { optionLabel: 'B', optionText: '4 units', isCorrect: false },
        { optionLabel: 'C', optionText: '2 units', isCorrect: false },
        { optionLabel: 'D', optionText: '8 units', isCorrect: false },
      ],
    },
    {
      questionCode: 'C10-MATH-CH7-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the midpoint of the line segment joining the points A(-5, 7) and B(-1, 3).',
      explanation: 'Midpoint = ((-5 + -1)/2, (7 + 3)/2) = (-6/2, 10/2) = (-3, 5).',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '(-3, 5)', isCorrect: true },
        { optionLabel: 'B', optionText: '(3, 5)', isCorrect: false },
        { optionLabel: 'C', optionText: '(-3, -5)', isCorrect: false },
        { optionLabel: 'D', optionText: '(-2, 5)', isCorrect: false },
      ],
    },
    {
      questionCode: 'C10-MATH-CH7-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'In what ratio does the Y-axis divide the line segment joining the points A(5, -6) and B(-1, -4)?',
      explanation: 'On Y-axis, x = 0. Let ratio be k:1. x = (k(-1) + 1(5))/(k + 1) = 0 => -k + 5 = 0 => k = 5. Ratio is 5 : 1.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '5 : 1', isCorrect: true },
        { optionLabel: 'B', optionText: '1 : 5', isCorrect: false },
        { optionLabel: 'C', optionText: '2 : 3', isCorrect: false },
        { optionLabel: 'D', optionText: '5 : 2', isCorrect: false },
      ],
    },
    {
      questionCode: 'C10-MATH-CH7-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the coordinates of a point P which divides the line segment joining A(4, -3) and B(8, 5) internally in ratio 3 : 1.',
      explanation: 'P(x, y) = ((3(8) + 1(4))/4, (3(5) + 1(-3))/4) = ((24 + 4)/4, (15 - 3)/4) = (28/4, 12/4) = (7, 3).',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '(7, 3)', isCorrect: true },
        { optionLabel: 'B', optionText: '(3, 7)', isCorrect: false },
        { optionLabel: 'C', optionText: '(6, 2)', isCorrect: false },
        { optionLabel: 'D', optionText: '(7, 4)', isCorrect: false },
      ],
    },
    {
      questionCode: 'C10-MATH-CH7-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [CBSE Board/Olympiad] If A(1, 2), B(4, y), C(x, 6), D(3, 5) are the vertices of a parallelogram taken in order, find x and y.',
      explanation: 'Diagonals of parallelogram bisect each other (same midpoint). Midpoint AC = Midpoint BD => ((1+x)/2, (2+6)/2) = ((4+3)/2, (y+5)/2) => 1+x = 7 => x = 6, y+5 = 8 => y = 3.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'x = 6, y = 3', isCorrect: true },
        { optionLabel: 'B', optionText: 'x = 3, y = 6', isCorrect: false },
        { optionLabel: 'C', optionText: 'x = 5, y = 2', isCorrect: false },
        { optionLabel: 'D', optionText: 'x = 7, y = 4', isCorrect: false },
      ],
    },
    {
      questionCode: 'C10-MATH-CH7-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] Find the relation between x and y such that the point (x, y) is equidistant from the points (7, 1) and (3, 5).',
      explanation: '(x - 7)² + (y - 1)² = (x - 3)² + (y - 5)² => x² - 14x + 49 + y² - 2y + 1 = x² - 6x + 9 + y² - 10y + 25 => -8x + 8y + 16 = 0 => x - y = 2.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'x - y = 2', isCorrect: true },
        { optionLabel: 'B', optionText: 'x + y = 2', isCorrect: false },
        { optionLabel: 'C', optionText: 'x - y = 5', isCorrect: false },
        { optionLabel: 'D', optionText: 'x + y = 12', isCorrect: false },
      ],
    },
    {
      questionCode: 'C10-MATH-CH7-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'The distance of the point P(-6, 8) from the Origin (0, 0) is:',
      explanation: 'd = √((-6)² + 8²) = √(36 + 64) = √100 = 10 units.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '10 units', isCorrect: true },
        { optionLabel: 'B', optionText: '6 units', isCorrect: false },
        { optionLabel: 'C', optionText: '8 units', isCorrect: false },
        { optionLabel: 'D', optionText: '14 units', isCorrect: false },
      ],
    },
    {
      questionCode: 'C10-MATH-CH7-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'If the distance between points (4, p) and (1, 0) is 5 units, find p.',
      explanation: '√(3² + p²) = 5 => 9 + p² = 25 => p² = 16 => p = ±4.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'p = ±4', isCorrect: true },
        { optionLabel: 'B', optionText: 'p = 4 only', isCorrect: false },
        { optionLabel: 'C', optionText: 'p = ±3', isCorrect: false },
        { optionLabel: 'D', optionText: 'p = 16', isCorrect: false },
      ],
    },
  ],
};
