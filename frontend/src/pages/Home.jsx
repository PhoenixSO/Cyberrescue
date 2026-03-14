import { Shield, AlertTriangle, Lock, ArrowRight, Activity, Globe, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Home = () => {
  const [dailyTip, setDailyTip] = useState('Loading daily security tip...');

  useEffect(() => {
    const fetchTip = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/tips/daily');
        const data = await response.json();
        if (data.tip) {
          setDailyTip(data.tip);
        }
      } catch (err) {
        setDailyTip('Never use the same password for multiple important accounts.'); // fallback
      }
    };
    fetchTip();
  }, []);

  const stats = [
    { id: 1, label: 'Cyber Attacks per Day', value: '2,200+', icon: Activity },
    { id: 2, label: 'Cost of Cyber Crime (2025)', value: '$10.5 Trillion', icon: Globe },
    { id: 3, label: 'Breaches Involving Stolen Credentials', value: '49%', icon: Lock },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-darkBg to-darkBg z-0"></div>
        
        {/* Animated Background Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0iIzFkNGVkOCIvPjwvc3ZnPg==')] opacity-10 z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-gray-900/50 rounded-full px-4 py-2 border border-neonGreen/30 mb-4"
            >
              <Shield className="h-5 w-5 text-neonGreen" />
              <span className="text-neonGreen text-sm font-medium tracking-wide">Defend Your Digital Life</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-extrabold text-white tracking-tight"
            >
              Stay Safe in the <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonGreen to-blue-500">Digital World</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-2xl mx-auto text-xl text-gray-400"
            >
              Cyber attacks are evolving rapidly. Arm yourself with the knowledge to identify threats, 
              protect your personal data, and respond effectively if compromised.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10"
            >
              <Link to="/attacks" className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center">
                Learn About Cyber Attacks <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/hacked" className="btn-outline flex items-center gap-2 w-full sm:w-auto justify-center">
                <AlertTriangle className="h-5 w-5" /> What To Do If Hacked
              </Link>
              <Link to="/learning" className="px-6 py-3 text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline">
                Cyber Security Tips
              </Link>
            </motion.div>

            {/* Daily Tip Widget */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="max-w-3xl mx-auto mt-12 bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-4 flex items-start sm:items-center space-x-4 text-left shadow-lg"
            >
              <div className="bg-yellow-500/20 p-2 rounded-lg flex-shrink-0 mt-1 sm:mt-0">
                <Lightbulb className="h-6 w-6 text-yellow-400" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Tip of the Day</h4>
                <p className="text-gray-200 text-sm sm:text-base">{dailyTip}</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-[#0a1224] border-t border-b border-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">The Global Cyber Threat</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Understanding the scale of cybercrime is the first step towards better security practices.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={stat.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="card text-center group"
                >
                  <div className="mx-auto w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mb-6 border border-gray-700 group-hover:border-neonGreen transition-colors">
                    <Icon className="h-8 w-8 text-blue-500 group-hover:text-neonGreen transition-colors" />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Outline */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Why Cyber Awareness Matters</h2>
              <div className="space-y-6 text-gray-400">
                <p>
                  In our hyper-connected reality, your digital identity is just as important as your physical one. Cybercriminals constantly develop new methods to steal information, money, and disrupt lives.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Shield className="h-6 w-6 text-neonGreen mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Proactive Defense:</strong> Learn to identify phishing emails, suspicious links, and social engineering attempts before falling victim.</span>
                  </li>
                  <li className="flex items-start">
                    <Lock className="h-6 w-6 text-neonGreen mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Data Protection:</strong> Understand how to secure your accounts with strong passwords and two-factor authentication.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square md:aspect-video rounded-xl border border-gray-800 bg-[#0A1224] overflow-hidden flex items-center justify-center relative p-8 shadow-2xl">
                 <div className="absolute inset-0 bg-blue-900/5 backdrop-blur-3xl"></div>
                 <div className="relative z-10 text-center space-y-6 w-full">
                    <div className="animate-pulse flex justify-center mb-8">
                      <Lock className="h-24 w-24 text-neonGreen opacity-80" />
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="w-2/3 h-full bg-neonGreen animate-[pulse_2s_ease-in-out_infinite]"></div>
                    </div>
                    <p className="text-xs text-neonGreen font-mono uppercase tracking-widest">System Secure</p>
                 </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-neonGreen/20 rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
