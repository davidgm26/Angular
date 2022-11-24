/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { Crud,CrudController, } from '@nestjsx/crud';
import { Monument } from './monument.entity';
import { MonumentsService } from './monuments.service';

@Crud({
    model:{
        type: Monument
    }
})
@Controller('Monuments')
export class MonumentsController implements CrudController<Monument>{
  
    constructor(public service: MonumentsService) {}
}