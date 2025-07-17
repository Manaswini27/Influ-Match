import React from 'react';
import { User, TrendingUp, Heart, Target } from 'lucide-react';
import { InfluencerMatch } from '../types';

interface ResultCardProps {
  match: InfluencerMatch;
}

export const ResultCard: React.FC<ResultCardProps> = ({ match }) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-50';
    if (score >= 60) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment.toLowerCase()) {
      case 'positive': return 'text-green-600 bg-green-50';
      case 'negative': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-purple-100 hover:shadow-xl transition-shadow">
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-purple-100 rounded-full">
          <User className="text-purple-600" size={24} />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-purple-900 mb-2">Influencer Analysis</h3>
          <p className="text-gray-700 text-sm line-clamp-3">
            {match.influencer_content}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Target className="text-purple-500" size={16} />
            <span className="text-sm text-gray-600">Brand Fit Score</span>
          </div>
          <div className={`px-3 py-2 rounded-lg ${getScoreColor(match.brand_fit_score)}`}>
            <span className="font-bold text-lg">{match.brand_fit_score}%</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="text-purple-500" size={16} />
            <span className="text-sm text-gray-600">Cosine Similarity</span>
          </div>
          <div className="px-3 py-2 rounded-lg bg-blue-50 text-blue-600">
            <span className="font-bold text-lg">{(match.cosine_similarity * 100).toFixed(1)}%</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Heart className="text-purple-500" size={16} />
            <span className="text-sm text-gray-600">Sentiment</span>
          </div>
          <div className={`px-3 py-2 rounded-lg ${getSentimentColor(match.sentiment)}`}>
            <span className="font-medium capitalize">{match.sentiment}</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-purple-500 rounded-full" />
            <span className="text-sm text-gray-600">Tone</span>
          </div>
          <div className="px-3 py-2 rounded-lg bg-purple-50 text-purple-600">
            <span className="font-medium capitalize">{match.tone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};