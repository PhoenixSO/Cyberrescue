import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const AboutUs = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <Seo
        title="About Us | CyberRescue"
        description="Learn about CyberRescue, our mission, editorial approach, and commitment to practical cyber safety guidance."
        path="/about"
      />

      <h1 className="text-4xl font-extrabold text-white mb-6">About CyberRescue</h1>
      <p className="text-slate-200 leading-8 mb-6">
        CyberRescue is an educational cybersecurity website focused on helping people make safer decisions online. We publish practical guidance on scams,
        phishing, account security, and incident response in simple language.
      </p>

      <section className="card mb-6">
        <h2 className="text-2xl font-bold text-white mb-3">Our Mission</h2>
        <p className="text-slate-300 leading-8">
          Our mission is to reduce cyber harm by turning complex security advice into clear, action-oriented steps that individuals, families, and small teams can use immediately.
        </p>
      </section>

      <section className="card mb-6">
        <h2 className="text-2xl font-bold text-white mb-3">Editorial Principles</h2>
        <ul className="list-disc pl-6 text-slate-300 space-y-2">
          <li>Publish original, practical, and human-friendly content.</li>
          <li>Avoid fear-based messaging and unrealistic guarantees.</li>
          <li>Update pages as threats and platform policies evolve.</li>
          <li>Link to official reporting and support channels whenever possible.</li>
        </ul>
      </section>

      <section className="card mb-6">
        <h2 className="text-2xl font-bold text-white mb-3">How We Review Content</h2>
        <p className="text-slate-300 leading-8 mb-3">
          Each guide is drafted for clarity, checked for factual consistency, and reviewed for practical usability. We focus on prevention-first guidance, evidence-preserving incident response, and safe escalation steps.
        </p>
        <ul className="list-disc pl-6 text-slate-300 space-y-2">
          <li>Source verification against official support channels and security best-practice references.</li>
          <li>Plain-language rewrite pass to keep instructions accessible to non-technical users.</li>
          <li>Periodic review cycle to keep pages current as scam tactics evolve.</li>
        </ul>
      </section>

      <section className="card mb-6">
        <h2 className="text-2xl font-bold text-white mb-3">Corrections and Updates</h2>
        <p className="text-slate-300 leading-8">
          If you find an error or outdated recommendation, contact us through the contact page. We review corrections promptly and update pages with revised guidance where needed.
        </p>
      </section>

      <section className="card mb-6">
        <h2 className="text-2xl font-bold text-white mb-3">Who We Help</h2>
        <p className="text-slate-300 leading-8">
          We design our content for non-technical users, students, creators, parents, and small business teams that need trustworthy security help without jargon overload.
        </p>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link to="/articles" className="btn-primary">Read Articles</Link>
        <Link to="/contact" className="btn-outline">Contact Us</Link>
      </div>
    </div>
  );
};

export default AboutUs;
