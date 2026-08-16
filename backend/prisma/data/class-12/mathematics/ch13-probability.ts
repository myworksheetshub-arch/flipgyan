export const ch13ProbabilityClass12Data = {
  classNumber: 12,
  className: 'Class 12',
  subjectName: 'Mathematics',
  subjectCode: 'MATH12',
  chapterNumber: 13,
  chapterTitle: 'Probability',
  summary: 'Conditional Probability P(A|B) = P(A ∩ B)/P(B), Multiplication theorem P(A ∩ B) = P(A) P(B|A), Independent Events (P(A ∩ B) = P(A) P(B)), Total Probability Theorem, Bayes\' Theorem.',
  contentMarkdown: `# Chapter 13: Probability (Class 12 Mathematics NEP 2025)

## 1. Conditional Probability & Independence
- **Conditional Probability**:
  $$P(A | B) = \\frac{P(A \\cap B)}{P(B)} \\quad (P(B) > 0)$$
- **Independent Events**:
  $$P(A \\cap B) = P(A) \\cdot P(B)$$

## 2. Bayes' Theorem
If $E_1, E_2, \\dots, E_n$ form a partition of sample space $S$, then for any event $A$:
$$P(E_i | A) = \\frac{P(E_i) P(A | E_i)}{\\sum_{j=1}^{n} P(E_j) P(A | E_j)}$$
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Probability Theory',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'bayes-cond',
          label: 'Bayes & Conditional Probability',
          type: 'category',
          children: [
            { id: 'cond-prob', label: 'P(A|B) = P(A ∩ B) / P(B)', type: 'concept' },
            { id: 'indep-events', label: 'P(A ∩ B) = P(A) P(B)', type: 'concept' },
            { id: 'bayes-thm', label: 'Bayes Theorem P(Ei|A)', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C12-MATH-CH13-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'If P(A) = 0.6, P(B) = 0.3, and P(A ∩ B) = 0.2, find P(A | B).',
      explanation: 'P(A | B) = P(A ∩ B) / P(B) = 0.2 / 0.3 = 2/3.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '2/3', isCorrect: true },
        { optionLabel: 'B', optionText: '1/3', isCorrect: false },
        { optionLabel: 'C', optionText: '1/2', isCorrect: false },
        { optionLabel: 'D', optionText: '3/5', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH13-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'If A and B are INDEPENDENT events with P(A) = 0.3 and P(B) = 0.4, find P(A ∩ B).',
      explanation: 'For independent events: P(A ∩ B) = P(A) × P(B) = 0.3 × 0.4 = 0.12.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '0.12', isCorrect: true },
        { optionLabel: 'B', optionText: '0.70', isCorrect: false },
        { optionLabel: 'C', optionText: '0.10', isCorrect: false },
        { optionLabel: 'D', optionText: '0.50', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH13-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'A die is thrown twice and the sum of the numbers appearing is observed to be 6. What is the conditional probability that the number 4 has appeared at least once?',
      explanation: 'Sample space for sum 6: F = {(1,5), (2,4), (3,3), (4,2), (5,1)} (5 outcomes). Favourable outcomes with 4: {(2,4), (4,2)} (2 outcomes). P = 2/5.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '2/5', isCorrect: true },
        { optionLabel: 'B', optionText: '1/5', isCorrect: false },
        { optionLabel: 'C', optionText: '3/5', isCorrect: false },
        { optionLabel: 'D', optionText: '4/36', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH13-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'A problem in mathematics is given to three students A, B, C whose chances of solving it are 1/2, 1/3, 1/4 respectively. What is the probability that the problem IS SOLVED?',
      explanation: 'P(problem solved) = 1 - P(none solves) = 1 - (1 - 1/2)(1 - 1/3)(1 - 1/4) = 1 - (1/2 × 2/3 × 3/4) = 1 - 1/4 = 3/4.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '3/4', isCorrect: true },
        { optionLabel: 'B', optionText: '1/4', isCorrect: false },
        { optionLabel: 'C', optionText: '1/24', isCorrect: false },
        { optionLabel: 'D', optionText: '23/24', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH13-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [CBSE Board/JEE Main] Bag I contains 3 red and 4 black balls, and Bag II contains 5 red and 6 black balls. One ball is transferred from Bag I to Bag II and then a ball is drawn from Bag II. If the ball drawn is RED, find the probability that the transferred ball was BLACK.',
      explanation: 'E1: Transferred Red (3/7), E2: Transferred Black (4/7). P(A|E1) = 6/12, P(A|E2) = 5/12. By Bayes\' Theorem: P(E2|A) = (4/7 × 5/12) / (3/7 × 6/12 + 4/7 × 5/12) = 20 / (18 + 20) = 20/38 = 10/19.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '10/19', isCorrect: true },
        { optionLabel: 'B', optionText: '9/19', isCorrect: false },
        { optionLabel: 'C', optionText: '5/12', isCorrect: false },
        { optionLabel: 'D', optionText: '4/7', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH13-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] A man is known to speak truth 3 out of 4 times. He throws a die and reports that it is a SIX. Find the probability that it is ACTUALLY A SIX.',
      explanation: 'E1: Gets 6 (P=1/6), E2: Does not get 6 (P=5/6). A: Reports 6. P(A|E1) = 3/4 (speaks truth), P(A|E2) = 1/4 (lies). By Bayes\' Theorem: P(E1|A) = (1/6 × 3/4) / (1/6 × 3/4 + 5/6 × 1/4) = 3 / (3 + 5) = 3/8.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '3/8', isCorrect: true },
        { optionLabel: 'B', optionText: '1/8', isCorrect: false },
        { optionLabel: 'C', optionText: '3/4', isCorrect: false },
        { optionLabel: 'D', optionText: '1/6', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH13-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'If A and B are independent events, then P(A ∪ B) is equal to:',
      explanation: 'P(A ∪ B) = 1 - P(A\') P(B\').',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '1 - P(A\') P(B\')', isCorrect: true },
        { optionLabel: 'B', optionText: 'P(A) P(B)', isCorrect: false },
        { optionLabel: 'C', optionText: '1 - P(A) P(B)', isCorrect: false },
        { optionLabel: 'D', optionText: 'P(A) + P(B)', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH13-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'If P(A) = 1/2, P(B) = 0, then P(A | B) is:',
      explanation: 'P(A | B) = P(A ∩ B) / P(B). Since P(B) = 0, division by zero is NOT DEFINED.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Not Defined', isCorrect: true },
        { optionLabel: 'B', optionText: '0', isCorrect: false },
        { optionLabel: 'C', optionText: '1/2', isCorrect: false },
        { optionLabel: 'D', optionText: '1', isCorrect: false },
      ],
    },
  ],
};
