export const geneticsClass12Data = {
  classNumber: 12,
  className: 'Class 12',
  subjectName: 'Biology',
  subjectCode: 'BIO12',
  chapterNumber: 1,
  chapterTitle: 'Principles of Inheritance and Variation',
  summary: 'Mendelian inheritance, monohybrid & dihybrid crosses, laws of segregation & independent assortment, incomplete dominance, codominance (ABO blood groups), linkage, and genetic disorders.',
  contentMarkdown: `# Chapter 1: Principles of Inheritance and Variation (Class 12 Biology)

## 1. Mendel's Laws of Inheritance
Gregor Mendel conducted hybridisation experiments on garden peas (*Pisum sativum*) for 7 years (1856-1863).

1. **Law of Dominance**: Characters are controlled by discrete units called **factors** (genes) occurring in pairs (alleles).
2. **Law of Segregation**: Alleles do not show blending; both characters are recovered in $F_2$ generation ($3:1$ phenotypic ratio, $1:2:1$ genotypic ratio).
3. **Law of Independent Assortment**: Dihybrid cross phenotypic ratio $= 9:3:3:1$.

## 2. Deviations from Mendelism
- **Incomplete Dominance**: Snap dragon (*Antirrhinum*) red $\\times$ white $\\rightarrow$ **Pink** ($F_1$).
- **Codominance**: ABO blood grouping in humans controlled by gene $I$ ($I^A, I^B, i$). Both $I^A$ and $I^B$ express together forming blood group **AB**.

## 3. Genetic Disorders
- **Haemophilia & Colour Blindness**: Sex-linked recessive disorders.
- **Sickle-cell Anaemia**: Autosomal recessive (substitution of Glutamic acid by Valine at 6th position of $\\beta$-globin chain).
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Inheritance & Variation',
      type: 'root',
      color: '#16a34a',
      children: [
        {
          id: 'mendel',
          label: 'Mendel Laws & Ratios',
          type: 'category',
          children: [
            { id: 'monohybrid', label: 'Monohybrid Ratio: 3:1 (1:2:1)', type: 'concept' },
            { id: 'dihybrid', label: 'Dihybrid Ratio: 9:3:3:1', type: 'concept' },
          ],
        },
        {
          id: 'codominance',
          label: 'ABO Blood Groups & Disorders',
          type: 'category',
          children: [
            { id: 'blood', label: 'Codominance in ABO Blood Types', type: 'concept' },
            { id: 'sickle', label: 'Sickle Cell: Valine replaces Glutamic acid', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C12-SUB-GEN-001',
      questionText: 'What is the phenotypic ratio obtained in the F2 generation of a Mendelian Dihybrid Cross?',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: '9 : 3 : 3 : 1', isCorrect: true, explanation: 'The Mendelian dihybrid phenotypic ratio is 9:3:3:1.' },
        { text: '3 : 1', isCorrect: false, explanation: 'Monohybrid phenotypic ratio.' },
        { text: '1 : 2 : 1', isCorrect: false, explanation: 'Monohybrid genotypic ratio.' },
        { text: '9 : 7', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'Crossing two dihybrid pea plants yields 9 dominant-dominant, 3 dominant-recessive, 3 recessive-dominant, and 1 recessive-recessive phenotype.',
    },
  ],
};
