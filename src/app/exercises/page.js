'use client';
import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { exercises, bodyParts } from '@/data/exercises';
import ExerciseCard from '@/components/ExerciseCard';
import MuscleMap from '@/components/MuscleMap';

export default function ExercisesPage() {
  const [search, setSearch] = useState('');
  const [selectedPart, setSelectedPart] = useState('all');
  const [showMap, setShowMap] = useState(false);

  const filtered = exercises.filter(ex => {
    const matchesSearch = !search || ex.name.toLowerCase().includes(search.toLowerCase()) || ex.targetMuscle.toLowerCase().includes(search.toLowerCase());
    const matchesPart = selectedPart === 'all' || ex.bodyPart === selectedPart;
    return matchesSearch && matchesPart;
  });

  const handleMuscleSelect = (muscles) => {
    setShowMap(false);
    if (muscles.size === 1) {
      setSelectedPart([...muscles][0].toLowerCase());
    } else if (muscles.size > 1) {
      setSelectedPart('all');
    }
  };

  return (
    <div className="page-container page-enter">
      <div style={{ marginBottom: 'var(--space-6)' }}>
        <h1 className="heading-2" style={{ marginBottom: 'var(--space-2)' }}>Exercise Library</h1>
        <p className="text-muted">Browse {exercises.length}+ exercises with form instructions</p>
      </div>

      <div style={{ display: 'flex', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
        <div className="search-bar" style={{ flex: 1 }}>
          <Search className="search-bar-icon" />
          <input placeholder="Search exercises..." value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <button className={`btn ${showMap ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setShowMap(!showMap)} title="Muscle Map">
          <SlidersHorizontal size={18} />
        </button>
      </div>

      {showMap && (
        <div className="card" style={{ marginBottom: 'var(--space-6)', padding: 'var(--space-6)' }}>
          <MuscleMap onSelect={handleMuscleSelect} />
        </div>
      )}

      <div className="category-pills" style={{ marginBottom: 'var(--space-6)' }}>
        <button className={`category-pill ${selectedPart === 'all' ? 'active' : ''}`} onClick={() => setSelectedPart('all')}>All</button>
        {bodyParts.map(bp => (
          <button key={bp.id} className={`category-pill ${selectedPart === bp.id ? 'active' : ''}`} onClick={() => setSelectedPart(bp.id)}>
            {bp.name}
          </button>
        ))}
      </div>

      <p className="text-muted text-sm" style={{ marginBottom: 'var(--space-4)' }}>{filtered.length} exercises found</p>

      <div className="grid-3 stagger-children">
        {filtered.map(ex => (
          <ExerciseCard key={ex.id} exercise={ex} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="empty-state">
          <h3>No exercises found</h3>
          <p>Try adjusting your search or filter</p>
        </div>
      )}
    </div>
  );
}
