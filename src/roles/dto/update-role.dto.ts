import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleDto } from './create-role.dto';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateRoleDto {
    
    @IsString()
    @MaxLength(20)
    @IsOptional()
    Rol?: string;

    @IsString()
    @MaxLength(255)
    @IsOptional()
    Descripcion_Rol?: string;
} 
