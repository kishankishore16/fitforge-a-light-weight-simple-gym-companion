import { createClient } from '@libsql/client';

let client;

export function getDb() {
  if (!client) {
    const url = process.env.TURSO_DATABASE_URL || 'file:local.db';
    const authToken = process.env.TURSO_AUTH_TOKEN;

    client = createClient({
      url,
      authToken,
    });
    
    // Asynchronous init is not ideal here, so we require developers to manually run an init script 
    // or rely on a route to bootstrap tables. For serverless, it's safer to pre-initialize the DB.
  }
  return client;
}
