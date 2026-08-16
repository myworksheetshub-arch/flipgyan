import { Module } from '@nestjs/common';
import { WorksheetsService } from './worksheets.service';
import { WorksheetsController } from './worksheets.controller';

@Module({
  controllers: [WorksheetsController],
  providers: [WorksheetsService],
  exports: [WorksheetsService],
})
export class WorksheetsModule {}
