import { IsString } from "class-validator";

export class CreateRolesxusuarioDto {

    @IsString()
    Role: string;

    @IsString()
    Usuario: string;
}
