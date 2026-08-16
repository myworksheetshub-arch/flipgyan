export const numberSystemsClass9Data = {
  classNumber: 9,
  className: 'Class 9',
  subjectName: 'Mathematics',
  subjectCode: 'MATH9',
  chapterNumber: 1,
  chapterTitle: 'Number Systems',
  summary: 'Real numbers, irrational numbers (√2, √3, π), decimal expansions, rationalisation of denominators, and laws of exponents.',
  contentMarkdown: `# Chapter 1: Number Systems (Class 9)

## 1. Irrational Numbers
A number $s$ is called irrational if it cannot be written in the form $\\frac{p}{q}$, where $p$ and $q$ are integers and $q \\neq 0$.
Examples: $\\sqrt{2}, \\sqrt{3}, \\pi, 0.1010010001\\dots$

## 2. Decimal Expansions
- **Terminating**: $0.875$ (Rational).
- **Non-terminating Recurring**: $0.333\\dots = 0.\\bar{3}$ (Rational).
- **Non-terminating Non-recurring**: $1.41421356\\dots$ (Irrational).

## 3. Rationalisation of Denominator
To rationalise $\\frac{1}{\\sqrt{a} + \\sqrt{b}}$, multiply numerator and denominator by conjugate $(\\sqrt{a} - \\sqrt{b})$:
$$\\frac{1}{\\sqrt{a} + \\sqrt{b}} \\times \\frac{\\sqrt{a} - \\sqrt{b}}{\\sqrt{a} - \\sqrt{b}} = \\frac{\\sqrt{a} - \\sqrt{b}}{a - b}$$

## 4. Laws of Exponents for Real Numbers
- $a^p \\cdot a^q = a^{p+q}$
- $(a^p)^q = a^{pq}$
- $\\frac{a^p}{a^q} = a^{p-q}$
- $a^p \\cdot b^p = (ab)^p$
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Number Systems (Class 9)',
      type: 'root',
      color: '#2563eb',
      children: [
        {
          id: 'reals',
          label: 'Real Numbers (R)',
          type: 'category',
          children: [
            { id: 'rationals', label: 'Rationals (Q: Terminating / Recurring)', type: 'concept' },
            { id: 'irrationals', label: 'Irrationals (Non-terminating Non-recurring)', type: 'concept' },
          ],
        },
        {
          id: 'ops',
          label: 'Operations & Exponents',
          type: 'category',
          children: [
            { id: 'rationalisation', label: 'Rationalising Denominator', type: 'concept' },
            { id: 'exponents', label: 'Laws of Exponents', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C9-MATH-NUM-001',
      questionText: 'What is the rationalised form of 1 / (√3 + √2)?',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      options: [
        { text: '√3 - √2', isCorrect: true, explanation: '(1 / (√3+√2)) × ((√3-√2)/(√3-√2)) = (√3-√2) / (3-2) = √3 - √2.' },
        { text: '√3 + √2', isCorrect: false, explanation: 'Incorrect.' },
        { text: '1 / (3 - 2)', isCorrect: false, explanation: 'Incorrect.' },
        { text: '√5', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'Multiplying numerator and denominator by conjugate (√3 - √2) gives (√3 - √2) / (3 - 2) = √3 - √2.',
    },
  ],
};
