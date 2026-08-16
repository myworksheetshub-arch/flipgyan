export const ch14MapsAndLocationsData = {
  chapterNumber: 14,
  title: 'Maps and Locations',
  description: 'Grid coordinates, directions (North, South, East, West), reading town maps, and shortest path problems.',
  topics: [
    { title: 'Grid Coordinates (Rows & Columns)', summary: 'Locating points on alpha-numeric grid boards.' },
    { title: 'Cardinal Directions & Route Navigation', summary: 'Navigating paths using N, S, E, W turn instructions.' },
  ],
  questions: [
    {
      questionCode: 'C5-MATH-MAP-001',
      questionText: 'If you face East and turn 90° clockwise, which direction will you face?',
      questionType: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      marks: 1,
      explanation: 'Turning 90° clockwise from East leads to South.',
      options: [
        { text: 'South', isCorrect: true },
        { text: 'North', isCorrect: false },
        { text: 'West', isCorrect: false },
        { text: 'South-East', isCorrect: false },
      ],
    },
    {
      questionCode: 'C5-MATH-MAP-002',
      questionText: 'If a school is located at grid coordinate C4 and a park is 3 units East of the school, the park\'s coordinate is:',
      questionType: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'CONCEPTUAL',
      marks: 1,
      explanation: 'Moving East shifts column C to F (C + 3 = F). Park is at F4.',
      options: [
        { text: 'F4', isCorrect: true },
        { text: 'C7', isCorrect: false },
        { text: 'D4', isCorrect: false },
        { text: 'E4', isCorrect: false },
      ],
    },
  ],
};
