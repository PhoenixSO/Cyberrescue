import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#06101d] border-t border-slate-800 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-3">CyberRescue</h3>
            <p className="text-slate-400 text-sm leading-6">
              Practical cyber safety education for families, students, and small teams. Learn to prevent scams, recover faster, and report incidents confidently.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Main Sections</h3>
            <div className="space-y-2 text-sm">
              <Link to="/learning" className="block text-slate-400 hover:text-cyan-300">Learning Center</Link>
              <Link to="/tools" className="block text-slate-400 hover:text-cyan-300">Tools & Resources</Link>
              <Link to="/hacked" className="block text-slate-400 hover:text-cyan-300">What To Do If Hacked</Link>
              <Link to="/reporting" className="block text-slate-400 hover:text-cyan-300">Report Cybercrime</Link>
              <Link to="/articles" className="block text-slate-400 hover:text-cyan-300">Cyber Safety Articles</Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Trust & Legal</h3>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block text-slate-400 hover:text-cyan-300">About Us</Link>
              <Link to="/contact" className="block text-slate-400 hover:text-cyan-300">Contact Us</Link>
              <Link to="/privacy" className="block text-slate-400 hover:text-cyan-300">Privacy Policy</Link>
              <Link to="/terms" className="block text-slate-400 hover:text-cyan-300">Terms & Conditions</Link>
              <Link to="/disclaimer" className="block text-slate-400 hover:text-cyan-300">Disclaimer</Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 text-center">
          <p className="text-slate-400 text-sm">&copy; {new Date().getFullYear()} CyberRescue. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
