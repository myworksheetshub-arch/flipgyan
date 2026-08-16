export const ch113DGeometryClass12Data = {
  classNumber: 12,
  className: 'Class 12',
  subjectName: 'Mathematics',
  subjectCode: 'MATH12',
  chapterNumber: 11,
  chapterTitle: 'Three Dimensional Geometry',
  summary: 'Direction Cosines and Ratios of a line, Equation of a line in 3D (Vector r⃗ = a⃗ + λ b⃗ and Cartesian (x-x1)/a = (y-y1)/b = (z-z1)/c), Angle between two lines, Shortest distance between two skew lines.',
  contentMarkdown: `# Chapter 11: Three Dimensional Geometry (Class 12 Mathematics NEP 2025)

## 1. Line Equations in 3D
- **Vector Form**: $\\vec{r} = \\vec{a} + \\lambda \\vec{b}$
- **Cartesian Form**:
  $$\\frac{x - x_1}{a} = \\frac{y - y_1}{b} = \\frac{z - z_1}{c}$$

## 2. Shortest Distance Between Skew Lines
For lines $\\vec{r} = \\vec{a}_1 + \\lambda \\vec{b}_1$ and $\\vec{r} = \\vec{a}_2 + \\mu \\vec{b}_2$:
$$d = \\left| \\frac{(\\vec{b}_1 \\times \\vec{b}_2) \\cdot (\\vec{a}_2 - \\vec{a}_1)}{|\\vec{b}_1 \\times \\vec{b}_2|} \\right|$$
- **Parallel Lines**: $d = \\left| \\frac{\\vec{b} \\times (\\vec{a}_2 - \\vec{a}_1)}{|\\vec{b}|} \\right|$
`,
  mindMapNodes: [
    {
      id: 'root',
      label: '3D Lines Geometry',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'skew-lines',
          label: 'Skew Lines & Distance',
          type: 'category',
          children: [
            { id: 'vec-line-eq', label: 'r⃗ = a⃗ + λ b⃗', type: 'concept' },
            { id: 'shortest-dist', label: 'd = |(b1 × b2) · (a2 - a1)| / |b1 × b2|', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C12-MATH-CH11-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'If a line has Direction Ratios 2, -1, -2, find its Direction Cosines.',
      explanation: '√(2² + (-1)² + (-2)²) = √(4 + 1 + 4) = 3. Direction Cosines l, m, n = 2/3, -1/3, -2/3.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '2/3, -1/3, -2/3', isCorrect: true },
        { optionLabel: 'B', optionText: '2/9, -1/9, -2/9', isCorrect: false },
        { optionLabel: 'C', optionText: '1/3, 2/3, -2/3', isCorrect: false },
        { optionLabel: 'D', optionText: '2, -1, -2', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH11-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the Vector Equation of a line passing through (5, 2, -4) and parallel to the vector 3î + 2ĵ - 8k̂.',
      explanation: 'r⃗ = a⃗ + λ b⃗ = (5î + 2ĵ - 4k̂) + λ (3î + 2ĵ - 8k̂).',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'r⃗ = (5î + 2ĵ - 4k̂) + λ (3î + 2ĵ - 8k̂)', isCorrect: true },
        { optionLabel: 'B', optionText: 'r⃗ = (3î + 2ĵ - 8k̂) + λ (5î + 2ĵ - 4k̂)', isCorrect: false },
        { optionLabel: 'C', optionText: 'r⃗ = (5î + 2ĵ + 4k̂) + λ (3î - 2ĵ - 8k̂)', isCorrect: false },
        { optionLabel: 'D', optionText: '(x-5)/3 = (y-2)/2 = (z+4)/-8', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH11-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the angle between the pair of lines given by r⃗ = (2î - 5ĵ + k̂) + λ(3î + 2ĵ + 6k̂) and r⃗ = (7î - 6k̂) + μ(î + 2ĵ + 2k̂).',
      explanation: 'cos θ = |b⃗₁ · b⃗₂| / (|b⃗₁||b⃗₂|) = |3(1) + 2(2) + 6(2)| / (√(9+4+36) √(1+4+4)) = (3 + 4 + 12) / (7 × 3) = 19 / 21. θ = cos⁻¹(19/21).',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'cos⁻¹(19 / 21)', isCorrect: true },
        { optionLabel: 'B', optionText: 'cos⁻¹(17 / 21)', isCorrect: false },
        { optionLabel: 'C', optionText: 'cos⁻¹(19 / 25)', isCorrect: false },
        { optionLabel: 'D', optionText: '60°', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH11-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'Find the value of p so that the lines (1-x)/3 = (7y-14)/2p = (z-3)/2 and (7-7x)/3p = (y-5)/1 = (6-z)/5 are PERPENDICULAR.',
      explanation: 'Rewrite in standard form: (x-1)/-3 = (y-2)/(2p/7) = (z-3)/2 and (x-1)/(-3p/7) = (y-5)/1 = (z-6)/-5. Perpendicular => a1 a2 + b1 b2 + c1 c2 = 0 => (-3)(-3p/7) + (2p/7)(1) + (2)(-5) = 0 => 9p/7 + 2p/7 - 10 = 0 => 11p/7 = 10 => p = 70/11.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'p = 70/11', isCorrect: true },
        { optionLabel: 'B', optionText: 'p = 11/70', isCorrect: false },
        { optionLabel: 'C', optionText: 'p = 7', isCorrect: false },
        { optionLabel: 'D', optionText: 'p = -70/11', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH11-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [CBSE Board/JEE Main] Find the shortest distance between the lines r⃗ = (î + 2ĵ + k̂) + λ(î - ĵ + k̂) and r⃗ = (2î - ĵ - k̂) + μ(2î + ĵ + 2k̂).',
      explanation: 'a2 - a1 = î - 3ĵ - 2k̂. b1 × b2 = |i j k; 1 -1 1; 2 1 2| = -3î + 0ĵ + 3k̂. |b1 × b2| = √18 = 3√2. (b1 × b2) · (a2 - a1) = -3(1) + 0 + 3(-2) = -9. SD = |-9| / 3√2 = 3 / √2 = 3√2 / 2 units.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '3 / √2 units (3√2 / 2)', isCorrect: true },
        { optionLabel: 'B', optionText: '9 / √2 units', isCorrect: false },
        { optionLabel: 'C', optionText: '3 units', isCorrect: false },
        { optionLabel: 'D', optionText: '6 / √2 units', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH11-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] Find the Cartesian equation of the line passing through A(2, -1, 4) and B(1, 1, -2).',
      explanation: 'Direction Ratios = 1-2, 1-(-1), -2-4 = -1, 2, -6. Line: (x - 2)/-1 = (y + 1)/2 = (z - 4)/-6 or (x - 2)/1 = (y + 1)/-2 = (z - 4)/6.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '(x - 2)/1 = (y + 1)/-2 = (z - 4)/6', isCorrect: true },
        { optionLabel: 'B', optionText: '(x - 2)/2 = (y + 1)/-1 = (z - 4)/4', isCorrect: false },
        { optionLabel: 'C', optionText: '(x - 1)/2 = (y - 1)/-1 = (z + 2)/4', isCorrect: false },
        { optionLabel: 'D', optionText: '(x - 2)/-1 = (y + 1)/1 = (z - 4)/-2', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH11-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'If l, m, n are Direction Cosines of any 3D line, what is the value of l² + m² + n²?',
      explanation: 'Sum of squares of direction cosines is always equal to 1 (cos²α + cos²β + cos²γ = 1).',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '1', isCorrect: true },
        { optionLabel: 'B', optionText: '0', isCorrect: false },
        { optionLabel: 'C', optionText: '3', isCorrect: false },
        { optionLabel: 'D', optionText: '2', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH11-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the distance between the parallel lines r⃗ = (î + 2ĵ - 4k̂) + λ(2î + 3ĵ + 6k̂) and r⃗ = (3î + 3ĵ - 5k̂) + μ(2î + 3ĵ + 6k̂).',
      explanation: 'a2 - a1 = 2î + ĵ - k̂. b⃗ = 2î + 3ĵ + 6k̂ (|b⃗| = 7). b⃗ × (a2 - a1) = |i j k; 2 3 6; 2 1 -1| = -9i + 14j - 4k. Magnitude = √(81 + 196 + 16) = √293. Distance = √293 / 7 units.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '√293 / 7 units', isCorrect: true },
        { optionLabel: 'B', optionText: '√293 / 49 units', isCorrect: false },
        { optionLabel: 'C', optionText: '7 / √293 units', isCorrect: false },
        { optionLabel: 'D', optionText: '3 units', isCorrect: false },
      ],
    },
  ],
};
