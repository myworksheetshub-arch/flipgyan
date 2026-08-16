export const iceCreamManData = {
  classNumber: 5,
  className: 'Class 5',
  subjectName: 'English',
  subjectCode: 'ENG5',
  chapterNumber: 1,
  chapterTitle: 'Ice-Cream Man & Wonderful Waste!',
  summary: 'Marigold Unit 1 — Ice-Cream Man poem, descriptive vocabulary, rhyming words, adjectives, compound words, and reading comprehension.',
  contentMarkdown: `# Unit 1: Ice-Cream Man & Wonderful Waste! (Class 5 English)

## 1. Ice-Cream Man (Poem by Rachel Field)
When summer's in the city, and brick's a blaze of heat,
The Ice-Cream Man with his little cart goes trundling down the street.
Beneath his round umbrella, Oh, what a joyful sight,
To see him fill the cones with mounds of cooling brown and white!

### Key Vocabulary & Meanings
- **Blaze**: Bright flame or heat.
- **Trundling**: Moving on small broad wheels.
- **Mounds**: Heap, pile, or hill of ice cream.
- **Frosty-fizz**: Chilly drink making a hissing sound.
- **Cluster**: Gather around in a crowd.

## 2. Grammar Focus: Adjectives & Rhyming Words
- **Descriptive Adjectives**: *joyful* sight, *round* umbrella, *cooling* brown, *frosty* drink.
- **Rhyming Words**:
  - *Heat* $\\leftrightarrow$ *Street*
  - *Sight* $\\leftrightarrow$ *White*
  - *Drink* $\\leftrightarrow$ *Pink*

## 3. Compound Words
A compound word is formed when two words are joined together:
- Ice + Cream = **Ice-cream**
- Sun + Light = **Sunlight**
- Butter + Fly = **Butterfly**
- Rain + Bow = **Rainbow**
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Class 5 English Unit 1',
      type: 'root',
      color: '#8b5cf6',
      children: [
        {
          id: 'poem',
          label: 'Ice-Cream Man Poem',
          type: 'category',
          children: [
            { id: 'vocab', label: 'Vocab: Trundling, Mounds, Frosty-fizz', type: 'concept' },
            { id: 'rhyme', label: 'Rhyming: Heat/Street, Sight/White', type: 'concept' },
          ],
        },
        {
          id: 'grammar',
          label: 'Grammar Skills',
          type: 'category',
          children: [
            { id: 'adjectives', label: 'Adjectives (Joyful, Cooling, Frosty)', type: 'concept' },
            { id: 'compound', label: 'Compound Words (Rain + Bow = Rainbow)', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C5-ENG-ICE-001',
      questionText: "In the poem 'Ice-Cream Man', what does the Ice-Cream Man carry over his cart?",
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: 'A round umbrella', isCorrect: true, explanation: 'Beneath his round umbrella, Oh, what a joyful sight!' },
        { text: 'A large flag', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'A bright lantern', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'A wooden bell', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'The poet describes the Ice-Cream Man with a round umbrella over his little cart.',
    },
    {
      questionCode: 'C5-ENG-ICE-002',
      questionText: "Which word rhymes with 'heat' in the poem?",
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: 'Street', isCorrect: true, explanation: "Heat rhymes with Street ('...brick's a blaze of heat / ...goes trundling down the street')." },
        { text: 'Sight', isCorrect: false, explanation: 'Sight rhymes with white.' },
        { text: 'Cone', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'Cart', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: "In line 2 of the poem, 'heat' rhymes with 'street'.",
    },
    {
      questionCode: 'C5-ENG-ICE-003',
      questionText: "Which of the following is a Compound Word?",
      difficulty: 'EASY',
      bloomLevel: 'UNDERSTAND',
      competency: 'GRAMMAR',
      marks: 1,
      options: [
        { text: 'Rainbow', isCorrect: true, explanation: 'Rain + Bow = Rainbow (Compound word).' },
        { text: 'Cooling', isCorrect: false, explanation: 'Single word with suffix -ing.' },
        { text: 'Joyful', isCorrect: false, explanation: 'Single word with suffix -ful.' },
        { text: 'Street', isCorrect: false, explanation: 'Root word.' },
      ],
      explanation: 'Rainbow is formed by joining two distinct words: Rain + Bow = Rainbow.',
    },
    {
      questionCode: 'C5-ENG-ICE-004',
      questionText: "Identify the Adjective in the sentence: 'The Ice-Cream Man sells cold frosty drinks.'",
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'GRAMMAR',
      marks: 1,
      options: [
        { text: 'Frosty', isCorrect: true, explanation: "'Frosty' describes the noun 'drinks', so it is an adjective." },
        { text: 'Sells', isCorrect: false, explanation: 'Sells is a verb.' },
        { text: 'Drinks', isCorrect: false, explanation: 'Drinks is a noun.' },
        { text: 'Man', isCorrect: false, explanation: 'Man is a noun.' },
      ],
      explanation: "'Frosty' describes the quality of the drinks, making it a descriptive adjective.",
    },
    {
      questionCode: 'C5-ENG-ICE-005',
      questionText: "What does the word 'Trundling' mean in the poem?",
      difficulty: 'MEDIUM',
      bloomLevel: 'UNDERSTAND',
      competency: 'VOCABULARY',
      marks: 1,
      options: [
        { text: 'Moving heavily on small wheels', isCorrect: true, explanation: 'Trundling means moving on small broad wheels.' },
        { text: 'Flying high in the sky', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'Melting quickly in sun', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'Dancing gracefully', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'Trundling refers to rolling or moving along on small wheels, as the ice-cream cart does.',
    },
  ],
};
