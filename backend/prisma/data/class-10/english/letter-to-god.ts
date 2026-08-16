export const letterToGodData = {
  classNumber: 10,
  className: 'Class 10',
  subjectName: 'English',
  subjectCode: 'ENG10',
  chapterNumber: 1,
  chapterTitle: 'A Letter to God',
  summary: 'First Flight Unit 1 — G.L. Fuentes story about Lencho, a hard-working farmer whose cornfield is destroyed by hailstorm, and his unshakable faith in God.',
  contentMarkdown: `# Unit 1: A Letter to God (Class 10 English First Flight)

## 1. Plot Summary
**Lencho** is a dedicated farmer living on the crest of a low hill. He eagerly awaits rain for his ripe corn field. A heavy downpour turns into a devastating **hailstorm**, destroying every leaf and flower, leaving Lencho's family facing starvation.

## 2. Unshakable Faith in God
Having complete faith in God, Lencho writes a letter addressed to *"God"*, asking for **100 pesos** to resow his field and live until the next crop.

## 3. The Postmaster's Gesture & Irony
The postmaster reads the letter, marvels at Lencho's faith, and collects **70 pesos** from his employees and friends to send back signed *"God"*.

### Ending Irony
When Lencho receives 70 pesos instead of 100, he believes God could not have made a mistake. He writes a second letter asking God to send the remaining 30 pesos directly, calling the helpful post office employees a *"bunch of crooks"*.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'A Letter to God',
      type: 'root',
      color: '#7c3aed',
      children: [
        {
          id: 'hailstorm',
          label: 'Cornfield Destroyed by Hailstorm',
          type: 'category',
          children: [
            { id: '100pesos', label: 'Asks God for 100 Pesos', type: 'concept' },
          ],
        },
        {
          id: 'irony',
          label: 'Postmaster & Irony',
          type: 'category',
          children: [
            { id: '70pesos', label: 'Postmaster sends 70 Pesos signed God', type: 'concept' },
            { id: 'crooks', label: 'Irony: Calls post office staff crooks', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C10-ENG-LET-001',
      questionText: 'How many pesos did Lencho ask God for in his first letter, and how many did he actually receive?',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: 'Asked 100 pesos, Received 70 pesos', isCorrect: true, explanation: 'Lencho asked for 100 pesos and received 70 pesos from the postmaster.' },
        { text: 'Asked 50 pesos, Received 50 pesos', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'Asked 100 pesos, Received 100 pesos', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'Asked 70 pesos, Received 100 pesos', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'Lencho requested 100 pesos from God to buy seeds and survive, but received 70 pesos collected by the postmaster.',
    },
  ],
};
