import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { LoginUsuarioDto } from './dto/login-usuario.dto';

@Controller('usuarios')
export class UsuariosController {  
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto); 
  }

  @Post(':id/send-email')
  async sendEmailToUser(@Param('id') ID_Usuario: number) {
    await this.usuariosService.sendMailToUser(ID_Usuario);
    return { message: 'Correo electrónico enviado correctamente' };
  }

  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get('send-mail')
  sendMail(): Promise<void> {
    return this.usuariosService.sendMailToAllUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usuariosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usuariosService.remove(id);
  }

  @Post('login')
  async login(@Body() loginDto: LoginUsuarioDto) {
    try {
      // Llama al servicio para validar el inicio de sesión
      const usuario = await this.usuariosService.validateLogin(loginDto);
      // Si la validación tiene éxito, devolvemos el usuario
      return usuario;
    } catch (error) {
      // Si hay un error, lanzamos una excepción de solicitud incorrecta
      throw new BadRequestException(error.message);
    }
  }
}
