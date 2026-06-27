import { Expose, Transform } from 'class-transformer';

export class ReportDto {
  @Expose()
  price!: number;
  @Expose()
  make!: string;
  @Expose()
  model!: string;
  @Expose()
  year!: number;
  @Expose()
  lng!: number;
  @Expose()
  lat!: number;
  @Expose()
  mileage!: number;
  @Expose()
  id!: number;
  @Expose()
  approved!: boolean;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
  @Transform(({ obj }) => obj.user.id)
  @Expose()
  userId!: number;
}
