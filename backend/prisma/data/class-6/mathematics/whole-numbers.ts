export const wholeNumbersClass6Data = {
  classNumber: 6,
  className: 'Class 6',
  subjectName: 'Mathematics',
  subjectCode: 'MATH6',
  chapterNumber: 3,
  chapterTitle: 'Whole Numbers',
  summary: 'Natural numbers vs whole numbers, predecessor and successor, number line representation, properties of whole numbers (closure, commutativity, associativity, distributivity), and identity for addition & multiplication.',
  contentMarkdown: `# Chapter 3: Whole Numbers (Class 6 Mathematics)

## 1. Natural Numbers & Whole Numbers
- **Natural Numbers (N)**: Counting numbers $1, 2, 3, 4, 5\\dots$ (Smallest natural number is 1).
- **Whole Numbers (W)**: Natural numbers including zero: $0, 1, 2, 3, 4, 5\\dots$ (Smallest whole number is 0).

## 2. Predecessor and Successor
- **Successor**: Number $+ 1$ (e.g. Successor of 19 is 20).
- **Predecessor**: Number $- 1$ (e.g. Predecessor of 20 is 19). Whole number 0 has **no predecessor** in whole numbers!

## 3. Properties of Whole Numbers
1. **Closure Property**: Addition & Multiplication of whole numbers yield a whole number.
2. **Commutative Property**: $a + b = b + a$ and $a \\times b = b \\times a$.
3. **Associative Property**: $(a + b) + c = a + (b + c)$ and $(a \\times b) \\times c = a \\times (b \\times c)$.
4. **Distributive Property**: $a \\times (b + c) = (a \\times b) + (a \\times c)$.
5. **Identities**:
   - Additive Identity: $a + 0 = a$
   - Multiplicative Identity: $a \\times 1 = a$
   - Division by zero is **undefined**.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Whole Numbers (Class 6)',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'definitions',
          label: 'Definitions',
          type: 'category',
          children: [
            { id: 'natural', label: 'Natural Numbers: 1, 2, 3...', type: 'concept' },
            { id: 'whole', label: 'Whole Numbers: 0, 1, 2, 3...', type: 'concept' },
          ],
        },
        {
          id: 'properties',
          label: 'Properties & Identities',
          type: 'category',
          children: [
            { id: 'distributive', label: 'a × (b + c) = ab + ac', type: 'concept' },
            { id: 'identities', label: '0 is Additive ID; 1 is Multiplicative ID', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C6-MATH-WHO-001',
      questionText: 'Which whole number has NO predecessor in the set of whole numbers?',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: '0', isCorrect: true, explanation: '0 is the smallest whole number and has no predecessor in whole numbers.' },
        { text: '1', isCorrect: false, explanation: 'Predecessor of 1 is 0.' },
        { text: '10', isCorrect: false, explanation: 'Predecessor of 10 is 9.' },
        { text: '100', isCorrect: false, explanation: 'Predecessor of 100 is 99.' },
      ],
      explanation: 'Whole numbers start from 0. There is no whole number less than 0, so 0 has no predecessor.',
    },
    {
      questionCode: 'C6-MATH-WHO-002',
      questionText: 'What property of whole numbers is illustrated by 12 × (30 + 5) = (12 × 30) + (12 × 5)?',
      difficulty: 'MEDIUM',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: 'Distributive Property of multiplication over addition', isCorrect: true, explanation: 'a × (b + c) = ab + ac is the distributive property.' },
        { text: 'Commutative Property', isCorrect: false, explanation: 'a + b = b + a.' },
        { text: 'Associative Property', isCorrect: false, explanation: '(a+b)+c = a+(b+c).' },
        { text: 'Closure Property', isCorrect: false, explanation: 'a + b is a whole number.' },
      ],
      explanation: 'Multiplying a number by a sum is equal to multiplying by each addend separately: Distributive Property.',
    },
  ],
};
