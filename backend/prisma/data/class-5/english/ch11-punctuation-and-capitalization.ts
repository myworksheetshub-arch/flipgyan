export const ch11PunctuationAndCapitalizationData = {
  chapterNumber: 11,
  title: 'Punctuation and Capitalization',
  description: 'Rules of Punctuation: Capital letters, Full stops, Question marks, Exclamation marks, Commas, and Apostrophes.',
  topics: [
    { title: 'Capitalization Rules', summary: 'Capitalizing proper nouns, first word of sentences, pronoun "I", and titles.' },
    { title: 'Punctuation Marks', summary: 'Using commas for lists/pauses, full stops, question marks, and apostrophes.' },
  ],
  questions: [
    {
      questionCode: 'C5-ENG-PUN-001',
      questionText: 'Identify the correctly punctuated sentence:',
      questionType: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      explanation: 'Names of places (Delhi, Agra) and days (Monday) must be capitalized, separated by commas.',
      options: [
        { text: 'On Monday, Rahul visited Delhi and Agra.', isCorrect: true },
        { text: 'on monday rahul visited delhi and agra', isCorrect: false },
        { text: 'On monday, rahul visited Delhi and Agra.', isCorrect: false },
        { text: 'On Monday rahul visited delhi, and agra.', isCorrect: false },
      ],
    },
    {
      questionCode: 'C5-ENG-PUN-002',
      questionText: 'Which punctuation mark is missing at the end of: "What an amazing magician he is"',
      questionType: 'SHORT_ANSWER',
      difficulty: 'EASY',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      marks: 1,
      answerText: 'Exclamation mark (!)',
      explanation: 'Exclamatory sentences require an exclamation mark (!).',
    },
  ],
};
