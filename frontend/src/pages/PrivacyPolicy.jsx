import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-gray-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-cardBg border border-gray-800 rounded-2xl p-8 sm:p-12 shadow-2xl"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-8 border-b border-gray-800 pb-6">
          Privacy <span className="text-neonGreen">Policy</span>
        </h1>
        
        <div className="space-y-8 text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>
              Welcome to Cyberrescue. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please navigate through our educational resources.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p>
              <strong>Personal Information:</strong> We do not actively collect personal information from you unless you voluntarily provide it (which is currently not required for any core feature of this platform).
            </p>
            <p className="mt-2">
              <strong>Data Breach Simulator:</strong> The email addresses you enter into the Data Breach Simulator are used strictly for the purpose of the simulation request. We do not store, log, or share these emails. The backend processes the string ephemerally to return a simulated response.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Use of Cookies and Tracking</h2>
            <p>
              Cyberrescue may use essential cookies to ensure the basic functionality of the website. If we integrate third-party services (such as Google AdSense for displaying advertisements), those services may use cookies and web beacons to collect non-personal data about your visits to provide relevant advertisements. 
            </p>
            <p className="mt-2">
              You can choose to disable cookies through your individual browser options.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Third-Party Links</h2>
            <p>
              Our website contains links to other websites, tools, and platforms (such as the national cybercrime reporting portal or recommended security tools). We are not responsible for the privacy practices or the content of these third-party sites. We encourage you to read their privacy policies before providing them with any personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.
            </p>
          </section>

          <p className="text-sm text-gray-500 mt-12 pt-8 border-t border-gray-800">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
