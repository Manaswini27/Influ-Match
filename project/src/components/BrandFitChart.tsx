import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { InfluencerMatch } from '../types';

interface BrandFitChartProps {
  matches: InfluencerMatch[];
}

export const BrandFitChart: React.FC<BrandFitChartProps> = ({ matches }) => {
  const data = matches.map((match, index) => ({
    name: `Influencer ${index + 1}`,
    score: match.brand_fit_score,
  }));

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-purple-100">
      <h3 className="text-xl font-bold text-purple-900 mb-4">Brand Fit Scores</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e9d5ff" />
            <XAxis dataKey="name" tick={{ fill: '#7c3aed' }} />
            <YAxis tick={{ fill: '#7c3aed' }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#f3e8ff', 
                border: '1px solid #c084fc',
                borderRadius: '8px'
              }}
            />
            <Bar 
              dataKey="score" 
              fill="url(#colorGradient)" 
              radius={[4, 4, 0, 0]}
            />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a855f7" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#ec4899" stopOpacity={0.6}/>
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};