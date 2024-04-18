import { Module } from '@nestjs/common';
import { GastosService } from './gastos.service';
import { GastosController } from './gastos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gastos } from './entities/gasto.entity';
import { Cuenta } from 'src/cuentas/entities/cuenta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Gastos, Cuenta])],
  controllers: [GastosController],
  providers: [GastosService],
})
export class GastosModule {} 
