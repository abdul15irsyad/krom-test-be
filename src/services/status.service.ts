import { asc } from 'drizzle-orm';
import { status } from '../database/schema';
import { db } from '../database';

export const getListStatus = async () => {
  const data = await db
    .select({
      id: status.id,
      name: status.name,
    })
    .from(status)
    .orderBy(asc(status.name))
    .execute();

  return data;
};
