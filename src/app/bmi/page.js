'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Calculator } from 'lucide-react';
import BMIGauge from '@/components/BMIGauge';
import { calculateBMI, getBMICategory } from '@/lib/utils';

export default function BMIPage() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState(null);

  const handleCalculate = () => {
    if (!height || !weight) return;
    const result = calculateBMI(Number(height), Number(weight));
    setBmi(result);
    setCategory(getBMICategory(result));
  };

  return (
    <div className="page-container page-enter">
      <div style={{ marginBottom: 'var(--space-6)' }}>
        <h1 className="heading-2" style={{ marginBottom: 'var(--space-2)' }}>BMI Calculator</h1>
        <p className="text-muted">Calculate your Body Mass Index</p>
      </div>

      <div className="card" style={{ padding: 'var(--space-6)', marginBottom: 'var(--space-6)', maxWidth: '480px' }}>
        <div className="auth-row">
          <div className="input-group">
            <label className="input-label">Height (cm)</label>
            <input className="input" type="number" placeholder="e.g. 170" value={height} onChange={e => setHeight(e.target.value)} min={100} max={250} />
          </div>
          <div className="input-group">
            <label className="input-label">Weight (kg)</label>
            <input className="input" type="number" placeholder="e.g. 70" value={weight} onChange={e => setWeight(e.target.value)} min={20} max={300} />
          </div>
        </div>
        <button className="btn btn-primary btn-full btn-lg" onClick={handleCalculate} style={{ marginTop: 'var(--space-4)' }}>
          <Calculator size={18} /> Calculate BMI
        </button>
      </div>

      {bmi !== null && (
        <div className="animate-scale-in">
          <div className="card" style={{ padding: 'var(--space-8)', textAlign: 'center', marginBottom: 'var(--space-4)' }}>
            <BMIGauge value={bmi} />
            <div style={{ marginTop: 'var(--space-4)' }}>
              <span className="badge" style={{ background: category.color + '20', color: category.color, fontSize: 'var(--text-base)' }}>{category.label}</span>
            </div>
          </div>

          <div className="card" style={{ padding: 'var(--space-4)' }}>
            <h3 className="heading-4" style={{ marginBottom: 'var(--space-3)' }}>Recommendation</h3>
            <p className="text-muted" style={{ lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>{category.advice}</p>
            <Link href="/diet" className="btn btn-primary">View Diet Plans</Link>
          </div>

          <div className="card" style={{ padding: 'var(--space-4)', marginTop: 'var(--space-4)' }}>
            <h3 className="heading-4" style={{ marginBottom: 'var(--space-3)' }}>BMI Categories</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {[
                { range: '< 18.5', label: 'Underweight', color: '#3B82F6' },
                { range: '18.5 - 24.9', label: 'Normal', color: '#22C55E' },
                { range: '25 - 29.9', label: 'Overweight', color: '#F59E0B' },
                { range: '≥ 30', label: 'Obese', color: '#EF4444' },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--space-2)', borderRadius: 'var(--radius-sm)', background: bmi >= parseFloat(c.range) || (i === 0 && bmi < 18.5) ? c.color + '10' : 'transparent' }}>
                  <span style={{ color: c.color, fontWeight: 500 }}>{c.label}</span>
                  <span className="text-muted text-sm">{c.range}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
