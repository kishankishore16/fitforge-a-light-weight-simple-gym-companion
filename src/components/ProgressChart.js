'use client';

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: '#1A1A1A',
          border: '1px solid #2A2A2A',
          borderRadius: '8px',
          padding: '10px 14px',
          color: '#fff',
          fontSize: '13px',
        }}
      >
        <p style={{ margin: 0, color: '#888', marginBottom: 4 }}>{label}</p>
        <p style={{ margin: 0, fontWeight: 600, color: payload[0].color }}>
          {payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

export default function ProgressChart({
  data,
  dataKey,
  xKey = 'date',
  color = '#AAFF00',
  height = 300,
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#2A2A2A" vertical={false} />
        <XAxis
          dataKey={xKey}
          stroke="#555"
          tick={{ fill: '#888', fontSize: 12 }}
          axisLine={{ stroke: '#2A2A2A' }}
          tickLine={false}
        />
        <YAxis
          stroke="#555"
          tick={{ fill: '#888', fontSize: 12 }}
          axisLine={{ stroke: '#2A2A2A' }}
          tickLine={false}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#333' }} />
        <Line
          type="monotone"
          dataKey={dataKey}
          stroke={color}
          strokeWidth={2.5}
          dot={{ fill: color, strokeWidth: 0, r: 4 }}
          activeDot={{ r: 6, fill: color, stroke: '#0A0A0A', strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
