import { IsOptional, IsString } from 'class-validator';

export class UpdateOpcionesInversioneDto {
    @IsString()
    @IsOptional()
    Nombre?: string

    @IsString()
    @IsOptional()
    Enlace?: string

    @IsString()
    @IsOptional()
    Imagen: string

    @IsString()
    @IsOptional()
    Descripcion: string

}
