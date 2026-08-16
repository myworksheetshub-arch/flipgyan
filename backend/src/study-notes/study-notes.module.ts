import { Module } from '@nestjs/common';
import { StudyNotesService } from './study-notes.service';
import { StudyNotesController } from './study-notes.controller';

@Module({
  controllers: [StudyNotesController],
  providers: [StudyNotesService],
  exports: [StudyNotesService],
})
export class StudyNotesModule {}
