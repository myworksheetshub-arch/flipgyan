export const shapesAndAnglesData = {
  classNumber: 5,
  className: 'Class 5',
  subjectName: 'Mathematics',
  subjectCode: 'MATH5',
  chapterNumber: 1,
  chapterTitle: 'Shapes and Angles',
  summary: 'Understanding open and closed shapes, angles (right, acute, obtuse), protractor usage, and shapes in nature.',
  contentMarkdown: `# Chapter 1: Shapes and Angles

## 1. Open and Closed Shapes
- **Closed Shape**: A shape that starts and ends at the same point with no open ends (e.g. triangles, squares, hexagons).
- **Open Shape**: A shape where line segments do not enclose an area.

## 2. Types of Angles
- **Right Angle**: An angle of exactly $90^\\circ$ (like the corner of an L).
- **Acute Angle**: An angle less than $90^\\circ$ (less than a right angle).
- **Obtuse Angle**: An angle greater than $90^\\circ$ but less than $180^\\circ$ (more than a right angle).
- **Straight Angle**: An angle of exactly $180^\\circ$.

## 3. Angles in Clock Hands
- At 3:00 PM, the angle between the hour and minute hand is a **Right Angle** ($90^\\circ$).
- At 1:00 PM, the angle is an **Acute Angle** ($30^\\circ$).
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Shapes and Angles',
      type: 'root',
      color: '#ec4899',
      children: [
        {
          id: 'shapes',
          label: 'Shapes',
          type: 'category',
          children: [
            { id: 'closed', label: 'Closed Shapes (Enclosed boundary)', type: 'concept' },
            { id: 'open', label: 'Open Shapes', type: 'concept' },
          ],
        },
        {
          id: 'angles',
          label: 'Types of Angles',
          type: 'category',
          children: [
            { id: 'right', label: 'Right Angle (90°)', type: 'concept' },
            { id: 'acute', label: 'Acute Angle (< 90°)', type: 'concept' },
            { id: 'obtuse', label: 'Obtuse Angle (> 90°)', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C5-MATH-SHA-001',
      questionText: 'What type of angle is formed by the hands of a clock at 3:00 PM?',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: 'Right Angle (90°)', isCorrect: true, explanation: 'At 3:00, the hour hand points at 3 and minute hand at 12, forming a 90° angle.' },
        { text: 'Acute Angle', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'Obtuse Angle', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'Straight Angle', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: '3:00 PM forms an L-shape angle of 90 degrees, which is a Right Angle.',
    },
  ],
};
