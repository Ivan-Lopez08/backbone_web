import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePlanDeAhorroDto } from './dto/create-plan_de_ahorro.dto';
import { UpdatePlanDeAhorroDto } from './dto/update-plan_de_ahorro.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Plan_De_Ahorro } from './entities/plan_de_ahorro.entity';
import { Repository } from 'typeorm';
import { Cuenta } from 'src/cuentas/entities/cuenta.entity';

@Injectable()
export class PlanDeAhorrosService {

  constructor(
    @InjectRepository(Plan_De_Ahorro)
    private readonly planAhorroRepository: Repository<Plan_De_Ahorro>,

    @InjectRepository(Cuenta)
    private readonly cuentaRepository: Repository<Cuenta>
  ) { }

  
  async create(createPlanDeAhorroDto: CreatePlanDeAhorroDto) {
    const cuenta = await this.cuentaRepository.findOneBy({
      Nombre: createPlanDeAhorroDto.Cuenta
    });

    if (!cuenta) {
      throw new BadRequestException('No existe esa cuenta')
    }

    const newplan = new Plan_De_Ahorro();
    Object.assign(newplan, createPlanDeAhorroDto);
    newplan.Cuenta = cuenta;

    return await this.planAhorroRepository.save(newplan);
  }

  async findAll() {
    return await this.planAhorroRepository.find();
  }

  async findOne(ID_Plan: number) {
    return await this.planAhorroRepository.findOneBy({ID_Plan});
  }

  async update(ID_Plan: number, updatePlanDeAhorroDto: UpdatePlanDeAhorroDto) {
    return await this.planAhorroRepository.update(ID_Plan, updatePlanDeAhorroDto);
  }

  async remove(ID_Plan: number) {
    return await this.planAhorroRepository.softDelete({ID_Plan});
  }
}
