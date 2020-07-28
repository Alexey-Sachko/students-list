import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { config } from './config';

@Module({
  imports: [StudentsModule, TypeOrmModule.forRoot(config.dbConfig)],
  providers: [AppService],
})
export class AppModule {}
