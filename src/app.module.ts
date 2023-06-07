import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeaponType } from './Entities/weapon-type.entity';
import { WeaponTypeModule } from './Modules/weapon-type.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: '/cloudsql/bl2-api-db:us-central1:bl2-api-database',
      port: 5432,
      username: 'juanHost',
      password: 'host_bl2',
      database: 'bl2-api',
      entities: [WeaponType],
      synchronize: true,
    }),
    WeaponTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
