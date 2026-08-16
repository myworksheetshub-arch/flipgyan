export const earthSolarSystemData = {
  classNumber: 6,
  className: 'Class 6',
  subjectName: 'Social Science',
  subjectCode: 'SST6',
  chapterNumber: 1,
  chapterTitle: 'The Earth in the Solar System',
  summary: 'Celestial bodies, stars, constellations (Ursa Major/Saptarishi), Pole Star, 8 planets, Earth as a blue planet, Moon, asteroids & meteoroids.',
  contentMarkdown: `# Chapter 1: The Earth in the Solar System (Class 6 Geography)

## 1. Celestial Bodies & Stars
- **Celestial Bodies**: Sun, Moon, and all objects shining in the night sky.
- **Stars**: Celestial bodies made of hot gases that emit their own heat and light (e.g. Sun is a star).
- **Constellations**: Patterns formed by groups of stars (e.g. *Ursa Major* or Big Bear, *Saptarishi*).
- **Pole Star (North Star)**: Indicates the North direction; remains in the same position in the sky.

## 2. The Solar System
Consists of Sun, 8 Planets, Satellites, Asteroids, and Meteoroids.
- **8 Planets in order of distance from Sun**: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.
  - *Venus* is called **Earth's Twin** because of similar size and shape.
  - *Earth* is the 3rd nearest planet to Sun and 5th largest planet. Called **Blue Planet** because 2/3 of its surface is covered by water.

## 3. Moon & Asteroids
- **Moon**: Only natural satellite of Earth. Takes 27 days to complete one orbit and one spin.
- **Asteroids**: Tiny bodies moving around the Sun found between orbits of **Mars and Jupiter**.
- **Meteoroids**: Small pieces of rocks moving around the Sun.
`,
  mindMapNodes: [
    {
      id: 'root',
      label: 'The Earth in Solar System',
      type: 'root',
      color: '#ef4444',
      children: [
        {
          id: 'planets',
          label: '8 Planets',
          type: 'category',
          children: [
            { id: 'earth', label: 'Earth (Blue Planet, 3rd from Sun)', type: 'concept' },
            { id: 'venus', label: "Venus (Earth's Twin)", type: 'concept' },
          ],
        },
        {
          id: 'asteroids',
          label: 'Asteroid Belt',
          type: 'category',
          children: [
            { id: 'belt', label: 'Between Orbits of Mars & Jupiter', type: 'concept' },
          ],
        },
      ],
    },
  ],
  questions: [
    {
      questionCode: 'C6-SCI-EAR-001',
      questionText: 'Between the orbits of which two planets is the Asteroid Belt located?',
      difficulty: 'EASY',
      bloomLevel: 'REMEMBER',
      competency: 'CONCEPTUAL',
      marks: 1,
      options: [
        { text: 'Mars and Jupiter', isCorrect: true, explanation: 'The Asteroid Belt is located between Mars and Jupiter.' },
        { text: 'Earth and Mars', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'Jupiter and Saturn', isCorrect: false, explanation: 'Incorrect.' },
        { text: 'Mercury and Venus', isCorrect: false, explanation: 'Incorrect.' },
      ],
      explanation: 'Asteroids are small rocky bodies orbiting the Sun primarily between Mars and Jupiter.',
    },
  ],
};
