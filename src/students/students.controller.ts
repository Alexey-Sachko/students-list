import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { IStudent } from './types/student.interface';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly _studentsService: StudentsService) {}

  @Get('/')
  async getStudents(): Promise<IStudent[]> {
    return this._studentsService.getStudents();
  }

  @Post('/')
  async createStudent(
    @Body() createStudentDto: CreateStudentDto,
  ): Promise<IStudent> {
    return this._studentsService.createStudent(createStudentDto);
  }

  @Put('/')
  async updateStudent(
    @Body() updateStudentDto: UpdateStudentDto,
  ): Promise<IStudent> {
    return this._studentsService.updateStudent(updateStudentDto);
  }

  @Delete('/:id')
  async deleteStudent(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this._studentsService.deleteStudent(id);
  }
}
