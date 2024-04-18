import { IsOptional, IsString } from 'class-validator';

export class UpdateInversioneDto {

    @IsString()
    @IsOptional()
    Nombre?: string

    @IsString()
    @IsOptional()
    Descripcion?: string

    @IsString()
    @IsOptional()
    Video?: string
}
