import { PrismaClient } from '@prisma/client';

export async function seedSubjects(prisma: PrismaClient, classes: any[]) {
  console.log('📚 Seeding Subjects for all CBSE Classes 5 - 12...');
  const classMap = new Map(classes.map((c) => [c.number, c.id]));

  const subjectsData = [
    // Class 5
    { name: 'Mathematics', code: 'MATH5', classNumber: 5, color: '#3B82F6', icon: 'Calculator' },
    { name: 'Science (EVS)', code: 'SCI5', classNumber: 5, color: '#10B981', icon: 'Leaf' },
    { name: 'English', code: 'ENG5', classNumber: 5, color: '#8B5CF6', icon: 'Book' },
    { name: 'Hindi', code: 'HIN5', classNumber: 5, color: '#F59E0B', icon: 'Languages' },

    // Class 6
    { name: 'Mathematics', code: 'MATH6', classNumber: 6, color: '#3B82F6', icon: 'Calculator' },
    { name: 'Science', code: 'SCI6', classNumber: 6, color: '#10B981', icon: 'FlaskConical' },
    { name: 'Social Science', code: 'SST6', classNumber: 6, color: '#EF4444', icon: 'Globe' },
    { name: 'English', code: 'ENG6', classNumber: 6, color: '#8B5CF6', icon: 'BookOpen' },

    // Class 7
    { name: 'Mathematics', code: 'MATH7', classNumber: 7, color: '#3B82F6', icon: 'Calculator' },
    { name: 'Science', code: 'SCI7', classNumber: 7, color: '#10B981', icon: 'FlaskConical' },
    { name: 'Social Science', code: 'SST7', classNumber: 7, color: '#EF4444', icon: 'Globe' },
    { name: 'English', code: 'ENG7', classNumber: 7, color: '#8B5CF6', icon: 'BookOpen' },

    // Class 8
    { name: 'Mathematics', code: 'MATH8', classNumber: 8, color: '#3B82F6', icon: 'Calculator' },
    { name: 'Science', code: 'SCI8', classNumber: 8, color: '#10B981', icon: 'Atom' },
    { name: 'Social Science', code: 'SST8', classNumber: 8, color: '#EF4444', icon: 'Globe' },
    { name: 'English', code: 'ENG8', classNumber: 8, color: '#8B5CF6', icon: 'BookOpen' },

    // Class 9
    { name: 'Mathematics', code: 'MATH9', classNumber: 9, color: '#2563EB', icon: 'Calculator' },
    { name: 'Science', code: 'SCI9', classNumber: 9, color: '#059669', icon: 'Atom' },
    { name: 'Social Science', code: 'SST9', classNumber: 9, color: '#DC2626', icon: 'Globe' },
    { name: 'English', code: 'ENG9', classNumber: 9, color: '#7C3AED', icon: 'BookOpen' },

    // Class 10
    { name: 'Mathematics', code: 'MATH10', classNumber: 10, color: '#2563EB', icon: 'Calculator' },
    { name: 'Science', code: 'SCI10', classNumber: 10, color: '#059669', icon: 'Atom' },
    { name: 'Social Science', code: 'SST10', classNumber: 10, color: '#DC2626', icon: 'Globe' },
    { name: 'English', code: 'ENG10', classNumber: 10, color: '#7C3AED', icon: 'BookOpen' },
    { name: 'Computer Applications', code: 'CS10', classNumber: 10, color: '#0284C7', icon: 'Laptop' },

    // Class 11 (Senior Secondary)
    { name: 'Mathematics', code: 'MATH11', classNumber: 11, color: '#2563EB', icon: 'Calculator' },
    { name: 'Physics', code: 'PHY11', classNumber: 11, color: '#0284C7', icon: 'Zap' },
    { name: 'Chemistry', code: 'CHEM11', classNumber: 11, color: '#D97706', icon: 'FlaskConical' },
    { name: 'Biology', code: 'BIO11', classNumber: 11, color: '#16A34A', icon: 'Dna' },
    { name: 'Accountancy', code: 'ACC11', classNumber: 11, color: '#9333EA', icon: 'Building' },
    { name: 'Economics', code: 'ECO11', classNumber: 11, color: '#4F46E5', icon: 'TrendingUp' },

    // Class 12 (Senior Secondary & Entrance Prep)
    { name: 'Mathematics', code: 'MATH12', classNumber: 12, color: '#2563EB', icon: 'Calculator' },
    { name: 'Physics', code: 'PHY12', classNumber: 12, color: '#0284C7', icon: 'Zap' },
    { name: 'Chemistry', code: 'CHEM12', classNumber: 12, color: '#D97706', icon: 'FlaskConical' },
    { name: 'Biology', code: 'BIO12', classNumber: 12, color: '#16A34A', icon: 'Dna' },
    { name: 'Accountancy', code: 'ACC12', classNumber: 12, color: '#9333EA', icon: 'Building' },
    { name: 'Economics', code: 'ECO12', classNumber: 12, color: '#4F46E5', icon: 'TrendingUp' },
  ];

  const subjects = [];
  for (const item of subjectsData) {
    const classGradeId = classMap.get(item.classNumber);
    if (!classGradeId) continue;

    const existing = await prisma.subject.findFirst({
      where: { code: item.code, classGradeId },
    });

    if (existing) {
      subjects.push(existing);
    } else {
      const sub = await prisma.subject.create({
        data: {
          name: item.name,
          code: item.code,
          color: item.color,
          icon: item.icon,
          classGradeId,
        },
      });
      subjects.push(sub);
    }
  }
  return subjects;
}
