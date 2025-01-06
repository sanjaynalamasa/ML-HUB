import React from 'react';
import { Header } from './components/layout/Header';
import { ChatBot } from './components/features/ChatBot';
import { ImageAnalysis } from './components/features/ImageAnalysis';
import { LogParser } from './components/features/LogParser';
import { TextAnalysis } from './components/features/TextAnalysis';
import { ContentModerator } from './components/features/ContentModerator';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section id="chat">
            <h2 className="text-2xl font-bold mb-4">AI Chat</h2>
            <ChatBot />
          </section>
          
          <section id="vision">
            <h2 className="text-2xl font-bold mb-4">Image Understanding</h2>
            <ImageAnalysis />
          </section>
          
          <section id="logs">
            <h2 className="text-2xl font-bold mb-4">Log Parser</h2>
            <LogParser />
          </section>
          
          <section id="analysis">
            <h2 className="text-2xl font-bold mb-4">Text Analysis</h2>
            <TextAnalysis />
          </section>
          
          <section id="moderation" className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Content Moderation</h2>
            <ContentModerator />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;