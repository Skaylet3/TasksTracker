import { Type } from 'class-transformer'
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator'

export class CreateTaskDto {
  @IsString()
  @Type(() => String)
  @IsNotEmpty()
  @MaxLength(120)
  title!: string;

  @IsOptional()
  @IsString()
  @Type(() => String)
  @MaxLength(2000)
  description?: string;
}
