export const acidsBasesSaltsClass10Data = {
  classNumber: 10,
  className: 'Class 10',
  subjectName: 'Science',
  subjectCode: 'SCI10',
  chapterNumber: 2,
  chapterTitle: 'Acids, Bases and Salts (Class 10)',
  summary: 'Chemical properties of acids & bases, pH scale, importance of pH in daily life, salts preparation (Bleaching powder, Baking soda, Washing soda, Plaster of Paris).',
  contentMarkdown: `# Chapter 2: Acids, Bases and Salts (Class 10 Science)

## 1. Reaction of Acids & Bases
- **Acid + Metal**: $\\text{Acid} + \\text{Metal} \\rightarrow \\text{Salt} + \\text{Hydrogen Gas } (H_2)$
  - *Pop Test*: Hydrogen burns with a pop sound when brought near a candle flame.
- **Acid + Metal Carbonate**: $\\text{Acid} + \\text{Metal Carbonate} \\rightarrow \\text{Salt} + \\text{Water} + CO_2 \\uparrow$

## 2. pH Scale
- Measures $H^+$ ion concentration ($pH = -\\log[H^+]$).
  - $pH < 7$: Acidic (Lower pH = Stronger acid).
  - $pH = 7$: Neutral.
  - $pH > 7$: Basic (Higher pH = Stronger base).

## 3. Important Salts & Chemical Formulae
1. **Bleaching Powder**: $CaOCl_2$ (Calcium oxychloride) — Disinfectant & bleaching agent.
2. **Baking Soda**: $NaHCO_3$ (Sodium hydrogen carbonate) — Antacid & baking.
3. **Washing Soda**: $Na_2CO_3 \\cdot 10H_2O$ (Sodium carbonate decahydrate) — Glass/soap industry & removing permanent hardness of water.
4. **Plaster of Paris (POP)**: $CaSO_4 \\cdot \\frac{1}{2}H_2O$ (Calcium sulphate hemihydrate). On adding water, turns into hard solid **Gypsum** ($CaSO_4 \\cdot 2H_2O$).
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Acids, Bases & Salts (Class 10)',
      type: 'root',
      color: '#059669',
      children: [
        {
          id: 'ph',
          label: 'pH Scale & H+ Ions',
          type: 'category',
          children: [
            { id: 'acid-ph', label: 'pH < 7 (Acidic; Pop test for H2 gas)', type: 'concept' },
            { id: 'base-ph', label: 'pH > 7 (Basic)', type: 'concept' },
          ],
        },
        {
          id: 'salts',
          label: 'Salts & Formulae',
          type: 'category',
          children: [
            { id: 'bleaching', label: 'Bleaching Powder: CaOCl2', type: 'concept' },
            { id: 'pop', label: 'Plaster of Paris: CaSO4 · 1/2 H2O -> Gypsum', type: 'concept' },
            { id: 'washing', label: 'Washing Soda: Na2CO3 · 10H2O', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C10-SCI-ACI-001',
      questionText: 'What is the chemical formula of Plaster of Paris (POP)?',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: 'CaSO₄ · ½ H₂O', isCorrect: true, explanation: 'Plaster of Paris is Calcium sulphate hemihydrate (CaSO₄ · ½ H₂O).' },
        { text: 'CaSO₄ · 2 H₂O', isCorrect: false, explanation: 'This is Gypsum.' },
        { text: 'CaOCl₂', isCorrect: false, explanation: 'This is Bleaching powder.' },
        { text: 'NaHCO₃', isCorrect: false, explanation: 'This is Baking soda.' },
      ],
      explanation: 'Plaster of Paris is Calcium sulphate hemihydrate CaSO₄ · ½ H₂O. When mixed with water, it rehydrates to form hard Gypsum CaSO₄ · 2 H₂O.',
    },
  ],
};
