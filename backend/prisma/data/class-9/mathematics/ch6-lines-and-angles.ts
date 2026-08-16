export const ch6LinesAndAnglesClass9Data = {
  classNumber: 9,
  className: 'Class 9',
  subjectName: 'Mathematics',
  subjectCode: 'MATH9',
  chapterNumber: 6,
  chapterTitle: 'Lines and Angles',
  summary: 'Linear pair axiom, vertically opposite angles, parallel lines with transversal (corresponding, alternate interior angles), angle sum property of a triangle.',
  contentMarkdown: `# Chapter 6: Lines and Angles (Class 9 Mathematics NEP 2025)

## 1. Linear Pair & Vertically Opposite
- **Linear Pair Axiom**: If a ray stands on a line, the sum of two adjacent angles is $180^\\circ$.
- **Vertically Opposite Angles**: When two lines intersect, vertically opposite angles are **equal**.

## 2. Parallel Lines & Transversal
When a transversal intersects two parallel lines:
- Corresponding angles are equal.
- Alternate interior angles are equal.
- Interior angles on the same side of transversal are **supplementary** ($180^\\circ$).
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Lines and Angles',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'parallel-trans',
          label: 'Parallel Lines + Transversal',
          type: 'category',
          children: [
            { id: 'alt-int', label: 'Alternate interior angles are equal', type: 'concept' },
            { id: 'co-int', label: 'Co-interior angles sum to 180°', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C9-MATH-CH6-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'If two interior angles on the same side of a transversal intersecting two parallel lines are in the ratio 2 : 3, find the larger angle.',
      explanation: 'Co-interior angles add to 180°. 2x + 3x = 180° => 5x = 180° => x = 36°. Larger angle = 3(36°) = 108°.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '108°', isCorrect: true },
        { optionLabel: 'B', optionText: '72°', isCorrect: false },
        { optionLabel: 'C', optionText: '90°', isCorrect: false },
        { optionLabel: 'D', optionText: '120°', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH6-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'In a linear pair of angles, if one angle is 65°, what is the measure of the other angle?',
      explanation: 'Linear pair angles sum to 180°. Other angle = 180° - 65° = 115°.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '115°', isCorrect: true },
        { optionLabel: 'B', optionText: '65°', isCorrect: false },
        { optionLabel: 'C', optionText: '125°', isCorrect: false },
        { optionLabel: 'D', optionText: '95°', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH6-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'An exterior angle of a triangle is 105° and its two interior opposite angles are equal. Find the measure of each of these equal angles.',
      explanation: 'Exterior angle = sum of interior opposite angles. 105° = x + x => 2x = 105° => x = 52.5°.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '52.5°', isCorrect: true },
        { optionLabel: 'B', optionText: '75°', isCorrect: false },
        { optionLabel: 'C', optionText: '60°', isCorrect: false },
        { optionLabel: 'D', optionText: '55°', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH6-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'In △ABC, if ∠A - ∠B = 33° and ∠B - ∠C = 18°, find ∠B.',
      explanation: '∠A = ∠B + 33°, ∠C = ∠B - 18°. ∠A + ∠B + ∠C = 180° => (∠B + 33) + ∠B + (∠B - 18) = 180° => 3∠B + 15 = 180 => 3∠B = 165 => ∠B = 55°.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '55°', isCorrect: true },
        { optionLabel: 'B', optionText: '88°', isCorrect: false },
        { optionLabel: 'C', optionText: '37°', isCorrect: false },
        { optionLabel: 'D', optionText: '60°', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH6-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [CBSE Olympiad] In △ABC, the bisectors of ∠B and ∠C intersect at point O. Which formula gives ∠BOC?',
      explanation: 'Angle formed by interior angle bisectors at O: ∠BOC = 90° + (1/2)∠A.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '90° + (1/2)∠A', isCorrect: true },
        { optionLabel: 'B', optionText: '90° - (1/2)∠A', isCorrect: false },
        { optionLabel: 'C', optionText: '180° - ∠A', isCorrect: false },
        { optionLabel: 'D', optionText: '2 ∠A', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH6-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] If two parallel lines are cut by a transversal, the bisectors of any pair of alternate interior angles are:',
      explanation: 'The bisectors of alternate interior angles are parallel to each other.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Parallel to each other', isCorrect: true },
        { optionLabel: 'B', optionText: 'Perpendicular to each other', isCorrect: false },
        { optionLabel: 'C', optionText: 'Intersecting at 45°', isCorrect: false },
        { optionLabel: 'D', optionText: 'Coincident', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH6-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'An angle which is equal to its complement is:',
      explanation: 'x + x = 90° => 2x = 90° => x = 45°.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '45°', isCorrect: true },
        { optionLabel: 'B', optionText: '90°', isCorrect: false },
        { optionLabel: 'C', optionText: '30°', isCorrect: false },
        { optionLabel: 'D', optionText: '60°', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH6-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'An angle is 20° more than its supplement. What is the angle?',
      explanation: 'Let angle = x. Supplement = 180° - x. x = (180° - x) + 20° => 2x = 200° => x = 100°.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '100°', isCorrect: true },
        { optionLabel: 'B', optionText: '80°', isCorrect: false },
        { optionLabel: 'C', optionText: '110°', isCorrect: false },
        { optionLabel: 'D', optionText: '70°', isCorrect: false },
      ],
    },
  ],
};
