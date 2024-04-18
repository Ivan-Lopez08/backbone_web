import { PartialType } from '@nestjs/mapped-types';
import { CreateActividadeDto } from './create-actividade.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateActividadeDto {
    @IsString()
    @IsOptional()
    Nombre_Actividad?: string

    @IsString()
    @IsOptional()
    Descripcion?: string

    @IsNumber()
    @IsOptional()
    Costo?: number
}
