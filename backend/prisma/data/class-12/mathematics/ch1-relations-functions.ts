export const ch1RelationsFunctionsClass12Data = {
  classNumber: 12,
  className: 'Class 12',
  subjectName: 'Mathematics',
  subjectCode: 'MATH12',
  chapterNumber: 1,
  chapterTitle: 'Relations and Functions',
  summary: 'Types of relations (Reflexive, Symmetric, Transitive, Equivalence Relation), Types of functions (One-One / Injective, Onto / Surjective, Bijective), Composition of functions & Invertible functions.',
  contentMarkdown: `# Chapter 1: Relations and Functions (Class 12 Mathematics NEP 2025)

## 1. Equivalence Relation
A relation $R$ on a set $A$ is an **Equivalence Relation** if it is:
1. **Reflexive**: $(a, a) \\in R \\quad \\forall a \\in A$.
2. **Symmetric**: $(a, b) \\in R \\implies (b, a) \\in R$.
3. **Transitive**: $(a, b) \\in R$ and $(b, c) \\in R \\implies (a, c) \\in R$.

## 2. Function Mapping Types
- **One-One (Injective)**: $f(x_1) = f(x_2) \\implies x_1 = x_2$.
- **Onto (Surjective)**: Range of $f =$ Codomain of $f$.
- **Bijective**: Both One-One and Onto (Invertible).
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Relations & Functions',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'equiv-bijective',
          label: 'Equivalence & Bijective',
          type: 'category',
          children: [
            { id: 'equiv-rel', label: 'Equivalence: Reflexive + Symmetric + Transitive', type: 'concept' },
            { id: 'bijective-fn', label: 'Bijective: Injective (One-One) + Surjective (Onto)', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C12-MATH-CH1-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'A relation R on a set A is called an EQUIVALENCE RELATION if it satisfies which of the following properties?',
      explanation: 'An Equivalence Relation must be Reflexive, Symmetric, and Transitive.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Reflexive, Symmetric, and Transitive', isCorrect: true },
        { optionLabel: 'B', optionText: 'Reflexive and Symmetric only', isCorrect: false },
        { optionLabel: 'C', optionText: 'Symmetric and Transitive only', isCorrect: false },
        { optionLabel: 'D', optionText: 'One-One and Onto', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH1-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Check the injectivity of the function f: R → R defined by f(x) = 2x + 3.',
      explanation: 'f(x1) = f(x2) => 2x1 + 3 = 2x2 + 3 => 2x1 = 2x2 => x1 = x2. Therefore, f is One-One (Injective).',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'One-One (Injective)', isCorrect: true },
        { optionLabel: 'B', optionText: 'Many-One', isCorrect: false },
        { optionLabel: 'C', optionText: 'Neither One-One nor Onto', isCorrect: false },
        { optionLabel: 'D', optionText: 'Onto only', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH1-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Let f: R → R be defined by f(x) = x². Determine the nature of f.',
      explanation: 'f(-2) = 4 and f(2) = 4 (not one-one). Range = [0, ∞) ≠ R codomain (not onto). So f is Neither One-One nor Onto.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Neither One-One nor Onto', isCorrect: true },
        { optionLabel: 'B', optionText: 'One-One and Onto (Bijective)', isCorrect: false },
        { optionLabel: 'C', optionText: 'One-One but not Onto', isCorrect: false },
        { optionLabel: 'D', optionText: 'Onto but not One-One', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH1-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'If f: R → R is defined by f(x) = 3x - 4, find the inverse function f⁻¹(x).',
      explanation: 'Let y = 3x - 4 => 3x = y + 4 => x = (y + 4) / 3. So f⁻¹(x) = (x + 4) / 3.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '(x + 4) / 3', isCorrect: true },
        { optionLabel: 'B', optionText: '(x - 4) / 3', isCorrect: false },
        { optionLabel: 'C', optionText: '3x + 4', isCorrect: false },
        { optionLabel: 'D', optionText: '(3x + 4) / 4', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH1-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [CBSE Board/JEE Main] Let R be a relation on N × N defined by (a, b) R (c, d) ⇔ a + d = b + c. Then R is:',
      explanation: '1. (a, b) R (a, b) since a + b = b + a (Reflexive). 2. (a, b) R (c, d) => a + d = b + c => c + b = d + a => (c, d) R (a, b) (Symmetric). 3. Transitive holds. Thus R is an EQUIVALENCE RELATION.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Equivalence Relation', isCorrect: true },
        { optionLabel: 'B', optionText: 'Reflexive and Symmetric but not Transitive', isCorrect: false },
        { optionLabel: 'C', optionText: 'Symmetric only', isCorrect: false },
        { optionLabel: 'D', optionText: 'Not an Equivalence Relation', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH1-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] Total number of BIJECTIVE functions from a set A containing n elements to itself is:',
      explanation: 'A bijective function maps n elements uniquely to n elements, which is equal to n! (n factorial).',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'n!', isCorrect: true },
        { optionLabel: 'B', optionText: 'nⁿ', isCorrect: false },
        { optionLabel: 'C', optionText: '2ⁿ', isCorrect: false },
        { optionLabel: 'D', optionText: 'n² - 1', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH1-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'Let A = {1, 2, 3}. The relation R = {(1, 1), (2, 2), (3, 3), (1, 2), (2, 3)} is:',
      explanation: 'Reflexive since (1,1),(2,2),(3,3) in R. Not symmetric since (1,2) in R but (2,1) not in R. Not transitive since (1,2) and (2,3) in R but (1,3) not in R.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Reflexive only', isCorrect: true },
        { optionLabel: 'B', optionText: 'Symmetric only', isCorrect: false },
        { optionLabel: 'C', optionText: 'Transitive only', isCorrect: false },
        { optionLabel: 'D', optionText: 'Equivalence relation', isCorrect: false },
      ],
    },
    {
      questionCode: 'C12-MATH-CH1-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'If f(x) = 8x³ and g(x) = x^(1/3), find (fog)(x).',
      explanation: '(fog)(x) = f(g(x)) = f(x^(1/3)) = 8 (x^(1/3))³ = 8x.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '8x', isCorrect: true },
        { optionLabel: 'B', optionText: 'x', isCorrect: false },
        { optionLabel: 'C', optionText: '8x³', isCorrect: false },
        { optionLabel: 'D', optionText: '2x', isCorrect: false },
      ],
    },
  ],
};
