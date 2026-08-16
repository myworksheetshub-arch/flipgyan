export const ch6TrianglesClass10Data = {
  classNumber: 10,
  className: 'Class 10',
  subjectName: 'Mathematics',
  subjectCode: 'MATH10',
  chapterNumber: 6,
  chapterTitle: 'Triangles',
  summary: 'Basic Proportionality Theorem (BPT / Thales Theorem) and its converse, similarity criteria (AAA, SAS, SSS), properties of similar triangles.',
  contentMarkdown: `# Chapter 6: Triangles (Class 10 Mathematics NEP 2025)

## 1. Basic Proportionality Theorem (BPT / Thales Theorem)
If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the **same ratio**:
$$\\frac{AD}{DB} = \\frac{AE}{EC}$$

## 2. Criteria for Similarity of Triangles
Two triangles are similar ($\\sim$) if:
1. **AAA Similarity**: Corresponding angles are equal.
2. **SSS Similarity**: Corresponding sides are in the same ratio.
3. **SAS Similarity**: One angle is equal and sides including this angle are proportional.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Triangles & Similarity',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'bpt',
          label: 'BPT (Thales Theorem)',
          type: 'category',
          children: [
            { id: 'bpt-ratio', label: 'AD / DB = AE / EC', type: 'concept' },
            { id: 'sim-criteria', label: 'AAA, SSS, SAS Similarity', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C10-MATH-CH6-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'Which theorem states that a line drawn parallel to one side of a triangle divides the other two sides proportionally?',
      explanation: 'Basic Proportionality Theorem (BPT / Thales Theorem).',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Basic Proportionality Theorem (BPT)', isCorrect: true },
        { optionLabel: 'B', optionText: 'Pythagoras Theorem', isCorrect: false },
        { optionLabel: 'C', optionText: 'Mid-Point Theorem', isCorrect: false },
        { optionLabel: 'D', optionText: 'Euclid’s Lemma', isCorrect: false },
      ],
    },
    {
      questionCode: 'C10-MATH-CH6-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'In △ABC, DE ∥ BC. If AD = 1.5 cm, DB = 3 cm, and AE = 1 cm, find EC.',
      explanation: 'By BPT: AD/DB = AE/EC => 1.5 / 3 = 1 / EC => 1/2 = 1 / EC => EC = 2 cm.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '2 cm', isCorrect: true },
        { optionLabel: 'B', optionText: '1.5 cm', isCorrect: false },
        { optionLabel: 'C', optionText: '3 cm', isCorrect: false },
        { optionLabel: 'D', optionText: '2.5 cm', isCorrect: false },
      ],
    },
    {
      questionCode: 'C10-MATH-CH6-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'If △ABC ∼ △DEF such that AB = 1.2 cm and DE = 1.4 cm, find the ratio of Area(△ABC) to Area(△DEF).',
      explanation: 'Area(△ABC) / Area(△DEF) = (AB / DE)² = (1.2 / 1.4)² = (6 / 7)² = 36 / 49.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '36 : 49', isCorrect: true },
        { optionLabel: 'B', optionText: '6 : 7', isCorrect: false },
        { optionLabel: 'C', optionText: '14 : 12', isCorrect: false },
        { optionLabel: 'D', optionText: '144 : 196', isCorrect: false },
      ],
    },
    {
      questionCode: 'C10-MATH-CH6-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'A vertical pole of length 6 m casts a shadow 4 m long on the ground and at the same time a tower casts a shadow 28 m long. Find height of tower.',
      explanation: 'By AAA similarity: Height_pole / Shadow_pole = Height_tower / Shadow_tower => 6 / 4 = h / 28 => h = (6 × 28) / 4 = 42 m.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '42 m', isCorrect: true },
        { optionLabel: 'B', optionText: '36 m', isCorrect: false },
        { optionLabel: 'C', optionText: '48 m', isCorrect: false },
        { optionLabel: 'D', optionText: '54 m', isCorrect: false },
      ],
    },
    {
      questionCode: 'C10-MATH-CH6-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [CBSE Board/Olympiad] Diagonals of a trapezium ABCD with AB ∥ DC intersect at O. If AB = 2 CD, find the ratio of Area(△AOB) to Area(△COD).',
      explanation: '△AOB ∼ △COD (AAA). Area(△AOB) / Area(△COD) = (AB / CD)² = (2 CD / CD)² = 2² / 1² = 4 : 1.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '4 : 1', isCorrect: true },
        { optionLabel: 'B', optionText: '2 : 1', isCorrect: false },
        { optionLabel: 'C', optionText: '1 : 4', isCorrect: false },
        { optionLabel: 'D', optionText: '1 : 2', isCorrect: false },
      ],
    },
    {
      questionCode: 'C10-MATH-CH6-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] In △ABC, ∠A = 90° and AD ⊥ BC. Which of the following is correct?',
      explanation: '△ABD ∼ △CAD => AD / CD = BD / AD => AD² = BD × CD.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'AD² = BD × CD', isCorrect: true },
        { optionLabel: 'B', optionText: 'AB² = BD × CD', isCorrect: false },
        { optionLabel: 'C', optionText: 'AC² = BD × CD', isCorrect: false },
        { optionLabel: 'D', optionText: 'AD² = AB × AC', isCorrect: false },
      ],
    },
    {
      questionCode: 'C10-MATH-CH6-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'All equilateral triangles are:',
      explanation: 'All equilateral triangles have equal corresponding angles (60°), making them always SIMILAR.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Similar', isCorrect: true },
        { optionLabel: 'B', optionText: 'Congruent always', isCorrect: false },
        { optionLabel: 'C', optionText: 'Equal in area', isCorrect: false },
        { optionLabel: 'D', optionText: 'Neither similar nor congruent', isCorrect: false },
      ],
    },
    {
      questionCode: 'C10-MATH-CH6-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'If △ABC ∼ △QRP and Area(△ABC)/Area(△QRP) = 9/4, AB = 18 cm, BC = 15 cm, find PR.',
      explanation: 'AB/QR = BC/RP = √(9/4) = 3/2. BC / PR = 3/2 => 15 / PR = 3/2 => PR = 10 cm.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '10 cm', isCorrect: true },
        { optionLabel: 'B', optionText: '12 cm', isCorrect: false },
        { optionLabel: 'C', optionText: '8 cm', isCorrect: false },
        { optionLabel: 'D', optionText: '15 cm', isCorrect: false },
      ],
    },
  ],
};
