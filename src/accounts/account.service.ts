// account.service.ts
import { Injectable } from '@nestjs/common';
import { Account } from './entities/account.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {}

  async create(accountData: Partial<Account>): Promise<Account> {
    const account = this.accountRepository.create(accountData);
    return this.accountRepository.save(account);
  }

  async getById(id: number): Promise<Account> {
    return this.accountRepository.findOne({ where: { id } });
  }

  async getAll(): Promise<Account[]> {
    return this.accountRepository.find();
  }

  async update(id: number, accountData: Partial<Account>): Promise<Account> {
    await this.accountRepository.update(id, accountData);
    return this.accountRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<string> {
    await this.accountRepository.delete(id);
    return `Account with id ${id} has been deleted successfully.`;
  }
}
