import { Actividades } from "src/actividades/entities/actividade.entity";
import { Cuenta } from "src/cuentas/entities/cuenta.entity";
import { Column, DeleteDateColumn, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class Presupuesto {

    @Column({primary: true, generated: true})
    ID_Presupuesto: number

    @Column()
    Nombre: string

    @Column('float')
    Monto_Asignado: number

    @Column()
    Objetivo: string

    @Column()
    Fecha_Inicio: Date

    @Column()
    Fecha_Final: Date

    @DeleteDateColumn()
    Deleted: Date

    @ManyToOne(() => Cuenta, (cuenta) => cuenta.ID_Cuenta, {
        eager: true 
       })
   Cuenta: Cuenta;

   @OneToMany(() => Actividades, (actividades)=> actividades.Presupuesto)
    Actividades: Actividades[]
}
