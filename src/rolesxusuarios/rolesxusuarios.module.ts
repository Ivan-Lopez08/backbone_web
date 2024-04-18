import { Module } from '@nestjs/common';
import { RolesxusuariosService } from './rolesxusuarios.service';
import { RolesxusuariosController } from './rolesxusuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rolesxusuario } from './entities/rolesxusuario.entity';
import { Usuarios } from 'src/usuarios/entities/usuario.entity';
import { Role } from 'src/roles/entities/role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rolesxusuario, Usuarios, Role])],
  controllers: [RolesxusuariosController],
  providers: [RolesxusuariosService],
})
export class RolesxusuariosModule {}
