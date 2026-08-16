export const decimalsClass6Data = {
  classNumber: 6,
  className: 'Class 6',
  subjectName: 'Mathematics',
  subjectCode: 'MATH6',
  chapterNumber: 6,
  chapterTitle: 'Decimals',
  summary: 'Tenths, hundredths, thousandths, place value table, decimals on number line, converting fractions to decimals and vice versa, comparing decimals, and real-life money/length applications.',
  contentMarkdown: `# Chapter 6: Decimals (Class 6 Mathematics)

## 1. Decimal Place Value
A decimal number consists of a whole number part and a decimal part separated by a decimal point ($.$).
- **Tenths** ($\\frac{1}{10} = 0.1$)
- **Hundredths** ($\\frac{1}{100} = 0.01$)
- **Thousandths** ($\\frac{1}{1000} = 0.001$)

*Example*: In $543.218$:
- 5 is in Hundreds place ($500$)
- 4 is in Tens place ($40$)
- 3 is in Ones place ($3$)
- 2 is in Tenths place ($\\frac{2}{10} = 0.2$)
- 1 is in Hundredths place ($\\frac{1}{100} = 0.01$)
- 8 is in Thousandths place ($\\frac{8}{1000} = 0.008$)

## 2. Converting Fractions to Decimals
- $\\frac{7}{10} = 0.7$
- $\\frac{12}{100} = 0.12$
- $\\frac{3}{5} = \\frac{3 \\times 2}{5 \\times 2} = \\frac{6}{10} = 0.6$

## 3. Real-life Money & Unit Conversions
- **Money**: $1 \\text{ Rupee} = 100 \\text{ paise} \\implies 5 \\text{ paise} = \\frac{5}{100} = ₹0.05$.
- **Length**: $1 \\text{ meter} = 100 \\text{ cm} \\implies 15 \\text{ cm} = \\frac{15}{100} = 0.15 \\text{ m}$.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Decimals (Class 6)',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'place-value',
          label: 'Decimal Places',
          type: 'category',
          children: [
            { id: 'tenths', label: 'Tenths (1/10 = 0.1)', type: 'concept' },
            { id: 'hundredths', label: 'Hundredths (1/100 = 0.01)', type: 'concept' },
          ],
        },
        {
          id: 'conversions',
          label: 'Money & Length Conversions',
          type: 'category',
          children: [
            { id: 'paise', label: '5 Paise = ₹0.05', type: 'concept' },
            { id: 'cm-m', label: '15 cm = 0.15 m', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C6-MATH-DEC-001',
      questionText: 'Express 5 paise in Rupees using decimals.',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      options: [
        { text: '₹0.05', isCorrect: true, explanation: '1 Rupee = 100 paise, so 5 paise = 5/100 = ₹0.05.' },
        { text: '₹0.5', isCorrect: false, explanation: 'This is 50 paise.' },
        { text: '₹5.0', isCorrect: false, explanation: 'This is 5 Rupees.' },
        { text: '₹0.005', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'Since ₹1 = 100 paise, 5 paise = 5/100 = ₹0.05.',
    },
  ],
};
