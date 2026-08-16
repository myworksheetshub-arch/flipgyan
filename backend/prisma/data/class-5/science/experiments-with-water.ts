export const experimentsWithWaterData = {
  classNumber: 5,
  className: 'Class 5',
  subjectName: 'Science (EVS)',
  subjectCode: 'SCI5',
  chapterNumber: 3,
  chapterTitle: "Experiments with Water & A Snake Charmer's Story",
  summary: 'Class 5 EVS Unit 3 — Floating & sinking, saltiness of Dead Sea, making salt via evaporation, and facts about snakes & snake charmers (Kalbeliyas).',
  contentMarkdown: `# Unit 3: Experiments with Water & A Snake Charmer's Story (Class 5 EVS)

## 1. Floating and Sinking
- **Density**: Objects float if they are less dense than water, and sink if they are denser.
- **Salty Water**: Adding salt increases water density. A fresh egg sinks in plain water, but **floats in very salty water**.
- **The Dead Sea**: The saltiest body of water on Earth! Contains **300 grams of salt in 1 litre of water**. A person can float on the Dead Sea without swimming!

## 2. Soluble vs Insoluble Substances
- **Soluble**: Dissolves in water (Sugar, Salt, Milk, Lemon juice).
- **Insoluble**: Does not dissolve in water (Chalk powder, Sand, Oil, Wax).
- **Making Salt**: Seawater is collected in shallow pits. Sunlight evaporates the water, leaving solid salt behind (Famous Dandi March by Mahatma Gandhi in 1930 for Salt Law).

## 3. A Snake Charmer's Story (Kalbeliyas)
- Snake charmers belong to the **Kalbeliya** community.
- They play the **Been** (made from dried gourd / lauki), Tumba, and Khanjari.
- **Poisonous Snakes in India**: Out of many snakes, only **4 types** are poisonous in India:
  1. **Cobra** (Naja naja)
  2. **Common Krait**
  3. **Russell's Viper** (Duboiya)
  4. **Saw-scaled Viper** (Afai)
- Poisonous snakes have 2 hollow teeth called **Fangs**. The medicine for snakebite is made from the snake's own poison!
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Class 5 EVS Unit 3',
      type: 'root',
      color: '#10b981',
      children: [
        {
          id: 'water',
          label: 'Experiments with Water',
          type: 'category',
          children: [
            { id: 'dead-sea', label: 'Dead Sea (300g salt / 1L water)', type: 'concept' },
            { id: 'floating', label: 'Egg floats in Salty Water', type: 'concept' },
            { id: 'evaporation', label: 'Salt Making via Evaporation', type: 'concept' },
          ],
        },
        {
          id: 'snakes',
          label: 'Snakes & Snake Charmers',
          type: 'category',
          children: [
            { id: 'poisonous', label: '4 Poisonous Snakes (Cobra, Krait, 2 Vipers)', type: 'concept' },
            { id: 'fangs', label: 'Fangs & Anti-venom Medicine', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C5-SCI-EXP-001',
      questionText: 'How many types of poisonous snakes are found in India?',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: '4 Types (Cobra, Krait, Russell’s Viper, Saw-scaled Viper)', isCorrect: true, explanation: 'Only 4 types of snakes are poisonous in India.' },
        { text: '10 Types', isCorrect: false, explanation: 'Incorrect.' },
        { text: '100 Types', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'All snakes are poisonous', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'In India, only 4 species of snakes are poisonous: Cobra, Common Krait, Russell’s Viper, and Saw-scaled Viper.',
    },
    {
      questionCode: 'C5-SCI-EXP-002',
      questionText: 'How much salt is dissolved in 1 Litre of water in the Dead Sea?',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: '300 grams', isCorrect: true, explanation: 'Dead Sea has 300g of salt per 1 litre of water.' },
        { text: '50 grams', isCorrect: false, explanation: 'Incorrect.' },
        { text: '1000 grams', isCorrect: false, explanation: 'Incorrect.' },
        { text: '10 grams', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'The Dead Sea is extremely salty, containing 300 grams of salt in just 1 litre of water.',
    },
    {
      questionCode: 'C5-SCI-EXP-003',
      questionText: 'Why does an egg float when a large amount of salt is added to a bowl of water?',
      difficulty: 'MEDIUM',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: 'Adding salt increases the density of the water', isCorrect: true, explanation: 'Salt increases water density, making it denser than the egg.' },
        { text: 'Salt makes the egg lighter', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'Water turns into ice', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'Air gets inside the egg shell', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'Dissolving salt in water increases the density of water. When the salty water becomes denser than the egg, the egg floats.',
    },
    {
      questionCode: 'C5-SCI-EXP-004',
      questionText: 'What are the two hollow poisonous teeth of a snake called?',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'VOCABULARY',
      marks: 1,
      options: [
        { text: 'Fangs', isCorrect: true, explanation: 'The hollow poisonous teeth are called fangs.' },
        { text: 'Molars', isCorrect: false, explanation: 'Chewing teeth.' },
        { text: 'Incisors', isCorrect: false, explanation: 'Front teeth.' },
        { text: 'Canines', isCorrect: false, explanation: 'Tearing teeth.' },
      ],
      explanation: 'When a snake bites, poison enters through its two hollow poisonous teeth called fangs.',
    },
    {
      questionCode: 'C5-SCI-EXP-005',
      questionText: 'What traditional musical instrument played by snake charmers is made from a dried gourd (Lauki)?',
      difficulty: 'MEDIUM',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: 'Been', isCorrect: true, explanation: 'Been is made from dried gourd.' },
        { text: 'Flute (Bansuri)', isCorrect: false, explanation: 'Bansuri is made of bamboo.' },
        { text: 'Drum (Dholak)', isCorrect: false, explanation: 'Dholak is made of wood.' },
        { text: 'Sitar', isCorrect: false, explanation: 'String instrument.' },
      ],
      explanation: 'The Been is a traditional wind instrument crafted from dried bottle gourd (lauki).',
    },
  ],
};
