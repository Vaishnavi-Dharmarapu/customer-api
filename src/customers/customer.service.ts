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
  async getById(id: number): Promise<Customer> {
    return this.customerRepository.findOne({
      where: { id }, // Passing 'where' for the ID search
    });
  }

  // Get all customers
  async getAll(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  // Update an existing customer by ID
  async update(id: number, customerData: Partial<Customer>): Promise<Customer> {
    await this.customerRepository.update(id, customerData);
    return this.customerRepository.findOne({
      where: { id }, // Correct usage of 'where'
    });
  }

  // Delete a customer by ID
  async delete(id: number): Promise<void> {
    await this.customerRepository.delete(id);
  }
}
