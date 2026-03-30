import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const scenarios = [
  {
    title: 'Email Account Hacked',
    steps: [
      'Change password from a clean device and sign out of all sessions.',
      'Enable 2FA with an authenticator app.',
      'Review forwarding rules and recovery settings for unauthorized changes.',
      'Check sent mail for scam messages sent to your contacts.',
    ],
  },
  {
    title: 'Social Media Account Taken Over',
    steps: [
      'Reset credentials and remove unknown devices or linked apps.',
      'Use official platform recovery forms if locked out.',
      'Post a warning from a trusted account to prevent follower scams.',
      'Archive evidence before deleting malicious posts.',
    ],
  },
  {
    title: 'Malware on Computer',
    steps: [
      'Disconnect the device from internet and shared networks.',
      'Run reputable antivirus scans and isolate suspicious files.',
      'Change passwords from another trusted device.',
      'Restore from clean backups if ransomware is detected.',
    ],
  },
  {
    title: 'Financial Fraud or Payment Theft',
    steps: [
      'Call your bank and freeze affected cards or accounts immediately.',
      'Report unauthorized transactions with timestamps and references.',
      'File a cybercrime complaint with preserved evidence.',
      'Set alerts and monitor credit activity for follow-up abuse.',
    ],
  },
];

const GotHacked = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <Seo
        title="What To Do If Hacked | CyberRescue"
        description="Follow clear account recovery and incident response steps if your email, social media, device, or banking account is compromised."
        path="/hacked"
      />

      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">What To Do If You Were Hacked</h1>
        <p className="text-lg text-slate-300 leading-8 max-w-4xl">
          Panic causes mistakes. Use these response checklists to contain damage, recover access, and preserve evidence for support teams and authorities.
        </p>
      </header>

      <section className="space-y-6 mb-10">
        {scenarios.map((scenario) => (
          <article className="card" key={scenario.title}>
            <h2 className="text-2xl font-bold text-white mb-3">{scenario.title}</h2>
            <ol className="list-decimal pl-6 text-slate-300 space-y-2">
              {scenario.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>
        ))}
      </section>

      <section className="card">
        <h2 className="text-2xl font-bold text-white mb-3">FAQ</h2>
        <h3 className="text-lg font-semibold text-white mb-1">Should I pay ransomware demands?</h3>
        <p className="text-slate-300 mb-3">Security professionals usually advise against paying because recovery is not guaranteed and payment can fund more attacks.</p>
        <h3 className="text-lg font-semibold text-white mb-1">When should I report?</h3>
        <p className="text-slate-300 mb-4">Report immediately for financial fraud, account takeovers, and extortion attempts. Early reporting can improve outcomes.</p>
        <div className="flex flex-wrap gap-3">
          <Link className="btn-outline" to="/reporting">Report a Scam</Link>
          <Link className="btn-outline" to="/articles/incident-response-first-hour">First-Hour Incident Checklist</Link>
        </div>
      </section>
    </div>
  );
};

export default GotHacked;
