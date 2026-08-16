export const ch3MatricesClass12Data = {
  classNumber: 12,
  className: 'Class 12',
  subjectName: 'Mathematics',
  subjectCode: 'MATH12',
  chapterNumber: 3,
  chapterTitle: 'Matrices',
  summary: 'Concept of matrix, Order of matrix m × n, Types (Square, Diagonal, Scalar, Identity I, Zero), Matrix Addition, Scalar Multiplication, Matrix Multiplication (AB ≠ BA generally), Transpose A^T, Symmetric (A^T = A) and Skew-Symmetric (A^T = -A) matrices.',
  contentMarkdown: `# Chapter 3: Matrices (Class 12 Mathematics NEP 2025)

## 1. Matrix Multiplication
For matrices $A_{m \\times n}$ and $B_{n \\times p}$, product $AB$ is of order $m \\times p$.
- In general, matrix multiplication is **non-commutative**: $AB \\neq BA$.

## 2. Transpose & Symmetry
- **Transpose ($A^T$)**: Rows become columns.
- **Symmetric Matrix**: $A^T = A$
- **Skew-Symmetric Matrix**: $A^T = -A$ (All diagonal elements are zero).
- Any square matrix $A$ can be uniquely expressed as:
  $$A = \\frac{1}{2}(A + A^T) + \\frac{1}{2}(A - A^T)$$
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Matrices & Properties',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'symm-skew',
          label: 'Symmetric & Skew-Symmetric',
          type: 'category',
          children: [
            { id: 'symm', label: 'A^T = A (Symmetric)', type: 'concept' },
            { id: 'skew', label: 'A^T = -A (Skew-Symmetric, diag = 0)', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C12-MATH-CH3-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'If a matrix A has 8 elements, what are the possible orders it can have?',
      explanation: 'Factors of 8: 1×8, 8×1, 2×4, 4×2. Total 4 possible orders.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '1×8, 8×1, 2×4, 4×2', isCorrect: true },
        { optionLabel: 'B', optionText: '2×4, 4×2 only', isCorrect: false },
        { optionLabel: 'C', optionText: '1×8, 8×1 only', isCorrect: false },
        { optionLabel: 'D', optionText: '8×8', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH3-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find x and y if [[x + y, 2], [5, xy]] = [[6, 2], [5, 8]].',
      explanation: 'x + y = 6, xy = 8 => x = 4, y = 2 or x = 2, y = 4.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'x = 4, y = 2 or x = 2, y = 4', isCorrect: true },
        { optionLabel: 'B', optionText: 'x = 3, y = 3', isCorrect: false },
        { optionLabel: 'C', optionText: 'x = 6, y = 0', isCorrect: false },
        { optionLabel: 'D', optionText: 'x = 8, y = 1', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH3-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'If A is a square matrix such that A² = A, then (I + A)³ - 7A is equal to:',
      explanation: '(I + A)³ = I³ + 3I²A + 3IA² + A³ = I + 3A + 3A + A = I + 7A. So (I + A)³ - 7A = (I + 7A) - 7A = I.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'I', isCorrect: true },
        { optionLabel: 'B', optionText: 'A', isCorrect: false },
        { optionLabel: 'C', optionText: 'I - A', isCorrect: false },
        { optionLabel: 'D', optionText: '3A', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH3-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'If A and B are symmetric matrices of same order, then AB - BA is a:',
      explanation: '(AB - BA)^T = (AB)^T - (BA)^T = B^T A^T - A^T B^T = BA - AB = -(AB - BA). Therefore AB - BA is Skew-Symmetric.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Skew-Symmetric Matrix', isCorrect: true },
        { optionLabel: 'B', optionText: 'Symmetric Matrix', isCorrect: false },
        { optionLabel: 'C', optionText: 'Zero Matrix', isCorrect: false },
        { optionLabel: 'D', optionText: 'Identity Matrix', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH3-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [CBSE Board/JEE Main] If A = [[cos α, -sin α], [sin α, cos α]], then A + A^T = I if the value of α is:',
      explanation: 'A + A^T = [[2cos α, 0], [0, 2cos α]] = [[1, 0], [0, 1]] => 2cos α = 1 => cos α = 1/2 => α = π/3.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'π/3', isCorrect: true },
        { optionLabel: 'B', optionText: 'π/6', isCorrect: false },
        { optionLabel: 'C', optionText: 'π', isCorrect: false },
        { optionLabel: 'D', optionText: '3π/2', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH3-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] If A = [[1, 1], [1, 1]], then Aⁿ is equal to:',
      explanation: 'A² = 2A, A³ = 4A = 2²A. By induction, Aⁿ = 2ⁿ⁻¹ A.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '2ⁿ⁻¹ A', isCorrect: true },
        { optionLabel: 'B', optionText: '2ⁿ A', isCorrect: false },
        { optionLabel: 'C', optionText: 'n A', isCorrect: false },
        { optionLabel: 'D', optionText: '2ⁿ⁻¹ I', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH3-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'The main diagonal elements of any Skew-Symmetric matrix are always equal to:',
      explanation: 'For skew-symmetric, a_ii = -a_ii => 2 a_ii = 0 => a_ii = 0 (All zero).',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '0', isCorrect: true },
        { optionLabel: 'B', optionText: '1', isCorrect: false },
        { optionLabel: 'C', optionText: '-1', isCorrect: false },
        { optionLabel: 'D', optionText: 'Any real number', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH3-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'If A is a matrix of order 2 × 3 and B is a matrix of order 3 × 4, what is the order of matrix AB?',
      explanation: 'A(2×3) × B(3×4) = AB(2×4).',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '2 × 4', isCorrect: true },
        { optionLabel: 'B', optionText: '3 × 3', isCorrect: false },
        { optionLabel: 'C', optionText: '4 × 2', isCorrect: false },
        { optionLabel: 'D', optionText: 'Not defined', isCorrect: false },
      ],
    },
  ],
};
