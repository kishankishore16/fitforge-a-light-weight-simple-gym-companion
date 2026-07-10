'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Scale, Plus, TrendingDown, TrendingUp, Minus } from 'lucide-react';
import ProgressChart from '@/components/ProgressChart';
import { formatDateShort } from '@/lib/utils';

export default function TrackerPage() {
  const [weight, setWeight] = useState('');
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    try {
      const res = await fetch('/api/tracker/weight');
      const data = await res.json();
      if (data.logs) setLogs(data.logs.reverse());
    } catch {}
  };

  const handleAdd = async () => {
    if (!weight) return;
    setLoading(true);
    try {
      await fetch('/api/tracker/weight', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ weight_kg: Number(weight) })
      });
      setWeight('');
      fetchLogs();
    } catch {}
    setLoading(false);
  };

  const chartData = logs.map(l => ({
    date: formatDateShort(l.date),
    weight: l.weight_kg
  }));

  const startWeight = logs.length > 0 ? logs[0].weight_kg : null;
  const currentWeight = logs.length > 0 ? logs[logs.length - 1].weight_kg : null;
  const change = startWeight && currentWeight ? (currentWeight - startWeight).toFixed(1) : null;

  return (
    <div className="page-container page-enter">
      <div style={{ marginBottom: 'var(--space-6)' }}>
        <h1 className="heading-2" style={{ marginBottom: 'var(--space-2)' }}>Progress Tracker</h1>
        <p className="text-muted">Track your weight and see your progress</p>
      </div>

      <div className="toggle-group" style={{ marginBottom: 'var(--space-6)' }}>
        <button className="toggle-item active">⚖️ Weight</button>
        <Link href="/tracker/calories" className="toggle-item">🔥 Calories</Link>
      </div>

      <div className="card" style={{ padding: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
        <h3 className="heading-4" style={{ marginBottom: 'var(--space-3)' }}>Log Today&apos;s Weight</h3>
        <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
          <input className="input" type="number" placeholder="e.g. 72.5" value={weight} onChange={e => setWeight(e.target.value)} style={{ flex: 1 }} />
          <button className="btn btn-primary" onClick={handleAdd} disabled={loading || !weight}>
            <Plus size={18} /> Add
          </button>
        </div>
      </div>

      {logs.length > 1 && (
        <div className="grid-2" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: 'var(--space-6)' }}>
          <div className="stats-card">
            <div className="stats-card-label">Start</div>
            <div className="stats-card-value">{startWeight} <span style={{ fontSize: 'var(--text-sm)' }}>kg</span></div>
          </div>
          <div className="stats-card">
            <div className="stats-card-label">Current</div>
            <div className="stats-card-value">{currentWeight} <span style={{ fontSize: 'var(--text-sm)' }}>kg</span></div>
          </div>
          <div className="stats-card">
            <div className="stats-card-label">Change</div>
            <div className="stats-card-value" style={{ color: change > 0 ? 'var(--warning)' : 'var(--success)' }}>
              {change > 0 ? '+' : ''}{change} <span style={{ fontSize: 'var(--text-sm)' }}>kg</span>
            </div>
          </div>
        </div>
      )}

      {chartData.length > 1 ? (
        <div className="card" style={{ padding: 'var(--space-4)' }}>
          <h3 className="heading-4" style={{ marginBottom: 'var(--space-4)' }}>Weight History</h3>
          <ProgressChart data={chartData} dataKey="weight" xKey="date" />
        </div>
      ) : (
        <div className="empty-state">
          <Scale size={48} color="#555" />
          <h3>No data yet</h3>
          <p>Add your first weight entry above to start tracking</p>
        </div>
      )}
    </div>
  );
}
