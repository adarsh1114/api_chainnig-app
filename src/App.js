import React from 'react';
import ApiSequenceBuilder from './components/ApiSequenceBuilder';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-5 bg-gray-800 text-center text-2xl font-bold shadow-md">
        API Chaining Dashboard
      </header>
      <main className="container mx-auto p-6">
        <ApiSequenceBuilder />
      </main>
    </div>
  );
}

export default App;
