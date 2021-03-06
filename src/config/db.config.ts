import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { StudentEntity } from 'src/students/entity/student.entity';
config();

const { env } = process;

export const dbConfig: TypeOrmModuleOptions = {
  type: env.TYPEORM_CONNECTION as any,
  host: env.TYPEORM_HOST,
  port: parseInt(env.TYPEORM_PORT),
  username: env.TYPEORM_USERNAME,
  password: env.TYPEORM_PASSWORD,
  database: env.TYPEORM_DATABASE,
  entities: [StudentEntity],
  synchronize: true,
};
