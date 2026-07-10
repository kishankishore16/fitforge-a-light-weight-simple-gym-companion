'use client';

import { useEffect, useState } from 'react';

function getBMICategory(bmi) {
  if (bmi < 18.5) return { label: 'Underweight', color: '#3B82F6' };
  if (bmi < 25) return { label: 'Normal', color: '#22C55E' };
  if (bmi < 30) return { label: 'Overweight', color: '#F59E0B' };
  return { label: 'Obese', color: '#EF4444' };
}

export default function BMIGauge({ value }) {
  const [animatedAngle, setAnimatedAngle] = useState(0);

  const minBMI = 10;
  const maxBMI = 45;
  const clampedValue = Math.max(minBMI, Math.min(value, maxBMI));
  const targetAngle = ((clampedValue - minBMI) / (maxBMI - minBMI)) * 180;

  useEffect(() => {
    let frame;
    const animate = () => {
      setAnimatedAngle((prev) => {
        const diff = targetAngle - prev;
        if (Math.abs(diff) < 0.5) return targetAngle;
        frame = requestAnimationFrame(animate);
        return prev + diff * 0.08;
      });
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [targetAngle]);

  const category = getBMICategory(value);

  const size = 280;
  const strokeWidth = 20;
  const center = size / 2;
  const radius = center - strokeWidth - 10;

  // Semicircle arc (180 degrees, from left to right)
  const startX = center - radius;
  const startY = center;
  const endX = center + radius;
  const endY = center;

  const arcPath = `M ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY}`;

  // Needle position
  const needleAngle = (animatedAngle - 180) * (Math.PI / 180); // convert to radians, offset
  const needleLength = radius - 15;
  const needleX = center + needleLength * Math.cos(needleAngle);
  const needleY = center + needleLength * Math.sin(needleAngle);

  return (
    <div className="bmi-gauge">
      <svg width={size} height={center + 30} viewBox={`0 0 ${size} ${center + 30}`}>
        <defs>
          <linearGradient id="bmiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="30%" stopColor="#22C55E" />
            <stop offset="60%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#EF4444" />
          </linearGradient>
        </defs>

        {/* Background track */}
        <path
          d={arcPath}
          fill="none"
          stroke="#1A1A1A"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />

        {/* Gradient arc */}
        <path
          d={arcPath}
          fill="none"
          stroke="url(#bmiGradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />

        {/* Needle */}
        <line
          x1={center}
          y1={center}
          x2={needleX}
          y2={needleY}
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx={center} cy={center} r="6" fill="#fff" />
        <circle cx={center} cy={center} r="3" fill="#0A0A0A" />

        {/* Scale labels */}
        <text x={startX - 5} y={center + 22} fill="#666" fontSize="11" textAnchor="middle">
          10
        </text>
        <text x={center} y={center - radius - 8} fill="#666" fontSize="11" textAnchor="middle">
          27.5
        </text>
        <text x={endX + 5} y={center + 22} fill="#666" fontSize="11" textAnchor="middle">
          45
        </text>
      </svg>

      <div className="bmi-gauge-value">
        <span className="bmi-gauge-number">{value.toFixed(1)}</span>
        <span className="bmi-gauge-label" style={{ color: category.color }}>
          {category.label}
        </span>
      </div>
    </div>
  );
}
