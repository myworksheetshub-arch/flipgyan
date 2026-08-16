export const currentElectricityClass12Data = {
  classNumber: 12,
  className: 'Class 12',
  subjectName: 'Physics',
  subjectCode: 'PHY12',
  chapterNumber: 2,
  chapterTitle: 'Current Electricity',
  summary: 'Electric current, drift velocity, Ohm law, electrical resistance & resistivity, temperature dependence, Kirchhoff laws, and Wheatstone bridge.',
  contentMarkdown: `# Chapter 2: Current Electricity (Class 12 Physics)

## 1. Electric Current & Drift Velocity
- **Current Density**: $J = \\frac{I}{A} = n e v_d$
- **Drift Velocity**: $v_d = -\\frac{e E}{m} \\tau$ (where $\\tau$ is relaxation time).
- **Ohm's Law**: $V = IR \\implies R = \\rho \\frac{l}{A}$

## 2. Kirchhoff's Laws
1. **Kirchhoff's Current Law (KCL - Junction Rule)**: Total current entering a junction equals total current leaving. (Conservation of Charge).
2. **Kirchhoff's Voltage Law (KVL - Loop Rule)**: Algebraic sum of potential differences in any closed loop is zero. (Conservation of Energy).

## 3. Wheatstone Bridge
Balanced condition:
$$\\frac{P}{Q} = \\frac{R}{S}$$
When balanced, no current flows through the central galvanometer.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Current Electricity',
      type: 'root',
      color: '#0284c7',
      children: [
        {
          id: 'kirchhoff',
          label: 'Kirchhoff Laws',
          type: 'category',
          children: [
            { id: 'kcl', label: 'KCL (Junction Rule - Charge Conservation)', type: 'concept' },
            { id: 'kvl', label: 'KVL (Loop Rule - Energy Conservation)', type: 'concept' },
          ],
        },
        {
          id: 'bridge',
          label: 'Wheatstone Bridge',
          type: 'category',
          children: [
            { id: 'balanced', label: 'Balanced Condition: P / Q = R / S', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C12-SUB-CUR-001',
      questionText: "Kirchhoff's First Law (Junction Rule ΣI = 0) is based on the conservation of which physical quantity?",
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: 'Charge', isCorrect: true, explanation: "Kirchhoff's Junction Rule is based on Conservation of Charge." },
        { text: 'Energy', isCorrect: false, explanation: "Loop Rule (KVL) is based on Conservation of Energy." },
        { text: 'Momentum', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'Mass', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: "Kirchhoff's Current Law (Junction Rule) states charge cannot accumulate at a junction, so it obeys Conservation of Charge.",
    },
  ],
};
