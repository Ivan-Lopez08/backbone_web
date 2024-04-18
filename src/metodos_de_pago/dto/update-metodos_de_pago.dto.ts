import { PartialType } from '@nestjs/mapped-types';
import { CreateMetodosDePagoDto } from './create-metodos_de_pago.dto';
import { IsDate, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateMetodosDePagoDto {
    @IsString()
    @IsOptional()
    Numero_Tarjeta: string

    @IsDate()
    @Transform(({ value }) => new Date(value))
    @IsOptional()
    Fecha_Expiracion: Date

    @IsString()
    @IsOptional()
    CVV: string

    @IsString()
    @IsOptional()
    Nombre_Titular: string

}
