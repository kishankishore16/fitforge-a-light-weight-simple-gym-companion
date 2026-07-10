import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { hashPassword, createToken, setAuthCookie } from '@/lib/auth';

export async function POST(request) {
  try {
    const { name, email, password, age, gender, height_cm, weight_kg, goal, level } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: 'Name, email, and password are required' }, { status: 400 });
    }
    if (password.length < 6) {
      return NextResponse.json({ error: 'Password must be at least 6 characters' }, { status: 400 });
    }

    const db = getDb();
    const existing = await db.execute({
      sql: 'SELECT id FROM users WHERE email = ?',
      args: [email]
    });
    
    if (existing.rows.length > 0) {
      return NextResponse.json({ error: 'Email already registered' }, { status: 409 });
    }

    const password_hash = hashPassword(password);
    
    const insertResult = await db.execute({
      sql: 'INSERT INTO users (name, email, password_hash, age, gender, height_cm, weight_kg, goal, level) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      args: [name, email, password_hash, age || null, gender || null, height_cm || null, weight_kg || null, goal || 'generalFitness', level || 'beginner']
    });

    const userId = Number(insertResult.lastInsertRowid);
    const user = { id: userId, name, email, age, gender, height_cm, weight_kg, goal, level };
    
    const token = createToken(user);
    await setAuthCookie(token);

    // Add initial weight log if weight provided
    if (weight_kg) {
      const today = new Date().toISOString().split('T')[0];
      await db.execute({
        sql: 'INSERT INTO weight_logs (user_id, weight_kg, date) VALUES (?, ?, ?)',
        args: [userId, weight_kg, today]
      });
    }

    return NextResponse.json({ user });
  } catch (err) {
    console.error('Signup error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
