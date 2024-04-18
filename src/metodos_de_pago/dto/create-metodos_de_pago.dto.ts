import { Transform } from "class-transformer"
import { IsDate, IsString } from "class-validator"
import { Cuenta } from "src/cuentas/entities/cuenta.entity"

export class CreateMetodosDePagoDto {

    @IsString()
    Numero_Tarjeta: string

    @IsDate()
    @Transform(({ value }) => new Date(value))
    Fecha_Expiracion: Date

    @IsString()
    CVV: string

    @IsString()
    Nombre_Titular: string

    @IsString()
    Cuenta:string
}
