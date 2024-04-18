import { Presupuesto } from "src/presupuestos/entities/presupuesto.entity";
import { Column, DeleteDateColumn, Entity, ManyToOne } from "typeorm";

@Entity()
export class Actividades {
    
    @Column({primary: true, generated:true})
    ID_Actividad: number

    @Column()
    Nombre_Actividad: string

    @Column()
    Descripcion: string

    @Column('float')
    Costo: number

    @DeleteDateColumn()
    Deleted: Date

    @ManyToOne(() => Presupuesto, (presupuesto) => presupuesto.ID_Presupuesto, {
        eager: true 
       })
   Presupuesto: Presupuesto;

}
