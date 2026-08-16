export const ch12RacingSecondsData = {
  chapterNumber: 12,
  title: 'Racing Seconds',
  description: 'Time intervals, stopwatches, seconds and minutes, race timing, and rate problems.',
  topics: [
    { title: 'Stopwatch Math & Seconds', summary: 'Reading digital timers, converting seconds to minutes (60s = 1 min).' },
    { title: 'Comparing Race Times', summary: 'Finding time differences between athletes in sprints.' },
  ],
  questions: [
    {
      questionCode: 'C5-MATH-RAC-001',
      questionText: 'A student completes a 200m sprint in 135 seconds. Express this time in minutes and seconds:',
      questionType: 'MCQ',
      difficulty: 'MEDIUM',
      bloomLevel: 'APPLY',
      competency: 'PROCEDURAL',
      marks: 1,
      explanation: '135 / 60 = 2 minutes with remainder 15 seconds = 2 min 15 sec.',
      options: [
        { text: '2 minutes 15 seconds', isCorrect: true },
        { text: '2 minutes 35 seconds', isCorrect: false },
        { text: '1 minute 35 seconds', isCorrect: false },
        { text: '3 minutes 15 seconds', isCorrect: false },
      ],
    },
    {
      questionCode: 'C5-MATH-RAC-002',
      questionText: 'Runner A finished in 1 min 48 sec. Runner B finished in 102 seconds. Who ran faster and by how many seconds?',
      questionType: 'MCQ',
      difficulty: 'HARD',
      bloomLevel: 'EVALUATE',
      competency: 'CRITICAL',
      marks: 2,
      explanation: 'Runner A = 60 + 48 = 108 seconds. Runner B = 102 seconds. Runner B is faster by 108 - 102 = 6 seconds.',
      options: [
        { text: 'Runner B, by 6 seconds', isCorrect: true },
        { text: 'Runner A, by 6 seconds', isCorrect: false },
        { text: 'Runner B, by 12 seconds', isCorrect: false },
        { text: 'Both finished at the same time', isCorrect: false },
      ],
    },
  ],
};
