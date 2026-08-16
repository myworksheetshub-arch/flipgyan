export const ch13IntroductionToGraphsClass8Data = {
  classNumber: 8,
  className: 'Class 8',
  subjectName: 'Mathematics',
  subjectCode: 'MATH8',
  chapterNumber: 13,
  chapterTitle: 'Introduction to Graphs',
  summary: 'Cartesian coordinate plane, plotting points (x, y), origin (0, 0), line graph, linear graph, time-temperature & distance-time graphs.',
  contentMarkdown: `# Chapter 13: Introduction to Graphs (Class 8 Mathematics NEP 2025)

## 1. Cartesian Coordinates
- **X-axis**: Horizontal axis.
- **Y-axis**: Vertical axis.
- **Origin**: Point of intersection $(0, 0)$.
- A point is represented as $(x, y)$, where $x$ is the x-coordinate (abscissa) and $y$ is the y-coordinate (ordinate).

## 2. Linear Graphs
A graph that consists of an unbroken single straight line.
- Distance-Time graph for uniform speed is a **straight line passing through origin**.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Introduction to Graphs',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'coordinates',
          label: 'Point (x, y)',
          type: 'category',
          children: [
            { id: 'origin', label: 'Origin = (0, 0)', type: 'concept' },
            { id: 'linear-graph', label: 'Uniform motion graph = Straight Line', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C8-MATH-CH13-001',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'What are the coordinates of the Origin where the X-axis and Y-axis intersect?',
      explanation: 'The origin is the starting reference point (0, 0).',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '(0, 0)', isCorrect: true },
        { optionLabel: 'B', optionText: '(1, 1)', isCorrect: false },
        { optionLabel: 'C', optionText: '(0, 1)', isCorrect: false },
        { optionLabel: 'D', optionText: '(1, 0)', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH13-002',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'A point whose y-coordinate is 0 and x-coordinate is 5 lies on which axis?',
      explanation: 'Any point of the form (x, 0) lies on the X-axis.',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'X-axis', isCorrect: true },
        { optionLabel: 'B', optionText: 'Y-axis', isCorrect: false },
        { optionLabel: 'C', optionText: 'Origin', isCorrect: false },
        { optionLabel: 'D', optionText: 'Quadrant III', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH13-003',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'A car covers 40 km in 1 hour, 80 km in 2 hours, and 120 km in 3 hours. What will be the shape of its Distance-Time graph?',
      explanation: 'Since distance is directly proportional to time (uniform speed = 40 km/h), the graph will be a straight line.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'A straight line passing through origin', isCorrect: true },
        { optionLabel: 'B', optionText: 'A curved parabola', isCorrect: false },
        { optionLabel: 'C', optionText: 'A horizontal line parallel to X-axis', isCorrect: false },
        { optionLabel: 'D', optionText: 'A vertical line parallel to Y-axis', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH13-004',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROBLEM_SOLVING',
      questionText: 'From a linear graph relation y = 3x + 2, find the value of y when x = 4.',
      explanation: 'y = 3(4) + 2 = 12 + 2 = 14.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'y = 14', isCorrect: true },
        { optionLabel: 'B', optionText: 'y = 12', isCorrect: false },
        { optionLabel: 'C', optionText: 'y = 10', isCorrect: false },
        { optionLabel: 'D', optionText: 'y = 16', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH13-005',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'LOGICAL_REASONING',
      questionText: '🏆 [CBSE Olympiad] Points A(2, 3), B(2, 7), C(6, 7), D(6, 3) are joined in order on a coordinate plane. What shape is formed and what is its area?',
      explanation: 'Length = 6 - 2 = 4 units, Breadth = 7 - 3 = 4 units. Side is equal, so it is a Square of side 4 units. Area = 4 × 4 = 16 sq units.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'Square of area 16 sq units', isCorrect: true },
        { optionLabel: 'B', optionText: 'Rectangle of area 12 sq units', isCorrect: false },
        { optionLabel: 'C', optionText: 'Square of area 25 sq units', isCorrect: false },
        { optionLabel: 'D', optionText: 'Rhombus of area 16 sq units', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH13-006',
      type: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'ANALYZE',
      competency: 'CRITICAL_THINKING',
      questionText: '🏆 [HOTS] In a Deposit-Interest linear graph, Principal ₹100 gives ₹10 interest, ₹200 gives ₹20, ₹300 gives ₹30. How much interest will a deposit of ₹750 earn?',
      explanation: 'Rate = 10 / 100 = 10%. Interest for ₹750 = 10% of 750 = ₹75.',
      marks: 3,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '₹75', isCorrect: true },
        { optionLabel: 'B', optionText: '₹70', isCorrect: false },
        { optionLabel: 'C', optionText: '₹80', isCorrect: false },
        { optionLabel: 'D', optionText: '₹85', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH13-007',
      type: 'MCQ',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      questionText: 'In the coordinate point (4, 9), what is the Abscissa?',
      explanation: 'In (x, y), x is called Abscissa (4) and y is called Ordinate (9).',
      marks: 1,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: '4', isCorrect: true },
        { optionLabel: 'B', optionText: '9', isCorrect: false },
        { optionLabel: 'C', optionText: '13', isCorrect: false },
        { optionLabel: 'D', optionText: '5', isCorrect: false },
      ],
    },
    {
      questionCode: 'C8-MATH-CH13-008',
      type: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      questionText: 'What is the equation of the line representing the X-axis itself?',
      explanation: 'Every point on the X-axis has y = 0. Therefore, the equation of the X-axis is y = 0.',
      marks: 2,
      negativeMarks: 0,
      options: [
        { optionLabel: 'A', optionText: 'y = 0', isCorrect: true },
        { optionLabel: 'B', optionText: 'x = 0', isCorrect: false },
        { optionLabel: 'C', optionText: 'x = y', isCorrect: false },
        { optionLabel: 'D', optionText: 'x + y = 0', isCorrect: false },
      ],
    },
  ],
};
