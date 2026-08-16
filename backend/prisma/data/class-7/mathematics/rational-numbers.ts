export const rationalNumbersClass7Data = {
  classNumber: 7,
  className: 'Class 7',
  subjectName: 'Mathematics',
  subjectCode: 'MATH7',
  chapterNumber: 3,
  chapterTitle: 'Rational Numbers',
  summary: 'Concept of rational numbers, positive and negative rational numbers, standard form, and comparison on number line.',
  contentMarkdown: `# Chapter 3: Rational Numbers

## 1. Definition
A number that can be expressed in the form $\\frac{p}{q}$, where $p$ and $q$ are integers and $q \\neq 0$, is called a rational number.

## 2. Positive & Negative Rational Numbers
- **Positive Rational Number**: Numerator and denominator both have the same sign (e.g. $\\frac{3}{5}$, $\\frac{-2}{-7}$).
- **Negative Rational Number**: Numerator and denominator have opposite signs (e.g. $\\frac{-3}{8}$, $\\frac{4}{-9}$).

## 3. Standard Form
A rational number $\\frac{p}{q}$ is in standard form if $q > 0$ and $p, q$ have no common factors other than 1.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Rational Numbers (Class 7)',
      type: 'root',
      color: '#0284c7',
      children: [
        {
          id: 'def',
          label: 'Definition (p/q, q ≠ 0)',
          type: 'category',
          children: [
            { id: 'pos-neg', label: 'Positive vs Negative', type: 'concept' },
            { id: 'standard', label: 'Standard Form', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C7-MATH-RAT-001',
      questionText: 'Which of the following is a rational number in standard form?',
      difficulty: 'EASY',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: '-3/5', isCorrect: true, explanation: 'Denominator is positive (5) and HCF of 3 and 5 is 1.' },
        { text: '3/-5', isCorrect: false, explanation: 'Denominator is negative.' },
        { text: '-6/10', isCorrect: false, explanation: 'Common factor 2 exists.' },
        { text: '4/8', isCorrect: false, explanation: 'Not in lowest terms.' },
      ],
      explanation: 'Standard form requires denominator to be positive and HCF(|p|, |q|) = 1.',
    },
  ],
};
