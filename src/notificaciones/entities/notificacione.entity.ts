import { Cuenta } from "src/cuentas/entities/cuenta.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne } from "typeorm";

@Entity()
export class Notificaciones {
    @Column({ primary: true, generated: true })
    ID_Notificacion: number;

    @Column()
    Descripcion: string

    @CreateDateColumn()
    Fecha: Date

    @Column()
    Estado: string

    @DeleteDateColumn()
    Delete: Date

    @ManyToOne(() => Cuenta, (cuenta) => cuenta.ID_Cuenta, {eager: true})
    Cuenta: Cuenta;
}
