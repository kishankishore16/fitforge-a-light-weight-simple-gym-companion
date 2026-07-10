import Link from 'next/link';
import { Dumbbell, Calendar, Clock, Target } from 'lucide-react';

const levelBadgeMap = {
  beginner: 'badge-success',
  intermediate: 'badge-warning',
  advanced: 'badge-error',
};

export default function WorkoutCard({ workout }) {
  const { id, name, description, level, daysPerWeek, duration, focusArea } = workout;
  const levelClass = levelBadgeMap[level] || 'badge-neutral';

  return (
    <Link href={`/workouts/${id}`} className="workout-card">
      <div className="workout-card-image">
        <Dumbbell size={48} />
      </div>
      <div className="workout-card-body">
        <h3 className="workout-card-title">{name}</h3>
        {description && <p className="workout-card-desc">{description}</p>}
        <div className="workout-card-info">
          <span>
            <Calendar size={14} />
            {daysPerWeek} days/week
          </span>
          <span>
            <Clock size={14} />
            {duration}
          </span>
          <span>
            <Target size={14} />
            {focusArea}
          </span>
        </div>
        <span className={`badge ${levelClass}`}>{level}</span>
      </div>
    </Link>
  );
}
