import { and, desc, count, eq, sql, or, like } from 'drizzle-orm';
import { db } from '../database';
import { applicants, roles, status } from '../database/schema';

export const createApplicant = async ({
  name,
  email,
  phoneNumber,
  location,
  resumeURL,
  appliedRoleId,
  yearsOfExperience,
}: {
  name: string;
  email: string;
  phoneNumber: string;
  location: string;
  resumeURL: string;
  appliedRoleId: string;
  yearsOfExperience: number;
}) => {
  const [defaultStatus] = await db
    .select()
    .from(status)
    .where(eq(status.slug, 'applied'))
    .limit(1)
    .execute();

  const [newApplicant] = await db
    .insert(applicants)
    .values({
      name,
      email,
      phoneNumber,
      location,
      appliedRoleId,
      yearsOfExperience,
      resumeURL,
      applicationStatusId: defaultStatus.id,
    })
    .$returningId();

  return await getApplicant(newApplicant.id);
};

export const getAllApplicantsPagination = async ({
  page,
  limit,
  search,
  appliedRoleId,
  statusId,
}: {
  page: number;
  limit: number;
  search?: string;
  appliedRoleId?: string;
  statusId?: string;
}) => {
  const filter = [];
  if (search) {
    filter.push(
      or(
        like(applicants.name, `%${search}%`),
        like(applicants.email, `%${search}%`),
      ),
    );
  }
  if (appliedRoleId) {
    filter.push(eq(applicants.appliedRoleId, appliedRoleId));
  }
  if (statusId) {
    filter.push(eq(applicants.applicationStatusId, statusId));
  }

  const [{ count: countAll }] = await db
    .select({ count: count() })
    .from(applicants)
    .where(and(...filter))
    .execute();

  const data = await db
    .select()
    .from(applicants)
    .where(and(...filter))
    .leftJoin(roles, eq(roles.id, applicants.appliedRoleId))
    .leftJoin(status, eq(status.id, applicants.applicationStatusId))
    .offset((page - 1) * limit)
    .limit(limit)
    .orderBy(desc(applicants.createdAt))
    .execute();

  return {
    countAll,
    data: data.map((item) => {
      return {
        ...item.applicants,
        appliedRole: item.roles,
        applicationStatus: item.status,
      };
    }),
  };
};

export const getApplicant = async (id: string) => {
  const [data] = await db
    .select()
    .from(applicants)
    .where(eq(applicants.id, id))
    .leftJoin(roles, eq(roles.id, applicants.appliedRoleId))
    .leftJoin(status, eq(status.id, applicants.applicationStatusId))
    .execute();

  return (
    data && {
      ...data.applicants,
      appliedRole: data.roles,
      applicationStatus: data.status,
    }
  );
};

export const updateApplicant = async (
  id: string,
  {
    name,
    email,
    phoneNumber,
    location,
    resumeURL,
    appliedRoleId,
    yearsOfExperience,
    applicationStatusId,
  }: {
    name: string;
    email: string;
    phoneNumber: string;
    location: string;
    resumeURL: string;
    appliedRoleId: string;
    yearsOfExperience: number;
    applicationStatusId: string;
  },
) => {
  await db
    .update(applicants)
    .set({
      name,
      email,
      phoneNumber,
      location,
      appliedRoleId,
      yearsOfExperience,
      resumeURL,
      applicationStatusId,
      updatedAt: sql`NOW()`,
    })
    .where(eq(applicants.id, id))
    .execute();

  return await getApplicant(id);
};

export const deleteApplicant = async (id: string) => {
  await db.delete(applicants).where(eq(applicants.id, id)).execute();
};
