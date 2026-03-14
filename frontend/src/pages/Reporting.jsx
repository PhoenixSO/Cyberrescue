import { motion } from 'framer-motion';
import { Phone, AlertOctagon, FileText, ExternalLink, ShieldCheck, Landmark } from 'lucide-react';

const Reporting = () => {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block p-4 bg-purple-900/20 rounded-full border border-purple-500/30 mb-6"
        >
          <AlertOctagon className="h-12 w-12 text-purple-500" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-4"
        >
          Report a <span className="text-purple-500">Cyber Crime</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto"
        >
          If you are a victim of a cybercrime, it is crucial to report it immediately. Reporting helps authorities track down criminals and prevent future attacks.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Important Helplines */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-1 space-y-6"
        >
          <div className="bg-gradient-to-b from-blue-900/40 to-[#0A1224] border border-blue-900/50 rounded-2xl p-8 sticky top-24">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Phone className="h-6 w-6 text-neonGreen mr-3" />
              Emergency Helplines
            </h2>
            
            <div className="space-y-6">
              <div className="p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-neonGreen transition-colors">
                <p className="text-sm text-gray-400 uppercase tracking-widest mb-1">National Cyber Helpline</p>
                <p className="text-4xl font-black text-white tracking-widest text-center py-2 text-neonGreen drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]">
                  1930
                </p>
                <p className="text-xs text-gray-500 text-center mt-2">Dial immediately for financial frauds</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                  <span className="text-gray-300">Police Emergency</span>
                  <span className="font-bold text-white">112</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                  <span className="text-gray-300">Women Helpline</span>
                  <span className="font-bold text-white">1091</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Child Helpline</span>
                  <span className="font-bold text-white">1098</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Steps to Report */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <div className="card">
            <div className="flex items-center space-x-4 mb-8">
              <Landmark className="h-8 w-8 text-white" />
              <h2 className="text-3xl font-bold text-white">Reporting via National Portal (India)</h2>
            </div>
            
            <p className="text-gray-400 mb-8 text-lg">
              The Government of India has established a centralized portal for reporting cybercrimes. Follow these steps to file an official complaint.
            </p>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
              
              {/* Step 1 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group md:mx-auto">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-darkBg bg-purple-500 group-hover:bg-neonGreen group-hover:shadow-[0_0_15px_rgba(0,255,65,0.6)] text-white font-bold shrink-0 md:order-1 transition-colors z-10">
                  1
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-4 rounded-xl border border-gray-800 bg-gray-900 shadow-lg ml-4 md:ml-0 md:mr-6 group-hover:border-gray-600 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-2">Preserve Evidence</h3>
                  <p className="text-gray-400 text-sm">Do not delete any emails, messages, or call logs. Take screenshots of fraudulent transactions, fake profiles, or abusive messages. Ensure URLs are visible.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-center justify-between md:justify-normal group md:mx-auto">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-darkBg bg-purple-500 group-hover:bg-neonGreen group-hover:shadow-[0_0_15px_rgba(0,255,65,0.6)] text-white font-bold shrink-0 md:order-1 md:translate-x-1/2 transition-colors z-10">
                  2
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-4 rounded-xl border border-gray-800 bg-gray-900 shadow-lg ml-4 md:ml-6 group-hover:border-gray-600 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-2">Visit the Portal</h3>
                  <p className="text-gray-400 text-sm">Go to the official National Cyber Crime Reporting Portal at <a href="https://cybercrime.gov.in" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300">cybercrime.gov.in</a>.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group md:mx-auto">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-darkBg bg-purple-500 group-hover:bg-neonGreen group-hover:shadow-[0_0_15px_rgba(0,255,65,0.6)] text-white font-bold shrink-0 md:order-1 transition-colors z-10">
                  3
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-4 rounded-xl border border-gray-800 bg-gray-900 shadow-lg ml-4 md:ml-0 md:mr-6 group-hover:border-gray-600 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-2">Select Category</h3>
                  <p className="text-gray-400 text-sm">Choose either 'Report Women/Child Related Crime' or 'Report Other Cyber Crime' (for financial fraud, hacking, etc.)</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex items-center justify-between md:justify-normal group md:mx-auto">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-darkBg bg-purple-500 group-hover:bg-neonGreen group-hover:shadow-[0_0_15px_rgba(0,255,65,0.6)] text-white font-bold shrink-0 md:order-1 md:translate-x-1/2 transition-colors z-10">
                  4
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-4 rounded-xl border border-gray-800 bg-gray-900 shadow-lg ml-4 md:ml-6 group-hover:border-gray-600 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-2">Register & File</h3>
                  <p className="text-gray-400 text-sm">Create an account using your mobile number, fill in incident details, upload the preserved evidence (screenshots/PDFs), and submit.</p>
                </div>
              </div>

               {/* Step 5 */}
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group md:mx-auto">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-darkBg bg-purple-500 group-hover:bg-neonGreen group-hover:shadow-[0_0_15px_rgba(0,255,65,0.6)] text-white font-bold shrink-0 md:order-1 transition-colors z-10">
                  5
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-4 rounded-xl border border-gray-800 bg-gray-900 shadow-lg ml-4 md:ml-0 md:mr-6 group-hover:border-gray-600 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-2">Track Complaint</h3>
                  <p className="text-gray-400 text-sm">Save your acknowledgment number. You can use it to track the status of your complaint on the portal.</p>
                </div>
              </div>

            </div>

            <div className="mt-12 text-center">
              <a 
                href="https://cybercrime.gov.in" 
                target="_blank" 
                rel="noreferrer"
                className="btn-primary inline-flex items-center"
              >
                <ExternalLink className="mr-2 h-5 w-5" /> Visit cybercrime.gov.in
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Reporting;
