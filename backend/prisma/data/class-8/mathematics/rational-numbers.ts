export const rationalNumbersClass8Data = {
  classNumber: 8,
  className: 'Class 8',
  subjectName: 'Mathematics',
  subjectCode: 'MATH8',
  chapterNumber: 1,
  chapterTitle: 'Rational Numbers',
  summary: 'Closure, commutativity, associativity, distributive law, additive inverse, multiplicative inverse, and density property of rational numbers.',
  contentMarkdown: `# Chapter 1: Rational Numbers (Class 8)

## 1. Properties of Rational Numbers
- **Distributive Property**: $a(b + c) = ab + ac$.
- **Additive Inverse**: Additive inverse of $\\frac{a}{b}$ is $-\\frac{a}{b}$ because $\\frac{a}{b} + (-\\frac{a}{b}) = 0$.
- **Multiplicative Inverse (Reciprocal)**: Multiplicative inverse of $\\frac{a}{b}$ is $\\frac{b}{a}$ because $\\frac{a}{b} \\times \\frac{b}{a} = 1$.

## 2. Rational Numbers Between Two Rational Numbers
There are infinitely many rational numbers between any two given rational numbers (Density Property).
Mean method: Between $a$ and $b$, $\\frac{a + b}{2}$ is a rational number.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Rational Numbers (Class 8)',
      type: 'root',
      color: '#6366f1',
      children: [
        {
          id: 'inverses',
          label: 'Inverses & Identities',
          type: 'category',
          children: [
            { id: 'add-inv', label: 'Additive Inverse (-a/b)', type: 'concept' },
            { id: 'mult-inv', label: 'Multiplicative Inverse (b/a)', type: 'concept' },
          ],
        },
        {
          id: 'density',
          label: 'Density Property',
          type: 'category',
          children: [
            { id: 'infinite', label: 'Infinitely Many Rational Numbers', type: 'concept' },
            { id: 'mean-method', label: 'Mean Method (a+b)/2', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C8-MATH-RAT-001',
      questionText: 'What is the multiplicative inverse of -5/9?',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: '-9/5', isCorrect: true, explanation: 'The product of -5/9 and -9/5 equals 1.' },
        { text: '5/9', isCorrect: false, explanation: 'Incorrect.' },
        { text: '9/5', isCorrect: false, explanation: 'Incorrect.' },
        { text: '1', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'Multiplicative inverse (reciprocal) of a/b is b/a so that (a/b) × (b/a) = 1.',
    },
  ],
};
