export const kalpanaChawlaData = {
  classNumber: 6,
  className: 'Class 6',
  subjectName: 'English',
  subjectCode: 'ENG6',
  chapterNumber: 4,
  chapterTitle: 'An Indian-American Woman in Space: Kalpana Chawla',
  summary: 'Honeysuckle Unit 4 — Biography of astronaut Kalpana Chawla, her journey from Karnal, Haryana to NASA, Columbia space shuttle missions, and inspirational legacy.',
  contentMarkdown: `# Unit 4: Kalpana Chawla (Class 6 English Honeysuckle)

## 1. Early Life in Karnal
**Kalpana Chawla** was born in Karnal, Haryana. She graduated in Aeronautical Engineering from Punjab Engineering College, Chandigarh, and moved to the United States for a Master's and Ph.D. degree in Aerospace Engineering.

## 2. Becoming a NASA Astronaut
- Naturalised U.S. citizen married to flight instructor Jean-Pierre Harrison.
- Licensed to fly single & multi-engine land airplanes, seaplanes, and gliders. Also a certified flight instructor.
- Selected by NASA for astronaut training in 1994.

## 3. Space Missions
- **First Space Mission (1997)**: Aboard Space Shuttle **Columbia** (STS-87). Lasted 15 days, 16 hours, and 34 minutes. Traveled $10.45$ million kilometers in 252 orbits around Earth.
- **Tragic Second Mission (2003)**: On February 1, 2003, Space Shuttle **Columbia** (STS-107) broke apart during re-entry over Texas, killing all 7 crew members.

## 4. Inspirational Message to Students
In a message from space to students in Chandigarh, Kalpana said:
> *"The path from dreams to success does exist. May you have the vision to find it, the courage to get onto it..."*
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Kalpana Chawla',
      type: 'root',
      color: '#8b5cf6',
      children: [
        {
          id: 'early',
          label: 'Karnal to NASA',
          type: 'category',
          children: [
            { id: 'education', label: 'PEC Chandigarh -> US MS/PhD Aerospace', type: 'concept' },
            { id: 'license', label: 'Licensed Pilot & Flight Instructor', type: 'concept' },
          ],
        },
        {
          id: 'columbia',
          label: 'Columbia Missions',
          type: 'category',
          children: [
            { id: 'sts87', label: '1st Mission 1997 (STS-87): 252 Orbits', type: 'concept' },
            { id: 'sts107', label: '2nd Mission 2003 (STS-107): Feb 1 Tragedy', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C6-ENG-KAL-001',
      questionText: 'Where was Kalpana Chawla born before emigrating to the United States?',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: 'Karnal, Haryana', isCorrect: true, explanation: 'Kalpana Chawla was born in Karnal, Haryana.' },
        { text: 'Chandigarh, Punjab', isCorrect: false, explanation: 'Studied engineering at PEC Chandigarh.' },
        { text: 'Delhi', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'Mumbai', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'Kalpana Chawla was born in Karnal, Haryana, India.',
    },
  ],
};
