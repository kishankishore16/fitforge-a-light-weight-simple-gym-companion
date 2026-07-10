import Link from 'next/link';
import { Target, Calendar, UtensilsCrossed, TrendingUp, Dumbbell, Calculator, Flame, Users } from 'lucide-react';

export default function Home() {
  const features = [
    { icon: Target, title: 'Exercise Library', desc: '80+ exercises with step-by-step form instructions, categorized by body part with interactive muscle map.' },
    { icon: Calendar, title: 'Workout Plans', desc: 'Beginner & intermediate plans — Push/Pull/Legs, Full Body, Home workouts. Just pick your level and go.' },
    { icon: UtensilsCrossed, title: 'Indian Diet Plans', desc: 'Budget-friendly veg & non-veg meal plans (₹100-200/day) with dal, paneer, eggs, chicken, and more.' },
    { icon: TrendingUp, title: 'Progress Tracking', desc: 'Track your weight, calories, and workouts. See your transformation with beautiful charts.' }
  ];

  const stats = [
    { value: '80+', label: 'Exercises' },
    { value: '6', label: 'Workout Plans' },
    { value: '200+', label: 'Indian Foods' },
    { value: '100%', label: 'Free' }
  ];

  return (
    <>
      <section className="hero">
        <h1 className="hero-title animate-fade-in-up">
          Transform Your Body,<br />
          Transform Your <span className="text-accent">Life.</span>
        </h1>
        <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          Your free fitness companion built for India. Expert workout plans, exercise form guides,
          budget-friendly diet plans, and progress tracking — all in one place.
        </p>
        <div className="hero-cta animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <Link href="/signup" className="btn btn-primary btn-lg">Get Started Free</Link>
          <Link href="/exercises" className="btn btn-secondary btn-lg">Explore Exercises</Link>
        </div>
      </section>

      <section className="feature-grid">
        {features.map((f, i) => (
          <div key={i} className="feature-card animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="feature-card-icon">
              <f.icon />
            </div>
            <h3 className="feature-card-title">{f.title}</h3>
            <p className="feature-card-text">{f.desc}</p>
          </div>
        ))}
      </section>

      <section style={{ padding: 'var(--space-12) var(--space-4)', maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-4)', textAlign: 'center' }}>
          {stats.map((s, i) => (
            <div key={i} className="card animate-fade-in-up" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="stat-number text-accent">{s.value}</div>
              <div className="text-muted text-sm" style={{ marginTop: 'var(--space-2)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ textAlign: 'center', padding: 'var(--space-12) var(--space-4) var(--space-20)' }}>
        <h2 className="heading-2" style={{ marginBottom: 'var(--space-4)' }}>Ready to Start Your Fitness Journey?</h2>
        <p className="text-muted" style={{ marginBottom: 'var(--space-6)', maxWidth: '480px', margin: '0 auto var(--space-6)' }}>
          Join thousands of beginners who transformed their body with FitForge. No expensive gym membership required.
        </p>
        <Link href="/signup" className="btn btn-primary btn-lg">Start Now — It&apos;s Free</Link>
      </section>
    </>
  );
}
