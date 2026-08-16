export const ch13StatisticsClass10Data = {
  classNumber: 10,
  className: 'Class 10',
  subjectName: 'Mathematics',
  subjectCode: 'MATH10',
  chapterNumber: 13,
  chapterTitle: 'Statistics',
  summary: 'Mean of grouped data (Direct method, Assumed Mean method), Mode of grouped data Mode = l + [(f1 - f0)/(2f1 - f0 - f2)] * h, Median of grouped data, Empirical relationship 3 Median = Mode + 2 Mean.',
  contentMarkdown: `# Chapter 13: Statistics (Class 10 Mathematics NEP 2025)

## 1. Empirical Relationship
$$\\text{3 Median} = \\text{Mode} + 2 \\text{ Mean}$$

## 2. Mode of Grouped Data
$$\\text{Mode} = l + \\left( \\frac{f_1 - f_0}{2f_1 - f_0 - f_2} \\right) \\times h$$
- $l$: Lower limit of modal class.
- $f_1$: Frequency of modal class.
- $f_0$: Frequency of class preceding modal class.
- $f_2$: Frequency of class succeeding modal class.
- $h$: Class size.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Statistics Formulas',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'empirical',
          label: '3 Median = Mode + 2 Mean',
          type: 'category',
          children: [
            { id: 'mode-formula', label: 'Mode = l + ((f1-f0)/(2f1-f0-f2)) × h', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C10-MATH-CH13-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'What is the empirical relationship between the three measures of central tendency?',
      explanation: '3 Median = Mode + 2 Mean.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '3 Median = Mode + 2 Mean', isCorrect: true },
        { optionLabel: 'B', optionText: '2 Median = Mode + 3 Mean', isCorrect: false },
        { optionLabel: 'C', optionText: 'Mode = 3 Mean - 2 Median', isCorrect: false },
        { optionLabel: 'D', optionText: 'Mean = Mode + Median', isCorrect: false },
      ],
    },
    {
      questionCode: 'C10-MATH-CH13-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'If the Mode of a distribution is 15 and its Mean is 12, find its Median using empirical formula.',
      explanation: '3 Median = Mode + 2 Mean => 3 Median = 15 + 2(12) = 15 + 24 = 39 => Median = 13.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '13', isCorrect: true },
        { optionLabel: 'B', optionText: '14', isCorrect: false },
        { optionLabel: 'C', optionText: '12', isCorrect: false },
        { optionLabel: 'D', optionText: '15', isCorrect: false },
      ],
    },
    {
      questionCode: 'C10-MATH-CH13-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'The Modal Class of a frequency distribution is the class interval having:',
      explanation: 'The Modal Class is defined as the class interval having the MAXIMUM frequency.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Maximum frequency', isCorrect: true },
        { optionLabel: 'B', optionText: 'Minimum frequency', isCorrect: false },
        { optionLabel: 'C', optionText: 'Cumulative frequency n/2', isCorrect: false },
        { optionLabel: 'D', optionText: 'Class mark = 0', isCorrect: false },
      ],
    },
    {
      questionCode: 'C10-MATH-CH13-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'For a frequency distribution, if Σfᵢxᵢ = 425 and Σfᵢ = 25, find the Mean.',
      explanation: 'Mean x̄ = Σfᵢxᵢ / Σfᵢ = 425 / 25 = 17.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '17', isCorrect: true },
        { optionLabel: 'B', optionText: '15', isCorrect: false },
        { optionLabel: 'C', optionText: '18', isCorrect: false },
        { optionLabel: 'D', optionText: '25', isCorrect: false },
      ],
    },
    {
      questionCode: 'C10-MATH-CH13-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [CBSE Board/Olympiad] If the mean of first n natural numbers is 5n/9, find the value of n.',
      explanation: 'Mean of first n natural numbers = (n + 1) / 2. (n + 1) / 2 = 5n / 9 => 9n + 9 = 10n => n = 9.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'n = 9', isCorrect: true },
        { optionLabel: 'B', optionText: 'n = 10', isCorrect: false },
        { optionLabel: 'C', optionText: 'n = 5', isCorrect: false },
        { optionLabel: 'D', optionText: 'n = 18', isCorrect: false },
      ],
    },
    {
      questionCode: 'C10-MATH-CH13-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] In a frequency distribution, the lower limit of the median class is l = 20, cumulative frequency c.f = 15, frequency f = 10, class size h = 10, and N/2 = 25. Find Median.',
      explanation: 'Median = l + ((N/2 - cf)/f) × h = 20 + ((25 - 15)/10) × 10 = 20 + 10 = 30.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '30', isCorrect: true },
        { optionLabel: 'B', optionText: '25', isCorrect: false },
        { optionLabel: 'C', optionText: '35', isCorrect: false },
        { optionLabel: 'D', optionText: '28', isCorrect: false },
      ],
    },
    {
      questionCode: 'C10-MATH-CH13-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'Which measure of central tendency is affected most by extreme values (outliers)?',
      explanation: 'The Mean is calculated using all observations and is heavily affected by extreme outliers.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Mean', isCorrect: true },
        { optionLabel: 'B', optionText: 'Median', isCorrect: false },
        { optionLabel: 'C', optionText: 'Mode', isCorrect: false },
        { optionLabel: 'D', optionText: 'Range', isCorrect: false },
      ],
    },
    {
      questionCode: 'C10-MATH-CH13-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'If the mean of observations x, x+3, x+6, x+9, and x+12 is 10, find x.',
      explanation: 'Sum = 5x + 30. Mean = (5x + 30)/5 = x + 6 = 10 => x = 4.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'x = 4', isCorrect: true },
        { optionLabel: 'B', optionText: 'x = 6', isCorrect: false },
        { optionLabel: 'C', optionText: 'x = 5', isCorrect: false },
        { optionLabel: 'D', optionText: 'x = 3', isCorrect: false },
      ],
    },
  ],
};
