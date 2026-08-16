import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CurriculumModule } from './curriculum/curriculum.module';
import { StudyNotesModule } from './study-notes/study-notes.module';
import { QuestionsModule } from './questions/questions.module';
import { WorksheetsModule } from './worksheets/worksheets.module';
import { QuizzesModule } from './quizzes/quizzes.module';
import { QuestionPapersModule } from './question-papers/question-papers.module';
import { AssignmentsModule } from './assignments/assignments.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { GamificationModule } from './gamification/gamification.module';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { SearchModule } from './search/search.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsersModule,
    CurriculumModule,
    StudyNotesModule,
    QuestionsModule,
    WorksheetsModule,
    QuizzesModule,
    QuestionPapersModule,
    AssignmentsModule,
    AnalyticsModule,
    GamificationModule,
    BookmarksModule,
    SearchModule,
    SubscriptionsModule,
    CloudinaryModule,
  ],
})
export class AppModule {}
