import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { getUser } from '@/lib/auth';

export async function GET(request) {
  try {
    const user = await getUser();
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });

    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date') || new Date().toISOString().split('T')[0];

    const db = getDb();
    const result = await db.execute({
      sql: 'SELECT * FROM calorie_logs WHERE user_id = ? AND date = ? ORDER BY created_at DESC',
      args: [user.id, date]
    });
    
    const logs = result.rows;
    
    const totals = logs.reduce((acc, l) => ({
      calories: acc.calories + (l.calories || 0),
      protein: acc.protein + (l.protein_g || 0),
      carbs: acc.carbs + (l.carbs_g || 0),
      fat: acc.fat + (l.fat_g || 0)
    }), { calories: 0, protein: 0, carbs: 0, fat: 0 });

    return NextResponse.json({ logs, totals });
  } catch (err) {
    console.error('Calories GET error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const user = await getUser();
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });

    const { food_name, calories, protein_g, carbs_g, fat_g, meal_type } = await request.json();
    if (!food_name || !calories) return NextResponse.json({ error: 'Food name and calories required' }, { status: 400 });

    const db = getDb();
    const date = new Date().toISOString().split('T')[0];

    await db.execute({
      sql: 'INSERT INTO calorie_logs (user_id, food_name, calories, protein_g, carbs_g, fat_g, meal_type, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      args: [user.id, food_name, calories, protein_g || 0, carbs_g || 0, fat_g || 0, meal_type || 'snack', date]
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Calories POST error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const user = await getUser();
    if (!user) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Log ID required' }, { status: 400 });

    const db = getDb();
    await db.execute({
      sql: 'DELETE FROM calorie_logs WHERE id = ? AND user_id = ?',
      args: [id, user.id]
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Calories DELETE error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
