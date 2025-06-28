import { eq } from 'drizzle-orm';

import { getOrCreateSolution } from '@/backend/db/adapters/solutions';
import { Game } from '@/backend/db/schema';
import type { Solution } from '@/backend/db/schema';

async function createNewGame({ db }: { db: AppDatabase }): Promise<{
  game: Game;
  date: Solution['date'];
}> {
  console.info('create new game');
  const solution = await getOrCreateSolution({ db });
  const games = await db
    .insert(Game)
    .values({
      solution_id: solution.id,
    })
    .returning();
  const game = games.pop();
  if (!game) {
    throw Error('failed to create new game');
  }
  return { game, date: solution.date };
}

async function getGame({ db }: { db: AppDatabase }): Promise<{
  game?: Game;
  date: Solution['date'];
}> {
  console.info('get game');
  const solution = await getOrCreateSolution({ db });
  const games = await db
    .select()
    .from(Game)
    .where(eq(Game.solution_id, solution.id));
  const game = games.pop();
  return { game, date: solution.date };
}

export async function getOrCreateGame({ db }: { db: AppDatabase }): Promise<{
  game: Game;
  date: Solution['date'];
}> {
  console.info('get or create game');

  const { game: currentGame, date } = await getGame({ db });
  if (currentGame) console.info(`get game '${currentGame.id}'`);

  const game = currentGame || (await createNewGame({ db })).game;
  if (!currentGame) console.info(`create new game '${game.id}'`);

  return { game, date };
}
