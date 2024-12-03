import { IsString, MinLength } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @MinLength(4)
  title: string;

  @MinLength(10)
  @IsString()
  description: string;
}