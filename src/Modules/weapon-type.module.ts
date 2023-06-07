import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeaponTypeController } from 'src/Controllers/weapon-type.controller';
import { WeaponType } from 'src/Entities/weapon-type.entity';
import { WeaponTypeService } from 'src/Services/weapon-type.service';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateWeaponTypeHandler } from 'src/CQRS/WeaponType/Handlers/create-weapon-type.handler';
import { GetAllWeaponTypesHandler } from 'src/CQRS/WeaponType/Handlers/get-all-weapon-types.handler';

@Module({
  controllers: [WeaponTypeController],
  providers: [
    WeaponTypeService,
    CreateWeaponTypeHandler,
    GetAllWeaponTypesHandler,
  ],
  imports: [TypeOrmModule.forFeature([WeaponType]), CqrsModule],
})
export class WeaponTypeModule {}
