export const heatData = {
  classNumber: 7,
  className: 'Class 7',
  subjectName: 'Science',
  subjectCode: 'SCI7',
  chapterNumber: 2,
  chapterTitle: 'Heat',
  summary: 'Measurement of temperature, clinical vs laboratory thermometers, and modes of heat transfer (conduction, convection, radiation).',
  contentMarkdown: `# Chapter 2: Heat

## 1. Hot and Cold
Temperature is a reliable measure of the hotness of an object. Thermometer is the device used to measure temperature.

## 2. Types of Thermometers
- **Clinical Thermometer**: Measures human body temperature ($35^\\circ\\text{C}$ to $42^\\circ\\text{C}$). Normal body temperature is $37^\\circ\\text{C}$. Has a kink to prevent mercury level from falling.
- **Laboratory Thermometer**: Measures laboratory temperatures ($-10^\\circ\\text{C}$ to $110^\\circ\\text{C}$).

## 3. Transfer of Heat
- **Conduction**: Transfer of heat in solids from hotter to colder end without movement of particles.
- **Convection**: Transfer of heat in fluids (liquids/gases) by actual movement of particles. (Causes Sea breeze and Land breeze).
- **Radiation**: Heat transfer requiring no medium. (Sun heat reaching Earth).
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Heat',
      type: 'root',
      color: '#ea580c',
      children: [
        {
          id: 'thermometers',
          label: 'Thermometers',
          type: 'category',
          children: [
            { id: 'clinical', label: 'Clinical (35°C to 42°C)', type: 'concept' },
            { id: 'lab', label: 'Laboratory (-10°C to 110°C)', type: 'concept' },
          ],
        },
        {
          id: 'transfer',
          label: 'Modes of Heat Transfer',
          type: 'category',
          children: [
            { id: 'conduction', label: 'Conduction (Solids)', type: 'concept' },
            { id: 'convection', label: 'Convection (Fluids, Breezes)', type: 'concept' },
            { id: 'radiation', label: 'Radiation (Vacuum)', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C7-SCI-HEA-001',
      questionText: 'What is the normal temperature of a healthy human body in Celsius?',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: '37°C', isCorrect: true, explanation: 'Normal human body temperature is 37°C.' },
        { text: '98.6°C', isCorrect: false, explanation: '98.6 is in Fahrenheit (°F).' },
        { text: '42°C', isCorrect: false, explanation: 'Incorrect.' },
        { text: '35°C', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'Normal body temperature is 37°C (98.6°F).',
    },
  ],
};
