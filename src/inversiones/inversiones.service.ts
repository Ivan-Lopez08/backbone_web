import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateInversioneDto } from './dto/create-inversione.dto';
import { UpdateInversioneDto } from './dto/update-inversione.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Inversiones } from './entities/inversione.entity';
import { Repository } from 'typeorm';
import { Cuenta } from 'src/cuentas/entities/cuenta.entity';

@Injectable()
export class InversionesService {

  constructor(
    @InjectRepository(Inversiones)
    private readonly inversionRepository: Repository<Inversiones>,

    @InjectRepository(Cuenta)
    private readonly cuentaRepository: Repository<Cuenta>
  ){}

  async create(createInversioneDto: CreateInversioneDto) {
    const cuenta = await this.cuentaRepository.findOneBy({
      Nombre: createInversioneDto.Cuenta
    });

    if (!cuenta) {
      throw new BadRequestException('No existe esa cuenta')
    }

    const newInversion = new Inversiones();
    // Asigna las propiedades de createMetodosDePagoDto a metodosDePago
    Object.assign(newInversion, createInversioneDto);
    // Asigna la cuenta a la propiedad ID_Cuenta de metodosDePago
    newInversion.Cuenta = cuenta;

    return await this.inversionRepository.save(newInversion);
  }

  async findAll() {
    return await this.inversionRepository.find();
  }

  async findOne(ID_Inversion: number) {
    return await this.inversionRepository.findOneBy({ID_Inversion});
  }

  async update(ID_Inversion: number, updateInversioneDto: UpdateInversioneDto) {
    return await this.inversionRepository.update(ID_Inversion, updateInversioneDto);
  }

  async remove(ID_Inversion: number) {
    return await this.inversionRepository.softDelete({ID_Inversion});
  }
}
