import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'yourpassword',
  database: 'customer_db',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],  // ✅ Fix duplicate entity issue
  migrations: [__dirname + '/migrations/*.ts'],
  synchronize: false,
  logging: true,
});

export default AppDataSource;
