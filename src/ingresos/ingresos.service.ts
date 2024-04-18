import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateIngresoDto } from './dto/create-ingreso.dto';
import { UpdateIngresoDto } from './dto/update-ingreso.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingresos } from './entities/ingreso.entity';
import { Repository } from 'typeorm';
import { Cuenta } from 'src/cuentas/entities/cuenta.entity';

@Injectable()
export class IngresosService {

  constructor(
    @InjectRepository(Ingresos)
    private readonly ingresosRepository: Repository<Ingresos>,

    @InjectRepository(Cuenta)
    private readonly cuentaRepository: Repository<Cuenta>
  ) { }

  
  async create(createIngresoDto: CreateIngresoDto) {
    const cuenta = await this.cuentaRepository.findOneBy({
      Nombre: createIngresoDto.Cuenta
    });

    if (!cuenta) {
      throw new BadRequestException('No existe esa cuenta')
    }

    const newingreso = new Ingresos();   
    Object.assign(newingreso, createIngresoDto);   
    newingreso.Cuenta = cuenta;

    return await this.ingresosRepository.save(newingreso);
  }

  async findAll() {
    return await this,this.ingresosRepository.find();
  }

  async findOne(ID_Cuenta: number) {
    // Usa el método find del repositorio de gastos para buscar los gastos que coincidan con el ID_Cuenta
    const gastos = await this.ingresosRepository.find({
      where: {
        Cuenta: { ID_Cuenta },
      },
      relations: ["Cuenta"],
    });
    // Devuelve el resultado de la búsqueda
    return gastos;
  }


  async update(ID_Ingreso: number, updateIngresoDto: UpdateIngresoDto) {
    return await this.ingresosRepository.update(ID_Ingreso, updateIngresoDto);
  }

  async remove(ID_Ingreso: number) {
    return await this.ingresosRepository.softDelete({ID_Ingreso});
  }
}
