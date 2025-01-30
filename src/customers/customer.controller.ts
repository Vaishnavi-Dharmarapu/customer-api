import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './entities/customer.entity';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  // Create a new customer
  @Post()
  async create(@Body() customerData: Partial<Customer>): Promise<Customer> {
    return this.customerService.create(customerData);
  }

  // Get customer details by ID
  @Get(':id')
  async getById(@Param('id') id: number): Promise<Customer> {
    return this.customerService.getById(id);
  }

  // Get all customers
  @Get()
  async getAll(): Promise<Customer[]> {
    return this.customerService.getAll();
  }
}
