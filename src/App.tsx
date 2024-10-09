import React, { useState } from 'react'
import CodeRain from './components/CodeRain'
import { Code, Send, Mail } from 'lucide-react'

function App() {
  const [inputText, setInputText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedText(inputText);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-between relative">
      <CodeRain inputText={submittedText} />
      <div className="z-10 text-center mt-20">
        <h1 className="text-4xl font-bold mb-4 flex items-center justify-center">
          <Code className="mr-2" /> Code Rain
        </h1>
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter text to appear in the rain..."
            className="px-4 py-2 bg-gray-800 text-white rounded-l-md w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-r-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
      <div className="z-10 w-full bg-green-500 py-4 text-center">
        <a href="mailto:contact@coderain.com" className="flex items-center justify-center text-black hover:text-white transition-colors duration-300">
          <Mail className="mr-2" /> Contact Us
        </a>
      </div>
    </div>
  )
}

export default App