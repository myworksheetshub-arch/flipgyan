export const christmasPresentData = {
  classNumber: 8,
  className: 'Class 8',
  subjectName: 'English',
  subjectCode: 'ENG8',
  chapterNumber: 1,
  chapterTitle: 'The Best Christmas Present in the World',
  summary: 'Honeydew Unit 1 — Story by Michael Morpurgo set during World War I Christmas truce (1914) between British and German soldiers.',
  contentMarkdown: `# Unit 1: The Best Christmas Present in the World (Class 8 English)

## 1. Plot Summary
The narrator buys a roll-top desk from a junk shop in Bridport and finds a secret drawer containing a letter written by **Captain Jim Macpherson** of the Royal Welch Fusiliers to his wife **Connie**, dated December 25, 1914.

## 2. The WWI Christmas Truce (1914)
Jim describes how British ('Tommy') and German ('Fritz') soldiers declared an informal truce on Christmas Day in No Man's Land:
- They shared schnapps, rum, sausages, and Christmas cake.
- They played a game of **football** together.
- Officers Captain Jim Macpherson and **Hans Wolf** agreed that sports are better than war to resolve conflicts.

## 3. Connie's Reunion
The narrator delivers the letter to 101-year-old Connie in a nursing home. Mistaking the narrator for her long-lost husband Jim, she calls his return "the best Christmas present in the world".
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'The Best Christmas Present',
      type: 'root',
      color: '#8b5cf6',
      children: [
        {
          id: 'characters',
          label: 'Main Characters',
          type: 'category',
          children: [
            { id: 'jim', label: 'Captain Jim Macpherson (British Soldier)', type: 'concept' },
            { id: 'hans', label: 'Hans Wolf (German Officer)', type: 'concept' },
            { id: 'connie', label: 'Connie Macpherson (101 years old)', type: 'concept' },
          ],
        },
        {
          id: 'truce',
          label: 'Christmas Truce 1914',
          type: 'category',
          children: [
            { id: 'football', label: 'Football Match in No Man’s Land', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C8-ENG-CHR-001',
      questionText: 'What game did British and German soldiers play together in No Man’s Land during the 1914 Christmas Truce?',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: 'Football', isCorrect: true, explanation: 'British and German soldiers played a game of football together.' },
        { text: 'Cricket', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'Chess', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'Tennis', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'During the historic 1914 WWI Christmas Truce, soldiers played a game of football in No Man’s Land.',
    },
  ],
};
