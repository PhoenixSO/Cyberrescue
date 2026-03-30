import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const Learning = () => {
  const tracks = [
    {
      title: 'Cyber Hygiene Fundamentals',
      description: 'Understand passwords, 2FA, software updates, and safe browsing behavior to reduce the most common risks.',
      links: [
        { label: 'Password Security Basics', to: '/articles/password-security-basics' },
        { label: 'Two-Factor Authentication Guide', to: '/articles/two-factor-authentication-guide' },
      ],
    },
    {
      title: 'Scam Awareness Skills',
      description: 'Learn practical signals for phishing, job scams, romance scams, and social engineering manipulation.',
      links: [
        { label: 'Spot Phishing Emails', to: '/articles/how-to-spot-phishing-emails' },
        { label: 'Job Scam Detection Guide', to: '/articles/job-scam-detection-guide' },
      ],
    },
    {
      title: 'Recovery and Incident Response',
      description: 'Build confidence with step-by-step playbooks for account takeover, malware infection, and urgent reporting.',
      links: [
        { label: 'Incident Response First Hour', to: '/articles/incident-response-first-hour' },
        { label: 'Account Recovery Plan Template', to: '/articles/account-recovery-plan-template' },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <Seo
        title="Learning Center | CyberRescue"
        description="Build cyber safety skills with practical learning tracks on phishing, account security, privacy, and incident response."
        path="/learning"
      />

      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Learning Center</h1>
        <p className="text-lg text-slate-300 leading-8 max-w-4xl">
          This section is designed for people who want clear, practical cybersecurity education without jargon. Follow the learning tracks below to improve your defenses, respond better during incidents, and protect your family or team online.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {tracks.map((track) => (
          <article key={track.title} className="card">
            <h2 className="text-2xl font-bold text-white mb-3">{track.title}</h2>
            <p className="text-slate-300 mb-4">{track.description}</p>
            <div className="space-y-2">
              {track.links.map((item) => (
                <Link key={item.to} to={item.to} className="block text-cyan-300 hover:text-cyan-200">
                  {item.label}
                </Link>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="card mb-8">
        <h2 className="text-2xl font-bold text-white mb-3">How To Use This Learning Center</h2>
        <ol className="list-decimal pl-6 text-slate-300 space-y-2">
          <li>Start with account basics: strong passwords and two-factor authentication.</li>
          <li>Learn scam detection patterns before sharing information or sending money.</li>
          <li>Practice incident response checklists so actions are clear during stress.</li>
          <li>Review reporting channels and keep evidence collection habits ready.</li>
        </ol>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-2xl font-bold text-white mb-2">Frequently Asked Question</h2>
          <h3 className="text-lg text-white font-semibold mb-2">How often should I revisit security settings?</h3>
          <p className="text-slate-300">Review key settings every 90 days or after major account updates, travel, or suspicious activity alerts.</p>
        </div>
        <div className="card">
          <h2 className="text-2xl font-bold text-white mb-2">Next Step</h2>
          <p className="text-slate-300 mb-4">After completing a learning track, apply it with practical checklists and tools.</p>
          <Link to="/tools" className="btn-outline">Open Tools & Resources</Link>
        </div>
      </section>
    </div>
  );
};

export default Learning;
