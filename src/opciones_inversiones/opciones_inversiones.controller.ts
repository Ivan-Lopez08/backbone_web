import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OpcionesInversionesService } from './opciones_inversiones.service';
import { CreateOpcionesInversioneDto } from './dto/create-opciones_inversione.dto';
import { UpdateOpcionesInversioneDto } from './dto/update-opciones_inversione.dto';

@Controller('opciones-inversiones')
export class OpcionesInversionesController {
  constructor(private readonly opcionesInversionesService: OpcionesInversionesService) {}

  @Post()
  create(@Body() createOpcionesInversioneDto: CreateOpcionesInversioneDto) {
    return this.opcionesInversionesService.create(createOpcionesInversioneDto);
  }

  @Get()
  findAll() {
    return this.opcionesInversionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.opcionesInversionesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateOpcionesInversioneDto: UpdateOpcionesInversioneDto) {
    return this.opcionesInversionesService.update(id, updateOpcionesInversioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.opcionesInversionesService.remove(id);
  }
}
