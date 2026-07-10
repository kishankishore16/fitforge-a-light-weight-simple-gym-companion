'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Dumbbell } from 'lucide-react';

export default function SignupPage() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', password: '', age: '', gender: 'male',
    height_cm: '', weight_kg: '', goal: 'generalFitness', level: 'beginner'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, age: Number(form.age), height_cm: Number(form.height_cm), weight_kg: Number(form.weight_kg) })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Signup failed');
      router.push('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const u = (key, val) => setForm({ ...form, [key]: val });

  return (
    <div className="auth-container">
      <div className="auth-card animate-scale-in" style={{ maxWidth: '520px' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-4)' }}>
          <Dumbbell size={40} color="#AAFF00" />
        </div>
        <h1 className="auth-title">Create Account</h1>
        <p className="auth-subtitle">Start your fitness transformation today</p>

        {error && <div className="card" style={{ borderColor: 'var(--error)', marginBottom: 'var(--space-4)', padding: 'var(--space-3)', color: 'var(--error)', fontSize: 'var(--text-sm)' }}>{error}</div>}

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-row">
            <div className="input-group">
              <label className="input-label">Name</label>
              <input className="input" placeholder="Your name" value={form.name} onChange={e => u('name', e.target.value)} required />
            </div>
            <div className="input-group">
              <label className="input-label">Email</label>
              <input className="input" type="email" placeholder="you@email.com" value={form.email} onChange={e => u('email', e.target.value)} required />
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">Password</label>
            <input className="input" type="password" placeholder="Min 6 characters" value={form.password} onChange={e => u('password', e.target.value)} required minLength={6} />
          </div>

          <div className="auth-row">
            <div className="input-group">
              <label className="input-label">Age</label>
              <input className="input" type="number" placeholder="25" value={form.age} onChange={e => u('age', e.target.value)} required min={12} max={80} />
            </div>
            <div className="input-group">
              <label className="input-label">Gender</label>
              <select className="select" value={form.gender} onChange={e => u('gender', e.target.value)}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <div className="auth-row">
            <div className="input-group">
              <label className="input-label">Height (cm)</label>
              <input className="input" type="number" placeholder="170" value={form.height_cm} onChange={e => u('height_cm', e.target.value)} required min={100} max={250} />
            </div>
            <div className="input-group">
              <label className="input-label">Weight (kg)</label>
              <input className="input" type="number" placeholder="70" value={form.weight_kg} onChange={e => u('weight_kg', e.target.value)} required min={30} max={250} />
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">Fitness Goal</label>
            <select className="select" value={form.goal} onChange={e => u('goal', e.target.value)}>
              <option value="weightLoss">🔥 Weight Loss</option>
              <option value="muscleGain">💪 Muscle Gain</option>
              <option value="generalFitness">⚖️ General Fitness</option>
            </select>
          </div>

          <div className="input-group">
            <label className="input-label">Experience Level</label>
            <div className="toggle-group">
              <button type="button" className={`toggle-item ${form.level === 'beginner' ? 'active' : ''}`} onClick={() => u('level', 'beginner')}>Beginner</button>
              <button type="button" className={`toggle-item ${form.level === 'intermediate' ? 'active' : ''}`} onClick={() => u('level', 'intermediate')}>Intermediate</button>
            </div>
          </div>

          <button className="btn btn-primary btn-full btn-lg" type="submit" disabled={loading}>
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link href="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
}
