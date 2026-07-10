import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { getUser } from '@/lib/auth';

export async function GET() {
  try {
    const user = await getUser();
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    
    const db = getDb();
    const result = await db.execute({
      sql: 'SELECT * FROM workout_logs WHERE user_id = ? ORDER BY date DESC LIMIT 30',
      args: [user.id]
    });
    
    return NextResponse.json({ logs: result.rows });
  } catch (err) {
    console.error('Workouts GET error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const user = await getUser();
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    
    const { workout_id, exercises_completed, duration_min } = await request.json();
    if (!workout_id) return NextResponse.json({ error: 'Workout ID required' }, { status: 400 });
    
    const db = getDb();
    const date = new Date().toISOString().split('T')[0];
    
    await db.execute({
      sql: 'INSERT INTO workout_logs (user_id, workout_id, exercises_completed, duration_min, date) VALUES (?, ?, ?, ?, ?)',
      args: [user.id, workout_id, JSON.stringify(exercises_completed || []), duration_min || 0, date]
    });
    
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Workouts POST error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
