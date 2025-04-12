import { asc } from 'drizzle-orm';
import { roles } from '../database/schema';
import { db } from '../database';

export const getListRole = async () => {
  const data = await db
    .select({
      id: roles.id,
      name: roles.name,
    })
    .from(roles)
    .orderBy(asc(roles.name))
    .execute();

  return data;
};
