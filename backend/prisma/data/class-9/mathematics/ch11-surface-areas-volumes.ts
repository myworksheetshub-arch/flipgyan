export const ch11SurfaceAreasVolumesClass9Data = {
  classNumber: 9,
  className: 'Class 9',
  subjectName: 'Mathematics',
  subjectCode: 'MATH9',
  chapterNumber: 11,
  chapterTitle: 'Surface Areas and Volumes',
  summary: 'Surface Area and Volume of Right Circular Cone, Sphere, and Hemisphere.',
  contentMarkdown: `# Chapter 11: Surface Areas and Volumes (Class 9 Mathematics NEP 2025)

## 1. Cone
- Slant Height $l = \\sqrt{r^2 + h^2}$
- Curved Surface Area $= \\pi r l$
- Total Surface Area $= \\pi r(l + r)$
- Volume $= \\frac{1}{3} \\pi r^2 h$

## 2. Sphere & Hemisphere
- **Sphere**:
  - Surface Area $= 4\\pi r^2$
  - Volume $= \\frac{4}{3} \\pi r^3$
- **Hemisphere**:
  - CSA $= 2\\pi r^2$
  - TSA $= 3\\pi r^2$
  - Volume $= \\frac{2}{3} \\pi r^3$
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Surface Areas & Volumes',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'cone-sphere',
          label: 'Cone & Sphere Formulae',
          type: 'category',
          children: [
            { id: 'cone-vol', label: 'Cone Volume = 1/3 π r² h', type: 'concept' },
            { id: 'sphere-vol', label: 'Sphere Volume = 4/3 π r³', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C9-MATH-CH11-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the curved surface area of a cone with radius 7 cm and slant height 10 cm (π = 22/7).',
      explanation: 'CSA = π r l = (22/7) × 7 × 10 = 220 cm².',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '220 cm²', isCorrect: true },
        { optionLabel: 'B', optionText: '440 cm²', isCorrect: false },
        { optionLabel: 'C', optionText: '154 cm²', isCorrect: false },
        { optionLabel: 'D', optionText: '374 cm²', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH11-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the surface area of a sphere of radius 7 cm (π = 22/7).',
      explanation: 'Surface Area = 4 π r² = 4 × (22/7) × 7 × 7 = 4 × 154 = 616 cm².',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '616 cm²', isCorrect: true },
        { optionLabel: 'B', optionText: '308 cm²', isCorrect: false },
        { optionLabel: 'C', optionText: '154 cm²', isCorrect: false },
        { optionLabel: 'D', optionText: '1232 cm²', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH11-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'Find the volume of a right circular cone of radius 6 cm and height 7 cm (π = 22/7).',
      explanation: 'Volume = (1/3) π r² h = (1/3) × (22/7) × 6 × 6 × 7 = 22 × 12 = 264 cm³.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '264 cm³', isCorrect: true },
        { optionLabel: 'B', optionText: '792 cm³', isCorrect: false },
        { optionLabel: 'C', optionText: '132 cm³', isCorrect: false },
        { optionLabel: 'D', optionText: '528 cm³', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH11-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the Total Surface Area (TSA) of a solid hemisphere of radius 7 cm (π = 22/7).',
      explanation: 'TSA of hemisphere = 3 π r² = 3 × (22/7) × 7 × 7 = 3 × 154 = 462 cm².',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '462 cm²', isCorrect: true },
        { optionLabel: 'B', optionText: '308 cm²', isCorrect: false },
        { optionLabel: 'C', optionText: '616 cm²', isCorrect: false },
        { optionLabel: 'D', optionText: '154 cm²', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH11-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [CBSE Olympiad] If the radius of a sphere is doubled, its volume becomes how many times its original volume?',
      explanation: 'Volume V = (4/3)π r³. If r is doubled (2r), V\' = (4/3)π (2r)³ = 8 × V (8 times).',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '8 times', isCorrect: true },
        { optionLabel: 'B', optionText: '4 times', isCorrect: false },
        { optionLabel: 'C', optionText: '2 times', isCorrect: false },
        { optionLabel: 'D', optionText: '16 times', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH11-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] A conical tent is 10 m high and the radius of its base is 24 m. Find the slant height of the tent.',
      explanation: 'Slant height l = √(r² + h²) = √(24² + 10²) = √(576 + 100) = √676 = 26 m.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '26 m', isCorrect: true },
        { optionLabel: 'B', optionText: '34 m', isCorrect: false },
        { optionLabel: 'C', optionText: '28 m', isCorrect: false },
        { optionLabel: 'D', optionText: '30 m', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH11-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'The ratio of the volume of a cone to a cylinder having the same base radius and same height is:',
      explanation: 'V_cone / V_cylinder = ((1/3)π r² h) / (π r² h) = 1/3 = 1 : 3.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '1 : 3', isCorrect: true },
        { optionLabel: 'B', optionText: '3 : 1', isCorrect: false },
        { optionLabel: 'C', optionText: '1 : 2', isCorrect: false },
        { optionLabel: 'D', optionText: '2 : 3', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH11-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the volume of a sphere of radius 3 cm (in terms of π).',
      explanation: 'Volume = (4/3) π (3)³ = (4/3) × 27 π = 36π cm³.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '36π cm³', isCorrect: true },
        { optionLabel: 'B', optionText: '108π cm³', isCorrect: false },
        { optionLabel: 'C', optionText: '18π cm³', isCorrect: false },
        { optionLabel: 'D', optionText: '27π cm³', isCorrect: false },
      ],
    },
  ],
};
