'use client';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ChevronLeft, ChevronRight, Dumbbell, CheckCircle, XCircle, Clock, Repeat, Timer } from 'lucide-react';
import { exercises } from '@/data/exercises';

export default function ExerciseDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  
  const index = exercises.findIndex(e => e.id === id);
  const exercise = exercises[index];
  
  if (!exercise) {
    return (
      <div className="page-container page-enter">
        <div className="empty-state">
          <h3>Exercise not found</h3>
          <Link href="/exercises" className="btn btn-primary" style={{ marginTop: 'var(--space-4)' }}>Back to Exercises</Link>
        </div>
      </div>
    );
  }

  const prev = index > 0 ? exercises[index - 1] : null;
  const next = index < exercises.length - 1 ? exercises[index + 1] : null;

  const diffBadge = exercise.difficulty === 'beginner' ? 'badge-success' : exercise.difficulty === 'intermediate' ? 'badge-warning' : 'badge-error';

  return (
    <div className="page-container page-enter">
      <button onClick={() => router.back()} className="btn btn-ghost" style={{ marginBottom: 'var(--space-4)' }}>
        <ArrowLeft size={18} /> Back
      </button>

      <div className="card" style={{ padding: 'var(--space-8)', marginBottom: 'var(--space-6)', textAlign: 'center', background: 'linear-gradient(135deg, #1a2a1a 0%, #0a150a 100%)' }}>
        <Dumbbell size={64} color="#AAFF00" style={{ margin: '0 auto var(--space-4)' }} />
        <h1 className="heading-2">{exercise.name}</h1>
      </div>

      <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', marginBottom: 'var(--space-6)' }}>
        <span className={`badge ${diffBadge}`}>{exercise.difficulty}</span>
        <span className="badge badge-accent">{exercise.targetMuscle}</span>
        <span className="badge badge-neutral">{exercise.equipment}</span>
        <span className="badge badge-neutral">{exercise.bodyPart}</span>
      </div>

      {exercise.secondaryMuscles?.length > 0 && (
        <p className="text-muted text-sm" style={{ marginBottom: 'var(--space-6)' }}>
          Also works: {exercise.secondaryMuscles.join(', ')}
        </p>
      )}

      <div className="grid-2" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: 'var(--space-6)' }}>
        <div className="card" style={{ textAlign: 'center' }}>
          <Repeat size={20} color="#AAFF00" style={{ margin: '0 auto var(--space-2)' }} />
          <div className="stat-number-sm">{exercise.sets}</div>
          <div className="text-muted text-sm">Sets</div>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <Dumbbell size={20} color="#AAFF00" style={{ margin: '0 auto var(--space-2)' }} />
          <div className="stat-number-sm">{exercise.reps}</div>
          <div className="text-muted text-sm">Reps</div>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <Timer size={20} color="#AAFF00" style={{ margin: '0 auto var(--space-2)' }} />
          <div className="stat-number-sm">{exercise.restSeconds}s</div>
          <div className="text-muted text-sm">Rest</div>
        </div>
      </div>

      <div className="section">
        <h3 className="heading-4" style={{ marginBottom: 'var(--space-4)' }}>How to Perform</h3>
        <div className="card">
          {exercise.instructions.map((step, i) => (
            <div key={i} style={{ display: 'flex', gap: 'var(--space-3)', padding: 'var(--space-3) 0', borderBottom: i < exercise.instructions.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--accent-dim)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 'var(--text-sm)', flexShrink: 0 }}>{i + 1}</div>
              <p style={{ fontSize: 'var(--text-sm)', lineHeight: 1.6, paddingTop: '3px' }}>{step}</p>
            </div>
          ))}
        </div>
      </div>

      {exercise.commonMistakes?.length > 0 && (
        <div className="section">
          <h3 className="heading-4" style={{ marginBottom: 'var(--space-4)' }}>Common Mistakes</h3>
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {exercise.commonMistakes.map((m, i) => (
              <div key={i} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
                <XCircle size={18} color="var(--error)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <p style={{ fontSize: 'var(--text-sm)' }}>{m}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {exercise.tips?.length > 0 && (
        <div className="section">
          <h3 className="heading-4" style={{ marginBottom: 'var(--space-4)' }}>Pro Tips</h3>
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {exercise.tips.map((t, i) => (
              <div key={i} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
                <CheckCircle size={18} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <p style={{ fontSize: 'var(--text-sm)' }}>{t}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'var(--space-6)' }}>
        {prev ? (
          <Link href={`/exercises/${prev.id}`} className="btn btn-ghost"><ChevronLeft size={18} /> {prev.name.length > 20 ? prev.name.slice(0, 20) + '...' : prev.name}</Link>
        ) : <div />}
        {next ? (
          <Link href={`/exercises/${next.id}`} className="btn btn-ghost">{next.name.length > 20 ? next.name.slice(0, 20) + '...' : next.name} <ChevronRight size={18} /></Link>
        ) : <div />}
      </div>
    </div>
  );
}
