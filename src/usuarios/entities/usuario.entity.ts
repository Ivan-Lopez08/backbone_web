import { Cuenta } from "src/cuentas/entities/cuenta.entity";
import { Rolesxusuario } from "src/rolesxusuarios/entities/rolesxusuario.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class Usuarios {
    @Column({ primary: true, generated: true })
    ID_Usuario: number;

    @Column({ length: 100 })
    Nombre: string;

    @Column()
    Edad: number;

    @Column({ length: 100 })
    Email: string;

    @Column({ length: 100 })
    password: string;

    @Column()
    Telefono: string;

    // @Column({ type: 'bytea', nullable: true })
    // fotoPerfil?: Buffer;

    @CreateDateColumn()
    fecha_Creacion: Date;

    @DeleteDateColumn()
    Deleted: Date;

    @ManyToOne(() => Cuenta, (cuenta) => cuenta.ID_Cuenta, {
        eager: true
    })
    Cuenta: Cuenta;

    @OneToMany(() => Rolesxusuario, (rolesxusuario) => rolesxusuario.Usuario)
    RolesXUsuario: Rolesxusuario[];

}
