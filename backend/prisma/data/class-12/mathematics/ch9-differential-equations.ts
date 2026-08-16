export const ch9DifferentialEquationsClass12Data = {
  classNumber: 12,
  className: 'Class 12',
  subjectName: 'Mathematics',
  subjectCode: 'MATH12',
  chapterNumber: 9,
  chapterTitle: 'Differential Equations',
  summary: 'Order and Degree of differential equation, General and Particular solutions, Variable Separable method, Homogeneous DEs dy/dx = f(x,y)/g(x,y), Linear DEs dy/dx + P y = Q with Integrating Factor IF = e^(∫P dx).',
  contentMarkdown: `# Chapter 9: Differential Equations (Class 12 Mathematics NEP 2025)

## 1. Order and Degree
- **Order**: Highest derivative present in the equation.
- **Degree**: Highest power of highest order derivative (when polynomial in derivatives).

## 2. First Order Linear DE
$$\\frac{dy}{dx} + P(x) y = Q(x)$$
- **Integrating Factor (IF)**:
  $$IF = e^{\\int P(x) \\, dx}$$
- **General Solution**:
  $$y \\cdot (IF) = \\int Q(x) \\cdot (IF) \\, dx + C$$
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Differential Equations',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'linear-de',
          label: 'Linear DE Solution',
          type: 'category',
          children: [
            { id: 'if-calc', label: 'IF = e^(∫P dx)', type: 'concept' },
            { id: 'gen-sol-de', label: 'y × (IF) = ∫ Q × (IF) dx + C', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C12-MATH-CH9-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'Find the Order and Degree of the differential equation: (d²y/dx²)³ + (dy/dx)² + sin(dy/dx) + 1 = 0.',
      explanation: 'Order = 2 (highest derivative is d²y/dx²). Degree is NOT DEFINED because the equation is not a polynomial in derivatives (due to sin(dy/dx)).',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Order = 2, Degree = Not Defined', isCorrect: true },
        { optionLabel: 'B', optionText: 'Order = 2, Degree = 3', isCorrect: false },
        { optionLabel: 'C', optionText: 'Order = 3, Degree = 2', isCorrect: false },
        { optionLabel: 'D', optionText: 'Order = 1, Degree = 1', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH9-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the Integrating Factor (IF) for the linear differential equation: dy/dx + y sec x = tan x.',
      explanation: 'P(x) = sec x. IF = e^(∫ sec x dx) = e^(ln|sec x + tan x|) = sec x + tan x.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'sec x + tan x', isCorrect: true },
        { optionLabel: 'B', optionText: 'sec x', isCorrect: false },
        { optionLabel: 'C', optionText: 'e^(sec x)', isCorrect: false },
        { optionLabel: 'D', optionText: 'tan x', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH9-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Solve the differential equation: dy/dx = (1 + y²) / (1 + x²).',
      explanation: 'Separating variables: dy / (1 + y²) = dx / (1 + x²). Integrating: tan⁻¹ y = tan⁻¹ x + C.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'tan⁻¹ y = tan⁻¹ x + C', isCorrect: true },
        { optionLabel: 'B', optionText: 'y = x + C', isCorrect: false },
        { optionLabel: 'C', optionText: 'ln(1 + y²) = ln(1 + x²) + C', isCorrect: false },
        { optionLabel: 'D', optionText: 'tan⁻¹(y - x) = C', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH9-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'Find the general solution of the differential equation: dy/dx + (1/x) y = x².',
      explanation: 'P = 1/x. IF = e^(∫ (1/x) dx) = e^(ln x) = x. Solution: y · x = ∫ x · x² dx = ∫ x³ dx = x⁴ / 4 + C => y = x³ / 4 + C / x.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'y = x³ / 4 + C / x', isCorrect: true },
        { optionLabel: 'B', optionText: 'y = x³ + C', isCorrect: false },
        { optionLabel: 'C', optionText: 'y x = x³ / 3 + C', isCorrect: false },
        { optionLabel: 'D', optionText: 'y = x⁴ / 4 + C', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH9-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [CBSE Board/JEE Main] Solve the Homogeneous Differential Equation: (x² + y²) dx - 2xy dy = 0.',
      explanation: 'dy/dx = (x² + y²) / (2xy). Substitute y = v x. v + x dv/dx = (1 + v²) / (2v) => x dv/dx = (1 - v²) / (2v) => 2v dv / (1 - v²) = dx / x. -ln|1 - v²| = ln|x| + C => x(1 - y²/x²) = C => x² - y² = C x.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'x² - y² = C x', isCorrect: true },
        { optionLabel: 'B', optionText: 'x² + y² = C x', isCorrect: false },
        { optionLabel: 'C', optionText: 'x - y = C x²', isCorrect: false },
        { optionLabel: 'D', optionText: 'y² - x² = C', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH9-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] Find the particular solution of dy/dx + 2y tan x = sin x given y = 0 when x = π/3.',
      explanation: 'IF = e^(2∫ tan x dx) = e^(2 ln|sec x|) = sec²x. y sec²x = ∫ sin x sec²x dx = ∫ sec x tan x dx = sec x + C. At x = π/3, sec(π/3) = 2 => 0 = 2 + C => C = -2. y sec²x = sec x - 2 => y = cos x - 2 cos²x.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'y = cos x - 2 cos²x', isCorrect: true },
        { optionLabel: 'B', optionText: 'y = cos x + 2 cos²x', isCorrect: false },
        { optionLabel: 'C', optionText: 'y = sin x - 2 cos x', isCorrect: false },
        { optionLabel: 'D', optionText: 'y = cos x - 2', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH9-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'What is the number of arbitrary constants in the GENERAL solution of a differential equation of order 4?',
      explanation: 'The number of arbitrary constants in a General Solution of order n is equal to n (4).',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '4', isCorrect: true },
        { optionLabel: 'B', optionText: '0', isCorrect: false },
        { optionLabel: 'C', optionText: '3', isCorrect: false },
        { optionLabel: 'D', optionText: '1', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH9-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the Integrating Factor for the differential equation x (dy/dx) - y = 2x².',
      explanation: 'dy/dx - (1/x)y = 2x. P(x) = -1/x. IF = e^(∫ -1/x dx) = e^(-ln x) = e^(ln(1/x)) = 1/x.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '1/x', isCorrect: true },
        { optionLabel: 'B', optionText: 'x', isCorrect: false },
        { optionLabel: 'C', optionText: '-x', isCorrect: false },
        { optionLabel: 'D', optionText: 'e^x', isCorrect: false },
      ],
    },
  ],
};
