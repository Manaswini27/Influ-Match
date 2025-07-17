import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface ToneDistributionChartProps {
  toneDistribution: Record<string, number>;
}

const COLORS = ['#a855f7', '#ec4899', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'];

export const ToneDistributionChart: React.FC<ToneDistributionChartProps> = ({ toneDistribution }) => {
  const data = Object.entries(toneDistribution).map(([tone, count]) => ({
    name: tone.charAt(0).toUpperCase() + tone.slice(1),
    value: count,
  }));

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-purple-100">
      <h3 className="text-xl font-bold text-purple-900 mb-4">Tone Distribution</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#f3e8ff', 
                border: '1px solid #c084fc',
                borderRadius: '8px'
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};