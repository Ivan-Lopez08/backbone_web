import { IsOptional, IsString } from 'class-validator';

export class UpdateNotificacioneDto {
    
    @IsString()
    @IsOptional()
    Descripcion?: string

    @IsString()
    @IsOptional()
    Estado?: string

}
