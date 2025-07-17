import React, { useState } from 'react';
import { Send, FileText, Upload } from 'lucide-react';

interface SimpleInputFormProps {
  onSubmit: (data: { content: string; brand: string }) => void;
  loading: boolean;
}

export const SimpleInputForm: React.FC<SimpleInputFormProps> = ({ onSubmit, loading }) => {
  const [content, setContent] = useState('');
  const [brand, setBrand] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim() && brand.trim()) {
      onSubmit({ content, brand });
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        setContent(text);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-lavender-200">
      <h2 className="text-2xl font-bold text-purple-900 mb-6 flex items-center gap-2">
        <FileText className="text-lavender-600" />
        Influencer-Brand Matcher
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-purple-700 mb-2">
            Influencer Content
          </label>
          <div className="relative">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter influencer content or upload a file..."
              className="w-full h-32 px-4 py-3 border border-lavender-200 rounded-lg focus:ring-2 focus:ring-lavender-300 focus:border-lavender-400 resize-none bg-lavender-50/50 text-purple-900 placeholder-purple-400"
              required
            />
            <label className="absolute bottom-2 right-2 cursor-pointer bg-lavender-100 hover:bg-lavender-200 p-2 rounded-lg transition-colors">
              <Upload size={16} className="text-lavender-600" />
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
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="Describe your brand, values, target audience, and messaging style..."
            className="w-full h-32 px-4 py-3 border border-lavender-200 rounded-lg focus:ring-2 focus:ring-lavender-300 focus:border-lavender-400 resize-none bg-lavender-50/50 text-purple-900 placeholder-purple-400"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading || !content.trim() || !brand.trim()}
          className="w-full bg-gradient-to-r from-lavender-500 to-purple-500 text-white py-3 px-6 rounded-lg font-medium hover:from-lavender-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
        >
          {loading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
              Getting Insights...
            </>
          ) : (
            <>
              <Send size={16} />
              Get Insights
            </>
          )}
        </button>
      </form>
    </div>
  );
};