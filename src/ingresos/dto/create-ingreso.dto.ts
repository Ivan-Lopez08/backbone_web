import { IsNumber, IsString } from "class-validator"

export class CreateIngresoDto {

    @IsString()
    Descripcion: string

    @IsNumber()
    Monto: number

    @IsString()
    Cuenta: string
}
