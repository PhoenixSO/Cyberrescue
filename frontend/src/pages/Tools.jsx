import { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { API_BASE_URL } from '../config';

const toolCategories = [
  {
    title: 'Password Managers',
    description:
      'Use a password manager to create and store unique credentials. This prevents one breach from exposing multiple accounts.',
    examples: ['Bitwarden', '1Password', 'Proton Pass', 'Dashlane'],
  },
  {
    title: 'Antivirus and Endpoint Protection',
    description:
      'Endpoint tools help detect malware, ransomware behavior, and suspicious downloads. Keep signatures and engines updated.',
    examples: ['Microsoft Defender', 'Bitdefender', 'Malwarebytes', 'ESET'],
  },
  {
    title: 'Secure Browsers and Extensions',
    description:
      'Choose browsers with strong security controls and keep extensions minimal. Remove extensions you do not actively use.',
    examples: ['Firefox', 'Brave', 'uBlock Origin', 'Privacy Badger'],
  },
  {
    title: 'Breach Monitoring Tools',
    description:
      'Breach tools notify you when email addresses appear in known leaks so you can rotate passwords early.',
    examples: ['Have I Been Pwned', 'Firefox Monitor', 'Google Password Checkup'],
  },
];

const Tools = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [result, setResult] = useState(null);

  const handleCheck = async (event) => {
    event.preventDefault();
    if (!email) return;

    setStatus('loading');

    try {
      const response = await fetch(`${API_BASE_URL}/api/breach-check`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Unable to check breach status');
      }

      const data = await response.json();
      setResult(data);
      setStatus('done');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <Seo
        title="Tools & Resources | CyberRescue"
        description="Browse recommended cyber safety tool categories and use the CyberRescue breach check simulator."
        path="/tools"
      />

      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Tools & Resources</h1>
        <p className="text-lg text-slate-300 leading-8 max-w-4xl">
          Tools do not replace awareness, but they make safer behavior easier. This page explains what each tool category solves and how to choose practical options.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {toolCategories.map((item) => (
          <article key={item.title} className="card">
            <h2 className="text-2xl font-bold text-white mb-2">{item.title}</h2>
            <p className="text-slate-300 mb-4">{item.description}</p>
            <div className="flex flex-wrap gap-2">
              {item.examples.map((example) => (
                <span key={example} className="px-3 py-1 text-sm rounded-full bg-slate-800 text-slate-200 border border-slate-700">{example}</span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="card mb-10">
        <h2 className="text-2xl font-bold text-white mb-2">Breach Check Simulator</h2>
        <p className="text-slate-300 mb-5">
          This demo tool sends your email to the backend simulator and returns a mock breach status to show how an alert workflow can look.
        </p>

        <form onSubmit={handleCheck} className="flex flex-col sm:flex-row gap-3 mb-5">
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            placeholder="Enter an email address"
            className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white"
          />
          <button className="btn-primary" disabled={status === 'loading'} type="submit">
            {status === 'loading' ? 'Checking...' : 'Check Email'}
          </button>
        </form>

        {status === 'done' && result ? (
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-slate-200">
            <p className="mb-2"><strong>Status:</strong> {result.breached ? 'Breached' : 'No known breach found (simulated)'}</p>
            <p className="mb-2"><strong>Message:</strong> {result.message}</p>
            {result.sources?.length ? (
              <ul className="list-disc pl-6">
                {result.sources.map((source) => (
                  <li key={source}>{source}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : null}

        {status === 'error' ? <p className="text-red-400">The simulator is not reachable right now.</p> : null}
      </section>

      <section className="card">
        <h2 className="text-2xl font-bold text-white mb-3">FAQ</h2>
        <h3 className="text-lg font-semibold text-white mb-1">Which tool should I adopt first?</h3>
        <p className="text-slate-300 mb-4">Start with a password manager and 2FA setup for your email and financial accounts.</p>
        <div className="flex flex-wrap gap-3">
          <Link to="/articles" className="btn-outline">Read Tool Guides</Link>
          <Link to="/hacked" className="btn-outline">Recovery Playbook</Link>
        </div>
      </section>
    </div>
  );
};

export default Tools;
