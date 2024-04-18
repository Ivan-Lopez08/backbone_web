import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePresupuestoDto } from './dto/create-presupuesto.dto';
import { UpdatePresupuestoDto } from './dto/update-presupuesto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Presupuesto } from './entities/presupuesto.entity';
import { Repository } from 'typeorm';
import { Cuenta } from 'src/cuentas/entities/cuenta.entity';

@Injectable()
export class PresupuestosService {

  constructor(
    @InjectRepository(Presupuesto)
    private readonly presupuestoRepository: Repository<Presupuesto>,

    @InjectRepository(Cuenta)
    private readonly cuentaRepository: Repository<Cuenta>
  ){}

  async create(createPresupuestoDto: CreatePresupuestoDto) {
    const cuenta = await this.cuentaRepository.findOneBy({
      Nombre: createPresupuestoDto.Cuenta
    });

    if (!cuenta) {
      throw new BadRequestException('No existe esa cuenta')
    }

    const newpresupuesto = new Presupuesto();
    Object.assign(newpresupuesto, createPresupuestoDto);
    newpresupuesto.Cuenta = cuenta;

    return await this.presupuestoRepository.save(newpresupuesto);
  }

  async findAll() {
    return await this.presupuestoRepository.find();
  }

  async findOne(ID_Presupuesto: number) {
    return await this.presupuestoRepository.findOneBy({ID_Presupuesto});
  }

  async update(ID_Presupuesto: number, updatePresupuestoDto: UpdatePresupuestoDto) {
    return await this.presupuestoRepository.update(ID_Presupuesto, updatePresupuestoDto);
  }

  async remove(ID_Presupuesto: number) {
    return await this.presupuestoRepository.softDelete({ID_Presupuesto});
  }
}
