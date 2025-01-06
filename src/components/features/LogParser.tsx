import React, { useState } from 'react';
import { FileText } from 'lucide-react';

export function LogParser() {
  const [logs, setLogs] = useState('');
  const [results, setResults] = useState<string[]>([]);

  const handleParse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!logs.trim()) return;

    // Mock parsing - replace with actual API call
    setResults(logs.split('\n').map(line => `Parsed: ${line}`));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <form onSubmit={handleParse} className="space-y-4">
        <textarea
          value={logs}
          onChange={(e) => setLogs(e.target.value)}
          className="w-full h-40 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Paste your logs here..."
        />
        <button 
          type="submit"
          className="w-full p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center justify-center space-x-2"
        >
          <FileText className="w-5 h-5" />
          <span>Parse Logs</span>
        </button>
      </form>

      {results.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Parsed Results:</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            {results.map((result, idx) => (
              <div key={idx} className="mb-1">{result}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}