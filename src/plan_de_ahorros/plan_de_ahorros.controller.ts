import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlanDeAhorrosService } from './plan_de_ahorros.service';
import { CreatePlanDeAhorroDto } from './dto/create-plan_de_ahorro.dto';
import { UpdatePlanDeAhorroDto } from './dto/update-plan_de_ahorro.dto';

@Controller('plan-de-ahorros')
export class PlanDeAhorrosController {
  constructor(private readonly planDeAhorrosService: PlanDeAhorrosService) {}

  @Post()
  create(@Body() createPlanDeAhorroDto: CreatePlanDeAhorroDto) {
    return this.planDeAhorrosService.create(createPlanDeAhorroDto);
  }

  @Get()
  findAll() {
    return this.planDeAhorrosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.planDeAhorrosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePlanDeAhorroDto: UpdatePlanDeAhorroDto) {
    return this.planDeAhorrosService.update(id, updatePlanDeAhorroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.planDeAhorrosService.remove(id);
  }
}
