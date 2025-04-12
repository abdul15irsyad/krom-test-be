import { relations } from 'drizzle-orm';
import {
  int,
  mysqlTable,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/mysql-core';
import { v4 as uuidv4 } from 'uuid';

export const timestamps = {
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
};

export const seeders = mysqlTable('seeders', {
  id: varchar({ length: 36 }).primaryKey().$defaultFn(uuidv4),
  name: varchar({ length: 255 }).notNull(),
  ...timestamps,
});

export const roles = mysqlTable('roles', {
  id: varchar({ length: 36 }).primaryKey().$defaultFn(uuidv4),
  name: varchar({ length: 255 }).notNull(),
  slug: varchar({ length: 255 }).notNull().unique(),
  ...timestamps,
});

export const status = mysqlTable('status', {
  id: varchar({ length: 36 }).primaryKey().$defaultFn(uuidv4),
  name: varchar({ length: 255 }).notNull(),
  slug: varchar({ length: 255 }).notNull().unique(),
  ...timestamps,
});

// export const files = mysqlTable('files', {
//   id: varchar({ length: 36 }).primaryKey().$defaultFn(uuidv4),
//   path: varchar({ length: 255 }).notNull(),
//   filename: varchar({ length: 255 }).notNull(),
//   originalFilename: varchar('original_filename', { length: 255 }).notNull(),
//   mimeType: varchar('mime_type', { length: 255 }).notNull(),
//   size: double().notNull(),
//   ...timestamps,
// });

export const applicants = mysqlTable('applicants', {
  id: varchar({ length: 36 }).primaryKey().$defaultFn(uuidv4),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  phoneNumber: varchar('phone_number', { length: 255 }).notNull(),
  location: varchar({ length: 255 }).notNull(),
  appliedRoleId: varchar('applied_role_id', { length: 255 })
    .notNull()
    .references(() => roles.id),
  yearsOfExperience: int('years_of_experience').default(0).notNull(),
  applicationStatusId: varchar('application_status_id', { length: 255 })
    .notNull()
    .references(() => status.id),
  resumeURL: text('resume_url').notNull(),
  // resumeId: varchar('resume_id', { length: 255 })
  //   .notNull()
  //   .references(() => files.id),
  ...timestamps,
});

export const applicantsRelations = relations(applicants, ({ one }) => ({
  // resume: one(files, {
  //   fields: [applicants.resumeId],
  //   references: [files.id],
  // }),
  appliedRole: one(roles, {
    fields: [applicants.appliedRoleId],
    references: [roles.id],
  }),
}));
