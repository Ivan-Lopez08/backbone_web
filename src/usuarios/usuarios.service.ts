import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuarios } from './entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cuenta } from 'src/cuentas/entities/cuenta.entity';
import { LoginUsuarioDto } from './dto/login-usuario.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class UsuariosService {

  constructor(
    @InjectRepository(Usuarios)
    private readonly usuarioRepository: Repository<Usuarios>,

    @InjectRepository(Cuenta)
    private readonly cuentaRepository: Repository<Cuenta>,

    private readonly mailerService: MailerService,
  ) { }

  async sendMailToAllUsers(): Promise<void> {
    try {
      const usuarios = await this.usuarioRepository.find(); // Obtiene todos los usuarios
      const correos = usuarios.map(usuario => usuario.Email); // Extrae los correos electrónicos

      for (const email of correos) {
        await this.mailerService.sendMail({
          to: email,
          from: 'andreslomejia77@gmail.com',
          subject: 'Recordatorio',
          text: 'Hola, recuerda registrar tus cuentas en backBone',
          // Puedes agregar más opciones como HTML, adjuntos, etc.
        });
      }
      console.log('Correos enviados con éxito');
    } catch (error) {
      console.error('Error al enviar correos', error);
    }
  }

  async create(createUsuarioDto: CreateUsuarioDto) {

    const cuenta = await this.cuentaRepository.findOneBy({
      Nombre: createUsuarioDto.Cuenta
    });

    if (!cuenta) {
      throw new BadRequestException('No existe esa cuenta')
    }

    const newuser = new Usuarios();
    Object.assign(newuser, createUsuarioDto);
    newuser.Cuenta = cuenta;

    return await this.usuarioRepository.save(newuser);
  }

  async findAll() {
    return await this.usuarioRepository.find();
  }

  async findOne(ID_Usuario: number) {
    return await this.usuarioRepository.findOneBy({ ID_Usuario });
  }

  async update(ID_Usuario: number, updateUsuarioDto: UpdateUsuarioDto) {
    return await this.usuarioRepository.update(ID_Usuario, updateUsuarioDto);
  }

  async remove(ID_Usuario: number) {
    return await this.usuarioRepository.softDelete({ ID_Usuario });
  }

  async validateLogin(loginDto: LoginUsuarioDto): Promise<Usuarios | null> {
    const { Email, password } = loginDto;

    // Buscar usuario por correo electrónico
    const usuario = await this.usuarioRepository.findOne({ where: { Email } });

    // Verificar si el usuario existe y si la contraseña coincide
    if (usuario && usuario.password === password) {
      return usuario; // Devuelve el usuario si la autenticación es exitosa
    }

    // Si no se encuentra el usuario o la contraseña no coincide, lanzar una excepción
    throw new BadRequestException('Credenciales de inicio de sesión inválidas');
  }

  async sendMailToUser(ID_Usuario: number): Promise<void> {
    try {
      const usuario = await this.usuarioRepository.findOneBy({ ID_Usuario }); // Obtener el usuario por ID
      if (!usuario) {
        throw new BadRequestException('Usuario no encontrado');
      }

      const htmlContent = `
            <p>Hola ${usuario.Nombre},</p>
            <p>${usuario.Cuenta.Nombre} te ha invitado para ser uno de sus colaboradores.</p>
            <p>Puedes ingresar a backBone con tu correo electrónico y con tu contraseña temporal.</p>
            <p><strong>Contraseña temporal:</strong> ${usuario.password}</p>
            <p>Recuerda que puedes cambiar la contraseña una vez inicies sesión en backBone.</p>
            <p>¡Gracias!</p>
        `;

      await this.mailerService.sendMail({
        to: usuario.Email,
        from: 'andreslomejia77@gmail.com',
        subject: `${usuario.Cuenta.Nombre} te invita a colaborar en backBone`,
        text: '',
        html: htmlContent
      });
      console.log('Correo electrónico enviado con éxito');
    } catch (error) {
      console.error('Error al enviar correo electrónico', error);
      throw new BadRequestException('Error al enviar correo electrónico');
    }
  }
}

