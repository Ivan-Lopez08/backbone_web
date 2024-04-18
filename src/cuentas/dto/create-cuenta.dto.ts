import { IsDate, IsString, MaxLength } from "class-validator";

export class CreateCuentaDto {

    @IsString()
    @MaxLength(100)
    Nombre: string;

    @IsString()
    @MaxLength(15)
    Tipo: string;

}
