'use client';

export default function CalorieRing({ consumed, goal, size = 160, strokeWidth = 12 }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const progress = Math.min(consumed / goal, 1);
  const dashoffset = circumference * (1 - progress);
  const center = size / 2;

  return (
    <div className="circular-progress" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          className="circular-progress-track"
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
        />
        <circle
          className="circular-progress-fill"
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={dashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${center} ${center})`}
        />
      </svg>
      <div className="calorie-ring-center">
        <span className="calorie-ring-value">{consumed}</span>
        <span className="calorie-ring-label">/ {goal} kcal</span>
      </div>
    </div>
  );
}
