import { Inversiones } from "src/inversiones/entities/inversione.entity";
import { Column, DeleteDateColumn, Entity, ManyToOne } from "typeorm";

@Entity()
export class Opciones_Inversion {

    @Column({ primary: true, generated: true })
    ID_Opcion: number

    @Column()
    Nombre: string

    @Column()
    Enlace: string

    @Column()
    Imagen: string

    @Column()
    Descripcion: string

    @DeleteDateColumn()
    Deleted: Date

    @ManyToOne(() => Inversiones, (inversiones) => inversiones.ID_Inversion, {
        eager: true 
       })
       Inversion: Inversiones;
}
