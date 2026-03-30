import { useState } from 'react';
import Seo from '../components/Seo';
import { API_BASE_URL } from '../config';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit contact form');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Seo
        title="Contact Us | CyberRescue"
        description="Contact CyberRescue for feedback, corrections, safety resource requests, and partnership inquiries."
        path="/contact"
      />

      <h1 className="text-4xl font-extrabold text-white mb-4">Contact Us</h1>
      <p className="text-slate-300 mb-8 leading-8">
        Have feedback, found a broken link, or want us to cover a cyber safety topic? Send us a message.
      </p>

      <section className="card mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Send a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <label className="block">
            <span className="text-slate-200 text-sm">Name</span>
            <input
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white"
            />
          </label>

          <label className="block">
            <span className="text-slate-200 text-sm">Email</span>
            <input
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white"
            />
          </label>

          <label className="block">
            <span className="text-slate-200 text-sm">Message</span>
            <textarea
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="mt-1 w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white"
            />
          </label>

          <button type="submit" className="btn-primary" disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' ? <p className="text-green-400">Message sent successfully. We typically reply within 2 business days.</p> : null}
          {status === 'error' ? <p className="text-red-400">Could not send your message right now. Please try again later.</p> : null}
        </form>
      </section>

      <section className="card">
        <h2 className="text-2xl font-bold text-white mb-3">Direct Email</h2>
        <p className="text-slate-300 mb-2">For urgent corrections and reporting guide updates:</p>
        <p className="text-cyan-300">support@cyberrescue.org</p>
        <p className="text-xs text-slate-400 mt-2">We do not request access to any external apps or services from this page.</p>
      </section>
    </div>
  );
};

export default ContactUs;
