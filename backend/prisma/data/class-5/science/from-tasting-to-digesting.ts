export const tastingToDigestingData = {
  classNumber: 5,
  className: 'Class 5',
  subjectName: 'Science (EVS)',
  subjectCode: 'SCI5',
  chapterNumber: 2,
  chapterTitle: 'From Tasting to Digesting',
  summary: 'Taste regions on tongue (sweet, salty, sour, bitter), digestive system pathway, glucose drip, and balanced diet.',
  contentMarkdown: `# Chapter 2: From Tasting to Digesting (Class 5 Science EVS)

## 1. Tastes & The Tongue
Our tongue has tiny bumps called taste buds that help us identify 4 main tastes:
- **Front tip**: Sweet
- **Front sides**: Salty
- **Back sides**: Sour
- **Back**: Bitter

## 2. The Digestion Process
1. **Mouth**: Chewing breaks food into small pieces. Saliva helps digest starches.
2. **Stomach**: Gastric juices churn and break down food with acids.
3. **Small Intestine**: Absorption of nutrients into blood.
4. **Large Intestine**: Water absorption and waste removal.

## 3. Glucose Drip
When someone is sick, vomits, or has loose motions, their body loses water and sugar. A **Glucose Drip** provides instant energy directly into the bloodstream without waiting for digestion.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'From Tasting to Digesting',
      type: 'root',
      color: '#10b981',
      children: [
        {
          id: 'tongue',
          label: 'Taste Regions',
          type: 'category',
          children: [
            { id: 'sweet', label: 'Sweet (Tip) & Salty (Sides)', type: 'concept' },
            { id: 'bitter', label: 'Sour & Bitter (Back)', type: 'concept' },
          ],
        },
        {
          id: 'digest',
          label: 'Digestive Organs',
          type: 'category',
          children: [
            { id: 'mouth', label: 'Mouth (Saliva Digestion)', type: 'concept' },
            { id: 'stomach', label: 'Stomach (Acid Churning)', type: 'concept' },
            { id: 'intestine', label: 'Small Intestine (Nutrient Absorption)', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C5-SCI-FRO-001',
      questionText: 'Why is a glucose drip given to a patient who is severely weak or suffering from dehydration?',
      difficulty: 'EASY',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: 'It gives instant energy directly into the blood without waiting for digestion', isCorrect: true, explanation: 'Glucose goes straight into blood for instant energy.' },
        { text: 'It tastes sweet', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'It helps sleep faster', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'It cleans the stomach', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'Glucose solution injected into blood provides instant strength without requiring digestive processing.',
    },
  ],
};
