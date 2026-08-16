export const ch4DeterminantsClass12Data = {
  classNumber: 12,
  className: 'Class 12',
  subjectName: 'Mathematics',
  subjectCode: 'MATH12',
  chapterNumber: 4,
  chapterTitle: 'Determinants',
  summary: 'Determinant of order 2 and 3, Minors and Cofactors, Adjoint of a matrix adj(A), Inverse of a matrix A⁻¹ = adj(A)/|A| (|A| ≠ 0), System of linear equations using Matrix Method X = A⁻¹ B.',
  contentMarkdown: `# Chapter 4: Determinants (Class 12 Mathematics NEP 2025)

## 1. Adjoint & Inverse Properties
For non-singular matrix $A$ ($|A| \\neq 0$) of order $n$:
1. $A \\cdot (\\text{adj } A) = (\\text{adj } A) \\cdot A = |A| I_n$
2. $|\\text{adj } A| = |A|^{n - 1}$
3. $A^{-1} = \\frac{\\text{adj } A}{|A|}$
4. $|A^{-1}| = \\frac{1}{|A|}$

## 2. Solving System of Equations ($AX = B$)
- **Unique Solution**: $|A| \\neq 0 \\implies X = A^{-1} B$.
- **No Solution / Infinite**: $|A| = 0$ (check $(\\text{adj } A) B$).
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Determinants & Inverse',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'adj-inv-prop',
          label: 'Adjoint & Inverse Theorems',
          type: 'category',
          children: [
            { id: 'adj-det', label: '|adj A| = |A|^(n-1)', type: 'concept' },
            { id: 'inv-formula', label: 'A⁻¹ = adj(A) / |A|', type: 'concept' },
            { id: 'matrix-sys', label: 'X = A⁻¹ B', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C12-MATH-CH4-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'If A is a non-singular square matrix of order 3 × 3 and |A| = 5, find |adj A|.',
      explanation: '|adj A| = |A|ⁿ⁻¹ = 5³⁻¹ = 5² = 25.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '25', isCorrect: true },
        { optionLabel: 'B', optionText: '125', isCorrect: false },
        { optionLabel: 'C', optionText: '5', isCorrect: false },
        { optionLabel: 'D', optionText: '1/5', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH4-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Evaluate the determinant: |[x, 2], [8, x]| = 0.',
      explanation: 'x² - 16 = 0 => x² = 16 => x = ±4.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'x = ±4', isCorrect: true },
        { optionLabel: 'B', optionText: 'x = 4 only', isCorrect: false },
        { optionLabel: 'C', optionText: 'x = 16', isCorrect: false },
        { optionLabel: 'D', optionText: 'x = 0', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH4-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'If A = [[2, 3], [1, 4]], find the inverse matrix A⁻¹.',
      explanation: '|A| = 8 - 3 = 5. adj(A) = [[4, -3], [-1, 2]]. A⁻¹ = (1/5) [[4, -3], [-1, 2]].',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '(1/5) [[4, -3], [-1, 2]]', isCorrect: true },
        { optionLabel: 'B', optionText: '(1/5) [[2, -3], [-1, 4]]', isCorrect: false },
        { optionLabel: 'C', optionText: '[[4, -3], [-1, 2]]', isCorrect: false },
        { optionLabel: 'D', optionText: '5 [[4, -3], [-1, 2]]', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH4-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'Find the area of the triangle with vertices (2, 7), (1, 1), and (10, 8) using determinants.',
      explanation: 'Area = (1/2) |2(1 - 8) - 7(1 - 10) + 1(8 - 10)| = (1/2) |-14 + 63 - 2| = (1/2) |47| = 47/2 = 23.5 sq units.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '47/2 sq units (23.5)', isCorrect: true },
        { optionLabel: 'B', optionText: '47 sq units', isCorrect: false },
        { optionLabel: 'C', optionText: '25 sq units', isCorrect: false },
        { optionLabel: 'D', optionText: '30 sq units', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH4-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [CBSE Board/JEE Main] If A is an invertible matrix of order 3 and |A| = 4, then |3 A⁻¹| is equal to:',
      explanation: '|3 A⁻¹| = 3³ |A⁻¹| = 27 × (1 / |A|) = 27 / 4.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '27/4', isCorrect: true },
        { optionLabel: 'B', optionText: '3/4', isCorrect: false },
        { optionLabel: 'C', optionText: '9/4', isCorrect: false },
        { optionLabel: 'D', optionText: '12', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH4-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] If A = [[a, b], [c, d]] such that ad - bc ≠ 0, then A⁻¹ is:',
      explanation: 'A⁻¹ = (1/(ad - bc)) [[d, -b], [-c, a]].',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '(1/(ad - bc)) [[d, -b], [-c, a]]', isCorrect: true },
        { optionLabel: 'B', optionText: '(1/(ad - bc)) [[a, -b], [-c, d]]', isCorrect: false },
        { optionLabel: 'C', optionText: '[[d, -b], [-c, a]]', isCorrect: false },
        { optionLabel: 'D', optionText: '(1/(ad + bc)) [[d, b], [c, a]]', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH4-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'A square matrix A is SINGULAR if its determinant |A| equals:',
      explanation: 'By definition, a matrix is singular if its determinant is zero (|A| = 0).',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '0', isCorrect: true },
        { optionLabel: 'B', optionText: '1', isCorrect: false },
        { optionLabel: 'C', optionText: '-1', isCorrect: false },
        { optionLabel: 'D', optionText: 'Not defined', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH4-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'If A is a 3 × 3 matrix and |kA| = c |A|, what is the value of c?',
      explanation: 'For a 3 × 3 matrix, |kA| = k³ |A|. Therefore c = k³.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'k³', isCorrect: true },
        { optionLabel: 'B', optionText: '3k', isCorrect: false },
        { optionLabel: 'C', optionText: 'k²', isCorrect: false },
        { optionLabel: 'D', optionText: 'k', isCorrect: false },
      ],
    },
  ],
};
