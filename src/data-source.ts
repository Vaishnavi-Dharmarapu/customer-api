import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Vaish2712',
  database: 'customer_db',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  logging: true,
});

export default AppDataSource;
