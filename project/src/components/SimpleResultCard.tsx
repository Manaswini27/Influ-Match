import React from 'react';
import { TrendingUp, Heart, Target, Zap } from 'lucide-react';

interface SimpleResultCardProps {
  tone: string;
  sentiment: string;
  brandFitScore: number;
  similarity: number;
}

export const SimpleResultCard: React.FC<SimpleResultCardProps> = ({
  tone,
  sentiment,
  brandFitScore,
  similarity
}) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-emerald-600 bg-emerald-50 border-emerald-200';
    if (score >= 60) return 'text-amber-600 bg-amber-50 border-amber-200';
    return 'text-rose-600 bg-rose-50 border-rose-200';
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment.toLowerCase()) {
      case 'positive': return 'text-emerald-600 bg-emerald-50 border-emerald-200';
      case 'negative': return 'text-rose-600 bg-rose-50 border-rose-200';
      default: return 'text-slate-600 bg-slate-50 border-slate-200';
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-lavender-100 hover:shadow-xl transition-all duration-300">
      <h3 className="text-xl font-bold text-purple-900 mb-6 flex items-center gap-2">
        <Zap className="text-lavender-600" />
        Analysis Results
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-2">
            <Target className="text-lavender-500" size={18} />
            <span className="text-sm font-medium text-purple-700">Brand Fit Score</span>
          </div>
          <div className={`px-4 py-3 rounded-xl border-2 ${getScoreColor(brandFitScore)} transition-colors`}>
            <span className="font-bold text-2xl">{brandFitScore}</span>
            <span className="text-sm ml-1">/ 100</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="text-lavender-500" size={18} />
            <span className="text-sm font-medium text-purple-700">Similarity Score</span>
          </div>
          <div className="px-4 py-3 rounded-xl bg-blue-50 text-blue-600 border-2 border-blue-200 transition-colors">
            <span className="font-bold text-2xl">{similarity}</span>
            <span className="text-sm ml-1">%</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="text-lavender-500" size={18} />
            <span className="text-sm font-medium text-purple-700">Sentiment</span>
          </div>
          <div className={`px-4 py-3 rounded-xl border-2 ${getSentimentColor(sentiment)} transition-colors`}>
            <span className="font-medium text-lg capitalize">{sentiment}</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-4 bg-lavender-500 rounded-full" />
            <span className="text-sm font-medium text-purple-700">Tone</span>
          </div>
          <div className="px-4 py-3 rounded-xl bg-lavender-50 text-lavender-700 border-2 border-lavender-200 transition-colors">
            <span className="font-medium text-lg capitalize">{tone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};