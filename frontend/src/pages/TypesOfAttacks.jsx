import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const attacks = [
  {
    title: 'Phishing',
    summary: 'Scammers impersonate trusted brands to steal credentials or payment details.',
    signs: ['Urgent account warnings', 'Spoofed sender addresses', 'Suspicious links or attachments'],
    response: 'Do not click links. Verify through official websites and report the message.',
  },
  {
    title: 'Ransomware',
    summary: 'Malware encrypts files and demands payment for decryption.',
    signs: ['Locked files', 'Ransom notes', 'Unexpected extension changes'],
    response: 'Isolate devices immediately and recover from clean backups if available.',
  },
  {
    title: 'Social Engineering',
    summary: 'Attackers manipulate trust to obtain secrets, OTPs, or remote access.',
    signs: ['Pressure tactics', 'Too-friendly support calls', 'Requests for confidential details'],
    response: 'Verify identity independently and never share OTPs or passwords.',
  },
  {
    title: 'Credential Stuffing',
    summary: 'Leaked username-password pairs are reused on multiple services.',
    signs: ['Unexpected login alerts', 'Multiple failed logins', 'Compromise after public breach'],
    response: 'Use unique passwords and enable two-factor authentication.',
  },
  {
    title: 'Malware and Trojans',
    summary: 'Malicious software hides in fake installers, cracked apps, or harmful documents.',
    signs: ['Slow system behavior', 'Unknown startup apps', 'Security tools disabled'],
    response: 'Run trusted security scans and remove suspicious software.',
  },
  {
    title: 'Man-in-the-Middle',
    summary: 'Attackers intercept communications on insecure or compromised networks.',
    signs: ['Unexpected certificate warnings', 'Forced login loops', 'Session hijacking'],
    response: 'Avoid sensitive activity on unknown networks and use trusted VPNs.',
  },
];

const TypesOfAttacks = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <Seo
        title="Types of Cyber Attacks | CyberRescue"
        description="Understand common cyber attacks, warning signs, and prevention steps including phishing, ransomware, and social engineering."
        path="/attacks"
      />

      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Types of Cyber Attacks</h1>
        <p className="text-lg text-slate-300 leading-8 max-w-4xl">
          Knowing attack patterns helps you react faster and avoid costly mistakes. This section explains common threats, real warning signals, and practical defensive actions.
        </p>
      </header>

      <section className="space-y-5 mb-10">
        {attacks.map((attack) => (
          <article className="card" key={attack.title}>
            <h2 className="text-2xl font-bold text-white mb-2">{attack.title}</h2>
            <p className="text-slate-300 mb-3">{attack.summary}</p>
            <h3 className="text-white font-semibold mb-1">Warning Signs</h3>
            <ul className="list-disc pl-6 text-slate-300 mb-3">
              {attack.signs.map((sign) => (
                <li key={sign}>{sign}</li>
              ))}
            </ul>
            <h3 className="text-white font-semibold mb-1">Immediate Response</h3>
            <p className="text-slate-300">{attack.response}</p>
          </article>
        ))}
      </section>

      <section className="card">
        <h2 className="text-2xl font-bold text-white mb-3">Need a deeper guide?</h2>
        <p className="text-slate-300 mb-4">Explore detailed attack prevention and recovery topics in the article library.</p>
        <div className="flex flex-wrap gap-3">
          <Link className="btn-outline" to="/articles">Open Articles</Link>
          <Link className="btn-outline" to="/learning">Go to Learning Center</Link>
        </div>
      </section>
    </div>
  );
};

export default TypesOfAttacks;
