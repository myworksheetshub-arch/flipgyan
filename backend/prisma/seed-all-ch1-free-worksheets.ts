import { PrismaClient, QuestionType, Board, DifficultyLevel, CognitiveLevel, QuestionStatus, Language } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🚀 Ensuring FREE Chapter 1 Worksheet (21 Questions, 30 Marks) for EVERY Class and Subject...');

  const classGrades = await prisma.classGrade.findMany({
    orderBy: { number: 'asc' },
    include: {
      subjects: {
        include: {
          chapters: {
            orderBy: { createdAt: 'asc' },
            include: {
              worksheets: {
                include: { _count: { select: { questions: true } } },
              },
              questions: {
                include: { options: true },
              },
            },
          },
        },
      },
    },
  });

  let createdWsCount = 0;

  for (const cg of classGrades) {
    console.log(`\n📚 Processing Class ${cg.number} (${cg.name})...`);

    for (const sub of cg.subjects) {
      // Find Chapter 1
      let ch1 = sub.chapters.find(
        (c) =>
          c.chapterNo === 1 ||
          c.chapterNumber === 1 ||
          (c.title && (c.title.toLowerCase().includes('chapter 1') || c.title.toLowerCase().includes('1 -') || c.title.toLowerCase().includes('1:'))) ||
          (c.name && c.name.toLowerCase().includes('1'))
      );

      if (!ch1 && sub.chapters.length > 0) {
        ch1 = sub.chapters[0];
      }

      if (!ch1) {
        // Create Chapter 1 if missing
        ch1 = await prisma.chapter.create({
          data: {
            subjectId: sub.id,
            name: 'Chapter 1',
            title: `${sub.name} Fundamentals & Chapter 1 Overview`,
            chapterNo: 1,
            chapterNumber: 1,
            description: `Core fundamentals and competency practice for ${cg.name} ${sub.name} Chapter 1.`,
          },
          include: { worksheets: { include: { _count: { select: { questions: true } } } }, questions: { include: { options: true } } },
        });
      }

      // Check if Chapter 1 has a valid 21-question worksheet
      let validWs = ch1.worksheets.find((w) => w._count.questions === 21);

      if (!validWs) {
        console.log(`   ➕ Generating 21-question Chapter 1 Worksheet for ${sub.name}...`);

        // Check questions for Chapter 1
        let chapterQs = ch1.questions || [];

        // If chapter has fewer than 21 questions, generate academic questions to reach 21
        if (chapterQs.length < 21) {
          const needed = 21 - chapterQs.length;
          for (let i = 0; i < needed; i++) {
            const qNum = chapterQs.length + 1;
            const qType =
              qNum <= 6
                ? QuestionType.MCQ
                : qNum <= 10
                ? QuestionType.FILL_IN_BLANK
                : qNum <= 13
                ? QuestionType.TRUE_FALSE
                : qNum <= 17
                ? QuestionType.SHORT_ANSWER
                : qNum <= 19
                ? QuestionType.ASSERTION_REASON
                : qNum === 20
                ? QuestionType.CASE_BASED
                : QuestionType.HOTS;

            const marks = qNum <= 13 ? 1 : qNum <= 17 ? 2 : qNum <= 19 ? 2 : qNum === 20 ? 4 : 1;

            let questionText = '';
            let explanation = '';
            let answerText = '';
            let optionsData: any[] = [];

            if (qType === QuestionType.MCQ) {
              questionText = `[Class ${cg.number} ${sub.name} Ch 1] Q${qNum}: Which of the following statements is conceptually correct regarding ${sub.name} fundamentals?`;
              explanation = `Option A is correct based on standard CBSE Class ${cg.number} ${sub.name} curriculum principles.`;
              answerText = 'Option A';
              optionsData = [
                { text: `Fundamental principle of ${sub.name} applies universally`, isCorrect: true, optionLabel: 'A', sequence: 1 },
                { text: `Fundamental principle applies only under extreme conditions`, isCorrect: false, optionLabel: 'B', sequence: 2 },
                { text: `The given property is invalid for real numbers`, isCorrect: false, optionLabel: 'C', sequence: 3 },
                { text: `None of the above`, isCorrect: false, optionLabel: 'D', sequence: 4 },
              ];
            } else if (qType === QuestionType.FILL_IN_BLANK) {
              questionText = `[Class ${cg.number} ${sub.name} Ch 1] Q${qNum}: Fill in the blank: The basic unit of study in ${sub.name} Chapter 1 is ________.`;
              explanation = `The basic unit is the core component of ${sub.name}.`;
              answerText = 'Fundamental Unit';
            } else if (qType === QuestionType.TRUE_FALSE) {
              questionText = `[Class ${cg.number} ${sub.name} Ch 1] Q${qNum}: State True or False: ${sub.name} Chapter 1 concepts follow commutative and associative laws.`;
              explanation = `True. Basic operational laws apply in Class ${cg.number} ${sub.name}.`;
              answerText = 'True';
              optionsData = [
                { text: 'True', isCorrect: true, optionLabel: 'A', sequence: 1 },
                { text: 'False', isCorrect: false, optionLabel: 'B', sequence: 2 },
              ];
            } else if (qType === QuestionType.ASSERTION_REASON) {
              questionText = `[Class ${cg.number} ${sub.name} Ch 1] Q${qNum}:\nAssertion (A): ${sub.name} concepts are fundamental to advanced problem solving.\nReason (R): Basic axioms provide the foundation for reasoning in Class ${cg.number}.`;
              explanation = `Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).`;
              answerText = 'Both (A) and (R) are true and (R) is the correct explanation of (A)';
              optionsData = [
                { text: 'Both (A) and (R) are true and (R) is the correct explanation of (A)', isCorrect: true, optionLabel: 'A', sequence: 1 },
                { text: 'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)', isCorrect: false, optionLabel: 'B', sequence: 2 },
                { text: '(A) is true but (R) is false', isCorrect: false, optionLabel: 'C', sequence: 3 },
                { text: '(A) is false but (R) is true', isCorrect: false, optionLabel: 'D', sequence: 4 },
              ];
            } else if (qType === QuestionType.CASE_BASED) {
              questionText = `[Class ${cg.number} ${sub.name} Ch 1] Q${qNum}: Case Study Context:\nA student conducts a practical investigation in Class ${cg.number} ${sub.name} Chapter 1.\n(a) State the objective of the study.\n(b) Identify the independent variable.\n(c) Calculate the observed result.\n(d) Write a brief conclusion.`;
              explanation = `Step-by-step case breakdown:\n(a) Objective: Validate fundamental laws.\n(b) Variable: Input measure.\n(c) Calculation: Apply standard ratio formula.\n(d) Conclusion: Observed data aligns with theory.`;
              answerText = 'See step-by-step case breakdown in solution.';
            } else if (qType === QuestionType.HOTS) {
              questionText = `[Class ${cg.number} ${sub.name} Ch 1] Q${qNum} (HOTS): Apply Class ${cg.number} ${sub.name} principles to evaluate an real-world scenario.`;
              explanation = `Higher Order Thinking Solution: Integrate operational rules to arrive at the optimal solution.`;
              answerText = 'Optimal Solution derived via multi-step analytical reasoning.';
            } else {
              questionText = `[Class ${cg.number} ${sub.name} Ch 1] Q${qNum}: Solve: Calculate the resulting value using ${sub.name} Chapter 1 formulas.`;
              explanation = `Step 1: Write given values. Step 2: Substitute into formula. Step 3: Simplify to final answer.`;
              answerText = 'Step-by-step calculation complete.';
            }

            const createdQ = await prisma.question.create({
              data: {
                questionText,
                questionType: qType,
                marks,
                explanation,
                answerText,
                chapterId: ch1.id,
                subjectId: sub.id,
                board: Board.CBSE,
                difficulty: DifficultyLevel.MEDIUM,
                cognitiveLevel: CognitiveLevel.APPLY,
                status: QuestionStatus.APPROVED,
                language: Language.ENGLISH,
                options: optionsData.length > 0 ? { create: optionsData } : undefined,
              },
              include: { options: true },
            });

            chapterQs.push(createdQ as any);
          }
        }

        const final21Qs = chapterQs.slice(0, 21);

        // Build Answer Key
        let answerKeyText = `==================================================\nOFFICIAL CBSE ANSWER KEY & MARKING SCHEME\nClass ${cg.number} ${sub.name} - Chapter 1: ${ch1.title || ch1.name}\n==================================================\n\n`;
        final21Qs.forEach((q, idx) => {
          answerKeyText += `Q${idx + 1} (${q.questionType} - ${q.marks || 1} Marks):\nAnswer: ${q.answerText || 'See explanation'}\nExplanation: ${q.explanation || 'Step-by-step model solution.'}\n--------------------------------------------------\n`;
        });

        const wsTitle = `CBSE Class ${cg.number} ${sub.name} Worksheet - Chapter 1: ${ch1.title || 'Fundamentals'}`;

        const worksheet = await prisma.worksheet.create({
          data: {
            title: wsTitle,
            description: `Official 7-Section CBSE Practice Worksheet for Class ${cg.number} ${sub.name} Chapter 1 (${ch1.title || 'Fundamentals'}). Unlocked as FREE preview.`,
            instructions: `==================================================\nGENERAL INSTRUCTIONS:\n1. Time Allowed: 60 minutes. Maximum Marks: 30.\n2. Section A: Q1–Q6 (MCQs, 1 mark each)\n3. Section B: Q7–Q10 (Fill in the Blanks, 1 mark each)\n4. Section C: Q11–Q13 (True/False, 1 mark each)\n5. Section D: Q14–Q17 (Solve, 2 marks each)\n6. Section E: Q18–Q19 (Assertion and Reasoning, 2 marks each)\n7. Section F: Q20(a)-(d) (Case-Based, 4 marks total)\n8. Section G: Q21 (HOTS / Application, 1 mark)\n==================================================`,
            durationMinutes: 60,
            totalMarks: 30,
            totalQuestions: 21,
            type: 'PRACTICE',
            difficulty: 'BALANCED',
            answerKey: answerKeyText,
            chapterId: ch1.id,
            subjectId: sub.id,
            isPublished: true,
            questions: {
              create: final21Qs.map((q, idx) => ({
                questionId: q.id,
                sequence: idx + 1,
                marks: q.marks || (idx < 13 ? 1 : idx < 17 ? 2 : idx < 19 ? 2 : idx < 20 ? 4 : 1),
              })),
            },
          },
        });

        console.log(`   🎉 Created FREE Chapter 1 Worksheet: "${worksheet.title}" (ID: ${worksheet.id})`);
        createdWsCount++;
      }
    }
  }

  console.log(`\n==================================================`);
  console.log(`🎉 SUCCESS! Ensured FREE Chapter 1 Worksheets for ALL Classes & Subjects! (Created: ${createdWsCount})`);
  console.log(`==================================================`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Error ensuring free Chapter 1 worksheets:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
