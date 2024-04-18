import { Cuenta } from "src/cuentas/entities/cuenta.entity";
import { Column, DeleteDateColumn, Entity, ManyToOne } from "typeorm";

@Entity()
export class MetodosDePago {

    @Column({primary: true, generated: true})
    ID_Metodo: number

    @Column({length: 16})
    Numero_Tarjeta: string

    @Column()
    Fecha_Expiracion: Date

    @Column({length: 3})
    CVV: string

    @Column({length: 100})
    Nombre_Titular: string
    
    @DeleteDateColumn()
    Deleted: Date;

    @ManyToOne(()=> Cuenta, (cuenta)=> cuenta.ID_Cuenta, {eager:true})
    Cuenta:Cuenta
}

