import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateGastoDto {

    @IsString()
    @IsOptional()
    Descripcion?: string

    @IsNumber()
    @IsOptional()
    Monto?: number

    @IsString()
    @IsOptional()
    Tipo?: string
}
