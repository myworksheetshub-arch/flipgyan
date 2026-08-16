export const ch9MensurationClass8Data = {
  classNumber: 8,
  className: 'Class 8',
  subjectName: 'Mathematics',
  subjectCode: 'MATH8',
  chapterNumber: 9,
  chapterTitle: 'Mensuration',
  summary: 'Area of Trapezium, Rhombus, General Quadrilateral, Surface Area & Volume of Cube, Cuboid, and Cylinder.',
  contentMarkdown: `# Chapter 9: Mensuration (Class 8 Mathematics NEP 2025)

## 1. Area Formulas
- **Trapezium**: $\\frac{1}{2} \\times (a + b) \\times h$ (where $a, b$ are parallel sides, $h$ is perpendicular height).
- **Rhombus**: $\\frac{1}{2} \\times d_1 \\times d_2$ (where $d_1, d_2$ are diagonals).

## 2. Surface Area & Volume
- **Cuboid**: Total Surface Area $= 2(lb + bh + hl)$, Volume $= l \\times b \\times h$.
- **Cube**: Total Surface Area $= 6a^2$, Volume $= a^3$.
- **Cylinder**:
  - Curved Surface Area (CSA) $= 2\\pi r h$
  - Total Surface Area (TSA) $= 2\\pi r(h + r)$
  - Volume $= \\pi r^2 h$
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Mensuration',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'surface-vol',
          label: '3D Shapes Formulae',
          type: 'category',
          children: [
            { id: 'cylinder-vol', label: 'Cylinder Volume = π r² h', type: 'concept' },
            { id: 'cube-sa', label: 'Cube TSA = 6 a²', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C8-MATH-CH9-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'The area of a trapezium is 34 cm² and the length of one of the parallel sides is 10 cm and its height is 4 cm. Find the length of the other parallel side.',
      explanation: 'Area = (1/2) × (a + b) × h => 34 = (1/2) × (10 + b) × 4 => 34 = 2(10 + b) => 17 = 10 + b => b = 7 cm.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '7 cm', isCorrect: true },
        { optionLabel: 'B', optionText: '6 cm', isCorrect: false },
        { optionLabel: 'C', optionText: '8 cm', isCorrect: false },
        { optionLabel: 'D', optionText: '9 cm', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH9-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the total surface area of a cube whose edge is 10 cm.',
      explanation: 'TSA = 6a² = 6 × (10)² = 6 × 100 = 600 cm².',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '600 cm²', isCorrect: true },
        { optionLabel: 'B', optionText: '400 cm²', isCorrect: false },
        { optionLabel: 'C', optionText: '1000 cm²', isCorrect: false },
        { optionLabel: 'D', optionText: '100 cm²', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH9-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'A cylinder has a radius of 7 cm and a height of 10 cm. Find its Volume (use π = 22/7).',
      explanation: 'Volume = π r² h = (22/7) × 7 × 7 × 10 = 22 × 7 × 10 = 1540 cm³.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '1540 cm³', isCorrect: true },
        { optionLabel: 'B', optionText: '440 cm³', isCorrect: false },
        { optionLabel: 'C', optionText: '770 cm³', isCorrect: false },
        { optionLabel: 'D', optionText: '1480 cm³', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH9-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'The diagonals of a rhombus are 7.5 cm and 12 cm. Find its area.',
      explanation: 'Area of Rhombus = (1/2) × d1 × d2 = (1/2) × 7.5 × 12 = 7.5 × 6 = 45 cm².',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '45 cm²', isCorrect: true },
        { optionLabel: 'B', optionText: '90 cm²', isCorrect: false },
        { optionLabel: 'C', optionText: '30 cm²', isCorrect: false },
        { optionLabel: 'D', optionText: '60 cm²', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH9-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [CBSE Olympiad] A closed cylindrical tank of radius 7 m and height 3 m is made from a sheet of metal. How much sheet of metal is required? (π = 22/7)',
      explanation: 'Total Surface Area = 2πr(h + r) = 2 × (22/7) × 7 × (3 + 7) = 44 × 10 = 440 m².',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '440 m²', isCorrect: true },
        { optionLabel: 'B', optionText: '132 m²', isCorrect: false },
        { optionLabel: 'C', optionText: '308 m²', isCorrect: false },
        { optionLabel: 'D', optionText: '462 m²', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH9-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] The internal measures of a cuboidal room are 12 m × 8 m × 4 m. Find the total cost of whitewashing all four walls at ₹5 per m².',
      explanation: 'Area of 4 walls = 2h(l + b) = 2 × 4 × (12 + 8) = 8 × 20 = 160 m². Cost = 160 × 5 = ₹800.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '₹800', isCorrect: true },
        { optionLabel: 'B', optionText: '₹960', isCorrect: false },
        { optionLabel: 'C', optionText: '₹1,200', isCorrect: false },
        { optionLabel: 'D', optionText: '₹640', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH9-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'How many litres of water can a cubical tank of side 1 m hold?',
      explanation: 'Volume = 1 m³ = 1000 litres.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '1000 litres', isCorrect: true },
        { optionLabel: 'B', optionText: '100 litres', isCorrect: false },
        { optionLabel: 'C', optionText: '10,000 litres', isCorrect: false },
        { optionLabel: 'D', optionText: '10 litres', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH9-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'If the height of a cylinder is doubled keeping the radius same, its volume becomes:',
      explanation: 'Volume V = π r² h. If h is doubled (2h), V\' = π r² (2h) = 2V (doubled).',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Doubled (2 times)', isCorrect: true },
        { optionLabel: 'B', optionText: 'Quadrupled (4 times)', isCorrect: false },
        { optionLabel: 'C', optionText: 'Halved (1/2 time)', isCorrect: false },
        { optionLabel: 'D', optionText: 'Unchanged', isCorrect: false },
      ],
    },
  ],
};
