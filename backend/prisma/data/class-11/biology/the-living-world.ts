export const livingWorldClass11Data = {
  classNumber: 11,
  className: 'Class 11',
  subjectName: 'Biology',
  subjectCode: 'BIO11',
  chapterNumber: 1,
  chapterTitle: 'The Living World',
  summary: 'Characteristics of living organisms, diversity in the living world, binomial nomenclature (Linnaeus), taxonomic categories (Species to Kingdom), and taxonomical aids.',
  contentMarkdown: `# Chapter 1: The Living World (Class 11 Biology)

## 1. Characteristics of Living Organisms
- **Growth & Reproduction**: Non-defining features (since non-living things like mountains can grow, and infertile couples/mules don't reproduce).
- **Metabolism & Cellular Organisation**: **Defining properties** of all living organisms.
- **Consciousness**: **Defining property** of all living organisms.

## 2. Binomial Nomenclature (Carl Linnaeus)
System of naming species with two components: *Generic Name* + *Specific Epithet*.
- Rules:
  1. Latin origin, written in italics.
  2. First word (Genus) starts with Capital letter; second word (Species) with lowercase.
  3. Example: Mango $\\rightarrow$ *Mangifera indica* Linn.

## 3. Taxonomic Hierarchy
Hierarchy from lowest to highest:
$$\\text{Species} \\rightarrow \\text{Genus} \\rightarrow \\text{Family} \\rightarrow \\text{Order} \\rightarrow \\text{Class} \\rightarrow \\text{Phylum/Division} \\rightarrow \\text{Kingdom}$$
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'The Living World',
      type: 'root',
      color: '#16a34a',
      children: [
        {
          id: 'defining',
          label: 'Defining Properties',
          type: 'category',
          children: [
            { id: 'metabolism', label: 'Metabolism & Consciousness', type: 'concept' },
          ],
        },
        {
          id: 'hierarchy',
          label: 'Taxonomic Hierarchy',
          type: 'category',
          children: [
            { id: 'linnaeus', label: 'Binomial: Mangifera indica (Linnaeus)', type: 'concept' },
            { id: 'order', label: 'Species -> Genus -> Family -> Order -> Class -> Phylum -> Kingdom', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C11-SUB-THE-001',
      questionText: 'Which of the following is considered a DEFINING property of all living organisms?',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: 'Metabolism and Consciousness', isCorrect: true, explanation: 'Metabolism and Consciousness are universal defining properties.' },
        { text: 'Growth', isCorrect: false, explanation: 'Non-defining (mountains grow by accumulation).' },
        { text: 'Reproduction', isCorrect: false, explanation: 'Non-defining (mules and sterile couples do not reproduce).' },
        { text: 'Movement', isCorrect: false, explanation: 'Non-defining.' },
      ],
      explanation: 'Metabolism and Consciousness occur in all living organisms without exception, making them defining properties.',
    },
  ],
};
