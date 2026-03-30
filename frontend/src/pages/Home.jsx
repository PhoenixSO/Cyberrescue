import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { API_BASE_URL, SITE_URL } from '../config';

const Home = () => {
  const [dailyTip, setDailyTip] = useState('Use unique passwords for every important account.');

  useEffect(() => {
    const fetchTip = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/tips/daily`);
        const data = await response.json();
        if (data.tip) {
          setDailyTip(data.tip);
        }
      } catch (error) {
        setDailyTip('Enable two-factor authentication on your email account first.');
      }
    };

    fetchTip();
  }, []);

  return (
    <div className="min-h-screen">
      <Seo
        title="CyberRescue | Cyber Safety, Scam Awareness & Account Recovery"
        description="CyberRescue helps you prevent scams, secure accounts, recover from hacks, and report cybercrime with practical step-by-step guidance."
        path="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'CyberRescue',
          url: SITE_URL,
        }}
      />

      <section className="bg-[linear-gradient(135deg,#081321_0%,#0f2740_52%,#09233a_100%)] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="trust-badge border-neonGreen/40 bg-neonGreen/10 text-neonGreen">Reviewed Monthly</span>
            <span className="trust-badge border-cyan-300/40 bg-cyan-300/10 text-cyan-300">No Hype, Practical Steps</span>
            <Link to="/contact" className="trust-badge border-slate-600 bg-slate-900 text-slate-200 hover:border-neonGreen hover:text-neonGreen">Need help now? Contact us</Link>
          </div>
          <p className="inline-block bg-cyan-300/10 border border-cyan-300/30 text-cyan-300 text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-5">
            Practical cyber safety for everyday users
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-4xl mb-6">
            Learn to prevent scams, recover faster, and protect your digital life.
          </h1>
          <p className="text-slate-200 text-lg leading-8 max-w-3xl mb-8">
            CyberRescue is a content-rich educational platform focused on scam awareness, account recovery, safer browsing, and incident reporting. If you are worried about phishing, data breaches, hacked social accounts, or online fraud, start here.
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            <Link to="/learning" className="btn-primary">Start 5-Minute Safety Check</Link>
            <span className="cta-chip">CTA test variant A</span>
            <Link to="/hacked" className="btn-outline">Get Hacked-Account Recovery Plan</Link>
            <span className="cta-chip">CTA test variant B</span>
            <Link to="/reporting" className="btn-outline">Report a Scam</Link>
          </div>
          <p className="text-sm text-slate-400 mt-4">Trusted by users looking for immediate help and prevention guidance.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <article className="card">
          <h2 className="text-xl font-bold text-white mb-2">Prevention First</h2>
          <p className="text-slate-300 mb-4">Learn to identify phishing, fake job offers, social engineering, and unsafe links before they cause harm.</p>
          <Link className="text-cyan-300 hover:text-cyan-200" to="/attacks">Explore cyber attack types</Link>
        </article>
        <article className="card">
          <h2 className="text-xl font-bold text-white mb-2">Recovery Guidance</h2>
          <p className="text-slate-300 mb-4">Follow step-by-step recovery playbooks for email, social media, device, and payment account compromises.</p>
          <Link className="text-cyan-300 hover:text-cyan-200" to="/hacked">Open recovery guides</Link>
        </article>
        <article className="card">
          <h2 className="text-xl font-bold text-white mb-2">Reporting Support</h2>
          <p className="text-slate-300 mb-4">Get actionable checklists for collecting evidence and filing complete scam reports with official channels.</p>
          <Link className="text-cyan-300 hover:text-cyan-200" to="/reporting">See reporting steps</Link>
        </article>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="card">
          <h2 className="text-2xl font-bold text-white mb-3">Tip of the Day</h2>
          <p className="text-slate-300 text-lg">{dailyTip}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-3xl font-bold text-white mb-6">Quick FAQ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-xl text-white font-semibold mb-2">Where should I begin if I am non-technical?</h3>
            <p className="text-slate-300">Start with the Learning Center, then read our article guides. We keep explanations simple and action-focused.</p>
          </div>
          <div className="card">
            <h3 className="text-xl text-white font-semibold mb-2">Can this site help me during active fraud?</h3>
            <p className="text-slate-300">Yes. Use the reporting and hacked-account sections immediately, and contact your bank or local authorities for urgent incidents.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
