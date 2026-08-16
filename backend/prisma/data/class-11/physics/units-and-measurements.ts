export const unitsClass11Data = {
  classNumber: 11,
  className: 'Class 11',
  subjectName: 'Physics',
  subjectCode: 'PHY11',
  chapterNumber: 1,
  chapterTitle: 'Units and Measurements',
  summary: 'SI units, fundamental & derived units, dimensional analysis, applications of dimensions, errors in measurement, and significant figures.',
  contentMarkdown: `# Chapter 1: Units and Measurements (Class 11 Physics)

## 1. SI Base Units
The 7 fundamental SI units:
1. **Length**: Meter (m)
2. **Mass**: Kilogram (kg)
3. **Time**: Second (s)
4. **Electric Current**: Ampere (A)
5. **Thermodynamic Temperature**: Kelvin (K)
6. **Amount of Substance**: Mole (mol)
7. **Luminous Intensity**: Candela (cd)

## 2. Dimensional Analysis
Dimensions of a physical quantity express how fundamental quantities are raised to powers:
- **Velocity**: $[v] = [M^0 L^1 T^{-1}]$
- **Acceleration**: $[a] = [M^0 L^1 T^{-2}]$
- **Force**: $[F] = [M^1 L^1 T^{-2}]$
- **Work / Energy**: $[W] = [M^1 L^2 T^{-2}]$
- **Pressure / Stress**: $[P] = [M^1 L^{-1} T^{-2}]$

## 3. Applications of Dimensions
1. Checking dimensional consistency of equations.
2. Deriving relationships among physical quantities.
3. Converting units from one system to another.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Units & Measurements (Class 11)',
      type: 'root',
      color: '#0284c7',
      children: [
        {
          id: 'base',
          label: '7 SI Base Units',
          type: 'category',
          children: [
            { id: 'fundamental', label: 'm, kg, s, A, K, mol, cd', type: 'concept' },
          ],
        },
        {
          id: 'dimensions',
          label: 'Dimensional Formulae',
          type: 'category',
          children: [
            { id: 'force', label: 'Force = [M L T^-2]', type: 'concept' },
            { id: 'energy', label: 'Energy = [M L^2 T^-2]', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C11-SUB-UNI-001',
      questionText: 'What is the dimensional formula for Work and Energy?',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: '[M¹ L² T⁻²]', isCorrect: true, explanation: 'Work = Force × Distance = [M L T⁻²] × [L] = [M L² T⁻²].' },
        { text: '[M¹ L¹ T⁻²]', isCorrect: false, explanation: 'This is the dimensional formula of Force.' },
        { text: '[M¹ L⁻¹ T⁻²]', isCorrect: false, explanation: 'This is Pressure.' },
        { text: '[M⁰ L¹ T⁻¹]', isCorrect: false, explanation: 'This is Velocity.' },
      ],
      explanation: 'Work = Force × Displacement = [M L T⁻²] × [L] = [M L² T⁻²].',
    },
  ],
};
