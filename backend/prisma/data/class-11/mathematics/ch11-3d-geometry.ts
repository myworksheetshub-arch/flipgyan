export const ch113DGeometryClass11Data = {
  classNumber: 11,
  className: 'Class 11',
  subjectName: 'Mathematics',
  subjectCode: 'MATH11',
  chapterNumber: 11,
  chapterTitle: 'Introduction to Three Dimensional Geometry',
  summary: 'Coordinate axes and coordinate planes in 3D, Coordinates of a point in 3D space (8 octants), Distance between two points d = √((x2-x1)² + (y2-y1)² + (z2-z1)²), Section formula.',
  contentMarkdown: `# Chapter 11: Introduction to Three Dimensional Geometry (Class 11 Mathematics NEP 2025)

## 1. 3D Coordinates & 8 Octants
Space is divided into **8 octants** by 3 mutually perpendicular planes ($XY, YZ, ZX$).

## 2. 3D Distance Formula
Distance between $P(x_1, y_1, z_1)$ and $Q(x_2, y_2, z_2)$:
$$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}$$
- Distance from Origin $(0,0,0) = \\sqrt{x^2 + y^2 + z^2}$.

## 3. 3D Section Formula
$$P(x, y, z) = \\left( \\frac{m x_2 + n x_1}{m + n}, \\frac{m y_2 + n y_1}{m + n}, \\frac{m z_2 + n z_1}{m + n} \\right)$$
`,
  mindMapNodes: [
    {
      id: 'root',
      label: '3D Geometry',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'octants-dist',
          label: 'Octants & 3D Distance',
          type: 'category',
          children: [
            { id: 'dist-3d', label: 'd = √((x2-x1)² + (y2-y1)² + (z2-z1)²)', type: 'concept' },
            { id: 'sec-3d', label: '3D Section Formula', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C11-MATH-CH11-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'In which Octant does the point P(-3, 1, -2) lie?',
      explanation: 'x < 0, y > 0, z < 0 corresponds to Octant VI (X\'YZ\').',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Octant VI', isCorrect: true },
        { optionLabel: 'B', optionText: 'Octant II', isCorrect: false },
        { optionLabel: 'C', optionText: 'Octant V', isCorrect: false },
        { optionLabel: 'D', optionText: 'Octant VIII', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH11-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the distance between the points P(1, -3, 4) and Q(-4, 1, 2).',
      explanation: 'd = √((-4 - 1)² + (1 - (-3))² + (2 - 4)²) = √((-5)² + 4² + (-2)²) = √(25 + 16 + 4) = √45 = 3√5 units.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '3√5 units', isCorrect: true },
        { optionLabel: 'B', optionText: '√45 units', isCorrect: false },
        { optionLabel: 'C', optionText: '5 units', isCorrect: false },
        { optionLabel: 'D', optionText: '9 units', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH11-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the midpoint of the line segment joining the points P(2, 3, 0) and Q(-1, 5, -4).',
      explanation: 'Midpoint = ((2 + -1)/2, (3 + 5)/2, (0 + -4)/2) = (1/2, 4, -2).',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '(1/2, 4, -2)', isCorrect: true },
        { optionLabel: 'B', optionText: '(1, 8, -4)', isCorrect: false },
        { optionLabel: 'C', optionText: '(-1/2, 4, 2)', isCorrect: false },
        { optionLabel: 'D', optionText: '(3/2, 1, -2)', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH11-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'Find the ratio in which the YZ-plane divides the line segment joining the points A(-2, 4, 7) and B(3, -5, 8).',
      explanation: 'On YZ-plane, x = 0. Let ratio be k:1. x = (3k - 2)/(k + 1) = 0 => 3k - 2 = 0 => k = 2/3. Ratio is 2 : 3.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '2 : 3', isCorrect: true },
        { optionLabel: 'B', optionText: '3 : 2', isCorrect: false },
        { optionLabel: 'C', optionText: '1 : 2', isCorrect: false },
        { optionLabel: 'D', optionText: '4 : 5', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH11-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [JEE Main / Olympiad] Show that the points A(1, 2, 3), B(-1, -2, -1), C(2, 3, 2) and D(4, 7, 6) are the vertices of a:',
      explanation: 'Midpoint of AC = ((1+2)/2, (2+3)/2, (3+2)/2) = (3/2, 5/2, 5/2). Midpoint of BD = ((-1+4)/2, (-2+7)/2, (-1+6)/2) = (3/2, 5/2, 5/2). Since midpoints of diagonals coincide, ABCD is a Parallelogram.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Parallelogram', isCorrect: true },
        { optionLabel: 'B', optionText: 'Rectangle', isCorrect: false },
        { optionLabel: 'C', optionText: 'Square', isCorrect: false },
        { optionLabel: 'D', optionText: 'Rhombus', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH11-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] If the origin (0, 0, 0) is the centroid of △ABC with vertices A(a, 1, 3), B(-2, b, -5), and C(4, 7, c), find a, b, c.',
      explanation: 'Centroid = ((a - 2 + 4)/3, (1 + b + 7)/3, (3 - 5 + c)/3) = (0, 0, 0) => a + 2 = 0 => a = -2; b + 8 = 0 => b = -8; c - 2 = 0 => c = 2.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'a = -2, b = -8, c = 2', isCorrect: true },
        { optionLabel: 'B', optionText: 'a = 2, b = 8, c = -2', isCorrect: false },
        { optionLabel: 'C', optionText: 'a = -4, b = -8, c = 5', isCorrect: false },
        { optionLabel: 'D', optionText: 'a = 0, b = 0, c = 0', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH11-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'What are the coordinates of any point lying on the Z-axis in 3D space?',
      explanation: 'On the Z-axis, x = 0 and y = 0, so coordinates are (0, 0, z).',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '(0, 0, z)', isCorrect: true },
        { optionLabel: 'B', optionText: '(x, 0, 0)', isCorrect: false },
        { optionLabel: 'C', optionText: '(0, y, 0)', isCorrect: false },
        { optionLabel: 'D', optionText: '(x, y, 0)', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH11-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the distance of the point P(3, 4, 5) from the XY-plane.',
      explanation: 'The perpendicular distance of P(x, y, z) from the XY-plane is |z| = |5| = 5 units.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '5 units', isCorrect: true },
        { optionLabel: 'B', optionText: '3 units', isCorrect: false },
        { optionLabel: 'C', optionText: '4 units', isCorrect: false },
        { optionLabel: 'D', optionText: '√50 units', isCorrect: false },
      ],
    },
  ],
};
