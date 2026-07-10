import { createClient } from '@libsql/client';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

async function initDb() {
  const url = process.env.TURSO_DATABASE_URL;
  const authToken = process.env.TURSO_AUTH_TOKEN;

  if (!url || !authToken) {
    console.error('Missing TURSO credentials in .env.local');
    process.exit(1);
  }

  const client = createClient({ url, authToken });

  console.log('Connecting to Turso...');

  try {
    await client.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        age INTEGER,
        gender TEXT,
        height_cm REAL,
        weight_kg REAL,
        goal TEXT DEFAULT 'generalFitness',
        level TEXT DEFAULT 'beginner',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Created users table');

    await client.execute(`
      CREATE TABLE IF NOT EXISTS weight_logs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        weight_kg REAL NOT NULL,
        date TEXT NOT NULL,
        notes TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )
    `);
    console.log('Created weight_logs table');

    await client.execute(`
      CREATE TABLE IF NOT EXISTS calorie_logs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        food_name TEXT NOT NULL,
        calories REAL NOT NULL,
        protein_g REAL DEFAULT 0,
        carbs_g REAL DEFAULT 0,
        fat_g REAL DEFAULT 0,
        meal_type TEXT DEFAULT 'snack',
        date TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )
    `);
    console.log('Created calorie_logs table');

    await client.execute(`
      CREATE TABLE IF NOT EXISTS workout_logs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        workout_id TEXT NOT NULL,
        exercises_completed TEXT,
        duration_min INTEGER DEFAULT 0,
        date TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )
    `);
    console.log('Created workout_logs table');

    console.log('Database initialization complete!');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

initDb();
