import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAllWeaponTypesQuery } from 'src/CQRS/WeaponType/Queries/get-all-weapon-types.query';
import { WeaponTypeService } from 'src/Services/weapon-type.service';

@QueryHandler(GetAllWeaponTypesQuery)
export class GetAllWeaponTypesHandler
  implements IQueryHandler<GetAllWeaponTypesQuery>
{
  constructor(private typeService: WeaponTypeService) {}

  async execute(query: GetAllWeaponTypesQuery) {
    return await this.typeService.getAllWeaponTypes();
  }
}
