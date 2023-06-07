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
      type: 'mssql',
      host: '/cloudsql/bl2-api:us-central1:bl2-api-sql',
      port: 5432,
      username: 'sqlserver',
      password: 'bl2_host',
      database: 'bl2-api-db',
      entities: [WeaponType],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
