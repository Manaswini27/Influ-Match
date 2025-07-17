import React, { useState } from 'react';
import { Upload, Send, FileText } from 'lucide-react';

interface InputFormProps {
  onSubmit: (data: { influencer_text: string; brand_description: string }) => void;
  loading: boolean;
}

export const InputForm: React.FC<InputFormProps> = ({ onSubmit, loading }) => {
  const [influencerText, setInfluencerText] = useState('');
  const [brandDescription, setBrandDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (influencerText.trim() && brandDescription.trim()) {
      onSubmit({
        influencer_text: influencerText,
        brand_description: brandDescription,
      });
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        setInfluencerText(text);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-purple-100">
      <h2 className="text-2xl font-bold text-purple-900 mb-6 flex items-center gap-2">
        <FileText className="text-purple-600" />
        Influencer-Brand Matcher
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-purple-700 mb-2">
            Influencer Content
          </label>
          <div className="relative">
            <textarea
              value={influencerText}
              onChange={(e) => setInfluencerText(e.target.value)}
              placeholder="Enter influencer content or upload a file..."
              className="w-full h-32 px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-purple-400 resize-none bg-purple-50/50"
              required
            />
            <label className="absolute bottom-2 right-2 cursor-pointer bg-purple-100 hover:bg-purple-200 p-2 rounded-lg transition-colors">
              <Upload size={16} className="text-purple-600" />
              <input
                type="file"
                accept=".txt,.md"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-purple-700 mb-2">
            Brand Description
          </label>
          <textarea
            value={brandDescription}
            onChange={(e) => setBrandDescription(e.target.value)}
            placeholder="Describe your brand, values, target audience, and messaging style..."
            className="w-full h-32 px-4 py-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-purple-400 resize-none bg-purple-50/50"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading || !influencerText.trim() || !brandDescription.trim()}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
              Analyzing...
            </>
          ) : (
            <>
              <Send size={16} />
              Analyze Match
            </>
          )}
        </button>
      </form>
    </div>
  );
};