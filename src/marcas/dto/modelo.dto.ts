import { IsNotEmpty, IsNumber, IsString, MaxLength} from 'class-validator';

export class CreateModeloDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNumber()
  @IsNotEmpty()
  @MaxLength(100)
  marca_id: number;

  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  user_id: string;

}
