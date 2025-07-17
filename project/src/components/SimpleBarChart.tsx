import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface SimpleBarChartProps {
  brandFitScore: number;
  similarity: number;
}

export const SimpleBarChart: React.FC<SimpleBarChartProps> = ({ brandFitScore, similarity }) => {
  const data = [
    {
      name: 'Brand Fit Score',
      value: brandFitScore,
      color: '#a855f7'
    },
    {
      name: 'Similarity',
      value: similarity,
      color: '#06b6d4'
    }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-lavender-200">
          <p className="text-purple-900 font-medium">{label}</p>
          <p className="text-lavender-600">
            Value: <span className="font-bold">{payload[0].value}%</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-lavender-100">
      <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
        <div className="w-5 h-5 bg-gradient-to-r from-lavender-500 to-purple-500 rounded" />
        Performance Metrics
      </h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e9d5ff" opacity={0.6} />
            <XAxis 
              dataKey="name" 
              tick={{ fill: '#7c3aed', fontSize: 12 }}
              axisLine={{ stroke: '#c084fc' }}
            />
            <YAxis 
              tick={{ fill: '#7c3aed', fontSize: 12 }}
              axisLine={{ stroke: '#c084fc' }}
              domain={[0, 100]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="value" 
              fill="url(#barGradient)" 
              radius={[6, 6, 0, 0]}
              stroke="#a855f7"
              strokeWidth={1}
            />
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a855f7" stopOpacity={0.9}/>
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.7}/>
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};