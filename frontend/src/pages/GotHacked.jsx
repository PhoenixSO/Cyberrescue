import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Smartphone, Laptop, CreditCard, ArrowRight, ShieldAlert, CheckCircle2 } from 'lucide-react';

const GotHacked = () => {
  const [activeScenario, setActiveScenario] = useState('email');

  const scenarios = [
    {
      id: 'email',
      title: 'Email Is Hacked',
      icon: <Mail className="h-8 w-8 text-blue-400" />,
      description: 'Your email is the gateway to most of your other accounts. Immediate action is required.',
      steps: [
        { title: 'Change Password Immediately', detail: 'Log in from a secure device and change your password to something long, unique, and complex.' },
        { title: 'Enable Two-Factor Authentication (2FA)', detail: 'Use an authenticator app (like Google Authenticator) rather than SMS for better security.' },
        { title: 'Check Account Recovery Settings', detail: 'Ensure your recovery email and phone number haven\'t been changed by the attacker.' },
        { title: 'Review Sent Mail & Trash', detail: 'Check if the attacker sent emails to your contacts asking for money or spreading malware.' }
      ]
    },
    {
      id: 'social',
      title: 'Social Media Is Hacked',
      icon: <Smartphone className="h-8 w-8 text-pink-400" />,
      description: 'Attackers often use hacked social media to scam your friends or damage your reputation.',
      steps: [
        { title: 'Reset Password', detail: 'If you can still log in, change the password immediately. If locked out, use the platform\'s recovery process.' },
        { title: 'Remove Unknown Devices', detail: 'Go to security settings and sign out of all active sessions and unrecognized devices.' },
        { title: 'Revoke Third-Party App Access', detail: 'Remove any connected apps or games that you do not recognize or trust.' },
        { title: 'Report Account Compromise', detail: 'Use the official reporting tools on Facebook, Instagram, Twitter, etc., to flag the account as hacked.' },
        { title: 'Warn Your Friends', detail: 'Let your contacts know (via another channel) not to click on links or send money to your compromised account.' }
      ]
    },
    {
      id: 'computer',
      title: 'Computer Infected With Malware',
      icon: <Laptop className="h-8 w-8 text-red-500" />,
      description: 'Your device is acting strangely, running slow, or showing unexpected pop-ups (Ransomware/Viruses).',
      steps: [
        { title: 'Disconnect from Internet', detail: 'Immediately unplug the ethernet cable or turn off Wi-Fi to stop the malware from communicating with the attacker or spreading.' },
        { title: 'Boot into Safe Mode', detail: 'Restart your computer in Safe Mode to prevent the malware from loading automatically.' },
        { title: 'Run Antivirus Scan', detail: 'Perform a full system scan using a reputable and updated antivirus program.' },
        { title: 'Backup Important Files', detail: 'Backup your essential documents to an external drive (but scan them later before opening them on a clean machine).' },
        { title: 'Reinstall OS if Necessary', detail: 'If the infection is severe (like Ransomware), you may need to wipe your hard drive and reinstall the operating system.' }
      ]
    },
    {
      id: 'bank',
      title: 'Bank Account Compromised',
      icon: <CreditCard className="h-8 w-8 text-yellow-400" />,
      description: 'You notice unauthorized transactions or money missing from your accounts.',
      steps: [
        { title: 'Contact Bank Immediately', detail: 'Call the emergency fraud number on the back of your credit/debit card. Do not wait.' },
        { title: 'Freeze Account / Cards', detail: 'Request the bank to freeze the affected accounts or cancel and reissue your cards.' },
        { title: 'Change Online Banking Passwords', detail: 'Use a clean device to change your passwords and security questions for your financial accounts.' },
        { title: 'Report Cyber Crime', detail: 'File a report with your local cybercrime unit or the national cybercrime reporting portal.' },
        { title: 'Monitor Credit Reports', detail: 'Place a fraud alert on your credit profile to prevent attackers from opening new accounts in your name.' }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex justify-center flex-col items-center mb-6"
        >
          <div className="bg-red-500/10 p-4 rounded-full border border-red-500/30 mb-4 animate-pulse">
            <ShieldAlert className="h-12 w-12 text-red-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            I Got Hacked – <span className="text-red-500">What Now?</span>
          </h1>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto"
        >
          Don't panic. Time is critical, but acting methodically is key. Select your situation below for a step-by-step recovery guide.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Scenarios */}
        <div className="lg:col-span-1 space-y-4">
          <h2 className="text-lg font-semibold text-gray-400 uppercase tracking-wider mb-4">Select Situation</h2>
          {scenarios.map((scenario) => (
            <button
              key={scenario.id}
              onClick={() => setActiveScenario(scenario.id)}
              className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center space-x-4
                ${activeScenario === scenario.id 
                  ? 'bg-gray-800 border-neonGreen shadow-[0_0_15px_rgba(0,255,65,0.1)]' 
                  : 'bg-gray-900 border-gray-800 hover:border-gray-600 hover:bg-gray-800/50'
                }`}
            >
              <div className="flex-shrink-0">
                {scenario.icon}
              </div>
              <div className="font-semibold text-white">
                {scenario.title}
              </div>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            {scenarios.map((scenario) => (
              activeScenario === scenario.id && (
                <motion.div
                  key={scenario.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="card h-full"
                >
                  <div className="mb-8 border-b border-gray-800 pb-6">
                    <h2 className="text-3xl font-bold text-white mb-2">{scenario.title}</h2>
                    <p className="text-gray-400 text-lg">{scenario.description}</p>
                  </div>
                  
                  <div className="space-y-6 relative">
                    {/* Connecting line for steps */}
                    <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-800 z-0 hidden sm:block"></div>
                    
                    {scenario.steps.map((step, index) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        key={index}
                        className="relative z-10 flex items-start sm:items-center bg-gray-900/50 p-6 rounded-xl border border-gray-800/50 hover:border-gray-700 transition-colors"
                      >
                        <div className="flex-shrink-0 mr-6 sm:bg-darkBg rounded-full hidden sm:block">
                          <CheckCircle2 className="h-8 w-8 text-neonGreen" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                            <span className="text-neonGreen mr-2 sm:hidden">{index + 1}.</span>
                            {step.title}
                          </h3>
                          <p className="text-gray-400">{step.detail}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-10 p-6 bg-blue-900/20 rounded-xl border border-blue-900/50 flex items-start">
                    <ShieldAlert className="h-6 w-6 text-blue-400 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-gray-300 text-sm">
                      <strong className="text-white">Pro Tip:</strong> After securing your accounts, keep a close eye on your credit reports and bank statements for the next few months. Attackers sometimes wait before exploiting stolen data.
                    </p>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default GotHacked;
