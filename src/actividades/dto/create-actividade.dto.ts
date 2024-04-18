import { IsNumber, IsString } from "class-validator";

export class CreateActividadeDto {

    @IsString()
    Nombre_Actividad: string

    @IsString()
    Descripcion: string

    @IsNumber()
    Costo: number

    @IsString()
    Presupuesto: string;
}
