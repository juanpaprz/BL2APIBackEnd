import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UsePipes,
  ValidationPipe,
  HttpCode,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateWeaponTypeCommand } from 'src/CQRS/WeaponType/Commands/create-weapon-type.command';
import { GetAllWeaponTypesQuery } from 'src/CQRS/WeaponType/Queries/get-all-weapon-types.query';
import { WeaponTypeDTO } from 'src/DTO/WeaponType/weapon-type';

@Controller('weapon-type')
export class WeaponTypeController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  getAllWeaponTypes() {
    return this.queryBus.execute(new GetAllWeaponTypesQuery());
  }

  @Post()
  @HttpCode(201)
  @UsePipes(new ValidationPipe({ transform: true }))
  addNewWeaponType(@Body() weaponType: CreateWeaponTypeCommand) {
    return this.commandBus.execute(weaponType);
  }
}
