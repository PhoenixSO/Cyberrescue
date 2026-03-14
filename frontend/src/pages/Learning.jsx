import { motion } from 'framer-motion';
import { BookOpen, Terminal, GraduationCap, Briefcase, ExternalLink, PlayCircle, ShieldCheck } from 'lucide-react';

const Learning = () => {
  const sections = [
    {
      title: 'Cybersecurity Basics',
      icon: <BookOpen className="h-8 w-8 text-blue-400" />,
      description: 'Start here. Understand the fundamental concepts of digital security, threat landscapes, and personal data protection.',
      resources: [
        { title: 'Google Cybersecurity Certificate', type: 'Course', url: '#' },
        { title: 'Cisco Networking Academy: Intro to Cybersecurity', type: 'Course', url: '#' },
        { title: 'NIST Password Guidelines Explained', type: 'Article', url: '#' }
      ]
    },
    {
      title: 'Online Safety Practices',
      icon: <ShieldCheck className="h-8 w-8 text-green-400" />,
      description: 'Practical, actionable steps you can take every day to secure your digital life on social media, email, and the broader web.',
      resources: [
        { title: 'How to Identify Phishing Emails', type: 'Video', url: '#' },
        { title: 'Setting Up 2FA on Major Accounts', type: 'Guide', url: '#' },
        { title: 'Privacy Settings Checklist 2025', type: 'Checklist', url: '#' }
      ]
    },
    {
      title: 'Ethical Hacking Intro',
      icon: <Terminal className="h-8 w-8 text-neonGreen" />,
      description: 'Curious about how hackers think? Learn offensively to defend effectively. Discover the basics of penetration testing.',
      resources: [
        { title: 'TryHackMe: Beginner Path', type: 'Platform', url: '#' },
        { title: 'HackTheBox Academy', type: 'Platform', url: '#' },
        { title: 'Intro to Kali Linux', type: 'Video', url: '#' }
      ]
    },
    {
      title: 'Careers in Cybersecurity',
      icon: <Briefcase className="h-8 w-8 text-purple-400" />,
      description: 'Turn your interest into a profession. Explore roles like Security Analyst, Penetration Tester, and Incident Responder.',
      resources: [
        { title: 'CompTIA Security+ Certification Guide', type: 'Certification', url: '#' },
        { title: 'Cybersecurity Career Pathways', type: 'Map', url: '#' },
        { title: 'Day in the Life of a SOC Analyst', type: 'Article', url: '#' }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block p-4 bg-blue-900/20 rounded-full border border-blue-500/30 mb-6"
        >
          <GraduationCap className="h-12 w-12 text-blue-500" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-4"
        >
          Learning & <span className="text-blue-500">Awareness</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto"
        >
          Knowledge is your strongest firewall. Explore these curated resources to level up your understanding of the digital world.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="card flex flex-col h-full"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-gray-900 rounded-lg border border-gray-800">
                {section.icon}
              </div>
              <h2 className="text-2xl font-bold text-white">{section.title}</h2>
            </div>
            <p className="text-gray-400 mb-8 flex-grow">{section.description}</p>
            
            <div className="space-y-3 mt-auto">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">Recommended Resources</h3>
              {section.resources.map((resource, i) => (
                <a 
                  key={i} 
                  href={resource.url} 
                  className="group flex items-center justify-between p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800 border border-transparent hover:border-gray-700 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    {resource.type === 'Video' ? (
                       <PlayCircle className="h-5 w-5 text-gray-500 group-hover:text-neonGreen transition-colors" />
                    ) : (
                       <ExternalLink className="h-5 w-5 text-gray-500 group-hover:text-neonGreen transition-colors" />
                    )}
                    <span className="text-gray-300 group-hover:text-white font-medium transition-colors">{resource.title}</span>
                  </div>
                  <span className="text-xs font-mono px-2 py-1 rounded bg-gray-800 text-gray-500 group-hover:text-neonGreen border border-gray-700">
                    {resource.type}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Learning;
