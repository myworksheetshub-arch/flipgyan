export const ch8ApplicationOfIntegralsClass12Data = {
  classNumber: 12,
  className: 'Class 12',
  subjectName: 'Mathematics',
  subjectCode: 'MATH12',
  chapterNumber: 8,
  chapterTitle: 'Application of Integrals',
  summary: 'Area under simple curves (lines, circles, parabolas, ellipses), Area bounded between a curve and a line or between two curves.',
  contentMarkdown: `# Chapter 8: Application of Integrals (Class 12 Mathematics NEP 2025)

## 1. Area Under Curve
- Bounded by $y = f(x)$, x-axis, and $x = a, x = b$:
  $$\\text{Area} = \\int_{a}^{b} f(x) \\, dx = \\int_{a}^{b} y \\, dx$$
- Bounded by $x = g(y)$, y-axis, and $y = c, y = d$:
  $$\\text{Area} = \\int_{c}^{d} g(y) \\, dy = \\int_{c}^{d} x \\, dy$$

## 2. Standard Area Formulas
- **Circle ($x^2 + y^2 = a^2$)**: Total Area $= \\pi a^2$.
- **Ellipse ($x^2/a^2 + y^2/b^2 = 1$)**: Total Area $= \\pi a b$.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Application of Integrals',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'area-bounded',
          label: 'Area Bounded by Curves',
          type: 'category',
          children: [
            { id: 'area-f-x', label: 'Area = ∫ y dx (from a to b)', type: 'concept' },
            { id: 'ellipse-area', label: 'Ellipse Area = π a b', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C12-MATH-CH8-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the area of the region bounded by the circle x² + y² = 16.',
      explanation: 'Radius a = 4. Area of full circle = π a² = π (4²) = 16π sq units.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '16π sq units', isCorrect: true },
        { optionLabel: 'B', optionText: '4π sq units', isCorrect: false },
        { optionLabel: 'C', optionText: '8π sq units', isCorrect: false },
        { optionLabel: 'D', optionText: '32π sq units', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH8-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the area of the region bounded by the ellipse x² / 16 + y² / 9 = 1.',
      explanation: 'a = 4, b = 3. Total area of ellipse = π a b = π (4)(3) = 12π sq units.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '12π sq units', isCorrect: true },
        { optionLabel: 'B', optionText: '144π sq units', isCorrect: false },
        { optionLabel: 'C', optionText: '7n sq units', isCorrect: false },
        { optionLabel: 'D', optionText: '24π sq units', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH8-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'Find the area of the region bounded by the curve y² = x and the lines x = 1, x = 4 and the X-axis in the FIRST QUADRANT.',
      explanation: 'Area = ∫_{1}^{4} √x dx = [(2/3) x^(3/2)]_{1}^{4} = (2/3)[4^(3/2) - 1] = (2/3)[8 - 1] = 14/3 sq units.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '14/3 sq units', isCorrect: true },
        { optionLabel: 'B', optionText: '28/3 sq units', isCorrect: false },
        { optionLabel: 'C', optionText: '7/3 sq units', isCorrect: false },
        { optionLabel: 'D', optionText: '16/3 sq units', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH8-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'Find the area bounded by the curve y = cos x between x = 0 and x = 2π.',
      explanation: 'Area = 4 × ∫_{0}^{π/2} cos x dx = 4 [sin x]_{0}^{π/2} = 4 (1 - 0) = 4 sq units.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '4 sq units', isCorrect: true },
        { optionLabel: 'B', optionText: '0 sq units', isCorrect: false },
        { optionLabel: 'C', optionText: '2 sq units', isCorrect: false },
        { optionLabel: 'D', optionText: '1 sq unit', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH8-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [CBSE Board/JEE Main] Find the area of the region bounded by the parabola y² = 4x and the line y = mx.',
      explanation: 'Points of intersection: (4/m², 4/m). Area = ∫_{0}^{4/m²} (2√x - mx) dx = [(4/3)x^(3/2) - mx²/2]_{0}^{4/m²} = 32/(3m³) - 8/m³ = 8 / (3 m³) sq units.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '8 / (3 m³) sq units', isCorrect: true },
        { optionLabel: 'B', optionText: '4 / (3 m²) sq units', isCorrect: false },
        { optionLabel: 'C', optionText: '16 / (3 m³) sq units', isCorrect: false },
        { optionLabel: 'D', optionText: '8 / (3 m) sq units', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH8-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] Find the area of the region enclosed between the two parabolas y² = 4ax and x² = 4ay.',
      explanation: 'Intersection points: (0, 0) and (4a, 4a). Area = ∫_{0}^{4a} (2√a √x - x²/(4a)) dx = [(4/3)√a x^(3/2) - x³/(12a)]_{0}^{4a} = (32/3)a² - (16/3)a² = 16 a² / 3 sq units.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '16 a² / 3 sq units', isCorrect: true },
        { optionLabel: 'B', optionText: '8 a² / 3 sq units', isCorrect: false },
        { optionLabel: 'C', optionText: '16 a² sq units', isCorrect: false },
        { optionLabel: 'D', optionText: '4 a² / 3 sq units', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH8-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'The area of the region bounded by the line y = x, X-axis, and ordinates x = 0 and x = 3 is:',
      explanation: 'Area = ∫_{0}^{3} x dx = [x²/2]_{0}^{3} = 9/2 = 4.5 sq units.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '4.5 sq units', isCorrect: true },
        { optionLabel: 'B', optionText: '9 sq units', isCorrect: false },
        { optionLabel: 'C', optionText: '3 sq units', isCorrect: false },
        { optionLabel: 'D', optionText: '6 sq units', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH8-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the area of the region bounded by y = |x| and y = 1.',
      explanation: 'V-shape from x = -1 to 1. Area = 2 × (1/2 × 1 × 1) = 1 sq unit (or ∫_{-1}^{1} (1 - |x|) dx = 1).',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '1 sq unit', isCorrect: true },
        { optionLabel: 'B', optionText: '2 sq units', isCorrect: false },
        { optionLabel: 'C', optionText: '0.5 sq units', isCorrect: false },
        { optionLabel: 'D', optionText: '4 sq units', isCorrect: false },
      ],
    },
  ],
};
