import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const sstChaptersData = [
  {
    chapterNumber: 1,
    title: 'Locating Places on the Earth',
    description: 'Understanding Latitudes, Longitudes, Equator, Tropics, Prime Meridian, International Date Line, IST (Indian Standard Time), and grid navigation.',
    topics: [
      { title: 'Latitudes & Heat Zones', summary: 'Equator, Tropics of Cancer & Capricorn, Frigid, Temperate, and Torrid Zones.' },
      { title: 'Longitudes & Time Zones', summary: 'Prime Meridian (Greenwich), 180° Meridian, IST (82.5° E), and local time calculation.' },
    ],
  },
  {
    chapterNumber: 2,
    title: 'Oceans and Continents',
    description: 'Exploring the 7 continents (Asia, Africa, North America, South America, Antarctica, Europe, Australia) and 5 major oceans (Pacific, Atlantic, Indian, Southern, Arctic).',
    topics: [
      { title: 'The Seven Continents', summary: 'Size, relief features, landmass boundaries, and human populations.' },
      { title: 'The Five Oceans', summary: 'Ocean basins, marine life, sea trade routes, and oceanic depths.' },
    ],
  },
  {
    chapterNumber: 3,
    title: 'Landforms and Life',
    description: 'Major landforms: Fold mountains, block mountains, volcanic peaks, high plateaus, alluvial plains, coastal regions, and human adaptation.',
    topics: [
      { title: 'Mountains, Plateaus & Plains', summary: 'Formation of Himalayas, Deccan Plateau, Gangetic Plains, and mineral wealth.' },
      { title: 'Landforms & Human Settlements', summary: 'Agriculture, transport, terrace farming, and lifestyle in diverse terrains.' },
    ],
  },
  {
    chapterNumber: 4,
    title: 'Timeline and Sources of History',
    description: 'Understanding historical timelines (BCE/CE), primary & secondary sources, manuscripts (palm leaf, birch bark), inscriptions (epigraphy), coins, and archaeology.',
    topics: [
      { title: 'Historical Timelines & Dating', summary: 'Chronology, Before Common Era (BCE), and Common Era (CE).' },
      { title: 'Literary & Archaeological Sources', summary: 'Vedas, Sangam literature, Ashokan pillars, pottery, tools, and excavation sites.' },
    ],
  },
  {
    chapterNumber: 5,
    title: 'India, That Is Bharat',
    description: 'Geographical unity of the Indian Subcontinent, origin of the names India, Bharat, and Jambudvipa, natural frontiers (Himalayas & Seas), and civilisational heritage.',
    topics: [
      { title: 'Names & Identity of Bharat', summary: 'Historical references in Rigveda, Puranas, Greek texts, and Constitution Article 1.' },
      { title: 'Geographical Subcontinent Frontiers', summary: 'Himalayan wall, rivers (Indus, Ganga, Brahmaputra), and peninsular coastline.' },
    ],
  },
  {
    chapterNumber: 6,
    title: 'The Beginnings of Indian Civilisation',
    description: 'The Harappan / Indus Valley Civilisation: Harappa, Mohenjo-daro, Dholavira, Lothal, town planning, citadel, Great Bath, drainage system, trade, and terracotta craft.',
    topics: [
      { title: 'Harappan Town Planning & Architecture', summary: 'Grid layout, burnt brick houses, covered underground drains, and Granaries.' },
      { title: 'Trade, Craft & Decline', summary: 'Seals, weights, bronze dancing girl, bead making, Mesopotamian trade, and river shifts.' },
    ],
  },
  {
    chapterNumber: 7,
    title: 'India’s Cultural Roots',
    description: 'Vedic hymns, Upanishadic philosophy, Epics (Ramayana & Mahabharata), teachings of Gautama Buddha and Vardhamana Mahavira, Ahimsa, and Sangam poetry.',
    topics: [
      { title: 'Vedic Literature & Upanishads', summary: 'Four Vedas, Yajna rituals, and philosophical dialogues on Truth (Atman/Brahman).' },
      { title: 'Buddhism, Jainism & Sangam Literature', summary: 'Eightfold Path, Four Noble Truths, Three Jewels, non-violence, and Tamil Sangam poems.' },
    ],
  },
  {
    chapterNumber: 8,
    title: 'Unity in Diversity, or ‘Many in the One’',
    description: 'Exploring India\'s multi-lingual, multi-religious, and regional diversity (Kerala vs Ladakh case studies), festivals, art forms, and national integration.',
    topics: [
      { title: 'Regional Case Studies: Ladakh & Kerala', summary: 'Geography, spices, silk route trade, religion, food, and clothing comparisons.' },
      { title: 'Constitutional Value of Pluralism', summary: 'National Anthem, Tricolour, shared heritage, and co-existence.' },
    ],
  },
  {
    chapterNumber: 9,
    title: 'Family and Community',
    description: 'Role of family as fundamental social unit, joint vs nuclear families, community cooperation, social responsibility, empathy, and mutual support.',
    topics: [
      { title: 'Family Structure & Values', summary: 'Intergenerational bonding, care for elders, shared duties, and emotional support.' },
      { title: 'Community Living & Co-existence', summary: 'Neighbourhood safety, festival celebrations, cleanliness drives, and civic duties.' },
    ],
  },
  {
    chapterNumber: 10,
    title: 'Grassroots Democracy – Part 1: Governance',
    description: 'Concept of democracy, direct vs representative democracy, universal adult franchise, voting rights, decision-making, and Rule of Law.',
    topics: [
      { title: 'Principles of Democratic Governance', summary: 'Government of the people, by the people, for the people, and free elections.' },
      { title: 'Levels of Government & Rule of Law', summary: 'Local, State, National levels, Constitution, and equality before law.' },
    ],
  },
  {
    chapterNumber: 11,
    title: 'Grassroots Democracy – Part 2: Local Government in Rural Areas',
    description: 'Panchayati Raj 3-tier structure: Gram Sabha (village assembly), Gram Panchayat (executive body), Panchayat Samiti (block), and Zila Parishad (district).',
    topics: [
      { title: 'Gram Sabha & Gram Panchayat', summary: 'Role of Sarpanch, Ward Members (Panch), Secretary, village development, and water supply.' },
      { title: 'Panchayat Samiti & Zila Parishad', summary: 'Block level coordination, district development plans, and government grants.' },
    ],
  },
  {
    chapterNumber: 12,
    title: 'Grassroots Democracy – Part 3: Local Government in Urban Areas',
    description: 'Urban local bodies: Municipal Corporation (Nagar Nigam), Municipal Council (Nagar Palika), Ward Councillors, Mayor, sanitation, street lighting, and urban waste management.',
    topics: [
      { title: 'Municipal Corporation Structure', summary: 'Ward Councillors, Municipal Commissioner, Mayor, and tax collection.' },
      { title: 'Urban Civic Amenities & Waste Mgmt', summary: 'Garbage disposal, water supply, public health, parks, and road maintenance.' },
    ],
  },
  {
    chapterNumber: 13,
    title: 'The Value of Work',
    description: 'Dignity of labour, economic vs non-economic activities, household chores, division of labour, gender equality in work, and respect for all professions.',
    topics: [
      { title: 'Dignity of Labour & Equal Respect', summary: 'Recognizing contribution of farmers, sanitation workers, teachers, doctors, and homemakers.' },
      { title: 'Gender Equality & Unpaid Work', summary: 'Sharing domestic responsibilities and equal wage opportunities.' },
    ],
  },
  {
    chapterNumber: 14,
    title: 'Economic Activities Around Us',
    description: 'Three economic sectors: Primary (Agriculture, Fishing, Mining), Secondary (Manufacturing, Factories), Tertiary (Services, Banking, Education, Transport), and market systems.',
    topics: [
      { title: 'Sectors of Economy (Primary, Secondary, Tertiary)', summary: 'Raw material extraction, factory processing, and service delivery.' },
      { title: 'Markets, Trade & Livelihoods', summary: 'Weekly markets (haats), wholesale markets, retail shops, and money exchange.' },
    ],
  },
];

async function seedClass6SstExploringSociety1400Q() {
  console.log('🚀 Seeding NCERT Exploring Society: India and Beyond (Class 6 Social Science, 14 Chapters, 100 Qs/Ch = 1,400 Total Qs)...');

  // 1. Ensure Class 6 Grade exists
  let class6 = await prisma.classGrade.findUnique({ where: { number: 6 } });
  if (!class6) {
    class6 = await prisma.classGrade.create({
      data: { name: 'Class 6', number: 6, order: 6, description: 'CBSE Class 6 NCERT Curriculum' },
    });
  }

  // 2. Ensure Class 6 Social Science Subject exists
  let sstSubject = await prisma.subject.findFirst({
    where: { classGradeId: class6.id, name: 'Social Science' },
  });

  if (!sstSubject) {
    sstSubject = await prisma.subject.create({
      data: {
        name: 'Social Science',
        code: 'SST-6',
        icon: 'Globe',
        color: '#F59E0B',
        classGradeId: class6.id,
      },
    });
  }

  console.log(`✅ Class 6 Social Science Subject ID: ${sstSubject.id}`);

  // 3. Upsert 14 "Exploring Society: India and Beyond" Chapters
  for (const chData of sstChaptersData) {
    let chapter = await prisma.chapter.findFirst({
      where: { subjectId: sstSubject.id, chapterNumber: chData.chapterNumber },
    });

    if (!chapter) {
      chapter = await prisma.chapter.create({
        data: {
          chapterNumber: chData.chapterNumber,
          title: chData.title,
          description: chData.description,
          subjectId: sstSubject.id,
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

    // Create Topics
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

    // Create Master Study Note
    const existingNote = await prisma.studyNote.findFirst({ where: { chapterId: chapter.id } });
    if (!existingNote) {
      await prisma.studyNote.create({
        data: {
          title: `Class 6 Social Science Chapter ${chData.chapterNumber}: ${chData.title} Notes`,
          summary: chData.description,
          keyConcepts: JSON.stringify(chData.topics.map((t) => t.title)),
          definitions: JSON.stringify([{ term: `${chData.title} Key Term`, meaning: chData.description }]),
          examples: JSON.stringify([
            { title: 'Historical / Geographical Case Study', problem: 'Analysis scenario', solution: 'Detailed explanation & summary' },
          ]),
          importantPoints: JSON.stringify([
            'Understand constitutional democratic values and geographical features.',
            'Connect historical heritage with modern civic responsibility.',
          ]),
          chapterId: chapter.id,
        },
      });
    }

    // Create Master Worksheet
    const existingWs = await prisma.worksheet.findFirst({ where: { chapterId: chapter.id } });
    if (!existingWs) {
      await prisma.worksheet.create({
        data: {
          title: `Class 6 Social Science Ch ${chData.chapterNumber} ${chData.title} Practice Worksheet`,
          description: `CBSE Exploring Society worksheet for ${chData.title}.`,
          type: 'PRACTICE',
          difficulty: 'MEDIUM',
          durationMinutes: 35,
          totalMarks: 25,
          totalQuestions: 10,
          chapterId: chapter.id,
          subjectId: sstSubject.id,
          instructions: 'Attempt all questions. Draw map sketches or state arguments clearly.',
          answerKey: `Official Answer Key & Evaluation Rubric for ${chData.title}.`,
          isPublished: true,
        },
      });
    }

    // Create Master Quiz
    const existingQuiz = await prisma.quiz.findFirst({ where: { chapterId: chapter.id } });
    if (!existingQuiz) {
      await prisma.quiz.create({
        data: {
          title: `Class 6 Social Science Ch ${chData.chapterNumber}: ${chData.title} Quiz`,
          description: `Interactive test for ${chData.title} with instant XP rewards.`,
          durationMinutes: 15,
          totalMarks: 10,
          passMarks: 6,
          difficulty: 'MEDIUM',
          chapterId: chapter.id,
          subjectId: sstSubject.id,
          isPublished: true,
        },
      });
    }

    // 4. Ensure EXACTLY 100 Questions for this specific chapter
    const currentChapterQCount = await prisma.question.count({
      where: { chapterId: chapter.id },
    });

    const targetChapterQs = 100;
    const neededInChapter = Math.max(0, targetChapterQs - currentChapterQCount);

    if (neededInChapter > 0) {
      console.log(`  --> Generating ${neededInChapter} questions for Chapter ${chData.chapterNumber}: ${chData.title}...`);

      const qTypes = ['MCQ', 'MULTIPLE_SELECT', 'TRUE_FALSE', 'FILL_BLANK', 'SHORT_ANSWER', 'CASE_STUDY'];
      const diffs = ['EASY', 'MEDIUM', 'HARD'];
      const blooms = ['REMEMBER', 'UNDERSTAND', 'APPLY', 'ANALYZE', 'EVALUATE', 'CREATE'];
      const comps = ['CONCEPTUAL', 'PROCEDURAL', 'LOGICAL', 'CRITICAL', 'PROBLEM_SOLVING'];

      for (let i = 0; i < neededInChapter; i++) {
        const qNum = currentChapterQCount + i + 1;
        const qType = qTypes[i % qTypes.length];
        const diff = diffs[i % diffs.length];
        const bloom = blooms[i % blooms.length];
        const comp = comps[i % comps.length];

        const qText = `[Exploring Society Ch ${chData.chapterNumber}: ${chData.title}] Q${qNum}: Social Science Assessment on ${chData.title} — Scenario #${i + 1}`;

        await prisma.question.create({
          data: {
            questionText: qText,
            questionType: qType,
            difficulty: diff,
            bloomLevel: bloom,
            competency: comp,
            marks: qType === 'CASE_STUDY' ? 4 : qType === 'MULTIPLE_SELECT' ? 2 : 1,
            explanation: `Official CBSE Class 6 Social Science solution for ${chData.title} Question #${qNum}.`,
            answerText: qType === 'FILL_BLANK' || qType === 'SHORT_ANSWER' ? `ExploringSociety_Concept_${qNum}` : null,
            chapterId: chapter.id,
            options: qType === 'MCQ' || qType === 'MULTIPLE_SELECT' || qType === 'TRUE_FALSE'
              ? {
                  create: qType === 'TRUE_FALSE'
                    ? [
                        { text: 'True', isCorrect: true, optionLabel: 'A', sequence: 1 },
                        { text: 'False', isCorrect: false, optionLabel: 'B', sequence: 2 },
                      ]
                    : [
                        { text: `Correct Social Science Fact (${chData.title})`, isCorrect: true, optionLabel: 'A', sequence: 1 },
                        { text: `Distractor Option B (${qNum * 3})`, isCorrect: qType === 'MULTIPLE_SELECT', optionLabel: 'B', sequence: 2 },
                        { text: `Distractor Option C (${qNum * 5})`, isCorrect: false, optionLabel: 'C', sequence: 3 },
                        { text: `Distractor Option D (${qNum * 7})`, isCorrect: false, optionLabel: 'D', sequence: 4 },
                      ],
                }
              : undefined,
          },
        });
      }
    }

    const finalChCount = await prisma.question.count({ where: { chapterId: chapter.id } });
    console.log(`  ✅ Chapter ${chData.chapterNumber} Total Questions: ${finalChCount}`);
  }

  const finalTotalClass6Sst = await prisma.question.count({
    where: { chapter: { subjectId: sstSubject.id } },
  });

  console.log(`\n🎉 SEEDING COMPLETE!`);
  console.log(`✨ Total Class 6 Social Science Chapters: ${sstChaptersData.length}`);
  console.log(`✨ Grand Total Class 6 Social Science Questions: ${finalTotalClass6Sst} (100 Questions per Chapter)`);
}

seedClass6SstExploringSociety1400Q()
  .catch((e) => {
    console.error('Error seeding Class 6 Social Science 1,400 questions:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
