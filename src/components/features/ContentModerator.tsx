import React, { useState } from 'react';
import { Shield } from 'lucide-react';

export function ContentModerator() {
  const [content, setContent] = useState('');
  const [results, setResults] = useState<Record<string, boolean>>({});

  const handleModerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    // Mock moderation - replace with actual API call
    setResults({
      inappropriate: false,
      spam: false,
      harmful: false,
      sensitive: false
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <form onSubmit={handleModerate} className="space-y-4">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-40 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter content to moderate..."
        />
        <button 
          type="submit"
          className="w-full p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center justify-center space-x-2"
        >
          <Shield className="w-5 h-5" />
          <span>Moderate Content</span>
        </button>
      </form>

      {Object.keys(results).length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Moderation Results:</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            {Object.entries(results).map(([key, value]) => (
              <div key={key} className="mb-2 flex items-center">
                <div className={`w-4 h-4 rounded-full mr-2 ${value ? 'bg-red-500' : 'bg-green-500'}`} />
                <span className="capitalize">{key}: {value ? 'Flagged' : 'Safe'}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}