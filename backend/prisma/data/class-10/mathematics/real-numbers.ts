export const realNumbersClass10Data = {
  classNumber: 10,
  className: 'Class 10',
  subjectName: 'Mathematics',
  subjectCode: 'MATH10',
  chapterNumber: 1,
  chapterTitle: 'Real Numbers',
  summary: 'Fundamental Theorem of Arithmetic, HCF and LCM relations, proofs of irrationality of √2, √3, √5, and decimal expansion properties.',
  contentMarkdown: `# Chapter 1: Real Numbers (Class 10)

## 1. Fundamental Theorem of Arithmetic
Every composite number can be expressed (factorised) as a product of primes, and this factorisation is unique, apart from the order in which the prime factors occur.

Example: $1260 = 2^2 \\times 3^2 \\times 5 \\times 7$.

## 2. HCF and LCM Relation
For any two positive integers $a$ and $b$:
$$\\text{HCF}(a, b) \\times \\text{LCM}(a, b) = a \\times b$$

Example: If $\\text{HCF}(96, 404) = 4$, then $\\text{LCM}(96, 404) = \\frac{96 \\times 404}{4} = 9696$.

## 3. Proof of Irrationality
Theorem: If $p$ is a prime number and $p$ divides $a^2$, then $p$ divides $a$, where $a$ is a positive integer.
*Proof technique*: Proof by Contradiction to show $\\sqrt{2}, \\sqrt{3}, \\sqrt{5}$ are irrational.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Real Numbers (Class 10)',
      type: 'root',
      color: '#2563eb',
      children: [
        {
          id: 'fta',
          label: 'Fundamental Theorem of Arithmetic',
          type: 'category',
          children: [
            { id: 'unique-prime', label: 'Unique Prime Factorisation', type: 'concept' },
            { id: 'hcf-lcm', label: 'HCF × LCM = a × b', type: 'concept' },
          ],
        },
        {
          id: 'irrational',
          label: 'Proofs of Irrationality',
          type: 'category',
          children: [
            { id: 'sqrt-proof', label: 'Proof by Contradiction (√2, √3)', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C10-MATH-REA-001',
      questionText: 'If HCF(306, 657) = 9, what is the LCM(306, 657)?',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      options: [
        { text: '22338', isCorrect: true, explanation: 'LCM = (306 × 657) / 9 = 201042 / 9 = 22338.' },
        { text: '12338', isCorrect: false, explanation: 'Incorrect.' },
        { text: '306', isCorrect: false, explanation: 'Incorrect.' },
        { text: '657', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'Using formula HCF(a,b) × LCM(a,b) = a × b: LCM = (306 × 657) / 9 = 22338.',
    },
  ],
};
