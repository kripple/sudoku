import {
  date,
  integer,
  pgTable,
  timestamp,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/pg-core';

export const Solution = pgTable(
  'solutions',
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    value: varchar().notNull(),
    date: date().defaultNow().notNull().unique(),
    created_at: timestamp({ withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [uniqueIndex('solution_date_idx').on(table.date)],
);
export type Solution = typeof Solution.$inferSelect;
