import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuarios } from './entities/usuario.entity';
import { Cuenta } from 'src/cuentas/entities/cuenta.entity';
import { MailerModule } from '@nestjs-modules/mailer';
import { ScheduledTasksService } from 'src/usuarios/scheduledTask.service';

@Module({
  imports: [TypeOrmModule.forFeature([Usuarios, Cuenta]),
  MailerModule.forRoot({
    transport:{
      host: 'smtp.gmail.com',
      auth: {
        user: 'backbonefs@gmail.com',
        pass: 'jmhn ladp xopa stns',
      }
    }
  })], 
  controllers: [UsuariosController],
  providers: [UsuariosService, ScheduledTasksService], 
  exports: [TypeOrmModule]
})
export class UsuariosModule {}
