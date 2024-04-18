import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {

  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>
  ){}

  async create(createRoleDto: CreateRoleDto) {
    return await this.roleRepository.save(createRoleDto);
  }

  async findAll() {
    return await this.roleRepository.find(); 
  }

  async findOne(ID_Roles: number) {
    return await this.roleRepository.findBy({ID_Roles});
  }

  async update(ID_Roles: number, updateRoleDto: UpdateRoleDto) {
    return await this.roleRepository.update(ID_Roles, updateRoleDto);
  }

  async remove(ID_Roles: number) {
    return await this.roleRepository.softDelete({ID_Roles});
  }
}
