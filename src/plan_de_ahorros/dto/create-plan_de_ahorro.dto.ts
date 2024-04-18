import { Transform } from "class-transformer";
import { IsDate, IsNumber, IsString } from "class-validator";

export class CreatePlanDeAhorroDto {

    @IsString()
    Descripcion: string

    @IsNumber()
    Cantidad_Objetivo: number

    @IsNumber()
    Cantidad_ahorrada: number

    @IsDate()
    @Transform(({ value }) => new Date(value))
    Fecha_Objetivo: Date

    @IsString()
    Cuenta: string;
}
