import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MetodosDePagoService } from './metodos_de_pago.service';
import { CreateMetodosDePagoDto } from './dto/create-metodos_de_pago.dto';
import { UpdateMetodosDePagoDto } from './dto/update-metodos_de_pago.dto';

@Controller('metodos-de-pago')
export class MetodosDePagoController {
  constructor(private readonly metodosDePagoService: MetodosDePagoService) {}

  @Post()
  create(@Body() createMetodosDePagoDto: CreateMetodosDePagoDto) {
    return this.metodosDePagoService.create(createMetodosDePagoDto);
  }

  @Get()
  findAll() {
    return this.metodosDePagoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.metodosDePagoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateMetodosDePagoDto: UpdateMetodosDePagoDto) {
    return this.metodosDePagoService.update(id, updateMetodosDePagoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.metodosDePagoService.remove(id);
  }
}
