import { PrismaClient, QuestionType, Board, DifficultyLevel, CognitiveLevel, QuestionStatus, Language } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🎯 Reseeding Class 7 Mathematics Chapter 1 (Integers) with EXACT 7-SECTION Question Types...');

  // Find Class 7
  const class7 = await prisma.classGrade.findUnique({ where: { number: 7 } });
  if (!class7) throw new Error('Class 7 not found in database');

  // Find Class 7 Mathematics Subject
  let mathSubject = await prisma.subject.findFirst({
    where: {
      classGradeId: class7.id,
      name: { contains: 'Math', mode: 'insensitive' },
    },
  });

  if (!mathSubject) {
    mathSubject = await prisma.subject.findFirst({
      where: { name: { contains: 'Math', mode: 'insensitive' } },
    });
  }

  if (!mathSubject) throw new Error('Mathematics subject not found');

  // Find Chapter 1 Integers
  let ch1 = await prisma.chapter.findFirst({
    where: {
      subjectId: mathSubject.id,
      OR: [
        { chapterNumber: 1 },
        { chapterNo: 1 },
        { title: { contains: 'Integer', mode: 'insensitive' } },
      ],
    },
  });

  if (!ch1) {
    ch1 = await prisma.chapter.create({
      data: {
        subjectId: mathSubject.id,
        name: 'Chapter 1',
        title: 'Integers',
        chapterNo: 1,
        chapterNumber: 1,
        description: 'Properties of Integers, Addition, Subtraction, Multiplication and Division of Integers.',
      },
    });
  } else {
    await prisma.chapter.update({
      where: { id: ch1.id },
      data: { title: 'Integers', chapterNo: 1, chapterNumber: 1 },
    });
  }

  console.log(`📌 Target Chapter: ${ch1.title} (ID: ${ch1.id}, Subject: ${mathSubject.name})`);

  // Delete existing questions & worksheets for this chapter to ensure clean state
  const existingWs = await prisma.worksheet.findMany({ where: { chapterId: ch1.id } });
  const existingWsIds = existingWs.map((w) => w.id);

  if (existingWsIds.length > 0) {
    await prisma.worksheetAttempt.deleteMany({ where: { worksheetId: { in: existingWsIds } } });
    await prisma.worksheetQuestion.deleteMany({ where: { worksheetId: { in: existingWsIds } } });
    await prisma.worksheet.deleteMany({ where: { id: { in: existingWsIds } } });
  }

  await prisma.question.deleteMany({ where: { chapterId: ch1.id } });

  console.log('✨ Creating 21 authentic Class 7 Integers questions matching Sections A through G...');

  // Definition of 21 Questions for Class 7 Integers matching CBSE Sections A-G
  const questionsData = [
    // --- SECTION A: MCQs (Q1–Q6 | 1 Mark Each) ---
    {
      seq: 1,
      type: QuestionType.MCQ,
      marks: 1,
      text: 'Q1. What is the value of (-14) + 28 - (-16)?',
      explanation: '(-14) + 28 - (-16) = -14 + 28 + 16 = 14 + 16 = 30.',
      answer: '30',
      options: [
        { text: '14', isCorrect: false, optionLabel: 'A', sequence: 1 },
        { text: '30', isCorrect: true, optionLabel: 'B', sequence: 2 },
        { text: '-30', isCorrect: false, optionLabel: 'C', sequence: 3 },
        { text: '0', isCorrect: false, optionLabel: 'D', sequence: 4 },
      ],
    },
    {
      seq: 2,
      type: QuestionType.MCQ,
      marks: 1,
      text: 'Q2. Which property of integer multiplication states that a × (b + c) = (a × b) + (a × c)?',
      explanation: 'Distributive property of multiplication over addition.',
      answer: 'Distributive Property',
      options: [
        { text: 'Commutative Property', isCorrect: false, optionLabel: 'A', sequence: 1 },
        { text: 'Associative Property', isCorrect: false, optionLabel: 'B', sequence: 2 },
        { text: 'Distributive Property', isCorrect: true, optionLabel: 'C', sequence: 3 },
        { text: 'Closure Property', isCorrect: false, optionLabel: 'D', sequence: 4 },
      ],
    },
    {
      seq: 3,
      type: QuestionType.MCQ,
      marks: 1,
      text: 'Q3. If the product of two integers is -72 and one of them is 9, what is the other integer?',
      explanation: 'Other integer = (-72) ÷ 9 = -8.',
      answer: '-8',
      options: [
        { text: '8', isCorrect: false, optionLabel: 'A', sequence: 1 },
        { text: '-8', isCorrect: true, optionLabel: 'B', sequence: 2 },
        { text: '-63', isCorrect: false, optionLabel: 'C', sequence: 3 },
        { text: '81', isCorrect: false, optionLabel: 'D', sequence: 4 },
      ],
    },
    {
      seq: 4,
      type: QuestionType.MCQ,
      marks: 1,
      text: 'Q4. What is the additive inverse of (-35)?',
      explanation: 'The additive inverse of -a is +a, so additive inverse of -35 is +35.',
      answer: '35',
      options: [
        { text: '-35', isCorrect: false, optionLabel: 'A', sequence: 1 },
        { text: '35', isCorrect: true, optionLabel: 'B', sequence: 2 },
        { text: '0', isCorrect: false, optionLabel: 'C', sequence: 3 },
        { text: '1', isCorrect: false, optionLabel: 'D', sequence: 4 },
      ],
    },
    {
      seq: 5,
      type: QuestionType.MCQ,
      marks: 1,
      text: 'Q5. The value of (-1) × (-1) × (-1) × (-1) × (-1) (5 times) is equal to:',
      explanation: 'Multiplying (-1) an odd number of times yields -1.',
      answer: '-1',
      options: [
        { text: '1', isCorrect: false, optionLabel: 'A', sequence: 1 },
        { text: '-1', isCorrect: true, optionLabel: 'B', sequence: 2 },
        { text: '5', isCorrect: false, optionLabel: 'C', sequence: 3 },
        { text: '-5', isCorrect: false, optionLabel: 'D', sequence: 4 },
      ],
    },
    {
      seq: 6,
      type: QuestionType.MCQ,
      marks: 1,
      text: 'Q6. Evaluate: (-48) ÷ [(-12) ÷ (-3)]',
      explanation: 'First evaluate inside brackets: (-12) ÷ (-3) = 4. Then (-48) ÷ 4 = -12.',
      answer: '-12',
      options: [
        { text: '12', isCorrect: false, optionLabel: 'A', sequence: 1 },
        { text: '-12', isCorrect: true, optionLabel: 'B', sequence: 2 },
        { text: '-4', isCorrect: false, optionLabel: 'C', sequence: 3 },
        { text: '4', isCorrect: false, optionLabel: 'D', sequence: 4 },
      ],
    },

    // --- SECTION B: Fill in the Blanks (Q7–Q10 | 1 Mark Each) ---
    {
      seq: 7,
      type: QuestionType.FILL_IN_BLANK,
      marks: 1,
      text: 'Q7. Fill in the blank: (-18) + _____ = 0.',
      explanation: 'The sum of an integer and its additive inverse is 0. (-18) + 18 = 0.',
      answer: '18',
      options: [],
    },
    {
      seq: 8,
      type: QuestionType.FILL_IN_BLANK,
      marks: 1,
      text: 'Q8. Fill in the blank: When an integer is divided by _____, the quotient is the integer itself.',
      explanation: 'Any integer a divided by 1 is a (a ÷ 1 = a).',
      answer: '1',
      options: [],
    },
    {
      seq: 9,
      type: QuestionType.FILL_IN_BLANK,
      marks: 1,
      text: 'Q9. Fill in the blank: (-25) × [(-4) + (-6)] = [(-25) × (-4)] + [(-25) × _____].',
      explanation: 'By Distributive Property, a × (b + c) = (a × b) + (a × c). Here c = -6.',
      answer: '-6',
      options: [],
    },
    {
      seq: 10,
      type: QuestionType.FILL_IN_BLANK,
      marks: 1,
      text: 'Q10. Fill in the blank: The product of a negative integer and a positive integer is always a _____ integer.',
      explanation: 'A negative times a positive gives a negative result.',
      answer: 'negative',
      options: [],
    },

    // --- SECTION C: True / False (Q11–Q13 | 1 Mark Each) ---
    {
      seq: 11,
      type: QuestionType.TRUE_FALSE,
      marks: 1,
      text: 'Q11. State True or False: Division of integers is commutative. That is, a ÷ b = b ÷ a for all integers a and b.',
      explanation: 'False. For example, 10 ÷ 2 = 5, but 2 ÷ 10 = 0.2. Hence division is NOT commutative for integers.',
      answer: 'False',
      options: [
        { text: 'True', isCorrect: false, optionLabel: 'A', sequence: 1 },
        { text: 'False', isCorrect: true, optionLabel: 'B', sequence: 2 },
      ],
    },
    {
      seq: 12,
      type: QuestionType.TRUE_FALSE,
      marks: 1,
      text: 'Q12. State True or False: The sum of two negative integers is always a negative integer.',
      explanation: 'True. Adding two negative numbers (e.g., -5 + (-3) = -8) always yields a negative sum.',
      answer: 'True',
      options: [
        { text: 'True', isCorrect: true, optionLabel: 'A', sequence: 1 },
        { text: 'False', isCorrect: false, optionLabel: 'B', sequence: 2 },
      ],
    },
    {
      seq: 13,
      type: QuestionType.TRUE_FALSE,
      marks: 1,
      text: 'Q13. State True or False: Zero is neither a positive integer nor a negative integer.',
      explanation: 'True. Zero (0) is a neutral integer separating positive and negative integers.',
      answer: 'True',
      options: [
        { text: 'True', isCorrect: true, optionLabel: 'A', sequence: 1 },
        { text: 'False', isCorrect: false, optionLabel: 'B', sequence: 2 },
      ],
    },

    // --- SECTION D: Solve (Q14–Q17 | 2 Marks Each) ---
    {
      seq: 14,
      type: QuestionType.SHORT_ANSWER,
      marks: 2,
      text: 'Q14. Solve step-by-step: Evaluate using suitable properties: (-125) × 37 × (-8).',
      explanation: 'Step 1: Rearrange using associative property: [(-125) × (-8)] × 37.\nStep 2: (-125) × (-8) = 1000.\nStep 3: 1000 × 37 = 37000.',
      answer: '37000',
      options: [],
    },
    {
      seq: 15,
      type: QuestionType.SHORT_ANSWER,
      marks: 2,
      text: 'Q15. Solve step-by-step: At 12 noon, the temperature at a hill station was 10°C above zero. If it decreases at the rate of 2°C per hour until midnight, at what time will the temperature be 8°C below zero?',
      explanation: 'Step 1: Initial temp = +10°C. Target temp = -8°C.\nStep 2: Total temp drop = 10 - (-8) = 18°C.\nStep 3: Rate of drop = 2°C per hour.\nStep 4: Time taken = 18 ÷ 2 = 9 hours.\nStep 5: 12 noon + 9 hours = 9:00 PM.',
      answer: '9:00 PM',
      options: [],
    },
    {
      seq: 16,
      type: QuestionType.SHORT_ANSWER,
      marks: 2,
      text: 'Q16. Solve step-by-step: In a test, (+4) marks are given for every correct answer and (-2) marks for every incorrect answer. Rohit answered 15 questions correctly and scored 42 marks in total. How many incorrect answers did Rohit attempt?',
      explanation: 'Step 1: Marks for correct answers = 15 × 4 = 60.\nStep 2: Total score = 60 + (marks for incorrect) = 42.\nStep 3: Marks for incorrect = 42 - 60 = -18.\nStep 4: Number of incorrect answers = (-18) ÷ (-2) = 9.',
      answer: '9 incorrect answers',
      options: [],
    },
    {
      seq: 17,
      type: QuestionType.SHORT_ANSWER,
      marks: 2,
      text: 'Q17. Solve step-by-step: Find the value of: [(-36) ÷ 12] ÷ 3 and compare it with (-36) ÷ [12 ÷ 3]. Are they equal?',
      explanation: 'Part 1: [(-36) ÷ 12] ÷ 3 = (-3) ÷ 3 = -1.\nPart 2: (-36) ÷ [12 ÷ 3] = (-36) ÷ 4 = -9.\nSince -1 ≠ -9, they are NOT equal.',
      answer: '-1 and -9 (Not equal)',
      options: [],
    },

    // --- SECTION E: Assertion & Reasoning (Q18–Q19 | 2 Marks Each) ---
    {
      seq: 18,
      type: QuestionType.ASSERTION_REASON,
      marks: 2,
      text: 'Q18. Read Assertion (A) and Reason (R):\nAssertion (A): The product of (-15) and (-4) is +60.\nReason (R): The product of two negative integers is always a positive integer.',
      explanation: 'Assertion (A) is true because (-15) × (-4) = +60. Reason (R) is true and correctly explains why the product is positive. Choice A is correct.',
      answer: 'Both (A) and (R) are true and (R) is the correct explanation of (A)',
      options: [
        { text: 'Both (A) and (R) are true and (R) is the correct explanation of (A)', isCorrect: true, optionLabel: 'A', sequence: 1 },
        { text: 'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)', isCorrect: false, optionLabel: 'B', sequence: 2 },
        { text: '(A) is true but (R) is false', isCorrect: false, optionLabel: 'C', sequence: 3 },
        { text: '(A) is false but (R) is true', isCorrect: false, optionLabel: 'D', sequence: 4 },
      ],
    },
    {
      seq: 19,
      type: QuestionType.ASSERTION_REASON,
      marks: 2,
      text: 'Q19. Read Assertion (A) and Reason (R):\nAssertion (A): For any integer a, a ÷ 0 is equal to 0.\nReason (R): Division of any integer by zero is undefined.',
      explanation: 'Assertion (A) is FALSE because dividing by zero is undefined, not 0. Reason (R) is TRUE. Choice D is correct.',
      answer: '(A) is false but (R) is true',
      options: [
        { text: 'Both (A) and (R) are true and (R) is the correct explanation of (A)', isCorrect: false, optionLabel: 'A', sequence: 1 },
        { text: 'Both (A) and (R) are true but (R) is NOT the correct explanation of (A)', isCorrect: false, optionLabel: 'B', sequence: 2 },
        { text: '(A) is true but (R) is false', isCorrect: false, optionLabel: 'C', sequence: 3 },
        { text: '(A) is false but (R) is true', isCorrect: true, optionLabel: 'D', sequence: 4 },
      ],
    },

    // --- SECTION F: Case-Based Question (Q20 | 4 Marks Total) ---
    {
      seq: 20,
      type: QuestionType.CASE_BASED,
      marks: 4,
      text: `Q20. Case-Based Practical Scenario: Submarine & Mine Shaft Operations
An elevator descends into a mine shaft at the rate of 6 meters per minute. The descent starts from 10 meters above the ground level.

Based on the scenario above, answer the following sub-questions:
(a) What will be the position of the elevator after 45 minutes relative to ground level? (1 Mark)
(b) How long will it take to reach a depth of -350 meters below ground level? (1 Mark)
(c) If a submarine is hovering at -250 meters below sea level and descends another 120 meters, what is its new depth? (1 Mark)
(d) Calculate the elevation difference between a mountain peak at +3,400 meters and the submarine at -370 meters. (1 Mark)`,
      explanation: `Step-by-step Case Solutions:
(a) Distance descended in 45 mins = 45 × (-6) = -270 m. Initial position = +10 m. Final position = 10 + (-270) = -260 m (260 meters below ground level).
(b) Target depth = -350 m. Total distance to descend = +10 - (-350) = 360 m. Time required = 360 ÷ 6 = 60 minutes (1 hour).
(c) Initial depth = -250 m. Further descent = -120 m. New depth = (-250) + (-120) = -370 meters below sea level.
(d) Elevation difference = (+3400) - (-370) = 3400 + 370 = 3,770 meters.`,
      answer: '(a) -260 m  (b) 60 minutes (1 hour)  (c) -370 m  (d) 3,770 m',
      options: [],
    },

    // --- SECTION G: HOTS / Application (Q21 | 1 Mark) ---
    {
      seq: 21,
      type: QuestionType.HOTS,
      marks: 1,
      text: 'Q21 (HOTS / Application): A green frog is sitting at the bottom of a 30-step staircase (Step 0). In every jump, it moves 5 steps UP during the day, but slips down 2 steps during the night. On which day will the frog reach the 30th step?',
      explanation: 'Net progress per full day-night cycle = 5 - 2 = 3 steps.\nOn the 9th day evening, the frog starts at 9 × 3 = 27 steps.\nOn the 9th day morning, starting from step 24: Day 1 to 8 net = 8 × 3 = 24 steps.\nOn Day 9 daytime, it jumps 5 steps UP: 24 + 5 = 29 steps.\nOn Day 9 night, it slips to 27 steps.\nOn Day 10 daytime, it jumps 5 steps UP from step 27: 27 + 5 = 32 steps (reaching/surpassing step 30).\nOnce it reaches step 30, it does not slip back down.\nHence, it reaches the 30th step on the 10th day.',
      answer: '10th Day',
      options: [],
    },
  ];

  // Insert Questions & Options
  const createdQuestionRecords = [];

  for (const q of questionsData) {
    const createdQ = await prisma.question.create({
      data: {
        questionText: q.text,
        questionType: q.type,
        marks: q.marks,
        explanation: q.explanation,
        answerText: q.answer,
        chapterId: ch1.id,
        subjectId: mathSubject.id,
        board: Board.CBSE,
        difficulty: DifficultyLevel.MEDIUM,
        cognitiveLevel: CognitiveLevel.APPLY,
        status: QuestionStatus.APPROVED,
        language: Language.ENGLISH,
        options: q.options.length > 0 ? { create: q.options } : undefined,
      },
    });

    createdQuestionRecords.push(createdQ);
  }

  console.log(`✅ Created ${createdQuestionRecords.length} questions in sequence.`);

  // Create Answer Key Text
  let answerKeyText = `==================================================
OFFICIAL CBSE ANSWER KEY & MARKING SCHEME
Class 7 Mathematics - Chapter 1: Integers
Time: 60 Mins | Total Marks: 30 | Total Questions: 21
==================================================\n\n`;

  questionsData.forEach((q, idx) => {
    answerKeyText += `Q${idx + 1} (${q.type} | ${q.marks} Mark${q.marks > 1 ? 's' : ''}):\n`;
    answerKeyText += `Answer: ${q.answer}\n`;
    answerKeyText += `Step-by-step Solution: ${q.explanation}\n`;
    answerKeyText += `--------------------------------------------------\n`;
  });

  const instructions = `==================================================
GENERAL INSTRUCTIONS:
1. Read all questions carefully before answering.
2. Time Allowed: 60 minutes. Maximum Marks: 30.
3. Section A: Q1–Q6 (MCQs, 1 mark each)
4. Section B: Q7–Q10 (Fill in the Blanks, 1 mark each)
5. Section C: Q11–Q13 (True/False, 1 mark each)
6. Section D: Q14–Q17 (Solve, 2 marks each)
7. Section E: Q18–Q19 (Assertion and Reasoning, 2 marks each)
8. Section F: Q20(a)-(d) (Case-Based, 4 marks total)
9. Section G: Q21 (HOTS / Application, 1 mark)
==================================================`;

  const worksheetTitle = 'CBSE Class 7 Mathematics Worksheet - Chapter 1: Integers';

  const worksheet = await prisma.worksheet.create({
    data: {
      title: worksheetTitle,
      description: 'Standardized CBSE Class 7 Mathematics Chapter 1 Integers Practice Worksheet with 21 questions structured into Sections A through G.',
      instructions: instructions,
      durationMinutes: 60,
      totalMarks: 30,
      totalQuestions: 21,
      type: 'PRACTICE',
      difficulty: 'BALANCED',
      answerKey: answerKeyText,
      chapterId: ch1.id,
      subjectId: mathSubject.id,
      isPublished: true,
      questions: {
        create: createdQuestionRecords.map((q, idx) => ({
          questionId: q.id,
          sequence: idx + 1,
          marks: q.marks,
        })),
      },
    },
  });

  console.log(`🎉 SUCCESS! Re-created Class 7 Math Chapter 1 Worksheet (ID: ${worksheet.id}) with 21 questions strictly ordered by section!`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Error reseeding Class 7 Math Chapter 1:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
