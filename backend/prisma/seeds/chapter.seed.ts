import { PrismaClient } from '@prisma/client';

export async function seedChapters(prisma: PrismaClient, subjects: any[], chapterList: any[]) {
  console.log('📖 Seeding Chapters & Study Notes...');
  const chapters = [];

  for (const item of chapterList) {
    const subject = subjects.find((s) => s.code === item.subjectCode);
    if (!subject) continue;

    let chapter = await prisma.chapter.findFirst({
      where: { subjectId: subject.id, chapterNumber: item.chapterNumber },
    });

    if (!chapter) {
      chapter = await prisma.chapter.create({
        data: {
          subjectId: subject.id,
          chapterNumber: item.chapterNumber,
          title: item.chapterTitle,
          description: item.summary,
        },
      });
    }

    const existingNote = await prisma.studyNote.findFirst({
      where: { chapterId: chapter.id },
    });

    let formattedMindMap: any = {
      topic: item.chapterTitle || 'Integers',
      children: [
        { topic: 'Types', children: [{ topic: 'Positive Integers (> 0)' }, { topic: 'Negative Integers (< 0)' }, { topic: 'Zero (Neutral)' }] },
        { topic: 'Number Line', children: [{ topic: 'Right → Increasing' }, { topic: 'Left → Decreasing' }, { topic: 'Additive Inverses (-a)' }] },
        { topic: 'Operations & Sign Rules', children: [{ topic: '(+) × (+) = (+)' }, { topic: '(-) × (-) = (+)' }, { topic: '(+) × (-) = (-)' }] },
        { topic: 'Properties of Integers', children: [{ topic: 'Closure: a + b ∈ ℤ' }, { topic: 'Commutative: a + b = b + a' }, { topic: 'Distributive: a × (b + c) = a×b + a×c' }] },
        { topic: 'Real-Life Applications', children: [{ topic: 'Temperature (Below 0°C)' }, { topic: 'Bank Balance (Credit/Debit)' }, { topic: 'Elevation (Sea Level)' }] },
      ],
    };

    let extractedKeyConcepts: string[] = [];
    let extractedDefinitions: Array<{ term: string; meaning: string }> = [];
    let extractedExamples: Array<{ title: string; problem: string; solution: string }> = [];
    let extractedImportantPoints: string[] = [];
    let extractedDeepDive = item.contentMarkdown || '';

    if (Array.isArray(item.mindMapNodes) && item.mindMapNodes[0]?.subject?.chapter?.sections) {
      const sections = item.mindMapNodes[0].subject.chapter.sections;

      // Overview
      const ovSec = sections.find((s: any) => s.section_type === 'overview');
      if (ovSec && ovSec.content?.key_ideas) {
        extractedKeyConcepts = ovSec.content.key_ideas;
      }

      // Visual Mind Map
      const mmSection = sections.find((s: any) => s.section_type === 'visual_mind_map');
      if (mmSection && mmSection.mind_map) {
        const mm = mmSection.mind_map;
        formattedMindMap = {
          topic: mm.central_topic || item.chapterTitle || 'INTEGERS',
          children: (mm.branches || []).map((b: any) => ({
            topic: b.title,
            children: (b.items || []).map((i: string) => ({ topic: i })),
          })),
        };
      }

      // Deep Dive Theory
      const ddSec = sections.find((s: any) => s.section_type === 'deep_dive_theory');
      if (ddSec && ddSec.topics) {
        let md = `# ${item.chapterTitle}: Deep Dive Theory & Properties\n\n`;
        ddSec.topics.forEach((t: any) => {
          md += `### ${t.topic}\n`;
          if (t.rules) {
            t.rules.forEach((r: string) => { md += `- **Rule**: ${r}\n`; });
          }
          if (t.rule) md += `- **Rule**: ${t.rule}\n`;
          if (t.formula) md += `- **Formula**: $${t.formula}$\n`;
          if (t.example) md += `- **Example**: ${t.example}\n`;
          if (t.examples) {
            t.examples.forEach((ex: string) => { md += `- **Example**: ${ex}\n`; });
          }
          if (t.properties) {
            t.properties.forEach((p: any) => {
              md += `- **${p.name}**: ${p.statement}\n`;
              extractedDefinitions.push({ term: p.name, meaning: p.statement });
            });
          }
          md += `\n`;
        });
        extractedDeepDive = md;
      }

      // Solved Examples
      const exSec = sections.find((s: any) => s.section_type === 'solved_examples');
      if (exSec && exSec.examples) {
        extractedExamples = exSec.examples.map((ex: any, idx: number) => ({
          title: ex.title || `Solved Example ${idx + 1}`,
          problem: ex.problem || ex.question,
          solution: ex.solution || (Array.isArray(ex.solution_steps) ? `${ex.solution_steps.join('\n')}\nFinal Answer: ${ex.answer || ''}` : ex.answer),
        }));
      }

      // Practice Quizzes & Sample Questions
      const pqSec = sections.find((s: any) => s.section_type === 'practice_quizzes');
      let extractedPracticeQs: string[] = [];
      if (pqSec && pqSec.sample_questions) {
        extractedPracticeQs = pqSec.sample_questions.map((q: any) => `${q.type || 'Q'}: ${q.question} ${q.answer ? `(Answer: ${q.answer})` : ''}`);
      }

      // Core Concepts
      const ccSec = sections.find((s: any) => s.section_type === 'core_concepts');
      if (ccSec && ccSec.items) {
        extractedKeyConcepts = ccSec.items.map((i: any) => `${i.title}: ${i.content}`);
      }

      // Exam Strategy / Common Mistakes & Tips
      const esSec = sections.find((s: any) => s.section_type === 'exam_strategy' || s.section_type === 'exam_tips');
      if (esSec) {
        const mistakes = esSec.common_mistakes || [];
        const tips = esSec.high_scoring_tips || esSec.tips || [];
        extractedImportantPoints = [
          ...mistakes.map((m: string) => `⚠️ Common Mistake: ${m}`),
          ...tips.map((t: string) => `💡 High-Scoring Tip: ${t}`),
        ];
      }
    } else if (item.mindMapNodes && typeof item.mindMapNodes === 'object' && item.mindMapNodes.topic) {
      formattedMindMap = item.mindMapNodes;
    }

    if (extractedKeyConcepts.length === 0) {
      extractedKeyConcepts = [
        `Positive integers (> 0), Negative integers (< 0), and Zero (neither positive nor negative).`,
        `Sign Rules for Multiplication & Division: Same signs give POSITIVE (+); Different signs give NEGATIVE (-).`,
        `Properties of Integers: Closure, Commutative (a+b=b+a), Associative ((a+b)+c=a+(b+c)), and Distributive (a×(b+c) = a×b + a×c).`,
        `Additive Inverse: The number that gives zero when added: a + (-a) = 0.`,
      ];
    }

    if (extractedDefinitions.length === 0) {
      extractedDefinitions = [
        { term: 'Additive Inverse', meaning: 'The number that gives 0 when added to a given integer: a + (-a) = 0.' },
        { term: 'Additive Identity', meaning: '0 is the additive identity because a + 0 = a.' },
        { term: 'Multiplicative Identity', meaning: '1 is the multiplicative identity because a × 1 = a.' },
        { term: 'Distributive Property', meaning: 'Multiplying a sum by a number gives the same result as multiplying each addend: a × (b + c) = (a × b) + (a × c).' },
      ];
    }

    if (extractedExamples.length === 0) {
      extractedExamples = [
        {
          title: 'Problem 1: Evaluating Product of Integers',
          problem: 'Evaluate (-12) × (-5) × (-2).',
          solution: 'Step 1: (-12) × (-5) = +60 (same signs give positive).\nStep 2: (+60) × (-2) = -120 (different signs give negative).\nFinal Answer: -120',
        },
        {
          title: 'Problem 2: Using Distributive Property',
          problem: 'Find the product using suitable property: 26 × (-48) + (-48) × (-36).',
          solution: 'Step 1: Factor out (-48) using Distributive Property: (-48) × [26 + (-36)].\nStep 2: Simplify inside brackets: 26 + (-36) = -10.\nStep 3: Calculate (-48) × (-10) = +480.\nFinal Answer: 480',
        },
      ];
    }

    if (extractedImportantPoints.length === 0) {
      extractedImportantPoints = [
        'Division by zero is NOT defined in mathematics.',
        'Multiplying an odd number of negative integers yields a NEGATIVE result.',
        'Multiplying an even number of negative integers yields a POSITIVE result.',
        'Use Distributive Property a × (b + c) = a × b + a × c to quickly simplify complex calculations.',
      ];
    }

    const notePayload = {
      title: `${item.chapterTitle} Notes & Visual Mind Map`,
      summary: item.summary || `Comprehensive study notes, properties, solved examples, and interactive visual mind map for ${item.chapterTitle}.`,
      deepDive: extractedDeepDive,
      mindMapJson: JSON.stringify(formattedMindMap),
      keyConcepts: JSON.stringify(extractedKeyConcepts),
      definitions: JSON.stringify(extractedDefinitions),
      examples: JSON.stringify(extractedExamples),
      importantPoints: JSON.stringify(extractedImportantPoints),
      isPublished: true,
    };

    if (existingNote) {
      await prisma.studyNote.update({
        where: { id: existingNote.id },
        data: notePayload,
      });
    } else {
      await prisma.studyNote.create({
        data: {
          chapterId: chapter.id,
          ...notePayload,
        },
      });
    }

    chapters.push({ ...chapter, questionsData: item.questions });
  }

  return chapters;
}
