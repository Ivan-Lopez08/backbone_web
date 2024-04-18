import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { UsuariosService } from './usuarios.service';

@Injectable()
export class ScheduledTasksService {
  constructor(private readonly usuariosService: UsuariosService) {}

  // Se ejecuta a las 00:00 (medianoche) cada domingo
  @Cron('0 0 0 * * 0')
  async sendPeriodicEmails() {
    await this.usuariosService.sendMailToAllUsers();
  }
}