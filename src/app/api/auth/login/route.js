import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { verifyPassword, createToken, setAuthCookie } from '@/lib/auth';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    const db = getDb();
    const result = await db.execute({
      sql: 'SELECT * FROM users WHERE email = ?',
      args: [email]
    });
    
    const user = result.rows[0];

    if (!user) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    const valid = verifyPassword(password, user.password_hash);
    if (!valid) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    const token = createToken(user);
    await setAuthCookie(token);

    const { password_hash, ...safeUser } = user;
    return NextResponse.json({ user: safeUser });
  } catch (err) {
    console.error('Login error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
