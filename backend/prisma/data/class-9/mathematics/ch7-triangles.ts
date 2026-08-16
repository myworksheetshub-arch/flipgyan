export const ch7TrianglesClass9Data = {
  classNumber: 9,
  className: 'Class 9',
  subjectName: 'Mathematics',
  subjectCode: 'MATH9',
  chapterNumber: 7,
  chapterTitle: 'Triangles',
  summary: 'Congruence criteria (SAS, ASA, AAS, SSS, RHS), CPCT (Corresponding Parts of Congruent Triangles), isosceles triangle properties, triangle inequalities.',
  contentMarkdown: `# Chapter 7: Triangles (Class 9 Mathematics NEP 2025)

## 1. Congruence Criteria
- **SAS**: Side-Angle-Side
- **ASA**: Angle-Side-Angle
- **AAS**: Angle-Angle-Side
- **SSS**: Side-Side-Side
- **RHS**: Right Angle-Hypotenuse-Side (for right-angled triangles)

## 2. Isosceles Triangle Properties
- Angles opposite to equal sides of an isosceles triangle are **equal**.
- Sides opposite to equal angles of a triangle are **equal**.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Triangles & Congruence',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'congruence',
          label: 'Congruence Rules',
          type: 'category',
          children: [
            { id: 'rules', label: 'SAS, ASA, AAS, SSS, RHS', type: 'concept' },
            { id: 'cpct', label: 'CPCT: Corresponding Parts of Congruent Triangles', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C9-MATH-CH7-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'Which of the following is NOT a criterion for congruence of triangles?',
      explanation: 'AAA (Angle-Angle-Angle) guarantees similarity, NOT congruence.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'AAA', isCorrect: true },
        { optionLabel: 'B', optionText: 'SAS', isCorrect: false },
        { optionLabel: 'C', optionText: 'ASA', isCorrect: false },
        { optionLabel: 'D', optionText: 'RHS', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH7-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'In △ABC, AB = AC and ∠B = 50°. Find ∠A.',
      explanation: 'In isosceles △ABC (AB = AC), ∠C = ∠B = 50°. ∠A = 180° - (50° + 50°) = 80°.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '80°', isCorrect: true },
        { optionLabel: 'B', optionText: '50°', isCorrect: false },
        { optionLabel: 'C', optionText: '100°', isCorrect: false },
        { optionLabel: 'D', optionText: '60°', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH7-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'If △PQR ≅ △EFD, which of the following is TRUE by CPCT?',
      explanation: 'By CPCT, corresponding sides are equal: PQ = EF, QR = FD, PR = ED. And ∠P = ∠E, ∠Q = ∠F, ∠R = ∠D.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'PR = ED and ∠Q = ∠F', isCorrect: true },
        { optionLabel: 'B', optionText: 'PQ = ED', isCorrect: false },
        { optionLabel: 'C', optionText: 'QR = EF', isCorrect: false },
        { optionLabel: 'D', optionText: '∠P = ∠D', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH7-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'In a right-angled triangle △ABC right-angled at B, if ∠A = 30°, which is the longest side?',
      explanation: 'In any right triangle, the Hypotenuse (AC opposite to 90° angle B) is the longest side.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'AC (Hypotenuse)', isCorrect: true },
        { optionLabel: 'B', optionText: 'AB', isCorrect: false },
        { optionLabel: 'C', optionText: 'BC', isCorrect: false },
        { optionLabel: 'D', optionText: 'All sides are equal', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH7-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [CBSE Olympiad] In △ABC, AD is the perpendicular bisector of BC. Which congruence rule proves △ABD ≅ △ACD?',
      explanation: 'In △ABD and △ACD: BD = CD (given bisector), ∠ADB = ∠ADC = 90° (perpendicular), AD = AD (common). By SAS rule, △ABD ≅ △ACD.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'SAS Congruence Rule', isCorrect: true },
        { optionLabel: 'B', optionText: 'SSS Congruence Rule', isCorrect: false },
        { optionLabel: 'C', optionText: 'RHS Congruence Rule', isCorrect: false },
        { optionLabel: 'D', optionText: 'AAA Rule', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH7-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] Line segment AB is parallel to line segment CD. O is the midpoint of AD. If O is also the midpoint of BC, which criterion proves △AOB ≅ △DOC?',
      explanation: 'AO = DO (midpoint), ∠AOB = ∠DOC (vertically opposite), BO = CO (midpoint). By SAS rule, △AOB ≅ △DOC.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'SAS Congruence Criterion', isCorrect: true },
        { optionLabel: 'B', optionText: 'RHS Criterion', isCorrect: false },
        { optionLabel: 'C', optionText: 'AAA Criterion', isCorrect: false },
        { optionLabel: 'D', optionText: 'SSS Criterion', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH7-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'In an equilateral triangle, what is the measure of each angle?',
      explanation: 'All sides and all angles are equal in an equilateral triangle. Each angle = 180° / 3 = 60°.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '60°', isCorrect: true },
        { optionLabel: 'B', optionText: '45°', isCorrect: false },
        { optionLabel: 'C', optionText: '90°', isCorrect: false },
        { optionLabel: 'D', optionText: '30°', isCorrect: false },
      ],
    },
    {
      questionCode: 'C9-MATH-CH7-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'In △PQR, ∠P = 70° and ∠R = 30°. Which side of △PQR is the longest?',
      explanation: '∠Q = 180° - (70° + 30°) = 80°. Side opposite to the largest angle (80° ∠Q) is PR, which is the longest side.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'PR', isCorrect: true },
        { optionLabel: 'B', optionText: 'PQ', isCorrect: false },
        { optionLabel: 'C', optionText: 'QR', isCorrect: false },
        { optionLabel: 'D', optionText: 'PQ = QR', isCorrect: false },
      ],
    },
  ],
};
