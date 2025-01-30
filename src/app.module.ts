import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from './customers/customer.module';
import { AccountModule } from './accounts/account.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'yourpassword',
      database: 'customer_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // ✅ Correct entity path
      synchronize: false,
      autoLoadEntities: true,
    }),
    CustomerModule,  // ✅ Import CustomerModule instead of defining Customer again
    AccountModule,
  ],
})
export class AppModule {}
