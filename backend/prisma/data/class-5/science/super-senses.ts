export const superSensesData = {
  classNumber: 5,
  className: 'Class 5',
  subjectName: 'Science',
  subjectCode: 'SCI5',
  chapterNumber: 1,
  chapterTitle: 'Super Senses',
  summary: 'Incredible senses in animals (sight, hearing, smell, touch, taste), animal communication, and wildlife protection.',
  contentMarkdown: `# Chapter 1: Super Senses

## 1. Amazing Senses in Animals
Animals have very strong senses of sight, hearing, smell, and taste.

- **Ants**: Leave a scent (pheromone) trail on the ground so other ants can follow the path.
- **Dogs**: Can smell urine/feces of other dogs to mark their territory.
- **Mosquitoes**: Can find humans by the smell of their body, sole of feet, and heat.
- **Eagles and Hawks**: Have super sight; can see things from 8 meters away that humans see from 2 meters away.
- **Eels and Dolphins**: Communicate through sound waves in water.

## 2. Animals Sleep Cycles
- **Sloth**: Sleeps for about 17 hours a day hanging upside down on a tree branch.
- **Tiger**: Can see 6 times better at night than a human. Tiger roar can be heard up to 3 km away.

## 3. Protecting Wildlife
Poachers kill animals for their body parts:
- **Elephants**: Tusks
- **Rhinoceros**: Horn
- **Tigers, Snakes, Crocodiles**: Skin
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Super Senses',
      type: 'root',
      color: '#10b981',
      children: [
        {
          id: 'senses',
          label: 'Super Animal Senses',
          type: 'category',
          children: [
            { id: 'ants', label: 'Ants (Scent Trail)', type: 'concept' },
            { id: 'eagles', label: 'Eagles (4x Human Sight)', type: 'concept' },
            { id: 'tigers', label: 'Tigers (Super Night Vision)', type: 'concept' },
          ],
        },
        {
          id: 'protection',
          label: 'Wildlife Protection',
          type: 'category',
          children: [
            { id: 'national-parks', label: 'National Parks & Sanctuaries', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C5-SCI-SUP-001',
      questionText: 'How many hours a day does a sloth sleep hanging upside down on a tree branch?',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: '17 Hours', isCorrect: true, explanation: 'Sloths sleep about 17 hours a day.' },
        { text: '6 Hours', isCorrect: false, explanation: 'Incorrect.' },
        { text: '24 Hours', isCorrect: false, explanation: 'Incorrect.' },
        { text: '2 Hours', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'A sloth spends almost 17 hours a day sleeping while hanging upside down on a tree branch.',
    },
  ],
};
