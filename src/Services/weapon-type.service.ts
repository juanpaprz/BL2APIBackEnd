import { Injectable } from '@nestjs/common';
import { Repository, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { WeaponType } from 'src/Entities/weapon-type.entity';

@Injectable()
export class WeaponTypeService {
  constructor(
    @InjectRepository(WeaponType)
    private entityRepository: Repository<WeaponType>,
  ) {}

  async getAllWeaponTypes(): Promise<WeaponType[]> {
    return await this.entityRepository.find();
  }

  async addNewWeaponType(weaponType: WeaponType): Promise<WeaponType> {
    const newWeaponType = await this.entityRepository.create(weaponType);
    return await this.entityRepository.save(newWeaponType);
  }
}
