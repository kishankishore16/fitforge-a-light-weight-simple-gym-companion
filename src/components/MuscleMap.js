'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

const frontMuscles = [
  {
    id: 'chest',
    label: 'Chest',
    path: 'M125,110 Q150,105 175,110 L175,145 Q150,155 125,145 Z',
  },
  {
    id: 'shoulders',
    label: 'Shoulders',
    path: 'M108,95 Q115,85 125,90 L125,115 Q115,118 108,110 Z M175,90 Q185,85 192,95 L192,110 Q185,118 175,115 Z',
  },
  {
    id: 'biceps',
    label: 'Biceps',
    path: 'M98,115 Q105,110 108,115 L108,155 Q105,160 98,155 Z M192,115 Q195,110 202,115 L202,155 Q195,160 192,155 Z',
  },
  {
    id: 'core',
    label: 'Core',
    path: 'M130,148 Q150,145 170,148 L170,200 Q150,205 130,200 Z',
  },
  {
    id: 'legs',
    label: 'Legs',
    path: 'M120,210 Q135,205 145,210 L140,290 Q130,295 120,290 Z M155,210 Q165,205 180,210 L180,290 Q170,295 160,290 Z',
  },
];

const backMuscles = [
  {
    id: 'back',
    label: 'Back',
    path: 'M125,100 Q150,95 175,100 L175,165 Q150,172 125,165 Z',
  },
  {
    id: 'shoulders',
    label: 'Shoulders',
    path: 'M108,90 Q115,80 125,85 L125,110 Q115,113 108,105 Z M175,85 Q185,80 192,90 L192,105 Q185,113 175,110 Z',
  },
  {
    id: 'triceps',
    label: 'Triceps',
    path: 'M95,110 Q102,105 108,110 L108,155 Q102,160 95,155 Z M192,110 Q198,105 205,110 L205,155 Q198,160 192,155 Z',
  },
  {
    id: 'core',
    label: 'Core',
    path: 'M130,168 Q150,165 170,168 L170,205 Q150,210 130,205 Z',
  },
  {
    id: 'legs',
    label: 'Legs',
    path: 'M120,210 Q135,205 145,210 L140,290 Q130,295 120,290 Z M155,210 Q165,205 180,210 L180,290 Q170,295 160,290 Z',
  },
];

const allMuscleLabels = ['Chest', 'Back', 'Shoulders', 'Biceps', 'Triceps', 'Legs', 'Core'];

export default function MuscleMap({ onSelect }) {
  const [selectedMuscles, setSelectedMuscles] = useState(new Set());
  const [view, setView] = useState('front');

  const toggleMuscle = (muscleId) => {
    setSelectedMuscles((prev) => {
      const next = new Set(prev);
      if (next.has(muscleId)) {
        next.delete(muscleId);
      } else {
        next.add(muscleId);
      }
      return next;
    });
  };

  const muscles = view === 'front' ? frontMuscles : backMuscles;

  const handleFinish = () => {
    if (onSelect) {
      onSelect(selectedMuscles);
    }
  };

  return (
    <div className="muscle-map-container">
      {/* Toggle Front/Back */}
      <div className="toggle-group">
        <button
          className={`toggle-item ${view === 'front' ? 'active' : ''}`}
          onClick={() => setView('front')}
        >
          Front
        </button>
        <button
          className={`toggle-item ${view === 'back' ? 'active' : ''}`}
          onClick={() => setView('back')}
        >
          Back
        </button>
      </div>

      <div className="muscle-map-body">
        {/* SVG Figure */}
        <div className="muscle-map-svg">
          <svg viewBox="60 30 180 290" width="220" height="360">
            {/* Head */}
            <circle cx="150" cy="55" r="22" fill="#1A1A1A" stroke="#333" strokeWidth="1.5" />

            {/* Neck */}
            <rect x="142" y="75" width="16" height="12" rx="4" fill="#1A1A1A" stroke="#333" strokeWidth="1" />

            {/* Torso outline */}
            <path
              d="M110,90 Q150,80 190,90 L195,210 Q150,220 105,210 Z"
              fill="#1A1A1A"
              stroke="#333"
              strokeWidth="1.5"
            />

            {/* Arms outline */}
            <path
              d="M110,90 Q95,95 90,110 L88,170 Q92,180 100,175 L108,115"
              fill="#1A1A1A"
              stroke="#333"
              strokeWidth="1.5"
            />
            <path
              d="M190,90 Q205,95 210,110 L212,170 Q208,180 200,175 L192,115"
              fill="#1A1A1A"
              stroke="#333"
              strokeWidth="1.5"
            />

            {/* Legs outline */}
            <path
              d="M115,210 Q120,205 148,210 L142,310 Q130,315 115,310 Z"
              fill="#1A1A1A"
              stroke="#333"
              strokeWidth="1.5"
            />
            <path
              d="M152,210 Q180,205 185,210 L185,310 Q170,315 158,310 Z"
              fill="#1A1A1A"
              stroke="#333"
              strokeWidth="1.5"
            />

            {/* Muscle group overlays */}
            {muscles.map((muscle) => (
              <path
                key={muscle.id}
                d={muscle.path}
                className="muscle-group-path"
                fill={selectedMuscles.has(muscle.id) ? '#AAFF00' : 'transparent'}
                fillOpacity={selectedMuscles.has(muscle.id) ? 0.4 : 0}
                stroke={selectedMuscles.has(muscle.id) ? '#AAFF00' : '#444'}
                strokeWidth="1.5"
                style={{ cursor: 'pointer' }}
                onClick={() => toggleMuscle(muscle.id)}
              />
            ))}
          </svg>
        </div>

        {/* Muscle pills list */}
        <div className="muscle-list">
          {allMuscleLabels.map((label) => {
            const id = label.toLowerCase();
            const isSelected = selectedMuscles.has(id);
            return (
              <button
                key={id}
                className={`muscle-pill ${isSelected ? 'active' : ''}`}
                onClick={() => toggleMuscle(id)}
              >
                <span className="muscle-pill-check">
                  {isSelected && <Check size={14} />}
                </span>
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <button className="btn btn-primary btn-lg btn-full" onClick={handleFinish}>
        Finished
      </button>
    </div>
  );
}
