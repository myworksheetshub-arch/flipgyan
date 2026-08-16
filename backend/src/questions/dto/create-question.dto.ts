import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class QuestionOptionDto {
  @ApiPropertyOptional({ example: 'A' })
  optionLabel?: string;

  @ApiProperty({ example: '4 decimal places' })
  optionText: string;

  @ApiProperty({ example: '4 decimal places' })
  text: string;

  @ApiProperty({ example: true })
  isCorrect: boolean;

  @ApiPropertyOptional({ example: 'Exponent of 5 in denominator is 3 while 2 is 4.' })
  explanation?: string;

  @ApiPropertyOptional({ example: 1 })
  sequence?: number;
}

export class QuestionRubricDto {
  @ApiProperty({ example: 'Step 1: Formula statement' })
  criterion: string;

  @ApiPropertyOptional({ example: 'HCF * LCM = a * b' })
  expectedResponse?: string;

  @ApiPropertyOptional({ example: 'HCF * LCM = a * b' })
  expectedAnswer?: string;

  @ApiProperty({ example: 1.0 })
  marks: number;

  @ApiPropertyOptional({ example: 1 })
  displayOrder?: number;
}

export class QuestionMediaDto {
  @ApiProperty({ example: 'DIAGRAM' })
  mediaType: string;

  @ApiProperty({ example: 'https://flipgyan.com/media/diagram1.png' })
  fileUrl: string;

  @ApiPropertyOptional({ example: 'Figure 1.1 - Circuit Diagram' })
  caption?: string;

  @ApiPropertyOptional({ example: 'Schematic representation' })
  altText?: string;
}

export class CreateQuestionDto {
  @ApiPropertyOptional({ example: 'M10-CH1-001' })
  questionCode?: string;

  @ApiProperty({ example: 'The decimal expansion of 43 / (2^4 * 5^3) will terminate after how many places?' })
  questionText: string;

  @ApiPropertyOptional({ example: 'CBSE' })
  board?: string;

  @ApiPropertyOptional({ example: 'MCQ' })
  type?: string;

  @ApiProperty({ example: 'MCQ' })
  questionType: string;

  @ApiProperty({ example: 'EASY' })
  difficulty: string;

  @ApiProperty({ example: 'APPLY' })
  bloomLevel: string;

  @ApiProperty({ example: 'PROCEDURAL_FLUENCY' })
  competency: string;

  @ApiProperty({ example: 1 })
  marks: number;

  @ApiPropertyOptional({ example: 0 })
  negativeMarks?: number;

  @ApiPropertyOptional({ example: 'Maximum exponent of 2 and 5 in denominator is 4.' })
  explanation?: string;

  @ApiPropertyOptional({ example: 'Check exponents of 2 and 5' })
  hint?: string;

  @ApiPropertyOptional({ example: '4 decimal places' })
  answerText?: string;

  @ApiProperty({ example: 'ch-uuid-123' })
  chapterId: string;

  @ApiPropertyOptional({ example: 'topic-uuid-456' })
  topicId?: string;

  @ApiPropertyOptional({ type: [QuestionOptionDto] })
  options?: QuestionOptionDto[];

  @ApiPropertyOptional({ type: [QuestionRubricDto] })
  rubrics?: QuestionRubricDto[];

  @ApiPropertyOptional({ type: [QuestionMediaDto] })
  media?: QuestionMediaDto[];
}
