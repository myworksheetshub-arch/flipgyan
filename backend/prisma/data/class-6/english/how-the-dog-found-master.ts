export const howTheDogFoundMasterData = {
  classNumber: 6,
  className: 'Class 6',
  subjectName: 'English',
  subjectCode: 'ENG6',
  chapterNumber: 2,
  chapterTitle: 'How the Dog Found Himself a New Master!',
  summary: 'Honeysuckle Unit 2 — Folk tale about how wild dogs decided to serve the strongest creature on earth, trying the Wolf, Bear, Lion, and finally Man.',
  contentMarkdown: `# Unit 2: How the Dog Found Himself a New Master! (Class 6 English)

## 1. Ancient Dogs
Once upon a time, dogs were their own masters and lived in freedom like wolves. But one dog was tired of wandering alone looking for food and afraid of stronger animals, so he decided to become a servant to the strongest creature on earth.

## 2. Search for the Strongest Master
1. **First Master — The Big Wolf**: The dog joined his kinsman, the Wolf. But the wolf ran away in fear upon smelling a **Bear**.
2. **Second Master — The Bear**: The bear agreed to be his master. But as they approached a herd of cows, the bear ran into the forest in fear of a roaring **Lion**.
3. **Third Master — The Lion**: The king of the forest became his master for a long time. But one day, the lion stopped and sniffed the air, warning that a **Man** was approaching and they must flee.
4. **Final Master — Man**: Seeing that Man was stronger than even the Lion, the dog left the lion to serve **Man**.

## 3. Moral & Legacy
Since that day, the dog has remained Man's most loyal servant and knows no other master.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'How the Dog Found a Master',
      type: 'root',
      color: '#8b5cf6',
      children: [
        {
          id: 'sequence',
          label: 'Master Sequence',
          type: 'category',
          children: [
            { id: 'wolf', label: '1. Wolf (Afraid of Bear)', type: 'concept' },
            { id: 'bear', label: '2. Bear (Afraid of Lion)', type: 'concept' },
            { id: 'lion', label: '3. Lion (Afraid of Man)', type: 'concept' },
            { id: 'man', label: '4. MAN (Strongest on Earth)', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C6-ENG-HOW-001',
      questionText: 'Who was the dog’s FIRST master, and why did the dog leave him?',
      difficulty: 'EASY',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: 'The Wolf, left because the wolf was afraid of the Bear', isCorrect: true, explanation: 'The wolf ran away in fear when he smelled the bear.' },
        { text: 'The Lion, left because lion was lazy', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'The Bear, left because bear was small', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'Man, left to join wolves', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'The dog first chose the Wolf, but left him when he saw the wolf was afraid of the Bear.',
    },
    {
      questionCode: 'C6-ENG-HOW-002',
      questionText: 'Who did the dog finally choose as his permanent master on earth?',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: 'Man', isCorrect: true, explanation: 'The dog chose Man because Man is stronger than all animals.' },
        { text: 'The Lion', isCorrect: false, explanation: 'The lion was afraid of Man.' },
        { text: 'The Elephant', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'The Tiger', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'Seeing that even the mighty Lion feared Man, the dog chose Man to be his final, most loyal master.',
    },
  ],
};
