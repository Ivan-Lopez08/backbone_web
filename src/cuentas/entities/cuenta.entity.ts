import { Ingresos } from "src/ingresos/entities/ingreso.entity";
import { MetodosDePago } from "src/metodos_de_pago/entities/metodos_de_pago.entity";
import { Notificaciones } from "src/notificaciones/entities/notificacione.entity";
import { Usuarios } from "src/usuarios/entities/usuario.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany } from "typeorm";

@Entity()
export class Cuenta {

    @Column({ primary: true, generated: true })
    ID_Cuenta: number;

    @Column() 
    Nombre: string;

    @Column()
    Tipo: string;

    @CreateDateColumn()
    Fecha_Creacion: Date;

    @DeleteDateColumn()
    Deleted: Date;

    @OneToMany(() => Usuarios, (usuario) => usuario.Cuenta)
    Usuarios: Usuarios[];

    @OneToMany(() => MetodosDePago, (metodosDePago) => metodosDePago.Cuenta)
    Metodos: MetodosDePago[]

    @OneToMany(() => Notificaciones, (notificaciones) => notificaciones.Cuenta)
    Notificaciones: Notificaciones[]

    @OneToMany(() => Ingresos, (ingresos) => ingresos.Cuenta)
    Ingresos: Ingresos[];
}
