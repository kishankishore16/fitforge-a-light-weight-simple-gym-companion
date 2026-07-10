'use client';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ChevronDown, ChevronUp, Calendar, Clock, Target, Dumbbell, Timer } from 'lucide-react';
import { workoutPlans } from '@/data/workouts';
import { exercises } from '@/data/exercises';

export default function WorkoutDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [expandedDay, setExpandedDay] = useState(0);
  const plan = workoutPlans.find(w => w.id === id);

  if (!plan) {
    return (
      <div className="page-container page-enter">
        <div className="empty-state">
          <h3>Workout plan not found</h3>
          <Link href="/workouts" className="btn btn-primary" style={{ marginTop: 'var(--space-4)' }}>Back to Plans</Link>
        </div>
      </div>
    );
  }

  const getExerciseName = (exerciseId) => {
    const ex = exercises.find(e => e.id === exerciseId);
    return ex ? ex.name : exerciseId;
  };

  const levelBadge = plan.level === 'beginner' ? 'badge-success' : 'badge-warning';

  return (
    <div className="page-container page-enter">
      <button onClick={() => router.back()} className="btn btn-ghost" style={{ marginBottom: 'var(--space-4)' }}>
        <ArrowLeft size={18} /> Back
      </button>

      <div className="card" style={{ padding: 'var(--space-8)', marginBottom: 'var(--space-6)', background: 'linear-gradient(135deg, #1a2a1a 0%, #0a150a 100%)' }}>
        <h1 className="heading-2" style={{ marginBottom: 'var(--space-3)' }}>{plan.name}</h1>
        <p className="text-muted" style={{ marginBottom: 'var(--space-4)', lineHeight: 1.6 }}>{plan.description}</p>
        <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
          <span className={`badge ${levelBadge}`}>{plan.level}</span>
          <span className="badge badge-neutral"><Calendar size={12} /> {plan.daysPerWeek} days/week</span>
          <span className="badge badge-neutral"><Clock size={12} /> {plan.duration}</span>
          <span className="badge badge-neutral"><Target size={12} /> {plan.focusArea}</span>
        </div>
      </div>

      <h3 className="heading-4" style={{ marginBottom: 'var(--space-4)' }}>Weekly Schedule</h3>

      {plan.schedule.map((day, i) => (
        <div key={i} className="card" style={{ marginBottom: 'var(--space-3)' }}>
          <button 
            onClick={() => setExpandedDay(expandedDay === i ? -1 : i)} 
            style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: 'var(--space-1) 0' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: day.exercises.length > 0 ? 'var(--accent-dim)' : 'var(--surface-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 'var(--text-sm)', color: day.exercises.length > 0 ? 'var(--accent)' : 'var(--text-muted)' }}>
                D{day.day}
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 600 }}>{day.name}</div>
                <div className="text-muted text-sm">{day.exercises.length} exercises</div>
              </div>
            </div>
            {day.exercises.length > 0 && (expandedDay === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />)}
          </button>

          {expandedDay === i && day.exercises.length > 0 && (
            <div style={{ marginTop: 'var(--space-4)', borderTop: '1px solid var(--border)', paddingTop: 'var(--space-4)' }}>
              {day.warmup && <p className="text-sm" style={{ color: 'var(--info)', marginBottom: 'var(--space-3)' }}>🔥 Warmup: {day.warmup}</p>}
              
              {day.exercises.map((ex, j) => (
                <div key={j} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--space-3) 0', borderBottom: j < day.exercises.length - 1 ? '1px solid var(--border)' : 'none' }}>
                  <Link href={`/exercises/${ex.exerciseId}`} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 500, fontSize: 'var(--text-sm)' }} className="link-hover">
                    {getExerciseName(ex.exerciseId)}
                  </Link>
                  <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
                    <span>{ex.sets}×{ex.reps}</span>
                    <span><Timer size={12} /> {ex.restSeconds}s</span>
                  </div>
                </div>
              ))}

              {day.cooldown && <p className="text-sm" style={{ color: 'var(--success)', marginTop: 'var(--space-3)' }}>❄️ Cooldown: {day.cooldown}</p>}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
