import { PartialType } from '@nestjs/mapped-types';
import { CreateRolesxusuarioDto } from './create-rolesxusuario.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateRolesxusuarioDto {

    @IsString()
    @IsOptional()
    Role?: string;

    @IsString()
    @IsOptional()
    Usuario?: string;
}
