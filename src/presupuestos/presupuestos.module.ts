import { Module } from '@nestjs/common';
import { PresupuestosService } from './presupuestos.service';
import { PresupuestosController } from './presupuestos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Presupuesto } from './entities/presupuesto.entity';
import { Cuenta } from 'src/cuentas/entities/cuenta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Presupuesto, Cuenta])],
  controllers: [PresupuestosController],
  providers: [PresupuestosService],
  exports: [TypeOrmModule]
})
export class PresupuestosModule {}
