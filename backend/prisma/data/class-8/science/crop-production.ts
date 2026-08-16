export const cropProductionData = {
  classNumber: 8,
  className: 'Class 8',
  subjectName: 'Science',
  subjectCode: 'SCI8',
  chapterNumber: 1,
  chapterTitle: 'Crop Production and Management',
  summary: 'Kharif and Rabi crops, basic agricultural practices (soil preparation, sowing, adding manure, irrigation, weeding, harvesting, storage).',
  contentMarkdown: `# Chapter 1: Crop Production and Management

## 1. Agricultural Crops Classification
- **Kharif Crops**: Sown in rainy season (June to September). Examples: Paddy, Maize, Soybean, Groundnut, Cotton.
- **Rabi Crops**: Grown in winter season (October to March). Examples: Wheat, Gram, Pea, Mustard, Linseed.

## 2. Agricultural Practices
1. **Preparation of Soil**: Tilling/Ploughing and Levelling.
2. **Sowing**: Selecting good quality seeds; Seed drill usage.
3. **Adding Manure & Fertilisers**:
   - *Manure*: Organic decomposition matter.
   - *Fertiliser*: Inorganic chemical salts ($N, P, K$).
4. **Irrigation**: Supply of water at regular intervals. Traditional (Moat, Rahat) vs Modern (Sprinkler, Drip System).
5. **Protection from Weeds**: Manual removal or Weedicides ($2,4-D$).
6. **Harvesting**: Cutting mature crops. Threshing & Winnowing.
7. **Storage**: Granaries & Silos to protect from pests.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Crop Production',
      type: 'root',
      color: '#15803d',
      children: [
        {
          id: 'types',
          label: 'Crop Seasons',
          type: 'category',
          children: [
            { id: 'kharif', label: 'Kharif (Monsoon: Paddy, Maize)', type: 'concept' },
            { id: 'rabi', label: 'Rabi (Winter: Wheat, Gram)', type: 'concept' },
          ],
        },
        {
          id: 'steps',
          label: '7 Agricultural Practices',
          type: 'category',
          children: [
            { id: 'prep', label: 'Soil Prep & Sowing', type: 'concept' },
            { id: 'irrigation', label: 'Drip & Sprinkler Irrigation', type: 'concept' },
            { id: 'storage', label: 'Storage in Silos', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C8-SCI-CRO-001',
      questionText: 'Which of the following is a Kharif crop grown during the rainy season in India?',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: 'Paddy (Rice)', isCorrect: true, explanation: 'Paddy is a Kharif crop requiring large amounts of water.' },
        { text: 'Wheat', isCorrect: false, explanation: 'Wheat is a Rabi crop.' },
        { text: 'Mustard', isCorrect: false, explanation: 'Mustard is a Rabi crop.' },
        { text: 'Gram', isCorrect: false, explanation: 'Gram is a Rabi crop.' },
      ],
      explanation: 'Kharif crops like Paddy, Maize, and Cotton are sown at the beginning of the monsoon season in June/July.',
    },
  ],
};
