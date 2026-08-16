export const threeQuestionsData = {
  classNumber: 7,
  className: 'Class 7',
  subjectName: 'English',
  subjectCode: 'ENG7',
  chapterNumber: 1,
  chapterTitle: 'Three Questions & The Squirrel',
  summary: 'Honeycomb Unit 1 — Leo Tolstoy story about a King seeking answers to 3 questions, hermit wisdom, and moral lesson.',
  contentMarkdown: `# Unit 1: Three Questions & The Squirrel (Class 7 English Honeycomb)

## 1. Summary of Three Questions
A certain King believed he would never fail if he knew the answers to 3 questions:
1. **What is the right time to begin something?**
2. **Which people should he listen to?**
3. **What is the most important thing for him to do?**

### The Hermit's Answers
The King visited a wise hermit digging beds in the forest. After helping a wounded enemy, the hermit taught him:
- **The most important time**: NOW (the present moment), because it is the only time we have power.
- **The most important person**: The person you are WITH at a particular moment.
- **The most important business**: To do that person GOOD, because for that purpose alone man was sent into this world.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Three Questions (Class 7 English)',
      type: 'root',
      color: '#8b5cf6',
      children: [
        {
          id: 'questions',
          label: 'The King’s 3 Questions',
          type: 'category',
          children: [
            { id: 'time', label: '1. Right Time -> NOW (Present)', type: 'concept' },
            { id: 'person', label: '2. Right Person -> Person you are with', type: 'concept' },
            { id: 'action', label: '3. Right Action -> Do Good to that person', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C7-ENG-THR-001',
      questionText: "According to the wise hermit, what is the most important time?",
      difficulty: 'EASY',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: 'NOW (The Present Moment)', isCorrect: true, explanation: 'The hermit explained that NOW is the only time we have any power.' },
        { text: 'The Future', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'Yesterday', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'Early Morning', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'The hermit said the most important time is NOW because it is the only time over which we have control.',
    },
  ],
};
