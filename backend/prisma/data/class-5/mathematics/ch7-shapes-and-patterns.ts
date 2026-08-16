export const ch7ShapesAndPatternsData = {
  chapterNumber: 7,
  title: 'Shapes and Patterns',
  description: 'Geometric tessellations, number patterns, 2D/3D shapes, rotational patterns, and sequence continuation.',
  topics: [
    { title: 'Tessellations & Floor Patterns', summary: 'Tiling shapes without gaps and identifying repeating geometric units.' },
    { title: 'Number Rules & Sequences', summary: 'Identifying arithmetic and geometric growing patterns.' },
  ],
  questions: [
    {
      questionCode: 'C5-MATH-SHA-001',
      questionText: 'What is the next number in the pattern: 4, 9, 16, 25, 36, ...?',
      questionType: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL',
      marks: 1,
      explanation: 'These are square numbers: 2², 3², 4², 5², 6². The next is 7² = 49.',
      options: [
        { text: '49', isCorrect: true },
        { text: '42', isCorrect: false },
        { text: '45', isCorrect: false },
        { text: '50', isCorrect: false },
      ],
    },
    {
      questionCode: 'C5-MATH-SHA-002',
      questionText: 'What is the rule for the pattern: 3, 7, 15, 31, 63, ...?',
      questionType: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL',
      marks: 2,
      explanation: 'Multiply by 2 and add 1: (3×2)+1=7, (7×2)+1=15, (15×2)+1=31, etc.',
      options: [
        { text: 'Multiply by 2 and add 1', isCorrect: true },
        { text: 'Add 4, then 8, then 16', isCorrect: false },
        { text: 'Multiply by 3', isCorrect: false },
        { text: 'Square the previous number', isCorrect: false },
      ],
    },
  ],
};
