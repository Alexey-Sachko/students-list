import { IStudent } from '../types/student.interface';
import { StudentPerformance } from '../types/student-perform.enum';

export class CreateStudentDto implements Omit<IStudent, 'id'> {
  lastName: string;
  patronymic?: string;
  birthDate: Date;
  performance?: StudentPerformance;
  firstname: string;
}
