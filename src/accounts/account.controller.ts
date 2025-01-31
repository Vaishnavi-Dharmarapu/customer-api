// account.controller.ts
import { Controller, Post, Get, Param, Body, Put, Delete } from '@nestjs/common';
import { AccountService } from './account.service';
import { Account } from './entities/account.entity';

@Controller('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  // Create a new account
  @Post()
  async create(@Body() accountData: Partial<Account>): Promise<Account> {
    return this.accountService.create(accountData);
  }

  // Get account details by ID
  @Get(':id')
  async getById(@Param('id') id: number): Promise<Account> {
    return this.accountService.getById(id);
  }

  // Get all accounts
  @Get()
  async getAll(): Promise<Account[]> {
    return this.accountService.getAll();
  }

  // Update account details
  @Put(':id')
  async update(@Param('id') id: number, @Body() accountData: Partial<Account>): Promise<Account> {
    return this.accountService.update(id, accountData);
  }

  // Delete an account
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<string> {
    return this.accountService.remove(id);
  }
}
