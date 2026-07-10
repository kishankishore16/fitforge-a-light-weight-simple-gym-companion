import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { getDb } from './db';

const JWT_SECRET = process.env.JWT_SECRET || 'fitforge-secret-key-2024-change-in-production';
const TOKEN_NAME = 'fitforge-token';

export function hashPassword(password) {
  return bcrypt.hashSync(password, 10);
}

export function verifyPassword(password, hash) {
  return bcrypt.compareSync(password, hash);
}

export function createToken(user) {
  return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

export async function getUser() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(TOKEN_NAME);
    if (!token) return null;
    
    const decoded = verifyToken(token.value);
    if (!decoded) return null;
    
    const db = getDb();
    const result = await db.execute({
      sql: 'SELECT id, name, email, age, gender, height_cm, weight_kg, goal, level, created_at FROM users WHERE id = ?',
      args: [decoded.id]
    });
    
    return result.rows[0] || null;
  } catch (err) {
    console.error('getUser error:', err);
    return null;
  }
}

export async function setAuthCookie(token) {
  const cookieStore = await cookies();
  cookieStore.set(TOKEN_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
    path: '/'
  });
}

export async function clearAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(TOKEN_NAME);
}
