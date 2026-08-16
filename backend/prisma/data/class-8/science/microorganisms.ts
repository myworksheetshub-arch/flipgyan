export const microorganismsClass8Data = {
  classNumber: 8,
  className: 'Class 8',
  subjectName: 'Science',
  subjectCode: 'SCI8',
  chapterNumber: 2,
  chapterTitle: 'Microorganisms: Friend and Foe',
  summary: 'Types of microbes (bacteria, fungi, protozoa, algae, viruses), commercial & medicinal uses, nitrogen fixation, food preservation, and human diseases.',
  contentMarkdown: `# Chapter 2: Microorganisms: Friend and Foe (Class 8 Science)

## 1. Major Groups of Microorganisms
- **Bacteria**: Single-celled (e.g. *Lactobacillus* in curd, *Rhizobium* in roots).
- **Fungi**: Bread mould (*Penicillium*, Yeast).
- **Protozoa**: *Amoeba*, *Paramecium*, *Plasmodium* (causes Malaria).
- **Algae**: *Spirogyra*, *Chlamydomonas*.
- **Viruses**: Non-living outside host; cause Influenza, Polio, COVID-19, Chickenpox.

## 2. Friendly Microorganisms
- **Curd & Bread Making**: *Lactobacillus* converts milk into curd. Yeast reproduces rapidly releasing $CO_2$ gas causing dough to rise.
- **Fermentation**: Process of conversion of sugar into alcohol by yeast discovered by **Louis Pasteur** (1857).
- **Antibiotics**: Medicines produced by microorganisms to kill disease-causing bacteria (e.g. Penicillin discovered by **Alexander Fleming** in 1929).
- **Vaccine**: Introduced weak/dead microbes to produce antibodies. First smallpox vaccine developed by **Edward Jenner** (1796).

## 3. Nitrogen Fixation
- *Rhizobium* bacteria live in root nodules of leguminous plants (beans, peas) and fix atmospheric nitrogen into nitrates.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Microorganisms',
      type: 'root',
      color: '#10b981',
      children: [
        {
          id: 'friendly',
          label: 'Commercial & Medicinal Uses',
          type: 'category',
          children: [
            { id: 'yeast', label: 'Fermentation (Louis Pasteur)', type: 'concept' },
            { id: 'penicillin', label: 'Penicillin Antibiotic (Alexander Fleming)', type: 'concept' },
            { id: 'rhizobium', label: 'Rhizobium (Nitrogen Fixation)', type: 'concept' },
          ],
        },
        {
          id: 'foe',
          label: 'Disease Causing Microbes',
          type: 'category',
          children: [
            { id: 'malaria', label: 'Plasmodium Protozoa (Malaria)', type: 'concept' },
            { id: 'viruses', label: 'Viruses (Polio, Flu)', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C8-SCI-MIC-001',
      questionText: 'Who discovered the process of Fermentation in 1857?',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: 'Louis Pasteur', isCorrect: true, explanation: 'Louis Pasteur discovered fermentation in 1857.' },
        { text: 'Alexander Fleming', isCorrect: false, explanation: 'Discovered Penicillin in 1929.' },
        { text: 'Edward Jenner', isCorrect: false, explanation: 'Discovered Smallpox Vaccine in 1796.' },
        { text: 'Robert Hooke', isCorrect: false, explanation: 'Discovered cells in 1665.' },
      ],
      explanation: 'Louis Pasteur discovered that yeast converts sugar into alcohol, a process called fermentation, in 1857.',
    },
  ],
};
