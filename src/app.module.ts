import { Module } from '@nestjs/common';
import { CuentasModule } from './cuentas/cuentas.module';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { UsuariosModule } from './usuarios/usuarios.module';
import { MetodosDePagoModule } from './metodos_de_pago/metodos_de_pago.module';
import { RolesModule } from './roles/roles.module';
import { RolesxusuariosModule } from './rolesxusuarios/rolesxusuarios.module';
import { NotificacionesModule } from './notificaciones/notificaciones.module';
import { InversionesModule } from './inversiones/inversiones.module';
import { OpcionesInversionesModule } from './opciones_inversiones/opciones_inversiones.module';
import { IngresosModule } from './ingresos/ingresos.module';
import { GastosModule } from './gastos/gastos.module';
import { PlanDeAhorrosModule } from './plan_de_ahorros/plan_de_ahorros.module';
import { PresupuestosModule } from './presupuestos/presupuestos.module';
import { ActividadesModule } from './actividades/actividades.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'ivan',
      database: 'backbonedb',
      autoLoadEntities: true,
      synchronize: true
    }),
    CuentasModule,
    UsuariosModule,
    MetodosDePagoModule,
    RolesModule,
    RolesxusuariosModule,
    NotificacionesModule,
    InversionesModule,
    OpcionesInversionesModule,
    IngresosModule,
    GastosModule,
    PlanDeAhorrosModule,
    PresupuestosModule,
    ActividadesModule,  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
