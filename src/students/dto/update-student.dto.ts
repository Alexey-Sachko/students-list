import { ApiProperty } from '@nestjs/swagger';
import { IStudent } from '../types/student.interface';
import { CreateStudentDto } from './create-student.dto';

export class UpdateStudentDto extends CreateStudentDto implements IStudent {
  @ApiProperty()
  id: number;
}
