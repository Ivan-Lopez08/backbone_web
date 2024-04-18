import { Module } from '@nestjs/common';
import { MetodosDePagoService } from './metodos_de_pago.service';
import { MetodosDePagoController } from './metodos_de_pago.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetodosDePago } from './entities/metodos_de_pago.entity';
import { Cuenta } from 'src/cuentas/entities/cuenta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MetodosDePago,Cuenta])],
  controllers: [MetodosDePagoController],
  providers: [MetodosDePagoService],
})
export class MetodosDePagoModule {}
