import { Transform } from "class-transformer"
import { IsDate, IsNumber, IsString } from "class-validator"

export class CreatePresupuestoDto {

    @IsNumber()
    Monto_Asignado: number

    @IsString()
    Nombre: string

    @IsString()
    Objetivo: string

    @IsDate()
    @Transform(({ value }) => new Date(value))
    Fecha_Inicio: Date

    @IsDate()
    @Transform(({ value }) => new Date(value))
    Fecha_Final: Date
    
    @IsString()
    Cuenta: string
}
