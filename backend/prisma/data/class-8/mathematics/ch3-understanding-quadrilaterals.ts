export const ch3QuadrilateralsClass8Data = {
  classNumber: 8,
  className: 'Class 8',
  subjectName: 'Mathematics',
  subjectCode: 'MATH8',
  chapterNumber: 3,
  chapterTitle: 'Understanding Quadrilaterals',
  summary: 'Polygons, convex/concave polygons, sum of exterior angles of any polygon = 360°, sum of interior angles = (n-2)×180°, properties of Parallelogram, Rhombus, Rectangle, Square, and Kite.',
  contentMarkdown: `# Chapter 3: Understanding Quadrilaterals (Class 8 Mathematics NEP 2025)

## 1. Angle Sum Properties
- **Sum of Interior Angles of Polygon with $n$ sides**: $(n - 2) \\times 180^\\circ$
- **Sum of Exterior Angles of ANY Polygon**: Always $360^\\circ$!

## 2. Properties of Parallelograms
- Opposite sides are equal and parallel.
- Opposite angles are equal.
- Adjacent angles are supplementary (Sum $= 180^\\circ$).
- Diagonals bisect each other.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Quadrilaterals',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'angles',
          label: 'Angle Sums',
          type: 'category',
          children: [
            { id: 'ext-sum', label: 'Sum of exterior angles = 360°', type: 'concept' },
            { id: 'int-sum', label: 'Sum of interior angles = (n-2) × 180°', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C8-MATH-CH3-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'What is the sum of the exterior angles of ANY convex polygon?',
      explanation: 'The sum of the measures of the exterior angles of any polygon is always 360 degrees.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '360°', isCorrect: true },
        { optionLabel: 'B', optionText: '180°', isCorrect: false },
        { optionLabel: 'C', optionText: '540°', isCorrect: false },
        { optionLabel: 'D', optionText: '720°', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH3-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the sum of all interior angles of a 6-sided polygon (Hexagon).',
      explanation: 'Formula = (n - 2) × 180° = (6 - 2) × 180° = 4 × 180° = 720°.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '720°', isCorrect: true },
        { optionLabel: 'B', optionText: '540°', isCorrect: false },
        { optionLabel: 'C', optionText: '360°', isCorrect: false },
        { optionLabel: 'D', optionText: '900°', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH3-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      questionText: 'In a parallelogram ABCD, if angle A = 70°, what is the measure of adjacent angle B?',
      explanation: 'Adjacent angles of a parallelogram are supplementary (sum to 180°). Angle B = 180° - 70° = 110°.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '110°', isCorrect: true },
        { optionLabel: 'B', optionText: '70°', isCorrect: false },
        { optionLabel: 'C', optionText: '90°', isCorrect: false },
        { optionLabel: 'D', optionText: '140°', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH3-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Each interior angle of a regular polygon is 140°. How many sides does the polygon have?',
      explanation: 'Each exterior angle = 180° - 140° = 40°. Number of sides n = 360° / 40° = 9 sides.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '9 sides', isCorrect: true },
        { optionLabel: 'B', optionText: '8 sides', isCorrect: false },
        { optionLabel: 'C', optionText: '10 sides', isCorrect: false },
        { optionLabel: 'D', optionText: '12 sides', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH3-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'LOGICAL_REASONING',
      questionText: '🏆 [CBSE Olympiad] In a Rhombus PQRS, the diagonals PR and QS intersect at O. If PR = 16 cm and QS = 12 cm, what is the perimeter of the Rhombus?',
      explanation: 'Diagonals of a rhombus bisect each other at 90°. In right triangle POQ: PO = 8 cm, OQ = 6 cm. Side PQ = √(8² + 6²) = √(64 + 36) = √100 = 10 cm. Perimeter = 4 × 10 = 40 cm.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '40 cm', isCorrect: true },
        { optionLabel: 'B', optionText: '28 cm', isCorrect: false },
        { optionLabel: 'C', optionText: '56 cm', isCorrect: false },
        { optionLabel: 'D', optionText: '32 cm', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH3-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] Which quadrilateral has equal diagonals that bisect each other at right angles (90°)?',
      explanation: 'A Square has equal diagonals that bisect each other at 90°. (Rhombus has perpendicular diagonals but not equal; Rectangle has equal diagonals but not perpendicular).',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Square', isCorrect: true },
        { optionLabel: 'B', optionText: 'Rhombus', isCorrect: false },
        { optionLabel: 'C', optionText: 'Rectangle', isCorrect: false },
        { optionLabel: 'D', optionText: 'Parallelogram', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH3-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'What is a quadrilateral with exactly ONE pair of parallel sides called?',
      explanation: 'A Trapezium (Trapezoid) is a quadrilateral with at least one pair of parallel sides.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Trapezium', isCorrect: true },
        { optionLabel: 'B', optionText: 'Parallelogram', isCorrect: false },
        { optionLabel: 'C', optionText: 'Rhombus', isCorrect: false },
        { optionLabel: 'D', optionText: 'Kite', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH3-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      questionText: 'Which of the following is NOT a property of a Rectangle?',
      explanation: 'Diagonals of a rectangle are not necessarily perpendicular to each other unless it is a square.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Diagonals are perpendicular to each other', isCorrect: true },
        { optionLabel: 'B', optionText: 'Diagonals are equal in length', isCorrect: false },
        { optionLabel: 'C', optionText: 'All angles are 90°', isCorrect: false },
        { optionLabel: 'D', optionText: 'Opposite sides are equal and parallel', isCorrect: false },
      ],
    },
  ],
};
