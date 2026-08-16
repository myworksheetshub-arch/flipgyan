export const beMyMultipleData = {
  classNumber: 5,
  className: 'Class 5',
  subjectName: 'Mathematics',
  subjectCode: 'MATH5',
  chapterNumber: 5,
  chapterTitle: "Be My Multiple, I'll Be Your Factor",
  summary: 'Multiples, common multiples, factors, factor trees, LCM & HCF games (Cat and Mouse game, Bangle game), and word problems.',
  contentMarkdown: `# Chapter 5: Be My Multiple, I'll Be Your Factor (Class 5 Mathematics)

## 1. Multiples & Common Multiples
- **Multiples of 3**: $3, 6, 9, 12, 15, 18, 21, 24, 27, 30\\dots$
- **Multiples of 5**: $5, 10, 15, 20, 25, 30, 35\\dots$
- **Common Multiples of 3 and 5**: $15, 30, 45, 60\\dots$
- **Lowest Common Multiple (LCM)**: The smallest common multiple is **15**.

## 2. Factors & Factor Trees
- **Factors of 24**: Numbers that divide 24 completely without a remainder $\\rightarrow 1, 2, 3, 4, 6, 8, 12, 24$.
- **Factor Tree**: Breaking a number down into prime factors:
  $$24 = 2 \\times 12 = 2 \\times 2 \\times 6 = 2 \\times 2 \\times 2 \\times 3$$

## 3. Cat and Mouse Game
A cat is at step 3 and jumps 3 steps at a time. A mouse is at step 2 and jumps 2 steps at a time. The mouse reaches safety at step 28.
- *Mouse jumps*: $2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28$.
- *Cat jumps*: $3, 6, 9, 12, 15, 18, 21, 24, 27$.
- *Common steps where both land*: **6, 12, 18, 24**.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Multiples & Factors',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'multiples',
          label: 'Multiples & LCM',
          type: 'category',
          children: [
            { id: 'lcm-3-5', label: 'LCM of 3 and 5 is 15', type: 'concept' },
          ],
        },
        {
          id: 'factors',
          label: 'Factors & Factor Trees',
          type: 'category',
          children: [
            { id: 'tree', label: 'Factor Tree of 24 = 2 × 2 × 2 × 3', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C5-MATH-BEM-001',
      questionText: 'What is the Lowest Common Multiple (LCM) of 3 and 5?',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: '15', isCorrect: true, explanation: 'Smallest common multiple of 3 and 5 is 15.' },
        { text: '30', isCorrect: false, explanation: 'Common multiple, but not the LOWEST.' },
        { text: '8', isCorrect: false, explanation: 'This is the sum (3 + 5).' },
        { text: '1', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'Multiples of 3 are 3,6,9,12,15... Multiples of 5 are 5,10,15... The smallest common number is 15.',
    },
    {
      questionCode: 'C5-MATH-BEM-002',
      questionText: 'How many total factors does the number 12 have?',
      difficulty: 'MEDIUM',
      bloomLevel: 'UNDERSTAND',
      competency: 'PROCEDURAL',
      marks: 1,
      options: [
        { text: '6 factors (1, 2, 3, 4, 6, 12)', isCorrect: true, explanation: 'Factors of 12 are 1, 2, 3, 4, 6, and 12 (6 total).' },
        { text: '4 factors', isCorrect: false, explanation: 'Incorrect.' },
        { text: '12 factors', isCorrect: false, explanation: 'Incorrect.' },
        { text: '2 factors', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'The numbers that divide 12 without a remainder are 1, 2, 3, 4, 6, 12 (total 6 factors).',
    },
  ],
};
