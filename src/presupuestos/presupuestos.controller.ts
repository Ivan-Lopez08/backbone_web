import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PresupuestosService } from './presupuestos.service';
import { CreatePresupuestoDto } from './dto/create-presupuesto.dto';
import { UpdatePresupuestoDto } from './dto/update-presupuesto.dto';

@Controller('presupuestos')
export class PresupuestosController {
  constructor(private readonly presupuestosService: PresupuestosService) {}

  @Post()
  create(@Body() createPresupuestoDto: CreatePresupuestoDto) {
    return this.presupuestosService.create(createPresupuestoDto);
  }

  @Get()
  findAll() {
    return this.presupuestosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.presupuestosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePresupuestoDto: UpdatePresupuestoDto) {
    return this.presupuestosService.update(id, updatePresupuestoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.presupuestosService.remove(id);
  }
}
