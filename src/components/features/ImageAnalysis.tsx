import React, { useState } from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';

export function ImageAnalysis() {
  const [imageUrl, setImageUrl] = useState('');
  const [analysis, setAnalysis] = useState('');

  const handleImageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageUrl) return;
    
    // Mock analysis - replace with actual API call
    setAnalysis('This is a mock image analysis. Configure the ML service for real analysis.');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <form onSubmit={handleImageSubmit} className="space-y-4">
        <div className="flex space-x-2">
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter image URL..."
          />
          <button 
            type="submit"
            className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center space-x-2"
          >
            <Upload className="w-5 h-5" />
            <span>Analyze</span>
          </button>
        </div>
      </form>

      {imageUrl && (
        <div className="mt-4">
          <img 
            src={imageUrl} 
            alt="Analysis target" 
            className="max-w-full h-auto rounded-lg"
            onError={() => setImageUrl('')}
          />
        </div>
      )}

      {analysis && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">Analysis Results:</h3>
          <p>{analysis}</p>
        </div>
      )}
    </div>
  );
}