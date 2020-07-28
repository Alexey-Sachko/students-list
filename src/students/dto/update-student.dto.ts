import { IStudent } from '../types/student.interface';
import { StudentPerformance } from '../types/student-perform.enum';

export class UpdateStudentDto implements IStudent {
  id: number;
  lastName: string;
  firstname: string;
  patronymic?: string;
  birthDate: Date;
  performance?: StudentPerformance;
}
