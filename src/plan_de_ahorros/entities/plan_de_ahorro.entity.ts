import { Cuenta } from "src/cuentas/entities/cuenta.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne } from "typeorm";

@Entity()
export class Plan_De_Ahorro {

    @Column({ primary: true, generated: true })
    ID_Plan: number

    @Column()
    Descripcion: string

    @Column('float')
    Cantidad_Objetivo: number

    @Column('float')
    Cantidad_ahorrada: number

    @CreateDateColumn()
    Fecha_Inicio: Date

    @Column()
    Fecha_Objetivo: Date

    @DeleteDateColumn()
    Deleted: Date

    @ManyToOne(() => Cuenta, (cuenta) => cuenta.ID_Cuenta, { eager: true })
    Cuenta: Cuenta;
}
