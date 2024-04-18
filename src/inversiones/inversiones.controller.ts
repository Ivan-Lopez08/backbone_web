import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InversionesService } from './inversiones.service';
import { CreateInversioneDto } from './dto/create-inversione.dto';
import { UpdateInversioneDto } from './dto/update-inversione.dto';

@Controller('inversiones')
export class InversionesController {
  constructor(private readonly inversionesService: InversionesService) {}

  @Post()
  create(@Body() createInversioneDto: CreateInversioneDto) {
    return this.inversionesService.create(createInversioneDto);
  }

  @Get()
  findAll() {
    return this.inversionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.inversionesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateInversioneDto: UpdateInversioneDto) {
    return this.inversionesService.update(id, updateInversioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.inversionesService.remove(id);
  }
}
