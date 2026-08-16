export const chemistryClass11Data = {
  classNumber: 11,
  className: 'Class 11',
  subjectName: 'Chemistry',
  subjectCode: 'CHEM11',
  chapterNumber: 1,
  chapterTitle: 'Some Basic Concepts of Chemistry',
  summary: 'Mole concept, molar mass, stoichiometry, empirical & molecular formulae, molarity, molality, and limiting reagent.',
  contentMarkdown: `# Chapter 1: Some Basic Concepts of Chemistry (Class 11 Chemistry)

## 1. Mole Concept & Avogadro Constant
One mole is the amount of substance containing $6.022 \\times 10^{23}$ elementary particles (Avogadro Constant $N_A$).
$$\\text{Moles } (n) = \\frac{\\text{Given Mass (g)}}{\\text{Molar Mass (g/mol)}} = \\frac{\\text{Number of Particles}}{6.022 \\times 10^{23}}$$

At STP (Standard Temp & Pressure), 1 mole of any ideal gas occupies **22.4 Litres**.

## 2. Concentration Terms
- **Molarity (M)**: $\\frac{\\text{Moles of solute}}{\\text{Volume of solution in Litres}}$ (Unit: $\\text{mol/L}$, Temperature dependent).
- **Molality (m)**: $\\frac{\\text{Moles of solute}}{\\text{Mass of solvent in kg}}$ (Temperature independent).
- **Mole Fraction (X)**: $X_A = \\frac{n_A}{n_A + n_B}$.

## 3. Limiting Reagent
The reactant which gets completely consumed first in a chemical reaction and limits the amount of product formed.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Basic Concepts of Chemistry',
      type: 'root',
      color: '#d97706',
      children: [
        {
          id: 'mole',
          label: 'Mole Concept & STP',
          type: 'category',
          children: [
            { id: 'avogadro', label: '6.022 × 10^23 Particles', type: 'concept' },
            { id: 'stp', label: '1 Mole Gas = 22.4 L at STP', type: 'concept' },
          ],
        },
        {
          id: 'conc',
          label: 'Concentration Terms',
          type: 'category',
          children: [
            { id: 'molarity', label: 'Molarity (n/V in L)', type: 'concept' },
            { id: 'molality', label: 'Molality (n/kg solvent)', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C11-SUB-SOM-001',
      questionText: 'How many moles of gas are present in 44.8 Litres of Carbon Dioxide (CO₂) at STP?',
      difficulty: 'EASY',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      options: [
        { text: '2.0 Moles', isCorrect: true, explanation: 'Moles = 44.8 L / 22.4 L/mol = 2.0 moles.' },
        { text: '1.0 Mole', isCorrect: false, explanation: 'Incorrect.' },
        { text: '4.0 Moles', isCorrect: false, explanation: 'Incorrect.' },
        { text: '0.5 Moles', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'At STP, 1 mole of any ideal gas occupies 22.4 L. Therefore, 44.8 L / 22.4 L/mol = 2.0 moles.',
    },
  ],
};
