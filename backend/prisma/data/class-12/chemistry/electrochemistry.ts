export const electrochemistryClass12Data = {
  classNumber: 12,
  className: 'Class 12',
  subjectName: 'Chemistry',
  subjectCode: 'CHEM12',
  chapterNumber: 1,
  chapterTitle: 'Electrochemistry',
  summary: 'Galvanic cells, Nernst equation, standard electrode potential, molar conductivity, Kohlrausch law, electrolysis, and batteries.',
  contentMarkdown: `# Chapter 1: Electrochemistry (Class 12 Chemistry)

## 1. Electrochemical Cells (Galvanic / Voltaic Cell)
Converts chemical energy into electrical energy.
- **Anode**: Oxidation occurs (Negative electrode).
- **Cathode**: Reduction occurs (Positive electrode).
- **Cell EMF ($E^\\circ_{\\text{cell}}$)**: $E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}$

## 2. Nernst Equation
For electrode reaction $M^{n+} + n e^- \\rightarrow M(s)$:
$$E = E^\\circ - \\frac{RT}{nF} \\ln \\frac{1}{[M^{n+}]} = E^\\circ - \\frac{0.0591}{n} \\log_{10} \\frac{1}{[M^{n+}]} \\quad (\\text{at } 298 \\text{ K})$$

Relation with Gibbs Free Energy:
$$\\Delta G^\\circ = -n F E^\\circ_{\\text{cell}}$$

## 3. Kohlrausch's Law of Independent Migration of Ions
Molar conductivity at infinite dilution ($\\Lambda_m^\\circ$) of an electrolyte is equal to the sum of individual molar conductivities of its cations and anions.
$$\\Lambda_m^\\circ (NaCl) = \\lambda_{Na^+}^\\circ + \\lambda_{Cl^-}^\\circ$$
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Electrochemistry (Class 12)',
      type: 'root',
      color: '#d97706',
      children: [
        {
          id: 'cells',
          label: 'Galvanic Cell & Nernst Equation',
          type: 'category',
          children: [
            { id: 'emf', label: 'E°cell = E°cathode - E°anode', type: 'concept' },
            { id: 'nernst', label: 'Nernst Eq: E = E° - (0.0591/n) log Q', type: 'concept' },
            { id: 'gibbs', label: 'ΔG° = -n F E°cell', type: 'concept' },
          ],
        },
        {
          id: 'conductance',
          label: 'Conductivity & Kohlrausch Law',
          type: 'category',
          children: [
            { id: 'kohlrausch', label: 'Kohlrausch Law of Independent Migration', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C12-SUB-ELE-001',
      questionText: 'What is the relationship between Standard Free Energy change (ΔG°) and Cell EMF (E°cell)?',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: 'ΔG° = -n F E°cell', isCorrect: true, explanation: 'ΔG° = -n F E°cell where n is moles of electrons and F is Faraday constant.' },
        { text: 'ΔG° = +n F E°cell', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'ΔG° = -n F / E°cell', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'ΔG° = E°cell / nF', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'The maximum work done by an electrochemical cell is equal to the decrease in Gibbs free energy: ΔG° = -n F E°cell.',
    },
  ],
};
