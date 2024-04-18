import { IsString } from "class-validator";

export class CreateInversioneDto {

    @IsString()
    Nombre: string

    @IsString()
    Descripcion: string

    @IsString()
    Video: string

    @IsString()
    Cuenta: string;
}
