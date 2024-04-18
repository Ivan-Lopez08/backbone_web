import { Role } from "src/roles/entities/role.entity";
import { Usuarios } from "src/usuarios/entities/usuario.entity";
import { Column, DeleteDateColumn, Entity, ManyToOne } from "typeorm";

@Entity()
export class Rolesxusuario {

    @Column({ primary: true, generated: true })
    ID_RolesXUsuario: number;

    @DeleteDateColumn()
    Deleted: Date;

    @ManyToOne(() => Role, (role) => role.ID_Roles, {
        eager: true
    })
    Role: Role;

    @ManyToOne(() => Usuarios, (usuario) => usuario.ID_Usuario, {
        eager: true
    })
    Usuario: Usuarios;

}
