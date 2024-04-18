import { IsNumber, IsString, MaxLength, Min } from "class-validator"

export class CreateUsuarioDto {
    @IsString()
    //@MaxLength(100)
    Nombre: string

    @IsNumber()
    //@Min(16)
    Edad: number

    @IsString()
    //@MaxLength(100)
    Email: string

    @IsString()
    //@MaxLength(100)
    password: string

    @IsString()
    //@MaxLength(100)
    Telefono: string

    @IsString()
    //@MaxLength(100)
    Cuenta: string
}
