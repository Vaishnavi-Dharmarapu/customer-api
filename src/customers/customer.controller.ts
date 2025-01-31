import { Controller, Post, Get, Param, Body, Put, Delete } from '@nestjs/common';
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

  // Update an existing customer by ID
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() customerData: Partial<Customer>,
  ): Promise<Customer> {
    return this.customerService.update(id, customerData);
  }

  // Delete a customer by ID
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.customerService.delete(id);
  }
}
