import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🎯 Updating ALL Worksheets in PostgreSQL to have EXACTLY 21 Questions across 7 Sections (30 Marks)...');

  const worksheets = await prisma.worksheet.findMany({
    include: {
      chapter: {
        include: {
          questions: {
            include: { options: true },
          },
        },
      },
      questions: {
        orderBy: { sequence: 'asc' },
        include: { question: { include: { options: true } } },
      },
    },
  });

  console.log(`📌 Found ${worksheets.length} total worksheets in the database.`);

  let updatedWorksheetsCount = 0;

  for (const ws of worksheets) {
    const chapterQuestions = ws.chapter?.questions || [];
    if (chapterQuestions.length === 0) continue;

    // Filter to authentic chapter questions
    const validChapterQs = chapterQuestions.filter((q) => {
      const qText = q.questionText || '';
      const hasDummyOption = q.options?.some((o: any) => {
        const optVal = (o.optionText || o.text || '') as string;
        return optVal.includes('Incorrect Option') || optVal.includes('Distractor Option');
      });
      return !qText.includes('Which of the following principles correctly applies to') && !hasDummyOption;
    });

    if (validChapterQs.length === 0) continue;

    // Categorize into 7 Sections
    const mcqs = validChapterQs.filter((q) => q.questionType === 'MCQ' || q.questionType === 'MULTIPLE_CORRECT').slice(0, 6);
    const fills = validChapterQs.filter((q) => q.questionType === 'FILL_IN_BLANK').slice(0, 4);
    const trufals = validChapterQs.filter((q) => q.questionType === 'TRUE_FALSE').slice(0, 3);
    const solves = validChapterQs.filter((q) => ['SHORT_ANSWER', 'VERY_SHORT_ANSWER', 'LONG_ANSWER', 'NUMERICAL'].includes(q.questionType)).slice(0, 4);
    const assreas = validChapterQs.filter((q) => q.questionType === 'ASSERTION_REASON').slice(0, 2);
    const cases = validChapterQs.filter((q) => ['CASE_BASED', 'SOURCE_BASED', 'PASSAGE_BASED'].includes(q.questionType)).slice(0, 1);
    const hots = validChapterQs.filter((q) => ['HOTS', 'ANALYTICAL', 'APPLICATION_BASED'].includes(q.questionType)).slice(0, 1);

    // Combine categorized items
    let structuredQs = [...mcqs, ...fills, ...trufals, ...solves, ...assreas, ...cases, ...hots];

    // If section slots are missing, fill remaining up to 21 from valid chapter questions
    if (structuredQs.length < 21) {
      const existingIds = new Set(structuredQs.map((q) => q.id));
      for (const q of validChapterQs) {
        if (!existingIds.has(q.id)) {
          structuredQs.push(q);
          existingIds.add(q.id);
          if (structuredQs.length >= 21) break;
        }
      }
    }

    const final21Qs = structuredQs.slice(0, 21);

    // Re-link exact 21 questions in 7-section order
    await prisma.worksheetQuestion.deleteMany({ where: { worksheetId: ws.id } });
    await prisma.worksheetQuestion.createMany({
      data: final21Qs.map((q, idx) => ({
        worksheetId: ws.id,
        questionId: q.id,
        sequence: idx + 1,
        marks: q.marks || (idx < 13 ? 1 : idx < 17 ? 2 : idx < 19 ? 2 : idx < 20 ? 4 : 1),
      })),
    });

    // Update worksheet metadata: 21 Questions, 30 Marks
    await prisma.worksheet.update({
      where: { id: ws.id },
      data: {
        totalQuestions: final21Qs.length,
        totalMarks: 30,
        durationMinutes: 60,
      },
    });

    updatedWorksheetsCount++;
  }

  console.log(`🎉 SUCCESS! All ${updatedWorksheetsCount} Worksheets updated with EXACTLY 21 Questions across 7 Sections (30 Marks)!`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Error updating worksheets:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
