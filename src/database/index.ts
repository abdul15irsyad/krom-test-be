import { drizzle } from 'drizzle-orm/mysql2';
import { createPool } from 'mysql2';
import { databaseURL } from '../config';
import { applicants, roles, status } from './schema';

const pool = createPool(databaseURL);

export const db = drizzle(pool, {
  schema: {
    applicants,
    // files,
    roles,
    status,
  },
  logger: {
    logQuery: (query, params) => {
      console.info('Query:', query);
      console.info('Params:', params);
    },
  },
  mode: 'default',
});

export type Database = typeof db;
