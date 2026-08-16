export const ch1SetsClass11Data = {
  classNumber: 11,
  className: 'Class 11',
  subjectName: 'Mathematics',
  subjectCode: 'MATH11',
  chapterNumber: 1,
  chapterTitle: 'Sets',
  summary: 'Sets and representations, Empty/Finite/Infinite sets, Subsets, Power set, Universal set, Venn diagrams, Operations on sets (Union, Intersection, Difference), De Morgan’s Laws.',
  contentMarkdown: `# Chapter 1: Sets (Class 11 Mathematics NEP 2025)

## 1. Set Operations
- **Union ($A \\cup B$)**: Elements in $A$ or $B$ or both.
- **Intersection ($A \\cap B$)**: Common elements in $A$ and $B$.
- **Difference ($A - B$)**: Elements in $A$ but NOT in $B$.
- **Complement ($A'$)**: $U - A$.

## 2. De Morgan's Laws
1. $(A \\cup B)' = A' \\cap B'$
2. $(A \\cap B)' = A' \\cup B'$

## 3. Cardinality Formula
$$n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$$
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Sets & Operations',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'demorgan',
          label: "De Morgan's Laws",
          type: 'category',
          children: [
            { id: 'dm1', label: '(A ∪ B)\' = A\' ∩ B\'', type: 'concept' },
            { id: 'dm2', label: '(A ∩ B)\' = A\' ∪ B\'', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C11-MATH-CH1-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'If a set A has n elements, how many elements are there in its Power Set P(A)?',
      explanation: 'The power set P(A) contains 2ⁿ elements.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '2ⁿ', isCorrect: true },
        { optionLabel: 'B', optionText: 'n²', isCorrect: false },
        { optionLabel: 'C', optionText: '2n', isCorrect: false },
        { optionLabel: 'D', optionText: 'n!', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH1-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'If A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, find A ∩ B.',
      explanation: 'Intersection consists of common elements: {3, 4}.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '{3, 4}', isCorrect: true },
        { optionLabel: 'B', optionText: '{1, 2, 3, 4, 5, 6}', isCorrect: false },
        { optionLabel: 'C', optionText: '{1, 2}', isCorrect: false },
        { optionLabel: 'D', optionText: '{5, 6}', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH1-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'If n(A) = 15, n(B) = 20, and n(A ∪ B) = 30, find n(A ∩ B).',
      explanation: 'n(A ∪ B) = n(A) + n(B) - n(A ∩ B) => 30 = 15 + 20 - n(A ∩ B) => n(A ∩ B) = 35 - 30 = 5.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '5', isCorrect: true },
        { optionLabel: 'B', optionText: '10', isCorrect: false },
        { optionLabel: 'C', optionText: '15', isCorrect: false },
        { optionLabel: 'D', optionText: '25', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH1-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'In a group of 70 people, 37 like coffee, 52 like tea, and each person likes at least one of the two drinks. How many people like BOTH coffee and tea?',
      explanation: 'n(C ∪ T) = n(C) + n(T) - n(C ∩ T) => 70 = 37 + 52 - n(C ∩ T) => n(C ∩ T) = 89 - 70 = 19.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '19', isCorrect: true },
        { optionLabel: 'B', optionText: '15', isCorrect: false },
        { optionLabel: 'C', optionText: '21', isCorrect: false },
        { optionLabel: 'D', optionText: '17', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH1-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [JEE Main / Olympiad] If A = {x : x = 4ⁿ - 3n - 1, n ∈ N} and B = {x : x = 9(n - 1), n ∈ N}, then A ∪ B is equal to:',
      explanation: 'For A: n=1 => 0, n=2 => 9, n=3 => 54. A consists of multiples of 9 of form (4ⁿ-3n-1). B consists of ALL multiples of 9: 0, 9, 18, 27, 36... Since A ⊆ B, A ∪ B = B.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'B', isCorrect: true },
        { optionLabel: 'B', optionText: 'A', isCorrect: false },
        { optionLabel: 'C', optionText: 'N (Set of natural numbers)', isCorrect: false },
        { optionLabel: 'D', optionText: 'Null set', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH1-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] Which of the following set identities represents De Morgan’s Second Law?',
      explanation: '(A ∩ B)\' = A\' ∪ B\'.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '(A ∩ B)\' = A\' ∪ B\'', isCorrect: true },
        { optionLabel: 'B', optionText: '(A ∪ B)\' = A\' ∪ B\'', isCorrect: false },
        { optionLabel: 'C', optionText: '(A ∩ B)\' = A\' ∩ B\'', isCorrect: false },
        { optionLabel: 'D', optionText: 'A - B = A ∩ B', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH1-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'What is the symmetric difference of two sets A and B, denoted by A Δ B?',
      explanation: 'A Δ B = (A - B) ∪ (B - A).',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '(A - B) ∪ (B - A)', isCorrect: true },
        { optionLabel: 'B', optionText: 'A ∩ B', isCorrect: false },
        { optionLabel: 'C', optionText: '(A ∪ B) - (A ∪ B)', isCorrect: false },
        { optionLabel: 'D', optionText: 'A\' ∩ B\'', isCorrect: false },
      ],
    },
    {
      questionCode: 'C11-MATH-CH1-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'If A and B are disjoint sets, then n(A ∩ B) is equal to:',
      explanation: 'Disjoint sets have no elements in common, so n(A ∩ B) = 0.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '0', isCorrect: true },
        { optionLabel: 'B', optionText: '1', isCorrect: false },
        { optionLabel: 'C', optionText: 'n(A) + n(B)', isCorrect: false },
        { optionLabel: 'D', optionText: 'n(A)', isCorrect: false },
      ],
    },
  ],
};
