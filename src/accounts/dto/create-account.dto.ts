import { IsNumber, IsString } from 'class-validator';

export class CreateAccountDto {
  @IsString()
  accountType: string;

  @IsNumber()
  balance: number;

  @IsNumber()
  customerId: number;  
}
