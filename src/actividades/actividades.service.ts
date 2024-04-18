import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateActividadeDto } from './dto/create-actividade.dto';
import { UpdateActividadeDto } from './dto/update-actividade.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Actividades } from './entities/actividade.entity';
import { Repository } from 'typeorm';
import { Presupuesto } from 'src/presupuestos/entities/presupuesto.entity';

@Injectable()
export class ActividadesService {

  constructor(

    @InjectRepository(Actividades)
    private readonly actividadesRepository: Repository<Actividades>,

    @InjectRepository(Presupuesto)
    private readonly presupuestoRepository: Repository<Presupuesto>

  ){}

  async create(createActividadeDto: CreateActividadeDto) {
    const presupuesto = await this.presupuestoRepository.findOneBy({
      Nombre: createActividadeDto.Presupuesto
    });

    if (!presupuesto) {
      throw new BadRequestException('No existe esa cuenta')
    }

    const newactividad = new Actividades();
    Object.assign(newactividad, createActividadeDto);
    newactividad.Presupuesto = presupuesto;

    return await this.actividadesRepository.save(newactividad);
  }

  async findAll() {
    return await this.actividadesRepository.find();
  }

  async findOne(ID_Actividad: number) {
    return await this.actividadesRepository.findOneBy({ID_Actividad});
  }

  async update(ID_Actividad: number, updateActividadeDto: UpdateActividadeDto) {
    return await this.actividadesRepository.update(ID_Actividad, updateActividadeDto);
  }

  async remove(ID_Actividad: number) {
    return await this.actividadesRepository.softDelete({ID_Actividad});
  }
}
