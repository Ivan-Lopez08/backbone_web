import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateOpcionesInversioneDto } from './dto/create-opciones_inversione.dto';
import { UpdateOpcionesInversioneDto } from './dto/update-opciones_inversione.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Opciones_Inversion } from './entities/opciones_inversione.entity';
import { Repository } from 'typeorm';
import { Inversiones } from 'src/inversiones/entities/inversione.entity';

@Injectable()
export class OpcionesInversionesService {
  constructor(
    @InjectRepository(Opciones_Inversion)
    private readonly opcionesRepository: Repository<Opciones_Inversion>,

    @InjectRepository(Inversiones)
    private readonly inversionRepository: Repository<Inversiones>

  ){}
  async create(createOpcionesInversioneDto: CreateOpcionesInversioneDto) {
    const inversion = await this.inversionRepository.findOneBy({
      Nombre: createOpcionesInversioneDto.Inversion
    });

    if (!inversion) {
      throw new BadRequestException('No existe esa cuenta')
    }

    const newopcion = new Opciones_Inversion();
    // Asigna las propiedades de createMetodosDePagoDto a metodosDePago
    Object.assign(newopcion, createOpcionesInversioneDto);
    // Asigna la cuenta a la propiedad ID_Cuenta de metodosDePago
    newopcion.Inversion = inversion;

    return await this.opcionesRepository.save(newopcion);
  }

  async findAll() {
    return await this.opcionesRepository.find();
  }

  async findOne(ID_Opcion: number) {
    return await this.opcionesRepository.findOneBy({ID_Opcion});
  }

  async update(ID_Opcion: number, updateOpcionesInversioneDto: UpdateOpcionesInversioneDto) {
    return await this.opcionesRepository.update(ID_Opcion, updateOpcionesInversioneDto);
  }

  async remove(ID_Opcion: number) {
    return await this.opcionesRepository.softDelete({ID_Opcion});
  }
}
