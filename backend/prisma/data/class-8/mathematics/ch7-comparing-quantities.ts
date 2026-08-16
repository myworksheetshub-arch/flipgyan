export const ch7ComparingQuantitiesClass8Data = {
  classNumber: 8,
  className: 'Class 8',
  subjectName: 'Mathematics',
  subjectCode: 'MATH8',
  chapterNumber: 7,
  chapterTitle: 'Comparing Quantities',
  summary: 'Ratios & percentages, discount calculation, profit and loss, GST (Goods and Services Tax), compound interest compounded annually & half-yearly.',
  contentMarkdown: `# Chapter 7: Comparing Quantities (Class 8 Mathematics NEP 2025)

## 1. Discount & Sales Tax / GST
- **Discount** $= \\text{Marked Price (MP)} - \\text{Selling Price (SP)}$
- **Discount Percentage** $= \\left(\\frac{\\text{Discount}}{\\text{MP}}\\right) \\times 100\\%$
- **GST / Sales Tax** is added to the Selling Price.

## 2. Compound Interest (CI)
$$A = P \\left(1 + \\frac{R}{100}\\right)^n$$
$$\\text{CI} = A - P$$
- When compounded half-yearly: Rate $= \\frac{R}{2}$, Time $= 2n$.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Comparing Quantities',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'ci',
          label: 'Compound Interest',
          type: 'category',
          children: [
            { id: 'ci-formula', label: 'A = P(1 + R/100)^n', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C8-MATH-CH7-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'An item marked at ₹840 is sold for ₹714. What is the discount percentage?',
      explanation: 'Discount = 840 - 714 = ₹126. Discount % = (126 / 840) × 100 = 15%.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '15%', isCorrect: true },
        { optionLabel: 'B', optionText: '12%', isCorrect: false },
        { optionLabel: 'C', optionText: '20%', isCorrect: false },
        { optionLabel: 'D', optionText: '10%', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH7-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Find the amount when ₹10,000 is invested for 2 years at 10% per annum compound interest, compounded annually.',
      explanation: 'A = 10000 × (1 + 10/100)² = 10000 × (11/10)² = 10000 × (121/100) = ₹12,100.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '₹12,100', isCorrect: true },
        { optionLabel: 'B', optionText: '₹12,000', isCorrect: false },
        { optionLabel: 'C', optionText: '₹11,000', isCorrect: false },
        { optionLabel: 'D', optionText: '₹13,200', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH7-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'A scooter was bought at ₹42,000. Its value depreciated at the rate of 8% per annum. Find its value after one year.',
      explanation: 'Depreciation = 8% of 42000 = (8/100) × 42000 = ₹3,360. Value after 1 year = 42000 - 3360 = ₹38,640.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '₹38,640', isCorrect: true },
        { optionLabel: 'B', optionText: '₹38,000', isCorrect: false },
        { optionLabel: 'C', optionText: '₹39,200', isCorrect: false },
        { optionLabel: 'D', optionText: '₹40,000', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH7-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'I purchased a hair-dryer for ₹5,400 including 8% GST. Find the price before GST was added.',
      explanation: 'Let price before GST = x. x + (8/100)x = 5400 => 1.08x = 5400 => x = 5400 / 1.08 = ₹5,000.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '₹5,000', isCorrect: true },
        { optionLabel: 'B', optionText: '₹4,968', isCorrect: false },
        { optionLabel: 'C', optionText: '₹5,100', isCorrect: false },
        { optionLabel: 'D', optionText: '₹4,800', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH7-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'PROBLEM_SOLVING',
      questionText: '🏆 [CBSE Olympiad] What is the difference between Compound Interest and Simple Interest on ₹8,000 for 2 years at 5% per annum?',
      explanation: 'Difference for 2 years = P × (R / 100)² = 8000 × (5 / 100)² = 8000 × (1 / 400) = ₹20.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '₹20', isCorrect: true },
        { optionLabel: 'B', optionText: '₹40', isCorrect: false },
        { optionLabel: 'C', optionText: '₹10', isCorrect: false },
        { optionLabel: 'D', optionText: '₹25', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH7-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] Find the compound interest on ₹12,000 for 1 year at 20% per annum, compounded HALF-YEARLY.',
      explanation: 'Half-yearly rate r = 20/2 = 10%, time n = 2 periods. Amount = 12000 × (1 + 10/100)² = 12000 × 1.21 = ₹14,520. CI = 14520 - 12000 = ₹2,520.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '₹2,520', isCorrect: true },
        { optionLabel: 'B', optionText: '₹2,400', isCorrect: false },
        { optionLabel: 'C', optionText: '₹2,600', isCorrect: false },
        { optionLabel: 'D', optionText: '₹2,500', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH7-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'If Cost Price (CP) = ₹500 and Selling Price (SP) = ₹600, what is the Profit percentage?',
      explanation: 'Profit = 600 - 500 = ₹100. Profit % = (100 / 500) × 100 = 20%.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '20%', isCorrect: true },
        { optionLabel: 'B', optionText: '10%', isCorrect: false },
        { optionLabel: 'C', optionText: '15%', isCorrect: false },
        { optionLabel: 'D', optionText: '25%', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH7-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Convert the ratio 3 : 4 into percentage.',
      explanation: '(3 / 4) × 100% = 75%.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '75%', isCorrect: true },
        { optionLabel: 'B', optionText: '60%', isCorrect: false },
        { optionLabel: 'C', optionText: '80%', isCorrect: false },
        { optionLabel: 'D', optionText: '34%', isCorrect: false },
      ],
    },
  ],
};
