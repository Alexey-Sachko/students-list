import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { config } from './config';

@Module({
  imports: [StudentsModule, TypeOrmModule.forRoot(config.dbConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
