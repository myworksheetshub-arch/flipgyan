export const ch13AnimalJumpsData = {
  chapterNumber: 13,
  title: 'Animal Jumps',
  description: 'Number line jumps, skip counting, common multiples, factors, and frog/rabbit jump problems.',
  topics: [
    { title: 'Skip Counting & Jump Multiples', summary: 'Finding landing spots for animals jumping in steps of 3, 5, 7.' },
    { title: 'Common Multiples & Lowest Common Landing Spot', summary: 'Identifying common multiples (LCM concept) on number lines.' },
  ],
  questions: [
    {
      questionCode: 'C5-MATH-ANI-001',
      questionText: 'A frog jumps 3 steps at a time and a grasshopper jumps 4 steps at a time. What is the first number both will land on?',
      questionType: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      marks: 1,
      explanation: 'LCM of 3 and 4 is 12.',
      options: [
        { text: '12', isCorrect: true },
        { text: '7', isCorrect: false },
        { text: '24', isCorrect: false },
        { text: '9', isCorrect: false },
      ],
    },
    {
      questionCode: 'C5-MATH-ANI-002',
      questionText: 'Find the 5th common multiple of 4 and 6.',
      questionType: 'SHORT_ANSWER',
      difficulty: 'HARD',
      bloomLevel: 'APPLY',
      competency: 'LOGICAL',
      marks: 2,
      answerText: '60',
      explanation: 'Common multiples of 4 and 6 are 12, 24, 36, 48, 60. The 5th is 60.',
    },
  ],
};
