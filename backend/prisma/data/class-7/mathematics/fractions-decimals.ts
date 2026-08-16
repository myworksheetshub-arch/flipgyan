export const fractionsDecimalsData = {
  classNumber: 7,
  className: 'Class 7',
  subjectName: 'Mathematics',
  subjectCode: 'MATH7',
  chapterNumber: 2,
  chapterTitle: 'Fractions and Decimals',
  summary: 'Addition, subtraction, multiplication, and division of proper, improper, and mixed fractions and decimal numbers.',
  contentMarkdown: `# Chapter 2: Fractions and Decimals

## 1. Fractions Overview
- **Proper Fraction**: Numerator < Denominator (e.g. $\\frac{3}{4}$).
- **Improper Fraction**: Numerator $\ge$ Denominator (e.g. $\\frac{7}{4}$).
- **Mixed Fraction**: Combination of whole number and proper fraction (e.g. $1\\frac{3}{4}$).

## 2. Multiplication of Fractions
$$\\text{Product of Fractions} = \\frac{\\text{Product of Numerators}}{\\text{Product of Denominators}}$$
Example: $\\frac{2}{3} \\times \\frac{5}{7} = \\frac{10}{21}$.

## 3. Division of Fractions
To divide a fraction by another, multiply the first fraction by the reciprocal of the second:
$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$$

## 4. Decimals & Operations
Multiplying by 10, 100, 1000 shifts decimal point to the right.
Dividing by 10, 100, 1000 shifts decimal point to the left.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Fractions & Decimals',
      type: 'root',
      color: '#059669',
      children: [
        {
          id: 'fractions',
          label: 'Fractions',
          type: 'category',
          children: [
            { id: 'types', label: 'Proper, Improper & Mixed', type: 'concept' },
            { id: 'mult', label: 'Multiplication & Reciprocals', type: 'concept' },
            { id: 'div', label: 'Division of Fractions', type: 'concept' },
          ],
        },
        {
          id: 'decimals',
          label: 'Decimals',
          type: 'category',
          children: [
            { id: 'decimal-ops', label: 'Multiplication & Division', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C7-MATH-FRA-001',
      questionText: 'What is the reciprocal of 3/7?',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: '7/3', isCorrect: true, explanation: 'The reciprocal of a fraction a/b is b/a.' },
        { text: '-3/7', isCorrect: false, explanation: 'Incorrect.' },
        { text: '3/7', isCorrect: false, explanation: 'Incorrect.' },
        { text: '1/3', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'Reciprocal of a non-zero fraction a/b is obtained by interchanging numerator and denominator to get b/a.',
    },
  ],
};
