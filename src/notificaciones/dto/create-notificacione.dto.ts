import { IsString } from "class-validator";

export class CreateNotificacioneDto {

    @IsString()
    Descripcion: string

    @IsString()
    Estado: string

    @IsString()
    //@MaxLength(100)
    Cuenta: string
}
