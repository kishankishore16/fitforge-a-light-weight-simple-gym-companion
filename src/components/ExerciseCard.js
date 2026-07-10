import Link from 'next/link';
import { Dumbbell } from 'lucide-react';

const difficultyBadgeMap = {
  beginner: 'badge-success',
  intermediate: 'badge-warning',
  advanced: 'badge-error',
};

export default function ExerciseCard({ exercise }) {
  const { id, name, bodyPart, targetMuscle, equipment, difficulty } = exercise;
  const difficultyClass = difficultyBadgeMap[difficulty] || 'badge-neutral';

  return (
    <Link href={`/exercises/${id}`} className="exercise-card">
      <div className="exercise-card-image">
        <Dumbbell size={48} />
      </div>
      <div className="exercise-card-body">
        <h3 className="exercise-card-title">{name}</h3>
        <div className="exercise-card-meta">
          <span className="badge badge-accent">{targetMuscle}</span>
          <span className={`badge ${difficultyClass}`}>{difficulty}</span>
          <span className="badge badge-neutral">{equipment}</span>
        </div>
      </div>
    </Link>
  );
}
