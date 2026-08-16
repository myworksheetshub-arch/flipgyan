export const setsClass11Data = {
  classNumber: 11,
  className: 'Class 11',
  subjectName: 'Mathematics',
  subjectCode: 'MATH11',
  chapterNumber: 1,
  chapterTitle: 'Sets, Relations and Functions',
  summary: 'Sets representation, empty set, finite & infinite sets, subsets, power set, universal set, Venn diagrams, union & intersection of sets, Cartesian product, domain, range & co-domain.',
  contentMarkdown: `# Chapter 1: Sets, Relations and Functions (Class 11)

## 1. Sets & Representations
- A set is a well-defined collection of objects.
- **Roster Form**: $A = \\{1, 2, 3, 4, 5\\}$
- **Set-Builder Form**: $A = \\{x : x \\in \\mathbb{N} \\text{ and } 1 \\le x \\le 5\\}$

## 2. Types of Sets
- **Empty Set (Null Set)**: $\\emptyset$ or $\\{\\}$ (No elements).
- **Subsets**: $A \\subseteq B$ if every element of $A$ is in $B$.
- **Power Set**: Collection of all subsets of $A$, denoted $P(A)$. If $|A| = n$, then $|P(A)| = 2^n$.

## 3. Operations on Sets & Venn Diagrams
- **Union**: $A \\cup B = \\{x : x \\in A \\text{ or } x \\in B\\}$
- **Intersection**: $A \\cap B = \\{x : x \\in A \\text{ and } x \\in B\\}$
- **Difference**: $A - B = \\{x : x \\in A \\text{ and } x \\notin B\\}$
- **Complement**: $A' = U - A$

## 4. Cartesian Product & Relations
- $A \\times B = \\{(a, b) : a \\in A \\text{ and } b \\in B\\}$
- A Relation $R$ from $A$ to $B$ is a subset of $A \\times B$.
- **Domain**: Set of all first elements in $R$.
- **Range**: Set of all second elements in $R$.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Sets & Functions (Class 11)',
      type: 'root',
      color: '#2563eb',
      children: [
        {
          id: 'sets',
          label: 'Sets & Power Sets',
          type: 'category',
          children: [
            { id: 'subsets', label: 'Subsets & Power Set (|P(A)| = 2^n)', type: 'concept' },
            { id: 'venn', label: 'Venn Diagrams & De Morgan Laws', type: 'concept' },
          ],
        },
        {
          id: 'relations',
          label: 'Relations & Functions',
          type: 'category',
          children: [
            { id: 'cartesian', label: 'Cartesian Product A × B', type: 'concept' },
            { id: 'domain-range', label: 'Domain, Co-domain, and Range', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C11-MATH-SET-001',
      questionText: 'If a set A has 4 elements, how many total elements are there in its Power Set P(A)?',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: '16', isCorrect: true, explanation: 'The number of elements in Power Set P(A) is 2^n = 2^4 = 16.' },
        { text: '8', isCorrect: false, explanation: 'Incorrect.' },
        { text: '4', isCorrect: false, explanation: 'Incorrect.' },
        { text: '32', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'The number of subsets (power set size) for a set with n elements is 2^n. For n = 4, 2^4 = 16.',
    },
    {
      questionCode: 'C11-MATH-SET-002',
      questionText: 'If A = {1, 2} and B = {3, 4, 5}, what is the total number of relations from A to B?',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      options: [
        { text: '64 (2^6)', isCorrect: true, explanation: '|A × B| = 2 × 3 = 6. Total relations = 2^6 = 64.' },
        { text: '6', isCorrect: false, explanation: 'Incorrect.' },
        { text: '12', isCorrect: false, explanation: 'Incorrect.' },
        { text: '32', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'Total number of relations from A to B is 2^(m × n), where m = |A| and n = |B|. Here 2^(2 × 3) = 2^6 = 64.',
    },
  ],
};
