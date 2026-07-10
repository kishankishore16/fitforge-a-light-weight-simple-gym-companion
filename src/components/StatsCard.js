export default function StatsCard({ label, value, unit, icon: Icon, progress, total, color }) {
  const progressPercent = total ? Math.min((progress / total) * 100, 100) : 0;

  return (
    <div className="stats-card" style={color ? { '--stats-accent': color } : undefined}>
      <div className="stats-card-header">
        {Icon && <Icon size={20} />}
        <span className="stats-card-label">{label}</span>
      </div>
      <div className="stats-card-value">
        {value}
        {unit && <span className="stats-card-unit">{unit}</span>}
      </div>
      {total != null && (
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      )}
    </div>
  );
}
