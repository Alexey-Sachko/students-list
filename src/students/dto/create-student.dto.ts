import { ApiProperty } from '@nestjs/swagger';
import { IStudent } from '../types/student.interface';
import { StudentPerformance } from '../types/student-perform.enum';

export class CreateStudentDto implements Omit<IStudent, 'id'> {
  @ApiProperty()
  lastName: string;

  @ApiProperty({ required: false })
  patronymic?: string;

  @ApiProperty()
  birthDate: Date;

  @ApiProperty({ enum: Object.values(StudentPerformance), required: false })
  performance?: StudentPerformance;

  @ApiProperty()
  firstname: string;
}
