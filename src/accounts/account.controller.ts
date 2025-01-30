import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { AccountService } from './account.service';
import { Account } from './entities/account.entity';

@Controller('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  // Create a new account for a customer
  @Post()
  async create(@Body() accountData: Partial<Account>): Promise<Account> {
    return this.accountService.create(accountData);
  }

  // Get the balance of a specific account
  @Get(':id/balance')
  async getBalance(@Param('id') id: number): Promise<{ balance: number }> {
    const balance = await this.accountService.getBalance(id);
    return { balance };
  }

  // Get all accounts for a specific customer
  @Get('customer/:customerId')
  async getAccounts(@Param('customerId') customerId: number): Promise<Account[]> {
    return this.accountService.getAllAccounts(customerId);
  }
}
