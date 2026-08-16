export const partsAndWholesData = {
  classNumber: 5,
  className: 'Class 5',
  subjectName: 'Mathematics',
  subjectCode: 'MATH5',
  chapterNumber: 4,
  chapterTitle: 'Parts and Wholes',
  summary: 'Fractions as equal parts of a whole, flag proportions, equivalent fractions, half & quarter calculations, and money sharing problems.',
  contentMarkdown: `# Chapter 4: Parts and Wholes (Class 5 Mathematics)

## 1. What is a Fraction?
A fraction represents a part of a whole or a part of a collection of items.
$$\\text{Fraction} = \\frac{\\text{Numerator (Parts taken)}}{\\text{Denominator (Total equal parts)}}$$

- **Half**: $\\frac{1}{2}$
- **Quarter**: $\\frac{1}{4}$
- **Three-fourths**: $\\frac{3}{4}$

## 2. Indian National Flag Proportions
The Indian Tricolour flag has 3 equal horizontal bands (Saffron, White, Green):
- **Saffron band**: $\\frac{1}{3}$ of the flag.
- **Green band**: $\\frac{1}{3}$ of the flag.
- **White band**: $\\frac{1}{3}$ of the flag (with Ashoka Chakra in the middle).

## 3. Equivalent Fractions
Fractions that have the same value even though they look different:
$$\\frac{1}{2} = \\frac{2}{4} = \\frac{3}{6} = \\frac{4}{8} = \\frac{5}{10}$$
To get an equivalent fraction, multiply or divide both numerator and denominator by the same non-zero number.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Parts and Wholes (Fractions)',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'meaning',
          label: 'Numerator / Denominator',
          type: 'category',
          children: [
            { id: 'parts', label: 'Numerator = Parts Taken', type: 'concept' },
            { id: 'total', label: 'Denominator = Total Equal Parts', type: 'concept' },
          ],
        },
        {
          id: 'equivalent',
          label: 'Equivalent Fractions',
          type: 'category',
          children: [
            { id: 'half', label: '1/2 = 2/4 = 3/6 = 4/8', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C5-MATH-PAR-001',
      questionText: 'What fraction of the Indian Tricolour Flag is occupied by the top Saffron band?',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: '1/3', isCorrect: true, explanation: 'The flag is divided into 3 equal bands, so Saffron is 1/3.' },
        { text: '1/2', isCorrect: false, explanation: 'Incorrect.' },
        { text: '1/4', isCorrect: false, explanation: 'Incorrect.' },
        { text: '2/3', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'The Indian National Flag consists of 3 equal horizontal stripes, making each stripe 1/3 of the whole flag.',
    },
    {
      questionCode: 'C5-MATH-PAR-002',
      questionText: 'Which of the following is an equivalent fraction to 2/3?',
      difficulty: 'EASY',
      bloomLevel: 'UNDERSTAND',
      competency: 'PROCEDURAL',
      marks: 1,
      options: [
        { text: '4/6', isCorrect: true, explanation: '(2 × 2) / (3 × 2) = 4/6.' },
        { text: '3/4', isCorrect: false, explanation: 'Incorrect.' },
        { text: '2/6', isCorrect: false, explanation: 'Incorrect.' },
        { text: '6/4', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'Multiplying numerator and denominator of 2/3 by 2 gives (2×2)/(3×2) = 4/6.',
    },
  ],
};
