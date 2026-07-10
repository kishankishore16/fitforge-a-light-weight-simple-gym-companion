'use client';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Search, Plus, Trash2, ArrowLeft } from 'lucide-react';
import { indianFoods } from '@/data/indian-foods';
import CalorieRing from '@/components/CalorieRing';
import { getMealTypeIcon, getMealTypeLabel } from '@/lib/utils';

export default function CalorieTrackerPage() {
  const [search, setSearch] = useState('');
  const [mealType, setMealType] = useState('breakfast');
  const [loggedMeals, setLoggedMeals] = useState([]);
  const [calorieGoal] = useState(2200);

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    try {
      const res = await fetch('/api/tracker/calories');
      const data = await res.json();
      if (data.logs) setLoggedMeals(data.logs);
    } catch {}
  };

  const searchResults = useMemo(() => {
    if (!search || search.length < 2) return [];
    const q = search.toLowerCase();
    return indianFoods.filter(f => f.name.toLowerCase().includes(q)).slice(0, 10);
  }, [search]);

  const addFood = async (food) => {
    try {
      await fetch('/api/tracker/calories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          food_name: `${food.name} (${food.servingSize})`,
          calories: food.calories,
          protein_g: food.protein,
          carbs_g: food.carbs,
          fat_g: food.fat,
          meal_type: mealType
        })
      });
      setSearch('');
      fetchLogs();
    } catch {}
  };

  const removeFood = async (id) => {
    try {
      await fetch(`/api/tracker/calories?id=${id}`, { method: 'DELETE' });
      fetchLogs();
    } catch {}
  };

  const totals = loggedMeals.reduce((acc, m) => ({
    calories: acc.calories + (m.calories || 0),
    protein: acc.protein + (m.protein_g || 0),
    carbs: acc.carbs + (m.carbs_g || 0),
    fat: acc.fat + (m.fat_g || 0)
  }), { calories: 0, protein: 0, carbs: 0, fat: 0 });

  const mealTypes = ['breakfast', 'lunch', 'dinner', 'snack'];

  return (
    <div className="page-container page-enter">
      <Link href="/tracker" className="btn btn-ghost" style={{ marginBottom: 'var(--space-4)' }}>
        <ArrowLeft size={18} /> Back to Tracker
      </Link>

      <div style={{ marginBottom: 'var(--space-6)' }}>
        <h1 className="heading-2" style={{ marginBottom: 'var(--space-2)' }}>Calorie Tracker</h1>
        <p className="text-muted">Log your meals from 200+ Indian foods</p>
      </div>

      <div style={{ display: 'flex', gap: 'var(--space-6)', flexWrap: 'wrap', marginBottom: 'var(--space-6)' }}>
        <div style={{ flex: '1 1 300px' }}>
          <div className="category-pills" style={{ marginBottom: 'var(--space-4)' }}>
            {mealTypes.map(mt => (
              <button key={mt} className={`category-pill ${mealType === mt ? 'active' : ''}`} onClick={() => setMealType(mt)}>
                {getMealTypeIcon(mt)} {getMealTypeLabel(mt)}
              </button>
            ))}
          </div>

          <div style={{ position: 'relative', marginBottom: 'var(--space-4)' }}>
            <div className="search-bar">
              <Search className="search-bar-icon" />
              <input placeholder="Search Indian foods..." value={search} onChange={e => setSearch(e.target.value)} />
            </div>

            {searchResults.length > 0 && (
              <div className="card" style={{ position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 50, maxHeight: '300px', overflowY: 'auto', marginTop: 'var(--space-2)' }}>
                {searchResults.map(food => (
                  <button key={food.id} onClick={() => addFood(food)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--space-3)', border: 'none', borderBottom: '1px solid var(--border)', background: 'none', color: 'var(--text-primary)', cursor: 'pointer', textAlign: 'left' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-elevated)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'none'}>
                    <div>
                      <div style={{ fontWeight: 500, fontSize: 'var(--text-sm)' }}>{food.name}</div>
                      <div className="text-muted text-xs">{food.servingSize} • P:{food.protein}g C:{food.carbs}g F:{food.fat}g</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                      <span style={{ fontWeight: 600, color: 'var(--accent)' }}>{food.calories}</span>
                      <Plus size={16} color="var(--accent)" />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {loggedMeals.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {loggedMeals.map(meal => (
                <div key={meal.id} className="card" style={{ padding: 'var(--space-3)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: 'var(--text-sm)', fontWeight: 500 }}>{getMealTypeIcon(meal.meal_type)} {meal.food_name}</div>
                    <div className="text-muted text-xs">P:{meal.protein_g}g C:{meal.carbs_g}g F:{meal.fat_g}g</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                    <span style={{ fontWeight: 600 }}>{meal.calories} kcal</span>
                    <button onClick={() => removeFood(meal.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--error)', padding: '4px' }}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>No meals logged today. Search and add foods above!</p>
            </div>
          )}
        </div>

        <div style={{ flex: '0 0 200px', textAlign: 'center' }}>
          <CalorieRing consumed={Math.round(totals.calories)} goal={calorieGoal} />
          <div style={{ marginTop: 'var(--space-4)' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)' }}>
              <div><div style={{ fontWeight: 600 }}>{Math.round(totals.protein)}g</div><div className="text-muted text-xs">Protein</div></div>
              <div><div style={{ fontWeight: 600 }}>{Math.round(totals.carbs)}g</div><div className="text-muted text-xs">Carbs</div></div>
              <div><div style={{ fontWeight: 600 }}>{Math.round(totals.fat)}g</div><div className="text-muted text-xs">Fat</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
