import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Customer } from '../../customers/entities/customer.entity';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  accountType: string;

  @Column()
  balance: number;

  @ManyToOne(() => Customer, (customer) => customer.accounts)
  customer: Customer; 
}
