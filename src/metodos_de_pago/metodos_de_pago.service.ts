import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMetodosDePagoDto } from './dto/create-metodos_de_pago.dto';
import { UpdateMetodosDePagoDto } from './dto/update-metodos_de_pago.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MetodosDePago } from './entities/metodos_de_pago.entity';
import { Repository } from 'typeorm';
import { Cuenta } from 'src/cuentas/entities/cuenta.entity';

@Injectable()
export class MetodosDePagoService {

  constructor(
    @InjectRepository(MetodosDePago)
    private readonly metodoDePagoRepository: Repository<MetodosDePago>,

    @InjectRepository(Cuenta)
    private readonly cuentaRepository: Repository<Cuenta>
  ) { }

  async create(createMetodosDePagoDto: CreateMetodosDePagoDto) {

    const cuenta = await this.cuentaRepository.findOneBy({
      Nombre: createMetodosDePagoDto.Cuenta
    });

    if (!cuenta) {
      throw new BadRequestException('No existe esa cuenta')
    }

    const metodosDePago = new MetodosDePago();
    // Asigna las propiedades de createMetodosDePagoDto a metodosDePago
    Object.assign(metodosDePago, createMetodosDePagoDto);
    // Asigna la cuenta a la propiedad ID_Cuenta de metodosDePago
    metodosDePago.Cuenta = cuenta;

    return await this.metodoDePagoRepository.save(metodosDePago);
  }

  async findAll() {
    return await this.metodoDePagoRepository.find();
  }

  async findOne(ID_Metodo: number) {
    return await this.metodoDePagoRepository.findOneBy({ID_Metodo});
  }

  async update(ID_Metodo: number, updateMetodosDePagoDto: UpdateMetodosDePagoDto) {
    return await this.metodoDePagoRepository.update(ID_Metodo, updateMetodosDePagoDto);
  }

  async remove(ID_Metodo: number) {
    return this.metodoDePagoRepository.softDelete({ID_Metodo});
  }
}
