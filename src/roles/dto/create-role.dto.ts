import { IsString, MaxLength } from "class-validator";

export class CreateRoleDto {
    @IsString()
    @MaxLength(20)
    Rol: string;

    @IsString()
    @MaxLength(255)
    Descripcion_Rol: string;
}
