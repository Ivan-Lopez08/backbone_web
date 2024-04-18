import { IsNumber, IsString } from "class-validator";

export class CreateGastoDto {

    @IsString()
    Descripcion: string

    @IsNumber()
    Monto: number

    @IsString()
    Tipo: string

    @IsString()
    Cuenta: string;
}
