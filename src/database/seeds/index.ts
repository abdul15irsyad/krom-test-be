import { drizzle } from 'drizzle-orm/mysql2';
import { roleSeed } from './role.seed';
import { databaseURL } from '../../config';
import { seeders } from '../schema';
import { v4 as uuidv4 } from 'uuid';
import { eq } from 'drizzle-orm';
import { statusSeed } from './status.seed';
import { applicantSeed } from './applicant.seed';

const db = drizzle(databaseURL);
export type Database = typeof db;

(async () => {
  try {
    console.info('start seeding...');

    const executeSeeder = async (
      name: string,
      seed: (db: Database) => Promise<void>,
    ) => {
      const [seeder] = await db
        .select()
        .from(seeders)
        .where(eq(seeders.name, name))
        .limit(1);
      if (!seeder) {
        console.info(`'${name}' executing...`);
        await seed(db);
        await db.insert(seeders).values([
          {
            id: uuidv4(),
            name,
          },
        ]);
        console.info(`'${name}' executed`);
      } else {
        console.info(`'${name}' already executed`);
      }
    };

    for await (const seed of [roleSeed, statusSeed, applicantSeed]) {
      await executeSeeder(seed.name, seed);
    }
    console.info('seeding done');
  } catch (error) {
    console.error(error);
  } finally {
    process.exit(0);
  }
})();
