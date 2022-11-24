/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Monument } from './monument.entity';

@Injectable()
export class MonumentsService extends TypeOrmCrudService<Monument>{

    constructor(@InjectRepository(Monument) repo){
        super(repo)
    }

}
