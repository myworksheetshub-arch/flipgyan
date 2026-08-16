export const ch11GrandmothersQuiltData = {
  chapterNumber: 11,
  title: 'Grandmother\'s Quilt',
  description: 'Area of irregular shapes, patch quilts, unit square counting, and perimeter-area relationships.',
  topics: [
    { title: 'Patchwork Area & Unit Squares', summary: 'Combining square patches to calculate total quilt surface area.' },
    { title: 'Comparing Perimeter & Area', summary: 'Understanding how shapes with same area can have different perimeters.' },
  ],
  questions: [
    {
      questionCode: 'C5-MATH-GRA-001',
      questionText: 'A quilt made of 12 square patches of side 10 cm each has a total area of:',
      questionType: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      marks: 1,
      explanation: 'Area of 1 patch = 10 × 10 = 100 cm². Total area = 12 × 100 = 1200 cm².',
      options: [
        { text: '1200 cm²', isCorrect: true },
        { text: '120 cm²', isCorrect: false },
        { text: '400 cm²', isCorrect: false },
        { text: '1440 cm²', isCorrect: false },
      ],
    },
    {
      questionCode: 'C5-MATH-GRA-002',
      questionText: 'Two rectangular quilt pieces have dimensions 8 cm × 5 cm and 10 cm × 4 cm. Do they have the same area?',
      questionType: 'TRUE_FALSE',
      difficulty: 'EASY',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      marks: 1,
      explanation: '8 × 5 = 40 cm² and 10 × 4 = 40 cm². Both areas are equal!',
      options: [
        { text: 'True', isCorrect: true },
        { text: 'False', isCorrect: false },
      ],
    },
  ],
};
