import { PartialType } from '@nestjs/mapped-types';
import { CreatePlanDeAhorroDto } from './create-plan_de_ahorro.dto';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdatePlanDeAhorroDto {
    @IsString()
    @IsOptional()
    Descripcion?: string

    @IsNumber()
    @IsOptional()
    Cantidad_Objetivo?: number

    @IsNumber()
    @IsOptional()
    Cantidad_ahorrada?: number

    @IsDate()
    @IsOptional()
    @Transform(({ value }) => new Date(value))
    Fecha_Objetivo?: Date
}
