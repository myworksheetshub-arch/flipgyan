export const integersData = {
  classNumber: 7,
  className: 'Class 7',
  subjectName: 'Mathematics',
  subjectCode: 'MATH7',
  chapterNumber: 1,
  chapterTitle: 'Integers',
  summary: 'Properties of addition, subtraction, multiplication, and division of positive and negative integers.',
  contentMarkdown: `# Chapter 1: Integers

## 1. Introduction to Integers
Integers form a bigger collection of numbers which contains whole numbers and negative numbers.
$$\mathbb{Z} = \{\dots, -3, -2, -1, 0, 1, 2, 3, \dots\}$$

## 2. Properties of Addition and Subtraction
- **Closure Property**: $a + b$ is an integer for all integers $a, b$.
- **Commutative Property**: $a + b = b + a$.
- **Associative Property**: $(a + b) + c = a + (b + c)$.
- **Additive Identity**: $a + 0 = a$.

## 3. Multiplication of Integers
- Product of two positive integers is positive: $(+) \times (+) = (+)$.
- Product of two negative integers is positive: $(-) \times (-) = (+)$.
- Product of one positive and one negative integer is negative: $(+) \times (-) = (-)$.

Example: $(-5) \times (-4) = +20$.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Integers',
      type: 'root',
      color: '#4f46e5',
      children: [
        {
          id: 'properties',
          label: 'Properties',
          type: 'category',
          children: [
            { id: 'closure', label: 'Closure Property', type: 'concept' },
            { id: 'commutative', label: 'Commutative Property', type: 'concept' },
            { id: 'associative', label: 'Associative Property', type: 'concept' },
          ],
        },
        {
          id: 'operations',
          label: 'Operations',
          type: 'category',
          children: [
            { id: 'mult-rules', label: 'Multiplication Sign Rules', type: 'concept' },
            { id: 'div-rules', label: 'Division Rules', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C7-MATH-INT-001',
      questionText: 'What is the result of (-12) × (-5)?',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      options: [
        { text: '60', isCorrect: true, explanation: 'The product of two negative integers is positive: (-12) × (-5) = 60.' },
        { text: '-60', isCorrect: false, explanation: 'Incorrect.' },
        { text: '-17', isCorrect: false, explanation: 'Incorrect.' },
        { text: '17', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'Multiplying two negative integers yields a positive integer: (-a) × (-b) = +(a × b).',
    },
    {
      questionCode: 'C7-MATH-INT-002',
      questionText: 'Which property is represented by a + b = b + a for integers?',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: 'Commutative Property of Addition', isCorrect: true, explanation: 'Swapping order in addition does not change the result.' },
        { text: 'Associative Property', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'Distributive Property', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'Additive Identity', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'Commutative property states that changing the order of operands does not change the result of addition.',
    },
  ],
};
