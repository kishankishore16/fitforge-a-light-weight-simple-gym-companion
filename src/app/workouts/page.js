'use client';
import { useState } from 'react';
import { workoutPlans } from '@/data/workouts';
import WorkoutCard from '@/components/WorkoutCard';

export default function WorkoutsPage() {
  const [level, setLevel] = useState('all');

  const filtered = level === 'all' ? workoutPlans : workoutPlans.filter(w => w.level === level);

  return (
    <div className="page-container page-enter">
      <div style={{ marginBottom: 'var(--space-6)' }}>
        <h1 className="heading-2" style={{ marginBottom: 'var(--space-2)' }}>Workout Plans</h1>
        <p className="text-muted">Structured plans for every level — just pick and start</p>
      </div>

      <div className="toggle-group" style={{ marginBottom: 'var(--space-6)' }}>
        {['all', 'beginner', 'intermediate'].map(l => (
          <button key={l} className={`toggle-item ${level === l ? 'active' : ''}`} onClick={() => setLevel(l)}>
            {l === 'all' ? 'All Plans' : l.charAt(0).toUpperCase() + l.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid-3 stagger-children">
        {filtered.map(w => (
          <WorkoutCard key={w.id} workout={w} />
        ))}
      </div>
    </div>
  );
}
