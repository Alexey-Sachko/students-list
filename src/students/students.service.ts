import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { IStudent } from './types/student.interface';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Repository } from 'typeorm';
import { StudentEntity } from './entity/student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(StudentEntity)
    private readonly _studentRepository: Repository<StudentEntity>,
  ) {}

  async getStudents(): Promise<IStudent[]> {
    return this._studentRepository.find({ order: { createdAt: 'DESC' } });
  }

  async getStudentById(id: number): Promise<StudentEntity> | never {
    const studentFound = await this._studentRepository.findOne(id);
    if (!studentFound) {
      throw new NotFoundException();
    }

    return studentFound;
  }

  async createStudent(createStudentDto: CreateStudentDto): Promise<IStudent> {
    const {
      birthDate,
      firstname,
      lastName,
      patronymic,
      performance,
    } = createStudentDto;

    const student = new StudentEntity();
    student.birthDate = birthDate;
    student.firstname = firstname;
    student.lastName = lastName;
    student.patronymic = patronymic;
    student.performance = performance;

    await student.save();
    return student;
  }

  async updateStudent(updateStudentDto: UpdateStudentDto): Promise<IStudent> {
    const { id } = updateStudentDto;
    const student = await this.getStudentById(id);

    Object.assign(student, updateStudentDto);
    await student.save();
    return student;
  }

  async deleteStudent(id: number): Promise<void> {
    const student = await this.getStudentById(id);
    await this._studentRepository.remove(student);
  }
}
