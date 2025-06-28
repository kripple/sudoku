import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

import { getOrCreateSolution } from '@/backend/db/adapter';
import { toDatetime } from '@/utils/time';

function getDb(connectionString: string): AppDatabase {
  const sql = neon(connectionString);
  const db = drizzle({ client: sql });
  return db;
}

const getOptionsHeaders = (allowedOrigins: string) =>
  ({
    'Access-Control-Allow-Origin': allowedOrigins,
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  }) as const;

const getHeaders = (allowedOrigins: string) =>
  ({
    ...getOptionsHeaders(allowedOrigins),
    'Content-Type': 'application/json',
  }) as const;

export default async function handler(request: Request) {
  try {
    const allowedOrigins = Netlify.env.get('VITE_APP_URL');
    if (!allowedOrigins) throw Error('missing VITE_APP_URL');

    if (request.method === 'OPTIONS')
      return new Response(null, {
        status: 204,
        headers: getOptionsHeaders(allowedOrigins),
      });

    const connectionString = Netlify.env.get('DATABASE_URL');
    if (!connectionString) throw Error('missing DATABASE_URL');
    const db = getDb(connectionString);
    const { date, ...solution } = await getOrCreateSolution({ db });
    const data = { ...solution, date: toDatetime(date) };

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: getHeaders(allowedOrigins),
    });
  } catch (error) {
    console.error('Unexpected handler error', error);
    const allowedOrigins = Netlify.env.get('VITE_APP_URL');
    if (!allowedOrigins) console.warn('missing VITE_APP_URL');

    return new Response('Internal Server Error', {
      status: 500,
      headers: getHeaders(allowedOrigins || ''),
    });
  }
}
