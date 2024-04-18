import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateNotificacioneDto } from './dto/create-notificacione.dto';
import { UpdateNotificacioneDto } from './dto/update-notificacione.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Notificaciones } from './entities/notificacione.entity';
import { Repository } from 'typeorm';
import { Cuenta } from 'src/cuentas/entities/cuenta.entity';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class NotificacionesService {

  constructor(
    @InjectRepository(Notificaciones)
    private readonly notificacionRepository: Repository<Notificaciones>,

    @InjectRepository(Cuenta)
    private readonly cuentaRepository: Repository<Cuenta>,

    private readonly mailerService: MailerService
  ){}

  async create(createNotificacioneDto: CreateNotificacioneDto) {
      const cuenta = await this.cuentaRepository.findOneBy({
      Nombre: createNotificacioneDto.Cuenta
    });

    if (!cuenta) {
      throw new BadRequestException('No existe esa cuenta')
    }

    const newnotificacion = new Notificaciones();
    // Asigna las propiedades de createMetodosDePagoDto a metodosDePago
    Object.assign(newnotificacion, createNotificacioneDto);
    // Asigna la cuenta a la propiedad ID_Cuenta de metodosDePago
    newnotificacion.Cuenta = cuenta;

    return await this.notificacionRepository.save(newnotificacion);
  }

  // async sendMail(): Promise<void> {
  //   try {
  //     console.log('Estoy en sendMail');
  //     const result = await this.mailerService.sendMail({
  //       to: 'bryanmolinas08@gmail.com',
  //       from: 'andreslomejia77@gmail.com',
  //       subject: 'Recordatorio',
  //       text: 'Recuerda registrar tus cuentas en backBone'
  //     });
  //     console.log('Correo enviado con éxito', result);
  //   } catch (error) {
  //     console.error('Error al enviar correo', error);
  //   }
  // }

  async findAll() {
    return await this.notificacionRepository.find();
  }

  async findOne(ID_Notificacion: number) {
    return await this.notificacionRepository.findOneBy({ID_Notificacion});
  }

  async update(ID_Notificacion: number, updateNotificacioneDto: UpdateNotificacioneDto) {
    return await this.notificacionRepository.update(ID_Notificacion, updateNotificacioneDto);
  }

  async remove(ID_Notificacion: number) {
    return await this.notificacionRepository.softDelete({ID_Notificacion});
  }
}
