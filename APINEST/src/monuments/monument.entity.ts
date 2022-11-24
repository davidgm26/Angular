/* eslint-disable prettier/prettier */
import {Column , Entity , PrimaryGeneratedColumn} from "typeorm"
import{ApiProperty} from  "@nestjsx/crud/lib/crud";

@Entity()
export class Monument{

    @PrimaryGeneratedColumn()
    id:number;

    @ApiProperty()
    @Column()
    name: string;
    
    @ApiProperty()
    @Column()
    city:string;

    @ApiProperty()
    @Column()
    country: string;    
}