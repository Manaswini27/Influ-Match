import React, { useState } from 'react';
import { SimpleInputForm } from './components/SimpleInputForm';
import { SimpleResultCard } from './components/SimpleResultCard';
import { SimpleBarChart } from './components/SimpleBarChart';
import { ErrorMessage } from './components/ErrorMessage';
import { getInfluencerMatch } from './services/api';
import { FlaskRequest, FlaskResponse } from './types';
import { Sparkles } from 'lucide-react';

function App() {
  const [results, setResults] = useState<FlaskResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalysis = async (data: FlaskRequest) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await getInfluencerMatch(data);
      setResults(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while analyzing the match');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-lavender-100 via-purple-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-purple-900 mb-2 flex items-center justify-center gap-2">
            <Sparkles className="text-lavender-600" />
            Influencer Brand Matcher
          </h1>
          <p className="text-purple-700 max-w-2xl mx-auto">
            Discover the perfect influencer-brand alignment with AI-powered analysis. 
            Enter content and get detailed insights on brand fit, tone, and sentiment.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <SimpleInputForm onSubmit={handleAnalysis} loading={loading} />
          
          {error && <ErrorMessage message={error} />}
          
          {results && (
            <div className="space-y-6">
              <SimpleResultCard 
                tone={results.tone}
                sentiment={results.sentiment}
                brandFitScore={results.brand_fit_score}
                similarity={results.similarity}
              />
              
              <SimpleBarChart 
                brandFitScore={results.brand_fit_score}
                similarity={results.similarity}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;