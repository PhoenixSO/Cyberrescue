import Seo from '../components/Seo';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Seo
        title="Privacy Policy | CyberRescue"
        description="CyberRescue privacy policy covering cookies, analytics, ads, data usage, and user choices."
        path="/privacy"
      />

      <h1 className="text-4xl font-extrabold text-white mb-6">Privacy Policy</h1>
      <div className="space-y-6 text-slate-300 leading-8">
        <section className="card">
          <h2 className="text-2xl font-bold text-white mb-2">1. Information We Collect</h2>
          <p>
            We may collect limited information such as browser type, pages visited, and interaction events to improve site quality and content relevance. If you use our contact form, we collect the details you submit.
          </p>
        </section>

        <section className="card">
          <h2 className="text-2xl font-bold text-white mb-2">2. Cookies and Similar Technologies</h2>
          <p>
            CyberRescue uses essential cookies for site functionality. We may also use analytics cookies to understand page performance and audience behavior.
          </p>
          <p>
            If ads are enabled in the future, advertising partners may use cookies or similar technologies to show relevant ads and measure campaign performance.
          </p>
        </section>

        <section className="card">
          <h2 className="text-2xl font-bold text-white mb-2">3. Analytics and Advertising</h2>
          <p>
            We may use third-party analytics services to measure traffic and content performance. We may also use third-party advertising providers such as Google AdSense in accordance with applicable policies.
          </p>
          <p>
            Third-party vendors may use cookies to serve ads based on prior visits to this and other websites.
          </p>
        </section>

        <section className="card">
          <h2 className="text-2xl font-bold text-white mb-2">4. User Choices and Controls</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You can disable or clear cookies in your browser settings.</li>
            <li>You can opt out of personalized ads through ad settings tools provided by major ad networks.</li>
            <li>You can contact us to request correction or deletion of data submitted through forms.</li>
          </ul>
        </section>

        <section className="card">
          <h2 className="text-2xl font-bold text-white mb-2">5. Data Security</h2>
          <p>
            We apply reasonable technical and administrative measures to protect data. No method of transmission or storage is completely risk-free.
          </p>
        </section>

        <section className="card">
          <h2 className="text-2xl font-bold text-white mb-2">6. Third-Party Links</h2>
          <p>
            Our website links to external resources and official reporting portals. We are not responsible for content or privacy practices on third-party websites.
          </p>
        </section>

        <section className="card">
          <h2 className="text-2xl font-bold text-white mb-2">7. Policy Updates</h2>
          <p>
            We may update this policy to reflect legal, technical, or operational changes. Updated versions are posted on this page with a revised date.
          </p>
          <p className="text-sm text-slate-400 mt-3">Last updated: March 30, 2026</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
