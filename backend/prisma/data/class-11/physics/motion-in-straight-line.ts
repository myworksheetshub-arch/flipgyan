export const motionClass11Data = {
  classNumber: 11,
  className: 'Class 11',
  subjectName: 'Physics',
  subjectCode: 'PHY11',
  chapterNumber: 2,
  chapterTitle: 'Motion in a Straight Line',
  summary: 'Distance vs displacement, speed vs velocity, acceleration, kinematic equations of uniformly accelerated motion, calculus approach, and motion under gravity.',
  contentMarkdown: `# Chapter 2: Motion in a Straight Line (Class 11 Physics)

## 1. Kinematic Variables
- **Displacement ($\\Delta x$)**: Vector quantity representing shortest distance between initial and final position.
- **Average Velocity**: $v_{\\text{avg}} = \\frac{\\Delta x}{\\Delta t}$
- **Instantaneous Velocity**: $v = \\lim_{\\Delta t \\to 0} \\frac{\\Delta x}{\\Delta t} = \\frac{dx}{dt}$
- **Instantaneous Acceleration**: $a = \\frac{dv}{dt} = \\frac{d^2x}{dt^2}$

## 2. Equations of Uniformly Accelerated Motion
For constant acceleration $a$:
1. $v = u + at$
2. $s = ut + \\frac{1}{2}at^2$
3. $v^2 = u^2 + 2as$
4. Distance covered in $n^{\\text{th}}$ second: $s_n = u + \\frac{a}{2}(2n - 1)$

## 3. Motion Under Gravity
Free fall under gravity ($a = -g \\approx -9.8 \\text{ m/s}^2$):
- Time to reach maximum height: $t = \\frac{u}{g}$
- Maximum height achieved: $H_{\\text{max}} = \\frac{u^2}{2g}$
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Motion in a Straight Line',
      type: 'root',
      color: '#0284c7',
      children: [
        {
          id: 'kinematics',
          label: '3 Kinematic Equations',
          type: 'category',
          children: [
            { id: 'eq1', label: 'v = u + at', type: 'concept' },
            { id: 'eq2', label: 's = ut + 1/2 at²', type: 'concept' },
            { id: 'eq3', label: 'v² = u² + 2as', type: 'concept' },
          ],
        },
        {
          id: 'gravity',
          label: 'Free Fall & Gravity',
          type: 'category',
          children: [
            { id: 'hmax', label: 'Hmax = u² / 2g', type: 'concept' },
            { id: 'nth-sec', label: 'Sn = u + (a/2)(2n - 1)', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C11-SUB-MOT-001',
      questionText: 'A ball is thrown vertically upwards with initial velocity 20 m/s. What is the maximum height achieved? (Take g = 10 m/s²)',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      options: [
        { text: '20 metres', isCorrect: true, explanation: 'Hmax = u² / 2g = 20² / (2 × 10) = 400 / 20 = 20 m.' },
        { text: '10 metres', isCorrect: false, explanation: 'Incorrect.' },
        { text: '40 metres', isCorrect: false, explanation: 'Incorrect.' },
        { text: '5 metres', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'Using formula Hmax = u² / 2g: Hmax = (20)^2 / (2 × 10) = 400 / 20 = 20 m.',
    },
  ],
};
