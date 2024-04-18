import { Module } from '@nestjs/common';
import { IngresosService } from './ingresos.service';
import { IngresosController } from './ingresos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingresos } from './entities/ingreso.entity';
import { Cuenta } from 'src/cuentas/entities/cuenta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ingresos, Cuenta])],
  controllers: [IngresosController],
  providers: [IngresosService],
})
export class IngresosModule {}
