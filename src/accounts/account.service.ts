import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {}

  // Create a new account for a customer
  async create(accountData: Partial<Account>): Promise<Account> {
    const account = this.accountRepository.create(accountData);
    return this.accountRepository.save(account);
  }

  // Get account balance by account ID
  async getBalance(accountId: number): Promise<number> {
    const account = await this.accountRepository.findOneBy({ id: accountId });
    if (!account) {
      throw new Error('Account not found');
    }
    return account.balance;
  }

  // Get all accounts for a customer (Optional)
  async getAllAccounts(customerId: number): Promise<Account[]> {
    return this.accountRepository.find({
      where: { customer: { id: customerId } },
    });
  }
}
