import { BaseEntity, PrimaryColumn, Column, Entity } from 'typeorm';
import { IStudent } from '../types/student.interface';
import { StudentPerformance } from '../types/student-perform.enum';

@Entity()
export class StudentEntity extends BaseEntity implements IStudent {
  @PrimaryColumn()
  id: number;

  @Column()
  lastName: string;

  @Column()
  firstname: string;

  @Column({ nullable: true })
  patronymic?: string;

  @Column({ type: 'timestamptz' })
  birthDate: Date;

  @Column({ nullable: true, type: 'enum', enum: StudentPerformance })
  performance?: StudentPerformance;
}
