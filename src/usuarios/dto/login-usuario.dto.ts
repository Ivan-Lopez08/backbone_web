import { IsString } from 'class-validator';

export class LoginUsuarioDto {

    @IsString()
    Email: string;

    @IsString()
    password: string;
}