export const ch6TensesData = {
  chapterNumber: 6,
  title: 'Tenses',
  description: 'Simple Present, Simple Past, Simple Future, Present Continuous, and Past Continuous tenses.',
  topics: [
    { title: 'Simple Tenses', summary: 'Habitual actions (Simple Present), completed actions (Simple Past), and future events (will/shall).' },
    { title: 'Continuous Tenses', summary: 'Ongoing actions in present and past using verb + -ing.' },
  ],
  questions: [
    {
      questionCode: 'C5-ENG-TEN-001',
      questionText: 'Identify the tense: "The Earth revolves around the Sun."',
      questionType: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      explanation: 'General truths and scientific facts are expressed in Simple Present Tense.',
      options: [
        { text: 'Simple Present Tense', isCorrect: true },
        { text: 'Present Continuous Tense', isCorrect: false },
        { text: 'Simple Past Tense', isCorrect: false },
        { text: 'Simple Future Tense', isCorrect: false },
      ],
    },
    {
      questionCode: 'C5-ENG-TEN-002',
      questionText: 'Change into Past Continuous Tense: "They play cricket in the park."',
      questionType: 'SHORT_ANSWER',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 2,
      answerText: 'They were playing cricket in the park.',
      explanation: 'Past Continuous uses was/were + verb-ing: "were playing".',
    },
  ],
};
