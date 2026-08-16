export const ch10ConicSectionsClass11Data = {
  classNumber: 11,
  className: 'Class 11',
  subjectName: 'Mathematics',
  subjectCode: 'MATH11',
  chapterNumber: 10,
  chapterTitle: 'Conic Sections',
  summary: 'Circle (x-h)² + (y-k)² = r², Parabola y² = 4ax (Focus, Directrix, Latus Rectum = 4a), Ellipse x²/a² + y²/b² = 1 (eccentricity e = √(1 - b²/a²)), Hyperbola x²/a² - y²/b² = 1.',
  contentMarkdown: `# Chapter 10: Conic Sections (Class 11 Mathematics NEP 2025)

## 1. Circle
$$(x - h)^2 + (y - k)^2 = r^2$$

## 2. Parabola ($y^2 = 4ax$)
- **Focus**: $(a, 0)$
- **Directrix**: $x = -a$
- **Latus Rectum Length**: $4a$

## 3. Ellipse ($x^2/a^2 + y^2/b^2 = 1, a > b$)
- **Eccentricity**: $e = \\sqrt{1 - \\frac{b^2}{a^2}} = \\frac{c}{a}$
- **Foci**: $(\\pm c, 0) = (\\pm ae, 0)$
- **Latus Rectum Length**: $\\frac{2b^2}{a}$

## 4. Hyperbola ($x^2/a^2 - y^2/b^2 = 1$)
- **Eccentricity**: $e = \\sqrt{1 + \\frac{b^2}{a^2}}$
- **Foci**: $(\\pm ae, 0)$
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Conic Sections',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'conics-types',
          label: '4 Standard Conics',
          type: 'category',
          children: [
            { id: 'circle-eq', label: '(x-h)² + (y-k)² = r²', type: 'concept' },
            { id: 'parabola-eq', label: 'Parabola y² = 4ax (Latus Rectum = 4a)', type: 'concept' },
            { id: 'ellipse-eq', label: 'Ellipse e = √(1 - b²/a²)', type: 'concept' },
            { id: 'hyperbola-eq', label: 'Hyperbola e = √(1 + b²/a²)', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C11-MATH-CH10-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the center and radius of the circle x² + y² - 4x - 8y - 45 = 0.',
      explanation: '(x - 2)² + (y - 4)² = 45 + 4 + 16 = 65. Center is (2, 4) and radius is √65.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Center (2, 4), Radius √65', isCorrect: true },
        { optionLabel: 'B', optionText: 'Center (-2, -4), Radius 65', isCorrect: false },
        { optionLabel: 'C', optionText: 'Center (4, 8), Radius 45', isCorrect: false },
        { optionLabel: 'D', optionText: 'Center (2, 4), Radius 45', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH10-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the coordinates of the focus and the length of the latus rectum for the parabola y² = 12x.',
      explanation: '4a = 12 => a = 3. Focus = (a, 0) = (3, 0). Length of Latus Rectum = 4a = 12.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Focus (3, 0), Latus Rectum 12', isCorrect: true },
        { optionLabel: 'B', optionText: 'Focus (0, 3), Latus Rectum 12', isCorrect: false },
        { optionLabel: 'C', optionText: 'Focus (6, 0), Latus Rectum 6', isCorrect: false },
        { optionLabel: 'D', optionText: 'Focus (3, 0), Latus Rectum 3', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH10-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'Find the eccentricity e and foci of the ellipse x² / 25 + y² / 9 = 1.',
      explanation: 'a² = 25 (a=5), b² = 9 (b=3). e = √(1 - 9/25) = √(16/25) = 4/5. c = ae = 5(4/5) = 4. Foci = (±4, 0).',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'e = 4/5, Foci (±4, 0)', isCorrect: true },
        { optionLabel: 'B', optionText: 'e = 3/5, Foci (±3, 0)', isCorrect: false },
        { optionLabel: 'C', optionText: 'e = 4/5, Foci (0, ±4)', isCorrect: false },
        { optionLabel: 'D', optionText: 'e = 16/25, Foci (±4, 0)', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH10-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'Find the equation of the hyperbola with foci (±5, 0) and transverse axis of length 8.',
      explanation: 'Transverse axis 2a = 8 => a = 4 (a² = 16). Foci (±c, 0) = (±5, 0) => c = 5. c² = a² + b² => 25 = 16 + b² => b² = 9. Equation: x²/16 - y²/9 = 1.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'x² / 16 - y² / 9 = 1', isCorrect: true },
        { optionLabel: 'B', optionText: 'x² / 9 - y² / 16 = 1', isCorrect: false },
        { optionLabel: 'C', optionText: 'x² / 25 - y² / 16 = 1', isCorrect: false },
        { optionLabel: 'D', optionText: 'x² / 16 + y² / 9 = 1', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH10-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [JEE Main / Olympiad] An arch is in the form of a parabola with its axis vertical. The arch is 10 m high and 5 m wide at the base. How wide is it 2 m from the vertex of the parabola?',
      explanation: 'Parabola: x² = 4ay. At base y = 10, x = 2.5 (5/2). (2.5)² = 4a(10) => 6.25 = 40a => 4a = 5/32. At y = 2: x² = (5/32)(2) = 5/16 => x = √5/4 ≈ 0.559 m. Width = 2x = √5/2 ≈ 1.118 m.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '√5 / 2 m (1.118 m)', isCorrect: true },
        { optionLabel: 'B', optionText: '2.5 m', isCorrect: false },
        { optionLabel: 'C', optionText: '√5 m', isCorrect: false },
        { optionLabel: 'D', optionText: '1.5 m', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH10-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] Find the eccentricity of an EQUILATERAL (RECTANGULAR) HYPERBOLA x² - y² = a².',
      explanation: 'For rectangular hyperbola, a = b. e = √(1 + b²/a²) = √(1 + 1) = √2.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '√2', isCorrect: true },
        { optionLabel: 'B', optionText: '2', isCorrect: false },
        { optionLabel: 'C', optionText: '1 / √2', isCorrect: false },
        { optionLabel: 'D', optionText: '√3', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH10-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'What is the eccentricity e of any CIRCLE?',
      explanation: 'For a circle, semi-minor and semi-major axes are equal (b = a), so e = √(1 - a²/a²) = 0.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '0', isCorrect: true },
        { optionLabel: 'B', optionText: '1', isCorrect: false },
        { optionLabel: 'C', optionText: 'Infinity', isCorrect: false },
        { optionLabel: 'D', optionText: '1/2', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH10-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the length of latus rectum of the hyperbola 9y² - 4x² = 36.',
      explanation: 'y²/4 - x²/9 = 1. Vertical hyperbola: b² = 4 (b=2), a² = 9 (a=3). Latus rectum = 2a² / b = 2(9) / 2 = 9 units.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '9 units', isCorrect: true },
        { optionLabel: 'B', optionText: '4.5 units', isCorrect: false },
        { optionLabel: 'C', optionText: '18 units', isCorrect: false },
        { optionLabel: 'D', optionText: '6 units', isCorrect: false },
      ],
    },
  ],
};
