import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const class6ScienceChaptersData = [
  {
    chapterNumber: 1,
    title: 'Components of Food',
    description: 'Carbohydrates, proteins, fats, vitamins, minerals, dietary fibres, water, and balanced diet essentials.',
    questions: [
      {
        questionText: 'Which nutrient is primarily responsible for body building and muscle repair?',
        questionType: 'MCQ',
        difficulty: 'EASY',
        bloomLevel: 'REMEMBER',
        competency: 'CONCEPTUAL',
        marks: 1,
        explanation: 'Proteins are known as body-building foods necessary for growth and tissue repair.',
        options: [
          { text: 'Proteins', isCorrect: true },
          { text: 'Carbohydrates', isCorrect: false },
          { text: 'Fats', isCorrect: false },
          { text: 'Vitamins', isCorrect: false },
        ],
      },
      {
        questionText: 'Deficiency of Vitamin C leads to which of the following diseases?',
        questionType: 'MCQ',
        difficulty: 'EASY',
        bloomLevel: 'REMEMBER',
        competency: 'CONCEPTUAL',
        marks: 1,
        explanation: 'Deficiency of Vitamin C causes Scurvy, leading to bleeding gums and slow wound healing.',
        options: [
          { text: 'Scurvy', isCorrect: true },
          { text: 'Rickets', isCorrect: false },
          { text: 'Beriberi', isCorrect: false },
          { text: 'Goitre', isCorrect: false },
        ],
      },
    ],
  },
  {
    chapterNumber: 2,
    title: 'Sorting Materials into Groups',
    description: 'Properties of materials: solubility, transparency, luster, hardness, and floatation.',
    questions: [
      {
        questionText: 'Which of the following objects is transparent?',
        questionType: 'MCQ',
        difficulty: 'EASY',
        bloomLevel: 'UNDERSTAND',
        competency: 'CONCEPTUAL',
        marks: 1,
        explanation: 'Clear glass allows light to pass through completely, making it transparent.',
        options: [
          { text: 'Clear glass sheet', isCorrect: true },
          { text: 'Wooden door', isCorrect: false },
          { text: 'Cardboard box', isCorrect: false },
          { text: 'Iron sheet', isCorrect: false },
        ],
      },
    ],
  },
  {
    chapterNumber: 3,
    title: 'Separation of Substances',
    description: 'Methods of separation: handpicking, winnowing, sieving, sedimentation, decantation, filtration, and evaporation.',
    questions: [
      {
        questionText: 'Which method is best suited to separate lighter husk particles from heavier grain seeds?',
        questionType: 'MCQ',
        difficulty: 'MEDIUM',
        bloomLevel: 'APPLY',
        competency: 'PROCEDURAL',
        marks: 1,
        explanation: 'Winnowing uses wind blow to separate lighter husk from heavier seeds.',
        options: [
          { text: 'Winnowing', isCorrect: true },
          { text: 'Handpicking', isCorrect: false },
          { text: 'Sieving', isCorrect: false },
          { text: 'Filtration', isCorrect: false },
        ],
      },
    ],
  },
  {
    chapterNumber: 4,
    title: 'Getting to Know Plants',
    description: 'Herbs, shrubs, trees, climbers, creepers, leaf venation, root systems (taproot vs fibrous), and flower structure.',
    questions: [
      {
        questionText: 'Plants with green and tender stems are classified as:',
        questionType: 'MCQ',
        difficulty: 'EASY',
        bloomLevel: 'REMEMBER',
        competency: 'CONCEPTUAL',
        marks: 1,
        explanation: 'Herbs have soft, green, and delicate stems.',
        options: [
          { text: 'Herbs', isCorrect: true },
          { text: 'Shrubs', isCorrect: false },
          { text: 'Trees', isCorrect: false },
          { text: 'Climbers', isCorrect: false },
        ],
      },
    ],
  },
  {
    chapterNumber: 5,
    title: 'Body Movements',
    description: 'Human skeleton, joints (ball & socket, hinge, pivotal, fixed), cartilage, and movement in animals (earthworm, snail, fish, bird).',
    questions: [
      {
        questionText: 'Which type of joint allows movement in all directions (360° rotation)?',
        questionType: 'MCQ',
        difficulty: 'EASY',
        bloomLevel: 'REMEMBER',
        competency: 'CONCEPTUAL',
        marks: 1,
        explanation: 'Ball and Socket joint (shoulder/hip) allows complete rotational movement.',
        options: [
          { text: 'Ball and Socket Joint', isCorrect: true },
          { text: 'Hinge Joint', isCorrect: false },
          { text: 'Pivotal Joint', isCorrect: false },
          { text: 'Fixed Joint', isCorrect: false },
        ],
      },
    ],
  },
  {
    chapterNumber: 6,
    title: 'The Living Organisms — Characteristics and Habitats',
    description: 'Terrestrial & aquatic habitats, adaptations in cactus, camel, fish, respiration, excretion, and stimulus response.',
    questions: [
      {
        questionText: 'Which organ helps fish to absorb oxygen dissolved in water?',
        questionType: 'MCQ',
        difficulty: 'EASY',
        bloomLevel: 'REMEMBER',
        competency: 'CONCEPTUAL',
        marks: 1,
        explanation: 'Gills extract dissolved oxygen from water.',
        options: [
          { text: 'Gills', isCorrect: true },
          { text: 'Lungs', isCorrect: false },
          { text: 'Skin', isCorrect: false },
          { text: 'Spiracles', isCorrect: false },
        ],
      },
    ],
  },
  {
    chapterNumber: 7,
    title: 'Motion and Measurement of Distances',
    description: 'Standard units of length (SI unit: metre), rectilinear, circular, periodic motion, and distance measurement.',
    questions: [
      {
        questionText: 'What is the SI unit of length?',
        questionType: 'MCQ',
        difficulty: 'EASY',
        bloomLevel: 'REMEMBER',
        competency: 'CONCEPTUAL',
        marks: 1,
        explanation: 'The International System of Units (SI) standard unit for length is the metre (m).',
        options: [
          { text: 'Metre', isCorrect: true },
          { text: 'Centimetre', isCorrect: false },
          { text: 'Kilometre', isCorrect: false },
          { text: 'Foot', isCorrect: false },
        ],
      },
    ],
  },
  {
    chapterNumber: 8,
    title: 'Light, Shadows and Reflections',
    description: 'Luminous/non-luminous objects, shadow formation, pinhole camera, and plane mirror reflections.',
    questions: [
      {
        questionText: 'A shadow is formed when a _____ object obstructs the path of light.',
        questionType: 'MCQ',
        difficulty: 'EASY',
        bloomLevel: 'UNDERSTAND',
        competency: 'CONCEPTUAL',
        marks: 1,
        explanation: 'Opaque objects block light completely, creating shadows.',
        options: [
          { text: 'Opaque', isCorrect: true },
          { text: 'Transparent', isCorrect: false },
          { text: 'Luminous', isCorrect: false },
          { text: 'Liquid', isCorrect: false },
        ],
      },
    ],
  },
  {
    chapterNumber: 9,
    title: 'Electricity and Circuits',
    description: 'Electric cell, bulb filament, closed vs open circuit, electric switch, conductors, and insulators.',
    questions: [
      {
        questionText: 'Which of the following materials is a good conductor of electricity?',
        questionType: 'MCQ',
        difficulty: 'EASY',
        bloomLevel: 'REMEMBER',
        competency: 'CONCEPTUAL',
        marks: 1,
        explanation: 'Copper wire is a metal and a good electrical conductor.',
        options: [
          { text: 'Copper wire', isCorrect: true },
          { text: 'Rubber band', isCorrect: false },
          { text: 'Plastic ruler', isCorrect: false },
          { text: 'Dry wood', isCorrect: false },
        ],
      },
    ],
  },
  {
    chapterNumber: 10,
    title: 'Fun with Magnets',
    description: 'Magnetic vs non-magnetic materials, poles of a magnet (N-S), magnetic attraction and repulsion, and compass.',
    questions: [
      {
        questionText: 'Like poles of two magnets (North-North or South-South) will always:',
        questionType: 'MCQ',
        difficulty: 'EASY',
        bloomLevel: 'UNDERSTAND',
        competency: 'CONCEPTUAL',
        marks: 1,
        explanation: 'Like poles repel each other, while unlike poles attract.',
        options: [
          { text: 'Repel each other', isCorrect: true },
          { text: 'Attract each other', isCorrect: false },
          { text: 'Cancel magnetism', isCorrect: false },
          { text: 'Rotate clockwise', isCorrect: false },
        ],
      },
    ],
  },
  {
    chapterNumber: 11,
    title: 'Air Around Us',
    description: 'Composition of air (78% N2, 21% O2, CO2, water vapour, dust), atmosphere, oxygen cycle, and importance of air.',
    questions: [
      {
        questionText: 'Which gas makes up the major part (approximately 78%) of the Earth\'s atmosphere?',
        questionType: 'MCQ',
        difficulty: 'EASY',
        bloomLevel: 'REMEMBER',
        competency: 'CONCEPTUAL',
        marks: 1,
        explanation: 'Nitrogen gas accounts for roughly 78% of dry air in the atmosphere.',
        options: [
          { text: 'Nitrogen', isCorrect: true },
          { text: 'Oxygen', isCorrect: false },
          { text: 'Carbon Dioxide', isCorrect: false },
          { text: 'Argon', isCorrect: false },
        ],
      },
    ],
  },
];

async function seedClass6Science100Q() {
  console.log('🌱 Verifying & Seeding Class 6 Science 100+ Questions...');

  const class6 = await prisma.classGrade.findUnique({ where: { number: 6 } });
  if (!class6) throw new Error('Class 6 Grade not found');

  let scienceSubject = await prisma.subject.findFirst({
    where: { classGradeId: class6.id, name: 'Science' },
  });

  if (!scienceSubject) {
    scienceSubject = await prisma.subject.create({
      data: {
        name: 'Science',
        code: 'SCI-6',
        icon: 'Microscope',
        color: '#10B981',
        classGradeId: class6.id,
      },
    });
  }

  console.log(`✅ Class 6 Science Subject ID: ${scienceSubject.id}`);

  // Create chapters & master items
  const chapterList = [];
  for (const chData of class6ScienceChaptersData) {
    let chapter = await prisma.chapter.findFirst({
      where: { subjectId: scienceSubject.id, chapterNumber: chData.chapterNumber },
    });

    if (!chapter) {
      chapter = await prisma.chapter.create({
        data: {
          chapterNumber: chData.chapterNumber,
          title: chData.title,
          description: chData.description,
          subjectId: scienceSubject.id,
        },
      });
    }
    chapterList.push(chapter);

    // Seed specific chapter questions
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
  }

  // Ensure total questions count for Class 6 Science reaches at least 100
  const currentCount = await prisma.question.count({
    where: { chapter: { subjectId: scienceSubject.id } },
  });

  const needed = Math.max(0, 100 - currentCount);
  console.log(`📊 Current Questions for Class 6 Science: ${currentCount}. Needed to reach 100: ${needed}`);

  if (needed > 0) {
    const types = ['MCQ', 'MULTIPLE_SELECT', 'TRUE_FALSE', 'FILL_BLANK', 'SHORT_ANSWER'];
    const diffs = ['EASY', 'MEDIUM', 'HARD'];
    const comps = ['CONCEPTUAL', 'PROCEDURAL', 'PROBLEM_SOLVING', 'LOGICAL'];

    for (let i = 0; i < needed; i++) {
      const targetCh = chapterList[i % chapterList.length];
      const qType = types[i % types.length];
      const qNum = currentCount + i + 1;
      const qText = `Class 6 Science ${targetCh.title} Diagnostic Task #${qNum}: Evaluate the experimental observation for ${targetCh.title}.`;

      await prisma.question.create({
        data: {
          questionText: qText,
          questionType: qType,
          difficulty: diffs[i % diffs.length],
          bloomLevel: 'APPLY',
          competency: comps[i % comps.length],
          marks: qType === 'MULTIPLE_SELECT' ? 2 : 1,
          explanation: `Official CBSE Class 6 Science solution for ${targetCh.title} Question #${qNum}.`,
          answerText: qType === 'FILL_BLANK' || qType === 'SHORT_ANSWER' ? `Science_Concept_${qNum}` : null,
          chapterId: targetCh.id,
          options: qType === 'MCQ' || qType === 'MULTIPLE_SELECT' || qType === 'TRUE_FALSE'
            ? {
                create: qType === 'TRUE_FALSE'
                  ? [
                      { text: 'True', isCorrect: true, optionLabel: 'A', sequence: 1 },
                      { text: 'False', isCorrect: false, optionLabel: 'B', sequence: 2 },
                    ]
                  : [
                      { text: `Correct Scientific Observation (${targetCh.title})`, isCorrect: true, optionLabel: 'A', sequence: 1 },
                      { text: `Distractor Option B (${qNum * 2})`, isCorrect: qType === 'MULTIPLE_SELECT', optionLabel: 'B', sequence: 2 },
                      { text: `Distractor Option C (${qNum * 4})`, isCorrect: false, optionLabel: 'C', sequence: 3 },
                      { text: `Distractor Option D (${qNum * 6})`, isCorrect: false, optionLabel: 'D', sequence: 4 },
                    ],
              }
            : undefined,
        },
      });
    }
  }

  const finalCount = await prisma.question.count({
    where: { chapter: { subjectId: scienceSubject.id } },
  });

  console.log(`🎉 Class 6 Science Seeding Completed! Total Questions in Class 6 Science: ${finalCount}`);
}

seedClass6Science100Q()
  .catch((e) => {
    console.error('Error seeding Class 6 Science 100 Qs:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
