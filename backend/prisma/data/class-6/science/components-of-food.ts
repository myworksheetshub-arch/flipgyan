export const componentsOfFoodData = {
  classNumber: 6,
  className: 'Class 6',
  subjectName: 'Science',
  subjectCode: 'SCI6',
  chapterNumber: 1,
  chapterTitle: 'Components of Food',
  summary: 'Nutrients in food (carbohydrates, proteins, fats, vitamins, minerals, roughage, water), balanced diet, and deficiency diseases.',
  contentMarkdown: `# Chapter 1: Components of Food

## 1. Major Nutrients
- **Carbohydrates**: Energy-giving foods (Rice, Wheat, Potato, Sugar).
- **Fats**: Give more energy than carbohydrates (Ghee, Butter, Nuts, Oils).
- **Proteins**: Body-building foods needed for growth and repair (Pulses, Milk, Eggs, Fish, Soybeans).
- **Vitamins & Minerals**: Protective foods protecting against diseases (Vitamin A, B-complex, C, D, E, K; Calcium, Iron, Iodine).

## 2. Tests for Nutrients
- **Starch Test**: Add 2-3 drops of dilute Iodine solution $\\rightarrow$ Turns **Blue-Black**.
- **Protein Test**: Add Copper Sulphate + Caustic Soda $\\rightarrow$ Turns **Violet**.
- **Fat Test**: Rub food item on a paper $\\rightarrow$ Oily patch appears.

## 3. Deficiency Diseases
- **Vitamin A**: Night Blindness (Poor vision in darkness)
- **Vitamin B1**: Beriberi (Weak muscles)
- **Vitamin C**: Scurvy (Bleeding gums)
- **Vitamin D**: Rickets (Soft & bent bones)
- **Iodine**: Goitre (Swollen neck gland)
- **Iron**: Anaemia (Weakness)
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Components of Food',
      type: 'root',
      color: '#8b5cf6',
      children: [
        {
          id: 'nutrients',
          label: 'Nutrients',
          type: 'category',
          children: [
            { id: 'carbs', label: 'Carbs & Fats (Energy)', type: 'concept' },
            { id: 'proteins', label: 'Proteins (Body Building)', type: 'concept' },
            { id: 'vitamins', label: 'Vitamins & Minerals (Protection)', type: 'concept' },
          ],
        },
        {
          id: 'diseases',
          label: 'Deficiency Diseases',
          type: 'category',
          children: [
            { id: 'scurvy', label: 'Vitamin C -> Scurvy', type: 'concept' },
            { id: 'rickets', label: 'Vitamin D -> Rickets', type: 'concept' },
            { id: 'goitre', label: 'Iodine -> Goitre', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C6-SCI-COM-001',
      questionText: 'Which deficiency disease is caused by the lack of Vitamin C in the diet?',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: 'Scurvy', isCorrect: true, explanation: 'Vitamin C deficiency causes scurvy (bleeding gums).' },
        { text: 'Beriberi', isCorrect: false, explanation: 'Caused by Vitamin B1.' },
        { text: 'Rickets', isCorrect: false, explanation: 'Caused by Vitamin D.' },
        { text: 'Goitre', isCorrect: false, explanation: 'Caused by Iodine deficiency.' },
      ],
      explanation: 'Lack of Vitamin C causes Scurvy, characterized by bleeding gums and wounds taking longer to heal.',
    },
  ],
};
