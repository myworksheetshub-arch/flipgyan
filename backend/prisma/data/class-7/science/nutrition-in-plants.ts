export const nutritionInPlantsData = {
  classNumber: 7,
  className: 'Class 7',
  subjectName: 'Science',
  subjectCode: 'SCI7',
  chapterNumber: 1,
  chapterTitle: 'Nutrition in Plants',
  summary: 'Autotrophic mode of nutrition, photosynthesis mechanism, stomata, chlorophyll, and heterotrophic plants (parasites, saprotrophs, insectivorous).',
  contentMarkdown: `# Chapter 1: Nutrition in Plants

## 1. Autotrophic vs Heterotrophic Nutrition
- **Autotrophic**: Organisms make food themselves from simple substances (Green plants).
- **Heterotrophic**: Organisms depend on food prepared by plants/animals.

## 2. Photosynthesis: Food Making Process in Plants
Leaves are the food factories of plants.
$$6CO_2 + 6H_2O \\xrightarrow[\\text{Chlorophyll}]{\\text{Sunlight}} C_6H_{12}O_6 + 6O_2$$

- **Stomata**: Tiny pores surrounded by guard cells on leaf surfaces for gas exchange.
- **Chlorophyll**: Green pigment capturing sunlight energy.

## 3. Other Modes of Nutrition in Plants
- **Parasitic Plants**: e.g., *Cuscuta* (Amarbel) derives nutrition from host plant.
- **Insectivorous Plants**: e.g., Pitcher plant feeds on insects.
- **Saprotrophs**: e.g., Fungi secrete digestive juices on dead matter.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Nutrition in Plants',
      type: 'root',
      color: '#16a34a',
      children: [
        {
          id: 'photosynthesis',
          label: 'Photosynthesis',
          type: 'category',
          children: [
            { id: 'chlorophyll', label: 'Chlorophyll', type: 'concept' },
            { id: 'stomata', label: 'Stomata & Guard Cells', type: 'concept' },
            { id: 'reaction', label: 'CO2 + H2O → Glucose + O2', type: 'concept' },
          ],
        },
        {
          id: 'heterotrophic',
          label: 'Heterotrophic Modes',
          type: 'category',
          children: [
            { id: 'parasite', label: 'Parasites (Cuscuta)', type: 'concept' },
            { id: 'insectivorous', label: 'Insectivorous (Pitcher Plant)', type: 'concept' },
            { id: 'saprotrophs', label: 'Saprotrophs (Fungi)', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C7-SCI-NUT-001',
      questionText: 'Which pigment is responsible for trapping sunlight energy during photosynthesis?',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: 'Chlorophyll', isCorrect: true, explanation: 'Chlorophyll is the green pigment in leaves.' },
        { text: 'Hemoglobin', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'Xanthophyll', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'Carotene', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'Chlorophyll absorbs solar energy and converts it into chemical energy during photosynthesis.',
    },
  ],
};
