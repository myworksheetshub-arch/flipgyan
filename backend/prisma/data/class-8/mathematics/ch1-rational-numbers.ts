export const ch1RationalNumbersClass8Data = {
  classNumber: 8,
  className: 'Class 8',
  subjectName: 'Mathematics',
  subjectCode: 'MATH8',
  chapterNumber: 1,
  chapterTitle: 'Rational Numbers',
  summary: 'Properties of rational numbers (Closure, Commutativity, Associativity, Distributivity), additive and multiplicative identities, inverses, rational numbers on number line, finding rational numbers between two rational numbers.',
  contentMarkdown: `# Chapter 1: Rational Numbers (Class 8 Mathematics NEP 2025)

## 1. Definition & Properties
A rational number is any number that can be expressed in the form $\\frac{p}{q}$, where $p$ and $q$ are integers and $q \\neq 0$.
- **Additive Identity**: $0$ ($a + 0 = a$).
- **Multiplicative Identity**: $1$ ($a \\times 1 = a$).
- **Additive Inverse**: $-a$ for $a$ (since $a + (-a) = 0$).
- **Multiplicative Inverse (Reciprocal)**: $\\frac{1}{a}$ for $a \\neq 0$ (since $a \\times \\frac{1}{a} = 1$). Note: $0$ has **no multiplicative inverse**!

## 2. Distributive Property
$$a \\times (b + c) = (a \\times b) + (a \\times c)$$
$$a \\times (b - c) = (a \\times b) - (a \\times c)$$
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Rational Numbers',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'properties',
          label: 'Identities & Inverses',
          type: 'category',
          children: [
            { id: 'add-inv', label: 'Additive Inverse of a is -a', type: 'concept' },
            { id: 'mult-inv', label: 'Multiplicative Inverse of p/q is q/p (q≠0)', type: 'concept' },
            { id: 'zero-inv', label: '0 has NO multiplicative inverse', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C8-MATH-CH1-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'What is the additive inverse of -7/19?',
      explanation: 'The additive inverse of a rational number a is -a such that a + (-a) = 0. Therefore, -(-7/19) = 7/19.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '7/19', isCorrect: true },
        { optionLabel: 'B', optionText: '-19/7', isCorrect: false },
        { optionLabel: 'C', optionText: '19/7', isCorrect: false },
        { optionLabel: 'D', optionText: '0', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH1-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'Which rational number does NOT have a multiplicative inverse?',
      explanation: 'Zero (0) has no multiplicative inverse because division by zero is undefined.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '0', isCorrect: true },
        { optionLabel: 'B', optionText: '1', isCorrect: false },
        { optionLabel: 'C', optionText: '-1', isCorrect: false },
        { optionLabel: 'D', optionText: '1/2', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH1-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'Multiply 6/13 by the reciprocal of -7/16.',
      explanation: 'Reciprocal of -7/16 is -16/7. Product = (6/13) × (-16/7) = -96/91.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '-96/91', isCorrect: true },
        { optionLabel: 'B', optionText: '96/91', isCorrect: false },
        { optionLabel: 'C', optionText: '-42/208', isCorrect: false },
        { optionLabel: 'D', optionText: '42/208', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH1-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'Evaluate using distributive property: (-3/7) × (2/5) + (5/7) × (-3/7).',
      explanation: 'Factor out (-3/7): (-3/7) × (2/5 + 5/7) = (-3/7) × (14/35 + 25/35) = (-3/7) × (39/35) = -117/245.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '-117/245', isCorrect: true },
        { optionLabel: 'B', optionText: '117/245', isCorrect: false },
        { optionLabel: 'C', optionText: '-3/35', isCorrect: false },
        { optionLabel: 'D', optionText: '-6/35', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH1-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'LOGICAL_REASONING',
      questionText: '🏆 [CBSE Olympiad] If x and y are two rational numbers such that x < y, which of the following is guaranteed to be a rational number strictly lying between x and y?',
      explanation: 'The mean/average (x + y)/2 always lies strictly between x and y for any two distinct real numbers.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '(x + y) / 2', isCorrect: true },
        { optionLabel: 'B', optionText: 'x × y', isCorrect: false },
        { optionLabel: 'C', optionText: 'x - y', isCorrect: false },
        { optionLabel: 'D', optionText: '(x - y) / 2', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH1-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] Find the multiplicative inverse of: (-1) × (-2/5).',
      explanation: 'First simplify: (-1) × (-2/5) = 2/5. The multiplicative inverse of 2/5 is 5/2.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '5/2', isCorrect: true },
        { optionLabel: 'B', optionText: '-5/2', isCorrect: false },
        { optionLabel: 'C', optionText: '2/5', isCorrect: false },
        { optionLabel: 'D', optionText: '-2/5', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH1-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'What is the product of a rational number and its multiplicative inverse?',
      explanation: 'By definition of multiplicative inverse, a × (1/a) = 1 for any non-zero rational number a.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '1', isCorrect: true },
        { optionLabel: 'B', optionText: '0', isCorrect: false },
        { optionLabel: 'C', optionText: '-1', isCorrect: false },
        { optionLabel: 'D', optionText: 'The number itself', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH1-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      questionText: 'Which of the following statements is TRUE regarding rational numbers?',
      explanation: 'Rational numbers are closed under addition, subtraction, and multiplication, but not under division (due to division by 0).',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Rational numbers are closed under addition, subtraction, and multiplication', isCorrect: true },
        { optionLabel: 'B', optionText: 'Division of any two rational numbers is always a rational number', isCorrect: false },
        { optionLabel: 'C', optionText: 'Subtraction of rational numbers is commutative', isCorrect: false },
        { optionLabel: 'D', optionText: 'Division of rational numbers is associative', isCorrect: false },
      ],
    },
  ],
};
