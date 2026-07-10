import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { getUser } from '@/lib/auth';

export async function GET() {
  try {
    const user = await getUser();
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });

    const db = getDb();
    const result = await db.execute({
      sql: 'SELECT * FROM weight_logs WHERE user_id = ? ORDER BY date DESC LIMIT 90',
      args: [user.id]
    });
    
    return NextResponse.json({ logs: result.rows });
  } catch (err) {
    console.error('Weight GET error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const user = await getUser();
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });

    const { weight_kg, date } = await request.json();
    if (!weight_kg) return NextResponse.json({ error: 'Weight is required' }, { status: 400 });

    const db = getDb();
    const logDate = date || new Date().toISOString().split('T')[0];
    
    await db.execute({
      sql: 'INSERT INTO weight_logs (user_id, weight_kg, date) VALUES (?, ?, ?)',
      args: [user.id, weight_kg, logDate]
    });
    
    // Update user's current weight
    await db.execute({
      sql: 'UPDATE users SET weight_kg = ? WHERE id = ?',
      args: [weight_kg, user.id]
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Weight POST error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
