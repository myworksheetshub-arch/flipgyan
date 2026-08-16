export const chemicalReactionsClass10Data = {
  classNumber: 10,
  className: 'Class 10',
  subjectName: 'Science',
  subjectCode: 'SCI10',
  chapterNumber: 1,
  chapterTitle: 'Chemical Reactions and Equations',
  summary: 'Writing and balancing chemical equations, types of reactions (combination, decomposition, displacement, double displacement, redox), corrosion and rancidity.',
  contentMarkdown: `# Chapter 1: Chemical Reactions and Equations

## 1. Chemical Equation & Balancing
Law of Conservation of Mass: Mass can neither be created nor destroyed in a chemical reaction. Total mass of elements in products = Total mass of elements in reactants.

Example of Balanced Equation:
$$3Fe(s) + 4H_2O(g) \\rightarrow Fe_3O_4(s) + 4H_2(g)$$

## 2. Types of Chemical Reactions
1. **Combination Reaction**: Single product formed from two or more reactants.
   $$CaO(s) + H_2O(l) \\rightarrow Ca(OH)_2(aq) + \\text{Heat}$$
2. **Decomposition Reaction**: Single reactant breaks down to give simpler products (Thermal, Electrolytic, Photolytic).
   $$2Pb(NO_3)_2(s) \\xrightarrow{\\text{Heat}} 2PbO(s) + 4NO_2(g) + O_2(g)$$
3. **Displacement Reaction**: More reactive element displaces less reactive element.
   $$Fe(s) + CuSO_4(aq) \\rightarrow FeSO_4(aq) + Cu(s)$$
4. **Double Displacement & Precipitation**: Exchange of ions between reactants.
   $$Na_2SO_4(aq) + BaCl_2(aq) \\rightarrow BaSO_4(s) \\downarrow + 2NaCl(aq)$$
5. **Redox Reaction**: Simultaneous Oxidation (gain of $O_2$ / loss of $H_2$) and Reduction (loss of $O_2$ / gain of $H_2$).

## 3. Effects of Oxidation in Daily Life
- **Corrosion**: Metal attacked by moisture/acid ($Fe_2O_3 \\cdot xH_2O$ rust).
- **Rancidity**: Fats and oils oxidized causing unpleasant smell/taste. Prevented by antioxidants or $N_2$ gas flush.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Chemical Reactions & Equations',
      type: 'root',
      color: '#059669',
      children: [
        {
          id: 'types',
          label: 'Types of Reactions',
          type: 'category',
          children: [
            { id: 'combination', label: 'Combination (CaO + H2O)', type: 'concept' },
            { id: 'decomposition', label: 'Decomposition (Thermal, Photo, Electro)', type: 'concept' },
            { id: 'displacement', label: 'Displacement (Fe + CuSO4)', type: 'concept' },
            { id: 'double-disp', label: 'Double Displacement & Precipitate (BaSO4)', type: 'concept' },
            { id: 'redox', label: 'Redox (Oxidation & Reduction)', type: 'concept' },
          ],
        },
        {
          id: 'effects',
          label: 'Oxidation Effects',
          type: 'category',
          children: [
            { id: 'corrosion', label: 'Corrosion & Rusting', type: 'concept' },
            { id: 'rancidity', label: 'Rancidity & Nitrogen Flush', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C10-SCI-CHE-001',
      questionText: 'What type of chemical reaction is represented by Fe(s) + CuSO4(aq) → FeSO4(aq) + Cu(s)?',
      difficulty: 'EASY',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: 'Displacement Reaction', isCorrect: true, explanation: 'Iron is more reactive than copper and displaces copper from copper sulphate solution.' },
        { text: 'Combination Reaction', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'Double Displacement Reaction', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'Decomposition Reaction', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'More reactive metal (Iron) displaces less reactive metal (Copper) from its salt solution.',
    },
  ],
};
