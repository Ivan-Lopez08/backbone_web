import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateGastoDto } from './dto/create-gasto.dto';
import { UpdateGastoDto } from './dto/update-gasto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Gastos } from './entities/gasto.entity';
import { Repository } from 'typeorm';
import { Cuenta } from 'src/cuentas/entities/cuenta.entity';

@Injectable()
export class GastosService {

  constructor(
    @InjectRepository(Gastos)
    private readonly gastoRepository: Repository<Gastos>,

    @InjectRepository(Cuenta)
    private readonly cuentaRepository: Repository<Cuenta>
  ) { }
  
  async create(createGastoDto: CreateGastoDto) {
    const cuenta = await this.cuentaRepository.findOneBy({
      Nombre: createGastoDto.Cuenta
    });

    if (!cuenta) {
      throw new BadRequestException('No existe esa cuenta')
    }

    const newgasto = new Gastos();
    Object.assign(newgasto, createGastoDto);
    newgasto.Cuenta = cuenta;

    return await this.gastoRepository.save(newgasto);
  }

  async findAll() {
    return await this.gastoRepository.find();
  }

  async findOne(ID_Cuenta: number) {
    // Usa el método find del repositorio de gastos para buscar los gastos que coincidan con el ID_Cuenta
    const gastos = await this.gastoRepository.find({
      where: {
        Cuenta: { ID_Cuenta },
      },
      relations: ["Cuenta"],
    });
    // Devuelve el resultado de la búsqueda
    return gastos;
  }

  async update(ID_Gasto: number, updateGastoDto: UpdateGastoDto) {
    return await this.gastoRepository.update(ID_Gasto, updateGastoDto);
  }

  async remove(ID_Gasto: number) {
    return await this.gastoRepository.softDelete({ID_Gasto});
  }
}
