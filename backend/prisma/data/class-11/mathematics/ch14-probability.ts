export const ch14ProbabilityClass11Data = {
  classNumber: 11,
  className: 'Class 11',
  subjectName: 'Mathematics',
  subjectCode: 'MATH11',
  chapterNumber: 14,
  chapterTitle: 'Probability',
  summary: 'Random Experiments, Sample space S, Events (Impossible, Sure, Simple, Compound), Mutually Exclusive events (A ∩ B = Ø), Exhaustive events (A ∪ B = S), Axiomatic approach to probability.',
  contentMarkdown: `# Chapter 14: Probability (Class 11 Mathematics NEP 2025)

## 1. Event Definitions
- **Mutually Exclusive**: Events $A$ and $B$ cannot occur simultaneously:
  $$A \\cap B = \\emptyset \\implies P(A \\cap B) = 0$$
- **Exhaustive Events**: $A_1 \\cup A_2 \\cup \\dots \\cup A_n = S$.

## 2. Addition Rule of Probability
$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$
- For **Mutually Exclusive** events:
  $$P(A \\cup B) = P(A) + P(B)$$
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Probability Axioms',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'events-types',
          label: 'Event Relations',
          type: 'category',
          children: [
            { id: 'mut-excl', label: 'Mutually Exclusive: A ∩ B = Ø, P(A ∩ B) = 0', type: 'concept' },
            { id: 'exhaustive', label: 'Exhaustive: A ∪ B = S', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C11-MATH-CH14-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'If A and B are Mutually Exclusive events, what is P(A ∩ B)?',
      explanation: 'Mutually exclusive events cannot happen together, so P(A ∩ B) = 0.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '0', isCorrect: true },
        { optionLabel: 'B', optionText: '1', isCorrect: false },
        { optionLabel: 'C', optionText: 'P(A) × P(B)', isCorrect: false },
        { optionLabel: 'D', optionText: 'P(A) + P(B)', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH14-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'A coin is tossed twice. What is the Sample Space S?',
      explanation: 'S = {HH, HT, TH, TT}. Total 4 outcomes.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '{HH, HT, TH, TT}', isCorrect: true },
        { optionLabel: 'B', optionText: '{H, T}', isCorrect: false },
        { optionLabel: 'C', optionText: '{HH, TT}', isCorrect: false },
        { optionLabel: 'D', optionText: '{HHH, TTT}', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH14-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'If P(A) = 3/5 and P(B) = 1/5, find P(A ∪ B) if A and B are mutually exclusive events.',
      explanation: 'P(A ∪ B) = P(A) + P(B) = 3/5 + 1/5 = 4/5.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '4/5', isCorrect: true },
        { optionLabel: 'B', optionText: '3/25', isCorrect: false },
        { optionLabel: 'C', optionText: '2/5', isCorrect: false },
        { optionLabel: 'D', optionText: '1/5', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH14-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'If P(A) = 0.42, P(B) = 0.48, and P(A ∩ B) = 0.16, find P(not A and not B) = P(A\' ∩ B\').',
      explanation: 'By De Morgan: P(A\' ∩ B\') = P((A ∪ B)\') = 1 - P(A ∪ B). P(A ∪ B) = 0.42 + 0.48 - 0.16 = 0.74. P(A\' ∩ B\') = 1 - 0.74 = 0.26.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '0.26', isCorrect: true },
        { optionLabel: 'B', optionText: '0.74', isCorrect: false },
        { optionLabel: 'C', optionText: '0.34', isCorrect: false },
        { optionLabel: 'D', optionText: '0.16', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH14-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [JEE Main / Olympiad] In a relay race, four letters are placed into four addressed envelopes at random. What is the probability that AT LEAST ONE letter goes into its correct envelope?',
      explanation: 'Probability that NO letter goes into correct envelope (Derangement D4) = 1/2! - 1/3! + 1/4! = 1/2 - 1/6 + 1/24 = 9/24 = 3/8. P(at least 1 correct) = 1 - 3/8 = 5/8.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '5/8 (15/24)', isCorrect: true },
        { optionLabel: 'B', optionText: '3/8', isCorrect: false },
        { optionLabel: 'C', optionText: '1/2', isCorrect: false },
        { optionLabel: 'D', optionText: '7/8', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH14-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] Out of 100 students, 50 play Cricket, 30 play Football, and 10 play Both. If a student is selected at random, find the probability that the student plays NEITHER Cricket NOR Football.',
      explanation: 'n(C ∪ F) = 50 + 30 - 10 = 70. Neither = 100 - 70 = 30. P = 30 / 100 = 3/10.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '3/10', isCorrect: true },
        { optionLabel: 'B', optionText: '7/10', isCorrect: false },
        { optionLabel: 'C', optionText: '1/10', isCorrect: false },
        { optionLabel: 'D', optionText: '1/2', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH14-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'If A and B are two events such that P(A ∪ B) = P(A) + P(B), then A and B must be:',
      explanation: 'This occurs when P(A ∩ B) = 0, which means A and B are Mutually Exclusive.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Mutually Exclusive', isCorrect: true },
        { optionLabel: 'B', optionText: 'Exhaustive', isCorrect: false },
        { optionLabel: 'C', optionText: 'Independent', isCorrect: false },
        { optionLabel: 'D', optionText: 'Equally Likely', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH14-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: '3 cards are drawn at random from a pack of 52 cards. What is the probability that all 3 are Kings?',
      explanation: 'Favourable ways: ⁴C₃ = 4. Total ways: ⁵²C₃ = (52 × 51 × 50)/6 = 22100. P = 4 / 22100 = 1 / 5525.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '1 / 5525', isCorrect: true },
        { optionLabel: 'B', optionText: '1 / 2210', isCorrect: false },
        { optionLabel: 'C', optionText: '4 / 52', isCorrect: false },
        { optionLabel: 'D', optionText: '3 / 52', isCorrect: false },
      ],
    },
  ],
};
