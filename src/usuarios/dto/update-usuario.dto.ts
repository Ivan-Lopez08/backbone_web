import { IsMimeType, IsNumber, IsOptional, IsString, MaxLength, Min } from 'class-validator';

export class UpdateUsuarioDto {
    @IsString()
    @MaxLength(100)
    @IsOptional()
    Nombre?: string;

    @IsNumber()
    @Min(16)
    @IsOptional()
    Edad?: number;

    @IsString()
    @MaxLength(100)
    @IsOptional()
    Email?: string;

    @IsString()
    @MaxLength(100)
    @IsOptional()
    password?: string;

    @IsString()
    @IsOptional()
    Telefono?: string;

    // @IsOptional()
    // @IsMimeType('image/jpeg')
    // fotoPerfil?: Express.Multer.File;

}
