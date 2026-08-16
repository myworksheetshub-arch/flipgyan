export const matterInOurSurroundingsData = {
  classNumber: 9,
  className: 'Class 9',
  subjectName: 'Science',
  subjectCode: 'SCI9',
  chapterNumber: 1,
  chapterTitle: 'Matter in Our Surroundings',
  summary: 'Physical nature of matter, states of matter (solid, liquid, gas), interconversion of states, latent heat, and evaporation.',
  contentMarkdown: `# Chapter 1: Matter in Our Surroundings

## 1. Physical Nature of Matter
Matter is made up of tiny particles called atoms/molecules.
- Particles of matter have spaces between them.
- Particles of matter are continuously moving (Kinetic Energy increases with temperature).
- Particles of matter attract each other.

## 2. States of Matter
- **Solid**: Definite shape and volume, high density, negligible compressibility.
- **Liquid**: No fixed shape, fixed volume, fluid.
- **Gas**: No fixed shape or volume, highly compressible.

## 3. Latent Heat
- **Latent Heat of Fusion**: Heat energy required to change $1\\text{ kg}$ of solid into liquid at atmospheric pressure at its melting point.
- **Latent Heat of Vaporisation**: Heat energy required to change $1\\text{ kg}$ of liquid into gas at its boiling point.

## 4. Evaporation
Surface phenomenon where liquid turns into vapour at any temperature below its boiling point.
*Factors affecting evaporation*: Surface area, Temperature, Humidity, Wind speed. Evaporation causes **cooling**.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Matter in Our Surroundings',
      type: 'root',
      color: '#06b6d4',
      children: [
        {
          id: 'states',
          label: 'States of Matter',
          type: 'category',
          children: [
            { id: 'solid', label: 'Solid (Rigid, Fixed Shape)', type: 'concept' },
            { id: 'liquid', label: 'Liquid (Fluid, Fixed Volume)', type: 'concept' },
            { id: 'gas', label: 'Gas (High Compressibility)', type: 'concept' },
          ],
        },
        {
          id: 'evaporation',
          label: 'Evaporation & Latent Heat',
          type: 'category',
          children: [
            { id: 'cooling', label: 'Evaporation Causes Cooling', type: 'concept' },
            { id: 'latent', label: 'Latent Heat of Fusion/Vaporisation', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C9-SCI-MAT-001',
      questionText: 'Why does evaporation cause cooling?',
      difficulty: 'MEDIUM',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: 'Particles absorb energy from surroundings to regain lost energy during phase change', isCorrect: true, explanation: 'Heat absorption from surroundings lowers surrounding temperature.' },
        { text: 'Particles release heat to the surroundings', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'Humidity increases temperature', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'Liquid contracts into solid', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'Liquid particles absorb energy from the surroundings during evaporation, leading to cooling of the surroundings.',
    },
  ],
};
