import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const steps = [
  'Preserve evidence: screenshots, transaction IDs, usernames, URLs, and timestamps.',
  'Contact your bank/payment provider immediately for financial fraud and request account protection.',
  'Report the incident to the official cybercrime portal in your country.',
  'Submit reports to the affected platform (social media, marketplace, email provider).',
  'Store complaint numbers and monitor case updates regularly.',
];

const Reporting = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <Seo
        title="Report Cybercrime & Scams | CyberRescue"
        description="Learn how to report cybercrime effectively with proper evidence, fast escalation, and official complaint channels."
        path="/reporting"
      />

      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Report Cybercrime / Scams</h1>
        <p className="text-lg text-slate-300 leading-8">
          Reporting protects more than one victim. The faster and more complete your complaint is, the more useful it becomes for investigators and platform safety teams.
        </p>
      </header>

      <section className="card mb-8">
        <h2 className="text-2xl font-bold text-white mb-3">Step-by-Step Reporting Checklist</h2>
        <ol className="list-decimal pl-6 text-slate-300 space-y-2">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="card mb-8">
        <h2 className="text-2xl font-bold text-white mb-3">Important Official Links</h2>
        <ul className="list-disc pl-6 text-slate-300 space-y-2">
          <li>
            India National Cyber Crime Reporting Portal:{' '}
            <a href="https://cybercrime.gov.in" target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-cyan-200">cybercrime.gov.in</a>
          </li>
          <li>
            Google account safety support:{' '}
            <a href="https://support.google.com/accounts" target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-cyan-200">support.google.com/accounts</a>
          </li>
          <li>
            Meta account help center:{' '}
            <a href="https://www.facebook.com/hacked" target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-cyan-200">facebook.com/hacked</a>
          </li>
        </ul>
      </section>

      <section className="card">
        <h2 className="text-2xl font-bold text-white mb-3">FAQ</h2>
        <h3 className="text-lg font-semibold text-white mb-1">What if I only lost a small amount?</h3>
        <p className="text-slate-300 mb-3">Report anyway. Small-value scams are often repeated at scale and your report can help identify a larger fraud network.</p>
        <h3 className="text-lg font-semibold text-white mb-1">Can I edit my complaint later?</h3>
        <p className="text-slate-300 mb-4">Most platforms and portals allow follow-up evidence. Keep your complaint ID and update it with new details.</p>
        <div className="flex flex-wrap gap-3">
          <Link to="/articles/reporting-online-scams-effectively" className="btn-outline">Read Detailed Reporting Guide</Link>
          <Link to="/contact" className="btn-outline">Contact CyberRescue</Link>
        </div>
      </section>
    </div>
  );
};

export default Reporting;
