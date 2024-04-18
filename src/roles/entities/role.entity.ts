import { Rolesxusuario } from "src/rolesxusuarios/entities/rolesxusuario.entity";
import { Column, DeleteDateColumn, Entity, OneToMany } from "typeorm";

@Entity()
export class Role {

    @Column({ primary: true, generated: true })
    ID_Roles: number;

    @Column({length: 20})
    Rol: string;

    @Column({length:255})
    Descripcion_Rol: string;

    @DeleteDateColumn()
    Deleted: Date;

    @OneToMany(() => Rolesxusuario, (rolesxusuario) => rolesxusuario.Role)
    RolesXUsuario: Rolesxusuario[];

}
