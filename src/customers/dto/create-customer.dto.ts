import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  @IsString()
  corporateId: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  email: string;
}

