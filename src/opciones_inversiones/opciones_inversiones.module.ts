import { Module } from '@nestjs/common';
import { OpcionesInversionesService } from './opciones_inversiones.service';
import { OpcionesInversionesController } from './opciones_inversiones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Opciones_Inversion } from './entities/opciones_inversione.entity';
import { Inversiones } from 'src/inversiones/entities/inversione.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Opciones_Inversion, Inversiones])], 
  controllers: [OpcionesInversionesController],
  providers: [OpcionesInversionesService],
})
export class OpcionesInversionesModule {} 
