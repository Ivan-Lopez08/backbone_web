import { Cuenta } from "src/cuentas/entities/cuenta.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne } from "typeorm";

@Entity()
export class Ingresos {

    @Column({ primary: true, generated: true })
    ID_Ingreso: number

    @Column()
    Descripcion: string

    @Column('float')
    Monto: number

    @CreateDateColumn()
    Fecha_Ingreso: Date

    @DeleteDateColumn()
    Deleted: Date

    @ManyToOne(() => Cuenta, (cuenta) => cuenta.ID_Cuenta, {
        eager: true
    })
    Cuenta: Cuenta;
}
