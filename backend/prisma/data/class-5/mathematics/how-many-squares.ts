export const howManySquaresData = {
  classNumber: 5,
  className: 'Class 5',
  subjectName: 'Mathematics',
  subjectCode: 'MATH5',
  chapterNumber: 3,
  chapterTitle: 'How Many Squares?',
  summary: 'Concept of area (square units) and perimeter (boundary length), grid counting, rectangle and triangle areas, and stamp problems.',
  contentMarkdown: `# Chapter 3: How Many Squares? (Class 5 Mathematics)

## 1. Perimeter vs Area
- **Perimeter**: Total length of the boundary around a closed shape (Unit: cm, m).
  - *Perimeter of Rectangle*: $2 \\times (\\text{Length} + \\text{Breadth})$
  - *Perimeter of Square*: $4 \\times \\text{Side}$
- **Area**: The surface region enclosed inside a shape, measured in square units (e.g. sq cm, sq m).
  - *Area of Rectangle*: $\\text{Length} \\times \\text{Breadth}$
  - *Area of Square*: $\\text{Side} \\times \\text{Side}$
  - *Area of Triangle*: $\\frac{1}{2} \\times \\text{Base} \\times \\text{Height}$ (Half of the rectangle area!).

## 2. Grid Counting Technique
To find the area of irregular shapes drawn on a $1 \\text{ cm} \\times 1 \\text{ cm}$ grid:
1. Count full squares = 1 sq cm each.
2. Count half squares = 0.5 sq cm each.
3. Ignore squares less than half.
4. Count more than half squares as 1 full square.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'How Many Squares?',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'perimeter',
          label: 'Perimeter (Boundary)',
          type: 'category',
          children: [
            { id: 'rect-p', label: 'Rectangle Perimeter = 2 × (L + B)', type: 'concept' },
            { id: 'sq-p', label: 'Square Perimeter = 4 × Side', type: 'concept' },
          ],
        },
        {
          id: 'area',
          label: 'Area (Enclosed Surface)',
          type: 'category',
          children: [
            { id: 'rect-a', label: 'Rectangle Area = Length × Breadth', type: 'concept' },
            { id: 'tri-a', label: 'Triangle Area = 1/2 × Base × Height', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C5-MATH-HOW-001',
      questionText: 'What is the perimeter of a rectangle with length 6 cm and breadth 4 cm?',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      options: [
        { text: '20 cm', isCorrect: true, explanation: 'Perimeter = 2 × (6 + 4) = 2 × 10 = 20 cm.' },
        { text: '24 sq cm', isCorrect: false, explanation: 'This is the Area (6 × 4).' },
        { text: '10 cm', isCorrect: false, explanation: 'Incorrect.' },
        { text: '12 cm', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'Perimeter of a rectangle = 2 × (Length + Breadth) = 2 × (6 + 4) = 20 cm.',
    },
    {
      questionCode: 'C5-MATH-HOW-002',
      questionText: 'If a rectangle has an area of 12 sq cm, what is the area of a triangle that divides this rectangle exactly into two equal halves?',
      difficulty: 'MEDIUM',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: '6 sq cm', isCorrect: true, explanation: 'Triangle area = 1/2 of rectangle area = 12 / 2 = 6 sq cm.' },
        { text: '12 sq cm', isCorrect: false, explanation: 'Incorrect.' },
        { text: '3 sq cm', isCorrect: false, explanation: 'Incorrect.' },
        { text: '24 sq cm', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'A diagonal divides a rectangle of area 12 sq cm into two equal triangles of 6 sq cm each.',
    },
  ],
};
