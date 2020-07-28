import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsDateString,
  IsEnum,
  IsOptional,
} from 'class-validator';
import { IStudent } from '../types/student.interface';
import { StudentPerformance } from '../types/student-perform.enum';

export class CreateStudentDto implements Omit<IStudent, 'id'> {
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
