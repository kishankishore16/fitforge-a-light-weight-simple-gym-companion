'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Flame, Dumbbell, Scale, Activity, Trophy, Weight, UtensilsCrossed, Calculator, TrendingUp } from 'lucide-react';
import StatsCard from '@/components/StatsCard';
import { getRandomQuote, calculateBMI, calculateCalorieGoal } from '@/lib/utils';

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [quote, setQuote] = useState(null);
  const [calorieData, setCalorieData] = useState({ calories: 0 });
  const [workoutCount, setWorkoutCount] = useState(0);

  useEffect(() => {
    setQuote(getRandomQuote());
    fetch('/api/auth/me').then(r => r.json()).then(d => { if (d.user) setUser(d.user); }).catch(() => {});
    fetch('/api/tracker/calories').then(r => r.json()).then(d => { if (d.totals) setCalorieData(d.totals); }).catch(() => {});
    fetch('/api/workouts').then(r => r.json()).then(d => { if (d.logs) setWorkoutCount(d.logs.length); }).catch(() => {});
  }, []);

  const bmi = user ? calculateBMI(user.height_cm, user.weight_kg) : 0;
  const calorieGoal = user ? calculateCalorieGoal(user.weight_kg || 70, user.height_cm || 170, user.age || 25, user.gender || 'male', user.goal) : 2000;

  const quickActions = [
    { icon: Scale, label: 'Log Weight', href: '/tracker' },
    { icon: UtensilsCrossed, label: 'Log Meal', href: '/tracker/calories' },
    { icon: Dumbbell, label: 'Workouts', href: '/workouts' },
    { icon: Calculator, label: 'BMI Calc', href: '/bmi' },
  ];

  return (
    <div className="page-container page-enter">
      <div className="greeting">
        <div className="greeting-left">
          <div className="greeting-avatar">{user?.name?.charAt(0)?.toUpperCase() || 'U'}</div>
          <div className="greeting-text">
            <h2>Hello {user?.name?.split(' ')[0] || 'User'}!</h2>
            <p>Let&apos;s start your day</p>
          </div>
        </div>
        <div className="greeting-trophy"><Trophy size={22} /></div>
      </div>

      <div className="section">
        <div className="grid-2 stagger-children">
          <StatsCard label="Today's Calories" value={Math.round(calorieData.calories)} unit={`/ ${calorieGoal} kcal`} icon={Flame} progress={calorieData.calories} total={calorieGoal} />
          <StatsCard label="Workouts Done" value={workoutCount} unit="sessions" icon={Dumbbell} />
          <StatsCard label="Current Weight" value={user?.weight_kg || '--'} unit="kg" icon={Scale} />
          <StatsCard label="Your BMI" value={bmi || '--'} unit="" icon={Activity} />
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <h3 className="section-title">Quick Actions</h3>
        </div>
        <div className="quick-actions">
          {quickActions.map((a, i) => (
            <Link key={i} href={a.href} className="quick-action">
              <div className="quick-action-icon"><a.icon size={20} /></div>
              <span className="quick-action-label">{a.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {quote && (
        <div className="section">
          <div className="card card-accent" style={{ textAlign: 'center', padding: 'var(--space-8)' }}>
            <p style={{ fontSize: 'var(--text-lg)', fontStyle: 'italic', marginBottom: 'var(--space-3)', lineHeight: 1.6 }}>
              &ldquo;{quote.text}&rdquo;
            </p>
            <p className="text-muted text-sm">— {quote.author}</p>
          </div>
        </div>
      )}

      <div className="section">
        <div className="section-header">
          <h3 className="section-title">Explore</h3>
        </div>
        <div className="grid-2">
          <Link href="/exercises" className="card card-interactive" style={{ textAlign: 'center', padding: 'var(--space-6)' }}>
            <TrendingUp size={32} color="#AAFF00" style={{ marginBottom: 'var(--space-3)' }} />
            <h4 className="heading-4">Exercise Library</h4>
            <p className="text-muted text-sm">80+ exercises with form guides</p>
          </Link>
          <Link href="/diet" className="card card-interactive" style={{ textAlign: 'center', padding: 'var(--space-6)' }}>
            <UtensilsCrossed size={32} color="#AAFF00" style={{ marginBottom: 'var(--space-3)' }} />
            <h4 className="heading-4">Diet Plans</h4>
            <p className="text-muted text-sm">Budget Indian meal plans</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
