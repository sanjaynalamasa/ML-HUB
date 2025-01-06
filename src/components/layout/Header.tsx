import React from 'react';
import { Brain } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Brain className="w-8 h-8" />
          <h1 className="text-2xl font-bold">ML Hub</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#chat" className="hover:text-indigo-200">Chat</a></li>
            <li><a href="#vision" className="hover:text-indigo-200">Vision</a></li>
            <li><a href="#logs" className="hover:text-indigo-200">Logs</a></li>
            <li><a href="#analysis" className="hover:text-indigo-200">Analysis</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}