export const matricesClass12Data = {
  classNumber: 12,
  className: 'Class 12',
  subjectName: 'Mathematics',
  subjectCode: 'MATH12',
  chapterNumber: 1,
  chapterTitle: 'Matrices and Determinants',
  summary: 'Types of matrices, matrix operations, transpose, symmetric & skew-symmetric matrices, determinant calculation, area of triangle, adjoint & inverse of a matrix, solving linear systems using matrix method.',
  contentMarkdown: `# Chapter 1: Matrices and Determinants (Class 12 Mathematics)

## 1. Types of Matrices
- **Column Matrix**: $A = [a_{ij}]_{m \\times 1}$
- **Row Matrix**: $B = [b_{ij}]_{1 \\times n}$
- **Square Matrix**: Number of rows = Number of columns ($m = n$).
- **Diagonal / Scalar / Identity Matrix**: $I_n = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$

## 2. Properties of Transpose
1. $(A^T)^T = A$
2. $(kA)^T = k A^T$
3. $(A + B)^T = A^T + B^T$
4. $(AB)^T = B^T A^T$ (Reversal Law)

## 3. Inverse of a Matrix & Adjoint
$$A^{-1} = \\frac{1}{|A|} \\text{adj}(A), \\quad \\text{provided } |A| \\neq 0$$
- If $|A| = 0$, matrix is **Singular** (No inverse).
- If $|A| \\neq 0$, matrix is **Non-singular**.

## 4. Solving System of Linear Equations ($AX = B$)
- $X = A^{-1} B$
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Matrices & Determinants (Class 12)',
      type: 'root',
      color: '#2563eb',
      children: [
        {
          id: 'matrices',
          label: 'Types & Transpose',
          type: 'category',
          children: [
            { id: 'types', label: 'Identity, Symmetric & Skew-Symmetric', type: 'concept' },
            { id: 'reversal', label: '(AB)^T = B^T A^T', type: 'concept' },
          ],
        },
        {
          id: 'determinants',
          label: 'Inverse & System of Equations',
          type: 'category',
          children: [
            { id: 'inverse', label: 'A^-1 = adj(A) / |A|', type: 'concept' },
            { id: 'matrix-method', label: 'AX = B => X = A^-1 B', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C12-MATH-MAT-001',
      questionText: 'For two invertible square matrices A and B of the same order, what is (AB)⁻¹ equal to?',
      difficulty: 'MEDIUM',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: 'B⁻¹ A⁻¹', isCorrect: true, explanation: '(AB)⁻¹ = B⁻¹ A⁻¹ (Reversal Law of Inverses).' },
        { text: 'A⁻¹ B⁻¹', isCorrect: false, explanation: 'Incorrect order.' },
        { text: 'A B⁻¹', isCorrect: false, explanation: 'Incorrect.' },
        { text: '(A+B)⁻¹', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'According to the Reversal Law for inverses of matrices, (AB)⁻¹ = B⁻¹ A⁻¹.',
    },
    {
      questionCode: 'C12-MATH-MAT-002',
      questionText: 'If A is a non-singular square matrix of order 3 with |A| = 5, what is the value of |adj(A)|?',
      difficulty: 'HARD',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      options: [
        { text: '25', isCorrect: true, explanation: '|adj(A)| = |A|^(n-1) = 5^(3-1) = 5² = 25.' },
        { text: '5', isCorrect: false, explanation: 'Incorrect.' },
        { text: '125', isCorrect: false, explanation: 'Incorrect.' },
        { text: '15', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'For a matrix of order n, |adj(A)| = |A|^(n-1). For n = 3 and |A| = 5: |adj(A)| = 5² = 25.',
    },
  ],
};
