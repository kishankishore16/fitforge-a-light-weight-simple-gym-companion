'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Dumbbell, Mail, Lock } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Login failed');
      router.push('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card animate-scale-in">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-4)' }}>
          <Dumbbell size={40} color="#AAFF00" />
        </div>
        <h1 className="auth-title">Welcome Back</h1>
        <p className="auth-subtitle">Log in to continue your fitness journey</p>
        
        {error && <div className="card" style={{ borderColor: 'var(--error)', marginBottom: 'var(--space-4)', padding: 'var(--space-3)', color: 'var(--error)', fontSize: 'var(--text-sm)' }}>{error}</div>}
        
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="input-label">Email</label>
            <input className="input" type="email" placeholder="you@example.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
          </div>
          <div className="input-group">
            <label className="input-label">Password</label>
            <input className="input" type="password" placeholder="••••••••" value={form.password} onChange={e => setForm({...form, password: e.target.value})} required />
          </div>
          <button className="btn btn-primary btn-full btn-lg" type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>
        
        <p className="auth-footer">
          Don&apos;t have an account? <Link href="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
