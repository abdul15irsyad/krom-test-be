import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import { databaseURL } from '../config';

export default defineConfig({
  out: './src/database/migrations',
  schema: './src/database/schema.ts',
  dialect: 'mysql',
  migrations: {
    table: 'migrations',
  },
  dbCredentials: {
    url: databaseURL,
  },
});
