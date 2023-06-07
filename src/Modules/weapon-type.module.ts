import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeaponTypeController } from 'src/Controllers/weapon-type.controller';
import { WeaponType } from 'src/Entities/weapon-type.entity';
import { WeaponTypeService } from 'src/Services/weapon-type.service';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateWeaponTypeHandler } from 'src/CQRS/WeaponType/Handlers/create-weapon-type.handler';

@Module({
  controllers: [WeaponTypeController],
  providers: [WeaponTypeService, CreateWeaponTypeHandler],
  imports: [TypeOrmModule.forFeature([WeaponType]), CqrsModule],
})
export class WeaponTypeModule {}
