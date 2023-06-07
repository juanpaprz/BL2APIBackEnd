import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateWeaponTypeCommand } from 'src/CQRS/WeaponType/Commands/create-weapon-type.command';
import { WeaponType } from 'src/Entities/weapon-type.entity';
import { WeaponTypeService } from 'src/Services/weapon-type.service';

@CommandHandler(CreateWeaponTypeCommand)
export class CreateWeaponTypeHandler
  implements ICommandHandler<CreateWeaponTypeCommand>
{
  constructor(private typeService: WeaponTypeService) {}

  async execute(command: CreateWeaponTypeCommand) {
    var type = new WeaponType();
    type.code = command.code;
    type.name = command.name;
    return await this.typeService.addNewWeaponType(type);
  }
}
