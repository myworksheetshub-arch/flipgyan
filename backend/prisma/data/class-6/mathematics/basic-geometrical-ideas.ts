export const basicGeometricalIdeasData = {
  classNumber: 6,
  className: 'Class 6',
  subjectName: 'Mathematics',
  subjectCode: 'MATH6',
  chapterNumber: 4,
  chapterTitle: 'Basic Geometrical Ideas',
  summary: 'Points, line segments, lines, rays, intersecting & parallel lines, curves (open & closed), polygons, angles, triangles, quadrilaterals, and circles.',
  contentMarkdown: `# Chapter 4: Basic Geometrical Ideas (Class 6 Mathematics)

## 1. Lines and Rays
- **Point**: Determines a location, represented by a dot.
- **Line Segment**: Shortest distance between two points ($AB$).
- **Line**: Line segment extended indefinitely in both directions ($\\overleftrightarrow{AB}$).
- **Ray**: Portion of a line starting at one point and going endlessly in one direction ($\\overrightarrow{AB}$, e.g. Sun ray).

## 2. Intersecting vs Parallel Lines
- **Intersecting Lines**: Two lines having one common point (e.g. Letter X, crossing roads).
- **Parallel Lines**: Lines in a plane that do not meet anywhere, no matter how far extended (e.g. Railway tracks, opposite edges of a ruler).

## 3. Circles & Terms
- **Center**: Fixed point inside the circle.
- **Radius**: Line segment joining center to any point on circle.
- **Diameter**: Chord passing through center ($D = 2 \\times r$).
- **Circumference**: Distance around the circle (Perimeter).
- **Sector**: Region bounded by two radii and an arc.
- **Segment**: Region bounded by a chord and an arc.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'Basic Geometrical Ideas',
      type: 'root',
      color: '#3b82f6',
      children: [
        {
          id: 'lines',
          label: 'Lines & Rays',
          type: 'category',
          children: [
            { id: 'ray', label: 'Ray: Fixed start point, infinite end', type: 'concept' },
            { id: 'parallel', label: 'Parallel Lines: Never intersect', type: 'concept' },
          ],
        },
        {
          id: 'circle',
          label: 'Circle Parts',
          type: 'category',
          children: [
            { id: 'diameter', label: 'Diameter = 2 × Radius', type: 'concept' },
            { id: 'sector', label: 'Sector = Region between 2 Radii & Arc', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C6-MATH-BAS-001',
      questionText: 'What is the relationship between the Diameter (D) and Radius (r) of a circle?',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: 'Diameter = 2 × Radius (D = 2r)', isCorrect: true, explanation: 'The diameter is twice the radius.' },
        { text: 'Diameter = Radius / 2', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'Diameter = Radius × Radius', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'Diameter = Radius + 2', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'A diameter passes through the center connecting two opposite points on a circle, so its length is 2r.',
    },
  ],
};
