export const ch10ArticlesData = {
  chapterNumber: 10,
  title: 'Articles',
  description: 'Rules for using definite (the) and indefinite (a, an) articles correctly based on consonant and vowel sounds.',
  topics: [
    { title: 'Indefinite Articles: A & An', summary: 'Using "a" before consonant sounds and "an" before vowel sounds (e.g. an honest man, a university).' },
    { title: 'Definite Article: The & Omission of Articles', summary: 'Using "the" for specific objects, rivers, mountain ranges, and holy books.' },
  ],
  questions: [
    {
      questionCode: 'C5-ENG-ART-001',
      questionText: 'Choose the correct article: "Dr. APJ Abdul Kalam was _____ honest and humble scientist."',
      questionType: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      explanation: '"honest" starts with a silent "h" and a vowel sound /ɒ/, so use "an".',
      options: [
        { text: 'an', isCorrect: true },
        { text: 'a', isCorrect: false },
        { text: 'the', isCorrect: false },
        { text: 'No article needed', isCorrect: false },
      ],
    },
    {
      questionCode: 'C5-ENG-ART-002',
      questionText: 'Which of the following sentences use articles correctly? (Select all that apply)',
      questionType: 'MULTIPLE_SELECT',
      difficulty: 'MEDIUM',
      bloomLevel: 'ANALYZE',
      competency: 'LOGICAL',
      marks: 2,
      explanation: '"The Ganges is a sacred river" and "She is an honorable guest" use "the" and "an" correctly.',
      options: [
        { text: 'The Ganges is a sacred river.', isCorrect: true },
        { text: 'She is an honorable guest.', isCorrect: true },
        { text: 'He study at a university.', isCorrect: true },
        { text: 'I saw an European tourist.', isCorrect: false },
      ],
    },
  ],
};
