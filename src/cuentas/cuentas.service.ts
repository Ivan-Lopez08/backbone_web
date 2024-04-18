import { Injectable } from '@nestjs/common';
import { CreateCuentaDto } from './dto/create-cuenta.dto';
import { UpdateCuentaDto } from './dto/update-cuenta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cuenta } from './entities/cuenta.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CuentasService {

  constructor(
    @InjectRepository(Cuenta)
    private readonly cuentaRepository: Repository<Cuenta>
  ){}

  async create(createCuentaDto: CreateCuentaDto) {
    return await this.cuentaRepository.save(createCuentaDto);
  }

  async findAll() {
    return await this.cuentaRepository.find();
  }

  async findOne(ID_Cuenta: number) {
    return await this.cuentaRepository.findOneBy({ID_Cuenta});
  }

  async update(ID_Cuenta: number, updateCuentaDto: UpdateCuentaDto) {
    return await this.cuentaRepository.update(ID_Cuenta, updateCuentaDto);
  }

  async remove(ID_Cuenta: number) {
    return await this.cuentaRepository.softDelete({ID_Cuenta});
  }
}
