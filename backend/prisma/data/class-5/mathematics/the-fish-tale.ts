export const theFishTaleData = {
  classNumber: 5,
  className: 'Class 5',
  subjectName: 'Mathematics',
  subjectCode: 'MATH5',
  chapterNumber: 2,
  chapterTitle: 'The Fish Tale',
  summary: 'Large numbers (Lakhs & Crores), speed & distance calculations, loan interest, profit & loss, and word problems.',
  contentMarkdown: `# Chapter 2: The Fish Tale (Class 5 Mathematics)

## 1. Large Numbers in Real Life
- **1 Lakh**: $1,00,000$ (5 zeroes).
- **100 Lakhs = 1 Crore**: $1,00,000,00$ or $1,00,00,000$ (7 zeroes).
- **Example**: If a motor boat travels at a speed of $20 \\text{ km/h}$, how far will it go in 3.5 hours?
  $$\\text{Distance} = \\text{Speed} \\times \\text{Time} = 20 \\times 3.5 = 70 \\text{ km}$$

## 2. Fisherwomen Bank (Loans & Interest)
- **Loan**: Money borrowed from a bank.
- **Interest**: Extra money paid back to the bank.
  - *Example*: Grace took a loan of ₹4,000 to buy a net. She paid back ₹345 every month for one year (12 months).
  $$\\text{Total money paid} = 345 \\times 12 = ₹4,140$$
  $$\\text{Interest paid} = 4,140 - 4,000 = ₹140$$

## 3. Fresh Fish vs Dried Fish
When fish is dried, its weight becomes $\\frac{1}{3}$ of its fresh weight!
- *Example*: If 6,000 kg of fresh fish is dried, how much dried fish will be obtained?
  $$\\text{Weight of dried fish} = 6,000 \\times \\frac{1}{3} = 2,000 \\text{ kg}$$
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'The Fish Tale',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'numbers',
          label: 'Lakhs & Crores',
          type: 'category',
          children: [
            { id: 'lakh', label: '1 Lakh = 100,000 (5 zeroes)', type: 'concept' },
            { id: 'crore', label: '1 Crore = 10,000,000 (7 zeroes)', type: 'concept' },
          ],
        },
        {
          id: 'speed',
          label: 'Speed & Fish Weight',
          type: 'category',
          children: [
            { id: 'dist', label: 'Distance = Speed × Time', type: 'concept' },
            { id: 'drying', label: 'Dried weight = 1/3 of Fresh weight', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C5-MATH-THE-001',
      questionText: 'If a motorboat travels at a speed of 20 km in 1 hour, how far will it go in 4 hours?',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      options: [
        { text: '80 km', isCorrect: true, explanation: 'Distance = Speed × Time = 20 × 4 = 80 km.' },
        { text: '60 km', isCorrect: false, explanation: 'Incorrect.' },
        { text: '100 km', isCorrect: false, explanation: 'Incorrect.' },
        { text: '24 km', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'Using formula Distance = Speed × Time: Distance = 20 km/h × 4 h = 80 km.',
    },
    {
      questionCode: 'C5-MATH-THE-002',
      questionText: 'When fresh fish is dried, its weight becomes 1/3 of its fresh weight. What will be the weight of 9,000 kg of fresh fish when dried?',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      options: [
        { text: '3,000 kg', isCorrect: true, explanation: 'Dried weight = 9,000 × (1/3) = 3,000 kg.' },
        { text: '4,500 kg', isCorrect: false, explanation: 'Incorrect.' },
        { text: '2,700 kg', isCorrect: false, explanation: 'Incorrect.' },
        { text: '6,000 kg', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'Weight of dried fish = 9,000 × (1/3) = 3,000 kg.',
    },
  ],
};
