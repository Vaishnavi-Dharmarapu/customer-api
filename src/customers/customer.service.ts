import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  // Create a new customer
  async create(customerData: Partial<Customer>): Promise<Customer> {
    const customer = this.customerRepository.create(customerData);
    return this.customerRepository.save(customer);
  }

  // Get customer by ID
  async getById(customerId: number): Promise<Customer> {
    const customer = await this.customerRepository.findOneBy({ id: customerId });
    if (!customer) {
      throw new Error('Customer not found');
    }
    return customer;
  }

  // Get all customers
  async getAll(): Promise<Customer[]> {
    return this.customerRepository.find();
  }
}
