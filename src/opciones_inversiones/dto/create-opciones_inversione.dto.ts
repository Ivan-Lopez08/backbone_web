import { IsString } from "class-validator"

export class CreateOpcionesInversioneDto {

    @IsString()
    Nombre: string

    @IsString()
    Enlace: string

    @IsString()
    Imagen: string

    @IsString()
    Descripcion: string

    @IsString()
    Inversion: string
}
