import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsDateString,
  IsEnum,
  IsOptional,
} from 'class-validator';
import { StudentPerformance } from '../types/student-perform.enum';
import { ICreateStudentDto } from '../types/create-student-dto.interface';

export class CreateStudentDto implements ICreateStudentDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  patronymic?: string;

  @ApiProperty()
  @IsDateString()
  birthDate: Date;

  @ApiProperty({ enum: Object.values(StudentPerformance), required: false })
  @IsEnum(StudentPerformance)
  @IsOptional()
  performance?: StudentPerformance;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  firstname: string;
}
