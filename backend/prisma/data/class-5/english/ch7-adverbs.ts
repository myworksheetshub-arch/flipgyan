export const ch7AdverbsData = {
  chapterNumber: 7,
  title: 'Adverbs',
  description: 'Words modifying verbs, adjectives, or adverbs. Kinds of Adverbs: Manner, Time, Place, and Frequency.',
  topics: [
    { title: 'Adverbs of Manner, Time & Place', summary: 'Answering how (Manner), when (Time), and where (Place).' },
    { title: 'Adverbs of Frequency', summary: 'Answering how often (always, usually, rarely, never).' },
  ],
  questions: [
    {
      questionCode: 'C5-ENG-ADV-001',
      questionText: 'Identify the kind of adverb underlined: "She sang <u>sweetly</u> during the concert."',
      questionType: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      explanation: '"sweetly" answers HOW she sang, so it is an Adverb of Manner.',
      options: [
        { text: 'Adverb of Manner', isCorrect: true },
        { text: 'Adverb of Time', isCorrect: false },
        { text: 'Adverb of Place', isCorrect: false },
        { text: 'Adverb of Frequency', isCorrect: false },
      ],
    },
    {
      questionCode: 'C5-ENG-ADV-002',
      questionText: 'Which of the following are Adverbs of Frequency? (Select all that apply)',
      questionType: 'MULTIPLE_SELECT',
      difficulty: 'EASY',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      marks: 2,
      explanation: 'always, frequently, and seldom tell how often an action occurs.',
      options: [
        { text: 'always', isCorrect: true },
        { text: 'frequently', isCorrect: true },
        { text: 'seldom', isCorrect: true },
        { text: 'yesterday', isCorrect: false },
      ],
    },
  ],
};
