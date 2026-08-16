export const physicsClass12Data = {
  classNumber: 12,
  className: 'Class 12',
  subjectName: 'Physics',
  subjectCode: 'PHY12',
  chapterNumber: 1,
  chapterTitle: 'Electric Charges and Fields',
  summary: 'Coulomb law, electric field intensity, electric dipole, electric flux, and Gauss law applications.',
  contentMarkdown: `# Chapter 1: Electric Charges and Fields (Class 12 Physics)

## 1. Coulomb's Law of Electrostatics
The electrostatic force $F$ between two point charges $q_1$ and $q_2$ separated by distance $r$ in vacuum:
$$F = \\frac{1}{4\\pi \\varepsilon_0} \\frac{|q_1 q_2|}{r^2}$$
where $\\frac{1}{4\\pi \\varepsilon_0} = 8.9875 \\times 10^9 \\text{ N m}^2/\\text{C}^2 \\approx 9 \\times 10^9 \\text{ N m}^2/\\text{C}^2$.

## 2. Electric Field & Dipole
- **Electric Field Intensity**: $\\vec{E} = \\frac{\\vec{F}}{q_0}$ (Unit: $\\text{N/C}$ or $\\text{V/m}$).
- **Electric Dipole Moment**: $\\vec{p} = q \\cdot 2\\vec{a}$ (Direction from $-q$ to $+q$).
- **Torque on Dipole**: $\\vec{\\tau} = \\vec{p} \\times \\vec{E} \\implies \\tau = p E \\sin\\theta$.

## 3. Gauss's Law
Total electric flux $\\Phi_E$ through any closed surface $S$ is $\\frac{1}{\\varepsilon_0}$ times the total charge enclosed:
$$\\Phi_E = \\oint_S \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{\\text{enclosed}}}{\\varepsilon_0}$$
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Electric Charges & Fields',
      type: 'root',
      color: '#0284c7',
      children: [
        {
          id: 'coulomb',
          label: 'Coulomb Law & Electric Field',
          type: 'category',
          children: [
            { id: 'coulomb-force', label: 'F = (1/4πε₀) (q1 q2 / r²)', type: 'concept' },
            { id: 'dipole', label: 'Dipole Moment p = q × 2a', type: 'concept' },
          ],
        },
        {
          id: 'gauss',
          label: 'Gauss Law & Flux',
          type: 'category',
          children: [
            { id: 'flux', label: 'Electric Flux Φ = ∮ E · dA', type: 'concept' },
            { id: 'gauss-law', label: 'Φ = Q_enclosed / ε₀', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C12-SUB-ELE-001',
      questionText: "According to Gauss's Law, what is the net electric flux passing through a closed surface enclosing a dipole of charges +q and -q?",
      difficulty: 'EASY',
      bloomLevel: 'UNDERSTAND',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: 'Zero', isCorrect: true, explanation: 'Net charge enclosed by a dipole is (+q - q) = 0, so Flux = 0 / ε₀ = 0.' },
        { text: 'q / ε₀', isCorrect: false, explanation: 'Incorrect.' },
        { text: '2q / ε₀', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'q / 2ε₀', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: "A dipole consists of equal and opposite charges (+q and -q). The total net enclosed charge is zero, so by Gauss's Law, the net electric flux is Zero.",
    },
  ],
};
