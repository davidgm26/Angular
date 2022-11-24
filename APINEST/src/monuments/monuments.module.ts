/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MonumentsService } from './monuments.service';
import { MonumentsController } from './monuments.controller';
import { Monument } from './monument.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Monument])],
  providers: [MonumentsService],
  controllers: [MonumentsController]
})
export class MonumentsModule {}
