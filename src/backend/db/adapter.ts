import { sql } from 'drizzle-orm';
import { getSudoku } from 'sudoku-gen';

import { Solution } from '@/backend/db/schema';
import type { Solutions } from '@/types/data';

async function createNewSolution({
  db,
}: {
  db: AppDatabase;
}): Promise<Solution> {
  console.info('create new solution');

  const easy = getSudoku('easy');
  const medium = getSudoku('medium');
  const hard = getSudoku('hard');
  const expert = getSudoku('expert');
  const json: Solutions = { easy, medium, hard, expert };
  const value = JSON.stringify(json);

  const solutions = await db
    .insert(Solution)
    .values({
      value,
    })
    .returning();
  const solution = solutions.pop();
  if (!solution) {
    throw Error('failed to create new solution');
  }
  return solution;
}

async function getSolution({
  db,
}: {
  db: AppDatabase;
}): Promise<Solution | undefined> {
  console.info('get solution');
  const solutions = await db
    .select()
    .from(Solution)
    .where(sql`${Solution.date} = CURRENT_DATE`);
  const solution = solutions.pop();
  return solution;
}

export async function getOrCreateSolution({
  db,
}: {
  db: AppDatabase;
}): Promise<Solution> {
  const currentSolution = await getSolution({ db });
  if (currentSolution) console.info(`get solution '${currentSolution.id}'`);

  const solution = currentSolution || (await createNewSolution({ db }));
  if (!currentSolution) console.info(`create new solution '${solution.id}'`);

  return solution;
}
