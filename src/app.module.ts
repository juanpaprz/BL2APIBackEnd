import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeaponType } from './Entities/weapon-type.entity';
import { WeaponTypeModule } from './Modules/weapon-type.module';

@Module({
  imports: [
    WeaponTypeModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'bl2-api-db',
      entities: [WeaponType],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
