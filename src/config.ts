import { config } from 'dotenv';

config();

export const nodeENV = process.env.NODE_ENV ?? 'development';
export const port = process.env.PORT ? +process.env.PORT : 6000;
export const databaseURL =
  process.env.DATABASE_URL ?? 'mysql://root@localhost:3306/krom-test';
