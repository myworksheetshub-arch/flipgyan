export const ch9PerimeterAreaClass7Data = {
  classNumber: 7,
  className: 'Class 7',
  subjectName: 'Mathematics',
  subjectCode: 'MATH7',
  chapterNumber: 9,
  chapterTitle: 'Perimeter and Area',
  summary: 'Area of Parallelogram (Base * Height), Area of Triangle (1/2 * Base * Height), Circumference of Circle C = 2πr, Area of Circle A = πr².',
  contentMarkdown: `# Chapter 9: Perimeter and Area (Class 7 Mathematics NEP 2025)

## 1. Parallelogram & Triangle
- **Area of Parallelogram**:
  $$\\text{Area} = b \\times h$$
- **Area of Triangle**:
  $$\\text{Area} = \\frac{1}{2} \\times b \\times h$$

## 2. Circle Formulae
- **Circumference**: $C = 2 \\pi r = \\pi d$
- **Area**: $A = \\pi r^2$
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Perimeter & Area',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'area-formulas-ch9',
          label: '2D Shapes Area',
          type: 'category',
          children: [
            { id: 'parall-area', label: 'Parallelogram Area = b × h', type: 'concept' },
            { id: 'tri-area-c7', label: 'Triangle Area = 1/2 × b × h', type: 'concept' },
            { id: 'circle-area-c7', label: 'Circle Area = π r², Circumference = 2πr', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C7-MATH-CH9-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the area of a parallelogram with base 7 cm and height 4 cm.',
      explanation: 'Area = base × height = 7 × 4 = 28 cm².',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '28 cm²', isCorrect: true },
        { optionLabel: 'B', optionText: '14 cm²', isCorrect: false },
        { optionLabel: 'C', optionText: '22 cm²', isCorrect: false },
        { optionLabel: 'D', optionText: '56 cm²', isCorrect: false },
      ],
    },
    {
      questionCode: 'C7-MATH-CH9-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the circumference of a circle of radius 14 cm (π = 22/7).',
      explanation: 'C = 2 π r = 2 × (22/7) × 14 = 2 × 22 × 2 = 88 cm.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '88 cm', isCorrect: true },
        { optionLabel: 'B', optionText: '616 cm', isCorrect: false },
        { optionLabel: 'C', optionText: '44 cm', isCorrect: false },
        { optionLabel: 'D', optionText: '176 cm', isCorrect: false },
      ],
    },
    {
      questionCode: 'C7-MATH-CH9-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'Find the area of a circle with diameter 14 cm (π = 22/7).',
      explanation: 'Radius r = 14 / 2 = 7 cm. Area = π r² = (22/7) × 7 × 7 = 154 cm².',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '154 cm²', isCorrect: true },
        { optionLabel: 'B', optionText: '616 cm²', isCorrect: false },
        { optionLabel: 'C', optionText: '308 cm²', isCorrect: false },
        { optionLabel: 'D', optionText: '77 cm²', isCorrect: false },
      ],
    },
    {
      questionCode: 'C7-MATH-CH9-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'A 3 m wide path runs outside and around a rectangular park of length 125 m and breadth 65 m. Find the area of the path.',
      explanation: 'Outer rectangle: L = 125 + 6 = 131 m, B = 65 + 6 = 71 m. Outer Area = 131 × 71 = 9301 m². Inner Area = 125 × 65 = 8125 m². Path Area = 9301 - 8125 = 1176 m².',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '1176 m²', isCorrect: true },
        { optionLabel: 'B', optionText: '1140 m²', isCorrect: false },
        { optionLabel: 'C', optionText: '1200 m²', isCorrect: false },
        { optionLabel: 'D', optionText: '976 m²', isCorrect: false },
      ],
    },
    {
      questionCode: 'C7-MATH-CH9-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [CBSE Olympiad] A wire is in the shape of a square of side 10 cm. If the wire is rebent into a rectangle of length 12 cm, find its breadth and which shape encloses MORE AREA.',
      explanation: 'Perimeter of wire = 4 × 10 = 40 cm. 2(12 + b) = 40 => 12 + b = 20 => b = 8 cm. Square Area = 100 cm². Rectangle Area = 12 × 8 = 96 cm². Square encloses MORE area.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Breadth = 8 cm; Square encloses more area', isCorrect: true },
        { optionLabel: 'B', optionText: 'Breadth = 6 cm; Rectangle encloses more area', isCorrect: false },
        { optionLabel: 'C', optionText: 'Breadth = 8 cm; Both enclose equal area', isCorrect: false },
        { optionLabel: 'D', optionText: 'Breadth = 10 cm; Square encloses more area', isCorrect: false },
      ],
    },
    {
      questionCode: 'C7-MATH-CH9-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] If the circumference of a circular sheet is 154 m, find its radius (π = 22/7).',
      explanation: '2 × (22/7) × r = 154 => (44/7) r = 154 => r = (154 × 7) / 44 = (7 × 7) / 2 = 24.5 m.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '24.5 m', isCorrect: true },
        { optionLabel: 'B', optionText: '49 m', isCorrect: false },
        { optionLabel: 'C', optionText: '22 m', isCorrect: false },
        { optionLabel: 'D', optionText: '28.5 m', isCorrect: false },
      ],
    },
    {
      questionCode: 'C7-MATH-CH9-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'What is the area of a right-angled triangle with base 6 cm and height 5 cm?',
      explanation: 'Area = (1/2) × base × height = (1/2) × 6 × 5 = 15 cm².',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '15 cm²', isCorrect: true },
        { optionLabel: 'B', optionText: '30 cm²', isCorrect: false },
        { optionLabel: 'C', optionText: '11 cm²', isCorrect: false },
        { optionLabel: 'D', optionText: '20 cm²', isCorrect: false },
      ],
    },
    {
      questionCode: 'C7-MATH-CH9-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'How many times a wheel of radius 28 cm must rotate to go 352 m? (π = 22/7)',
      explanation: 'Circumference = 2 × (22/7) × 28 = 176 cm = 1.76 m. Number of rotations = 352 / 1.76 = 200.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '200 rotations', isCorrect: true },
        { optionLabel: 'B', optionText: '100 rotations', isCorrect: false },
        { optionLabel: 'C', optionText: '400 rotations', isCorrect: false },
        { optionLabel: 'D', optionText: '150 rotations', isCorrect: false },
      ],
    },
  ],
};
