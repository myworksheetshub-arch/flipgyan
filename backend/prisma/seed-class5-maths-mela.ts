import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const mathsMelaChapters = [
  {
    chapterNumber: 1,
    title: 'We the Travellers-I',
    description: 'Exploring large numbers, distance calculations, travel timelines, place value, and estimation through journeys across India.',
    topics: [
      { title: 'Numbers up to 10 Lakhs & Place Value', summary: 'Understanding 6-digit and 7-digit numbers, place value charts, and expanded notation.' },
      { title: 'Travel Estimation & Distance Calculations', summary: 'Estimating travel distances, speed-time-distance calculations, and journey budgets.' },
    ],
    questions: [
      {
        questionText: 'A train travels 450 km in 5 hours. What is the average speed of the train in km/h?',
        questionType: 'MCQ',
        difficulty: 'MEDIUM',
        bloomLevel: 'APPLY',
        competency: 'PROBLEM_SOLVING',
        marks: 1,
        explanation: 'Speed = Distance / Time = 450 km / 5 h = 90 km/h.',
        options: [
          { text: '90 km/h', isCorrect: true },
          { text: '85 km/h', isCorrect: false },
          { text: '100 km/h', isCorrect: false },
          { text: '75 km/h', isCorrect: false },
        ],
      },
      {
        questionText: 'What is the place value of 7 in the number 5,74,230?',
        questionType: 'MCQ',
        difficulty: 'EASY',
        bloomLevel: 'REMEMBER',
        competency: 'CONCEPTUAL',
        marks: 1,
        explanation: '7 is in the ten-thousands place, so its place value is 70,000.',
        options: [
          { text: '70,000', isCorrect: true },
          { text: '7,000', isCorrect: false },
          { text: '700', isCorrect: false },
          { text: '7', isCorrect: false },
        ],
      },
      {
        questionText: 'If a traveller spends ₹3,450 on bus tickets and ₹2,800 on food, total expenditure is ₹6,250.',
        questionType: 'TRUE_FALSE',
        difficulty: 'EASY',
        bloomLevel: 'UNDERSTAND',
        competency: 'PROCEDURAL',
        marks: 1,
        explanation: '₹3,450 + ₹2,800 = ₹6,250.',
        options: [
          { text: 'True', isCorrect: true },
          { text: 'False', isCorrect: false },
        ],
      },
    ],
  },
  {
    chapterNumber: 2,
    title: 'Fractions',
    description: 'Understanding proper, improper, equivalent fractions, fraction comparison, and real-life sharing problems.',
    topics: [
      { title: 'Parts of a Whole & Equivalent Fractions', summary: 'Visualizing numerator/denominator and creating equivalent fractions.' },
      { title: 'Addition & Subtraction of Fractions', summary: 'Adding and subtracting like and unlike fractions in real-world scenarios.' },
    ],
    questions: [
      {
        questionText: 'Which of the following is equivalent to 3/4?',
        questionType: 'MCQ',
        difficulty: 'EASY',
        bloomLevel: 'UNDERSTAND',
        competency: 'CONCEPTUAL',
        marks: 1,
        explanation: 'Multiply numerator and denominator by 2: (3×2)/(4×2) = 6/8.',
        options: [
          { text: '6/8', isCorrect: true },
          { text: '5/8', isCorrect: false },
          { text: '9/16', isCorrect: false },
          { text: '4/3', isCorrect: false },
        ],
      },
      {
        questionText: 'Ananya ate 2/5 of a pizza and Rahul ate 1/5. What fraction of the pizza did they eat together?',
        questionType: 'MCQ',
        difficulty: 'MEDIUM',
        bloomLevel: 'APPLY',
        competency: 'PROBLEM_SOLVING',
        marks: 1,
        explanation: '2/5 + 1/5 = 3/5 of the pizza.',
        options: [
          { text: '3/5', isCorrect: true },
          { text: '2/5', isCorrect: false },
          { text: '4/5', isCorrect: false },
          { text: '1/5', isCorrect: false },
        ],
      },
    ],
  },
  {
    chapterNumber: 3,
    title: 'Angles as Turns',
    description: 'Exploring right angles, acute angles, obtuse angles, full turns, half turns, and clock angle movements.',
    topics: [
      { title: 'Types of Angles & Clock Turns', summary: 'Identifying right, acute, obtuse angles and clock hand turns.' },
      { title: 'Measuring Angles in Degree Steps', summary: 'Understanding 90°, 180°, 270°, and 360° rotational movements.' },
    ],
    questions: [
      {
        questionText: 'What angle is formed between the clock hands at 3 o\'clock?',
        questionType: 'MCQ',
        difficulty: 'EASY',
        bloomLevel: 'REMEMBER',
        competency: 'CONCEPTUAL',
        marks: 1,
        explanation: 'At 3 o\'clock, the minute hand points to 12 and the hour hand to 3, forming a 90° Right Angle.',
        options: [
          { text: '90° (Right Angle)', isCorrect: true },
          { text: '60° (Acute Angle)', isCorrect: false },
          { text: '120° (Obtuse Angle)', isCorrect: false },
          { text: '180° (Straight Angle)', isCorrect: false },
        ],
      },
      {
        questionText: 'A half-turn clockwise corresponds to an angle rotation of 180°.',
        questionType: 'TRUE_FALSE',
        difficulty: 'EASY',
        bloomLevel: 'UNDERSTAND',
        competency: 'CONCEPTUAL',
        marks: 1,
        explanation: 'A full turn is 360°, so half a turn is 180°.',
        options: [
          { text: 'True', isCorrect: true },
          { text: 'False', isCorrect: false },
        ],
      },
    ],
  },
  {
    chapterNumber: 4,
    title: 'We the Travellers-II',
    description: 'Advanced journey math: multi-stop itineraries, timetable scheduling, ticket pricing, and journey expense management.',
    topics: [
      { title: 'Train Timetables & Time Intervals', summary: 'Calculating elapsed time and arrival/departure schedule differences.' },
      { title: 'Travel Budgeting & Cost Analysis', summary: 'Combining ticket fares, hotel costs, and food expenses for group trips.' },
    ],
    questions: [
      {
        questionText: 'A bus departs at 07:15 AM and arrives at 01:45 PM. What is the total travel time?',
        questionType: 'MCQ',
        difficulty: 'MEDIUM',
        bloomLevel: 'APPLY',
        competency: 'PROBLEM_SOLVING',
        marks: 1,
        explanation: 'From 07:15 AM to 12:15 PM is 5 hours. From 12:15 PM to 01:45 PM is 1 hour 30 mins. Total = 6 hours 30 mins.',
        options: [
          { text: '6 hours 30 minutes', isCorrect: true },
          { text: '5 hours 30 minutes', isCorrect: false },
          { text: '7 hours 15 minutes', isCorrect: false },
          { text: '6 hours 15 minutes', isCorrect: false },
        ],
      },
    ],
  },
  {
    chapterNumber: 5,
    title: 'Far and Near',
    description: 'Understanding scale drawings, distance comparison, map scale ratios, and spatial relationships.',
    topics: [
      { title: 'Scale Drawings & Distance Key', summary: 'Using 1 cm = 10 km scale keys to calculate actual map distances.' },
      { title: 'Relative Positions & Perspective View', summary: 'Comparing distances from different landmarks and aerial perspectives.' },
    ],
    questions: [
      {
        questionText: 'On a map, 1 cm represents 25 km. If two towns are 4 cm apart on the map, what is the actual distance?',
        questionType: 'MCQ',
        difficulty: 'MEDIUM',
        bloomLevel: 'APPLY',
        competency: 'PROBLEM_SOLVING',
        marks: 1,
        explanation: 'Actual distance = 4 cm × 25 km/cm = 100 km.',
        options: [
          { text: '100 km', isCorrect: true },
          { text: '75 km', isCorrect: false },
          { text: '125 km', isCorrect: false },
          { text: '50 km', isCorrect: false },
        ],
      },
    ],
  },
  {
    chapterNumber: 6,
    title: 'The Dairy Farm',
    description: 'Volume measurement, litres and millilitres, milk yield calculations, profit-loss, and daily production math.',
    topics: [
      { title: 'Capacity in Litres & Millilitres', summary: 'Converting between L and mL (1 L = 1000 mL) and measuring liquid volume.' },
      { title: 'Milk Yield & Sales Profit', summary: 'Calculating total daily milk output and revenue for a dairy farm.' },
    ],
    questions: [
      {
        questionText: 'A cow gives 12 L 500 mL of milk in the morning and 10 L 750 mL in the evening. Total milk produced in a day is:',
        questionType: 'MCQ',
        difficulty: 'MEDIUM',
        bloomLevel: 'APPLY',
        competency: 'PROBLEM_SOLVING',
        marks: 1,
        explanation: '12 L 500 mL + 10 L 750 mL = 22 L + 1250 mL = 23 L 250 mL.',
        options: [
          { text: '23 L 250 mL', isCorrect: true },
          { text: '22 L 250 mL', isCorrect: false },
          { text: '23 L 500 mL', isCorrect: false },
          { text: '24 L 100 mL', isCorrect: false },
        ],
      },
    ],
  },
  {
    chapterNumber: 7,
    title: 'Shapes and Patterns',
    description: 'Geometric tessellations, number patterns, 2D/3D shapes, rotational patterns, and sequence continuation.',
    topics: [
      { title: 'Tessellations & Floor Patterns', summary: 'Tiling shapes without gaps and identifying repeating geometric units.' },
      { title: 'Number Rules & Sequences', summary: 'Identifying arithmetic and geometric growing patterns.' },
    ],
    questions: [
      {
        questionText: 'What is the next number in the pattern: 4, 9, 16, 25, 36, ...?',
        questionType: 'MCQ',
        difficulty: 'MEDIUM',
        bloomLevel: 'ANALYZE',
        competency: 'CRITICAL',
        marks: 1,
        explanation: 'These are square numbers: 2², 3², 4², 5², 6². The next is 7² = 49.',
        options: [
          { text: '49', isCorrect: true },
          { text: '42', isCorrect: false },
          { text: '45', isCorrect: false },
          { text: '50', isCorrect: false },
        ],
      },
    ],
  },
  {
    chapterNumber: 8,
    title: 'Weight and Capacity',
    description: 'Comparing kilograms, grams, litres, millilitres, balance scale problems, and packaging measurements.',
    topics: [
      { title: 'Weight Units: Kg & Grams', summary: '1 kg = 1000 g, converting units, and measuring heavy/light objects.' },
      { title: 'Capacity Units: Litres & mL', summary: 'Estimating container volumes and solving multi-step capacity problems.' },
    ],
    questions: [
      {
        questionText: 'How many 250 gram sugar packets are needed to make 2.5 kg?',
        questionType: 'MCQ',
        difficulty: 'MEDIUM',
        bloomLevel: 'APPLY',
        competency: 'PROBLEM_SOLVING',
        marks: 1,
        explanation: '2.5 kg = 2500 g. Number of packets = 2500 g / 250 g = 10 packets.',
        options: [
          { text: '10 packets', isCorrect: true },
          { text: '8 packets', isCorrect: false },
          { text: '12 packets', isCorrect: false },
          { text: '5 packets', isCorrect: false },
        ],
      },
    ],
  },
  {
    chapterNumber: 9,
    title: 'Coconut Farm',
    description: 'Perimeter, area, grid calculations, rectangular plots, fencing costs, and harvest counting.',
    topics: [
      { title: 'Perimeter of Farm Fields', summary: 'Calculating boundary lengths for squares and rectangles.' },
      { title: 'Area using Square Grids', summary: 'Determining farm plot areas in square metres and unit grid squares.' },
    ],
    questions: [
      {
        questionText: 'A rectangular coconut grove is 50 m long and 30 m wide. What is the length of fence needed to enclose it?',
        questionType: 'MCQ',
        difficulty: 'MEDIUM',
        bloomLevel: 'APPLY',
        competency: 'PROBLEM_SOLVING',
        marks: 1,
        explanation: 'Perimeter = 2 × (Length + Width) = 2 × (50 + 30) = 2 × 80 = 160 m.',
        options: [
          { text: '160 m', isCorrect: true },
          { text: '1500 m²', isCorrect: false },
          { text: '80 m', isCorrect: false },
          { text: '200 m', isCorrect: false },
        ],
      },
    ],
  },
  {
    chapterNumber: 10,
    title: 'Symmetrical Designs',
    description: 'Line of symmetry, mirror reflections, rotational symmetry, Rangoli patterns, and folded paper art.',
    topics: [
      { title: 'Line Symmetry & Mirror Lines', summary: 'Finding vertical, horizontal, and diagonal lines of symmetry.' },
      { title: 'Rotational Symmetry in Art', summary: 'Recognizing 1/2 turn, 1/4 turn, and 1/3 turn symmetry in designs.' },
    ],
    questions: [
      {
        questionText: 'How many lines of symmetry does a regular square tile have?',
        questionType: 'MCQ',
        difficulty: 'EASY',
        bloomLevel: 'REMEMBER',
        competency: 'CONCEPTUAL',
        marks: 1,
        explanation: 'A square has 4 lines of symmetry (vertical, horizontal, and 2 diagonals).',
        options: [
          { text: '4', isCorrect: true },
          { text: '2', isCorrect: false },
          { text: '1', isCorrect: false },
          { text: 'Infinite', isCorrect: false },
        ],
      },
    ],
  },
  {
    chapterNumber: 11,
    title: 'Grandmother\'s Quilt',
    description: 'Area of irregular shapes, patch quilts, unit square counting, and perimeter-area relationships.',
    topics: [
      { title: 'Patchwork Area & Unit Squares', summary: 'Combining square patches to calculate total quilt surface area.' },
      { title: 'Comparing Perimeter & Area', summary: 'Understanding how shapes with same area can have different perimeters.' },
    ],
    questions: [
      {
        questionText: 'A quilt made of 12 square patches of side 10 cm each has a total area of:',
        questionType: 'MCQ',
        difficulty: 'MEDIUM',
        bloomLevel: 'APPLY',
        competency: 'PROBLEM_SOLVING',
        marks: 1,
        explanation: 'Area of 1 patch = 10 × 10 = 100 cm². Total area = 12 × 100 = 1200 cm².',
        options: [
          { text: '1200 cm²', isCorrect: true },
          { text: '120 cm²', isCorrect: false },
          { text: '400 cm²', isCorrect: false },
          { text: '1440 cm²', isCorrect: false },
        ],
      },
    ],
  },
  {
    chapterNumber: 12,
    title: 'Racing Seconds',
    description: 'Time intervals, stopwatches, seconds and minutes, race timing, and rate problems.',
    topics: [
      { title: 'Stopwatch Math & Seconds', summary: 'Reading digital timers, converting seconds to minutes (60s = 1 min).' },
      { title: 'Comparing Race Times', summary: 'Finding time differences between athletes in sprints.' },
    ],
    questions: [
      {
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
    ],
  },
  {
    chapterNumber: 13,
    title: 'Animal Jumps',
    description: 'Number line jumps, skip counting, common multiples, factors, and frog/rabbit jump problems.',
    topics: [
      { title: 'Skip Counting & Jump Multiples', summary: 'Finding landing spots for animals jumping in steps of 3, 5, 7.' },
      { title: 'Common Multiples & Lowest Common Landing Spot', summary: 'Identifying common multiples (LCM concept) on number lines.' },
    ],
    questions: [
      {
        questionText: 'A frog jumps 3 steps at a time and a grasshopper jumps 4 steps at a time. What is the first number both will land on?',
        questionType: 'MCQ',
        difficulty: 'MEDIUM',
        bloomLevel: 'APPLY',
        competency: 'PROBLEM_SOLVING',
        marks: 1,
        explanation: 'LCM of 3 and 4 is 12.',
        options: [
          { text: '12', isCorrect: true },
          { text: '7', isCorrect: false },
          { text: '24', isCorrect: false },
          { text: '9', isCorrect: false },
        ],
      },
    ],
  },
  {
    chapterNumber: 14,
    title: 'Maps and Locations',
    description: 'Grid coordinates, directions (North, South, East, West), reading town maps, and shortest path problems.',
    topics: [
      { title: 'Grid Coordinates (Rows & Columns)', summary: 'Locating points on alpha-numeric grid boards.' },
      { title: 'Cardinal Directions & Route Navigation', summary: 'Navigating paths using N, S, E, W turn instructions.' },
    ],
    questions: [
      {
        questionText: 'If you face East and turn 90° clockwise, which direction will you face?',
        questionType: 'MCQ',
        difficulty: 'EASY',
        bloomLevel: 'UNDERSTAND',
        competency: 'CONCEPTUAL',
        marks: 1,
        explanation: 'Turning 90° clockwise from East leads to South.',
        options: [
          { text: 'South', isCorrect: true },
          { text: 'North', isCorrect: false },
          { text: 'West', isCorrect: false },
          { text: 'South-East', isCorrect: false },
        ],
      },
    ],
  },
  {
    chapterNumber: 15,
    title: 'Data Through Pictures',
    description: 'Pictographs, tally marks, bar charts, data interpretation, and real-life survey analysis.',
    topics: [
      { title: 'Tally Marks & Frequency Tables', summary: 'Recording data using groups of 5 tally marks.' },
      { title: 'Pictographs with Symbol Keys', summary: 'Interpreting picture graphs where 1 symbol = 5 or 10 items.' },
    ],
    questions: [
      {
        questionText: 'In a pictograph, 1 tree symbol represents 10 trees. How many symbols are needed to represent 45 trees?',
        questionType: 'MCQ',
        difficulty: 'MEDIUM',
        bloomLevel: 'APPLY',
        competency: 'PROBLEM_SOLVING',
        marks: 1,
        explanation: '45 / 10 = 4 full tree symbols and 1 half-tree symbol (4.5 symbols).',
        options: [
          { text: '4 full and 1 half symbol (4.5)', isCorrect: true },
          { text: '5 full symbols', isCorrect: false },
          { text: '4 full symbols', isCorrect: false },
          { text: '45 symbols', isCorrect: false },
        ],
      },
    ],
  },
];

async function seedClass5MathsMela() {
  console.log('🌱 Starting CBSE Class 5 Mathematics ("Maths Mela") Seed...');

  // 1. Ensure Class 5 Grade exists
  let class5 = await prisma.classGrade.findUnique({
    where: { number: 5 },
  });

  if (!class5) {
    class5 = await prisma.classGrade.create({
      data: {
        name: 'Class 5',
        number: 5,
        order: 5,
        description: 'CBSE Class 5 Curriculum & NCF Primary Stage',
      },
    });
  }

  // 2. Ensure Mathematics Subject for Class 5 exists
  let mathSubject = await prisma.subject.findFirst({
    where: { classGradeId: class5.id, name: 'Mathematics' },
  });

  if (!mathSubject) {
    mathSubject = await prisma.subject.create({
      data: {
        name: 'Mathematics',
        code: 'MATH-5',
        icon: 'Calculator',
        color: '#3B82F6',
        classGradeId: class5.id,
      },
    });
  }

  console.log(`✅ Class 5 Math Subject ID: ${mathSubject.id}`);

  // 3. Upsert all 15 "Maths Mela" Chapters
  for (const chData of mathsMelaChapters) {
    let chapter = await prisma.chapter.findFirst({
      where: { subjectId: mathSubject.id, chapterNumber: chData.chapterNumber },
    });

    if (!chapter) {
      chapter = await prisma.chapter.create({
        data: {
          chapterNumber: chData.chapterNumber,
          title: chData.title,
          description: chData.description,
          subjectId: mathSubject.id,
        },
      });
    } else {
      chapter = await prisma.chapter.update({
        where: { id: chapter.id },
        data: {
          title: chData.title,
          description: chData.description,
        },
      });
    }

    console.log(`📌 Chapter ${chData.chapterNumber}: ${chData.title}`);

    // Create Topics for this chapter
    for (let tIdx = 0; tIdx < chData.topics.length; tIdx++) {
      const top = chData.topics[tIdx];
      let topic = await prisma.topic.findFirst({
        where: { chapterId: chapter.id, title: top.title },
      });
      if (!topic) {
        await prisma.topic.create({
          data: {
            title: top.title,
            summary: top.summary,
            order: tIdx + 1,
            chapterId: chapter.id,
          },
        });
      }
    }

    // Create Questions for this chapter
    for (const q of chData.questions) {
      const existingQ = await prisma.question.findFirst({
        where: { chapterId: chapter.id, questionText: q.questionText },
      });

      if (!existingQ) {
        await prisma.question.create({
          data: {
            questionText: q.questionText,
            questionType: q.questionType,
            difficulty: q.difficulty,
            bloomLevel: q.bloomLevel,
            competency: q.competency,
            marks: q.marks,
            explanation: q.explanation,
            chapterId: chapter.id,
            options: {
              create: q.options.map((opt, oIdx) => ({
                text: opt.text,
                isCorrect: opt.isCorrect,
                optionLabel: String.fromCharCode(65 + oIdx),
                sequence: oIdx + 1,
              })),
            },
          },
        });
      }
    }

    // Create Master Study Note for this chapter
    const existingNote = await prisma.studyNote.findFirst({
      where: { chapterId: chapter.id },
    });
    if (!existingNote) {
      await prisma.studyNote.create({
        data: {
          title: `Class 5 Math Chapter ${chData.chapterNumber}: ${chData.title} Notes`,
          summary: chData.description,
          keyConcepts: JSON.stringify(chData.topics.map((t) => t.title)),
          definitions: JSON.stringify([
            { term: 'Maths Mela Concept', meaning: chData.description },
          ]),
          examples: JSON.stringify([
            {
              title: 'Solved Example 1',
              problem: chData.questions[0]?.questionText || 'Practice problem',
              solution: chData.questions[0]?.explanation || 'Step by step solution',
            },
          ]),
          importantPoints: JSON.stringify([
            'Understand basic place value and estimation.',
            'Apply mathematical concepts to everyday real-life situations.',
          ]),
          chapterId: chapter.id,
        },
      });
    }

    // Create 2 Master Worksheets for this chapter
    const existingWs = await prisma.worksheet.findFirst({
      where: { chapterId: chapter.id },
    });
    if (!existingWs) {
      await prisma.worksheet.create({
        data: {
          title: `Class 5 Math Ch ${chData.chapterNumber} ${chData.title} Practice Worksheet`,
          description: `CBSE Maths Mela competency worksheet for ${chData.title}.`,
          type: 'PRACTICE',
          difficulty: 'MEDIUM',
          durationMinutes: 30,
          totalMarks: 15,
          totalQuestions: 5,
          chapterId: chapter.id,
          subjectId: mathSubject.id,
          instructions: 'Read each question carefully and select the best answer.',
          answerKey: `Official Answer Key & Marking Scheme for ${chData.title}.`,
          isPublished: true,
        },
      });
    }

    // Create 2 Master Quizzes for this chapter
    const existingQuiz = await prisma.quiz.findFirst({
      where: { chapterId: chapter.id },
    });
    if (!existingQuiz) {
      await prisma.quiz.create({
        data: {
          title: `Class 5 Math Ch ${chData.chapterNumber}: ${chData.title} Competency Quiz`,
          description: `Interactive test for ${chData.title} with instant XP rewards.`,
          durationMinutes: 15,
          totalMarks: 10,
          passMarks: 5,
          difficulty: 'MEDIUM',
          chapterId: chapter.id,
          subjectId: mathSubject.id,
          isPublished: true,
        },
      });
    }
  }

  console.log('🎉 CBSE Class 5 Mathematics ("Maths Mela") 15 Chapters Seeded Successfully!');
}

seedClass5MathsMela()
  .catch((e) => {
    console.error('Error seeding Class 5 Maths Mela:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
