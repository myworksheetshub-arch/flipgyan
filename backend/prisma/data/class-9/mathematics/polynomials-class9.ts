export const polynomialsClass9Data = {
  classNumber: 9,
  className: 'Class 9',
  subjectName: 'Mathematics',
  subjectCode: 'MATH9',
  chapterNumber: 2,
  chapterTitle: 'Polynomials',
  summary: 'Polynomials in one variable, degree of polynomial, zeroes of a polynomial, Remainder Theorem, Factor Theorem, and Algebraic Identities.',
  contentMarkdown: `# Chapter 2: Polynomials (Class 9 Mathematics)

## 1. Polynomial Terms & Degree
- Polynomial in $x$: $p(x) = a_n x^n + a_{n-1} x^{n-1} + \\dots + a_1 x + a_0$.
- **Degree**: Highest power of $x$ in $p(x)$.
  - Degree 1: Linear ($ax + b$)
  - Degree 2: Quadratic ($ax^2 + bx + c$)
  - Degree 3: Cubic ($ax^3 + bx^2 + cx + d$)

## 2. Factor Theorem
If $p(x)$ is a polynomial of degree $n \\ge 1$ and $a$ is any real number:
1. $(x - a)$ is a factor of $p(x)$ if $p(a) = 0$.
2. $p(a) = 0$ if $(x - a)$ is a factor of $p(x)$.

## 3. Key Algebraic Identities
- $(x + y + z)^2 = x^2 + y^2 + z^2 + 2xy + 2yz + 2zx$
- $(x + y)^3 = x^3 + y^3 + 3xy(x + y)$
- $x^3 + y^3 + z^3 - 3xyz = (x + y + z)(x^2 + y^2 + z^2 - xy - yz - zx)$
  - If $x + y + z = 0$, then $x^3 + y^3 + z^3 = 3xyz$.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Polynomials (Class 9)',
      type: 'root',
      color: '#2563eb',
      children: [
        {
          id: 'theorems',
          label: 'Theorems & Zeroes',
          type: 'category',
          children: [
            { id: 'zeroes', label: 'Zeroes of p(x): p(a) = 0', type: 'concept' },
            { id: 'factor-thm', label: 'Factor Theorem: (x - a) is factor iff p(a) = 0', type: 'concept' },
          ],
        },
        {
          id: 'identities',
          label: 'Algebraic Identities',
          type: 'category',
          children: [
            { id: 'cubic-id', label: 'If x+y+z=0 => x^3+y^3+z^3 = 3xyz', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C9-MATH-POL-001',
      questionText: 'If x + y + z = 0, what is the value of x³ + y³ + z³?',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: '3xyz', isCorrect: true, explanation: 'If x + y + z = 0, then x³ + y³ + z³ - 3xyz = 0 × (...) = 0, so x³ + y³ + z³ = 3xyz.' },
        { text: '0', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'xyz', isCorrect: false, explanation: 'Incorrect.' },
        { text: '3(x + y + z)', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'From identity x³ + y³ + z³ - 3xyz = (x + y + z)(x² + y² + z² - xy - yz - zx), setting x+y+z = 0 yields x³ + y³ + z³ = 3xyz.',
    },
  ],
};
