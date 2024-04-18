import { Transform } from 'class-transformer';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdatePresupuestoDto {

    @IsNumber()
    @IsOptional()
    Monto_Asignado?: number

    @IsString()
    @IsOptional()
    Nombre?: string

    @IsString()
    @IsOptional()
    Objetivo?: string

    @IsDate()
    @IsOptional()
    @Transform(({ value }) => new Date(value))
    Fecha_Inicio?: Date

    @IsDate()
    @IsOptional()
    @Transform(({ value }) => new Date(value))
    Fecha_Final?: Date
    
}
