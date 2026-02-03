import { IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class GetTaskParamDto {
  @Type(() => String)
  @IsString()
  @Min(1)
  id!: string;
}
