'use client';
import { useState, useMemo } from 'react';
import { Flame, Leaf, Drumstick, IndianRupee } from 'lucide-react';
import { dietPlans, dietGoals } from '@/data/diet-plans';
import { getMealTypeIcon, getMealTypeLabel } from '@/lib/utils';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function DietPage() {
  const [goal, setGoal] = useState('muscleGain');
  const [dietType, setDietType] = useState('vegetarian');
  const [dayIndex, setDayIndex] = useState(0);

  const plan = useMemo(() => {
    return dietPlans.find(p => p.goal === goal && p.dietType === dietType);
  }, [goal, dietType]);

  const dayMeals = plan?.weeklyPlan?.[dayIndex]?.meals || [];

  const dayTotals = dayMeals.reduce((acc, m) => ({
    calories: acc.calories + (m.calories || 0),
    protein: acc.protein + (m.protein || 0),
    carbs: acc.carbs + (m.carbs || 0),
    fat: acc.fat + (m.fat || 0),
    cost: acc.cost + parseInt((m.cost || '₹0').replace(/[₹,]/g, '')) || 0
  }), { calories: 0, protein: 0, carbs: 0, fat: 0, cost: 0 });

  return (
    <div className="page-container page-enter">
      <div style={{ marginBottom: 'var(--space-6)' }}>
        <h1 className="heading-2" style={{ marginBottom: 'var(--space-2)' }}>Indian Diet Plans</h1>
        <p className="text-muted">Budget-friendly meal plans with real Indian food</p>
      </div>

      <div className="section">
        <h3 className="section-title" style={{ marginBottom: 'var(--space-3)' }}>Your Goal</h3>
        <div className="grid-3" style={{ marginBottom: 'var(--space-4)' }}>
          {dietGoals.map(g => (
            <button key={g.id} className={`card card-interactive ${goal === g.id ? 'card-active' : ''}`} onClick={() => setGoal(g.id)}
              style={{ textAlign: 'center', padding: 'var(--space-4)', border: goal === g.id ? '2px solid var(--accent)' : '2px solid transparent', cursor: 'pointer', background: goal === g.id ? 'var(--accent-dim)' : undefined }}>
              <div style={{ fontSize: '1.5rem', marginBottom: 'var(--space-2)' }}>{g.emoji}</div>
              <div style={{ fontWeight: 600 }}>{g.name}</div>
              <div className="text-muted text-xs">{g.calories} kcal</div>
            </button>
          ))}
        </div>
      </div>

      <div className="section">
        <h3 className="section-title" style={{ marginBottom: 'var(--space-3)' }}>Diet Type</h3>
        <div className="toggle-group" style={{ marginBottom: 'var(--space-4)' }}>
          <button className={`toggle-item ${dietType === 'vegetarian' ? 'active' : ''}`} onClick={() => setDietType('vegetarian')}>
            🥬 Vegetarian
          </button>
          <button className={`toggle-item ${dietType === 'nonVegetarian' ? 'active' : ''}`} onClick={() => setDietType('nonVegetarian')}>
            🍗 Non-Veg
          </button>
        </div>
      </div>

      {plan && (
        <>
          <div className="card" style={{ padding: 'var(--space-4)', marginBottom: 'var(--space-4)', background: 'linear-gradient(135deg, #1a2a1a 0%, #0a150a 100%)' }}>
            <h3 style={{ marginBottom: 'var(--space-2)' }}>{plan.name}</h3>
            <p className="text-muted text-sm" style={{ marginBottom: 'var(--space-3)' }}>{plan.description}</p>
            <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
              <span className="badge badge-accent">{plan.dailyCalories} kcal/day</span>
              <span className="badge badge-neutral">Budget: {plan.dailyBudget}</span>
              <span className="badge badge-neutral">P{plan.macroSplit.protein} C{plan.macroSplit.carbs} F{plan.macroSplit.fat}</span>
            </div>
          </div>

          <div className="day-tabs" style={{ marginBottom: 'var(--space-4)' }}>
            {days.map((d, i) => (
              <button key={d} className={`day-tab ${dayIndex === i ? 'active' : ''}`} onClick={() => setDayIndex(i)}>
                {d.slice(0, 3)}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {dayMeals.filter(m => m.calories > 0).map((meal, i) => (
              <div key={i} className="meal-card">
                <div className="meal-card-header">
                  <span className="meal-card-icon">{getMealTypeIcon(meal.type)}</span>
                  <div>
                    <div className="meal-card-type">{getMealTypeLabel(meal.type)}</div>
                    <div className="meal-card-name">{meal.name}</div>
                  </div>
                </div>
                <div className="meal-card-macros">
                  <span className="macro-tag"><Flame size={12} /> {meal.calories} kcal</span>
                  <span className="macro-tag">P: {meal.protein}g</span>
                  <span className="macro-tag">C: {meal.carbs}g</span>
                  <span className="macro-tag">F: {meal.fat}g</span>
                  <span className="macro-tag" style={{ color: 'var(--accent)' }}>{meal.cost}</span>
                </div>
                {meal.ingredients.length > 0 && (
                  <div className="meal-card-ingredients">
                    {meal.ingredients.join(' • ')}
                  </div>
                )}
                <div className="text-muted text-xs" style={{ marginTop: 'var(--space-2)' }}>⏱ {meal.prepTime}</div>
              </div>
            ))}
          </div>

          <div className="card card-accent" style={{ marginTop: 'var(--space-4)', padding: 'var(--space-4)' }}>
            <h4 style={{ marginBottom: 'var(--space-3)', fontWeight: 600 }}>Daily Summary — {days[dayIndex]}</h4>
            <div className="grid-2" style={{ gridTemplateColumns: 'repeat(5, 1fr)', gap: 'var(--space-2)', textAlign: 'center' }}>
              <div><div className="stat-number-sm">{dayTotals.calories}</div><div className="text-muted text-xs">kcal</div></div>
              <div><div className="stat-number-sm">{dayTotals.protein}g</div><div className="text-muted text-xs">Protein</div></div>
              <div><div className="stat-number-sm">{dayTotals.carbs}g</div><div className="text-muted text-xs">Carbs</div></div>
              <div><div className="stat-number-sm">{dayTotals.fat}g</div><div className="text-muted text-xs">Fat</div></div>
              <div><div className="stat-number-sm">₹{dayTotals.cost}</div><div className="text-muted text-xs">Cost</div></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
