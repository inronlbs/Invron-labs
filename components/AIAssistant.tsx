
import React, { useState, useCallback } from 'react';
import { generateAnnouncement } from '../services/geminiService';

const Loader: React.FC = () => (
  <div className="loader" role="status" aria-label="loading"></div>
);

export const AIAssistant: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!prompt.trim()) {
      setError("Please enter a note first.");
      setResult('');
      return;
    }
    
    setIsLoading(true);
    setResult('');
    setError(null);

    try {
      const generatedText = await generateAnnouncement(prompt);
      setResult(generatedText);
    } catch (e) {
      const err = e as Error;
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [prompt]);

  return (
    <div className="ai-assistant-container p-6 md:p-10 shadow-xl mt-16 max-w-4xl mx-auto">
      <h3 className="text-3xl font-extrabold text-white text-center mb-2">
        ✨ Try Our AI Communication Assistant
      </h3>
      <p className="text-center text-indigo-300 mb-6">See how our platform helps you draft perfect parent announcements in seconds.</p>
      <div className="flex flex-col gap-4">
        <label htmlFor="ai-prompt" className="text-lg font-semibold text-gray-200">Your simple note:</label>
        <textarea 
          id="ai-prompt" 
          className="ai-assistant-textarea w-full p-3 rounded-lg border-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition" 
          rows={3} 
          placeholder="e.g., soccer tryouts tuesday at 4pm, bring water and cleats..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          disabled={isLoading}
        />
        <button 
          id="generate-announcement" 
          className="ai-assistant-button text-white font-bold py-3 px-6 rounded-lg shadow-md transition transform hover:scale-105 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleGenerate}
          disabled={isLoading}
        >
          <span id="ai-button-text">{isLoading ? 'Generating...' : 'Generate Announcement'}</span>
          {isLoading && <Loader />}
        </button>
        {(result || error) && (
          <div 
            id="ai-result"
            className={`ai-assistant-result w-full p-4 rounded-lg border-2 mt-2 ${error ? 'border-red-400 text-red-300' : ''}`}
          >
            {error ? `Error: ${error}` : result}
          </div>
        )}
      </div>
    </div>
  );
};
