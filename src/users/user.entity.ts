/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Exclude } from 'class-transformer';
import { Report } from 'src/reports/report.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @Exclude()
  email!: string;

  @Column()
  password!: string;

  @OneToMany(() => Report, (report) => report.user)
  reports!: Report[];
}
