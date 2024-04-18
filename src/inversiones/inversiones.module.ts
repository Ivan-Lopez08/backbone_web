import { Module } from '@nestjs/common';
import { InversionesService } from './inversiones.service';
import { InversionesController } from './inversiones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cuenta } from 'src/cuentas/entities/cuenta.entity';
import { Inversiones } from './entities/inversione.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Inversiones, Cuenta])],
  controllers: [InversionesController],
  providers: [InversionesService],
  exports: [TypeOrmModule]
})
export class InversionesModule {} 
