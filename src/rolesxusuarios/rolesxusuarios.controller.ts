import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RolesxusuariosService } from './rolesxusuarios.service';
import { CreateRolesxusuarioDto } from './dto/create-rolesxusuario.dto';
import { UpdateRolesxusuarioDto } from './dto/update-rolesxusuario.dto';

@Controller('rolesxusuarios')
export class RolesxusuariosController {
  constructor(private readonly rolesxusuariosService: RolesxusuariosService) {}

  @Post()
  create(@Body() createRolesxusuarioDto: CreateRolesxusuarioDto) {
    return this.rolesxusuariosService.create(createRolesxusuarioDto);
  }

  @Get()
  findAll() {
    return this.rolesxusuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.rolesxusuariosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateRolesxusuarioDto: UpdateRolesxusuarioDto) {
    return this.rolesxusuariosService.update(id, updateRolesxusuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.rolesxusuariosService.remove(id);
  }
}
