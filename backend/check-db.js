const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

async function check() {
  const questions = await p.$queryRawUnsafe('SELECT COUNT(*) as cnt FROM "Question"');
  const chapters = await p.$queryRawUnsafe('SELECT COUNT(*) as cnt FROM "Chapter"');
  const studyNotes = await p.$queryRawUnsafe('SELECT COUNT(*) as cnt FROM "StudyNote"');
  const subjects = await p.$queryRawUnsafe('SELECT COUNT(*) as cnt FROM "Subject"');
  const classes = await p.$queryRawUnsafe('SELECT COUNT(*) as cnt FROM "ClassGrade"');
  const chaptersWithQs = await p.$queryRawUnsafe(
    'SELECT COUNT(DISTINCT "chapterId") as cnt FROM "Question"'
  );

  console.log('📊 Supabase Database Status:');
  console.log('  Classes:    ', classes[0].cnt.toString());
  console.log('  Subjects:   ', subjects[0].cnt.toString());
  console.log('  Chapters:   ', chapters[0].cnt.toString());
  console.log('  Study Notes:', studyNotes[0].cnt.toString());
  console.log('  Questions:  ', questions[0].cnt.toString());
  console.log('  Chapters with questions:', chaptersWithQs[0].cnt.toString(), '/', chapters[0].cnt.toString());

  const expectedPerChapter = 7; // AR + FB + TF + CS + SA + DIAG + custom MCQs
  const totalChapters = parseInt(chapters[0].cnt.toString());
  const totalQs = parseInt(questions[0].cnt.toString());
  console.log(`\n  Expected ~${totalChapters * expectedPerChapter}+ questions, have ${totalQs}`);
  
  if (parseInt(chaptersWithQs[0].cnt.toString()) === totalChapters) {
    console.log('\n✅ ALL chapters have questions! Seed is COMPLETE.');
  } else {
    console.log(`\n⚠️  ${totalChapters - parseInt(chaptersWithQs[0].cnt.toString())} chapters still missing questions.`);
  }

  await p.$disconnect();
}

check().catch(e => { console.log('❌', e.message); p.$disconnect(); });
