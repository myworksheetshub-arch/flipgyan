export const knowingOurNumbersData = {
  classNumber: 6,
  className: 'Class 6',
  subjectName: 'Mathematics',
  subjectCode: 'MATH6',
  chapterNumber: 1,
  chapterTitle: 'Knowing Our Numbers',
  summary: 'Understanding place value system, large numbers, estimation, Indian and International place value systems, and Roman numerals.',
  contentMarkdown: `# Chapter 1: Knowing Our Numbers

## 1. Introduction & Place Value System
Numbers help us count objects, compare quantities, and arrange them in ascending or descending order.

### Indian Place Value Chart
- **Units**: Ones, Tens, Hundreds
- **Thousands**: Thousands, Ten Thousands
- **Lakhs**: Lakhs, Ten Lakhs
- **Crores**: Crores, Ten Crores

Example: $7,34,56,812$ is read as *Seven Crore Thirty-Four Lakh Fifty-Six Thousand Eight Hundred Twelve*.

### International Place Value Chart
- **Units**: Ones, Tens, Hundreds
- **Thousands**: Thousands, Ten Thousands, Hundred Thousands
- **Millions**: Millions, Ten Millions, Hundred Millions

Example: $73,456,812$ is read as *Seventy-Three Million Four Hundred Fifty-Six Thousand Eight Hundred Twelve*.

## 2. Estimation & Rounding Off
- Rounding off to nearest 10: Check the ones digit. If $\ge 5$, round up.
- Rounding off to nearest 100: Check the tens digit.

## 3. Roman Numerals
- $I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000$.
- Rule: If a smaller symbol appears after a larger one, add them ($VI = 5 + 1 = 6$). If before, subtract ($IV = 5 - 1 = 4$).
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Knowing Our Numbers',
      type: 'root',
      color: '#4f46e5',
      children: [
        {
          id: 'place-value',
          label: 'Place Value Systems',
          type: 'category',
          children: [
            { id: 'indian', label: 'Indian System (Lakhs, Crores)', type: 'concept' },
            { id: 'intl', label: 'International System (Millions)', type: 'concept' },
          ],
        },
        {
          id: 'estimation',
          label: 'Estimation & Rounding',
          type: 'category',
          children: [
            { id: 'nearest-10', label: 'Nearest Tens', type: 'concept' },
            { id: 'nearest-100', label: 'Nearest Hundreds', type: 'concept' },
          ],
        },
        {
          id: 'roman',
          label: 'Roman Numerals',
          type: 'category',
          children: [
            { id: 'symbols', label: 'Basic Symbols (I, V, X, L, C, D, M)', type: 'concept' },
            { id: 'rules', label: 'Addition & Subtraction Rules', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C6-MATH-KNO-001',
      questionText: 'What is the place value of 7 in the number 47,52,310 in the Indian System?',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: 'Seven Lakhs (7,00,000)', isCorrect: true, explanation: 'In 47,52,310, 7 is in the Lakhs place, so its place value is 7,00,000.' },
        { text: 'Seventy Thousand (70,000)', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'Seven Crores (7,00,00,000)', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'Seven Hundred (700)', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'In 47,52,310, digits from right are Ones(0), Tens(1), Hundreds(3), Thousands(2), Ten Thousands(5), Lakhs(7), Ten Lakhs(4). Hence 7 is in Lakhs place.',
    },
    {
      questionCode: 'C6-MATH-KNO-002',
      questionText: 'How is the number 1,000,000 written in the Indian Place Value System?',
      difficulty: 'MEDIUM',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: '10 Lakhs (10,00,000)', isCorrect: true, explanation: '1 Million = 1,000,000 = 10 Lakhs in Indian System.' },
        { text: '1 Crore (1,00,00,000)', isCorrect: false, explanation: '1 Crore = 10 Million.' },
        { text: '1 Lakh (1,00,000)', isCorrect: false, explanation: '1 Lakh = 100 Thousand.' },
        { text: '100 Lakhs', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: '1 Million in International system equals 10,00,000 (10 Lakhs) in Indian system.',
    },
  ],
};
