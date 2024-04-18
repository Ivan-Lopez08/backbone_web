import { Injectable } from '@nestjs/common';
import { CreateRolesxusuarioDto } from './dto/create-rolesxusuario.dto';
import { UpdateRolesxusuarioDto } from './dto/update-rolesxusuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rolesxusuario } from './entities/rolesxusuario.entity';
import { Repository } from 'typeorm';
import { Usuarios } from 'src/usuarios/entities/usuario.entity';
import { Role } from 'src/roles/entities/role.entity';

@Injectable()
export class RolesxusuariosService {

  constructor(
    @InjectRepository(Rolesxusuario)
    private readonly rolesXUsuarioRepository: Repository<Rolesxusuario>,

    @InjectRepository(Usuarios)
    private readonly usuarioRepository: Repository<Usuarios>,

    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>

  ) { }
  async create(createRolesxusuarioDto: CreateRolesxusuarioDto) {
    const { Role: roleName, Usuario: userName, ...rest } = createRolesxusuarioDto;

    const role = await this.roleRepository.findOne({ where: { Rol: roleName } });
    if (!role) {
      throw new Error(`Role with name ${roleName} not found`);
    }

    const usuario = await this.usuarioRepository.findOne({ where: { Nombre: userName } });
    if (!usuario) {
      throw new Error(`Usuario with name ${userName} not found`);
    }

    const rolesxusuario = new Rolesxusuario();
    rolesxusuario.Role = role;
    rolesxusuario.Usuario = usuario;

    return await this.rolesXUsuarioRepository.save(rolesxusuario);
  }

  async findAll() {
    return await this.rolesXUsuarioRepository.find();
  }

  async findOne(ID_RolesXUsuario: number) {
    return await this.rolesXUsuarioRepository.findOneBy({ ID_RolesXUsuario });
  }

  async update(ID_RolesXUsuario: number, updateRolesxusuarioDto: UpdateRolesxusuarioDto) {
    const rolesxusuario = await this.rolesXUsuarioRepository.findOneBy({ ID_RolesXUsuario });
    if (!rolesxusuario) {
      throw new Error(`Rolesxusuario with ID ${ID_RolesXUsuario} not found`);
    }

    const { Role: roleName, Usuario: userName, ...rest } = updateRolesxusuarioDto;

    if (roleName) {
      const role = await this.roleRepository.findOne({ where: { Rol: roleName } });
      if (!role) {
        throw new Error(`Role with name ${roleName} not found`);
      }
      rolesxusuario.Role = role;
    }

    if (userName) {
      const usuario = await this.usuarioRepository.findOne({ where: { Nombre: userName } });
      if (!usuario) {
        throw new Error(`Usuario with name ${userName} not found`);
      }
      rolesxusuario.Usuario = usuario;
    }

    return await this.rolesXUsuarioRepository.save(rolesxusuario);
  }

  async remove(ID_RolesXUsuario: number) {
    return await this.rolesXUsuarioRepository.softDelete({ ID_RolesXUsuario });
  }
}
