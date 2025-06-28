import {
  date,
  index,
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
    value: varchar().notNull().unique(),
    date: date().defaultNow().notNull().unique(),
    created_at: timestamp({ withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [uniqueIndex('game_solution_date_idx').on(table.date)],
);
export type Solution = typeof Solution.$inferSelect;

export const Game = pgTable(
  'games',
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    solution_id: integer()
      .notNull()
      .references(() => Solution.id),
    created_at: timestamp({ withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [index('game_solution_idx').on(table.solution_id)],
);
export type Game = typeof Game.$inferSelect;
