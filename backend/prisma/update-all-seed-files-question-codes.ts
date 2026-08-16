import * as fs from 'fs';
import * as path from 'path';

const dataRootDir = path.join(__dirname, 'data');

function getSubjectAbbrFromPath(filePath: string): string {
  const lower = filePath.toLowerCase();
  if (lower.includes('math')) return 'MATH';
  if (lower.includes('science') || lower.includes('evs')) return 'SCI';
  if (lower.includes('grammar')) return 'GRAM';
  if (lower.includes('english')) return 'ENG';
  if (lower.includes('social') || lower.includes('sst')) return 'SST';
  return 'SUB';
}

function getClassNumberFromPath(filePath: string): string {
  const match = filePath.match(/class-(\d+)/i);
  return match ? match[1] : '6';
}

function getChapterAbbrFromTitleOrFile(fileName: string): string {
  const base = path.basename(fileName, '.ts').toUpperCase();
  const clean = base.replace(/^CH\d+[-_]?/, '').replace(/[^A-Z0-9]/g, '');
  if (clean.length >= 3) {
    return clean.substring(0, 3);
  }
  return 'CHP';
}

function getAllFiles(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(fullPath));
    } else if (file.endsWith('.ts')) {
      results.push(fullPath);
    }
  });
  return results;
}

function updateFileWithQuestionCodes(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Check if file contains questions array
  if (!content.includes('questionText:')) {
    return;
  }

  const classNum = getClassNumberFromPath(filePath);
  const subAbbr = getSubjectAbbrFromPath(filePath);
  const chapAbbr = getChapterAbbrFromTitleOrFile(filePath);

  let seq = 1;

  // Replace each question object's start or questionText line with questionCode
  const updatedContent = content.replace(/(\{\s*)(questionText:\s*['"])/g, (match, p1, p2) => {
    const paddedSeq = String(seq).padStart(3, '0');
    const qCode = `C${classNum}-${subAbbr}-${chapAbbr}-${paddedSeq}`;
    seq++;
    // Check if questionCode already exists right before
    if (match.includes('questionCode:')) return match;
    return `${p1}questionCode: '${qCode}',\n      ${p2}`;
  });

  fs.writeFileSync(filePath, updatedContent, 'utf8');
  console.log(`  ✅ Updated ${path.relative(dataRootDir, filePath)} with ${seq - 1} questionCodes (Prefix: C${classNum}-${subAbbr}-${chapAbbr})`);
}

function run() {
  console.log('📝 Updating all static seed TypeScript data files in data/class-* with questionCodes...');
  const files = getAllFiles(dataRootDir);
  files.forEach((f) => updateFileWithQuestionCodes(f));
  console.log('🎉 All seed data files updated successfully!');
}

run();
