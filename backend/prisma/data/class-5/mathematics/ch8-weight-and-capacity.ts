export const ch8WeightAndCapacityData = {
  chapterNumber: 8,
  title: 'Weight and Capacity',
  description: 'Comparing kilograms, grams, litres, millilitres, balance scale problems, and packaging measurements.',
  topics: [
    { title: 'Weight Units: Kg & Grams', summary: '1 kg = 1000 g, converting units, and measuring heavy/light objects.' },
    { title: 'Capacity Units: Litres & mL', summary: 'Estimating container volumes and solving multi-step capacity problems.' },
  ],
  questions: [
    {
      questionCode: 'C5-MATH-WEI-001',
      questionText: 'How many 250 gram sugar packets are needed to make 2.5 kg?',
      questionType: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      marks: 1,
      explanation: '2.5 kg = 2500 g. Number of packets = 2500 g / 250 g = 10 packets.',
      options: [
        { text: '10 packets', isCorrect: true },
        { text: '8 packets', isCorrect: false },
        { text: '12 packets', isCorrect: false },
        { text: '5 packets', isCorrect: false },
      ],
    },
    {
      questionCode: 'C5-MATH-WEI-002',
      questionText: 'Convert 4 kg 750 g into grams.',
      questionType: 'SHORT_ANSWER',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      answerText: '4750',
      explanation: '4 × 1000 + 750 = 4750 g.',
    },
  ],
};
