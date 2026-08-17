import { PrismaClient } from '@prisma/client';

/**
 * Disables statement_timeout for the current Supabase session.
 * Supabase free tier has an 8s default statement_timeout that kills slow upserts.
 */
async function disableStatementTimeout(prisma: PrismaClient): Promise<void> {
  try {
    await prisma.$executeRawUnsafe('SET statement_timeout = 0');
    await prisma.$executeRawUnsafe('SET lock_timeout = 0');
  } catch (_) {}
}

/**
 * Retry helper — reconnects Prisma and retries on ALL connection/timeout errors.
 * Handles: P1017, P1001, PrismaClientInitializationError, 57014, "Can't reach database"
 * Supabase rate-limits rapid reconnections; we use exponential back-off starting at 5s.
 */
async function retryWithReconnect<T>(
  prisma: PrismaClient,
  fn: () => Promise<T>,
  retries = 8,
  delayMs = 5000,
): Promise<T> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (err: any) {
      const msg = err?.message || '';
      const isConnErr =
        err?.code === 'P1017' ||
        err?.code === 'P1001' ||
        msg.includes('Server has closed') ||
        msg.includes("Can't reach database") ||
        msg.includes('connection') ||
        msg.includes('ECONNREFUSED') ||
        msg.includes('ENOTFOUND') ||
        err?.constructor?.name === 'PrismaClientInitializationError';
      const isTimeoutErr =
        msg.includes('57014') ||
        msg.includes('statement timeout') ||
        msg.includes('canceling statement');

      if ((isConnErr || isTimeoutErr) && attempt < retries) {
        const reason = isTimeoutErr ? 'Statement timeout' : 'Connection error';
        console.log(`  ⚠️  ${reason} (attempt ${attempt}/${retries}), waiting ${delayMs}ms before retry...`);
        try { await prisma.$disconnect(); } catch (_) {}
        await new Promise((r) => setTimeout(r, delayMs));
        try { await prisma.$connect(); } catch (_) {}
        // Re-disable timeout on fresh connection
        await disableStatementTimeout(prisma);
        delayMs = Math.min(delayMs * 2, 30000); // exponential back-off, max 30s
      } else {
        throw err;
      }
    }
  }
  throw new Error('Max retries exceeded');
}

/**
 * Multi-Format CBSE Question Bank Generator (NEP 2020 & PARAKH Aligned):
 * Generates questions across all 6 core CBSE assessment formats for every chapter:
 * 1. Multiple Choice Questions (MCQs - 1-2 Marks)
 * 2. Assertion-Reasoning (A-R - 1 Mark)
 * 3. Fill in the Blanks (1 Mark)
 * 4. True / False (1 Mark)
 * 5. Competency Case Studies (4 Marks)
 * 6. Subjective Constructed-Response (VSA/SA/LA - 2-3 Marks)
 * 7. Skill & Practical Diagram/Map-Based (3 Marks)
 */
export async function seedQuestions(prisma: PrismaClient, chapters: any[]) {
  console.log('❓ Seeding Multi-Format CBSE Question Bank (MCQ, A-R, Fill-Blank, True/False, Case Studies, Subjective, Skill/Diagram) across all classes & subjects...');
  const questions = [];
  let globalQuestionCounter = 1;
  let chapterIndex = 0;

  for (const chapter of chapters) {
    chapterIndex++;

    // Small breathing room between chapters to avoid Supabase rate-limiting
    await new Promise((r) => setTimeout(r, 300));

    // Keep-alive ping every 10 chapters to prevent idle connection drops
    if (chapterIndex % 10 === 0) {
      console.log(`  📡 Keep-alive ping (chapter ${chapterIndex}/${chapters.length})...`);
      try { await prisma.$queryRaw`SELECT 1`; } catch (_) {}
    }

    const existingQs = await retryWithReconnect(prisma, () =>
      prisma.question.findMany({
        where: { chapterId: chapter.id },
        include: { options: true },
      })
    );

    const subCode = chapter.subject?.code || 'SUB';
    const subName = chapter.subject?.name || 'Subject';
    const classNum = chapter.subject?.classGrade?.number || 6;
    const chNum = chapter.chapterNumber || 1;
    const chTitle = chapter.title;

    const generateCode = (typePrefix: string, idx: number) => {
      const pad = String(idx).padStart(3, '0');
      return `C${classNum}-${subCode}-CH${chNum}-${typePrefix}-${pad}`;
    };

    const labels = ['A', 'B', 'C', 'D'];

    // 1. Process custom-defined chapter questions if present
    if (chapter.questionsData && chapter.questionsData.length > 0) {
      for (let qIdx = 0; qIdx < chapter.questionsData.length; qIdx++) {
        const q = chapter.questionsData[qIdx];
        const qCode = q.questionCode || generateCode('MCQ', globalQuestionCounter++);

        const optionData = (q.options && q.options.length > 0) ? q.options.map((opt: any, idx: number) => ({
          optionLabel: opt.optionLabel || labels[idx] || `${idx + 1}`,
          optionText: opt.optionText || opt.text || `Option ${labels[idx]}`,
          text: opt.optionText || opt.text || `Option ${labels[idx]}`,
          isCorrect: opt.isCorrect !== undefined ? opt.isCorrect : (idx === 0),
          explanation: opt.explanation || (opt.isCorrect ? 'Correct option.' : 'Incorrect option.'),
          sequence: idx + 1,
        })) : [
          { optionLabel: 'A', optionText: `Option A for ${chTitle}`, text: `Option A for ${chTitle}`, isCorrect: true, sequence: 1 },
          { optionLabel: 'B', optionText: `Option B for ${chTitle}`, text: `Option B for ${chTitle}`, isCorrect: false, sequence: 2 },
          { optionLabel: 'C', optionText: `Option C for ${chTitle}`, text: `Option C for ${chTitle}`, isCorrect: false, sequence: 3 },
          { optionLabel: 'D', optionText: `Option D for ${chTitle}`, text: `Option D for ${chTitle}`, isCorrect: false, sequence: 4 },
        ];

        const createdQ = await retryWithReconnect(prisma, () =>
          prisma.question.upsert({
            where: { questionCode: qCode },
            update: {
              questionText: q.questionText,
              explanation: q.explanation || 'Step-by-step verified solution.',
            },
            create: {
              chapterId: chapter.id,
              questionCode: qCode,
              questionText: q.questionText,
              type: q.type || 'MCQ',
              questionType: q.questionType || q.type || 'MCQ',
              difficulty: q.difficulty || 'MEDIUM',
              bloomLevel: q.bloomLevel || 'UNDERSTAND',
              competency: q.competency || 'CONCEPTUAL',
              marks: q.marks !== undefined ? q.marks : 2,
              negativeMarks: q.negativeMarks !== undefined ? q.negativeMarks : 0,
              explanation: q.explanation || 'Step-by-step verified solution.',
              answerText: q.answerText || null,
              options: {
                create: optionData,
              },
            },
            include: { options: true },
          })
        );
        questions.push(createdQ);
      }
    }

    // Refresh current questions in chapter
    const currentQs = await retryWithReconnect(prisma, () =>
      prisma.question.findMany({
        where: { chapterId: chapter.id },
      })
    );

    // Helper to check if question format exists
    const hasFormat = (fmt: string) => currentQs.some((q) => q.questionType === fmt || (q as any).type === fmt);

    // 2. ASSERTION-REASONING QUESTION
    if (!hasFormat('ASSERTION_REASON')) {
      const arQ = await retryWithReconnect(prisma, () => prisma.question.create({
        data: {
          chapterId: chapter.id,
          questionCode: generateCode('AR', globalQuestionCounter++),
          questionText: `Assertion (A): Fundamental principles of '${chTitle}' hold true across standard physical/mathematical conditions.\nReason (R): Scientific and mathematical laws in ${subName} are derived from verified empirical principles and conservation laws.`,
          type: 'ASSERTION_REASON',
          questionType: 'ASSERTION_REASON',
          difficulty: 'MEDIUM',
          bloomLevel: 'ANALYZE',
          competency: 'CRITICAL_THINKING',
          marks: 1,
          negativeMarks: 0,
          explanation: `Both Assertion (A) and Reason (R) are true statements, and Reason (R) provides the correct scientific/mathematical justification for Assertion (A).`,
          options: {
            create: [
              { optionLabel: 'A', optionText: 'Both (A) and (R) are true, and (R) is the correct explanation of (A).', text: 'Both (A) and (R) are true, and (R) is the correct explanation of (A).', isCorrect: true, sequence: 1 },
              { optionLabel: 'B', optionText: 'Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).', text: 'Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).', isCorrect: false, sequence: 2 },
              { optionLabel: 'C', optionText: '(A) is true, but (R) is false.', text: '(A) is true, but (R) is false.', isCorrect: false, sequence: 3 },
              { optionLabel: 'D', optionText: '(A) is false, but (R) is true.', text: '(A) is false, but (R) is true.', isCorrect: false, sequence: 4 },
            ],
          },
        },
        include: { options: true },
      }));
      questions.push(arQ);
    }

    // 3. FILL IN THE BLANKS QUESTION
    if (!hasFormat('FILL_BLANK')) {
      const fbQ = await retryWithReconnect(prisma, () => prisma.question.create({
        data: {
          chapterId: chapter.id,
          questionCode: generateCode('FB', globalQuestionCounter++),
          questionText: `Fill in the Blank: The core property that defines '${chTitle}' in Class ${classNum} ${subName} is __________.`,
          type: 'FILL_BLANK',
          questionType: 'FILL_BLANK',
          difficulty: 'EASY',
          bloomLevel: 'REMEMBER',
          competency: 'CONCEPTUAL',
          marks: 1,
          negativeMarks: 0,
          explanation: `The fundamental defining concept for ${chTitle} is its primary law or standard formula.`,
          options: {
            create: [
              { optionLabel: 'A', optionText: `Standard law of ${chTitle}`, text: `Standard law of ${chTitle}`, isCorrect: true, sequence: 1 },
              { optionLabel: 'B', optionText: `Undefined variable`, text: `Undefined variable`, isCorrect: false, sequence: 2 },
              { optionLabel: 'C', optionText: `Arbitrary constant`, text: `Arbitrary constant`, isCorrect: false, sequence: 3 },
              { optionLabel: 'D', optionText: `Zero coefficient`, text: `Zero coefficient`, isCorrect: false, sequence: 4 },
            ],
          },
        },
        include: { options: true },
      }));
      questions.push(fbQ);
    }

    // 4. TRUE / FALSE QUESTION
    if (!hasFormat('TRUE_FALSE')) {
      const tfQ = await retryWithReconnect(prisma, () => prisma.question.create({
        data: {
          chapterId: chapter.id,
          questionCode: generateCode('TF', globalQuestionCounter++),
          questionText: `State True or False with reasoning: "The mathematical relations and definitions governing '${chTitle}' remain invariant under standard SI units."`,
          type: 'TRUE_FALSE',
          questionType: 'TRUE_FALSE',
          difficulty: 'EASY',
          bloomLevel: 'UNDERSTAND',
          competency: 'LOGICAL_REASONING',
          marks: 1,
          negativeMarks: 0,
          explanation: `True. Standard SI units provide universal dimensional consistency across ${subName}.`,
          options: {
            create: [
              { optionLabel: 'A', optionText: 'True', text: 'True', isCorrect: true, sequence: 1 },
              { optionLabel: 'B', optionText: 'False', text: 'False', isCorrect: false, sequence: 2 },
            ],
          },
        },
        include: { options: true },
      }));
      questions.push(tfQ);
    }

    // 5. COMPETENCY CASE STUDY QUESTION (4 Marks)
    if (!hasFormat('CASE_STUDY')) {
      const csQ = await retryWithReconnect(prisma, () => prisma.question.create({
        data: {
          chapterId: chapter.id,
          questionCode: generateCode('CS', globalQuestionCounter++),
          questionText: `[Real-World Case Study] Context: A team of students conducted a practical experiment on '${chTitle}' in ${subName}. They recorded multiple data points under controlled laboratory conditions to analyze system efficiency.\n\nSub-questions:\n1. Identify the independent and dependent variables in the experiment. [1 Mark]\n2. Calculate the average efficiency/result using the data. [1 Mark]\n3. Evaluate the effect of doubling the input parameter. [2 Marks]`,
          type: 'CASE_STUDY',
          questionType: 'CASE_STUDY',
          difficulty: 'HARD',
          bloomLevel: 'EVALUATE',
          competency: 'REAL_WORLD_APPLICATION',
          marks: 4,
          negativeMarks: 0,
          explanation: `Case Study Solution:\n1. Independent variable = Input parameter; Dependent variable = Observed output of ${chTitle}.\n2. Applying standard formula yields verified efficiency.\n3. Doubling the input parameter scales the output proportionally according to the governing law of ${chTitle}.`,
          options: {
            create: [
              { optionLabel: 'A', optionText: `Output scales proportionally with input parameter`, text: `Output scales proportionally with input parameter`, isCorrect: true, sequence: 1 },
              { optionLabel: 'B', optionText: `Output drops to zero`, text: `Output drops to zero`, isCorrect: false, sequence: 2 },
              { optionLabel: 'C', optionText: `Output becomes negative`, text: `Output becomes negative`, isCorrect: false, sequence: 3 },
              { optionLabel: 'D', optionText: `Data is insufficient`, text: `Data is insufficient`, isCorrect: false, sequence: 4 },
            ],
          },
        },
        include: { options: true },
      }));
      questions.push(csQ);
    }

    // 6. SUBJECTIVE CONSTRUCTED-RESPONSE (3 Marks)
    if (!hasFormat('SHORT_ANSWER')) {
      const saQ = await retryWithReconnect(prisma, () => prisma.question.create({
        data: {
          chapterId: chapter.id,
          questionCode: generateCode('SA', globalQuestionCounter++),
          questionText: `[Subjective Constructed-Response] Explain the core working mechanism of '${chTitle}' in Class ${classNum} ${subName}. State two key applications in daily life or technology.`,
          type: 'SHORT_ANSWER',
          questionType: 'SHORT_ANSWER',
          difficulty: 'MEDIUM',
          bloomLevel: 'APPLY',
          competency: 'PROBLEM_SOLVING',
          marks: 3,
          negativeMarks: 0,
          explanation: `Point-wise Marking Scheme:\n1. Explanation of core mechanism: [1 Mark]\n2. Application 1 with real-life context: [1 Mark]\n3. Application 2 with technical reasoning: [1 Mark]`,
          options: {
            create: [
              { optionLabel: 'A', optionText: `Systematic procedural derivation and two real-world applications`, text: `Systematic procedural derivation and two real-world applications`, isCorrect: true, sequence: 1 },
              { optionLabel: 'B', optionText: `Theoretical description without applications`, text: `Theoretical description without applications`, isCorrect: false, sequence: 2 },
            ],
          },
        },
        include: { options: true },
      }));
      questions.push(saQ);
    }

    // 7. SKILL & PRACTICAL DIAGRAM/MAP-BASED QUESTION (3 Marks)
    if (!hasFormat('DIAGRAM')) {
      const diagQ = await retryWithReconnect(prisma, () => prisma.question.create({
        data: {
          chapterId: chapter.id,
          questionCode: generateCode('DIAG', globalQuestionCounter++),
          questionText: `[Skill & Diagram-Based Analysis] Draw a neat, labeled schematic diagram/graph illustrating '${chTitle}'. Mark all essential components, axes, and directional arrows.`,
          type: 'DIAGRAM',
          questionType: 'DIAGRAM',
          difficulty: 'MEDIUM',
          bloomLevel: 'CREATE',
          competency: 'DIAGRAMMATIC_SKILLS',
          marks: 3,
          negativeMarks: 0,
          explanation: `Diagram Marking Rubric:\n1. Neat schematic representation with correct proportions: [1 Mark]\n2. Accurate labeling of key parts/axes: [1 Mark]\n3. Indication of directional arrows/flow: [1 Mark]`,
          options: {
            create: [
              { optionLabel: 'A', optionText: `Accurate labeled schematic diagram with directional flow`, text: `Accurate labeled schematic diagram with directional flow`, isCorrect: true, sequence: 1 },
              { optionLabel: 'B', optionText: `Unlabeled diagram`, text: `Unlabeled diagram`, isCorrect: false, sequence: 2 },
            ],
          },
        },
        include: { options: true },
      }));
      questions.push(diagQ);
    }
  }

  console.log(`✅ Successfully Seeded Multi-Format CBSE Question Bank across all classes & subjects!`);
  return questions;
}

// Standalone runner if executed directly
if (require.main === module) {
  const prisma = new PrismaClient();
  prisma.chapter.findMany({
    include: {
      subject: { include: { classGrade: true } },
    },
  })
  .then(async (chapters) => {
    await seedQuestions(prisma, chapters);
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Error seeding questions:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
}

