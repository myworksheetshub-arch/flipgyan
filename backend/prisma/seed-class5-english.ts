import { PrismaClient } from '@prisma/client';
import { ch1TheSentenceAndItsTypesData } from './data/class-5/english/ch1-the-sentence-and-its-types';
import { ch2NounsData } from './data/class-5/english/ch2-nouns';
import { ch3PronounsData } from './data/class-5/english/ch3-pronouns';
import { ch4AdjectivesData } from './data/class-5/english/ch4-adjectives';
import { ch5VerbsData } from './data/class-5/english/ch5-verbs';
import { ch6TensesData } from './data/class-5/english/ch6-tenses';
import { ch7AdverbsData } from './data/class-5/english/ch7-adverbs';
import { ch8PrepositionsData } from './data/class-5/english/ch8-prepositions';
import { ch9ConjunctionsData } from './data/class-5/english/ch9-conjunctions';
import { ch10ArticlesData } from './data/class-5/english/ch10-articles';
import { ch11PunctuationAndCapitalizationData } from './data/class-5/english/ch11-punctuation-and-capitalization';
import { ch12VocabularyAndFunctionalWritingData } from './data/class-5/english/ch12-vocabulary-and-functional-writing';

const prisma = new PrismaClient();

const class5EnglishChapters = [
  ch1TheSentenceAndItsTypesData,
  ch2NounsData,
  ch3PronounsData,
  ch4AdjectivesData,
  ch5VerbsData,
  ch6TensesData,
  ch7AdverbsData,
  ch8PrepositionsData,
  ch9ConjunctionsData,
  ch10ArticlesData,
  ch11PunctuationAndCapitalizationData,
  ch12VocabularyAndFunctionalWritingData,
];

async function seedClass5English() {
  console.log('🌱 Starting CBSE Class 5 English Grammar & Composition Seed...');

  let class5 = await prisma.classGrade.findUnique({ where: { number: 5 } });
  if (!class5) {
    class5 = await prisma.classGrade.create({
      data: { name: 'Class 5', number: 5, order: 5, description: 'CBSE Class 5 Primary Stage' },
    });
  }

  let englishSubject = await prisma.subject.findFirst({
    where: { classGradeId: class5.id, name: 'English' },
  });

  if (!englishSubject) {
    englishSubject = await prisma.subject.create({
      data: {
        name: 'English',
        code: 'ENG-5',
        icon: 'BookOpen',
        color: '#10B981',
        classGradeId: class5.id,
      },
    });
  }

  console.log(`✅ Class 5 English Subject ID: ${englishSubject.id}`);

  for (const chData of class5EnglishChapters) {
    let chapter = await prisma.chapter.findFirst({
      where: { subjectId: englishSubject.id, chapterNumber: chData.chapterNumber },
    });

    if (!chapter) {
      chapter = await prisma.chapter.create({
        data: {
          chapterNumber: chData.chapterNumber,
          title: chData.title,
          description: chData.description,
          subjectId: englishSubject.id,
        },
      });
    } else {
      chapter = await prisma.chapter.update({
        where: { id: chapter.id },
        data: { title: chData.title, description: chData.description },
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

    // Create Questions
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
            answerText: (q as any).answerText || null,
            chapterId: chapter.id,
            options: q.options
              ? {
                  create: q.options.map((opt, oIdx) => ({
                    text: opt.text,
                    isCorrect: opt.isCorrect,
                    optionLabel: String.fromCharCode(65 + oIdx),
                    sequence: oIdx + 1,
                  })),
                }
              : undefined,
          },
        });
      }
    }

    // Create Study Notes
    const existingNote = await prisma.studyNote.findFirst({ where: { chapterId: chapter.id } });
    if (!existingNote) {
      await prisma.studyNote.create({
        data: {
          title: `Class 5 English Chapter ${chData.chapterNumber}: ${chData.title} Notes`,
          summary: chData.description,
          keyConcepts: JSON.stringify(chData.topics.map((t) => t.title)),
          definitions: JSON.stringify([{ term: 'Core Concept', meaning: chData.description }]),
          examples: JSON.stringify([
            {
              title: 'Grammar Example 1',
              problem: chData.questions[0]?.questionText || 'Practice exercise',
              solution: chData.questions[0]?.explanation || 'Detailed grammar rule explanation',
            },
          ]),
          importantPoints: JSON.stringify([
            'Apply grammar rules in spoken and written English.',
            'Master sentence construction, vocabulary, and punctuation.',
          ]),
          chapterId: chapter.id,
        },
      });
    }

    // Create Worksheets
    const existingWs = await prisma.worksheet.findFirst({ where: { chapterId: chapter.id } });
    if (!existingWs) {
      await prisma.worksheet.create({
        data: {
          title: `Class 5 English Ch ${chData.chapterNumber} ${chData.title} Practice Worksheet`,
          description: `CBSE English grammar worksheet for ${chData.title}.`,
          type: 'PRACTICE',
          difficulty: 'MEDIUM',
          durationMinutes: 30,
          totalMarks: 15,
          totalQuestions: 5,
          chapterId: chapter.id,
          subjectId: englishSubject.id,
          instructions: 'Read each question carefully and select or write the correct answer.',
          answerKey: `Official Answer Key & Solution Guide for ${chData.title}.`,
          isPublished: true,
        },
      });
    }

    // Create Quizzes
    const existingQuiz = await prisma.quiz.findFirst({ where: { chapterId: chapter.id } });
    if (!existingQuiz) {
      await prisma.quiz.create({
        data: {
          title: `Class 5 English Ch ${chData.chapterNumber}: ${chData.title} Grammar Quiz`,
          description: `Interactive test for ${chData.title} with instant XP rewards.`,
          durationMinutes: 15,
          totalMarks: 10,
          passMarks: 5,
          difficulty: 'MEDIUM',
          chapterId: chapter.id,
          subjectId: englishSubject.id,
          isPublished: true,
        },
      });
    }
  }

  console.log('🎉 CBSE Class 5 English Grammar & Composition 12 Chapters Seeded Successfully!');
}

seedClass5English()
  .catch((e) => {
    console.error('Error seeding Class 5 English:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
