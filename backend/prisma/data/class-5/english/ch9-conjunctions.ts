export const ch9ConjunctionsData = {
  chapterNumber: 9,
  title: 'Conjunctions',
  description: 'Connecting words: joining words, phrases, and clauses using coordinating conjunctions (and, but, or, so, because, although, yet).',
  topics: [
    { title: 'Coordinating Conjunctions', summary: 'Joining independent clauses (FANBOYS: for, and, nor, but, or, yet, so).' },
    { title: 'Reason & Contrast Conjunctions', summary: 'Expressing cause (because, since) and contrast (although, even though).' },
  ],
  questions: [
    {
      questionCode: 'C5-ENG-CON-001',
      questionText: 'Choose the appropriate conjunction: "He studied hard, _____ he did not score top marks."',
      questionType: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      explanation: '"but" shows contrast between studying hard and not getting top marks.',
      options: [
        { text: 'but', isCorrect: true },
        { text: 'and', isCorrect: false },
        { text: 'so', isCorrect: false },
        { text: 'or', isCorrect: false },
      ],
    },
    {
      questionCode: 'C5-ENG-CON-002',
      questionText: 'We stayed indoors _____ it was raining heavily outside.',
      questionType: 'FILL_BLANK',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      answerText: 'because',
      explanation: '"because" states the reason for staying indoors.',
    },
  ],
};
