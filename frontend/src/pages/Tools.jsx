import { useState } from 'react';
import { motion } from 'framer-motion';
import { KeyRound, ShieldCheck, GlobeLock, SearchCode, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { getApiUrl } from '../config/api';

const buildFallbackBreachResult = (email) => {
  const normalized = email.trim().toLowerCase();
  const hashSeed = normalized.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const breached = hashSeed % 2 === 0;

  if (breached) {
    return {
      breached: true,
      breachesCount: (hashSeed % 4) + 1,
      message: 'Simulation complete: this email appears in known breach datasets.',
      sources: ['Adobe (2013)', 'LinkedIn (2012)', 'Canva (2019)'].slice(0, (hashSeed % 3) + 1),
      isFallback: true,
    };
  }

  return {
    breached: false,
    breachesCount: 0,
    message: 'Simulation complete: no known breach match found for this email.',
    sources: [],
    isFallback: true,
  };
};

const Tools = () => {
  const [breachEmail, setBreachEmail] = useState('');
  const [breachStatus, setBreachStatus] = useState('idle'); // idle, loading, result
  const [breachResult, setBreachResult] = useState(null);

  const handleBreachCheck = async (e) => {
    e.preventDefault();
    if (!breachEmail) return;
    
    setBreachStatus('loading');
    
    try {
      const response = await fetch(getApiUrl('/api/breach-check'), {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: breachEmail })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setBreachResult(data);
      setBreachStatus('result');
    } catch (error) {
      console.error('Breach check error:', error);

      // Fallback keeps the simulator usable when the backend is unavailable.
      const fallbackResult = buildFallbackBreachResult(breachEmail);
      setBreachResult(fallbackResult);
      setBreachStatus('result');
    }
  };

  const toolCategories = [
    {
      title: 'Password Managers',
      icon: <KeyRound className="h-10 w-10 text-blue-400" />,
      description: 'Generate, store, and auto-fill complex passwords for all your accounts so you only have to remember one master password.',
      examples: ['Bitwarden', '1Password', 'Dashlane', 'Proton Pass']
    },
    {
      title: 'Antivirus & Anti-Malware',
      icon: <ShieldCheck className="h-10 w-10 text-green-400" />,
      description: 'Software designed to detect, prevent, and remove malicious software from your devices before it can cause damage.',
      examples: ['Malwarebytes', 'Bitdefender', 'Kaspersky', 'Windows Defender']
    },
    {
      title: 'VPN (Virtual Private Network)',
      icon: <GlobeLock className="h-10 w-10 text-purple-400" />,
      description: 'Encrypts your internet connection and masks your IP address, protecting your data from eavesdroppers, especially on public Wi-Fi.',
      examples: ['Mullvad VPN', 'ProtonVPN', 'NordVPN', 'ExpressVPN']
    },
    {
      title: 'Data Breach Checkers',
      icon: <SearchCode className="h-10 w-10 text-yellow-400" />,
      description: 'Monitor whether your email address, phone number, or passwords have been exposed in known corporate data breaches.',
      examples: ['Have I Been Pwned', 'Firefox Monitor', 'Google Password Checkup']
    }
  ];

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-4"
        >
          Essential <span className="text-blue-500">Security Tools</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto"
        >
          Arm yourself with the right software. These categories represent the fundamental toolkit everyone should use to stay safe online.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {toolCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="card hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-gray-900 rounded-xl border border-gray-800 shadow-inner">
                {category.icon}
              </div>
              <h2 className="text-2xl font-bold text-white">{category.title}</h2>
            </div>
            
            <p className="text-gray-400 mb-6 min-h-[4rem]">
              {category.description}
            </p>
            
            <div>
              <h3 className="text-sm font-semibold text-neonGreen uppercase tracking-wider mb-3">Popular Options</h3>
              <div className="flex flex-wrap gap-2">
                {category.examples.map((example, i) => (
                  <span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-800 text-gray-300 border border-gray-700 hover:text-white hover:border-gray-500 cursor-default transition-colors">
                    {example}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-900/50 rounded-2xl p-8 max-w-3xl mx-auto"
      >
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Data Breach Simulator</h3>
          <p className="text-gray-400">Enter an email to simulate checking known databases for exposed credentials.</p>
        </div>

        {breachStatus === 'idle' || breachStatus === 'loading' ? (
          <form onSubmit={handleBreachCheck} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter email address..." 
              required
              value={breachEmail}
              onChange={(e) => setBreachEmail(e.target.value)}
              className="flex-grow bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neonGreen"
            />
            <button 
              type="submit" 
              disabled={breachStatus === 'loading'}
              className={`btn-primary whitespace-nowrap flex items-center justify-center ${breachStatus === 'loading' ? 'opacity-70' : ''}`}
            >
              {breachStatus === 'loading' ? (
                 <div className="h-5 w-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <><SearchCode className="mr-2 h-5 w-5" /> Check Now</>
              )}
            </button>
          </form>
        ) : (
          <div className="max-w-xl mx-auto text-center">
             {breachResult?.breached ? (
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                  <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">{breachResult.message}</h4>
                  <p className="text-red-400 mb-4">Found in {breachResult.breachesCount} known breaches.</p>
                  
                  <div className="text-left bg-gray-900 rounded-lg p-4 mb-6">
                    <span className="text-sm text-gray-400 uppercase tracking-wider block mb-2">Simulated Sources:</span>
                    <ul className="list-disc list-inside text-gray-300">
                      {breachResult.sources.map((src, i) => <li key={i}>{src}</li>)}
                    </ul>
                  </div>
                  
                  <button onClick={() => setBreachStatus('idle')} className="btn-outline w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                    Check Another Email
                  </button>
                    {breachResult?.isFallback ? (
                      <p className="text-xs text-gray-500 mt-3">Backend unavailable: showing local simulator result.</p>
                    ) : null}
                </div>
             ) : (
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                  <CheckCircle2 className="h-12 w-12 text-neonGreen mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">{breachResult?.message}</h4>
                  <p className="text-gray-400 mb-6">No known breaches found in our simulated database.</p>
                  <button onClick={() => setBreachStatus('idle')} className="btn-outline w-full">
                    Check Another Email
                  </button>
                    {breachResult?.isFallback ? (
                      <p className="text-xs text-gray-500 mt-3">Backend unavailable: showing local simulator result.</p>
                    ) : null}
                </div>
             )}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Tools;
