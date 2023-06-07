import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateWeaponTypeCommand } from 'src/CQRS/WeaponType/Commands/create-weapon-type.command';
import { WeaponTypeDTO } from 'src/DTO/WeaponType/weapon-type';

@Controller('weapon-type')
export class WeaponTypeController {
  constructor(private readonly commandBus: CommandBus) {}

  @Get()
  getAllWeaponTypes() {}

  @Post()
  addNewWeaponType(@Body() weaponType: CreateWeaponTypeCommand) {
    return this.commandBus.execute(weaponType);
  }
}
