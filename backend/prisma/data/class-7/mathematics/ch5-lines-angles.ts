export const ch5LinesAnglesClass7Data = {
  classNumber: 7,
  className: 'Class 7',
  subjectName: 'Mathematics',
  subjectCode: 'MATH7',
  chapterNumber: 5,
  chapterTitle: 'Lines and Angles',
  summary: 'Complementary angles (sum = 90°), Supplementary angles (sum = 180°), Adjacent angles, Linear Pair, Vertically Opposite angles, Parallel lines cut by a transversal.',
  contentMarkdown: `# Chapter 5: Lines and Angles (Class 7 Mathematics NEP 2025)

## 1. Angle Pairs
- **Complementary Angles**: Two angles whose sum is $90^\\circ$.
- **Supplementary Angles**: Two angles whose sum is $180^\\circ$.
- **Linear Pair**: Adjacent angles whose non-common arms form a straight line (sum $= 180^\\circ$).
- **Vertically Opposite Angles**: When two lines intersect, vertically opposite angles are **equal**.

## 2. Parallel Lines & Transversal
- Corresponding angles are equal.
- Alternate interior angles are equal.
- Interior angles on the same side of transversal add up to $180^\\circ$.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Lines & Angles',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'angle-pairs',
          label: 'Angle Relationships',
          type: 'category',
          children: [
            { id: 'comp-supp', label: 'Comp = 90°, Supp = 180°', type: 'concept' },
            { id: 'vert-opp', label: 'Vertically Opposite Angles are Equal', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C7-MATH-CH5-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'What is the complement of 35°?',
      explanation: 'Complementary angles add to 90°. Complement of 35° = 90° - 35° = 55°.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '55°', isCorrect: true },
        { optionLabel: 'B', optionText: '145°', isCorrect: false },
        { optionLabel: 'C', optionText: '65°', isCorrect: false },
        { optionLabel: 'D', optionText: '45°', isCorrect: false },
      ],
    },
    {
      questionCode: 'C7-MATH-CH5-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'What is the supplement of 105°?',
      explanation: 'Supplementary angles add to 180°. Supplement of 105° = 180° - 105° = 75°.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '75°', isCorrect: true },
        { optionLabel: 'B', optionText: '85°', isCorrect: false },
        { optionLabel: 'C', optionText: '105°', isCorrect: false },
        { optionLabel: 'D', optionText: '15°', isCorrect: false },
      ],
    },
    {
      questionCode: 'C7-MATH-CH5-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'An angle is equal to its complement. Find the measure of the angle.',
      explanation: 'Let angle be x. x + x = 90° => 2x = 90° => x = 45°.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '45°', isCorrect: true },
        { optionLabel: 'B', optionText: '90°', isCorrect: false },
        { optionLabel: 'C', optionText: '30°', isCorrect: false },
        { optionLabel: 'D', optionText: '60°', isCorrect: false },
      ],
    },
    {
      questionCode: 'C7-MATH-CH5-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'Two supplementary angles are in the ratio 4 : 5. Find the larger angle.',
      explanation: '4x + 5x = 180° => 9x = 180° => x = 20°. Larger angle = 5(20°) = 100°.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '100°', isCorrect: true },
        { optionLabel: 'B', optionText: '80°', isCorrect: false },
        { optionLabel: 'C', optionText: '90°', isCorrect: false },
        { optionLabel: 'D', optionText: '120°', isCorrect: false },
      ],
    },
    {
      questionCode: 'C7-MATH-CH5-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [CBSE Olympiad] Line l is parallel to line m. A transversal intersects them. If a pair of interior angles on the same side of transversal are 3x + 10° and 2x - 15°, find x.',
      explanation: 'Co-interior angles sum to 180°: (3x + 10) + (2x - 15) = 180° => 5x - 5 = 180° => 5x = 185° => x = 37°.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '37°', isCorrect: true },
        { optionLabel: 'B', optionText: '35°', isCorrect: false },
        { optionLabel: 'C', optionText: '40°', isCorrect: false },
        { optionLabel: 'D', optionText: '30°', isCorrect: false },
      ],
    },
    {
      questionCode: 'C7-MATH-CH5-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] An angle is 28° less than its supplement. What is the angle?',
      explanation: 'Let angle be x. Supplement = 180° - x. x = (180° - x) - 28° => 2x = 152° => x = 76°.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '76°', isCorrect: true },
        { optionLabel: 'B', optionText: '104°', isCorrect: false },
        { optionLabel: 'C', optionText: '62°', isCorrect: false },
        { optionLabel: 'D', optionText: '52°', isCorrect: false },
      ],
    },
    {
      questionCode: 'C7-MATH-CH5-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'When two lines intersect, vertically opposite angles are always:',
      explanation: 'Vertically opposite angles formed by intersecting lines are ALWAYS EQUAL.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Equal', isCorrect: true },
        { optionLabel: 'B', optionText: 'Supplementary', isCorrect: false },
        { optionLabel: 'C', optionText: 'Complementary', isCorrect: false },
        { optionLabel: 'D', optionText: 'Unequal', isCorrect: false },
      ],
    },
    {
      questionCode: 'C7-MATH-CH5-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'In a linear pair of angles, if one angle is acute (< 90°), then the other angle MUST be:',
      explanation: 'Since acute angle < 90° and sum = 180°, the other angle must be > 90° (OBTUSE).',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Obtuse angle', isCorrect: true },
        { optionLabel: 'B', optionText: 'Acute angle', isCorrect: false },
        { optionLabel: 'C', optionText: 'Right angle', isCorrect: false },
        { optionLabel: 'D', optionText: 'Reflex angle', isCorrect: false },
      ],
    },
  ],
};
