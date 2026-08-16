export const patricksHomeworkData = {
  classNumber: 6,
  className: 'Class 6',
  subjectName: 'English',
  subjectCode: 'ENG6',
  chapterNumber: 1,
  chapterTitle: "Who Did Patrick's Homework? & A House, A Home",
  summary: 'Honeysuckle Unit 1 — Story of Patrick, the tiny elf, Patrick self-study transformation, and difference between a house (brick & mortar) and a home (loving family).',
  contentMarkdown: `# Unit 1: Who Did Patrick's Homework? & A House, A Home (Class 6 English)

## 1. Plot Summary
Patrick hated homework and loved playing hockey, basketball, and Nintendo. One day, he saved his cat from a tiny man (an **Elf**). The elf granted Patrick a wish:
"Do all my homework till the end of the semester (35 days)."

## 2. The Elf's Glitches & Patrick's Hard Work
The elf didn't know English words, Math tables, or Human History:
- He yelled for a dictionary to look up words.
- He needed help with addition, subtraction, fractions, and history.
- Patrick had to sit beside the elf, visit the library, and read books aloud every day and late into the night.

## 3. The Secret Twist
At the end of 35 days, Patrick got **A's in all subjects**! His classmates were amazed, his teachers smiled, and his parents were proud.
*Secret*: The elf didn't do Patrick's homework—**Patrick had done it himself** through his own hard work and self-study!

## 4. Poem: A House, A Home (by Lorraine M. Halli)
- **House**: Made of non-living bricks, stone, wood, glass, chimneys, tile floors, and doors.
- **Home**: Made of loving family members (unselfish acts, brothers, sisters, mothers, fathers) sharing and caring for one another.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: "Who Did Patrick's Homework?",
      type: 'root',
      color: '#8b5cf6',
      children: [
        {
          id: 'elf',
          label: 'The Tiny Elf & Wish',
          type: 'category',
          children: [
            { id: 'homework', label: '35 Days Semester Homework', type: 'concept' },
            { id: 'self-study', label: 'Patrick did all reading & math himself!', type: 'concept' },
          ],
        },
        {
          id: 'poem',
          label: 'A House, A Home Poem',
          type: 'category',
          children: [
            { id: 'house', label: 'House = Bricks, Wood, Glass', type: 'concept' },
            { id: 'home', label: 'Home = Loving Family & Caring', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C6-ENG-PAT-001',
      questionText: "Who actually did Patrick's homework in the story?",
      difficulty: 'EASY',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: 'Patrick himself through hard work and self-study', isCorrect: true, explanation: 'Patrick stayed up nights reading books and helping the elf with every problem.' },
        { text: 'The tiny elf', isCorrect: false, explanation: 'The elf knew nothing and made Patrick do all the work.' },
        { text: 'Patrick’s teacher', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'Patrick’s cat', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'Although Patrick thought the elf did his homework, Patrick himself worked harder than ever, read books, and solved all the problems.',
    },
    {
      questionCode: 'C6-ENG-PAT-002',
      questionText: "According to Lorraine M. Halli's poem, what makes a 'Home' different from a 'House'?",
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: 'A Home is made of loving family members sharing and caring', isCorrect: true, explanation: 'A home is created by family love and unselfish acts.' },
        { text: 'A Home is made of bricks and stone', isCorrect: false, explanation: 'That defines a House.' },
        { text: 'A Home has a glass yard', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'A Home has high chimneys', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'A house is a physical structure of bricks and wood, whereas a home is built by loving family members.',
    },
  ],
};
