export const ch9CoconutFarmData = {
  chapterNumber: 9,
  title: 'Coconut Farm',
  description: 'Perimeter, area, grid calculations, rectangular plots, fencing costs, and harvest counting.',
  topics: [
    { title: 'Perimeter of Farm Fields', summary: 'Calculating boundary lengths for squares and rectangles.' },
    { title: 'Area using Square Grids', summary: 'Determining farm plot areas in square metres and unit grid squares.' },
  ],
  questions: [
    {
      questionCode: 'C5-MATH-COC-001',
      questionText: 'A rectangular coconut grove is 50 m long and 30 m wide. What is the length of fence needed to enclose it?',
      questionType: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      marks: 1,
      explanation: 'Perimeter = 2 × (Length + Width) = 2 × (50 + 30) = 2 × 80 = 160 m.',
      options: [
        { text: '160 m', isCorrect: true },
        { text: '1500 m²', isCorrect: false },
        { text: '80 m', isCorrect: false },
        { text: '200 m', isCorrect: false },
      ],
    },
    {
      questionCode: 'C5-MATH-COC-002',
      questionText: 'If 1 square on a farm grid represents 4 sq metres, how many sq metres are represented by 25 grid squares?',
      questionType: 'FILL_BLANK',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      marks: 1,
      answerText: '100',
      explanation: '25 × 4 = 100 sq metres.',
    },
  ],
};
