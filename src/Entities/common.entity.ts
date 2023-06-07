import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CommonEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  code: string;
  @Column()
  name: string;
}
