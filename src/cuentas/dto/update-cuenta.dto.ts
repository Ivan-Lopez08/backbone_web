import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateCuentaDto {
    @IsString()
    @MaxLength(100)
    @IsOptional()
    Nombre?: string;

    @IsString()
    @MaxLength(15)
    @IsOptional()
    Tipo?: string;
}
