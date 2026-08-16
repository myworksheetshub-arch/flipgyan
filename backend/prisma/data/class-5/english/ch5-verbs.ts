export const ch5VerbsData = {
  chapterNumber: 5,
  title: 'Verbs',
  description: 'Main Verbs, Helping Verbs (Auxiliaries), Subject-Verb Agreement, and Transitive/Intransitive Verbs.',
  topics: [
    { title: 'Main & Auxiliary Verbs', summary: 'Identifying action verbs and supporting verbs (is, am, are, was, were, has, have, had).' },
    { title: 'Subject-Verb Agreement & Transitive Verbs', summary: 'Matching singular/plural subjects with verbs and recognizing direct objects.' },
  ],
  questions: [
    {
      questionCode: 'C5-ENG-VER-001',
      questionText: 'Choose the correct verb to complete the subject-verb agreement: "Either the teacher or the students _____ present in the auditorium."',
      questionType: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      explanation: 'When subjects are joined by "either...or", the verb agrees with the closer subject ("students" -> are/were).',
      options: [
        { text: 'were', isCorrect: true },
        { text: 'was', isCorrect: false },
        { text: 'is', isCorrect: false },
        { text: 'has', isCorrect: false },
      ],
    },
    {
      questionCode: 'C5-ENG-VER-002',
      questionText: 'Is the verb in "The baby slept peacefully" transitive or intransitive?',
      questionType: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      marks: 1,
      explanation: '"slept" does not take a direct object, so it is an Intransitive Verb.',
      options: [
        { text: 'Intransitive Verb', isCorrect: true },
        { text: 'Transitive Verb', isCorrect: false },
        { text: 'Auxiliary Verb', isCorrect: false },
        { text: 'Modal Verb', isCorrect: false },
      ],
    },
  ],
};
