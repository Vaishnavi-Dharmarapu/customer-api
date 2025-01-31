import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from './customers/customer.module';
import { AccountModule } from './accounts/account.module';
import {Customer} from './customers/entities/customer.entity';
import { Account } from './accounts/entities/account.entity';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Vaish2712',
      database: 'customer_db',
      synchronize: true,
      entities: [Account,Customer],
    }),
    CustomerModule,  
    AccountModule,
  ],
})
export class AppModule {}
