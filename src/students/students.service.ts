import { Injectable } from '@nestjs/common';
import { IStudent } from './types/student.interface';
import { StudentPerformance } from './types/student-perform.enum';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
  async getStudents(): Promise<IStudent[]> {
    return [];
  }

  async createStudent(createStudentDto: CreateStudentDto): Promise<IStudent> {
    return {
      id: 0,
      lastName: 'test',
      firstname: 'test',
      patronymic: 'test',
      birthDate: new Date(),
      performance: StudentPerformance.A,
    };
  }

  async updateStudent(updateStudentDto: UpdateStudentDto): Promise<IStudent> {
    return {
      id: 0,
      lastName: 'test',
      firstname: 'test',
      patronymic: 'test',
      birthDate: new Date(),
      performance: StudentPerformance.A,
    };
  }

  async deleteStudent(id: number): Promise<void> {}
}
