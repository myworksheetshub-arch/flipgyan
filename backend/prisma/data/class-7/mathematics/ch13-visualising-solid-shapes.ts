export const ch13VisualisingSolidShapesClass7Data = {
  classNumber: 7,
  className: 'Class 7',
  subjectName: 'Mathematics',
  subjectCode: 'MATH7',
  chapterNumber: 13,
  chapterTitle: 'Visualising Solid Shapes',
  summary: '3D shapes (Cube, Cuboid, Sphere, Cylinder, Cone, Pyramid), Nets for building 3D shapes, Euler’s Formula F + V - E = 2 for polyhedrons.',
  contentMarkdown: `# Chapter 13: Visualising Solid Shapes (Class 7 Mathematics NEP 2025)

## 1. Euler's Formula for Polyhedrons
For any 3D polyhedron:
$$F + V - E = 2$$
- $F$: Number of Faces
- $V$: Number of Vertices
- $E$: Number of Edges

## 2. 3D Elements
- **Cube**: $6$ Faces, $8$ Vertices, $12$ Edges.
- **Triangular Pyramid (Tetrahedron)**: $4$ Faces, $4$ Vertices, $6$ Edges.
- **Square Pyramid**: $5$ Faces, $5$ Vertices, $8$ Edges.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Solid Shapes & Nets',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'euler-rule',
          label: "Euler's Formula",
          type: 'category',
          children: [
            { id: 'f-v-e', label: 'F + V - E = 2', type: 'concept' },
            { id: 'cube-props', label: 'Cube: F=6, V=8, E=12', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C7-MATH-CH13-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'Verify Euler’s Formula (F + V - E = 2) for a CUBE.',
      explanation: 'For a cube: F = 6, V = 8, E = 12. F + V - E = 6 + 8 - 12 = 14 - 12 = 2.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'F=6, V=8, E=12 (F+V-E=2)', isCorrect: true },
        { optionLabel: 'B', optionText: 'F=6, V=12, E=8', isCorrect: false },
        { optionLabel: 'C', optionText: 'F=8, V=6, E=12', isCorrect: false },
        { optionLabel: 'D', optionText: 'F=6, V=6, E=10', isCorrect: false },
      ],
    },
    {
      questionCode: 'C7-MATH-CH13-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'How many vertices does a Triangular Pyramid (Tetrahedron) have?',
      explanation: 'A triangular pyramid has 4 faces and 4 vertices.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '4', isCorrect: true },
        { optionLabel: 'B', optionText: '5', isCorrect: false },
        { optionLabel: 'C', optionText: '6', isCorrect: false },
        { optionLabel: 'D', optionText: '3', isCorrect: false },
      ],
    },
    {
      questionCode: 'C7-MATH-CH13-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Using Euler’s Formula, find the number of Faces F of a polyhedron if V = 6 and E = 12.',
      explanation: 'F + V - E = 2 => F + 6 - 12 = 2 => F - 6 = 2 => F = 8.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '8', isCorrect: true },
        { optionLabel: 'B', optionText: '6', isCorrect: false },
        { optionLabel: 'C', optionText: '10', isCorrect: false },
        { optionLabel: 'D', optionText: '4', isCorrect: false },
      ],
    },
    {
      questionCode: 'C7-MATH-CH13-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      questionText: 'What 3D shape is formed by folding a net consisting of a square base and 4 triangular sides?',
      explanation: 'A square base with 4 triangular faces forms a Square Pyramid.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Square Pyramid', isCorrect: true },
        { optionLabel: 'B', optionText: 'Triangular Prism', isCorrect: false },
        { optionLabel: 'C', optionText: 'Cube', isCorrect: false },
        { optionLabel: 'D', optionText: 'Cone', isCorrect: false },
      ],
    },
    {
      questionCode: 'C7-MATH-CH13-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [CBSE Olympiad] Find the number of Edges E of a polyhedron having 20 Faces and 12 Vertices (Icosahedron).',
      explanation: 'F + V - E = 2 => 20 + 12 - E = 2 => 32 - E = 2 => E = 30 edges.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '30 edges', isCorrect: true },
        { optionLabel: 'B', optionText: '32 edges', isCorrect: false },
        { optionLabel: 'C', optionText: '24 edges', isCorrect: false },
        { optionLabel: 'D', optionText: '28 edges', isCorrect: false },
      ],
    },
    {
      questionCode: 'C7-MATH-CH13-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] Which of the following 3D shapes is NOT a Polyhedron?',
      explanation: 'A Polyhedron must be bounded by flat polygonal faces. A Cylinder has curved surfaces, so it is NOT a polyhedron.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Cylinder', isCorrect: true },
        { optionLabel: 'B', optionText: 'Cube', isCorrect: false },
        { optionLabel: 'C', optionText: 'Triangular Prism', isCorrect: false },
        { optionLabel: 'D', optionText: 'Octahedron', isCorrect: false },
      ],
    },
    {
      questionCode: 'C7-MATH-CH13-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'How many edges does a Triangular Prism have?',
      explanation: 'A triangular prism has 5 faces, 6 vertices, and 9 edges.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '9', isCorrect: true },
        { optionLabel: 'B', optionText: '6', isCorrect: false },
        { optionLabel: 'C', optionText: '5', isCorrect: false },
        { optionLabel: 'D', optionText: '12', isCorrect: false },
      ],
    },
    {
      questionCode: 'C7-MATH-CH13-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'On a standard die (cube), what is the sum of numbers on opposite faces?',
      explanation: 'On any standard die, opposite faces always sum up to 7 (1+6, 2+5, 3+4).',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '7', isCorrect: true },
        { optionLabel: 'B', optionText: '6', isCorrect: false },
        { optionLabel: 'C', optionText: '8', isCorrect: false },
        { optionLabel: 'D', optionText: '5', isCorrect: false },
      ],
    },
  ],
};
