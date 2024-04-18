import { Cuenta } from "src/cuentas/entities/cuenta.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne } from "typeorm";

@Entity()
export class Gastos {

    @Column({ primary: true, generated: true })
    ID_Gasto: number;

    @Column()
    Descripcion: string

    @Column('float')
    Monto: number

    @CreateDateColumn()
    Fecha_Gasto: Date

    @Column()
    Tipo: string

    @DeleteDateColumn()
    Delete: Date

    @ManyToOne(() => Cuenta, (cuenta) => cuenta.ID_Cuenta, {
        eager: true
    })
    Cuenta: Cuenta;
}
