import Seo from '../components/Seo';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Seo
        title="Terms & Conditions | CyberRescue"
        description="Read the terms and conditions for using CyberRescue educational content and tools."
        path="/terms"
      />

      <h1 className="text-4xl font-extrabold text-white mb-6">Terms & Conditions</h1>
      <div className="space-y-6 text-slate-300 leading-8">
        <section className="card">
          <h2 className="text-2xl font-bold text-white mb-2">Use of Content</h2>
          <p>
            CyberRescue provides educational cybersecurity content for informational purposes. You may read and share links to our content, but you may not republish full content without permission.
          </p>
        </section>

        <section className="card">
          <h2 className="text-2xl font-bold text-white mb-2">No Professional Relationship</h2>
          <p>
            Using this website does not create a legal, forensic, or emergency-response relationship. For urgent incidents involving financial loss or safety risk, contact official authorities immediately.
          </p>
        </section>

        <section className="card">
          <h2 className="text-2xl font-bold text-white mb-2">User Conduct</h2>
          <p>
            You agree not to misuse forms, submit harmful content, attempt unauthorized access, or interfere with the website's normal operation.
          </p>
        </section>

        <section className="card">
          <h2 className="text-2xl font-bold text-white mb-2">Changes to Terms</h2>
          <p>
            We may update these terms as the website evolves. Continued use of the site after updates indicates acceptance of the revised terms.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
