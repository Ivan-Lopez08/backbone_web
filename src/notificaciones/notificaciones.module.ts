import { Module } from '@nestjs/common';
import { NotificacionesService } from './notificaciones.service';
import { NotificacionesController } from './notificaciones.controller';
import { Notificaciones } from './entities/notificacione.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cuenta } from 'src/cuentas/entities/cuenta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Notificaciones, Cuenta])],
  controllers: [NotificacionesController],
  providers: [NotificacionesService],
})
export class NotificacionesModule {}
 