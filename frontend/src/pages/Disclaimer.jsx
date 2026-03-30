import Seo from '../components/Seo';

const Disclaimer = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Seo
        title="Disclaimer | CyberRescue"
        description="CyberRescue disclaimer covering educational use, external links, and limitation of liability."
        path="/disclaimer"
      />

      <h1 className="text-4xl font-extrabold text-white mb-6">Disclaimer</h1>

      <div className="space-y-6 text-slate-300 leading-8">
        <section className="card">
          <h2 className="text-2xl font-bold text-white mb-2">Educational Information Only</h2>
          <p>
            CyberRescue content is general educational guidance and should not be treated as legal advice, financial advice, or guaranteed incident-response instruction for every situation.
          </p>
        </section>

        <section className="card">
          <h2 className="text-2xl font-bold text-white mb-2">No Guarantee of Outcomes</h2>
          <p>
            Cyber incidents vary significantly. We do not guarantee prevention of attacks, recovery of funds, or full account restoration in all cases.
          </p>
        </section>

        <section className="card">
          <h2 className="text-2xl font-bold text-white mb-2">Third-Party Websites</h2>
          <p>
            We link to official services and resources for convenience. We do not control third-party websites and are not responsible for their content, policies, or availability.
          </p>
        </section>

        <section className="card">
          <h2 className="text-2xl font-bold text-white mb-2">Emergency Situations</h2>
          <p>
            If you are facing active fraud or immediate risk, contact your bank, telecom provider, platform support, and local cybercrime authorities without delay.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Disclaimer;
