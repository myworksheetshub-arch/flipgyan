export const ch5EuclidsGeometryClass9Data = {
  classNumber: 9,
  className: 'Class 9',
  subjectName: 'Mathematics',
  subjectCode: 'MATH9',
  chapterNumber: 5,
  chapterTitle: "Introduction to Euclid's Geometry",
  summary: "Euclid's definitions, axioms, 5 postulates, Playfair's axiom for parallel lines, consistency of postulates.",
  contentMarkdown: `# Chapter 5: Introduction to Euclid's Geometry (Class 9 Mathematics NEP 2025)

## 1. Euclid's 5 Postulates
1. A straight line may be drawn from any one point to any other point.
2. A terminated line can be produced indefinitely.
3. A circle can be drawn with any centre and any radius.
4. All right angles are equal to one another.
5. **Parallel Postulate**: If a straight line falling on two straight lines makes interior angles on the same side less than two right angles ($180^\\circ$), the two lines will meet on that side.

## 2. Playfair's Axiom
For every line $L$ and for every point $P$ not lying on $L$, there exists **unique line** passing through $P$ and parallel to $L$.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: "Euclid's Geometry",
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'postulates',
          label: '5 Postulates & Playfair',
          type: 'category',
          children: [
            { id: 'post5', label: '5th Postulate: Parallel Lines Condition', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C9-MATH-CH5-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'How many lines can pass through a single given point?',
      explanation: 'Infinitely many lines can pass through a single point.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Infinitely many', isCorrect: true },
        { optionLabel: 'B', optionText: 'Only one line', isCorrect: false },
        { optionLabel: 'C', optionText: 'Two lines', isCorrect: false },
        { optionLabel: 'D', optionText: 'None', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH5-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'How many lines pass through TWO distinct given points?',
      explanation: 'Axiom 5.1: Given two distinct points, there is a unique line that passes through them.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Exactly one unique line', isCorrect: true },
        { optionLabel: 'B', optionText: 'Two lines', isCorrect: false },
        { optionLabel: 'C', optionText: 'Infinitely many', isCorrect: false },
        { optionLabel: 'D', optionText: 'Zero lines', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH5-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      questionText: 'If a point C lies between two points A and B such that AC = BC, then which of the following is true?',
      explanation: 'AB = AC + BC. Since AC = BC, AB = AC + AC = 2AC => AC = 1/2 AB.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'AC = 1/2 AB', isCorrect: true },
        { optionLabel: 'B', optionText: 'AC = AB', isCorrect: false },
        { optionLabel: 'C', optionText: 'AC = 2 AB', isCorrect: false },
        { optionLabel: 'D', optionText: 'AB = 1/2 AC', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH5-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      questionText: 'Which of Euclid’s axioms states that "If equals are added to equals, the wholes are equal"?',
      explanation: 'Euclid’s Axiom 2: If equals are added to equals, the wholes are equal.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Axiom 2', isCorrect: true },
        { optionLabel: 'B', optionText: 'Axiom 1', isCorrect: false },
        { optionLabel: 'C', optionText: 'Axiom 3', isCorrect: false },
        { optionLabel: 'D', optionText: 'Axiom 4', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH5-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'LOGICAL_REASONING',
      questionText: '🏆 [CBSE Olympiad] Which equivalent version of Euclid’s Fifth Postulate is known as Playfair’s Axiom?',
      explanation: 'Playfair’s Axiom states: For every line L and for every point P not lying on L, there exists a unique line passing through P and parallel to L.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'For every line L and point P not on L, there exists a unique line through P parallel to L', isCorrect: true },
        { optionLabel: 'B', optionText: 'Two intersecting lines can be parallel to the same line', isCorrect: false },
        { optionLabel: 'C', optionText: 'All straight lines intersect at infinity', isCorrect: false },
        { optionLabel: 'D', optionText: 'Parallel lines meet at 90 degrees', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH5-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] Non-Euclidean geometry (Spherical/Elliptic geometry) is formed when which of Euclid’s postulates is modified or negated?',
      explanation: 'Modifying or replacing Euclid’s 5th Postulate (Parallel Postulate) leads to Non-Euclidean geometry.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Fifth Postulate', isCorrect: true },
        { optionLabel: 'B', optionText: 'First Postulate', isCorrect: false },
        { optionLabel: 'C', optionText: 'Third Postulate', isCorrect: false },
        { optionLabel: 'D', optionText: 'Fourth Postulate', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH5-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'According to Euclid, a "Point" is defined as:',
      explanation: 'Euclid defined: A point is that which has no part.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'That which has no part', isCorrect: true },
        { optionLabel: 'B', optionText: 'Breadthless length', isCorrect: false },
        { optionLabel: 'C', optionText: 'A dot with length and width', isCorrect: false },
        { optionLabel: 'D', optionText: 'Surface boundary', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH5-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      questionText: 'Things which coincide with one another are:',
      explanation: 'Euclid’s Axiom 4: Things which coincide with one another are equal to one another.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Equal to one another', isCorrect: true },
        { optionLabel: 'B', optionText: 'Unequal', isCorrect: false },
        { optionLabel: 'C', optionText: 'Double of one another', isCorrect: false },
        { optionLabel: 'D', optionText: 'Half of one another', isCorrect: false },
      ],
    },
  ],
};
