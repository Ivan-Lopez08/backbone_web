import { PartialType } from '@nestjs/mapped-types';
import { CreateIngresoDto } from './create-ingreso.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateIngresoDto {

    @IsString()
    @IsOptional()
    Descripcion?: string

    @IsNumber()
    @IsOptional()
    Monto?: number
}
