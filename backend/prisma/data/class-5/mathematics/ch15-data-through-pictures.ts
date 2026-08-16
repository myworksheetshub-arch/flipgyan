export const ch15DataThroughPicturesData = {
  chapterNumber: 15,
  title: 'Data Through Pictures',
  description: 'Pictographs, tally marks, bar charts, data interpretation, and real-life survey analysis.',
  topics: [
    { title: 'Tally Marks & Frequency Tables', summary: 'Recording data using groups of 5 tally marks.' },
    { title: 'Pictographs with Symbol Keys', summary: 'Interpreting picture graphs where 1 symbol = 5 or 10 items.' },
  ],
  questions: [
    {
      questionCode: 'C5-MATH-DAT-001',
      questionText: 'In a pictograph, 1 tree symbol represents 10 trees. How many symbols are needed to represent 45 trees?',
      questionType: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      marks: 1,
      explanation: '45 / 10 = 4 full tree symbols and 1 half-tree symbol (4.5 symbols).',
      options: [
        { text: '4 full and 1 half symbol (4.5)', isCorrect: true },
        { text: '5 full symbols', isCorrect: false },
        { text: '4 full symbols', isCorrect: false },
        { text: '45 symbols', isCorrect: false },
      ],
    },
    {
      questionCode: 'C5-MATH-DAT-002',
      questionText: 'A tally mark frequency table has |||| ||| for bananas. How many bananas does this represent?',
      questionType: 'SHORT_ANSWER',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'PROCEDURAL',
      marks: 1,
      answerText: '8',
      explanation: '5 (crossed group) + 3 = 8 bananas.',
    },
  ],
};
