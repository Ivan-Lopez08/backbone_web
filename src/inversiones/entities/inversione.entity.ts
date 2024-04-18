import { Cuenta } from "src/cuentas/entities/cuenta.entity";
import { Opciones_Inversion } from "src/opciones_inversiones/entities/opciones_inversione.entity";
import { Column, DeleteDateColumn, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class Inversiones {

    @Column({ primary: true, generated: true }) 
    ID_Inversion: number

    @Column()
    Nombre: string

    @Column()
    Descripcion: string

    @Column()
    Video: string
    
    @DeleteDateColumn()
    Delete: Date

    @ManyToOne(() => Cuenta, (cuenta) => cuenta.ID_Cuenta)
    Cuenta: Cuenta;

    @OneToMany(() => Opciones_Inversion, (opciones_inversion) => opciones_inversion.Inversion)
    Opciones_Inversion: Opciones_Inversion[];
}
