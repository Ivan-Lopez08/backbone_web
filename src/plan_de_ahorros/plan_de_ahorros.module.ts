import { Module } from '@nestjs/common';
import { PlanDeAhorrosService } from './plan_de_ahorros.service';
import { PlanDeAhorrosController } from './plan_de_ahorros.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plan_De_Ahorro } from './entities/plan_de_ahorro.entity';
import { Cuenta } from 'src/cuentas/entities/cuenta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Plan_De_Ahorro, Cuenta])], 
  controllers: [PlanDeAhorrosController],
  providers: [PlanDeAhorrosService],
})
export class PlanDeAhorrosModule {}
