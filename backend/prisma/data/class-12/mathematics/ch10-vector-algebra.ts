export const ch10VectorAlgebraClass12Data = {
  classNumber: 12,
  className: 'Class 12',
  subjectName: 'Mathematics',
  subjectCode: 'MATH12',
  chapterNumber: 10,
  chapterTitle: 'Vector Algebra',
  summary: 'Vectors and Scalars, Magnitude |a|, Position Vector, Direction Cosines (l, m, n) and Direction Ratios, Vector Addition, Dot Product (a · b = |a||b| cos θ), Cross Product (a × b = |a||b| sin θ n̂), Projection of a vector on another.',
  contentMarkdown: `# Chapter 10: Vector Algebra (Class 12 Mathematics NEP 2025)

## 1. Dot Product (Scalar Product)
$$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| |\\vec{b}| \\cos \\theta$$
- **Perpendicularity**: $\\vec{a} \\perp \\vec{b} \\iff \\vec{a} \\cdot \\vec{b} = 0$.
- **Projection of $\\vec{a}$ on $\\vec{b}$**:
  $$\\text{Projection} = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|}$$

## 2. Cross Product (Vector Product)
$$\\vec{a} \\times \\vec{b} = (|\\vec{a}| |\\vec{b}| \\sin \\theta) \\hat{n}$$
- **Area of Triangle** with adjacent vector sides $\\vec{a}, \\vec{b}$:
  $$\\text{Area} = \\frac{1}{2} |\\vec{a} \\times \\vec{b}|$$
- **Area of Parallelogram**:
  $$\\text{Area} = |\\vec{a} \\times \\vec{b}|$$
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Vector Algebra',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'dot-cross',
          label: 'Dot & Cross Products',
          type: 'category',
          children: [
            { id: 'dot-prod', label: 'a · b = |a||b| cos θ (Perp => a·b = 0)', type: 'concept' },
            { id: 'cross-prod', label: 'a × b = |a||b| sin θ n̂', type: 'concept' },
            { id: 'proj', label: 'Projection of a on b = (a · b) / |b|', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C12-MATH-CH10-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'Find the magnitude of the vector a⃗ = 2î - 3ĵ + 6k̂.',
      explanation: '|a⃗| = √(2² + (-3)² + 6²) = √(4 + 9 + 36) = √49 = 7.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '7', isCorrect: true },
        { optionLabel: 'B', optionText: '5', isCorrect: false },
        { optionLabel: 'C', optionText: '49', isCorrect: false },
        { optionLabel: 'D', optionText: '11', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH10-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the unit vector in the direction of vector a⃗ = î + ĵ + 2k̂.',
      explanation: '|a⃗| = √(1 + 1 + 4) = √6. Unit vector â = a⃗ / |a⃗| = (î + ĵ + 2k̂) / √6.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '(î + ĵ + 2k̂) / √6', isCorrect: true },
        { optionLabel: 'B', optionText: '(î + ĵ + 2k̂) / 6', isCorrect: false },
        { optionLabel: 'C', optionText: '(î + ĵ + k̂) / √3', isCorrect: false },
        { optionLabel: 'D', optionText: '(î - ĵ + 2k̂) / √6', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH10-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the projection of vector a⃗ = 2î + 3ĵ + 2k̂ on vector b⃗ = î + 2ĵ + k̂.',
      explanation: 'Projection = (a⃗ · b⃗) / |b⃗|. a⃗ · b⃗ = 2(1) + 3(2) + 2(1) = 10. |b⃗| = √(1 + 4 + 1) = √6. Projection = 10 / √6 = 5√6 / 3 units.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '10 / √6 units', isCorrect: true },
        { optionLabel: 'B', optionText: '6 / √10 units', isCorrect: false },
        { optionLabel: 'C', optionText: '10 units', isCorrect: false },
        { optionLabel: 'D', optionText: '5 units', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH10-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'Find the value of λ for which vectors a⃗ = 2î + λĵ + k̂ and b⃗ = î - 2ĵ + 3k̂ are PERPENDICULAR.',
      explanation: 'a⃗ ⊥ b⃗ => a⃗ · b⃗ = 0 => 2(1) + λ(-2) + 1(3) = 0 => 2 - 2λ + 3 = 0 => 2λ = 5 => λ = 5/2.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'λ = 5/2', isCorrect: true },
        { optionLabel: 'B', optionText: 'λ = -5/2', isCorrect: false },
        { optionLabel: 'C', optionText: 'λ = 2/5', isCorrect: false },
        { optionLabel: 'D', optionText: 'λ = 5', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH10-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [CBSE Board/JEE Main] If a⃗, b⃗, c⃗ are unit vectors such that a⃗ + b⃗ + c⃗ = 0⃗, find the value of (a⃗ · b⃗ + b⃗ · c⃗ + c⃗ · a⃗).',
      explanation: '|a⃗ + b⃗ + c⃗|² = |a⃗|² + |b⃗|² + |c⃗|² + 2(a⃗ · b⃗ + b⃗ · c⃗ + c⃗ · a⃗) = 0. 1 + 1 + 1 + 2(S) = 0 => 2S = -3 => S = -3/2.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '-3/2', isCorrect: true },
        { optionLabel: 'B', optionText: '3/2', isCorrect: false },
        { optionLabel: 'C', optionText: '-3', isCorrect: false },
        { optionLabel: 'D', optionText: '0', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH10-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] Find the area of the parallelogram whose diagonals are given by d⃗₁ = 3î + ĵ - 2k̂ and d⃗₂ = î - 3ĵ + 4k̂.',
      explanation: 'Area = (1/2) |d⃗₁ × d⃗₂|. d⃗₁ × d⃗₂ = |i j k; 3 1 -2; 1 -3 4| = i(-2) - j(14) + k(-10) = -2i - 14j - 10k. Magnitude = √(4 + 196 + 100) = √300 = 10√3. Area = (1/2) × 10√3 = 5√3 sq units.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '5√3 sq units', isCorrect: true },
        { optionLabel: 'B', optionText: '10√3 sq units', isCorrect: false },
        { optionLabel: 'C', optionText: '15 sq units', isCorrect: false },
        { optionLabel: 'D', optionText: '25 sq units', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH10-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'Evaluate the dot product î · (ĵ × k̂) + ĵ · (î × k̂) + k̂ · (î × ĵ).',
      explanation: 'ĵ × k̂ = î => î · î = 1. î × k̂ = -ĵ => ĵ · (-ĵ) = -1. î × ĵ = k̂ => k̂ · k̂ = 1. Sum = 1 - 1 + 1 = 1.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '1', isCorrect: true },
        { optionLabel: 'B', optionText: '3', isCorrect: false },
        { optionLabel: 'C', optionText: '0', isCorrect: false },
        { optionLabel: 'D', optionText: '-1', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH10-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'If |a⃗| = 2, |b⃗| = 7 and a⃗ × b⃗ = 3î + 2ĵ + 6k̂, find the angle θ between a⃗ and b⃗.',
      explanation: '|a⃗ × b⃗| = √(9 + 4 + 36) = √49 = 7. |a⃗ × b⃗| = |a⃗||b⃗| sin θ => 7 = 2 × 7 × sin θ => sin θ = 1/2 => θ = 30° (π/6).',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '30° (π/6)', isCorrect: true },
        { optionLabel: 'B', optionText: '60° (π/3)', isCorrect: false },
        { optionLabel: 'C', optionText: '45° (π/4)', isCorrect: false },
        { optionLabel: 'D', optionText: '90° (π/2)', isCorrect: false },
      ],
    },
  ],
};
