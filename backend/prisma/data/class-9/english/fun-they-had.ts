export const funTheyHadData = {
  classNumber: 9,
  className: 'Class 9',
  subjectName: 'English',
  subjectCode: 'ENG9',
  chapterNumber: 1,
  chapterTitle: 'The Fun They Had',
  summary: 'Beehive Unit 1 — Science fiction story by Isaac Asimov set in 2157 about futuristic robotic schooling vs old-fashioned human classrooms.',
  contentMarkdown: `# Unit 1: The Fun They Had (Class 9 English Beehive)

## 1. Setting & Plot (Year 2157)
On May 17, 2157, 13-year-old **Tommy** finds a real printed paper book in his attic. He shows it to 11-year-old **Margie**.

## 2. Telebooks vs Real Books
- **Telebooks**: Displayed on TV/computer screens where words move, and millions of books can be stored on one mechanical teacher.
- **Real Printed Books**: Pages were yellow and crinkly, words stood still instead of moving.

## 3. Mechanical Teachers vs Old Schools
Margie hated her mechanical teacher, which gave her test after test in Geography. The County Inspector adjusted its speed to a 10-year-old level.
Margie marveled at how in olden times, **human teachers** taught groups of children of the same age together in a special building called a school, where kids laughed, shouted, and learned the same things together—thinking about *"the fun they had"*.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'The Fun They Had (2157)',
      type: 'root',
      color: '#7c3aed',
      children: [
        {
          id: 'characters',
          label: 'Margie (11) & Tommy (13)',
          type: 'category',
          children: [
            { id: 'mechanical', label: 'Mechanical Robot Teacher', type: 'concept' },
            { id: 'telebook', label: 'Telebook Screens', type: 'concept' },
          ],
        },
        {
          id: 'contrast',
          label: 'Old Schools Contrast',
          type: 'category',
          children: [
            { id: 'human', label: 'Human Teachers & Shared Classrooms', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C9-ENG-FUN-001',
      questionText: 'In what year is Isaac Asimov’s story "The Fun They Had" set?',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: '2157', isCorrect: true, explanation: 'Margie wrote in her diary on 17 May 2157.' },
        { text: '2025', isCorrect: false, explanation: 'Incorrect.' },
        { text: '3000', isCorrect: false, explanation: 'Incorrect.' },
        { text: '1945', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'The story opens with Margie writing in her diary entry dated 17 May 2157.',
    },
  ],
};
