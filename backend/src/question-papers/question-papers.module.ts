import { Module } from '@nestjs/common';
import { QuestionPapersService } from './question-papers.service';
import { QuestionPapersController } from './question-papers.controller';

@Module({
  controllers: [QuestionPapersController],
  providers: [QuestionPapersService],
  exports: [QuestionPapersService],
})
export class QuestionPapersModule {}
