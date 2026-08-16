export const fractionsClass6Data = {
  classNumber: 6,
  className: 'Class 6',
  subjectName: 'Mathematics',
  subjectCode: 'MATH6',
  chapterNumber: 5,
  chapterTitle: 'Fractions',
  summary: 'Types of fractions (proper, improper, mixed), fraction on number line, equivalent fractions, simplest form, like and unlike fractions, addition and subtraction.',
  contentMarkdown: `# Chapter 5: Fractions (Class 6 Mathematics)

## 1. Types of Fractions
- **Proper Fraction**: Numerator < Denominator (e.g. $\\frac{3}{4}, \\frac{1}{2}$). Value is always $< 1$.
- **Improper Fraction**: Numerator $\\ge$ Denominator (e.g. $\\frac{7}{4}, \\frac{5}{5}$). Value is $\\ge 1$.
- **Mixed Fraction**: Combination of a whole number and a proper fraction (e.g. $1\\frac{3}{4} = \\frac{7}{4}$).

## 2. Simplest (Lowest) Form
A fraction $\\frac{p}{q}$ is in simplest form if $\\text{HCF}(p, q) = 1$.
- *Example*: Reduce $\\frac{12}{18}$ to lowest terms:
  $$\\text{HCF}(12, 18) = 6 \\implies \\frac{12 \\div 6}{18 \\div 6} = \\frac{2}{3}$$

## 3. Like and Unlike Fractions
- **Like Fractions**: Fractions with the *same* denominator (e.g. $\\frac{1}{7}, \\frac{3}{7}, \\frac{5}{7}$).
- **Unlike Fractions**: Fractions with *different* denominators (e.g. $\\frac{1}{2}, \\frac{1}{3}, \\frac{3}{5}$).
  - *Addition*: Convert unlike fractions to like fractions using **LCM** of denominators.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Fractions (Class 6)',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'types',
          label: 'Types of Fractions',
          type: 'category',
          children: [
            { id: 'proper', label: 'Proper (Num < Denom, value < 1)', type: 'concept' },
            { id: 'improper', label: 'Improper (Num ≥ Denom)', type: 'concept' },
            { id: 'mixed', label: 'Mixed (Whole + Proper)', type: 'concept' },
          ],
        },
        {
          id: 'ops',
          label: 'Simplest Form & LCM Addition',
          type: 'category',
          children: [
            { id: 'simplest', label: 'Simplest Form: HCF(p, q) = 1', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C6-MATH-FRA-001',
      questionText: 'What is the fraction 15/20 in its simplest (lowest) form?',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      options: [
        { text: '3/4', isCorrect: true, explanation: 'HCF(15, 20) = 5. Dividing numerator & denominator by 5 gives 3/4.' },
        { text: '5/4', isCorrect: false, explanation: 'Incorrect.' },
        { text: '3/5', isCorrect: false, explanation: 'Incorrect.' },
        { text: '1/2', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'Dividing 15 and 20 by their highest common factor 5 gives 3/4.',
    },
  ],
};
