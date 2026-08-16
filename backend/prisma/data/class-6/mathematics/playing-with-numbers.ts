export const playingWithNumbersClass6Data = {
  classNumber: 6,
  className: 'Class 6',
  subjectName: 'Mathematics',
  subjectCode: 'MATH6',
  chapterNumber: 2,
  chapterTitle: 'Playing with Numbers',
  summary: 'Factors and multiples, prime and composite numbers, divisibility tests (2, 3, 4, 5, 6, 8, 9, 10, 11), prime factorisation, HCF and LCM.',
  contentMarkdown: `# Chapter 2: Playing with Numbers (Class 6 Mathematics)

## 1. Factors and Multiples
- **Factor**: An exact divisor of that number. (e.g. Factors of 12 are 1, 2, 3, 4, 6, 12).
- **Multiple**: A number obtained by multiplying by an integer. (e.g. Multiples of 5 are 5, 10, 15, 20...).

## 2. Prime & Composite Numbers
- **Prime Number**: Number having exactly two factors: 1 and itself (2, 3, 5, 7, 11...). 2 is the smallest and only even prime number.
- **Composite Number**: Number having more than two factors (4, 6, 8, 9, 10...).
- 1 is neither prime nor composite.

## 3. Divisibility Tests
- **By 3**: Sum of digits is divisible by 3.
- **By 9**: Sum of digits is divisible by 9.
- **By 11**: Difference between sum of digits at odd places and sum of digits at even places is 0 or divisible by 11.

## 4. HCF & LCM
- **Highest Common Factor (HCF)**: Greatest number dividing given numbers completely.
- **Lowest Common Multiple (LCM)**: Smallest non-zero number that is a multiple of given numbers.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Playing with Numbers',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'numbers',
          label: 'Primes & Composites',
          type: 'category',
          children: [
            { id: 'prime', label: 'Prime (Only 2 Factors: 1 and itself)', type: 'concept' },
            { id: 'even-prime', label: '2 is the only Even Prime', type: 'concept' },
          ],
        },
        {
          id: 'divisibility',
          label: 'Divisibility & HCF/LCM',
          type: 'category',
          children: [
            { id: 'div-11', label: 'Divisibility by 11 (Odd - Even places)', type: 'concept' },
            { id: 'hcf-lcm', label: 'HCF (Greatest Divisor) & LCM (Smallest Multiple)', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C6-MATH-PLA-001',
      questionText: 'Which is the smallest prime number and also the only even prime number?',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: '2', isCorrect: true, explanation: '2 is the smallest prime number and the only even prime.' },
        { text: '1', isCorrect: false, explanation: '1 is neither prime nor composite.' },
        { text: '3', isCorrect: false, explanation: '3 is an odd prime.' },
        { text: '0', isCorrect: false, explanation: '0 is not a prime number.' },
      ],
      explanation: '2 is the smallest prime number and is unique because it is the only even prime number.',
    },
  ],
};
