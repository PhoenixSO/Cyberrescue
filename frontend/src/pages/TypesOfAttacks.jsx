import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ChevronDown, ChevronUp, AlertCircle, Info, Zap, XOctagon } from 'lucide-react';

const TypesOfAttacks = () => {
  const [activeTab, setActiveTab] = useState(null);

  const attacks = [
    {
      id: 'phishing',
      title: 'Phishing',
      icon: <Info className="h-6 w-6 text-blue-400" />,
      definition: 'A deceptive attempt to steal sensitive information by masquerading as a trustworthy entity in electronic communication.',
      howItWorks: 'Attackers send convincing emails or messages that appear to be from legitimate sources (like banks or popular services). These messages usually contain a link to a fake website that looks identical to the real one, prompting the user to enter their credentials.',
      example: 'In 2016, the Hillary Clinton campaign chairman John Podesta fell victim to a spear-phishing attack when he clicked a fake Google security alert, leading to a massive email leak.',
      prevention: [
        'Verify the sender\'s email address carefully',
        'Do not click on unsolicited links or attachments',
        'Enable Multi-Factor Authentication (MFA)',
        'Check URL spelling closely'
      ]
    },
    {
      id: 'malware',
      title: 'Malware',
      icon: <AlertCircle className="h-6 w-6 text-red-500" />,
      definition: 'Malicious software designed specifically to damage, disrupt, or gain unauthorized access to a computer system.',
      howItWorks: 'Malware can infect a device through contaminated email attachments, compromised websites, or pirated software. Once executed, it can steal data, spy on the user, or damage files.',
      example: 'The ILOVEYOU virus in 2000 spread globally via email attachments, overriding files and causing an estimated $10 billion in damages.',
      prevention: [
        'Keep OS and software updated',
        'Use reputable antivirus software',
        'Avoid downloading files from unknown sources',
        'Scan external drives before use'
      ]
    },
    {
      id: 'ransomware',
      title: 'Ransomware',
      icon: <XOctagon className="h-6 w-6 text-orange-500" />,
      definition: 'A type of malware that permanently blocks access to the victim\'s data by encrypting it and demands a ransom payment to decrypt it.',
      howItWorks: 'After infiltrating a system, the ransomware encrypts crucial files or the entire hard drive. Users receive a prompt demanding payment (usually in cryptocurrency) in exchange for the decryption key.',
      example: 'WannaCry (2017) affected over 200,000 computers across 150 countries, including the UK\'s National Health Service, causing massive disruptions.',
      prevention: [
        'Regularly backup data to offline or cloud storage',
        'Never pay the ransom (it doesn\'t guarantee recovery)',
        'Use advanced threat protection software',
        'Segment networks to prevent lateral movement'
      ]
    },
    {
      id: 'ddos',
      title: 'DDoS Attacks',
      icon: <Zap className="h-6 w-6 text-yellow-400" />,
      definition: 'Distributed Denial of Service attempts to disrupt the normal traffic of a targeted server, service, or network by overwhelming the target with a flood of Internet traffic.',
      howItWorks: 'Attackers use multiple compromised computer systems (a botnet) as sources of attack traffic. The massive influx of fake requests makes the targeted service unavailable to legitimate users.',
      example: 'In 2018, GitHub was hit with a massive 1.35 Tbps DDoS attack, taking the platform offline briefly before being mitigated.',
      prevention: [
        'Utilize DDoS protection services (e.g., Cloudflare)',
        'Have a redundant network architecture',
        'Monitor network traffic patterns for anomalies',
        'Set up rate limiting for incoming requests'
      ]
    },
    {
      id: 'mitm',
      title: 'Man-in-the-Middle Attack',
      icon: <Shield className="h-6 w-6 text-purple-400" />,
      definition: 'An attack where the perpetrator secretly relays and possibly alters the communications between two parties who believe they are directly communicating with each other.',
      howItWorks: 'The attacker intercepts the communication—often on unsecured public Wi-Fi networks—allowing them to eavesdrop or impersonate one of the parties to steal login credentials or financial information.',
      example: 'Attackers creating a fake Wi-Fi hotspot in a coffee shop named "Free Public WiFi" to intercept all data transmitted by connected users.',
      prevention: [
        'Use end-to-end encryption (HTTPS)',
        'Avoid using sensitive accounts on public Wi-Fi',
        'Use a Virtual Private Network (VPN)',
        'Be wary of unexpected certificate warnings'
      ]
    },
    {
      id: 'bruteforce',
      title: 'Password Brute Force Attack',
      icon: <Info className="h-6 w-6 text-gray-400" />,
      definition: 'A trial-and-error method used by application programs to decode encrypted data such as passwords or Data Encryption Standard (DES) keys.',
      howItWorks: 'An attacker uses automated software to guess thousands or millions of password combinations per second until the correct one is found.',
      example: 'In 2012, attackers breached LinkedIn, stealing millions of user passwords that were poorly encrypted, easily cracking many through brute force.',
      prevention: [
        'Use strong, complex, and unique passwords',
        'Implement account lockout policies after failed attempts',
        'Enforce Multi-Factor Authentication (MFA)',
        'Avoid common dictionary words'
      ]
    },
    {
      id: 'social-engineering',
      title: 'Social Engineering',
      icon: <Shield className="h-6 w-6 text-green-400" />,
      definition: 'The psychological manipulation of people into performing actions or divulging confidential information.',
      howItWorks: 'Instead of finding a software vulnerability, an attacker might call an employee, impersonate IT support, and trick them into revealing their password.',
      example: 'The 2020 Twitter Bitcoin scam, where attackers used social engineering to gain access to administrative tools, then hijacked high-profile accounts like Elon Musk and Barack Obama.',
      prevention: [
        'Verify identities before sharing information',
        'Implement strict security training for employees',
        'Cultivate a security-first culture',
        'Follow zero-trust principles'
      ]
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
          Types of <span className="text-neonGreen">Cyber Attacks</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto"
        >
          Understand the enemy. Learn about the most common cyber threats, how they operate, and what you can do to prevent them.
        </motion.p>
      </div>

      <div className="space-y-6">
        {attacks.map((attack, index) => (
          <motion.div 
            key={attack.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`card cursor-pointer overflow-hidden transition-all duration-300 ${activeTab === attack.id ? 'border-neonGreen shadow-[0_0_15px_rgba(0,255,65,0.1)]' : ''}`}
            onClick={() => setActiveTab(activeTab === attack.id ? null : attack.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gray-900 rounded-lg">
                  {attack.icon}
                </div>
                <h2 className="text-2xl font-bold text-white">{attack.title}</h2>
              </div>
              <div>
                {activeTab === attack.id ? (
                  <ChevronUp className="h-6 w-6 text-gray-400" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-gray-400" />
                )}
              </div>
            </div>

            <AnimatePresence>
              {activeTab === attack.id && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 pt-6 border-t border-gray-800"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-neonGreen font-semibold uppercase text-sm mb-2 drop-shadow-md">Definition</h3>
                        <p className="text-gray-300">{attack.definition}</p>
                      </div>
                      <div>
                        <h3 className="text-neonGreen font-semibold uppercase text-sm mb-2 drop-shadow-md">How It Works</h3>
                        <p className="text-gray-300 bg-gray-900/50 p-4 rounded-lg border border-gray-800">{attack.howItWorks}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-neonGreen font-semibold uppercase text-sm mb-2 drop-shadow-md">Real-world Example</h3>
                        <p className="text-gray-300 italic border-l-4 border-gray-700 pl-4 py-1">{attack.example}</p>
                      </div>
                      <div>
                        <h3 className="text-neonGreen font-semibold uppercase text-sm mb-2 drop-shadow-md">Prevention Tips</h3>
                        <ul className="space-y-2">
                          {attack.prevention.map((tip, i) => (
                            <li key={i} className="flex items-start">
                              <Shield className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-300">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TypesOfAttacks;
